//==============================================
// element Operator in mongoDB.
//==============================================

// 1. In MongoDB element operators are used to query documents based on the existence, type, and value filed within the documents.
// 2. This operators help you work with fields that are arrays, null, missing, or have specific data types.
// i,e element operator are used to query document based on the presences, absences, or type of field

// Primary type of the element operator :

// 1. $exists :
    // Determine weather a specified field is exists in document or not
    // (i.e check if the give filed is exist or not)
    // {field :{$exists:true}}
    // ex db.product.find({price:{$exists:true}}).count();

    // ex.2 db.product.find({age:{$exists:true},age:{$gt:28}});


// 2. $type :
    // Basically we need to search or find fields based on the data type
    // $type operator filters document based on the BSON data type of a field
    // Matches documents where the value of a field is of a specified BSON type.

    // The BSON type value can be one of the following :
    // Double
    // string
    // object
    // array
    // binary
    // objectId
    // bool
    // date
    // null
    // int
    // long
    // number

    // ex. db.product.find({age:{$type:number},age :{$gt:28}});


    // 3. $size : (used to size of an array filed matches a specified value)
        // $size operator is used to match documents where an array field has a specific number of elements
        // { field: { $size: <number> } }
        // Exact Match:
                // $size matches arrays with exactly the specified number of elements.
                // It does not count elements in sub-arrays.
                // Works Only on Arrays:
        // ex. db.comment.find({comment:{$size:1}})

