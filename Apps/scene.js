'use-strict';
/*
Story JSON structure:
{
  'sceneName': {
    text: 'Scene dialogue here',
    pre: function() {

    },
    options: [
      ['Option text here', 'consequence'],
      ['Option text here', 'sceneName'],
      ... etc ...
    ]
  },
'sceneName': {
text: 'Scene dialogue here',
options: [
['Option text here', 'sceneName'],
['Option text here', 'sceneName'],
... etc ...
]
},
... etc ...
}
*/
function saveInventory(){
  window.localStorage.inventory = JSON.stringify(inventory);
}

function loadInventory(){
  inventory = window.localStorage.inventory ? JSON.parse(window.localStorage.inventory) : {};
}

function addItem(itemName){
  inventory[itemName] = true;
  saveInventory();
}

function resetInventory(){
  inventory = {};
  saveInventory();
}

function hasItem(itemName){
  return !!inventory[itemName];
}

var inventory = {
  
}
const testStory = {
  'start': {
    pre: function() {
      resetInventory();
      window.localStorage.turnCounter = 0;
    },
    text: 'A stranger says hello to you',
    options: [
      ['Say hello back...', 'sayHello'],
      ['Say nothing...', 'sayNothing'],
    ],
  },
  'sayHello': {
    text: 'You say hello to the stranger... he smiles back. :)',
    options: [
      ['Punch the stranger', 'punchStranger'],
      ['Leave him alone', 'die'],
    ],
  },
  'sayNothing': {
    text: 'You say nothing. The stranger gets pretty angry...',
    options: [
      ['Punch the stranger', 'punchStranger'],
      ['Leave him alone', 'die'],
    ],
  },
  'die': {
    text: 'Oh no! You\'ve died! Better luck next time...',
    options: [
      ['Restart', 'start'],
    ],
  },
  'punchStranger': {
    text: 'You punch the stranger. He doesn\'t much care for that',
    options: [
      ['Run away', 'runAway'],
      ['Apologize', 'apologize'],
    ],
  },
  'runAway': {
    text: 'You run away, but he stabs you in the back. Now you\'re dead...',
    options: [
      ['Restart', 'start'],
    ],
  },
  'apologize': {
    text: 'You apologize, profusely, to the stranger. He accepts, and now you\'re best friends for life. YOU WIN!!!',
    options: [
      ['Restart', 'start'],
    ],
  },
  'punchStranger': {
    text: 'You punch the stranger. He doesn\'t much care for that',
    options: [
      ['Run away', 'runAway'],
      ['Apologize', 'apologize'],
    ],
  },
};

function renderScene(parent, story, sceneName) {
  let scene = story[sceneName];
  if (scene.pre) {
    scene.pre();
  }
  if (window.localStorage.currentScene !== sceneName){
  window.localStorage.turnCounter++;
  window.localStorage.currentScene = sceneName;
  }

  var turnCounter = document.querySelector('h3.turnNum');
  turnCounter.textContent = 'Current Turn: ' + window.localStorage.turnCounter;
  const sceneElement = document.createElement('div');
  sceneElement.classList.add('scene');
  const dialogueElement = document.createElement('p');
  dialogueElement.classList.add('dialogue');
  dialogueElement.textContent = scene.text;
  sceneElement.appendChild(dialogueElement);
  const optionsElement = document.createElement('div');
  optionsElement.classList.add('options');
  for (const option of scene.options) {
    const optionButton = document.createElement('button');
    optionButton.textContent = option[0];
    optionButton.classList.add('option');
    optionButton.addEventListener('click', () => renderScene(parent, story, option[1]));
    optionsElement.appendChild(optionButton);
  }
  sceneElement.appendChild(optionsElement);
  //Display in parent
  parent.innerHTML = '';
  parent.appendChild(sceneElement);
  
}

if (!window.localStorage.turnCounter) {
  window.localStorage.turnCounter = 0;
}

loadInventory();
renderScene(document.getElementById('scene-root'), testStory, window.localStorage.currentScene || 'start');
