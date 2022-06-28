const express=require('express');
const router=express.Router();
const {createCollege} = require("../controller/collegeController");
const internController = require("../controller/collegeController");



router.route('/functionup/colleges').post(createCollege);


module.exports = router;