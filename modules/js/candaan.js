// candaan api untuk ganerate joke dalam bentuk img 
export default function getJoke(imgSelection) {
  fetch("https://candaan-api.vercel.app/api/image/random")
    .then(response => response.json())
    .then(json => {
      let image = document.getElementById(imgSelection);
      image.src = json.data.url;
      
      image.onclick = function() {
        let loadView = document.querySelector(".loading")
        loadView.classList.toggle("loadon")
        setTimeout(function() {
          loadView.classList.toggle("loadon")
        }, 1000);
      }
  });
}