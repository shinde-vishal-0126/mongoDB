//==============================================
// Comparison operator 
//  dollar symbol represent the operator
//==============================================

// 1. $eq: ==> equal to operator
    //  (matches value that are equal to the specified value)

// 2. $ne: ==> not equal to operator
    //  (matches all value that are not equal to specified value)

// 3. $gt: ==> grater then operator
    // (matches value that are grater then a specified value)

// 4. $gte: ==> grater then or equal to operator
    // (matches value that are grater then or equal to a specified value)

// 5. $lt: ==> less then operator
    // (matches value that are less then to a specified value)

// 6. $lte: ==> less then or equal to operator
    // (matches value that are less then or equal to a specified value))

// 7. $in: ==> in operator (to used in array defined multiple value inside the  [] array)
    // (matches amy of the value in specified in array)
    // ex. db.product.find({ age: { $in: [29, 400, 490] } });

// 8. $nin: ==> not in operator
    // (Matches non of the value specified in an array)
    // ex  db.product.find({ age: { $nin: [29, 400, 490] } });

// Syntax :
// db.collection-name.find({'field-name':{$operator:value}})
//  ex: db.product.find({age:{$gt:28}})
