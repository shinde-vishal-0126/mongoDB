//==============================================
// Aggregation in mongodb
//==============================================

//! what is aggregation :(transformation on document and combining them to produce computed result)
    // Aggregation in MongoDB is a //* powerful framework for processing and analyzing data within a collection.
    // Aggregation process and analyze data in highly, flexible and efficient manner 
    //  It is often //* used to transform data and produce computed results, such as grouping, filtering, projecting, sorting, and more.
    // Aggregation operates through a pipeline consisting of stages, where each stage transforms the data in some way. 
    // The output of one stage becomes the input for the next.
    // ( it provide set of pipeline stages that enable you to perform various calculation on collection);

    // ANOTHER EXPLANATION :
    // - Aggregation is the process of performing transformation on documents and combining then to produce computed result.
    // - Aggregation having pipeline stages: Aggregation consist of multiple pipeline stages, each performing a specific operation on the input data


//! Benefits of Aggregation :
    // 1. Aggregation data : complex calculation and operation are possible
    // 2. Advanced transformation: Data can be combined, reshaped and computed for insights
    // 3. Efficient processing : Aggregation handles large database efficiently

//?  NOTE :
    // To perform aggregation you have to used following command 
    //* ex db.product.aggregate([{$match:{status:active}}])
    //* if you usd aggregation then you have to perform all query as array of object. like db.product.aggregation([{}])

//! Key Aggregation Operators:

    //? 1. $match: 
        //* - Filters documents based on a specified condition (similar to a WHERE clause in SQL).
        // - $match is similar to the query used as the first argument in find(). it filters document based on match specified condition
        // ex. db.produces.aggregate({$match:{name:'vishal'}})
        // - we have to used $match because it give ability to chaining the other operation


    //? 2. $group:
        //* - Groups documents by a specified field and performs aggregations operation on group data like sum, avg, max, etc.
        // ex. db.product.aggregate([{$group:{_id:group_key,{comp:"$company"},totalProduce:{$sum:1}}}}])
        //- when dealing with $group stage we need to pass $sign for our existing field not the one we are going to create
        // db.produces.aggregate([{$group:{
        // _id:"$company",
        // //* create field to stored the group data
        // totalProducts:{$sum:1}}}])

        //? if you perform any condition in $group stage then you have to first check the condition and then defined the group (defined in following code):

        de.product.aggregate([
            // here you have to get all Grater then data then defined the 
            {$match:{price:{$gt:900}}},
            {
                $group:{
                    _id:"$company",
                    // here you have to different aggregation operator like sum, avg, sub,multiply
                    totalProduct:{$sum:"$price"}
                }
            }
        
        ])
    
    //? 3. $project: 
        // Shapes the output documents, including or excluding fields, or computing new fields. and perform operation on field
        // $project, you can include, exclude, or transform fields in the output documents.
        //* $project stage is used in an aggregation pipeline to reshape documents
        // ex
        db.products.aggregate([{
            $project:{
                price:1,
                newField: "value" //* Add new field with a static or computed value
            }
        }])
        // db.product.aggregate({$project:{age:1,totalData:{$multiply:['$age', 12]}}});




    //? 4. $sort: 
        // Sorts documents by a field in ascending (1) or descending (-1) order.
        // ex.
        db.products.aggregate({$match:{price:{$gt:1200}}},
            {$group:{
                _id:"$category",
                totalPrice:{$sum:"$price"}
            }},
            {
            $sort:{totalPrice:1}
            }
        )

    
    //? 5. $limit:
        // Limits the number of results 

        db.produce.aggregate([{$unwind:"$color"},{$match:{price:{gt:12000}}},{$group:{
            _id:'&price',
            // Here instead of push you have to used the $addToSet
            // allColors:{$push:'$colors'}
            allColors:{$push:'$colors'}
        }
        },
        {
            $limit:1
        }]);



    //? 6. $skip:
        // skips a specified number of documents 
        
        db.produce.aggregate([{$unwind:"$color"},{$match:{price:{gt:12000}}},{$group:{
            _id:'&price',
            // Here instead of push you have to used the $addToSet
            // allColors:{$push:'$colors'}
            allColors:{$push:'$colors'}
        }
        },
        {
            $skip:1
        }]);




    //? 7. $unwind: 
        // Deconstructs an array field into separate documents, one for each element in the array.
        // deconstruct an array filed and produces multiple documents.
        
        db.produce.aggregate([{$unwind:"$color"},{$match:{price:{gt:12000}}},{$group:{
            _id:'&price',
            allColors:{$push:'$colors'}
        }
        }]);
    


    //? 8. $lookup: 
        // Performs a left outer join with another collection.



    //? 9. $addFields: 
        // Adds new fields or modifies existing fields in the output documents.



    //? 10. $facet: 
        // Runs multiple pipelines in parallel and outputs results into separate fields.


    //? 11 addToSet:
        // return an array of unique expression value for each group, order of the array elements is undefined.
        // if you push value in array using the push but if you used push duplicate data also added into array 
        //* so $addToSet stage add elements to an array filed while preventing duplicate.

        db.produce.aggregate([{$unwind:"$color"},{$match:{price:{gt:12000}}},{$group:{
            _id:'&price',
            // Here instead of push you have to used the $addToSet
            // allColors:{$push:'$colors'}
            allColors:{$push:'$colors'}
        }
        }]);