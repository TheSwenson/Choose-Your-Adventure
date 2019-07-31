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

    text: 'As you walk towards the exit of your nice and safe underground bunker, your toe catches and you fall out of your vault. You look to the East where you can see a town off in the distance and to the west there is an old run down farmhouse. Which way will you choose?',

    options: [
      ['Head into town', 'eastTown'],
      ['Walk towards the farmhouse', 'farmHouse'],
    ],
  },
  'townSchool': {
    text: 'You enter the school and are immediately swarmed by a pack of angry, ravenous kindergarteners with sticky hands.',
    options: [
      ['fight them', 'fightKind'],
      ['Give them more screen time', 'schoolGetaway'],
    ],
  },
  'schoolGetaway': {
    text: 'The kids are distracted by the the bright colorful screens and you slip away unnoticed. You make it into the hallways where there are two doors. One leads to the cafeteria, the other to he gym. Which door do you choose?',
    options: [
      ['cafeteria', 'cafeteria'],
      ['Gymnasium', 'gym'],
    ],
  },
  'fightKind': {
    text: 'You grab the nearest charging kindergartener and start swinging wildly, but you are quickly overrun and fall to their sticky hands.',
    options: [
      ['Restart', 'start'],
    ],
  },
  'cafeteria': {
    text: 'You walk into cafeteria where you find a lifetime supply of snack pack puddings in every flavor imagineable. (Including double chocolate. You obviously win!',
    options: [
      ['Restart', 'start'],

    ],
  },
  'gym': {
    text: 'You open the door and walk into the gymnasium where a group of undead 5th graders are armed with dodgeballs. It is an impossible choice what should you do in this situation?',
    options: [
      ['5 d\'s of dodgeball', '5dodge'],
      ['Play Dead', 'playDead']
    ],
  },
  '5dodge': {
    text: 'You dodge, duck, dip, dive and ... dodge all around the 5th graders and take them all down! Patches o\'houlihan is smiling down on you, as you walk away from your victory. You win!!',
    options: [
      ['Restart', 'start'],
    ],
  },

  'eastTown': {
    text: 'You enter the town, and see a police station and a general store...',
    options: [
      ['Go to the police station...', 'policeStation'],
      ['Go to the general store...', 'generalStore'],
    ],
  },

  'playDead': {
    text: 'You immedately lay down on the ground in the fetal position where the cruel 5th graders take no pity on you and pelt you with an endless barrage of hard rubber balls until you die. You lose!',
    options: [
      ['Restart', 'start'],

    ],

  },
  'policeStation': {
    text: 'You enter the police station, and find a person locked in a cell...',
    options: [
      ['Release the prisoner...', 'releasePrisoner'],
      ['Move on...', 'moveOn'],
    ]
  },
  'releasePrisoner': {
    text: 'You throw caution to the wind and decide to ope the cell for the prisoner. He thanks you and immediately lunges at you strangling you. Seems he was locked up for a reason... You lose!',
    options: [
      ['Restart', 'start'],
      
    ]
  },
  'moveOn': {
    text: 'You exit the police station, and see the general store, and a school that you missed before...',
    options: [
      ['Go to general store', 'generalStore'],
      ['Go to school', 'townSchool'],
    ]
  },
  'generalStore': {
    text: 'You cautiously approach the decrepit general store. You can hear raised voices from outside. As you open the creaky door it becomes immediately apparent that there is a robbery in progress. A scary looking raider guy with spikes all over his leather clothes has a laser pistol pointed at the shopkeeper and his cat. The shopkeeper is even scarier. Old as sin and missing an eye, he seems unfazed by his current situation... What will you do? ',
    options: [
      ['Help the shopkeeper', 'helpShopkeeper'],
      ['Leave as quickly as you came', 'leaveShopkeeper'],
    ]
  },
  'helpShopkeeper': {
    text: 'You dash over to the raider, give him a little boop on the nose and a swift kick to his rear. He shrieks in terror and scampers away. You reach over and give the cat on the counter a scratch behind his ears. The shopkeeper thanks you with a growl and slides a rusty revolver across the counter. You accept it graciously and leave. Where will you go? ',
    options: [
      ['Go to police station', 'policeStation'],
      ['Go to school', 'townSchool'],
    ]
  },
  'leaveShopkeeper': {
    text: 'You exit the general store safely. You see the police station, and a school that you missed before...',
    options: [
      ['Go to police station', 'policeStation'],
      ['Go to school', 'townSchool'],
    ]
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
    optionButton.addEventListener('click', () => {
      renderScene(parent, story, option[1])
    });
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
