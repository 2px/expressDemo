var express=require('express');
var bodyParser=require('body-parser');
var multer=require('multer');
var session=require('express-session');
var app=express();
app.use(session({
	secret:'secret',
	resave:true,
	saveUninitialized:false,
	cookie:{
		maxAge:1000*60*10//设置过期时间
	}
}));
app.use(function(req,res,next){
	res.locals.user=req.session.user;
	var err=req.session.error;
	res.locals.message='';
	if(err)
		res.locals.message = '<div style="margin-bottom: 20px;color:red;">' + err + '</div>';
	next();
});
app.use(express.static(require('path').join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(multer());
app.set('views',require('path').join(__dirname,'views'));
app.set('view engine','html');
app.engine('.html',require('ejs').__express);
app.get('/',function(req,res){
	res.render('index');
});
require('./route/login')(app);
require('./route/home')(app);
require('./route/logout')(app);
app.listen(3000,function(){
	console.log('runInPort3000!');
});