<h3>Definition: CYOA: Choose Your Own Adventure</h3>
NEW USER STORIES
    As a user I want my name to be used in the game
        -Create an object that inserts the users name into the game
    <br>
    as a user I want to be able to choose between different dialogue options
        Have multiple dialogue options that result in different results and story options
    <br>
    as a user I want pictures to help narrate my story
        have images that can implemented into the users adventure
    <br>
    as a user I want fonts that wont strain my eyes or be difficult to read
        have a font that's good with accessibility
    <br>
    as a user I don't want to lose my progress if I leave the page
        store data in local storage that will be called when the user loads back into the page
    <br>
    As a developer, I want to have an object that represents a scene in the story so that all the code relating to managing stories
    is in one place.
        create a "scene" object that contains the dialogue and options, and possibly rendering code, for scenes of stories.
    <br>
    As a developer, I want the scene object constructor to take a dialogue string and the scene objects for each
    option the user can make, so that the scene object has all the data it needs stored locally.
        create a constructor in the scene class that takes a dialogue string and scene objects, and stores them in itself.
    <br>
    As a developer, I want the scene object to have a render method which takes a root element and appends the dialogue and options, using proper HTML elements, to that root element, so that I just have to call render(element) on a scene and have it display.
        create a render method which appends a dialogue and options to a passed in element
