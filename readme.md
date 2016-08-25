## HCL Excerise

### Overview

####Exercise description:

* Create a user interface that allows a user to enter a number in a certain range.
* There has to be a predefined number hidden from the user.
* The user should know what that range is and should be able to have three attempts.
* Every time the user enters a number, this will be logged in a database and show in the interface the number of intents.
* If the user enters a number that matches the predefined number, a success message should be shown.


#### Deliverables:

* All application files plus the database dump (if applicable) in a zip file.
* Please upload the zip file in a cloud such as Google Drive, Dropbox, Git, ... and send the link.

### Install instructions
Install Node modules by running:
```
npm install
```

Install Bower dependencies like so:
```
npm run bower -- install
```

Populate Mongo with seed (back-end) server:
```
node lib/seed.js
```

And finally run the (back-end) server:
```
npm run nodemon -- lib/index.js
```

### Implementation
#### Technology/frameworks/libraries used

* Node/NPM
* Grunt
* Bower
* Bootstrap
* Less
* Angular
