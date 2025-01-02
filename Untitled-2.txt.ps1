# Define the start of the HTML document with search functionality
$htmlStart = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Exhibit</title>
    <style>
        .hljs { background: #000; color: #f8f8f8 }
        .hljs-comment, .hljs-quote { color: #aeaeae; font-style: italic }
        .hljs-keyword, .hljs-selector-tag, .hljs-type { color: #e28964 }
        .hljs-string { color: #65b042 }
        .hljs-subst { color: #daefa3 }
        .hljs-regexp, .hljs-link { color: #e9c062 }
        .hljs-title, .hljs-section, .hljs-tag, .hljs-name { color: #89bdff }
        .hljs-title.class_, .hljs-class .hljs-title, .hljs-doctag { text-decoration: underline }
        .hljs-symbol, .hljs-bullet, .hljs-number { color: #3387cc }
        .hljs-params, .hljs-variable, .hljs-template-variable { color: #3e87e3 }
        .hljs-attribute { color: #cda869 }
        .hljs-meta { color: #8996a8 }
        .hljs-formula { background-color: #0e2231; color: #f8f8f8; font-style: italic }
        .hljs-addition { background-color: #253b22; color: #f8f8f8 }
        .hljs-deletion { background-color: #420e09; color: #f8f8f8 }
        .hljs-selector-class { color: #9b703f }
        .hljs-selector-id { color: #8b98ab }
        .hljs-emphasis { font-style: italic }
        .hljs-strong { font-weight: bold }

        .email-container { border: 1px solid thin; padding: 10px; margin-bottom: 15px; }
        .email-body { float: left; width: 50%; padding: 5px; }
        .email-law { float: right; width: 50%; padding: 5px; }
        .pre-code-box { border: 1px solid #ccc; padding: 5px; margin: 5px; }
        .pre-code-box div { margin: 10px 0; }
        #searchBox { margin-bottom: 20px; padding: 10px; width: 100%; }
        #searchResults { margin-top: 20px; }

    </style>
    <script>
        // Function to search email content for @rentalsinboise.com
        function searchEmails() {
            var input = document.getElementById('searchBox').value.toLowerCase();
            var emails = document.getElementsByClassName('email-container');
            var results = [];

            // Hide all emails initially
            for (var i = 0; i < emails.length; i++) {
                emails[i].style.display = 'none';
            }

            // Loop through the emails and show those that match the search query
            for (var i = 0; i < emails.length; i++) {
                var senderEmail = emails[i].getElementsByClassName('sender-email')[0].innerText.toLowerCase();
                var recipientEmails = emails[i].getElementsByClassName('recipient-emails')[0].innerText.toLowerCase();

                if (senderEmail.includes(input) || recipientEmails.includes(input)) {
                    emails[i].style.display = 'block';
                    results.push(emails[i]);
                }
            }

            // Show a message if no results found
            var searchResults = document.getElementById('searchResults');
            if (results.length === 0) {
                searchResults.innerHTML = 'No matching emails found for ' + input;
            } else {
                searchResults.innerHTML = results.length + ' matching email(s) found for "' + input + '"';
            }
        }
    </script>
</head>
<body>
    <h1>Email Exhibits</h1>
    <input type="text" id="searchBox" onkeyup="searchEmails()" placeholder="Search for emails from @rentalsinboise.com..." />

    <div id="searchResults"></div>
"@

# Function to get emails from Outlook
function Get-OutlookEmails {
    # Adjust this to get the emails from the correct folder and date range
    $outlook = New-Object -ComObject Outlook.Application
    $namespace = $outlook.GetNamespace("MAPI")
    $folder = $namespace.GetDefaultFolder(6) # 6 = Inbox
    $items = $folder.Items
    $items.Sort("[ReceivedTime]", $true) # Sort by received time
    $startDate = (Get-Date).AddMonths(-1) # Filter emails from the past month
    $filteredItems = $items | Where-Object { $_.ReceivedTime -gt $startDate }
    return $filteredItems
}

# Get emails and process each one
$emails = Get-OutlookEmails
$emailHtmlContent = ""

foreach ($email in $emails) {
    $senderEmail = $email.SenderEmailAddress
    $sentDate = $email.SentOn.ToString("dddd, MMMM dd yyyy h:mm tt")
    $emailBody = $email.Body
    $recipientEmails = $email.To

    # Only include emails with @rentalsinboise.com in sender or recipient addresses
    if ($senderEmail -like "*@rentalsinboise.com*" -or $recipientEmails -like "*@rentalsinboise.com*") {

        # Constructing a unique ID for the email exhibit
        $uniqueId = "Email-Exhibit-FW-1001-$($senderEmail.Split('@')[0])-$($email.SentOn.ToString("yyyy-MM-ddTHH:mm:ss"))"

        # Create the HTML structure for this email
        $emailHtmlContent += @"
        <div class="email-container">
            <div class="email-body">
                <pre class="hljs" id="$uniqueId">
                    <div><strong>Sent: $sentDate</strong></div>
                    <div><strong>From: <span class="sender-email">$senderEmail</span></strong></div>
                    <div><strong>To: <span class="recipient-emails">$recipientEmails</span></strong></div>
                    <div><strong>Subject: $($email.Subject)</strong></div>
                    <div><strong>Body:</strong></div>
                    <div>$emailBody</div>
                </pre>
            </div>

            <div class="email-law">
                <div class="pre-code-box">
                    <strong>Select Law:</strong>
                    <select id="lawDropdown">
                        <option>Idaho Statute 52.367</option>
                        <option>Federal Statute XYZ</option>
                        <option>Placeholder Law 3</option>
                    </select>
                </div>

                <div class="pre-code-box">
                    <strong>Points to Convict:</strong>
                    <div id="convictionPoints">Point 1, Point 2, Point 3</div>
                </div>

                <div class="pre-code-box">
                    <strong>Broken Laws:</strong>
                    <div id="brokenLaws">Law A, Law B, Law C</div>
                </div>

                <div class="pre-code-box">
                    <strong>Unequivocal Argument:</strong>
                    <div id="unequivocalArgument">Placeholder for the unequivocal argument.</div>
                </div>
            </div>
        </div>
        <br />
"@
    }
}

# Ending the HTML document
$htmlEnd = @"
</body>
</html>
"@

# Combine the HTML parts together
$htmlOutput = $htmlStart + $emailHtmlContent + $htmlEnd

# Save the output to an HTML file
$htmlFilePath = "C:\Path\to\output\email_exhibit.html"
$htmlOutput | Out-File -FilePath $htmlFilePath

Write-Host "HTML file generated at: $htmlFilePath"
