// I GOT ALL OF THIS CODE FROM W3SCHOOLS

//Get the button:
mybutton = document.getElementById("btnTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// DYNAMIC SIDE NAV

// function openSubNav() {
//   document.getElementById("dndNav");
// }

// $('.metismenu').metisMenu({
//   doubleTapToGo: true
//  });

// ALIGNMENT STUFF

let alignmentTypes = [
  {
    alignmentName: "Lawful Good",
    goodEvilSpectrum: "Good",
    lawChaosSpectrum: "Lawful",
    briefDescription: "Crusader",
    description: "Some description here",
  },
  {
    alignmentName: "Neutral Good",
    goodEvilSpectrum: "Good",
    lawChaosSpectrum: "Neutral",
    briefDescription: "Benefactor",
    description: "Some description here",
  },
  {
    alignmentName: "Chaotic Good",
    goodEvilSpectrum: "Good",
    lawChaosSpectrum: "Chaotic",
    briefDescription: "Rebel",
    description: "Some description here",
  },
  {
    alignmentName: "Lawful Neutral",
    goodEvilSpectrum: "Neutral",
    lawChaosSpectrum: "Lawful",
    briefDescription: "Judge",
    description: "Some description here",
  },
  {
    alignmentName: "Neutral",
    goodEvilSpectrum: "Neutral",
    lawChaosSpectrum: "Neutral",
    briefDescription: "Undecided",
    description: "Some description here",
  },
  {
    alignmentName: "Chaotic Neutral",
    goodEvilSpectrum: "Neutral",
    lawChaosSpectrum: "Chaotic",
    briefDescription: "Free Spirit",
    description: "Some description here",
  },
  {
    alignmentName: "Lawful Evil",
    goodEvilSpectrum: "Evil",
    lawChaosSpectrum: "Lawful",
    briefDescription: "Dominator",
    description: "Some description here",
  },
  {
    alignmentName: "Neutral Evil",
    goodEvilSpectrum: "Evil",
    lawChaosSpectrum: "Neutral",
    briefDescription: "Malefactor",
    description: "Some description here",
  },
  {
    alignmentName: "Chaotic Evil",
    goodEvilSpectrum: "Evil",
    lawChaosSpectrum: "Chaotic",
    briefDescription: "Destroyer",
    description: "Some description here",
  },
];

// DICE ROLLER STUFF

const d4Response = document.querySelector("#d4Response");
const d6Response = document.querySelector("#d6Response");
const d8Response = document.querySelector("#d8Response");
const d10Response = document.querySelector("#d10Response");
const d12Response = document.querySelector("#d12Response");
const d20Response = document.querySelector("#d20Response");

d4Response.innerHTML = Math.floor(Math.random() * 4) + 1;
d6Response.innerHTML = Math.floor(Math.random() * 6) + 1;
d8Response.innerHTML = Math.floor(Math.random() * 8) + 1;
d10Response.innerHTML = Math.floor(Math.random() * 10) + 1;
d12Response.innerHTML = Math.floor(Math.random() * 12) + 1;
d20Response.innerHTML = Math.floor(Math.random() * 20) + 1;

function roll1d4() {
  var x = document.getElementById("d4rollResponse");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = d4Response.innerHTML = Math.floor(Math.random() * 4) + 1;
  }
}

function roll1d6() {
  var x = document.getElementById("d6rollResponse");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = d6Response.innerHTML = Math.floor(Math.random() * 6) + 1;
  }
}

function roll1d8() {
  var x = document.getElementById("d8rollResponse");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = d8Response.innerHTML = Math.floor(Math.random() * 8) + 1;
  }
}

function roll1d10() {
  var x = document.getElementById("d10rollResponse");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = d10Response.innerHTML =
      Math.floor(Math.random() * 10) + 1;
  }
}

function roll1d12() {
  var x = document.getElementById("d12rollResponse");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = d12Response.innerHTML =
      Math.floor(Math.random() * 12) + 1;
  }
}

function roll1d20() {
  var x = document.getElementById("d20rollResponse");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = d20Response.innerHTML =
      Math.floor(Math.random() * 20) + 1;
  }
}
