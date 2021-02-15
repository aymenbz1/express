const express= require ('express')
const app=express()

const pug=require('pug')

//get hours :
const d = new Date()
const  hours = d.getHours() ;
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = days[d.getDay()];
// console.log(getName)


//middelware :
function logger(req,res,next){
    if(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(dayName)&&(hours>=16) && (hours<=17) ){
       next()}
    else {
        res.send("site is closed")
        
    }
}

app.use(logger)

app.set('view engine','pug')
app.get('/contact',function(req,res){
    res.render('Contact',{message: 'This is contact page' })
    
})

app.get('/home',function(req,res){
    res.render('home',{message: 'This is Home page' })
    
})

app.get('/service',function(req,res){
    res.render('service',{title: 'Service', message: 'This is service page' })
    
})


// app.get("/",(req,res)=>{
    // res.send("Welcome Bouza12")
   
    // res.sendFile((__dirname+"/public/service.html"))
// })
// app.use(express.static(__dirname+'public'))

app.listen(7000)
    // ,(err)=>{
    // err?console.log(err):console.log(Object)})