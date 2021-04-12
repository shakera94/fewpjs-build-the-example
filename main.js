// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red" : "",
  "": "red"
};

// Your JavaScript code goes here!

const articleHearts = document.querySelectorAll(".like-glyph");

let modal = document.querySelector('.hidden').remove

function likeCallback(e) {
  let heart = e.target;
  mimicServerCall("bogusUrl")
  
  mimicServerCall("bogusUrl", {forceFailure: true})
    .then(function(serverMessage){
      alert("You notified the server!");
      alert(serverMessage);
       heart.innerText = glyphStates[heart.innerText];
       heart.style.color = colorStates[heart.style.color];
    })
.catch(function(error) {
  const modal = document.getElementById("modal");
  modal.className = "";
  modal.innerText = error;
  setTimeout(() =>  modal.className = "hidden", 3000);
});

for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}}}
