const mongoose = require("mongoose");
const express = require("express");
const Schema = mongoose.Schema;
const app = express();
const jsonParser = express.json();
 
const studentScheme = new Schema({name: String, average_rating: Number}, {versionKey: false});
const Student = mongoose.model("Student", studentScheme);
 
app.use(express.static(__dirname + "/public"));
 
mongoose.connect('mongodb+srv://niks:***@cluster0.kpnu9.mongodb.net/lab3?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true}, function(err){
    if(err) return console.log(err);
    app.listen(3000, function(){
        console.log("Сервер ожидает подключения...");
    });
});
  
app.get("/api/students", function(req, res){
        
    Student.find({}, function(err, students){
 
        if(err) return console.log(err);
        res.send(students)
    });
});
 
app.get("/api/students/:id", function(req, res){
         
    const id = req.params.id;
    Student.findOne({_id: id}, function(err, student){
          
        if(err) return console.log(err);
        res.send(student);
    });
});
    
app.post("/api/students", jsonParser, function (req, res) {
        
    if(!req.body) return res.sendStatus(400);
        
    const studentName = req.body.name;
    const averageRating = req.body.average_rating;
    const student = new Student({name: studentName, average_rating: averageRating});
        
    student.save(function(err){
        if(err) return console.log(err);
        res.send(student);
    });
});
     
app.delete("/api/students/:id", function(req, res){
         
    const id = req.params.id;
    Student.findByIdAndDelete(id, function(err, student){
                
        if(err) return console.log(err);
        res.send(student);
    });
});
    
app.put("/api/students", jsonParser, function(req, res){
         
    if(!req.body) return res.sendStatus(400);
    const id = req.body.id;
    const studentName = req.body.name;
    const averageRating = req.body.average_rating;
    const newStudent = {average_rating: averageRating, name: studentName};
     
    Student.findOneAndUpdate({_id: id}, newStudent, {new: true}, function(err, student){
        if(err) return console.log(err); 
        res.send(student);
    });
});
