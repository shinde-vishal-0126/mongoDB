 # mongodb_basic

    @ mongodb_basic.js

        1. roadmap :

        2. what is mongodb ? (document-oriented no-sql database)

        3. why used mongodb ? (used for flexibility, scalability, and handling un-structured and semi-structure)

        4. Sql and no-Sql (MongoDB) ? (sql ==> relation database , well-defined schema and fix data structure, ) (mongoDB ==> non- relational database, us-structured and semi-structure  data (not fixed data structure), data stored in document format.)

        5. MONGODB TERMINOLOGY : 
            - in mongoDB database having ==> multiple collection and ==> collection having the documents in json format.
            - mongoDB's documents are Schema-less

        6. KEY FEATURES OF MONGODB ... :
                1. Flexible Schema design :
                        - mongodb allow dynamic schema-less data structure
                2. scalability and performances :
                        -  Horizontal scaling support large data and high traffic
                3. Document oriented storage :
                        - data are stored in flexible json like BSON document.
                4. dynamic query :
                        - Rich query language with support for complex query
                5. support indexing :
                        - utilization or indexes speed up query execution
                6. Aggregation framework :
                        - perform advanced data transformation and analysis.
                7. Open source community :

        7. HOW MONGODB WORKS .........
            -  when node js send request ==> request goes to the mongo-db server ==> mongo-db server does not connect directly to the mongo-db database ==> it having storage engine ==> mongodb server send request to the ==> storage engine and based on that request  and storage engine converted json data into Bson and then are communicate ==> with database and (done work as ==> read or write file or document in database) 
        
        8. BSON (Binary JSON);
            - in mongoDB we write data or document of json format but behind the since data are stored in BSON (BINARY JSON FORMAT) -(LIKE  binary representation of the json)
        
        9. what is differences between JSON and BSON
            1. json 
            -  javascript object notation.
            -  it consume less space
            - json are less fast
            - json are human-readable 
            - used to transmission of data
            - no en-coding and de-coding technique

            2. Bson
            - Binary json(Binary representation of the json)
            - it consume more space as compare to json
            - bson are fast as compare to  the json
            - bson are not human-readable
            - en-coding and de-coding technique available.

        10. Installation :


    @ mongodb_basic.js
        1. what is collection in mongoDB ?
            - collection is a grouping of documents within a database, similar to a table in a relational database.
            - collections in MongoDB are schema-less, meaning that documents in the same collection can have different structures

        2. managing Database and Collections
            - inside that we have covered all the command is present in mongo-db
            - NOTE :
                1. (in mongodb having rule like if the you create new database and it does not have single collection or record then this is not show when to type the show dbs command)
                2. it return switched to db employeedata

    @ insertOperation_in_mongodb.js
        1. INSERT OPERATION IN MONGODB (insert single document)
             - db.collection-name.insertOne({field1: value1, field2:value2, field3:value3,....}) ==> (used to insert single document in collection)
            - ex. db.product.insertOne({name:'vishal', age:28, phone:999999999});

        2. INSERT OPERATION IN MONGODB (insert multiple document in database collection)
            - If you insert multiple document in database collection then make sure you have to used [{document1},{document2},      {document3},.....] array of object.
            - db.collection-name.insertMany([{
                    // name:'vishal', 
                    // age: 28, 
                    // phone:999999},
                    // {
                    // name:'vishal', 
                    // age: 28, 
                    // phone:999999},
                    // }])  ==> used to insert multiple document in shope database inside the product collection.

        3.  Ordered and un-ordered insert ?
            - When executing bulk write operation, "ordered" and "un-ordered" determine the batch behavior.
                1. Ordered insert :
                    1. Default behavior is Ordered.
                    2. where MongoDB stops on the first error.
                    -  ex. db.collection-name.insertMany([{doc1},{doc2},{},.....])
                    3. if you write or insert multiple or many document and if you have error on 2nd document then only insert first document(i.e before the error all document inserted BUT after the error no any one document inserted)

    - TO OVERCOME THIS PROBLEM WE HAVE TO USED  {ordered:false} at end of the query

                2. Un-ordered inserts :
                    1. when executing bulk write operation with unordered flag, 
                    2. so MongoDB processing after encountering an error
                    - db.collection-name.insertMany([{document1},{doc2},{doc3}....],{ordered:false})

    NOTE :
        - if you used the ordered flag as false at end of query then mongodb insert operation also processing after encountering error 



# import&export_mongodb
    1. import_export_json_data.js :
        - 1.mongoimport path-of your json file  -d database-name -c collection-name (it show data format in object)
                - mongoimport: Command-line tool to import data into MongoDB.
                - C://data/jsonpath.json: Path to the JSON file you want to import. (Ensure the path is correct and accessible.)
                 -d shop: Specifies the database name (shop).
                 -c product: Specifies the collection name (product).
            - data format : 
                -  { "name": "Product A", "price": 100 }
                -  { "name": "Product B", "price": 150 }
                -  { "name": "Product C", "price": 200 }

    2. mongoimport --file C:\data\jsonpath.json --db shop --collection product --jsonArray
                - 1.mongoimport: Command-line tool to import data into MongoDB.
                -  2. --file: Specifies the file to import.
                -  3. C:\data\jsonpath.json: Updated path format to match typical Windows paths.
                -  4. --db shop: Specifies the database name (shop).
                -  5. --collection product: Specifies the collection name (product).
                -  6. --jsonArray: Indicates that the file contains an array of JSON objects.
            - data format :    
                      [
                    -  { "name": "Product A", "price": 100 },
                    -  { "name": "Product B", "price": 150 },
                    -  { "name": "Product C", "price": 200 }
                    -  ]


    3. Export data using multiple options :
            1. --jsonArray: Exports data as a JSON array. Useful if you want the output file to be an array instead of separate JSON objects.
                1. mongoexport --db myDatabase --collection myCollection --out /data/backup.json --jsonArray 
                - also used the following command :
                2.mongoexport -d shop -c product -o path of the file where you have stored exported data..
                 -jsonArray: Exports data as a JSON array. Useful if you want the output file to be an array instead of separate JSON objects.

            2. --query: Specifies a query to filter the exported data (uses MongoDB query syntax).
                1. mongoexport --db database-name --collection collection-name --out /path/to/exported/file.json --query '{ filter_conditions }'
                 - --query: Specifies a query to filter the exported data (uses MongoDB query syntax)

            3.  --fields: Specifies the fields to export, e.g., --fields "name,age,address".
               1. mongoexport --db myDatabase --collection myCollection --out /data/backup.json --jsonArray --fields "name,age,address"
                 - --fields: Specifies the fields to export, e.g., --fields "name,age,address".

---

# comparison_in_mongodb :
## comparison operator:
 dollar symbol represent the operator



1.  **$eq** 
- $eq (matches value that are equal to the specified value)

2. **$gt** 
- $gt (matches value that are grater then a specified value)

3. **$gte** 
- $gte (matches value that are grater then or equal to a specified value)

4. **$in** 
- $in (matches amy of the value in specified in array)

5.  **$lt** 
- $lt (matches value that are less then to a specified value)

6.  **$lte** 
- $lte (matches value that are less then or equal to a specified value))

7.  **$ne** 
- $ne  (matches all value that are not equal to specified value)

8.  **$nin** 
- $nin (Matches non of the value specified in an array)

---

# Cursor_in_mongodb :

## What is a Cursor in MongoDB?
- A cursor in MongoDB is used to iterate over the results of a query.
- It allows efficient retrieval of large result sets from queries.
- A cursor points to the result set on the server, enabling controlled data retrieval.
- When you execute a query, MongoDB returns a cursor object that allows access to documents one at a time or in batches.
- MongoDB retrieves query results in batches using the cursor.
- Automatic batching is implemented with cursors.

---

## Key Features of Cursors

1. **Lazy Evaluation**  
   - Documents are fetched only when requested, minimizing memory usage.

2. **Batch Size (Automatic Batching)**  
   - MongoDB retrieves results in batches.  
   - Default batch size: 101 documents or 4 MB for subsequent batches.  
   - Improves memory efficiency.

3. **Interactive Access**  
   - Allows iteration over the cursor to process documents one by one.

4. **Timeout**  
   - Cursors have a default server-side timeout of 10 minutes if no operation is performed.  
   - This can be disabled by setting the cursor to **no timeout**.

---

## Cursor Methods

### Basic Methods
1. **`cursor.hasNext()`**  
   - Checks if there are more documents to fetch.

2. **`cursor.next()`**  
   - Retrieves the next document in the cursor.

3. **`cursor.forEach(callback)`**  
   - Iterates through each document in the cursor and applies a callback function.

---

## Cursor Modifiers

1. **`limit(n)`**  
   - Limits the number of documents returned by the cursor.

2. **`skip(n)`**  
   - Skips the first `n` documents.

3. **`sort()`**  
   - Sorts documents in ascending (`1`) or descending (`-1`) order.  
   - Example:  
     ```javascript
     db.collectionName.find({price: {$gt: 1200}}).sort({price: 1})
     ```

4. **`count()`**  
   - Returns the total count of documents in the result set.

---

## Cursor Options

1. **`batchSize(n)`**  
   - Limits the number of documents fetched in one batch.

2. **`noCursorTimeout()`**  
   - Prevents the cursor from timing out.

3. **`tailable`**  
   - Keeps the cursor open to allow new data retrieval.

4. **`maxTimeMS(milliseconds)`**  
   - Specifies a time limit (in milliseconds) for processing the query.

---

## Types of Cursors

1. **Default Cursor**  
   - Created when running a standard query.  
   - Allows iteration over query results.

2. **Tailable Cursor**  
   - Used with capped collections to fetch new documents as they are added.  
   - Operates in two modes:  
     - **Await Data**: Keeps the cursor open, waiting for new data.  
     - **Normal**: Closes the cursor when it reaches the end of data.

3. **Aggregation Cursor**  
   - Used to return results from an aggregation pipeline.

4. **Explain Cursor**  
   - Provides query execution statistics and performance information.

---

## Logical operator 

1. **`$and : (both condition are true)`**
    - db.product.find({$and:[{age:{$gt:28}},{name:'vishu'}]});

2. **`$or : (at least  any one condition are true.)`**
    - db.product.find({$or:[{age:{$gt:28}},{name:'vishu'}]});

3. **`$nor : (it return the data where document does not match any condition)`**
    - db.product.find({$nor:[{age:{$gt:28}},{name:'vishu'}]});

4. **`$not: (it inverting the result)`**
    - db.product.find({age:{$not:{$gt:28}}});

## NOTE

1. if you work with logical operator then you have to used array of condition like {$and:[{condition1}, {condition2}, ...]}
 
 ---

## Complex Expression Operator ($expr) :
1. **`$expr : allows you to use aggregation expressions directly within the query language. `**

- The $expr operator in MongoDB is a powerful feature that allows you to use aggregation expressions directly within the query language. 
- This is particularly useful when you want to compare fields in the same document, apply conditions using aggregation expressions, or perform more complex queries that standard query operators cannot handle.

---            

## Element_operator_in_mongodb :

1. **`$exists`**
- Determine weather a specified field is exists in document or not
- db.product.find({age:{$exists:true},age:{$gt:28}});

2. **`$type`**
- $type operator filters document based on the BSON data type of a field
- Matches documents where the value of a field is of a specified BSON type.
- db.product.find({age:{$type:number},age :{$gt:28}});

3. **`$size`**
- $size operator is used to match documents where an array field has a specific number of elements
- { field: { $size: <number> } }

---

# PROJECTION

## projection in mongoDB (inclusive and exclusive field in result query)

1. projection in mongoDB refer to the process of selecting specific field to include or exclude in the document return by query.
2. it allow you to control the size of the result set by limiting the field you retrieve .
3. it can improved performances and reduce network overhead.

## Array filed and positional projection :
1. in array filed you have to used projection with specific array field and also projection using slice (to limited and skip the data form the result query in projection)db.collection.find({ $text: { $search: "keyword" } },{ score: { $meta: "textScore"}})

## projection operator 
1.  **`$elemMatch`**
- Projects the first matching element in an array.
- db.collection.find( { name: "John" },  { hobbies: { $elemMatch: { type: "sports" } } })


2. **`$meta`**
- Projects metadata like text search score.
-db.collection.find({ $text: { $search: "keyword" } },{ score: { $meta: "textScore"}})

 
3. **`$slice`**
- Limits the number of elements in an array or skips and limits a range.
- { field: { $slice: [skip, limit] } } // Skip `skip` elements, return `limit` elements
 

4. **`$`**
- Projects the first matching element in an array based on the query.
- db.collection.find({ "arrayField.subField": value },{ "arrayField.$": 1 })

5. **`$all`**
- $all operator selects the document where the value of a filed is an array that contain all the specified element.
- {field:{$all:[value1, value2]}}



## There are following way to updated the document in mongodb :

1. updateOne: 
2. updateMany:
3. findOneAndUpdate:


## also you have to perform following operation

1. Removing and renaming fields
2. Adding and Removing item form an array
3. Updating embedded documents

## Common Update Operators
- (this command operator are used with embedded document also you have to use $ positional operator to work with embedded document)

1. $set: Updates specific fields.
2. $unset: Removes a field.
3. $inc: Increments a value.
4. $push: Appends a value to an array.
5. $pull: Removes matching values from an array.
6. $addToSet: Adds a value to an array only if it doesn't already exist.
7. $pop : remove the last value form an array.

## delete_operation_in_mongodb

1. deleteOne();
2. deleteMany():
3. findOneAndDelete()


# indexes in mongodb

## indexes_in_mongodb:
- indexing :
    - the process of using a data structure to store a portion of a collection's data set in an organized way. This allows MongoDB to efficiently execute queries by limiting the number of documents it needs to scan

- MongoDB supports several types of indexes to optimize query performance. Here's a brief overview of each index type:

1. **`Single Field Index`**
- An index on a single field.
- Example: { "fieldName": 1 } (ascending order) or { "fieldName": -1 } (descending order).

2. **`Compound Index:`** 
- An index on multiple fields.
- Example: { "field1": 1, "field2": -1 }.

3. **`Multikey Index:`**
- Used for array fields. MongoDB creates index entries for each element of the array.
- Example: { "tags": 1 } for an array field tags.

4. **`Text Index:`**
- Used for full-text search on string fields. Supports multiple languages.
- Example: { "fieldName": "text" }.

5. **`Hashed Index:`**
- Used with sharded collections. Creates a hash of the indexed field for even distribution across shards.
- Example: { "fieldName": "hashed" }.

6. **`Geospatial Index:`**
- For geographic queries, used with 2D and 2DSphere data.
- Example (2D): { "location": "2d" }.
- Example (2DSphere): { "location": "2dsphere" }.

7. **`Wildcard Index:`**
- Indexes all fields in a document, useful for schema-less data or when the fields to query are dynamic.
- Example: { "$**": 1 }.

8. **`TTL (Time-To-Live) Index:`**
- Automatically deletes documents after a certain period (e.g., for expiring sessions or logs).
- Example: { "expireAt": 1, expireAfterSeconds: 3600 }.-

---

# Aggregation in mongodb

 ## Aggregation in mongodb :
- Aggregation in MongoDB is a powerful framework for processing and analyzing data within a collection. It is often used to transform data and produce computed results, such as grouping, filtering, projecting, sorting, and more.
- Aggregation operates through a pipeline consisting of stages, where each stage transforms the data in some way. The output of one stage becomes the input for the next.
1. . **`$match:`**
- Filters documents based on a condition (similar to a WHERE clause in SQL)

2. . **`$group`**
- Groups documents by a specified field and performs aggregations like sum, avg, max, etc.

3. . **`$sort:`**
- Shapes the output documents, including or excluding fields, or computing new fields.

4. . **`$sort`**
- Sorts documents by a field in ascending (1) or descending (-1) order

5. . **`$limit and $skip`**
- Limits the number of results and skips a specified number of documents

6. . **`$unwind:`**
- Deconstructs an array field into separate documents, one for each element in the array.

- many more having: stages


# Atlas:
- Atlas is database management services provider.fully managed cloud database services
- a cloud database service that provides a fully-managed solution for deploying, operating, and scaling MongoDB databases: 

# Compass:
- Graphical user interface of mongodb.