<h3>Definition: CYOA: Choose Your Own Adventure</h3>
MVP:
<br>
<br>
Display Story:
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
<br>
as a user I want to be able to see the visuals so that i dont have to rely on my imagination.
    -display an image of what is going on in the story
<br>
as a user I want pictures to help narrate my story so that it helps illustrate the story
    have images that can implemented into the users adventure
<br>
<br>
Get User Input:
as a user I want to be able to choose between different dialogue options so that it makes the game more interesting
    Have multiple dialogue options that result in different results and story options
<br>
<br>
as a user I want turn i'm on so I can determine my progress into the game
        create a turn counter that displays how many questions they have gone through
Save User Input:
as a user I don't want to lose my progress if I leave the page so that i can continue my game
        store data in local storage that will be called when the user loads back into the page
as a user I want to know that my game is saved and I can return to it so that I won't lose my progress
    Add an option to manually save game progress into local storage

NEW USER STORIES
    As a user I want my name to be used in the game so that i have an immersive experience
        -Create an object that inserts the users name into the game
    <br>
    as a user I want fonts that wont strain my eyes or be dificult to read so that anyone can play the game
        have a font that's good with accessibility
    <br>
    
    <br>
    as a user I want to be able to create my own story so that I can come up with my own adventures that my friends can go on
        create a form option that creates a users own story
    <br>
    as a developer I want people to know about me and what I can do so that I can get future work!
        create an about me page that tells the users a little about the creators
    <br>
    as a user I want the ability to logout so that I know my progress is saved
        create a logout option that saves user data and notifies them
    <br>
    
    <br>
    as a user I want the game to be pleasing to look at so that it doesn't seem like a small crappy game
        use creative css options to help style our game
    <br>
    as a user i need a way to determine which path is the right path so that i can choose the path i want, wether it be evil or good.
        -implament a good/bad rating system
    <br>
    As a user, I would like to see simple animations that correspond with my choices in this Choose Your Own Adventure game
    <br>
    As a user I would like to enter my name and have a personalized story that uses my name.
    <br>
    As a user I would like a game that asks for my preferred pronouns to further personalize the story
