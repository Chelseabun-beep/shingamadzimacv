document.getElementById('cv-form').addEventListener('submit', function(event) {
   event.preventDefault(); // Prevent page refresh
   const fileInput = document.getElementById('cv-upload');
   
   if (fileInput.files.length > 0) {
       alert("File selected: " + fileInput.files[0].name);
       // Implement further logic here if needed
   } else {
       alert("Please select a file to upload.");
   }
});