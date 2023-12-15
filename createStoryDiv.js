function createProductDiv(des, t, v, sc, comc, l, d) {
    // Create the main div with class "product"
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.setAttribute("value", v);
    productDiv.setAttribute("onclick", "getValue(this);");
      
    // Create the "desc" div
    const descDiv = document.createElement('div');
    descDiv.className = 'desc';
    descDiv.innerHTML = des;
  
    // Create the "title" div with an <h4> element inside
    const titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    const titleHeading = document.createElement('h4');
    const titleDate = document.createElement('p');
    titleDate.innerHTML = d;
    titleHeading.innerHTML = t;
    titleDiv.appendChild(titleHeading);
    titleDiv.appendChild(titleDate);
  
    // Create the "status" div
    const statusDiv = document.createElement('div');
    statusDiv.className = 'status';
  
    // Create the "comment" div with an image and a <p> element inside
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    const commentImg = document.createElement('img');
    commentImg.src = 'images/comment-alt-dots.png';
    const commentCount = document.createElement('p');
    commentCount.textContent = comc;
    commentDiv.appendChild(commentImg);
    commentDiv.appendChild(commentCount);
  
    // Create the "share" div with an image and a <p> element inside
    const shareDiv = document.createElement('div');
    shareDiv.className = 'share';
    const shareImg = document.createElement('img');
    shareImg.src = 'images/star (2).png';
    const shareCount = document.createElement('p');
    shareCount.textContent = sc;
    shareDiv.appendChild(shareImg);
    shareDiv.appendChild(shareCount);
  
    // Create the "rate" div with an image and a <p> element inside
    const rateDiv = document.createElement('div');
    rateDiv.className = 'rate';
    const rateImg = document.createElement('img');
    rateImg.src = 'images/star (2).png';
    const rateValue = document.createElement('p');
    rateValue.textContent = l;
    rateDiv.appendChild(rateImg);
    rateDiv.appendChild(rateValue);
  
    // Append the created elements to the appropriate parent elements
    statusDiv.appendChild(commentDiv);
    statusDiv.appendChild(shareDiv);
    statusDiv.appendChild(rateDiv);
  
    productDiv.appendChild(descDiv);
    productDiv.appendChild(titleDiv);
    productDiv.appendChild(statusDiv);
  
    return productDiv;
  }





  // function getValue(obj){
  //   var clickedValue = obj.getAttribute("value");
  //   console.log(clickedValue);

  //   // console.log(clickedValue);
  //   // Send the value to the PHP file using AJAX
  //   var xhr = new XMLHttpRequest();
  //   xhr.open("POST", "get_stories.php", true);
  //   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  //   xhr.onreadystatechange = function() {
  //     if (xhr.readyState === 4 && xhr.status === 200) {
  //       // Handle the response from the PHP file
  //       var response = xhr.responseText;
  //       console.log(response); 
  //       // window.location.href = "index.html"; 
  //       window.location.href = "index.html?response=" + encodeURIComponent(response) + "&value=" + encodeURIComponent(clickedValue);
  //     }
  //   };
  //   console.log(clickedValue);
  //   xhr.send("clickedValue=" + encodeURIComponent(clickedValue));
  // };

  function getValue(obj) {
    var clickedValue = obj.getAttribute("value");
    console.log(clickedValue);
    
    // Append the value to the URL and redirect to index.html
    window.location.href = "index.html?value=" + encodeURIComponent(clickedValue);
  }