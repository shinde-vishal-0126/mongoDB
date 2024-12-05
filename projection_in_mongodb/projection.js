//==============================================
// PROJECTION 
//==============================================

// projection :

// 1. projection in mongoDB refer to the process of selecting specific field to include or exclude in the document return by query.
// 2. It allow you to control the size of the result or controlling the amount of data retrieved form the document or  set by limiting the field.
// 3. also it can be improved the performances and reduce network overhead.
// ex. db.collection-name.find({}, {field-name:1, filed-name1:1})
// - To include specified field use project with a value of 1 for the fields you want
// - to exclude filed , use projection with a value of 0 for the filed you want to exclude
// 4. you can not include and exclude fields simultaneously in the same query projection. (i.e it allow to show 1 or 0 any one value in projection)
// Note: You cannot mix inclusion and exclusion in the same projection, except for the _id field.
// syntax
// - Projection is specified as second parameter in the find() method
// db.collection.find(query, projection)
            // query: Specifies the criteria to match documents.
            // projection: Specifies the fields to include or exclude.


// USE-CASE OF projection :
// 1. Optimizing query result or performances by retrieving or returning  necessary field instead of returning entire data.
// 2. reduce the amount of data transferred over the  network
// 3. simplifies application logic by receiving only the needed field


// Array-Filed and Positional Projection

// 1. for fields that are arrays you can used projection to include specific element
// ex db.product.find({}, {'arrayField.$':1})
// NOTE : 
    // $ projects the first matching element form the array based on the query criteria.

// 2. Slice projection :
    // 1. ex. db.product.find({},{arrayField:{$slice:2}}) // ot return first 2 element.

    // 2. db.produce.find({},{arrayField:{$slice:[1,2]}}) here skip one and include next 2

//==============================================
// Projection operators.
//==============================================

// 1. $all : operator
    // the $all operator selects the document where the value of a filed is an array that contain all the specified element.
    // ex : {field:{$all:[value1, value2]}}

// 2. $elemMatch operator :
    // 1.$elementMatch operator matches document that contain an array field with at least one element that matches all the specified query criteria
    // ex {field:{$elemMatch:{query1, query2}}}
    // 2. Projects the first matching element in an array that matches the specified condition.

    // ex: db.collection.find( { name: "John" },  { hobbies: { $elemMatch: { type: "sports" } } })
        // Retrieves the first hobbies array element where type is "sports".

// 3. $meta
    // Projects metadata associated with the query. It is commonly used with text search queries to include the text score.
    // ex. db.collection.find({ $text: { $search: "keyword" } },{ score: { $meta: "textScore"}})
      
// 4. $slice
    // Limits the number of elements returned in an array.
    // syntax:
        // { field: { $slice: count } } // First `count` elements
        // { field: { $slice: [skip, limit] } } // Skip `skip` elements, return `limit` elements

// 5.$
    // Projects the first array element that matches the query criteria.
    // Example:
        // - db.collection.find({ "arrayField.subField": value },{ "arrayField.$": 1 })
        // - Returns only the first matching element in the arrayField.

// note :
    // $all and $elemMatch this two projection element most probably are useful in embedded document only

//==============================================
// EMBEDDED DOCUMENT IN MONGODB 
//==============================================

// 1. In MongoDB, embedded documents refer to a data structure where a document contains one or more sub-documents (nested documents) as part of its fields. 
// 2. This approach allows related data to be stored together in a single document, promoting efficient data retrieval and reducing the need for complex joins (as MongoDB is a NoSQL database)
// 3. Embedded documents are represented as nested JSON objects.
// 4.query document inside embedded document using dot notation
            // {
            //     "_id": 1,
            //     "name": "John Doe",
            //     "age": 30,
            //     "address": {
            //     "street": "123 Main St",
            //     "city": "New York",
            //     "zip": "10001"
            //     },
            //     "orders": [
            //     {
            //         "order_id": 101,
            //         "product": "Laptop",
            //         "quantity": 1
            //     },
            //     {
            //         "order_id": 102,
            //         "product": "Mouse",
            //         "quantity": 2
            //     }
            //     ]
            // }
  
//ex.db.collection.find({ "_id": 1 }, { "address.city": 1 });
// db.comments.find({'comment.user:'vishal'})


// Key Features of Embedded Documents
    // 1. Data Nesting:
        // Fields like address and orders are embedded directly into the parent document.
        // No separate collection or table is needed to store related data.

    // 2. Read Efficiency:
        // All related data is stored in one document, allowing for fewer database reads.
    
    // 3. Atomicity:
        // Updates to the parent document and its embedded documents are atomic, meaning all changes occur together.

// When to Use Embedded Documents :
    // -  1-to-1 or 1-to-few relationships: When a document's related data is limited and can logically fit within the same document.
    // -  Read-heavy workloads: When most queries need the related data together.
    // -  Self-contained entities: When the embedded document is not shared with other entities.


    // embedded vs Referenced
    // ** for highly normalized data or larger datasets, referencing (storing related data in separate documents with references) might be preferable.

    // 1. Embedded Documents: For tightly coupled data with a 1-to-1 or 1-to-few relationship.
    // 2. Referenced Documents: For loosely coupled data or when handling 1-to-many or many-to-many relationships.

