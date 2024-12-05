// Import mongoose
const mongoose = require("mongoose");

// Define database URL
const uri = "mongodb://127.0.0.1:27017/shop";

// Connect to MongoDB database
// if you show following error then add  {useNewUrlParser:true}
// 1. throw new MongoParseError('Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"');
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Connection error:", error));


// Define Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: Number,
  color: [String],
  image: String,
  categories: String,
  isFeatured: Boolean,
});

// Create Collection
const Product = mongoose.model("Product", productSchema);

// data to be insert
const data1 = {
  name: "vishal",
  price: 100,
  color: ["red"],
  image: "image/url",
  categories: "None",
  isFeatured: true,
};

// Main function to query data
const main = async () => {
  try {
    // 1. used to get data base on some condition
    const data = await Product.find({ price: { $eq: 300 } }); // Find products with price 0
    console.log("Products with price 0:", data);

    // 2. insert data based on the schema:
    // is you used mongoose then insertOne method is not work you have to used insertMany or create method
    const newData = await Product.insertMany(data1);
    console.log(newData);

 
    // 3. Update existing data
     // you have method like updateOne, findOneAndUpdate, updateMany();
    //  if you update the data you need to used $set operator
    const updatedData = await Product.findOneAndUpdate(
      { name: "vishal", price: 100 }, // Filter query
      { $set: { price: 300 } }, // Update operation
      { new: true } // Option to return the updated document
    );

    // delete the document form the collection
    const deleteQuery = await Product.findOneAndDelete(
      { name: "vishal", price: 300 } // Filter query
    );

    const OneData = await Product.find({ price: { $eq: 300 } }); // Find products with price 0
    console.log("Products with price 0:", OneData);


  } catch (error) {
    console.error("Error:", error);
  } finally {
    mongoose.connection.close(); // Ensure connection is closed
  }
};

main();
