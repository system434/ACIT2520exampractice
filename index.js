const express = require("express");
const fs = require("fs").promises;

const PORT = process.env.PORT || 8007;
const app = express();

// Don't worry about these 4 lines below
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("createcard");
});

app.post("/", (req,res) =>{
  fs.readFile("./database.json","UTF-8")
    .then((content) => JSON.parse(content))
    .then((obj)=> console.log(obj.users))
    .catch((err) => console.log(err));
    

  

});

app.get("/people/:id", (req, res) => {
  res.render("people");
});


app.get("/:id/photos", (req, res) => {
  const id = req.params.id;
});

app.listen(PORT, () => {
  console.log(`Server now is running at http://localhost:${PORT} 🚀`);
});
