#   PART-1:


### 1. initialize npm
    npm init -y
### 2. Install packages
    npm install express
    npm install nodemon
Going to package.json and write the code inside the  scripts
    "start":"nodemon index.js";
### 3. create  index.js 

```js
    const express =require("express");

    const app =express();
    const PORT =9001;

    app.listen(PORT,()=>{
        console.log(`server is running at http://localhost:${PORT}`);
        
    })
```
### 4. To run the server 
    node index.js
    npm start



#   Part-2
###   Creating rest api steup and testing
    // GET /books -->return all the books
    //POST /books --> create a book

    // GET /books/:id -->return specific single book
    // DELETE  /books/:id -->delete a book
    // PUT /books/:id -->update a book