Definition: CYOA: Choose Your Own Adventure
Developer Epic 1: As a developer, I want there to be some kind of "Story API," that will allow us to create new CYOA rapidly by creating objects
that represent the story frames and automatically generate/show the elements required.

Developer Stories:
As a developer, I want to be able to create a story object, which contains the dialogue, possibly a picture, and the options the user could take, which would be references to other story objects, possibly contained in a container object with an option dialogue to show. That way, all we'd need to do to create a story is to link together a bunch of story objects, or "Scene" objects.

Name of object could be "StoryFrame" or "Scene", or something like that.

As a developer, I want there to be a "User" object, to store user information, like username, password, and highscore, so that managing user information is handled all in one place.

As a developer, I want the "User" object to have a "save to local storage" and "read from local storage" options, to make persistent data easy.

As a developer, I want some form of "story graph" using "Scenes" as nodes in the tree/graph, so that adding a new scene/story is as easy as adding more nodes to an already existing story graph, or just making a new story graph from a start node.

As a developer, I want the whole story to take place on a single page, changing the contents of a "root" node for each story frame/scene, that way our application is more concise and so that the user will have a harder time cheating by specifying urls or something.

As a developer, I want the frame/scene objects to accept any number of possible options, that way stories can be infinitely complex.

As a developer, I MAY want some kind of story factory that will assemble a story graph using methods and a changing internal state, that way the code will be easier to read and more concise.

User Epic 1: As a user, I want to be able to log in and play CYOA game(s) on a single page, so that I can have a good time.
