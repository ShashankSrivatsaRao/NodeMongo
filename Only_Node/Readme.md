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
  <img width="450" alt="Screenshot 2024-12-09 101513" src="https://github.com/user-attachments/assets/7123c348-bd53-4a6f-a68d-051c4b7f8916">

- Updated the scripts section to set `"start": "index.js"` for running the application.
  <img width="307" alt="Screenshot 2024-12-09 101716" src="https://github.com/user-attachments/assets/397e9f6a-9513-4bac-ad82-154f0981573f">
- Installed necessary packages with:
  ```
  npm install express
  ```
  <img width="346" alt="Screenshot 2024-12-09 101813" src="https://github.com/user-attachments/assets/0fcd6014-d03b-4af4-81c9-e3a4a3c90230">
  
Created an index.js file containing a simple application with a GET request.

  <img width="241" alt="Screenshot 2024-12-09 102053" src="https://github.com/user-attachments/assets/6271224d-0ef2-4a05-af31-447efc2a8980">


- To start the server, run:
  ```
  npm start
  ```
  This command starts the server as defined in the scripts section of package.json, which points to "node index.js".
- Here is the Result
  <img width="381" alt="Screenshot 2024-12-09 102227" src="https://github.com/user-attachments/assets/247ac49f-ae1b-4e21-9340-598901bac206">

**Alternative**: You can also run the server with:
```
node index.js
```

## Now Containerize It

**Alpine** is a minimal image that removes unnecessary components.

1. Create a Dockerfile using **FROM, WORKDIR, COPY, RUN, CMD** directives.

<img width="208" alt="Screenshot 2024-12-09 102310" src="https://github.com/user-attachments/assets/51df7125-9fc1-42e7-bd83-17857a8c2024">

   **Note**: Ensure to delete the node_modules folder before creating the Dockerfile to allow for a dynamic build.

- Build the Docker image with:
  ```
  docker build .
  ```

- Run the container using:
  ```
  docker run <image-name>
  ```
  <img width="296" alt="Screenshot 2024-12-09 102418" src="https://github.com/user-attachments/assets/c711626b-0e44-4e10-b572-cf669ad9c6e4">

  <img width="275" alt="Screenshot 2024-12-09 102524" src="https://github.com/user-attachments/assets/bafd5d28-9443-4990-acef-da337d8e8d1f">
  
  **Note**: This runs the container privately. Use the `-p` option to expose the container’s port to localhost.

- Added additional routes to the index.js file.
-Code:
  <img width="280" alt="Screenshot 2024-12-09 102612" src="https://github.com/user-attachments/assets/4eeddbd4-798c-45e8-b915-606086d490b6">

  Results:

  <img width="210" alt="Screenshot 2024-12-09 102658" src="https://github.com/user-attachments/assets/1c50cdec-514f-4b95-b9f3-db827d388a99">

  <img width="240" alt="Screenshot 2024-12-09 102739" src="https://github.com/user-attachments/assets/424fea4f-07b7-417b-b343-9781a532113f">
  

- **Built the image and ran the container** while checking by altering the port.

  <img width="338" alt="Screenshot 2024-12-09 102833" src="https://github.com/user-attachments/assets/5e2f3617-446f-4524-bfbf-0a4d4afc1b25">

  <img width="152" alt="Screenshot 2024-12-09 102859" src="https://github.com/user-attachments/assets/43c459fb-e0b7-40d1-9eac-b20d2718e65e">

  **Thank You**
