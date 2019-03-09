var mongoose = require("mongoose");

// Save a ref to the Schema constructor
var Schema = mongoose.Schema;

// Using Schema constructor, create a new commentsSchema object
var commentsSchema = new Schema({
  // `name` must be of type String
  // `name` must be unique, the default mongoose error message is thrown if a duplicate value is given
  comment:
  {
    type: String
  },
  // `linker` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the news model
  linker:
  [
    {
      type: Schema.Types.ObjectId,
      ref: "News"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var Comments = mongoose.model("comments", commentsSchema);

// Export the Library model
module.exports = Comments;