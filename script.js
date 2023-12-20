//your JS code here. If required.
 window.onload = function () {
      // Get browser information
      const browserName = navigator.appName;
      const version = navigator.appVersion;

      // Display the information in the browser-info div
      const browserInfoDiv = document.getElementById('browser-info');
      browserInfoDiv.textContent = "You are using " + browserName + " version " + version;
    }