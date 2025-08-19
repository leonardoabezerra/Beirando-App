const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Main subject route");
})

module.exports = router;  // Exports subject routes group