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

function renderScene(parent, scene) {
  let sceneJson = crappyStoryJson[scene];

  const sceneElement = document.createElement('div');
  sceneElement.classList.add('scene');
  const dialogueElement = document.createElement('p');
  dialogueElement.classList.add('dialogue');
  dialogueElement.textContent = sceneJson.text;
  sceneElement.appendChild(dialogueElement);
  const optionsElement = document.createElement('div');
  optionsElement.classList.add('options');
  if (sceneJson.options.length > 0) {
    for (const option of sceneJson.options) {
      const optionButton = document.createElement('button');
      optionButton.textContent = option[0];
      optionButton.classList.add('option');
      optionButton.addEventListener('click', () => renderScene(parent, option[1]));
      optionsElement.appendChild(optionButton);
    }
  } else {
    const optionButton = document.createElement('button');
    optionButton.textContent = 'Restart';
    optionButton.classList.add('option');
    optionButton.addEventListener('click', () => renderScene(parent, 'start'));
    optionsElement.appendChild(optionButton);
  }
  sceneElement.appendChild(optionsElement);
  //Display in parent
  parent.innerHTML = '';
  parent.appendChild(sceneElement);
}

function getRootElement() {
  return document.getElementById('scene-root');
}

renderScene(getRootElement(), 'start');
