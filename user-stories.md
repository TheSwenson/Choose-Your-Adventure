<h3>Definition: CYOA: Choose Your Own Adventure</h3>


<h2>Developer Stories:</h2>
Developer Epic 1: As a developer, I want there to be some kind of "Story API," that will allow us to create new CYOA rapidly by creating objects that represent the story frames and automatically generate/show the elements required.
<br/>
As a developer, I want to be able to create a story object, which contains the dialogue, possibly a picture, and the options the user could take, which would be references to other story objects, possibly contained in a container object with an option dialogue to show. That way, all we'd need to do to create a story is to link together a bunch of story objects, or "Scene" objects.
<br/>
Name of object could be "StoryFrame" or "Scene", or something like that.
   - create an object named storyFrame that renders our CYOA
<br>
As a developer, I want there to be a "User" object, to store user information, like username, password, and highscore, so that managing user information is handled all in one place.
   - create a function that makes a new user and stores their game data and info into local storage
   <br><br>
As a developer, I want the "User" object to have a "save to local storage" and "read from local storage" options, to make persistent data easy.
   - create a function that stores data in local storage after each turn and on logout
   <br><br>
As a developer, I want some form of "story graph" using "Scenes" as nodes in the tree/graph, so that adding a new scene/story is as easy as adding more nodes to an already existing story graph, or just making a new story graph from a start node.
  -  make a function that can easily prototyped into making new story branches
  <br><br>
As a developer, I want the whole story to take place on a single page, changing the contents of a "root" node for each story frame/scene, that way our application is more concise and so that the user will have a harder time cheating by specifying urls or something.
   - Create an html page that makes our game layout nicely using css and js constructors
   <br><br>
As a developer, I want the frame/scene objects to accept any number of possible options, that way stories can be infinitely complex.
  -  Create multiple options and multiple outcomes for each question.
  <br><br>
As a developer, I MAY want some kind of story factory that will assemble a story graph using methods and a changing internal state, that way the code will be easier to read and more concise.
   - create a function that renders our story from pre written options
   <br><br>

<h2>User Stories:</h2>
User Epic 1: As a user, I want to be able to log in and play CYOA game(s) on a single page, so that I can have a good time.
<br><br>
As a user with mobility and vision problems, I need a game that is easily accessible with easy to read fonts and color schemes as well as a way to select options with ease.
   - create a game with easy to read fonts and color schemes so people can access it.
   <br><br>
As a casual web surfer i'm looking for a simple game that I can play in my free time and come back to whenever I please without losing my progress.
   - create a game with local storage and username and passwords
   <br><br>
As a user with the need to know how i'm doing I want a way to visually see how far i've made it in this game.
    create a round counter
    <br><br>
As a creative developer I want the site to be aesthetically pleasing with nice page layout, and creative css options.
   - use css options that will style our page in a unique fashion
<br><br>
As a carefree teen, I am looking for a new and exciting way to waste time on the internet.
   - Create a game that we ourselves want to play!
      -  good dialogue, visually appealing
      <br><br>
As a bored office worker I am looking for a way to live an exciting life vicariously through a fictional character online. 
   - Come up with a good idea to write a CYOA story on.