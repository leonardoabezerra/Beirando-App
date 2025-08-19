const express = require('express');
const cors = require('cors');
const subjectRoutes = require('./routes/subject_routes');

const app = express();

app.use(cors());
app.use(express.json());


app.use('/subject', subjectRoutes);  // Initialize subject routes group with prefix '/subject'


app.listen(6969, () => {
    console.log('Server running on http://localhost:6969');
})