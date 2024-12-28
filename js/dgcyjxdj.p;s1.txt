# Add Metadata Versioning
function Add-MetadataVersion {
    param ([string]$filePath)
    if (Test-Path $filePath) {
        $metadata = Get-Content -Path $filePath | ConvertFrom-Json
        $metadata.Version = ($metadata.Version -as [int] + 1) -as [int]
        $metadata | ConvertTo-Json -Depth 3 | Set-Content -Path $filePath
        LogMessage "Metadata version updated for $filePath"
    } else {
        LogMessage "Metadata file not found: $filePath"
    }
}

# Multi-Domain Handling
function Process-MultipleDomains {
    param ([string[]]$domains, [string]$tags)
    foreach ($domain in $domains) {
        try {
            Main-Spider -domain $domain -tags $tags
            LogMessage "Successfully processed domain: $domain"
        } catch {
            LogMessage "Error processing domain $domain: $($_.Exception.Message)"
        }
    }
}

# Add Interest Tagging
function Add-InterestTags {
    param ([string]$filePath, [string[]]$tags)
    if (Test-Path $filePath) {
        $metadata = Get-Content -Path $filePath | ConvertFrom-Json
        $metadata.InterestTags = $tags
        $metadata | ConvertTo-Json -Depth 3 | Set-Content -Path $filePath
        LogMessage "Interest tags added to $filePath"
    } else {
        LogMessage "Metadata file not found: $filePath"
    }
}

# Enhanced Logging and Validation
function Validate-Dependencies {
    param ([string[]]$dependencies)
    foreach ($dep in $dependencies) {
        try {
            & pip show $dep | Out-Null
            LogMessage "Dependency verified: $dep"
        } catch {
            LogMessage "Dependency not found, attempting installation: $dep"
            Install-Dependencies
        }
    }
}

# Cleanup and Archiving
function Archive-Logs {
    param ([string]$logDir, [string]$archiveDir)
    if (-not (Test-Path -Path $archiveDir)) { New-Item -ItemType Directory -Path $archiveDir | Out-Null }
    $timestamp = (Get-Date -Format "yyyyMMdd_HHmm")
    Compress-Archive -Path "$logDir/*" -DestinationPath "$archiveDir/logs_$timestamp.zip" -Force
    LogMessage "Logs archived at $archiveDir/logs_$timestamp.zip"
}

# Main Execution for Multi-Domain and Features
function Main-Enhanced {
    param ([string[]]$domains, [string]$tags, [string]$archiveDir = "$baseDir/logs_archive")
    Process-MultipleDomains -domains $domains -tags $tags
    Archive-Logs -logDir "$baseDir/logs" -archiveDir $archiveDir
    Write-Host "Enhanced Spider Crawler system completed. Logs archived at $archiveDir"
}

# Execute enhanced functionality
Main-Enhanced -domains @("example.com", "testsite.org") -tags "crawler,metadata"
