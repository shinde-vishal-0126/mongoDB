//==============================================
// Update operation in mongodb:
//==============================================

// # There are following way to updated the document in mongodb :
    // 1. updateOne: 
    // 2. updateMany:
    // 3. findOneAndUpdate:


// # also you have to perform following operation
    // 1. Removing and renaming fields
    // 2. Adding and Removing item form an array
    // 3. Updating embedded documents

// # Common Update Operators
    // $set: Updates specific fields.
    // $unset: Removes a field.
    // $inc: Increments a value.
    // $push: Appends a value to an array.
    // $pull: Removes matching values from an array.
    // $addToSet: Adds a value to an array only if it doesn't already exist.
    // $pop : remove the last value form an array.

// # NOTE : 
    // You have update any document then you have to used special operator as "$set"

// 1. updateOne:
    // - This updates the first document that matches the filter criteria.
    // - db.collection.updateOne(filter, update, options); 
    // - db.users.updateOne({ username: "vishal" },{ $set: { age: 30 } }); 


// 2. updateMany: 
    // - Update multiple documents
    // - This updates all documents that match the filter criteria.
    // - db.users.updateMany(
    //   { isActive: true },       // Filter
    //   { $set: { isVerified: true } }); // Update


// 3. findOneAndUpdate: 
    // Update and retrieve the document
    // This updates a single document and returns either the original or updated document.
    // db.users.findOneAndUpdate(
        //  { username: "vishal" },      // Filter
        // { $inc: { loginAttempts: 1}}, // Update
        // { returnDocument: "after"});   // Options: "before" or "after"


// # Removing and renaming field:

// 4. Removing the specified field:
    // - db.product.updateOne({name:vishal},{$unset:{name:1}})
    // - $unset field value as 1, 0 and also null (all value are treated as same purpose to remove field) it means remove the field
    // NOTE:
        // - If you want to remove any field from the document you have to used "$unset" operator
      

// 5. Rename the field name 
    // - db.product.updateOne({name:'vishal'},{$rename:{"name":"fullName"}})
    // - if you want to rename any filed form the document you have to sed "$rename" operator in update query in mongodb.
    

// 6. Adding newFiled in existing document :
    // - To add new field in document you have used "$set" operator and give newFile with its value
    // - db.product.updateOne({fullName:'data'},{$set:{"pinCode":412401}});


// # Adding and Removing item form the array : 
// # work with embedded document :

    // - in your document one of the filed or element are array of object kind ([{}]) then how to updated or remove this element from the document.

// 6. How to push new element in and array or array of object ?
    // To push or append or add new element into the array of object field you have to used "$push" method
    // ex.  db.product.updateOne({_id: ObjectId('675015f5046a799a9e86b027'),"orders.orderId":"ORD123"},{$push:{"orders.$.items":{itemName:"keybord",  quantity: 1, price: 1000}}});
    // $ operator used to targets the first matched element in the orders array based on the orderId.
    // $ operator is positional operator (used for index ) 
    // whatever filter i have applied using the $(positional operator) i have get the index number of the filter :


// 7. How to pop the last element of an array of object in document 
    // The $pop operator in MongoDB is used to remove the first or last element from an array.
        // Use 1 to remove the last element from the array.
        // Use -1 to remove the first element from the array.
    // to remove the first and last element of an array or array of object use "$pop" update operation operator in mongodb
    // db.product.updateOne({_id: ObjectId('675015f5046a799a9e86b027'),"orders.orderId": "ORD123"},{$pop:{'orders.$.items':1}});
    //  db.product.updateOne({_id: ObjectId('675015f5046a799a9e86b027')},{$push:{"address.pinCode":412401}});

// 8. how to remove the matching value form the array ?
    // $pull: Removes Matching Values from an Array
    // Removes all elements from an array that match a specified value or condition.
    // db.users.updateOne({ _id: ObjectId("64a1234567890abc12345678") }, { $pull: { hobbies: "cycling" }});


// 9. $addToSet: Adds a Value to an Array Only If It Doesn't Already Exist
    // - $addToSet operator are used it check if the value is already present in the array then not append into array if it is not preset then and only then it append into the array
    // - Prevents duplicate entries in an array.
    // db.users.updateOne({ _id: ObjectId("64a1234567890abc12345678")},{ $addToSet: { hobbies: "reading" }});
