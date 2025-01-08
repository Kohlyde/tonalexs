# PowerShell script to retrieve emails and generate an HTML document with dynamic color schemes

$Outlook = New-Object -ComObject Outlook.Application
$Namespace = $Outlook.GetNamespace("MAPI")

# Email account credentials
$emailAddresses = @("Jsnchase@gmail.com", "Jsnchase@outlook.com", "brandy@rentalsinboise.com", "spencer@rentalsinboise.com", "deanna@rentalsinboise.com", "rmainfo@rentalsinboise.com", "jackie@rentalsinboise.com", "kstretch@ifhcidaho.org", "donotreply@rentalsinboise.com", "prichards@ifhcidaho.org")
$folderPath = "Inbox"

# Retrieve emails from specified accounts and folders
$emails = @()
foreach ($email in $emailAddresses) {
    $folder = $Namespace.Folders.Item($email).Folders.Item($folderPath)
    $emails += $folder.Items
}

# Start HTML document
$htmlContent = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Exhibit</title>
    <style>
        .hljs{background:#000;color:#f8f8f8}.hljs-comment,.hljs-quote{color:#aeaeae;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-type{color:#e28964}.hljs-string{color:#65b042}.hljs-subst{color:#daefa3}.hljs-regexp,.hljs-link{color:#e9c062}.hljs-title,.hljs-section,.hljs-tag,.hljs-name{color:#89bdff}.hljs-title.class_,.hljs-class .hljs-title,.hljs-doctag{text-decoration:underline}.hljs-symbol,.hljs-bullet,.hljs-number{color:#3387cc}.hljs-params,.hljs-variable,.hljs-template-variable{color:#3e87e3}.hljs-attribute{color:#cda869}.hljs-meta{color:#8996a8}.hljs-formula{background-color:#0e2231;color:#f8f8f8;font-style:italic}.hljs-addition{background-color:#253b22;color:#f8f8f8}.hljs-deletion{background-color:#420e09;color:#f8f8f8}.hljs-selector-class{color:#9b703f}.hljs-selector-id{color:#8b98ab}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}
        .spensor-email-container { display: flex; border: 1px solid #000; padding: 20px; }
        .spensor-email-left { width: 50%; padding-right: 10px; }
        .spensor-email-right { width: 50%; display: flex; flex-direction: column; }
        .spensor-email-right pre { margin: 5px 0; }
        .spensor-dropdown, .spensor-law-breakdown, .spensor-conviction-points { margin: 10px 0; padding: 10px; }
        .spensor-email-left, .spensor-email-right { padding: 10px; }
        pre { border: 1px solid #ccc; padding: 10px; }
    </style>
</head>
<body>
<h1>Email Exhibit</h1>
<div id="email-wrapper">
"@

# Loop through emails and create a preformatted code block for each email with dynamic color schemes
$emailIndex = 1001
foreach ($email in $emails) {
    $emailSubject = $email.Subject
    $emailSender = $email.SenderEmailAddress
    $emailDatetime = $email.SentOn.ToString("yyyy-MM-ddTHH:mm:ss")

    # Determine background color based on sender domain
    $backgroundColor = if ($emailSender -match "rentalsinboise.com") {
        "background-color:#000;"  # Black for rentalsinboise.com
    } elseif ($emailSender -match "gmail.com|outlook.com|ifhcidaho.org") {
        "background-color:#fff;"  # White for Gmail, Outlook, and IFHC
    } else {
        "background-color:#fff;"  # Default white background
    }

    # Apply unique CSS classes for Spencer Henderson as an example
    $uniqueClassPrefix = if ($emailSender -match "spencer") { "spensor-" } else { "default-" }

    # Generate unique ID based on email details
    $uniqueID = "Email-Exhibit-FW-$($emailIndex++)-$($emailSender.Split('@')[0])-$($emailDatetime)"

    # Start HTML content for email display with dynamic styling
    $htmlContent += @"
    <div class="spensor-email-container" style="$backgroundColor">
        <div class="spensor-email-left">
            <h3 class="$($uniqueClassPrefix)hljs-title">$($emailSubject)</h3>
            <pre id="$uniqueID" class="$($uniqueClassPrefix)hljs hljs-string">$($email.Body)</pre>
        </div>
        <div class="spensor-email-right">
            <div class="spensor-dropdown">
                <select class="$($uniqueClassPrefix)hljs-keyword">
                    <option value="idaho-statute-1" class="$($uniqueClassPrefix)hljs-string">Idaho Statute 52.367</option>
                    <option value="idaho-statute-2" class="$($uniqueClassPrefix)hljs-string">Idaho Statute 52.568</option>
                    <option value="idaho-statute-3" class="$($uniqueClassPrefix)hljs-string">Idaho Statute 53.678</option>
                </select>
            </div>
            <div class="spensor-law-breakdown">
                <div class="$($uniqueClassPrefix)hljs-title">Points of Conviction</div>
                <pre id="points-of-conviction" class="$($uniqueClassPrefix)hljs hljs-comment">[Placeholder: Points of law to be examined]</pre>
            </div>
            <div class="spensor-law-breakdown">
                <div class="$($uniqueClassPrefix)hljs-title">What was broken</div>
                <pre id="what-was-broken" class="$($uniqueClassPrefix)hljs hljs-deletion">[Placeholder: Points of law broken]</pre>
            </div>
            <div class="spensor-conviction-points">
                <div class="$($uniqueClassPrefix)hljs-title">Unequivocal Argument</div>
                <pre id="unequivocal-argument" class="$($uniqueClassPrefix)hljs hljs-emphasis">[Placeholder: Argument goes here]</pre>
            </div>
        </div>
    </div>
"@
}

# End HTML document
$htmlContent += @"
</body>
</html>
"@

# Output the HTML content to a file
$htmlContent | Out-File "C:\path\to\your\output\EmailExhibit.html" -Encoding UTF8
