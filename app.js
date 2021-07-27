const express = require('express');
const questionRouter = require('./routes/questions')

const app = express();
app.use(express.json());
app.use('/questions', questionRouter)


app.get('/', (req, res) => {
    console.log("Hello")
    res.send('Hello World!')
  })





app.listen(3000,()=> console.log('Server started'))