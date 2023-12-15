//Text editor toolbar options
var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['link'],
    ['blockquote'],
    ['image', 'video'],
    ['clean']
  ];
  
  //Activating text editor
  var quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
      toolbar: toolbarOptions,
      clipboard: {
        matchVisual: false // Disable Quill's default image/video handling
      }
    }
  });
  
  // Add a featured image Event
  var featuredImageInput = document.getElementById('featured-image-input');
  var featuredImageButton = document.getElementById('featured-image-button');
  var featuredImagePreview = document.getElementById('featured-image-preview');
  
  featuredImageButton.addEventListener('click', function () {
    featuredImageInput.click();
  });
  
  featuredImageInput.addEventListener('change', function (event) {
    var file = event.target.files[0];
  
    if (file) {
      var reader = new FileReader();
  
      reader.onload = function (e) {
        featuredImagePreview.innerHTML = '<img src="' + e.target.result + '" alt="Featured Image">';
        featuredImageButton.textContent = 'Change image';
      };
  
      reader.readAsDataURL(file);
    } else {
      featuredImagePreview.innerHTML = '';
      featuredImageButton.textContent = 'Add a featured image';
    }
  });
  
  
  //Article Preview Event
  var previewButton = document.getElementById('preview-button');
  // var previewModal = document.getElementById('preview-modal');
  // var previewClose = document.geElementsByClassName('close')[0];
  // var previewArticle = document.getElementById('preview-article');
  
  
  previewButton.addEventListener('click', function () {
    var featuredImageSrc = featuredImagePreview.querySelector('#featured-image-preview img')?.getAttribute('src');
    var title = document.getElementById('title-input').value;
    var content = quill.root.innerHTML;
  
    // Open preview in a new window or tab
    var previewWindow = window.open('', '_blank');
  
    // preview window style
    var previewHTML = `
        <html>
        <head>
          <title>Preview</title>
          <style>
            body {
              margin: 20px;
              font-family: Arial, sans-serif;
            }
  
            h2 {
              margin-bottom: 20px;
              text-align: center;
            }
    
            .preview-image {
              display: block;
              max-width: 100%;
              height: 350px;
              margin: 20px auto;
              margin-bottom: 10px;
              box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
              border-radius: 5px;
            }
    
            .article-text{
              display: block;
              width: 650px;
              margin: 0 auto;
              padding: 20px;
              border-radius: 5px;
              word-wrap: break-word;
            }
  
            .article-text div{
              text-align: left;
              width: 650px;
            }
  
          </style>
        </head>
        <body>
          <h2>${title}</h2>
          ${featuredImageSrc ? `<img src="${featuredImageSrc}" alt="Featured Image" class="preview-image">` : ''}
          <div class= "article-text">${content}</div>
        </body>
        </html>
      `;
  
    previewWindow.document.write(previewHTML);
    previewWindow.document.close();
  });