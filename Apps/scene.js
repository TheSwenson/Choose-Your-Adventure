'use-strict';
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
const testStory = {
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
    options: [
      ['Restart', 'start'],
    ],
  }
};

function renderScene(parent, story, sceneName) {
  let scene = story[sceneName];

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

renderScene(document.getElementById('scene-root'), testStory, 'start');
