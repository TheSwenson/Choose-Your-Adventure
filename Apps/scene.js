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
    var sceneElement = document.createElement('div');
    var dialogueElement = document.createElement('p');
    dialogueElement.id = 'dialogue';
    dialogueElement.textContent = this.sceneDialogue;
    sceneElement.appendChild(dialogueElement);
    for (var option of this.options) {
      var optionButton = document.createElement('button');
      optionButton.textContent = option.dialogue;
      optionButton.addEventListener(() => {

      });
    }
  }
}

var start = new Scene('Hello');
var right = new Scene('right');
var left = new Scene('left');

var deathScene = new Scene('You died, fool');

start.addOption('Go left', left);
start.addOption('Go right', right);
start.addOption('Go down', deathScene);
