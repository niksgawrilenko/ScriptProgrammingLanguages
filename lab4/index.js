const mongoose = require("mongoose");
const Schema = mongoose.Schema;
  
const studentScheme = new Schema({
  name: {
    type: String,
    required: true,
    minlength:3,
    maxlength:20,
    default: "NoName"
  },
  average_rating: {
    type: Number,
    required: true,
    min: 1,
    max:100,
    default: 60
  },
  group: {
    name: {
      type: String,
      default: "NoName"
    },
    subjects: {
      type: [String],
      default: [""]
    }, 
    date: {
      type: Date,
      default: Date.now
    }
  }
},
{
  versionKey: false
});
  

mongoose.connect('mongodb+srv://niks:***@cluster0.kpnu9.mongodb.net/lab3?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true });
  
const Student = mongoose.model("students", studentScheme);

const student1 = new Student(); // name - NoName, average_rating - 60
const student2 = new Student({name: "Tom"}); // name - Tom, average_rating - 60
const student3 = new Student({average_rating: 64}); // name - NoName, average_rating - 64
const student4 = new Student({name: "Bill", average_rating: 71});
const studentError = new Student({name: "Li"});
  
student1.save()
  .then(function(doc){
    mongoose.disconnect();
    console.log("Збережено об'єкт student", doc);
  })
  .catch(function (err){
    mongoose.disconnect();
    console.log(err);
  });

student2.save()
  .then(function(doc){
    mongoose.disconnect();
    console.log("Збережено об'єкт student", doc);
  })
  .catch(function (err){
    mongoose.disconnect();
    console.log(err);
  });

student3.save()
  .then(function(doc){
    mongoose.disconnect();
    console.log("Збережено об'єкт student", doc);
  })
  .catch(function (err){
    mongoose.disconnect();
    console.log(err);
  });

student4.save()
  .then(function(doc){
    mongoose.disconnect();
    console.log("Збережено об'єкт student", doc);
  })
  .catch(function (err){
    mongoose.disconnect();
    console.log(err);
  });

studentError.save()
.then(function(doc){
  mongoose.disconnect();
  console.log("Збережено об'єкт student", doc);
})
.catch(function (err){
  mongoose.disconnect();
  console.log(err);
});

Student.create({name: "Tom", average_rating: 64}, function(err, doc){
  mongoose.disconnect();
    
  if(err) return console.log(err);
    
  console.log("Сохранен объект student, method create", doc);
});

Student.find({}, function(err, docs){
  mongoose.disconnect();
   
  if(err) return console.log(err);
   
  console.log("student.find ({})", docs);
});

Student.find({name: "Tom"},  function(err, docs){
  mongoose.disconnect();
   
  if(err) return console.log(err);
   
  console.log("student.find ({name: 'Tom'})", docs);
});

Student.findOne({name: "Tom"},  function(err, docs){
  mongoose.disconnect();
   
  if(err) return console.log(err);
   
  console.log("student.findOne({name: 'Tom'})", docs);
});

const id = '636e326561ab0d416d1ddf09';

Student.findById(id,  function(err, docs){
  mongoose.disconnect();
   
  if(err) return console.log(err);
   
  console.log("student.findById", docs);
});


Student.deleteMany({average_rating:60}, function(err, result){
  mongoose.disconnect();
   
  if(err) return console.log(err);
   
  console.log("deleteMany", result);
});

Student.deleteOne({name:"Bill"}, function(err, result){
  mongoose.disconnect();
   
  if(err) return console.log(err);
   
  console.log("deleteOne", result);
});

Student.findOneAndDelete({name:"Tom"}, function(err, result){
  mongoose.disconnect();
   
  if(err) return console.log(err);
   
  console.log("findOneAndDelete", result);
});

Student.findByIdAndDelete("636e326561ab0d416d1ddf09", function(err, result){
  mongoose.disconnect();
   
  if(err) return console.log(err);
   
  console.log("findByIdAndDelete", result);
});

Student.updateOne({name: "Tom"}, {name: "Tom Smith"}, function(err, result){
     
  mongoose.disconnect();
  if(err) return console.log(err);
  console.log(result);
});


Student.findByIdAndUpdate("636e3c1e2af2862ce88cedea", {name: "Sam", average_rating: 75}, {new: true}, function(err, user){
     
  mongoose.disconnect();
  if(err) return console.log(err);
  console.log("Оновлений об'ект, findByIdAndUpdate", user);
});

Student.findOneAndUpdate({name: "Sam"}, {name: "Bill", age:24}, {new: true}, function(err, user){
     
  mongoose.disconnect();
  if(err) return console.log(err);
  console.log("Оновлений об'ект, findOneAndUpdate", user);
});


