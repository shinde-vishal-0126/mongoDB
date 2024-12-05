//==============================================
// mongoDB 
//==============================================

// 1. RoadMap :
    // 1. Basic : 
            // - introduction to mongodb
            // - Nosql vs sql
            // - json vs Bson
            // - managing DB and collections
            // - advanced curd Operation
            // - comparison operator
            // - Curser in MongoDB
            // - Logical Operators
            // - $expr and Elements Operator
            // -  Projection and Relationship 
            // - Embedded Documents
    // 2. Advanced
            //  - introduction to indexes
            //  - creating and managing index
            // - understanding the aggregation Framework
                    // - introduction to aggregation
                    // - Basic aggregation operator
                    // - combining aggregation stages
                    // - aggregation operators and expression
                    // - pipeLine stages : {$match, $project, $group, $sort, $limit, $skip, $filter, $unwind etx }
    // 3. Projects :
            // -  project1:  working with mongoDB node.js Driver (How to perform curd operation real life project)
            // - project2 : working with mongoose with node js.

    // 4. mongoDB Atlas :
            // - Atlas used provide database service (used in real life)
            // - (database services provider)


    // 5. mongoDB Compass :
            // - user interface of the mongoDB database.



// ===================================================
// 2. what is mongoDB ?
// ===================================================

// open source, document oriented no-sql database database management system.
//  document orient means in a database that stored information in document
//  developed by 10Gen company ==> then mongoDB. ==> first version in 2009 


// ===================================================
// 3. why used mongoDB ?
// ===================================================

// mongoDB database designed for flexibility, scalability, and performing or handling unstructured and semi-structured data.


// ===================================================
// 4. Sql and no-Sql (MongoDB) ?
// ===================================================

// sql (mysql):
// 1. RDBMS (relation database management system and work on relation database) (table format)
// 2. it stores data in form of entity as tables
// 3. (They used table structure to stored data in a row and column)
// 4. it is used sql to query database
// 5. suitable for application where well-defined structure 
// ex. mysql, postgres, Oracle
// 6.sql used structured table to store data in row


// No-sql (mongoDb)
// 1. it is a non-relational,
// 2. document-oriented database management system and work on document based database
// 3. mongoDb data are stored in the form of document
// {
// id:8383883838838388383,
// user_id:ieiroeurowe93,
// phone:"3883883838383",
// email:"vishalshinde@gamol.com"
// }
// 4. suitable for application with dynamic or evolving data model
// ex. mongoDB, cassandra, redis.
// 5. mongoDB provide flexibility in data storage allowing varied data types and structure


// ===================================================
// 5. MONGODB TERMINOLOGY .....
// ===================================================
        // 1. DATABASE :
                    // 
                    // Single database having multiple COLLECTIONS like
                        // 
                        // 1. STUDENT :
                        // - inside the student Collection have document in JSON format.like
                        // [{
                        //   "_id": "stu101",
                        //   "name": "Jane Doe",
                        //   "age": 21,
                        //   "email": "jane.doe@example.com",
                        // },{
                        //   "_id": "stu202",
                        //   "name": "John Smith",
                        //   "gender": "Male",
                        //   "address": {
                        //     "city": "Los Angeles",
                        //     "state": "CA"
                        //   }]
                        // 2. teacher,
                        // 3. course
// NOTE :
    // mongoDB's document are schema-less



// ===================================================
//  6. KEY FEATURES OF MONGODB ...
// ===================================================

// 1. Flexible Schema design :
        // - mongodb allow dynamic schema-less data structure
// 2. scalability and performances :
        // - Horizontal scaling support large data and high traffic
// 3. Document oriented storage :
        // - data are stored in flexible json like BSON document.
// 4. dynamic query :
        // - Rich query language with support for complex query
// 5. support indexing :
        // - utilization or indexes speed up query execution
// 6. Aggregation framework :
        // - perform advanced data transformation and analysis.
// 7. Open source community :


// ===================================================
//  7. HOW MONGODB WORKS .............
// ===================================================

    // FRONTEND ==> (HTML, CSS, REACT JS , NEXT JS) :
    //  BACKEND ==> (NODEJS, EXPRESS JS, NEXT.JE, PYTHON) :
                // Aa backEnd we have to used  1. NODE JS :
                                                        //
    //- (Node js send request to mongodb server) ==>    //  (before the database connection we need to communicate with mongo-db server)                                             //  server.
                                                        //  

                                                        // 2. MONGODB-SERVER :
                                                        // 
                                                        // - (if node js send request to the mongo-db server then mongo-db server does not connect to the database directly )
                                                        // - (its having storage engine like wiredTiger (name of the storage engine))
                                                        //

                                                        //  3. MONGODB-SERVER HAVING THE STORAGE ENGINE
                                                        //- (This is storage engine used in mongodb to communicate with database)
                                                        // - (Actual work of storage engine READ AND WRITE file or documents in database)

                                                        //  4. Database (storage engine communicate with database to read and write file form the database.)
                                                        // 

// NOTE : (flow) :
    // when node js send request ==> request goes to the mongo-db server ==> mongo-db server does not connect directly to the mongo-db database ==> it having storage engine ==> mongodb server send request to the storage engine and based on that request  storage engine and storage engine converted json data into Bson and  then communicate with database and (done work as read or write file or document in database) 


// ===================================================
// 8. BSON (Binary JSON);
// ===================================================

//  1. in mongoDB we write data or document of json format but behind the since data are stored in BSON (BINARY JSON FORMAT)
// -(LIKE  binary representation of the json)
// 2. by utilizing BSON :
        // 1. mongodb achieve HIGHER Read and write speed.
        // 2. Reduce storage requirement.
        // 3. improved data manipulation capabilities
        // 4. making it well-suited for handling large and complex dataset while performing efficiency.


// 3. MongoDb used BSON to query the document
// 1. BSON, data is structured as a series of key-value pairs where keys are strings and values can be various data type
// 2. Each document has a unique identifier (_id) by default in MongoDB, which uses the ObjectId forma
// 3. BSON extends JSON by adding more data types and encoding the data in a binary format, making it efficient for both storage and transfer over networks
// 4.  here we have to say collection (collection are array of object )
// 5. here single object is called as Document
// 6.  here we have fields ex. email are single field


// ===================================================
//  9. what is differences between JSON and BSON
// =================================================== 
//  json:
// 1. json are standard file format
// 2. comparatively less fast
// 3. consume comparative less space 
// 4. used to transmission of data 
// 6. no such encoding and decoding technique
// 7. Human-readable and easy to edit manually
// 8. Limited data types, supporting strings, numbers, booleans, arrays, and nested objects.


// Bson
// 1. Bson in binary file format (stands for Binary representation of the json)
// 2. faster as compare to the json
// 3. more space is consume
// 4. used to storage of data 
// 5. faster encoding and decoding technique
//  6. Binary and not human-readable,
// - BSON: Extended data type support, including:
        // ObjectId: Used for unique identifiers in MongoDB.
        // Date: A native date type storing time in milliseconds since the epoch.
        // Binary Data: Used for storing raw binary data like images or files.
        // MinKey and MaxKey: Special types for advanced comparison.
        // Decimal128: For precise decimal numbers, which JSON lacks natively.


// ===================================================
//  INSTALLATION .......
// =================================================== 
// NOTE :
// - by default port of mongoDB database in 27017 


// 1. download mongodb community server:
// https://www.mongodb.com/try/download/community

// 2. download mongodb shell
// https://www.mongodb.com/try/download/shell

// 3. download mongodb database tool
// https://www.mongodb.com/try/download/database-tools

// 4. used this file path to run server:
    // 1. "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" --version (this is db version)
    // 2.  "C:\Program Files\MongoDB\Server\8.0\bin\mongos.exe" --version (This is mongoDB shell version)
    // 3. how to run mongoDB on cmd : used following command :"C:\Program Files\MongoDB\Server\8.0\bin\mongosh.exe"  --> run of cm
    // 4.  instead of this command you have to set environment variable and used only mongosh command then start your mongoDb server.

// 1. to check mongodb version - mongod --version
// 2. to run the mongodb server using command in cmd : mongosh