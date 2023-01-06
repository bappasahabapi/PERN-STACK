const express =require("express");

const app =express();
const PORT =9001;

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});

// GET /books -->return all the books
app.get('/books',async(req,res)=>{
    try {
        res.status(200).json({message:"All the books return"})
        
    } catch (error) {
        res.json({error:error.message})
    }
})
//POST /books --> create a book

// GET /books/:id -->return specific single book
// DELETE  /books/:id -->delete a book
// PUT /books/:id -->update a book
