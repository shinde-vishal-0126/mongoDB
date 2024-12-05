// ===================================================
//  Command in mongodb......
// ===================================================

// 1. what is collection in mongoDB ?
        // 1. collection is a grouping of documents within a database, similar to a table in a relational database.
         // 2. collections in MongoDB are schema-less, meaning that documents in the same collection can have different structures


// 2. managing Database and Collections 

    // 1.how to show database ?    
        // show database-name
        //- show dbs; ==> (it show all present database)


    // 2. how to create new database ? 
        // - use <database-name>;  ==> (create or used existing database if already create in not created it create new one)
        // - use shop; ==>(Here if the database is already is present then used the existing database BUT if database is not present it create new database as shop)

    // NOTE :
        // 1. (in mongodb having rule like if the you create new database and it does not have single collection or record then this is not show when to type the show dbs command)
        // 2. it return switched to db employeedata


    // 3. how to delete database ?
        // - db.dropDatabase();  ==> (delete database)
        // - return output as { ok: 1, dropped: 'vishal' }


    // 4. how to show the collections are present inside the database ? ==> (show the list of collections)
        // - show collections; (used to return or show the list of collections)


    // 5. How to create collect in database ? 
        // - db.createCollection('<collection-name>');   ==> (used to create new collection)
        // ex. db.createCollection('product') 
        // - return: { ok: 1 }

    // 6. How to delete the collections?
        // - db.collection-name.drop();  ==> (used to delete the collection)
        // ex.db.product.drop();
        // - it return: true

    // 7. How to show document in collection ? (i.e how to show the collection data or documents in database ?)
        // db.collection-name.find();  ==> (used to show all the document inside the collection)
        // -  ex. db.product.find();
        // - return whatever document are present inside the selected collection 


    // 8.  How to  show the currently using database ?
        // db; ==>(used to show the currently used database)
         // - in above query db is default word and it represent current database. 

    // 9. how to show data in proper format like json 
        // db.collection-name.find().pretty(); ==> (used to return data in proper format)
        // ex. db.product.find().pretty();
        // - this command return proper json format

    // 10 How to get limited data form the collection
        // db.collection-name.find().limit(2);
        // ex db.product.find().limit(3);

    // 11.how to find all document form the collection
        // db.collection-name.find()  ==> (return all document of collection)
        // ex. db.product.find();
    
    // 12. How to get specific data form the collection (i.e how to apply any filter on document)
        //db.collection-name.find({condition}, {projection});
        // ex. find the document with name vishal.
        // - db.product.find({name:"vishal"}) ==>  (it return or filter data (that having name only vishal))

    // 13 How to find only single document based on the specific field ? 
        // 1. if you used find() method it show all document with specific field or based on filter
        // - db.collection-name.find(); ==> (it return all match data with given condition)
        // BUT
        // 2. if you want to return only first return data based on the given condition then you have to used 
        // db.collection-name.findOne({condition})  ==> {return the only return first data form the result )
        // ex db.product.findOne({name:"vishal"}) 
    // here you have also used the following command 
        // - db.product.find({age:28}).limit(1);

    // 14. How to skip the element form the documents ?
        // db.collection-name.find().skip(2) ==> (here it is used to skip the first two documents.)
        // ex. db.product.find().skip(2);

    // 15.  HOW to find out actual count of return or resultant document ?
        // db.collection-name.find().count()
        // ex. db.product.find().count() ==> return the actual count of the result