const MongoClient = require("mongodb").MongoClient;
   
const url = 'mongodb+srv://niks:***@cluster0.kpnu9.mongodb.net/lab3?retryWrites=true&w=majority';
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });
 
mongoClient.connect(function(err, client){
  if(err) return console.log(err);   
  
  const db = client.db("lab3");
  const collection = db.collection("students");
  let user = {name: "Tom", average_rating: 85};
  let users = [{
      name: "Tom", 
      average_rating: 83
    }, 
    {
      name: "Alice", 
      average_rating: 78
    }, 
    {
      name: "Bob", 
      average_rating: 63
  }];

  collection.insertOne(user, function(err, result){
    console.log("insertOne", result);
  });

  collection.insertMany(users, function(err, results){        
    console.log("insertMany", results);
  });
  
  collection.find().toArray(function(err, results){    
    console.log("find()", results);
  });

  collection.find({name: "Tom"}).toArray(function(err, results){           
    console.log("find({name: 'Tom'})", results);
  });

  collection.find({name: "Tom", average_rating: 83}).toArray(function(err, results){     
    console.log("find({name: 'Tom', average_rating: 83})", results);
  });

  collection.findOne(function(err, doc){
    console.log("findOne", doc);
  });

  collection.findOne({name: "Bob"}, function(err, doc){
    console.log("findOne({name: 'Bob'}", doc);
  });

  collection.deleteMany({name: "Tom"}, function(err, result){       
    console.log(result);
  });

  collection.deleteOne({name: "Bob"}, function(err, result){
    console.log(result);
  });

  collection.findOneAndDelete({average_rating: 75}, function(err, result){       
    console.log(result);
  });

  collection.drop(function(err, result){        
    console.log(result);
  });

  collection.findOneAndUpdate(
    {
      average_rating: 78
    }, // критерий выборки
    { 
      $set: 
      {
        average_rating: 75
      }
    }, // параметр обновления
    function(err, result){
      console.log(result);
    }
  );

  collection.findOneAndUpdate(
    {
      name: "Bob"
    },              // критерий выборки
    { 
      $set: 
      {
        name: "Sam"
      }
    },     // параметр обновления
    {                           // доп. опции обновления    
      returnOriginal: false
    },
    function(err, result){
      console.log(result);
    }
  );

  collection.updateOne(
    {
      name: "Tom"
    }, 
    { 
      $set: 
      {
        name: "Tom Junior", 
        average_rating: 93
      }
    },
    function(err, result){
        console.log(result);
    }
  );
  

  client.close();
});
