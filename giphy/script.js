const api = 'https://api.giphy.com/v1/gifs/search?api_key=tSIgTm4l4Mbx1NmDiGugpLDZiEdoiqyQ';

const searchGifTxt = document.querySelector("#searchGifTxt");
const gifBtn = document.querySelector("#gifBtn");
const gifsContainer = document.querySelector("#gifsContainer");
const rating = document.querySelector("#rating");

const limit = document.querySelector("#limit");
const limitNum = document.querySelector("#limitNum");

limitNum.innerHTML = limit.value;
limit.oninput = function() {
  limitNum.innerHTML = this.value;
};

gifBtn.onclick = getGiphyResults;

// I FOUND THIS ON STACK OVERFLOW BECAUSE MY FORM KEPT RESETTING AND SO THE IMAGES NEVER ACTUALLY POPULATED

var form = document.getElementById("gifForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

function getGiphyResults(){
  var searchValue = document.getElementById("gifForm").elements[0].value;
  var ratingValue = document.getElementById("gifForm").elements[1].value;
  var limitValue = document.getElementById("gifForm").elements[2].value;
  var url = api + "&q=" + searchValue + "&limit=" + limitValue + "&offset=0&rating=" + ratingValue + "&lang=en";
  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((dataActual) => {
      renderGiphys(dataActual.data);
    });
};

function renderGiphys(giphys) {
  for(let i = 0; i<giphys.length; i++){
    let imgSrc = giphys[i].images.original.url;
    let imgAlt = giphys[i].images.title;
    let imgEle = document.createElement('img');
    gifsContainer.appendChild(imgEle);
    imgEle.setAttribute('src', imgSrc);
    imgEle.setAttribute('alt', imgAlt);
  };
};