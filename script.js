document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    console.log(file)
    const reader = new FileReader();
    if (file) {
      
  
      reader.onload = function(event) {
        const imageUrl = event.target.result;
  
        
  
        // Convert the image to JSON (optional)
        const imageData = {
          name: file.name,
          type: file.type,
          size: file.size,
          dataUrl: imageUrl
        };
        const jsonData = JSON.stringify(imageData);
        
        console.log(jsonData); // You can send this JSON data to server or use it as needed
        // Display the image on the page
        data = JSON.parse(jsonData);
        const imageElement = document.createElement('img');
        imageElement.src = data.dataUrl;
        imageElement.style.maxWidth = '100%';
        document.getElementById('imageContainer').innerHTML = '';
        document.getElementById('imageContainer').appendChild(imageElement);
    };
  
      reader.readAsDataURL(file);
    }
  });
  