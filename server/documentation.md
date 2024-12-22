# Documentation ig

### Setup 

Probably just run `npm install` again cuz I installed some packages.

Switched to using typescript. Its a good opportunity to learn how to use it me thinks. 

Set up an .env file for the MONGO_URI. Make sure to add the URI. It should be already in previous commits lol.

### Architecture

Think we should follow MVC architecture (Model-View-Controller), which is basically how bdate backend was structured.

1. the **model** contains the internal representation of our data:
2. the **view** is the interface that presents information to the user (prob just JSON if we doing REST APIs)
3. the **controller** processes user input and called appropriate functions in the model.

For our backend, I'm thinking it'll look like this:

1. **routes**: the entry point to our API, calls an appropriate controller.
2. **controllers**: the controllers then validates/sanitizes any input, calls the model, and responds to the HTTP request.
3. **models**: the models defines the structure of data and interacts with db.

I was also looking at using Clean Architecture instead which looks like a pretty cool way of organizing things but thats probably definitely overkill for this project.