//==============================================
// Atlas: 
//==============================================

// MondoDB atlas is mongoDB's //* fully managed cloud database services
//* if offers easy way to deploy, manage and scale mongoDB database in cloud
// Atlas eliminates the need for manual setup and maintenance. allowing developers to focus on your application
// it //* provide automated scaling option to accommodate growing workloads
// atlas support Global clusters, enabling databases to be deployed across multiple regions for better data availability and reduce latency


//! Atlas Setup and installation:

// 1.https://www.mongodb.com/products/platform/atlas-database
// first click on Try-Free and register your details

//? login userName and password :
// - email:vishalshinde00126@gmail.com
// - password:Vishal@0126

//? first you have to see :
// 1. organization ==> (inside the organization you have ) 
// 2. ==> cluster ==> (inside the cluster you have ) 
// 3. ==> projects ==> (inside the Project you have to ) 
// 4. ==> Database

//? Inside security option you have following option
// 1. Database access ==> 
    // 1. inside the  click on Add new database user 
    // 2. ==> and give UserName and password of the user.
    // My user credentials : 
    //   userName : mongoVishalShinde  
    // && password: Vishal@0126
    // and set role as Admin


//? 2. Network access 
    // 1. go to the network access then click on Add ip address
    // 2. open popup : the click on allow access from any-where and click on confirm


//? 3. go to the databases 
    // 1. if there in no database 
    // 2. click on organization and create new organization
    //* 3. give organization name and select cloud services option like
        //  1. MongoDb atlas
        // 2. Cloud Manager
    //* 4. select mongoDB atlas and ==> click on next and again click on ==> Create Organization
    // 5. once you create organization ==> go to the project page and in the project page you have to click ==> on new Project  and create a new project 
    // 6. once you have to create project it redirect to the Overview Page here you have to ==> create a deployment so click on  ==> create and create deployment. (select region, cluster name, )
    //* 7.  once you create deployment then ==> give 
            // userName and password to  create user and select environment like My Local environment or Cloud environment (in locally you have to select my Local environment)
            // userName : mongoVishalShinde
            // password : Vishal@0126
    // 8. then give iP address (add current Ip address) and click on finish and close 
    // 9.  then redirect to the overview page  or click on databases page there are show the created database with multiple options
    //  10. then go to the Database option here show our cluster 
    // 11. if you click on cluster then it show multiple option like overview, real time, metrics, collections, search. etc.....

    // 12.   if you want to connect or work with you cloud database of database you have to go to ==> overview tab 
    // 13. in overview tab you have to show connection multiple option when you click on ==> connect 
    // 14. connect option lik compass, shell, MongoDb for vs code , atlas SQL etc



//? NOTE : 1. Inside the organization you have to create multiple project and the multiple project having  the our databases.
        //* 2.   mongoDB work as Horizontal scaling (i.e add more resource like virtual machine to your system to spread out the workload across them)
 // used of Horizontal scaling :
 // - increase high availability
 // - Fewer periods of downTime
 // - easy to resize according to your needs 



//! Cluster :

// In MongoDB a //* cluster refers to a group of interconnected servers(nodes) that work together to store and manage data.
// cluster refers to a //* collection of servers that work together to provide hight availability, scalability and fault tolerances

//? IMP Data flow :
// Atlas serves as your database service provider 
// Data is hoisted on Atlas and for data_Manipulation two option are available
// Atlas : connect with ==> MongoShell( a command line tool ) and MongoDb compass (offering a graphical interface) 
// Both tool facilitate data management and interaction within atlas.


// ! Note :
//* Atlas serve as your database services provider 
// data hoisted at atlas and from data manipulation 2 option available 
    // Compass : Offering a GeoGraphical interface 
    // mongoShell : command line tool 
// Both tool are facilitate data management, or data manipulation and iteration with atlas