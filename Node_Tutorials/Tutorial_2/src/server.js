const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/bezkoder_db", {
    userNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Successfully connect to MongoDB."))
  .catch(err => console.error("Connection error", err));

  const db = require("./models");

const createTutorial = function(tutorial) {
  return db.Tutorial.create(tutorial).then(docTutorial => {
    console.log("\n>> Created Tutorial:\n", docTutorial);
    return docTutorial;
  });
};

const createImage = function(tutorialId, image) {
    console.log("\n>> Add Image:\n", image);
    return db.Tutorial.findByIdAndUpdate(
      tutorialId,
      {
        $push: {
          images: {
            url: image.url,
            caption: image.caption
          }
        }
      },
      { new: true, useFindAndModify: false }
    );
  };
  
  const run = async function() {
    var tutorial = await createTutorial({
      title: "Tutorial #1",
      author: "bezkoder"
    });
  
    tutorial = await createImage(tutorial._id, {
      username: "jack",
    text: "This is a great tutorial.",
      createdAt: Date.now()
    });
    console.log("\n>> Tutorial:\n", tutorial);
  
    tutorial = await createImage(tutorial._id, {
      username: "mary",
      text: "Thank you, it helps me alot.",
      createdAt: Date.now()
    });
    console.log("\n>> Tutorial:\n", tutorial);
  };
  
  mongoose
    .connect("mongodb://localhost/bezkoder_db", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("Successfully connect to MongoDB."))
    .catch(err => console.error("Connection error", err));
  
  run();

  const createComment = function(tutorialId, comment) {
    return db.Comment.create(comment).then(docComment => {
      console.log("\n>> Created Comment:\n", docComment);
  
      return db.Tutorial.findByIdAndUpdate(
        tutorialId,
        { $push: { comments: docComment._id } },
        { new: true, useFindAndModify: false }
      );
    });
  };