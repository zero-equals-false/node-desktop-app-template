// Make a GET request to the API endpoint

function getSalesforceStatus() {
    // Make a GET request to the Salesforce status API endpoint
    
    fetch('https://api.status.salesforce.com/v1/instances/NA147/status/preview')
      .then(response => response.json()) // Parse response as JSON
      .then(data => {
        console.log(data)
        // Create HTML elements to render the response
        const container = document.getElementById('container');
        const status = document.createElement('h1');
        const releaseVersion = document.createElement('p');

        // Set the innerHTML of the HTML elements to the response data
        status.innerHTML = `Status: ${data.status}`;
        releaseVersion.innerHTML = `releaseVersion: ${data.releaseVersion}`;

        // Append the HTML elements to the container
        container.appendChild(status);
        container.appendChild(releaseVersion);
      })
      .catch(error => console.error(error)); // Log any errors to the console
  }

  // Call the function to display the results
//   getSalesforceStatus();