//the import section at the top of this page (first code below):
//"react" and "date-fns" are both npm packages.
//The file we are in -'App.js'- is pulling in specific content from these two packages.
//'react' and 'date-fns' are being imported from the node_modules folder, which was created when we ran npm install.
//The node_modules folder is where Node.js stores all the dependencies (external libraries, frameworks, or modules) that your project needs to run.
//****When you run 'npm install', the node_modules folder gets created, and all the packages listed in your package.json file are downloaded and stored there.***

import React from "react";
import { format } from "date-fns";

// I. Structure Overview of node-modules:
// node_modules/
// ├── react/ → React library
// ├── lodash/ → Lodash utility library
// └── axios/ → Axios for HTTP requests
// Each dependency can also have its own dependencies, leading to a deeply nested folder structure.

// II. Key Roles of node_modules:
// 1. Stores Dependencies:
//    Contains all packages your project relies on.

// 2. Maintains Versioning:
//    Ensures specific versions of libraries are used, as defined in package.json  and package-lock.json.

// 3. Enables Importing Modules:
//    Lets you import installed libraries in your code, for example:
//    import React from 'react';
//    import axios from 'axios';

// III. Common Commands Related to node_modules:
// 1. Install dependencies:
//    npm install
//    This reads package.json and installs dependencies into node_modules.

// 2. Delete and Reinstall:
//    Sometimes issues arise, and it's best to do a clean install:
//    rm -rf node_modules
//    npm install

// 3. Ignore in Git:
//    You should never commit node_modules to your Git repository. 
//    Add this to your .gitignore file:
//    node_modules/

// 4. Check size (it can be huge!):
//    du -sh node_modules

// 5. node_modules is huge, so in order to avoid node_modules bloat, use:
//    npm dedupe
//    This flattens dependencies where possible, reducing duplication.

//In summary, the node_modules folder is the backbone of your project's dependency management, but it's also one of the heaviest folders in any Node.js project.


//The import for ExampleComponent is slightly different from the imports for react and date-fns. 
// Rather than importing code from a package, here we are importing something from within our project's file tree. 
// By importing ./ExampleComponent, we make <ExampleComponent /> available for use in the App component's return statement.
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";

// Add your code own within the return statement
function App() {
  return (
    //JSX goes here. This JSX code is the return value of a function called App
    //The key thing to understand is that all of the visible content of our app is returned from this App function.
    //We've already seen that it is possible to have multiple files that contain visible content, i.e., by using both src/ App and ExampleComponent. ExampleComponent, however, is used within App. 
    //**App is at the top-most level; it is the parent component of our React app content.

    <div className="App">
      {/* This is how you comment inside JSX */}
      {/* format from the date-fns library is being used in the return statement when we call format(...) */}
      {/* React is also being used, even though you can't see it written in the code. Anywhere you write JSX inside a component, it is actually transpiled to JavaScript code that looks like this: React.createElement(tagName, props, children) */}

      {/*<h1>{format(new Date(), "MMMM do yyyy, h:mm:ss a")}</h1>*/}
      <h1>{("Now")}</h1>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      {/* By importing ./ExampleComponent (in line 63), we make <ExampleComponent /> available for use in the App component's return statement.*/}
      <ExampleComponent />
      <TestComponent />
    </div>
  );
}
// The export section at the bottom.
// By including the export line, we are allowing other files to import things from the App.js file.
// The line, export default App denotes that our App function is the main thing we want to export from our App.js file. 
// You can have only one default export per file. 
// If you take a look at index.js, you can see at the top of the file that we are importing App from the App.js file in the src/components directory (the .js does not need to be included). 
// This import statement is what we use to import something that is the default export of another file:

export default App;
