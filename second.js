function displayImage(input) {
    if (input.files && input.files[0]) {
      let reader = new FileReader();
  
      reader.onload = function(e) {
        let image = new Image();
        image.src = e.target.result;
  
        image.onload = function() {
          if (image.width <= 512 && image.height <= 512) {
            document.getElementById('preview').src = e.target.result;
            document.getElementById('imageSize').innerText = `Image Size: ${image.width} x ${image.height} pixels`;
          } else {
            alert('Image size must be 512x512 pixels or smaller.');
          }
        };
      };
  
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  document.getElementById('profileImage').addEventListener('change', function() {
    displayImage(this);
  });  