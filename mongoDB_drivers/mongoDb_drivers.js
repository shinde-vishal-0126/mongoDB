// ======================================================
// MONGODB-DRIVERS
// ======================================================

//! introduction to mongoDB drivers

// working with nodejs mongoDB Drivers

//? what is drivers ?
    //*  1. Derivers are s/w libraries that allow application to interact with mongoDB databases
    // MongoDB offers official and community support drivers for various programming languages
    // Drivers provide apis tailored to specific programming language


//? Create a connection with MongoDB database and start working with it.
//* 1. install mongoDB driver using npm install mongodb
// https://www.npmjs.com/package/mongodb
// used : npm i mongodb

//? used following code :node js connect application using MongDB node js Driver: 
// import mongoDb driver
const { MongoClient } = require("mongodb");
//local database url
//* const uri = "mongodb://127.0.0.1:27017";

//* create the instances of the mongodb client
const client = new MongoClient(uri);

//* defined the function to connect node js application with  MongoDB database (using driver)
    const main = async () =>{
        //used connect method co connect driver
        await client.connect();
        // give data base name
        const db = client.db("shop")
        // give Collection base name
        const collection = db.collection("products");
        //  write query it return promise so need to give await
        const data =await collection.find({price:{$gt:1200}}).toArray();
        console.log(data)
        return "done"
    };

//  main function return the promise:
    main().then(console.log()).catch((e)=>{
        console.log(e)
    }).finally(()=>{
        client.close()
    })
