# Introduction to a Node Project in Docker
## Basic Architecture of Node.js Applications

A Node.js application has three main components:

1. **package.json** - Lists the required packages for the project.
2. **src** - Contains many files (mainly for logic) that utilize the packages in node_modules.
3. **node_modules** - Stores all packages installed as specified in package.json, along with other files like index.js.

**Steps to Set Up the Project:**

- Installed Node.js on my local machine.
- Created a project directory and navigated into it.
- Initialized package.json by running:
  ```
  npm init -y
  ```
- Updated the scripts section to set `"start": "index.js"` for running the application.
- Installed necessary packages with:
  ```
  npm install express
  ```
  
Created an index.js file containing a simple application with a GET request.

- To start the server, run:
  ```
  npm start
  ```
  This command starts the server as defined in the scripts section of package.json, which points to "node index.js".

**Alternative**: You can also run the server with:
```
node index.js
```

## Now Containerize It

**Alpine** is a minimal image that removes unnecessary components.

1. Create a Dockerfile using **FROM, WORKDIR, COPY, RUN, CMD** directives.
   
   **Note**: Ensure to delete the node_modules folder before creating the Dockerfile to allow for a dynamic build.

- Build the Docker image with:
  ```
  docker build .
  ```

- Run the container using:
  ```
  docker run <image-name>
  ```
  
  **Note**: This runs the container privately. Use the `-p` option to expose the container’s port to localhost.

- Added additional routes to the index.js file.

- **Built the image and ran the container** while checking by altering the port.
