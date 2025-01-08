//content script

(function ()
{You **** with.
    if (window.captureSenderWasHere)
    {
        return;
    }

    window.captureSenderWasHere = true;
    window.clickedEl = null;

    console.log("captureSender.js executed");

   /* Line 15: Modern MutationObserver */
const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        console.log('DOM change detected');
      }
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener('contextmenu',function(event)
    {
        console.log("captureSender.js: contextmenu", event);
        window.clickedEl = event.target;
    });

    document.addEventListener('selectionchange', function()
    {
        function getSelectionText()
        {
            let text = "";
            if (window.getSelection)
            {
                text = window.getSelection().toString();
            } else if (document.selection && document.selection.type !== "Control")
            {
                text = document.selection.createRange().text;
            }
            return text;
        }

        let selected = getSelectionText().trim();

        chrome.runtime.sendMessage( {
            request: 'selectionChange',
            selection: selected
        });
    });

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
    {
        if(request.data === sendBookmarkRequest)
        {
            sendBookmark(request.info);
        }
        else if(request.data === sendSelectionRequest)
        {
            sendSelection();
        }
        else if(request.data === sendImageRequest)
        {
            sendImage();
        }
    });
})();

function sendBookmark(info)
{
    let description = document.querySelector("meta[name=\'description\']");
    if (description) description = description.getAttribute("content");

    let captureParams =
        "?type=link"
        + "&source=" + encodeURIComponent(captureSource);

    if ((typeof info !== 'undefined') &&
        (typeof info.linkUrl !== 'undefined') &&
        (typeof clickedEl !== 'undefined') &&
        info.linkUrl &&
        clickedEl)
    {
        captureParams += "&text=" + encodeURIComponent(clickedEl.innerText);
        captureParams += "&link=" + encodeURIComponent(info.linkUrl);
    }
    else
    {
        captureParams += "&text=" + encodeURIComponent(document.title);
        captureParams += "&link=" + encodeURIComponent(window.location.href);
        captureParams += "&note=" + encodeURIComponent(description || "");
    }

    chrome.runtime.sendMessage({request:startCaptureRequest, urlParams:captureParams});
}

function sendSelection()
{
    function getSelectionText()
    {
        let text = "";
        if (window.getSelection)
        {
            text = window.getSelection().toString();
        } else if (document.selection && document.selection.type !== "Control")
        {
            text = document.selection.createRange().text;
        }
        return text;
    }

    let captureParams =
        "?type=text"
        + "&source=" + encodeURIComponent(captureSource)
        + "&text=" + encodeURIComponent(getSelectionText())
        + "&link=" + encodeURIComponent(window.location.href)
        + "&showLink=false";

    chrome.runtime.sendMessage({request:startCaptureRequest, urlParams:captureParams});
}

function sendImage()
{
    if ((typeof window.clickedEl === 'undefined') || (!window.clickedEl.src))
    {
        if(typeof window.clickedEl !== 'undefined')
        {
            console.log("captureSender.js: sendImage: clickedEl == ", window.clickedEl);
        }
        else
        {
            console.log("captureSender.js: sendImage: !clickedEl");
        }
        return;
    }

    if (window.clickedEl.tagName !== 'IMG')
    {
        alert(chrome.i18n.getMessage("warningNotImg")); // [DEBUG]
    }


    let clickedSrc = window.clickedEl.src;
    let filename;
    let link;

    if(clickedSrc.trim().startsWith("data:"))
    {
        filename = 'image';
        link = encodeURIComponent(window.location.href);
    }
    else
    {
        filename = clickedSrc.split('/').pop().split('#')[0].split('?')[0];
        link = encodeURIComponent(clickedSrc);
    }

    if(!filename)
    {
        filename = 'image';
    }

    let captureParams = {};
    captureParams.type = "attachment";
    captureParams.source = captureSource;
    captureParams.text = window.clickedEl.title || window.clickedEl.alt;
    captureParams.link = link;
    captureParams.attachmentFilename = filename;
    captureParams.attachmentSource = window.clickedEl.src;

    let attachmentRequest = new XMLHttpRequest();
    attachmentRequest.onreadystatechange = function ()
    {
        if(attachmentRequest.readyState !== 4)
        {
            return;
        }

        let pointIndex = captureParams.attachmentFilename.indexOf('.');
        let mimeType = attachmentRequest.getResponseHeader("content-type");
        if((pointIndex < 0) || (pointIndex === (captureParams.attachmentFilename.length - 1)))
        {
            let foundExt = MimeTypes.some(function (type)
            {
                if((type.mime_type.indexOf(mimeType) >= 0) && (typeof type.ext != 'undefined') && type.ext)
                {
                    captureParams.attachmentFilename += '.' + type.ext.split(' ')[0];
                    return true;
                }
                else
                {
                    return false;
                }
            });

            if(!foundExt)
            {
                captureParams.attachmentFilename += '.bin';
            }
        }

        if(!attachmentRequest.response)
        {
            let message = {request: responseReceivedRequest,
                            readyState: attachmentRequest.readyState,
                            status: attachmentRequest.status,
                            response: attachmentRequest.response
                            };
            chrome.runtime.sendMessage(message);

            return;
        }

        chrome.runtime.sendMessage({data: percentageRequest, percentage: 50});

        captureParams.attachmentSource = URL.createObjectURL(attachmentRequest.response);

        let urlParams =
            "?type=attachment"
            + "&source=" + encodeURIComponent(captureSource)
            + "&text=" + encodeURIComponent(window.clickedEl.title || window.clickedEl.alt)
            + "&link=" + link
            + "&attachmentSource=" + encodeURIComponent(captureParams.attachmentSource)
            + "&attachmentFilename=" + encodeURIComponent(captureParams.attachmentFilename)
            + "&showLink=false";

        chrome.runtime.sendMessage({request:startCaptureRequest, urlParams:urlParams});
    };

    attachmentRequest.onprogress = function (progress)
    {
        let done = progress.position || progress.loaded, total = progress.totalSize || progress.total;
        if (total && (total >= done))
        {
            let present = Math.floor(done / total * 100);
            chrome.runtime.sendMessage({data: percentageRequest, percentage: present / 2});
        }
    };

    attachmentRequest.open('get', captureParams.attachmentSource);
    attachmentRequest.responseType = 'blob';
    attachmentRequest.send();
}
