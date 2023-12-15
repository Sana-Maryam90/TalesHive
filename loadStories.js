function loadAll(){    //JS function to retrive response from php file in a jsom format
const productContainer = document.getElementById('storyContainer');
productContainer.innerHTML = "";

          fetch('fetch_all.php')
            .then(response => response.json())
            .then(data => {
                data.forEach(record => {
                let title = record.title;
                let Content = record.content.replace(/\n/g, "<br>");
                let dt = record.date;
                let val = record.s_id;
                let sh = record.shareCount;
                let cc = record.commentCount;
                let lc = record.likeCount;
                // console.log(val);
                const createdDiv = createProductDiv(Content, title, val, sh, cc, lc, dt);
                productContainer.appendChild(createdDiv);

                })
            })
            .catch(error => {
              console.error('Error:', error);
            });
}

function loadHorror(){
    const productContainer = document.getElementById('storyContainer');
    productContainer.innerHTML = "";

          fetch('fetchHorror.php')
            .then(response => response.json())
            .then(data => {
                data.forEach(record => {
                let title = record.title;
                let Content = record.content.replace(/\n/g, "<br>");
                let dt = record.date;
                let val = record.s_id;
                let sh = record.shareCount;
                let cc = record.commentCount;
                let lc = record.likeCount;
                // console.log(val);
                const createdDiv = createProductDiv(Content, title, val, sh, cc, lc, dt);
                productContainer.appendChild(createdDiv);
                })
            })
            .catch(error => {
              console.error('Error:', error);
            });
}

function loadComedy(){
    const productContainer = document.getElementById('storyContainer');
    productContainer.innerHTML = "";

          fetch('fetchComedy.php')
            .then(response => response.json())
            .then(data => {
                data.forEach(record => {
                let title = record.title;
                let Content = record.content.replace(/\n/g, "<br>");
                let dt = record.date;
                let val = record.s_id;
                let sh = record.shareCount;
                let cc = record.commentCount;
                let lc = record.likeCount;
                // console.log(val);
                const createdDiv = createProductDiv(Content, title, val, sh, cc, lc, dt);
                productContainer.appendChild(createdDiv);

                })
            })
            .catch(error => {
              console.error('Error:', error);
            });
}

function loadRomance(){
    const productContainer = document.getElementById('storyContainer');
    productContainer.innerHTML = "";

          fetch('fetchRomance.php')
            .then(response => response.json())
            .then(data => {
                data.forEach(record => {
                let title = record.title;
                let Content = record.content.replace(/\n/g, "<br>");
                let dt = record.date;
                let val = record.s_id;
                let sh = record.shareCount;
                let cc = record.commentCount;
                let lc = record.likeCount;
                // console.log(val);
                const createdDiv = createProductDiv(Content, title, val, sh, cc, lc, dt);
                productContainer.appendChild(createdDiv);

                })
            })
            .catch(error => {
              console.error('Error:', error);
            });
}

function loadAction(){
    const productContainer = document.getElementById('storyContainer');
    productContainer.innerHTML = "";

          fetch('fetchAction.php')
            .then(response => response.json())
            .then(data => {
                data.forEach(record => {
                let title = record.title;
                let Content = record.content.replace(/\n/g, "<br>");
                let dt = record.date;
                let val = record.s_id;
                // console.log(val);
                // const createdDiv = createProductDiv(Content, title, val);
                let sh = record.shareCount;
                let cc = record.commentCount;
                let lc = record.likeCount;
                // console.log(val);
                const createdDiv = createProductDiv(Content, title, val, sh, cc, lc, dt);
                productContainer.appendChild(createdDiv);

                })
            })
            .catch(error => {
              console.error('Error:', error);
            });
}

function loadScifi(){
    const productContainer = document.getElementById('storyContainer');
    productContainer.innerHTML = "";

          fetch('fetchscifi.php')
            .then(response => response.json())
            .then(data => {
                data.forEach(record => {
                let title = record.title;
                let Content = record.content.replace(/\n/g, "<br>");
                let dt = record.date;
                let val = record.s_id;
                let sh = record.shareCount;
                let cc = record.commentCount;
                let lc = record.likeCount;
                const createdDiv = createProductDiv(Content, title, val, sh, cc, lc, dt);
                productContainer.appendChild(createdDiv);

                })
            })
            .catch(error => {
              console.error('Error:', error);
            });
}

function loadThriller(){
    const productContainer = document.getElementById('storyContainer');
    productContainer.innerHTML = "";

          fetch('fetchThriller.php')
            .then(response => response.json())
            .then(data => {
                data.forEach(record => {
                let title = record.title;
                let Content = record.content.replace(/\n/g, "<br>");
                let dt = record.date;
                let val = record.s_id;
                // console.log(val);
                // const createdDiv = createProductDiv(Content, title, val);
                let sh = record.shareCount;
                let cc = record.commentCount;
                let lc = record.likeCount;
                // console.log(val);
                const createdDiv = createProductDiv(Content, title, val, sh, cc, lc, dt);
                productContainer.appendChild(createdDiv);

                })
            })
            .catch(error => {
              console.error('Error:', error);
            });
}

function loadDrama(){
    const productContainer = document.getElementById('storyContainer');
    productContainer.innerHTML = "";

          fetch('fetchDrama.php')
            .then(response => response.json())
            .then(data => {
                data.forEach(record => {
                let title = record.title;
                let Content = record.content.replace(/\n/g, "<br>");
                let dt = record.date;
                let val = record.s_id;
                // console.log(val);
                // const createdDiv = createProductDiv(Content, title, val);
                let sh = record.shareCount;
                let cc = record.commentCount;
                let lc = record.likeCount;
                // console.log(val);
                const createdDiv = createProductDiv(Content, title, val, sh, cc, lc, dt);
                productContainer.appendChild(createdDiv);

                })
            })
            .catch(error => {
              console.error('Error:', error);
            });
}