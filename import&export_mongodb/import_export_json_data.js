//==============================================
// IMPORTING JSON DATA IN MONGODB.....
//==============================================

// I.E Dump data into the mongodb database 
// 1 data are in json file or csv file

// 1. Following command are run on mongodb shell 
// 2. if your data are are not inside the array (i.e it having the object data like)

// COMMAND :
// 1.mongoimport path-of your json file  -d database-name -c collection-name

            // 1. mongoimport: Command-line tool to import data into MongoDB.
            // 2. - C://data/jsonpath.json: Path to the JSON file you want to import. (Ensure the path is correct and accessible.)
            // 3. -d shop: Specifies the database name (shop).
            // 4. -c product: Specifies the collection name (product).

// ex. mongoimport --file C:\data\jsonpath.json --db shop --collection product
// data format : 
                // { "name": "Product A", "price": 100 }
                // { "name": "Product B", "price": 150 }
                // { "name": "Product C", "price": 200 }

// ============================================================================================================================

// 2. mongoimport --file C:\data\jsonpath.json --db shop --collection product --jsonArray
// data format :
                // 1.mongoimport: Command-line tool to import data into MongoDB.
                // 2. --file: Specifies the file to import.
                // 3. C:\data\jsonpath.json: Updated path format to match typical Windows paths.
                // 4. --db shop: Specifies the database name (shop).
                // 5. --collection product: Specifies the collection name (product).
                // 6. --jsonArray: Indicates that the file contains an array of JSON objects.
                
                //  [
                    // { "name": "Product A", "price": 100 },
                    // { "name": "Product B", "price": 150 },
                    // { "name": "Product C", "price": 200 }
                    // ]



//  NOTE :
    // 1. mongoimport and mongoexport are command-line utilities. that are part of the mongoDB database tool.
    // 2. these tool are used for importing data into MongoDB (using mongoimport) and exporting data from MongoDB (using mongoexport)



//==============================================
// EXPORTING JSON DATA IN MONGODB.....
//==============================================

// COMMAND :
// 1. mongoexport --db database-name --collection collection-name --out /path/to/exported/file.json
    // also used : mongoexport --d database-name -c collection-name -o  file path
                // --db specifies the database name.
                // --collection specifies the collection name.
                // --out specifies the output file path (e.g., /path/to/exported/file.json).

// example : mongoexport --db shop --collection product --out /data/backup.json


//  Export data using multiple options :
    // 1. --jsonArray: Exports data as a JSON array. Useful if you want the output file to be an array instead of separate JSON objects.
            // 1. mongoexport --db myDatabase --collection myCollection --out /data/backup.json --jsonArray 
            // also used the following command :
                //mongoexport -d shop -c product -o path of the file where you have stored exported data..
            // -jsonArray: Exports data as a JSON array. Useful if you want the output file to be an array instead of separate JSON objects.

    // 2. --query: Specifies a query to filter the exported data (uses MongoDB query syntax).
            // 1. mongoexport --db database-name --collection collection-name --out /path/to/exported/file.json --query '{ filter_conditions }'
            // - --query: Specifies a query to filter the exported data (uses MongoDB query syntax)

    // 3.  --fields: Specifies the fields to export, e.g., --fields "name,age,address".
            // 1. mongoexport --db myDatabase --collection myCollection --out /data/backup.json --jsonArray --fields "name,age,address"
            // - --fields: Specifies the fields to export, e.g., --fields "name,age,address".


//  NOTE:
    // Limited to imports of 16Mb or smaller.
