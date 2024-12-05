//==============================================
// Indexing :
//==============================================

// Indexing :

//! 1. what are indexing: 
    // indexing used to optimizing or speed up the query execution because by creating the index data are organized in some specific way
// 2. Benefits of indexing
// 3. managing indexes
// 4. when not to be used indexes


//? 1. Indexing : 
    //* (indexes improve the efficiency of query operation)
    // 1.indexes are specialized data structure that //*  optimize data retrieval speed in mongodb 
    // 2. index store a fraction of data in a more searchable format
    //* they are enable mongodb to locate data faster during queries
    // 3. indexes are separate form collections and multiple indexes can be exist per collection;

    // 4. In MongoDB, indexing is a technique used to //* optimize the search and retrieval of data from a collection.
    // 5.  It improves query performance by allowing MongoDB to quickly locate documents based on the values of specific fields. 
    // 6. Without indexes, MongoDB would need to scan all documents in a collection to satisfy a query, which can be slow for large datasets.


// # Index: An index is a data structure that stores a small portion of the data in a way that allows for faster lookups. It is similar to an index in a book, where it helps you quickly locate a page without reading the entire book.


// # single collection having the multiple indexes



//! Key Feature of the indexing or Benefits of indexing :
    //? 1. Faster querying : 
        // indexing drastically accelerate data retrieval. perticulary for large collection
    //? 2. efficient sorting :
        // indexing facilitate rapid sorting based of specific field
    //? 3. improved aggregation :
        // aggregation operation become more efficient with optimized indexes.
    //? 4. add indexing on multiple filed :
        // complex query executed efficiently with multiple filed indexing 
    //? 5. performances improvement:
    //? 6. speed up query performances by reducing the amount of data need to processing
    //? 7. field base sorting  and sorted order.


//? How to create index ?
    //* index created using createIndex() method
    // db.collection-name.createIndex({field-name:1});

//? How to deleted the index ?
    // using dropIndex() method you have to drop the indexes
    // db.collection-name.dropIndex('index-name' or {"field-name":1} )


// ? Syntax for Creating an Index with a Custom Name:
    // db.collection.createIndex({ field1: 1, field2: -1 }, { name: "custom_index_name" })
    // { field1: 1, field2: -1 }: The index specification where 1 denotes ascending order and -1 denotes descending order.
    // { name: "custom_index_name" }: The optional argument where you specify the desired name of the index.

//? default index 
    // _id is default index

  



// ! Types of Indexes in MongoDB

//? 1. Single Field Indexes :
    // 1. This is the most basic type of index, where //* MongoDB creates an index on a single field in a collection. 
    // 2. The index stores the values of this field in a sorted order, allowing fast lookups.
    //*  db.produce.createIndex({name:1}); 
        // 1 for: ascending order and -1 for: descending order
        // also here you have to pass option as unique object like db.produce.createIndex({name:1},{unique:true}) ==> it defined name is unique does not have duplicate

//? 2. Compound Indexes:
    // Compound indexes consist of multiple fields. MongoDB creates an index that sorts by a combination of fields. 
    //* Compound indexes are useful when queries involve more than one field for filtering, sorting, or both.
    // db.collection.createIndex({ "name": 1, "age": -1 })
        // - creates an index where name is in ascending order and age is in descending order. 
        // efficient for queries like :  db.collection.find({ name: "John", age: { $gte: 30 } })

//? 3. Multikey Indexes :
    // Multikey indexes are //* created automatically when you index an array field.
    //  MongoDB indexes each value of the array separately, making it possible to query array elements efficiently.
 // ex. db.produce.createIndex({ "tags": 1 }) // 'tags' is an array field

//? 4. Text Indexes:
    // Text indexes are used for text search within string fields. You can perform full-text search queries with these indexes, which MongoDB supports natively for English and several other languages.
    //db.collection.createIndex({ "description": "text" })
    // db.collection.find({ $text: { $search: "mongodb" } })
// ! example :
    // {
    //     "_id": 1,
    //     "title": "MongoDB Introduction",
    //     "content": "MongoDB is a NoSQL database that is document-oriented."
    //   },
    //   {
    //     "_id": 2,
    //     "title": "Full-Text Search in MongoDB",
    //     "content": "MongoDB supports full-text search and allows text indexes to perform queries on text fields."
    //   },
    //   {
    //     "_id": 3,
    //     "title": "Database Indexing",
    //     "content": "Indexes in databases are used to improve query performance, including text searches."
    //   }
    //? Create the Text Index
        // db.articles.createIndex({ "title": "text", "content": "text" }) (can create a text index on the title and content fields:)
        // After creating the text index, you can perform full-text search queries using the $text operator.
        // db.articles.find({ $text: { $search: "MongoDB" } })



//? 5. Hash ed Indexes: 
    // TODO
    // Hashed indexes are //* used primarily with shard keys for sharded clusters. They create a hash of the indexed field, making it suitable for use with sharded collections.
    //db.collection.createIndex({ "user_id": "hashed" })

//? 6. Geospatial Indexes:
    // Geospatial indexes are used for geographic queries involving location-based data. MongoDB supports 2D and 2d sphere indexes for working with points on a flat plane or a sphere, respectively
    // 2D Index (for flat plane):
    // db.collection.createIndex({ "location": "2d" })

    //2d sphere Index (for spherical data, like GeoJSON):
    //db.collection.createIndex({ "location": "2d sphere" })

//? 7.  Wildcard Indexes :
    // A wildcard index is //* useful when you don’t know in advance which fields you’ll need to query in a document. The index is created for all fields in a document.
    // db.collection.createIndex({ "$**": 1 })
    //* This index will cover all fields in the documents


//? 8. TTL (Time-to-Live) Indexes
    // TTL indexes are //* used to automatically delete documents after a certain amount of time. 
    // These are particularly //*  useful for applications like caching, session management, or logging.
    // db.collection.createIndex({ "createdAt": 1 }, { expireAfterSeconds: 3600 })
    // Documents will automatically be deleted 1 hour after the createdAt timestamp.


//! Managing Indexes
    
    //? 1.Listing Indexes: 
        // You can list all the indexes of a collection:
        // db.collection.getIndexes()

    //?  Dropping Indexes: 
        // If an index is no longer needed, it’s important to drop it to free up space and improve write performance.
        // db.collection.dropIndex({"field-name":1})

    //? Dropping Index by Name:
        // db.users.dropIndex("index-name")

    //TODO  
    // Index Stats: 
        // MongoDB provides index statistics to understand how indexes are used.
        // db.collection.aggregate([{ $indexStats: {} }])



// ! How to get the execution time of the query ?
//? used  explain() :
    // 1. explain() method is a//* powerful tool used to provide detailed information about how the MongoDB query execution engine processes a specific query
    // 2. explain() method returns a detailed execution plan that shows how MongoDB plans to execute the query, including whether it uses indexes, performs collection scans, or uses other strategies.
    // db.product.find().explain(); 
        //provide detailed information about how the MongoDB query execution engine processes a specific query

    // also using explain method you have to give executionStats using following command ?
        //* db.product.find().explain('executionStats'); This will provide detailed statistics about the execution, such as:
        // Number of documents scanned (nScanned).
        // Number of documents returned (nReturned).
        // Index used (if any).
        // Execution time.


            //  executionStats: {
            // executionSuccess: true,
            // nReturned: 10,
            // executionTimeMillis: 0,
            // totalKeysExamined: 0,
            // totalDocsExamined: 10,
            // executionStages: {
            //   isCached: false,
            //   stage: 'COLLSCAN',
            //   nReturned: 10,
            //   executionTimeMillisEstimate: 0,
            //   works: 11,
            //   advanced: 10,
            //   needTime: 0,
            //   needYield: 0,
            //   saveState: 0,
            //   restoreState: 0,
            //   isEOF: 1,
            //   direction: 'forward',
            //   docsExamined: 10
            // }