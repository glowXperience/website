const express = require("express");
const port = 5000;

const app = express();


//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use("/post", require("./routes/post.route"));



app.listen(port, () => {
    console.log("Server started at localhost:" + port);
});