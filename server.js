const express=require('express'),
   // required to extract data from submitted forms.
    bodyParser=require('body-parser'),   
    //to create http servers.
    http=require('http'),
    path=require('path'), 
    app=express(),
    api=require('./server/routes/api');

    //parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



//serve static files from a dist folder
app.use(express.static(path.join(__dirname,'dist')));

//set our api routes
app.use('/api',api);


//return other routes to Angular index file
app.get('*',(req,res)=>{
res.sendFile(path.join(__dirname, 'dist/index.html'));
});


//set port
const port= process.env.PORT || '3000';
app.set('port',port);

//create HTTP server
const server=http.createServer(app);

server.listen(port,()=>{
    console.log(`Running localhost on:${port}`);
})
