var express=require('express');
var bodyParser=require('body-parser');
var multer=require('multer');
var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(multer());
app.use(express.static(require('path').join(__dirname,'public')));
app.set('views',require('path').join(__dirname,'views'));
app.set('view engine','html');
app.engine('.html',require('ejs').__express);
app.get('/',function(req,res){
	res.render('login');
});
app.post('/login',function(req,res){
	console.log('usenameIs:'+req.body.usename);
});
app.listen(3000,function(){
	console.log('runInPort3000!');
});