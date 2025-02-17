const mongoose = require("mongoose");

const url =
  "mongodb+srv://jeelmakwana_018:Jeel-018@cluster0.j5ld9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((e) => console.log("Error", e));
