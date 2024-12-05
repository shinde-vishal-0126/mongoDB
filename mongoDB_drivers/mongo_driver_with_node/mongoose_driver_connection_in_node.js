// import mongoDb driver
const { MongoClient } = require("mongodb");
//local database url
const uri = "mongodb://127.0.0.1:27017";
// create the instances of the mongodb client
const client = new MongoClient(uri);

// insert example
const data1 = {
    "id": 100,
    "title": "Cucumber",
    "description": "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
    "category": "groceries",
    "price": 0,
    "discountPercentage": 11.44,
    "rating": 4.71,
    "stock": 22,
    "tags": [
      "vegetables"
    ],
    "sku": "6KGF2K6Z",
    "weight": 9,
    "dimensions": {
      "width": 11.04,
      "height": 20.5,
      "depth": 8.18
    },
    "warrantyInformation": "5 year warranty",
    "shippingInformation": "Ships overnight",
    "availabilityStatus": "In Stock",
    "reviews": [
      {
        "rating": 4,
        "comment": "Very satisfied!",
        "date": "2024-05-23T08:56:21.620Z",
        "reviewerName": "Elijah Hill",
        "reviewerEmail": "elijah.hill@x.dummyjson.com"
      },
      {
        "rating": 5,
        "comment": "Fast shipping!",
        "date": "2024-05-23T08:56:21.620Z",
        "reviewerName": "Liam Garcia",
        "reviewerEmail": "liam.garcia@x.dummyjson.com"
      },
      {
        "rating": 4,
        "comment": "Excellent quality!",
        "date": "2024-05-23T08:56:21.620Z",
        "reviewerName": "Ella Cook",
        "reviewerEmail": "ella.cook@x.dummyjson.com"
      }
    ],
    "returnPolicy": "30 days return policy",
    "minimumOrderQuantity": 7,
    "meta": {
      "createdAt": "2024-05-23T08:56:21.620Z",
      "updatedAt": "2024-05-23T08:56:21.620Z",
      "barcode": "2597004869708",
      "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
    },
    "images": [
      "https://cdn.dummyjson.com/products/images/groceries/Cucumber/1.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Cucumber/thumbnail.png"
  }
    


//? defined the function to connect node js application with  MongoDB database (using driver)
// so Main function return the promise
const main = async () =>{
    await client.connect();
    const db = client.db("shop")
    const collection = db.collection("products");
    const data =await collection.find({price:{$eq:0}}).toArray();
    // insert new document
    const data2 = await collection.insertOne(data1);
    console.log(data)
    return "done"
};

main().then(console.log()).catch((e)=>{
    console.log(e)
}).finally(()=>{
    client.close()
})

