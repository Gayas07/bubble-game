let score = 0;
let rn = 0;

function generateBubbles() {

  let bubbleContainer = document.querySelector('#pbtm')
  let bubbleElement = "";

  for (let i = 1; i <=160; i++) {
    rn = Math.floor(Math.random()*10)
    bubbleElement+=`<div class="bubble">${rn}</div>`
  }

  bubbleContainer.innerHTML = bubbleElement;
  
}

function timerFunction(){
  let currentTime = 60
  let intervalId = setInterval(() => {
    if (currentTime > 0) {
      currentTime--;
      document.querySelector('#timer-value').textContent = currentTime
    } else {
      clearInterval(intervalId)
      document.querySelector('#pbtm').innerHTML = `<h1>Game Over</hl>`
    }
    
  }, 1000);
}

function updateScore() {
  score += 10;
  document.querySelector('#score-value').textContent = score 
}

function updateHitValue(){
  let hitValue = document.querySelector('#hit-value')
  rn = Math.floor(Math.random()*10)
  hitValue.textContent = rn

}

function compareHits() {
  document.querySelector('#pbtm').addEventListener('click', function(details) {
    let hitElement = Number(details.target.textContent)
    let hitvalue = Number(document.querySelector('#hit-value').textContent)
    
    // console.log(hitElement);
    // console.log(typeof(hitElement));

    // console.log(hitvalue);
    // console.log(typeof(hitvalue));

    if (hitElement === hitvalue) {
      generateBubbles();
      updateHitValue();
      updateScore();
    }

  })
}


generateBubbles();
timerFunction();
compareHits();







