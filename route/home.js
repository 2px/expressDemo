module.exports=function(app){
	app.get('/home',function(req,res){
		if(req.session.user){
			res.render('home');
		}
		else{
			req.session.error="请登录";
			res.redirect('login');
		}
	});
}