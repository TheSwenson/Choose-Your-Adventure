class Option {
  constructor(dialogue, scene) {
    this.dialogue = dialogue;
    this.scene = scene;
  }
}

class Scene {
  constructor(sceneDialogue) {
    this.sceneDialogue = sceneDialogue;
    this.options = [];
  }

  addOption(optionDialogue, scene) {
    this.options.push(new Option(optionDialogue, scene));
  }

  render() {
    const sceneElement = document.createElement('div');
    sceneElement.classList.add('scene');
    const dialogueElement = document.createElement('p');
    dialogueElement.classList.add('dialogue');
    dialogueElement.textContent = this.sceneDialogue;
    const optionsElement = document.createElement('div');
    optionsElement.classList.add('options');
    sceneElement.appendChild(dialogueElement);
    for (const option of this.options) {
      const optionButton = document.createElement('button');
      optionButton.textContent = option.dialogue;
      optionButton.classList.add('option');
      optionButton.addEventListener('click', () => showScene(option.scene));
      optionsElement.appendChild(optionButton);
    }
    sceneElement.appendChild(optionsElement);
    return sceneElement;
  }
}

function createSceneGraph(sceneJson) {
  let scenes = [];
  for (const scene in sceneJson) {
    scenes[scene] = new Scene(sceneJson[scene].text);
  }
  for (const scene in sceneJson) {
    for (const option of sceneJson[scene].options) {
      scenes[scene].addOption(option[0], scenes[option[1]]);
    }
  }
  return scenes;
}

function getRootElement() {
  return document.getElementById('scene-root');
}

function showScene(scene) {
  const rootElement = getRootElement();
  rootElement.innerHTML = '';
  rootElement.appendChild(scene.render());
}
/*
Story JSON structure:
{
'sceneName': {
  text: 'Scene dialogue here',
  options: [
    ['Option text here', 'options sceneName'],
    ['Option text here', 'options sceneName'],
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
const crappyStoryJson = {
  'start': {
    text: 'A stranger says hello to you',
    options: [
      ['Say hello back...', 'sayHello'],
      ['Say nothing...', 'sayNothing'],
    ],
  },
  'sayHello': {
    text: 'You say hello to the stranger... he smiles back. :)',
    options: [
      ['Punch the stranger', 'die'],
      ['Leave him alone', 'die'],
    ],
  },
  'sayNothing': {
    text: 'You say nothing. The stranger gets pretty angry...',
    options: [
      ['Punch the stranger', 'die'],
      ['Leave him alone', 'die'],
    ],
  },
  'die': {
    text: 'Oh no! You died! Better luck next time...',
    options: [],
  }
};

const sceneGraph = createSceneGraph(crappyStoryJson);

console.log(sceneGraph);

showScene(sceneGraph['start']);
