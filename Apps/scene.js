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
    for (var i = 0; i < this.options.length; i++) {
      var optionButton = document.createElement('button');
      optionButton.setAttribute('type', 'radio');
    }
  }
}

var start = new Scene('Hello');
var right = new Scene('right');
var left = new Scene('left');

start.addOption('Go left', left);
start.addOption('Go right', right);
