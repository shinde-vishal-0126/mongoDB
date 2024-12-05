//==============================================
//  Cursors in mongodb:
//==============================================

// 1. What is cursor in mongodb ?
    // 1. Cursor in mongoDB are used to iterate over query result.
    // 2. Cursor used to effectively retrieve large result from queries
    // 3. Cursor in mongodb used to efficiently retrieve large result set form queries, providing control over the data retrial process.
    // 4. cursor are pointing to the result set on server.
    // 5. When you execute a query mongodb return cursor object. which allow you to access the document in result set one at a time or in batches.
    // 6. mongodb retrieve query result in batches using cursor.
    // 7. using cursor you have to done automatic Batching

// ---------------------------------------------------------------------------------------------------------------------------


//==============================================
//  Key Features in Cursors:
//==============================================

// 1. Lazy evaluation :
    // cursor fetch document when requested minimizing memory usage.

// 2. Batch Size : (Automatic Batching)
    // mongodb retrieve result in batches.
    // the default batch size in 101 and 4mb for subsequent batches
    // using batch size improve the memory efficiency

// 3. interactive access :
    // you can iterate over the cursor to process document one by one.

// 4. Timeout :
    // by default cursor have a server-side timeout of 10 min if no operation performed this can be disabled by making the cursor "no timeout"


// ---------------------------------------------------------------------------------------------------------------------------


//==============================================
//  Cursor methods:
//=============================================

// Basic method :

// 1. cursor.hasNext() :
    // check if there are more document to fetch

// 2. cursor.next();
    // Retrieve the next document in the cursor

// 3. cursor.forEach(callback) :
    // iterate through each document in the cursor and applied a callback function

 // ---------------------------------------------------------------------------------------------------------------------------


//==============================================
//  Cursor Modifiers:
//=============================================

// 1. limit(n):
    // Limit the number of document return by cursor

// 2. skip(n);
    // used to skip first n document

// 3. sort();
    // sort the document in ascending or descending order.
    // ex. db.collection-name.find({price:{$gt :1200}}).sort({price:1})
    // in sort pass field name you want to sort based on that  and also pass value 1 for ascending order and -1 for descending order.

// 4. count();
    // return result set count (count of actual return document)


// ---------------------------------------------------------------------------------------------------------------------------

//==============================================
//  Cursor Options:
//=============================================

// 1. batchSize(n) :
    // Limit the number of document fetched in one batch

// 2. noCursorTimeout();
    // prevent the cursor from timing out

// 3. tailable :
    // Keep the cursor open to allow new data retrieval 

// 4. maxTimes(milliseconds);
    // specifies a time limit in millisecond for processing the query.

// ---------------------------------------------------------------------------------------------------------------------------


//==============================================
//  Cursor Type:
//=============================================
// Type of cursor

// 1. default cursor:
    // default cursor created when you run standard query
    // iterate over query result

// 2. tailable Cursor :
    // used with capped collection to fetch new document as they added
    // tailable cursor operate in two mode:
        // Await data : keep the cursor open and wait for new data
        // Normal : close when reaching the end of data 

// 3. Aggregation Cursor:
    // used for result from an aggregation pipeline

// 4. explain cursor :
    // provides query execution statistics and performances information

// ---------------------------------------------------------------------------------------------------------------------------


//==============================================
//  Cursor Example:
//=============================================
// example:
//  1. Basic Query:
        // const cursor = db.collection('users').find({ age: { $gt: 18 } });
        // while (cursor.hasNext()) {
        //     printjson(cursor.next());
        //   }

// 2.With Modifiers:
        // db.product.
        // .find({ price: { $lt: 50 } })
        // .sort({ price: -1 })
        // .limit(5)
        // .forEach(doc => {
        // print(doc.name);
        // });


// 3. Tailable Cursor Example:
        // const cursor = db.cappedCollection.find({}, { tailable: true, awaitData: true });
        // while (cursor.hasNext()) {
        //   printjson(cursor.next());
        // }

// ===========================================================================================================================

// Best Practices:

// 1. Close Cursors Explicitly:
    // Use the cursor.close() method to release server resources when done.

// 2. Control Batch Size:
    // Adjust batchSize() for performance optimization in large datasets.


// 3. Avoid Long-running Cursors:
    // Use timeouts and paginate results to prevent resource exhaustion.

// 4. Use Projections:
    // Fetch only required fields to reduce the size of data transferred.

