fetch('Research.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error("File could not be fetched");
    }
    return response.text(); 
  })
  .then(data => {
    // Split the text file by new lines
    const lines = data.split('\n').map(line => line.trim()).filter(line => line !== ''); // Clean up lines
    const contentDiv = document.getElementById('content');

    for (let i = 0; i < lines.length; i += 2) { // Step over pairs of lines
      const writeUp = lines[i];           // First line: write-up
      const link = lines[i + 1] || '';    // Second line: link (if exists)

      // Append content dynamically
      const entryDiv = document.createElement('div');
      entryDiv.innerHTML = `
        <p>${writeUp}</p>
        ${link ? `<a href="${link}" target="_blank">Visit Link</a>` : ''}
      `;

      //styling each box
      entryDiv.classList.add('contentBox');

      contentDiv.appendChild(entryDiv);

      const linkElement = entryDiv.querySelector('a'); // Find the dynamically added <a> tag
      if (linkElement) {
        linkElement.classList.add('linkText');
      }
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
