setTimeout(function () {
  document.getElementById("input").value = window.location.href.split("#")[1];
  document.getElementById("button").click();
}, 1e3);

var downloadClicked = false;
function checkDownload(){
    if(document.body.innerText.indexOf("Download") > -1){
        downloadClicked = true;
        document.querySelector("#download > a").click();
    }
    if(!downloadClicked){
        setTimeout(checkDownload, 1e3);
    }
}
checkDownload();
