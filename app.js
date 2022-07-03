const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/fruitsDB");

  const fruitsSchema = new mongoose.Schema({
    name: String,
    score: Number,
    review: String,
  });

  const bananaModel = mongoose.model("fruits", fruitsSchema);

  // For only one insert
  //   const banana = new bananaModel({ name: "Banana" });
  //   banana.save();

  // Or
  //   bananaModel.create({ name: "Banana" }, function (err, small) {
  //     if (err) return handleError(err);
  //     // saved!
  //   });

  // For many inserts
  bananaModel.insertMany(
    [
      {
        name: "Apple",
        score: 8,
        review: "Great fruit",
      },
      {
        name: "Orange",
        score: 6,
        review: "Kinda sour",
      },
      {
        name: "Banana",
        score: 9,
        review: "Great stuff!",
      },
    ],
    function (err, small) {
      if (err) return handleError(err);
      // saved!
    }
  );
}
