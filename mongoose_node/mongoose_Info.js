//==============================================
//! Mongoose : 
//==============================================

//* 1. its an Object Data modeling(ODM) library for MongoDB and node js
// ((like tool designed to work in an asynchronous))
// 2.framework of node js
// 3. This library make mongoDB interaction more straightForward and organized
//* 4. it provide a structured, schema-based data modeling approach.
// - used to established the connection between the node js and mongoDB
// - it manages relationship between data provides, schema validation, and is used to translate between objects code and the representation of those objects in MongoDb


//? flow of mongoose :
// - Node js --> mongoose --> mongo Driver --> mongoDB database


//? why Mongoose instead of official driver ?
// 1. structured Schema :
    //  (mongoose lets you defined your data's structure which make it easier to understand your database structure and work within it)
// 2. validation :
    // mongoose provides built in validation to ensure validity before saving it into database.
// 3. RelationShip :
    // MongoDB does not provide relation itself. 
     // so mongoose help to replicate relation in MongoDB and help us to relate schemas with each other easily
     // one-to-one and one-to-many etc
// 4. Middleware :
    // Mongoose offers running custom function before or after certain operation which is useFul for many cases.
// 5. complex Queries :
    // mongoDB helps to write complex queries aggregation etc with similar syntax to help us to work on project easily 




// installation :
// npm install mongoose

//? Connection about mongoDB and node js using mongoose

 //*  mongoose.connect("mongodb://localhost:27017/employeedata", { useNewUrlParser: true, useUnifiedTopology: true });

// mongodb://localhost:27017/employeedata:

//* - mongodb:// specifies the protocol for MongoDB.

// - localhost:27017 specifies that the MongoDB server is hosted locally (on the same machine as the application) and is listening on the default port, 27017.

// - employeedata is the name of the database to which you’re connecting. If this database doesn’t exist, MongoDB will create it when data is added.

//? - Options ({ useNewUrlParser: true, useUnifiedTopology: true }):
// - useNewUrlParser: true: This option is used to instruct Mongoose to use the new MongoDB connection string parser. However, since MongoDB Node.js Driver v4.0, this option is no longer necessary because it’s the default behavior.

//? useUnifiedTopology: true: This option tells Mongoose to use the MongoDB driver's new connection management engine. Like useNewUrlParser, this option is also redundant in newer versions, as it’s now the default behavior.

// in newer version you need to add only : mongoose.connect("mongodb://localhost:27017/employeedata");


//? DETAIL INFO ABOUT METHOD IN MONGODB:

//* mongoose.connect : 
// is a function in Mongoose, a popular ODM (Object Data Modeling) library for MongoDB in Node.js. This function is used to//* establish a connection between your application and a MongoDB database

//  # Purpose of mongoose.connect
// 1. Connect to MongoDB: It opens a connection to a MongoDB database using a connection string (URL).

// 2. Manage Connection State: It helps manage the state of the connection (e.g., connected, disconnected, error), which is essential for applications that need to interact with a MongoDB database.

// 3. Options for Connection Management: mongoose.connect accepts various options to handle how the connection is established and managed, like setting the connection pool size, handling timeouts, and configuring retry logic.

//* mongoose.connect returns a promise. This allows you to use .then() to handle successful connections and .catch() for errors. Alternatively, you could use async/await:


//? what is Schema in mongoDB ? and How to create schema:
    //* - a mongoose schema defined the structure of the Document
    //* - also useful to get default value and validator etx

// ? How to create schema ?
    //*  const schema_name = new mongoose.Schema({ 
    //     inside that you have to defined the schema
    //* })


//? How to create collection in mongoDB (so with the help of model we have to create the collection)

// Or with the help of the schema we need to create model 
//* - Once a schema is defined, you can create a model based on that schema using mongoose.model(). 
// This model represents a MongoDB collection, enabling you to create, read, update, and delete documents in that collection.

//? what is model in mongodb ?
//* 1. a mongoose model is wrapper on the mongoose schema. so mongoose schema defines the structure of the document, default value , validator etc...
//* 2. where a mongoose model provides an interface to the database for creating , querying, updating, deleting records etc.
//? collection creation.....!
//* const record = new mongoose.model('collection_name', Schema_name)

//? Why Use a Model?

//* 1. Enforces Document Structure:
//  Models ensure that documents follow a consistent structure, making data management easier and reducing errors.
//* 2. Adds Validation and Constraints:
//  With models, you can enforce validations (e.g., required fields, unique values) on your documents.
//* 3. Provides Built-In Methods: 
// Mongoose models come with built-in methods like save(), find(), findById(), updateOne(), and deleteOne(), simplifying data operations.
//* Data Validation: 
// Ensures that only valid data is saved to the database.
//* Data Consistency: 
// Enforces a uniform structure across documents.
//* Code Readability:
//  Organizes code better by providing a clear structure for each collection.
//* Simplified CRUD Operations: 
// Provides a simple API for interacting with MongoDB collections.