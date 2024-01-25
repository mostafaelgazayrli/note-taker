const express = require('express');
const path = require('path'); 
const htmlRoute = require('./routes/htmlRoute')
const notesRoute = require('./routes/notesRoute')

const app = express();
const PORT = 3000
app.use(express.static(path.join(__dirname,'/public')))
app.use(express.json());


app.use('/',htmlRoute)
app.use('/api',notesRoute)



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
