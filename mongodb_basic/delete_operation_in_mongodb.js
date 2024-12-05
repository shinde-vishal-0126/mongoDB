// ===================================================
//   DELETE OPERATION IN MONGODB .....
// =================================================== 

// # Delete operation in mongodb

// -  way to delete document 
// 1. deleteOne();
// 2, deleteMany():
// 3. findOneAndDelete()


// 1.deleteOne (): 
    // - Delete a Single Document 
    // - This will remove the first document that matches the given filter.
    // - ex. db.product.deleteOne({ fieldName: 'value' });
    // - It returns an object containing information about the deletion operation, specifically the number of documents that were deleted.


// 2. deleteMany():
    // - Delete Multiple Documents
    // - This will remove all documents that match the given filter.
    // - db.product.deleteMany({ fieldName: 'value' })
    // - It returns an object that provides details about the deletion operation.specifically the number of documents that were deleted

// 3. Delete All Documents (Empty Collection)
    // - if you want to delete all document the does not give any filter condition
    // - db.product.deleteMany({}) // give with empty object of filter it delete all the element


// 4. findOneAndDelete() :
    // - findOneAndDelete method in MongoDB is used to find a single document that matches a given filter and then delete it. It returns the document that was deleted. 
    // - db.product.findOneAndDelete({ fieldName: 'value' });
