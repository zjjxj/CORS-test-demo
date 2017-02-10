var app=require('express')();

app.get('/cors',function (req,res) {
    res.append("Access-Control-Allow-Origin","http://localhost:63342");
    res.send("CORS请求成功")
});

app.listen(8080);