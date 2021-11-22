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

  



  console.log(req.body)
  console.log(database)
  // console.log(req.body.fullname)

  let newobj = {
    "fullName":req.body.fullname,
    "aboutMe":req.body.about,
    "githubUrl":req.body.github,
    "twitterUrl":req.body.twitter,
    "favoriteBooks":req.body.books.split(","),
    "favoriteArtists":req.body.artists.split(",")
  };
  fs.readFile("./database.json","UTF-8")
    .then((content) => JSON.parse(content))
    .then((obj)=> {
      obj.users.push(newobj)
      let json = JSON.stringify(obj)
      return json
    })
    .then((json)=>{
      fs.writeFile("./database.json",)
    })
    .catch((err) => console.log(err));

  fs.writeFile("./database.json","UTF-8")

  

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
