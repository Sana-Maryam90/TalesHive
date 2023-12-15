
const profilebutton = document.querySelector('.button-profile');
profilebutton.addEventListener('click', () => {
    var urlParams = new URLSearchParams(window.location.search);
    var useridparam = urlParams.get('userid');
    window.location.href = 'viewprofile.php?userid=' + encodeURIComponent(useridparam);
})














// Make an AJAX request to pass the userid to the PHP file
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'viewprofile.php?userid=' + encodeURIComponent(useridparam), true);

// xhr.onreadystatechange = function() {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     // Request successful
//     var response = xhr.responseText;
//     // console.log(response);
//   }
// };

// xhr.send();

