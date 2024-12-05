// ===================================================
//   READ OPERATION IN MONGODB .....
// =================================================== 

// 1 Read document in mongoDb
// 2. comparison operator in mongodb
// 3. logical operator in mongodb
// 4. cursors in mongodb
// 5. elements operators in mongodb


// 1. How to find document in mongodb ?
    // 1. find() ==> (return multiple result)
    // -  db.collection-name.find();
    // ex. db.product.find(); ==> (return all document present in collection)

    // - also based on some specific condition you have to find document or filter the document using following command 
    // - filter the document based on the key-value pair also applied condition for filter the data.
    // 2. db.collection-name.find({key:value})
    // ex. db.product.find({name:vishal}) ==> (return the document only with name vishal)

    
// 2. How to find single or one document in mongodb ?
    // 1 db.collection-name.findOne() ==> (return single result);
    // ex. db.product.findOne();
    // 2. also you have to applied the filter and and only first or single element of the result are display.
    // ex. db.product.findOne({name:'vishal'})