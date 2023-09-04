const express = require ('express'); 
const app = express();


// app.use((req, res) =>{
// 	console.log("we got a anew request")
// 	// res.send("hellow we got your request")
	
// 	res.send("<h1>this is my web page</h1>")
// })
app.get('/',(req,res)=>{
	res.send('Welcome to the Home page')
})
app.get('/r/:subreddit',(req,res)=>{
	const {subreddit} = req.params;
	res.send(`<h1>viewing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId',(req,res)=>{
	const {subreddit,postId} = req.params;
	res.send(`<h1>viewing the ${subreddit} subreddit Post Id: ${postId}</h1>`)
})

app.get('/cats',(req,res)=>{
	res.send("meow")
})
app.get('/dogs',(req,res)=>{
	res.send("woofff")
})

app.get('/search', (req,res)=>{
	const {q} = req.query;
	if (!q){
		res.send('nothing found')
	}
	res.send(`<h1>Search results for ${q}</h1>`)
})

app.get('*', (req,res)=>{
	res.send('I Dont Know The path')
})



 app.listen(8080, ()=>{
 	console.log('listening on port 8080')
 })