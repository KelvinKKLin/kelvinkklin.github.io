// Import Google Tag Manager script.
function generateGoogleImportTagScripts(){
    var googleImportTagScript = document.createElement("script");
    googleImportTagScript.async = true;
    googleImportTagScript.src = "https://www.googletagmanager.com/gtag/js?id=UA-141532868-1";
    return googleImportTagScript;
}

// Generate Google Analytics script.
function generateGoogleAnalyticsScript(){
    var loadGoogleAnalyticsScript = document.createElement("script");
    loadGoogleAnalyticsScript.type = "text/javascript";
    loadGoogleAnalyticsScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-141532868-1');
    `;
    return loadGoogleAnalyticsScript;
}

// Attach Google Analytics scripts to the header.
function attachHeaders(){
    document.getElementsByTagName("head")[0].appendChild(generateGoogleImportTagScripts());
    document.getElementsByTagName("head")[0].appendChild(generateGoogleAnalyticsScript());
}

// Here is the "DO NOT TRACK" parsing logic.
if (window.doNotTrack || navigator.doNotTrack || navigator.msDoNotTrack || 'msTrackingProtectionEnabled' in window.external) {
    if (window.doNotTrack == "1" || navigator.doNotTrack == "yes" || navigator.doNotTrack == "1" || navigator.msDoNotTrack == "1" || window.external.msTrackingProtectionEnabled()) {
        // Do Not Track is enabled. Do not load analytics script.
    } else {
        // Do Not Track is disabled. Load analytics script.
        attachHeaders();
    }
} else {
    attachHeaders();
}