const express = require('express');
const app = express();
const PORT = 3000;

//To set up view engine, ejs is the view engine here
app.set('view engine', 'ejs');
app.use(express.json())

app.use(express.static("public"))

const userRouter = require('./routes/users');
app.use('/users', userRouter)

app.get('/first', (req, res) => {
    console.log('First API2');
    res.send('First API----2');
})

app.get('/render_html', (req, res) => {
    console.log('rendering html');
    res.render('index', { name: 'Roopa'});
})



app.listen(PORT, () => {
    console.log('Server listening on port', PORT)
})

















// //render html
// app.get('/second', (req, res) => {
//     console.log('Second API');
//     res.render('index', { text : 'World' });
// })

// app.use(express.json())

