//==============================================
// Logical operator 
//  dollar symbol represent the operator
//==============================================

// 1. $and : (both condition are true)
    // 1. $and perform logical operation on an array of expressions where all expressions must be true for all document to match
    // 2. Combines multiple conditions and returns documents that satisfy all the conditions.
    // Shorthand: If conditions are in an implicit array, $and is not required: 
    // db.collection.find({ age: { $gt: 25 }, city: "New York" })

    // ex.  db.product.find({$and:[{age:{$gt:28}},{name:'vishu'}]});
    // Note : 
        // 1. if you work with logical operator then you have to used array of condition like {$and:[{condition1}, {condition2}, ...]}
        // 2. in mongoDb when yor provide multiple field within a single query document, mongoDB treats then as an implicit AND operation.


// 2. $or : (at least  any one condition are true.)
    // 1. perform logical or operation on an array of expression where at lease one expression must be true for the document to match.
    // 2. Combines multiple conditions and returns documents that satisfy any of the conditions.
    // ex :  db.product.find({$or:[{age:{$gt:28}},{name:'vishu'}]});
    // if you work with logical operator then you have to used array of condition like {$or:[{condition1}, {condition2}, ...]}

// 3. $nor : (it return the data where document does not match any condition)
    // 1. $nor perform a logical NOR operation on an array expression where none of the expression must be true for the document match
    // 2. Combines multiple conditions and returns documents that do not satisfy any of the conditions.
    // ex.  db.product.find({$nor:[{age:{$gt:28}},{name:'vishu'}]});

// 4. $not: (it inverting the result)
    // 1. perform a logical NOT operation on the specified expression, inverting the result
    // 2. Negates a condition.
    // ex. db.product.find({age:{$not:{$gt:28}}});
// NOTE : here not used the array you can perform single document