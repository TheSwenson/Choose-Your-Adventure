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
//allows you to put a stringified item into local storage
function saveInventory(){
  window.localStorage.inventory = JSON.stringify(inventory);
}
//checks if there are items in local storage, if not returns empty inventory object
function loadInventory(){
  inventory = window.localStorage.inventory ? JSON.parse(window.localStorage.inventory) : {};
}
//adds name of item set equal to true in the inventory object
function addItem(itemName){
  inventory[itemName] = true;
  saveInventory();
}
// saves an empty inventory when called. so people cant use items saved in local storage after they have died and reset the game.
function resetInventory(){
  inventory = {};
  saveInventory();
}
//checks to see if inventory contains a specific item
function hasItem(itemName){
  return !!inventory[itemName];
}

var inventory = {
}

const testStory = {
  'start': {
    image: 'images/Doomsday vault.jpg',
    pre: function() {
      resetInventory();
      window.localStorage.turnCounter = 0;
    },

    text: 'As you walk towards the exit of your nice and safe underground bunker, your toe catches and you fall out of your vault. You look to the East where you can see a town off in the distance and to the West there is an old run down farmhouse. Which way will you choose?',

    options: [
      ['Head into town', 'eastTown'],
      ['Walk towards the farmhouse', 'farmHouse'],
    ],
  },
  'townSchool': {
    image: 'images/school.jpg',
    text: 'You enter the school and are immediately swarmed by a pack of angry, ravenous kindergarteners with sticky hands.',
    options: [
      ['fight them', 'fightKind'],
      ['Give them more screen time', 'schoolGetaway'],
    ],
  },
  'schoolGetaway': {
    image: 'images/school.jpg',
    text: 'The kids are distracted by the the bright colorful screens and you slip away unnoticed. You make it into the hallways where there are two doors. One leads to the cafeteria, the other to he gym. Which door do you choose?',
    options: [
      ['cafeteria', 'cafeteria'],
      ['Gymnasium', 'gym'],
    ],
  },
  'fightKind': {
    image: 'images/school.jpg',
    text: 'You grab the nearest charging kindergartener and start swinging wildly, but you are quickly overrun and fall to their sticky hands.',
    options: [
      ['Restart', 'start'],
    ],
  },
  'cafeteria': {
    image: 'images/school.jpg',
    text: 'You walk into cafeteria where you find a lifetime supply of snack pack puddings in every flavor imaginable. (Including double chocolate.) You obviously win!',
    options: [
      ['Restart', 'start'],

    ],
  },
  'gym': {
    image: 'images/school.jpg',
    text: 'You open the door and walk into the gymnasium where a group of undead 5th graders are armed with dodgeballs. It is an impossible choice. What should you do in this situation?',
    options: [
      ['5 d\'s of dodgeball', '5dodge'],
      ['Play Dead', 'playDead']
    ],
  },
  '5dodge': {
    image: 'images/school.jpg',
    text: 'You dodge, duck, dip, dive and ... dodge all around the 5th graders and take them all down! Patches o\'houlihan is smiling down on you, as you walk away from your victory. That was so cool of you. You win!!!',
    options: [
      ['Restart', 'start'],
    ],
  },

  'eastTown': {
    image: 'images/Post-Apocalyptic_Cityscape_600.jpg',
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
    image: 'images/police.jpg',
    text: 'You enter the police station, and find a person locked in a cell...',
    options: [
      ['Release the prisoner...', 'releasePrisoner'],
      ['Move on...', 'moveOn'],
    ]
  },
  'releasePrisoner': {
    image: 'images/police.jpg',
    text: 'You throw caution to the wind and decide to ope the cell for the prisoner. He thanks you and immediately lunges at you strangling you. Seems he was locked up for a reason... You lose!',
    options: [
      ['Restart', 'start'],

    ]
  },
  'moveOn': {
    image: 'images/Post-Apocalyptic_Cityscape_600.jpg',
    text: 'You exit the police station, and see the general store, and a school that you missed before...',
    options: [
      ['Go to general store', 'generalStore'],
      ['Go to school', 'townSchool'],
    ]
  },
  'farmHouse': {
    text: 'You walk into the farmhouse and discover a family that has been killed by some sort of creature... What are you going to do?',
    options: [
      ['Leave!', 'start2'],
      ['Investigate', 'investigate'],
    ]
  },
  'start2': {
    text: 'You come back to where you started. Are you going to head in to town or go back to the farm house?',
    options: [
      ['Head into town', 'eastTown'],
      ['Walk towards the farmhouse', 'farmHouse']
    ]
  },
  'investigate': {
    text: 'You investigate the family and find that they have claw marks all over their bodies... Now what?',
    options: [
      ['Search the house', 'houseSearch'],
      ['Turn and run!', 'wolves']
    ]
  },
  'wolves': {
    text: 'You leave the farmhouse and are greeted by a pack of zombie wolves, there\'s no hope as they charge at you and tear you limb from limb',
    options: [
      ['Restart', 'start'],
    ]
  },
  'houseSearch': {
    text: 'You decide to search the house and in the basement you find an entrance to a strange underground tunnel. Do you enter?',
    options: [
      ['Enter the tunnel', 'nukeSilo'],
      ['Turn tail and run', 'mysteriousStranger']
    ]
  },
  'nukeSilo': {
    text: 'You enter the tunnel which after a few hundred feet opens into a missile silo. In the control room there\'s a big shiny red button. You can push it if you want, but do you?',
    options: [
      ['Push the button', 'nukeTheWorld'],
      ['Back away from the button', 'earthquake']
    ]
  },
  'earthquake': {
    text: 'You slowly back away from the missile, as you back away you feel the ground shake. You turn and start sprinting towards the exit but the missile itself breaks loose and falls on you, crushing and killing you instantly. You lose!',
    options: [
      ['Restart', 'start'],
    ]
  },
  'nukeTheWorld': {
    text: 'Who can resist pushing the big red button, right? You press it and the missle roars to life. The silo opens and the missile lifts off, only then do you realize the button was labeled Mutually Assured Destruction. You inadvertantly launched every remaining nuke in the U.S. arsenal and wipe out all remaining life on the planet. I consider that a win!',
    options: [
      ['Restart', 'start'],

    ]
  },
  'mysteriousStranger': {
    text: 'After retreating from the silo and exiting the farm house a mysterious man is standing out front. What are you going to do?',
    options: [
      ['Ignore him', 'ignore'],
      ['Punch him in the face', 'farmHouse'],
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
    text: 'You dash over to the raider, give him a little boop on the nose and a swift kick to his rear. He shrieks in terror and scampers away. You reach over and give the cat on the counter a scratch behind his ears. The shopkeeper thanks you with a growl and slides a rusty revolver across the counter. You accept it graciously and leave. On your way out you notice a manhole cover glinting in the afternoon sun. Further down the street is the school. Where will you go? ',
    options: [
      ['Go to manhole cover', 'manholeCover'],
      ['Go to school', 'townSchool'],
    ]
  },
  'manholeCover': {
    text: 'As you approach the manhole cover you notice that it is slightly askew... You could probably pry it open, even with your meager strength. The school is also still nearby. What do you do?',
    options: [
      ['Pry it open and delve below', 'pryCover'],
      ['Go to school', 'townSchool'],
    ]
  },
  'pryCover': {
    text: 'You heave the cover off and carefully make your way down the rusty ladder. As you reach the bottom and adjust to the darkness and smell you notice four dark shapes approaching. As they get closer you are startled to realize they are adolescent mutated samurai tortoises. Each has a different colored trucker hat, and is holding a different type of kitchen utensil. Utterly frightened you call out: Who are you? They each respond with a different name of a founding father: Jefferson! Hamilton! Adams! Washington! What do you do?! ',
    options: [
      ['Fight them', 'fightTorts'],
      ['Scurry back up the ladder', 'upLadder'],
    ] 
  },
  'fightTorts': {
    text: 'You exhale deeply and lash out at the quartet with everything you got... To no avail. These guys have pizza cutters, meat tenderizers, rolling pins, and menacing ladles. You become food.',
    options: [
      ['Restart', 'start'],
    ]
  },
  'upLadder': {
    text: 'You frantically try to climb up the rusty old ladder but the tortoises are too fast. *wink* They grab you and very quickly turn you into food.',
    options: [
      ['Restart', 'start'],
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

  if (parseInt(window.localStorage.turnCounter) === 0) {
    window.localStorage.turnCounter = 1;
  }

  if (scene.image) {
    console.log('Setting img');
    document.querySelector('body').style.backgroundImage = `url('${scene.image}')`;
  } else {
    console.log('No img');
    document.querySelector('body').style.backgroundImage = 'url(\'images/post-apocalyptic-1920x1080-284864-media.jpg\')';
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
