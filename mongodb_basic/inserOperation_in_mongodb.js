// ===================================================
//   INSERT OPERATION IN MONGODB .....
// =================================================== 

// 1. How to Inserting document in mongodb (insert single document) ?
    // 1. db.collection-name.insertOne({field1: value1, field2:value2, field3:value3,....}) ==> (used to insert single document in collection)
    // ex. db.product.insertOne({name:'vishal', age:28, phone:999999999});
    // 2. if you insert any record the mongoDb by default create objectId for each document  
// NOTE :
    // if you defined database but not create collection then at time of insert document if you give any collection name then it create automatically given collection name inside the db.


//  # full example
// show dbs; ==> show all existing database
// use shope; ==> create new database
// db; ==> show the current using database;
// db.createCollection('product'); ==> used to create collection 
// db.product.insertOne({
                    // name:'vishal', 
                    // age: 28, 
                    // phone:999999
                    // }) ==> used to insert single document in shope data base inside the product collection;
// db.product.find() ==>used to show all the document inside the collection.

// -----------------------------------------------------------------------------------------------------------------

// 2. How to Inserting MULTIPLE document in mongodb (insert MULTIPLE document) ?
    // - stored multiple document using array of objects. [{document1}, {document2},.....]
    //db.collection-name.insertMany([{
                    // name:'vishal', 
                    // age: 28, 
                    // phone:999999},
                    // {
                    // name:'vishal', 
                    // age: 28, 
                    // phone:999999},
                    // }]) ==> used to insert multiple document in shope database inside the product collection.
// NOTE: 
        // If you insert multiple document in database collection then make sure you have to used [{document1},{document2}, {document3},.....] array of object.


// -------------------------------------------------------------------------------------------------------------------


 // ===================================================
//   When we used Quotes and when not do ?
// ===================================================        
// NOTE:
    // 1. Special character : if a field name contain special character or space or start with a numeric digit then used quotes is necessary
    // ex.db.product.insertOne({
                    // name:'vishal', 
                    // age: 28, 
                    // phone:999999,
                    // course name : 'BE'  ==> (Here you have space in field name so at that case we need to add quotes) like following way
                    // 'course name': 'BE'
                    // }) 

    // 2. Reserved word : if filed name is a reserved keyword in MONGODB used quotes to distinguish if form the reserved keyword.


// ---------------------------------------------------------------------------------------------------------------------


// ===================================================
//   Ordered and un-ordered insert ?
// ===================================================  

// When executing bulk write operation, "ordered" and "un-ordered" determine the batch behavior.

// 1. Ordered insert :
    // 1. Default behavior is Ordered.
    // 2. where MongoDB stops on the first error.
    // ex. db.collection-name.insertMany([{doc1},{doc2},{},.....])
    // 3. if you write or insert multiple or many document and if you have error on 2nd document then only insert first document(i.e before the error all document inserted BUT after the error no any one document inserted)
    // ex .
        // shoes> db.product.insertMany([{name:'vishu', age:34, phone:888888888},{ _id: ObjectId('674e6719046a799a9e86b01f'),name:'akshu', age:28,phone:99999999}])
        // Uncaught:
        // MongoBulkWriteError: E11000 duplicate key error collection: shoes.product index: _id_ dup key: { _id: ObjectId('674e6719046a799a9e86b01f') }
        // Result: BulkWriteResult {
        //   insertedCount: 1,
        //   matchedCount: 0,
        //   modifiedCount: 0,
        //   deletedCount: 0,
        //   upsertedCount: 0,
        //   upsertedIds: {},
        //   insertedIds: { '0': ObjectId('674e6f43046a799a9e86b022') }
        // }
        // Write Errors: [
        //   WriteError {
        //     err: {
        //       index: 1,
        //       code: 11000,
        //       errmsg: "E11000 duplicate key error collection: shoes.product index: _id_ dup key: { _id: ObjectId('674e6719046a799a9e86b01f') }",
        //       errInfo: undefined,
        //       op: {
        //         _id: ObjectId('674e6719046a799a9e86b01f'),
        //         name: 'akshu',
        //         age: 28,
        //         phone: 99999999
        //       }
        //     }
        //   }
        // ]

// Note :
    // 1. in above example when insert multiple data then if 2nd document having error. once document throw error then after the error no any one document insert but before error insert document (result show in above code to insertCount: 1 and then show the error) (i.e if error occurred then stop the inserting next document)
    // 2. i.e MONGODB database stop the processing or executing bulk insert operation when encountering error

// ---------------------------------------------------------------------------------------------------------------------

// 1. TO OVERCOME THIS PROBLEM WE HAVE TO USED  {ordered:false} at end of the query
// 2. to inserted after error document you have to give ordered: false flag at the end.
// 3. using this flag you have to insert all document instead of error (i.e if any error occurred in middle it show the error but before and after the error all document are inserted)
// -----------------------------------------------------------------------------------------------------------------------

// 2. Un-ordered inserts :
    // 1. when executing bulk write operation with unordered flag, 
    // 2. so MongoDB processing after encountering an error
    // db.collection-name.insertMany([{document1},{doc2},{doc3}....],{ordered:false})

 // NOTE :
    // if you used the ordered flag as false at end of query then mongodb insert operation also processing after encountering error 

    // ex.
        // shoes> db.product.insertMany([{name:'vishu', age:34, phone:888888888},{ _id: ObjectId('674e6719046a799a9e86b01f'),name:'akshu', age:28,phone:99999999},{name:'data',age:29,phone:8888888888}],{ordered:false});
        // Uncaught:
        // MongoBulkWriteError: E11000 duplicate key error collection: shoes.product index: _id_ dup key: { _id: ObjectId('674e6719046a799a9e86b01f') }
        // Result: BulkWriteResult {
        // insertedCount: 2,
        // matchedCount: 0,
        // modifiedCount: 0,
        // deletedCount: 0,
        // upsertedCount: 0,
        // upsertedIds: {},
        //  insertedIds: {
        //     '0': ObjectId('674e7324046a799a9e86b025'),
        //     '2': ObjectId('674e7324046a799a9e86b026')
        //   }
        // }
        // Write Errors: [
        //   WriteError {
        //     err: {
        //       index: 1,
        //       code: 11000,
        //       errmsg: "E11000 duplicate key error collection: shoes.product index: _id_ dup key: { _id: ObjectId('674e6719046a799a9e86b01f') }",
        //       errInfo: undefined,
        //       op: {
        //         _id: ObjectId('674e6719046a799a9e86b01f'),
        //         name: 'akshu',
        //         age: 28,
        //         phone: 99999999
        //       }
        //     }
        //   }
        // ]

// NOTE :
    // - in above example we have to used ordered flag as false then it inserted document before the encountering error or after encountering  the error
    // by using {ordered: false} this flag mongodb does not stop the process of inserting document in collection even any document throwing the error instead of error throwing document it insert before and after error all document in the database.


// NOTE :
    // insert statement are CASE-SENSITIVE