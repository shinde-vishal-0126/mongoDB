//! Types of Expression Operators

// Arithmetic Operators: Used for mathematical calculations.

//? 1. $add: 
    // Adds numbers or concatenates strings.
    // { $add: [ "$price", "$tax" ] }

//? $subtract:
    //  Subtracts numbers.
    // { $subtract: [ "$total", "$discount" ] }

//? $multiply: 
// Multiplies numbers.
// { $multiply: [ "$price", "$quantity" ] }

//? $divide: 
// Divides numbers.
// { $divide: [ "$total", "$items" ]}

//? $mod: 
// Returns the remainder of division.
// { $mod: [ "$total", 3 ] }



//! Array Operators: Used to manipulate arrays.

//?  $arrayElemAt: 
// Returns the element at the specified index.
// { $arrayElemAt: [ "$tags", 0 ] }


//? $concatArrays:
//  Concatenates arrays.
// { $concatArrays: [ "$array1", "$array2" ] }


//? $size: 
// Returns the size of an array.
// { $size: "$items" }
//* NOTE: $size operator is not allowed directly within the $group stage instead you can use it in combination with other aggregation operators or in separate pipeline stage. 
// ex.

db.produce.aggregate([
    // 1st stage of aggregation pipeline
    {$unwind:"$color"},
    // 2nd stage of aggregation pipeline
    {$match:{price:{gt:12000}}},
    // 3rd stage of aggregation pipeline
    {$group:{
    _id:'&price',
    // Here instead of push you have to used the $addToSet
    // allColors:{$push:'$colors'}
    allColors:{$push:'$colors'}
}
},
// 4 th stage of the aggregation
{
    $project:{
        _id:1,
        colors:1,
        colorLength:{$size:'$colors'}
    }
}]);



//? $slice: 
// Returns a subset of an array.
    // { $slice: [ "$items", 3 ] }



//? $filter: 
// Filters an array based on a condition.
    // { 
    //   $filter: {
    //       input: "$scores",
    //       as: "score",
    //       cond: { $gte: [ "$$score", 80 ] }
    //   }
    // }
//* $filter stage filters element of an array based on specified condition

db.produce.aggregate([{
    $project:{
        _id:1,
        name:1,
        filterData :{$filter:{
            input:'$value',
            as:'val',
            cond:{
                $gt:["$$val",100]
            }
        }}
    }
}])

// In MongoDB, $$ (double dollar sign) is //*used to reference variables within expressions, especially in aggregation pipelines.
//  When working with operators like $filter, $map, $reduce, or $let, the double dollar syntax is required to access variables defined in the as clause of those operators.
//* $$ Prefix: Indicates a referenced variable rather than a field in the document.



//! String Operators: Used to manipulate strings.

//? $concat:
//  Concatenates strings.\
// { $concat: [ "$firstName", " ", "$lastName" ] }

//? $substr: 
// Extracts a substring.
// { $substr: [ "$description", 0, 10 ] }


//? $toLower: 
// Converts to lowercase.
// { $toLower: "$name" }

//? $toUpper: 
// Converts to uppercase.
// { $toUpper: "$name" }

//? $trim: 
// Trims characters from a string.
    // { 
    //   $trim: {
    //       input: "$title",
    //       chars: " " // Remove spaces
    //   }
    // }

//? $dateToString:
//  Converts a date to a formatted string.
    // { 
    //   $dateToString: {
    //       format: "%Y-%m-%d",
    //       date: "$createdAt"
    //   }
    // }

//? $year, $month, $dayOfMonth, etc.:
//  Extract parts of a date.
// { $year: "$createdAt" }

//? $subtract:
//  Calculate date differences.
// { $subtract: [ "$endDate", "$startDate" ] }


//! Conditional Operators: Used for conditional logic.

//?$cond: 
// A ternary-like operator.
// { 
//   $cond: {
//       if: { $gte: [ "$score", 80 ] },
//       then: "Pass",
//       else: "Fail"
//   }
// }

//? $ifNull: 
// Provides a default value if a field is null or does not exist.
// { $ifNull: [ "$discount", 0 ] }



//! Miscellaneous Operators:

//? $type: 
// Returns the BSON type of a field.
// { $type: "$value" }

//? $literal: 
// Returns a value without parsing.
// { $literal: "Hello, World!" }

//? $mergeObjects:
//  Combines multiple objects into one.
// { $mergeObjects: [ "$address", "$contactInfo" ] }