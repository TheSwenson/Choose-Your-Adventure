class Scene {
  constructor(sceneJson) {
    this.sceneDialogue = sceneJson.text;
    this.options = sceneJson.options || [];
  }

  addOption(optionDialogue, scene) {
    this.options.push([optionDialogue, scene]);
  }

  render(sceneGraph) {
    const sceneElement = document.createElement('div');
    const dialogueElement = document.createElement('p');
    dialogueElement.id = 'dialogue';
    dialogueElement.textContent = this.sceneDialogue;
    sceneElement.appendChild(dialogueElement);
    const optionsElement = document.createElement('div');
    optionsElement.id = 'options';
    if (this.options.length > 0) {
      for (const option of this.options) {
        const optionButton = document.createElement('button');
        optionButton.textContent = option[0];
        optionButton.addEventListener('click', () => sceneGraph.showScene(option[1]));
        optionsElement.appendChild(optionButton);
      }
    } else {
      const optionButton = document.createElement('button');
      optionButton.textContent = 'Restart';
      optionButton.addEventListener('click', () => sceneGraph.showScene('start'));
      optionsElement.appendChild(optionButton);
    }
    sceneElement.appendChild(optionsElement);
    return sceneElement;
  }

  toJSON() {
    return {
      'text': this.sceneDialogue,
      'options': this.options,
    }
  }
}

class SceneGraph {
  constructor(sceneGraphJson) {
    let scenes = [];
    for (const scene in sceneGraphJson) {
      scenes[scene] = new Scene(sceneGraphJson[scene]);
    }
    this.scenes = scenes;
  }

  showScene(scene) {
    const rootElement = getRootElement();
    rootElement.innerHTML = '';
    rootElement.appendChild(this.scenes[scene].render(this));
  }

  toJSON() {
    let graph = {};
    for (const scene in this.scenes) {
      graph[scene] = this.scenes[scene].toJSON();
    }
    return graph;
  }
}

function getRootElement() {
  return document.getElementById('scene-root');
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
    text: 'Oh no! You\'ve died! Better luck next time...',
    options: [],
  }
};

const sceneGraph = new SceneGraph(crappyStoryJson);
console.log(sceneGraph);
sceneGraph.showScene('start');
