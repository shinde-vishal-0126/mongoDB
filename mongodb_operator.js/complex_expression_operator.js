//==============================================
// Complex Expression Operator ($expr) :
//==============================================
// 1. The $expr operator in mongoDB is a powerful feature that allow use aggregation expressions directly within a query language.
// 2. This is perticulary Useful when you want to compare fields from the same document, apply condition using aggregation expression to perform  a more complex queries that standard query operators cannot handle.
// {$expr:{operator:[field, value]}}


// Key Features
// 1. Field-to-Field Comparisons: Compare the values of two fields in the same document.
// 2. Support for Aggregation Expressions: Use operators like $add, $subtract, $eq, $lt, $gt, etc.
//  3. Dynamic Queries: Evaluate conditions dynamically without predefined schema constraints.

// NOTE :
// in $expr operator you have to used the $ symbol before the field name
// also you have to perform the comparison so you have to used array for ex.   db.product.find({$expr:{$eq:['$name','$name']}});


// syntax  :
// ex. db.product.find({$expr:{$eq:['$name','$name']}});

// ex 2.
// db.sales.find({$expr:{$gt:[{$multiply:["$quantity","$price"]}, $targetPrice]}});