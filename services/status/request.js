async function getSalesforceStatus() {
    const searchTerm = document.getElementById("instance-search").value;
    console.log('the instance Id is '+ searchTerm);
  
    const endpoint = `https://api.status.salesforce.com/v1/instances/${searchTerm}/status/preview`;
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error('API request failed');
      }
      const data = await response.json();
  
      // Clear previous search results
      const container = document.getElementById('container');
      container.innerHTML = '';
  
      // Render new search results
      const key = document.createElement('h1');
      const status = document.createElement('p');
      const releaseVersion = document.createElement('p');
      const environement = document.createElement('p');
      const region = document.createElement('p');

      
      
      key.innerHTML = `Instance: ${data.key}`;
      status.innerHTML = `Status: ${data.status}`;
      releaseVersion.innerHTML = `Release version: ${data.releaseVersion}`;
      environement.innerHTML = `Environment Type: ${data.environment}`
      region.innerHTML = `Your instnace is located in: ${data.location}`

      container.appendChild(status);
      container.appendChild(releaseVersion);
      container.appendChild(environement);
      container.appendChild(region);
    } catch (error) {
      console.error(error);
      // Display error message to the user or provide additional information in the console
    }
  }
  

