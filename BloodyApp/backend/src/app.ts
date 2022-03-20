import express from 'express'
const app = express();

app.get('/', (req, res, next)=>{
  res.send('hello');
})

app.listen(5000, ()=> console.log('Server running'));