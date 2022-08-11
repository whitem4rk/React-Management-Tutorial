const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/api/customers', (req,res) => {
    res.send([
        {
            'id':1,
            'image': 'https://placeimg.com/64/64/any',
            'name':'james',
            'birthday' : '12123',
            'gender' : 'm',
            'job':'studnet'
        },
        {
            'id':2,
            'image': 'https://placeimg.com/64/64/any',
            'name':'james',
            'birthday' : '12123',
            'gender' : 'm',
            'job':'studnet'
        },
        {
            'id':3,
            'image': 'https://placeimg.com/64/64/any',
            'name':'james',
            'birthday' : '12123',
            'gender' : 'm',
            'job':'studnet'
        }
    ])
})

app.listen(port, () => console.log(`listening on port ${port}`))