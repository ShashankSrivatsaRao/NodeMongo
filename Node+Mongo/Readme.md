# Create a MongoDB container and connect it to the Node.js container.

- First, I created a directory and initialized it with Git.
- Then, I ran `npm init -y` to create a package.json file,
-  followed by `npm install mongoose`.
  
```
npm init -y
npm install mongoose
```
  

I installed MongoDB first on Windows and then on Linux using WSL2, which was a lengthy process (refer to "Install MongoDB Community Edition on Ubuntu - MongoDB Manual v8.0").
I started MongoDB using the command:
```
sudo systemctl start mongo
```
Here is the index.js file:

<img width="310" alt="Screenshot 2024-12-09 103856" src="https://github.com/user-attachments/assets/509a733d-3601-4d5c-b28c-6db1e5cbca6b">

<img width="338" alt="Screenshot 2024-12-09 104103" src="https://github.com/user-attachments/assets/7dac4b25-bd2e-43fa-a0e8-dc32e7a09932">

Next, I created a `.dockerignore` file and added `node_modules` to prevent it from being included in the Docker image.

<img width="262" alt="Screenshot 2024-12-09 104216" src="https://github.com/user-attachments/assets/8b56fcb6-d6d2-4356-9772-d7c914ca06fc">


After creating the image and running the container, I encountered an error because MongoDB was not installed inside the container.

<img width="316" alt="Screenshot 2024-12-09 104252" src="https://github.com/user-attachments/assets/9011ab44-ab3a-4330-9dbe-495fe03e0d00">

**Note**:This is because mongo is not installed within the container.

**To run both containers together, I used Docker Compose by creating a `docker-compose.yml` file.**

<img width="295" alt="Screenshot 2024-12-09 104459" src="https://github.com/user-attachments/assets/4d9c5ee6-52ef-45c3-be4b-cc392069388c">

Then I  executed:
```
docker compose up --build
```
<img width="340" alt="Screenshot 2024-12-09 104546" src="https://github.com/user-attachments/assets/d025f8e3-9bb9-4c6b-b4da-3673a60e9e29">

<img width="326" alt="Screenshot 2024-12-09 104624" src="https://github.com/user-attachments/assets/3973ed74-50fa-4c94-94f1-0f80cccc69c1">

An error occurred because the Node.js app didn’t know where to find the MongoDB database; the connection URL needed to be updated. I replaced "localhost" with the name of the database service.

<img width="272" alt="Screenshot 2024-12-09 104710" src="https://github.com/user-attachments/assets/34b3d705-2077-4565-91c1-163f2d84030b">


After updating the database URL, I ran MongoDB, successfully connecting both containers.

<img width="295" alt="Screenshot 2024-12-09 104802" src="https://github.com/user-attachments/assets/1284a1c8-42ca-456f-960a-8c73ff74e882">

<img width="338" alt="Screenshot 2024-12-09 104831" src="https://github.com/user-attachments/assets/ad68890a-f51c-4d72-b9a1-751f0220b42a">



**Thank You**

-SHASHANK S
