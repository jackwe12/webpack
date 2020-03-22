const express = require('express');
const bodyParser = require('body-parser');
//example: https://jobs.github.com/positions.json?description=python&location=new+york
let url = "https://jobs.github.com/positions.json";
const app = express();
const axios = require('axios');
const cors = require('cors');
app.use(cors());

//so route can access json body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json())


app.post(`/api/jobs`, async(req, res)=>{
    // console.log(req.body);
    const {des, loc} = req.body;
    const target = url + `?description=${des}&location=${loc}`;
    const data = await axios.get(target)
    .then((response)=>{
        res.send(response.data)
    })
    .catch(error=>{console.log(error)});
    // console.log(req.body)
    // const data = await JSON.stringify(req.boy)
    // res.send(res.data);
    // res.send('hello' + data.data[0])
    
})
app.get('/api/greeting',(req, res)=>{
    res.send('Hello world');

})

app.listen(8080,()=>{
    console.log('repress server is running on localhost:8080');
})