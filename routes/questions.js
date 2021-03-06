const express = require('express')
const router = express.Router()
const questions = [   
];
router.get('/',(req,res) => {
res.send(questions)

})
router.get("/points",(req,res) => {
    const sum = questions.reduce((accumulator,currentValue) =>  accumulator + currentValue.points,0);
    console.log(sum)
    const p =
        {
            totalpoints : sum
        }
    res.send(p)
    })
router.get('/:id',(req,res) => {
   const question = questions.find(q => q.id ===parseInt(req.params.id));
   if(!question) res.status(404).send('there is no question like this exsist');
   res.send(question);  
})
 router.post('/',(req, res) => {
     const q = {
         id: questions.length + 1,
         question: req.body.question,
         answer_1: req.body.answer_1,
         answer_2: req.body.answer_2,
         answer_3: req.body.answer_3,
         correct: req.body.correct,
         points: req.body.points
    };
    questions.push(q)
     res.send(q)
 })
router.delete('/:id',(req,res) => {
    const question = questions.find(q => q.id ===parseInt(req.params.id));
    if(!question) res.status(404).send('there is no question like this exsist');
    const index = questions.indexOf(question);
    questions.splice(index , 1);
    res.send("The question has been daleted")
})
module.exports = router;
