
const express=require('express');
const router=express.Router();
const {createCollege} = require("../controller/collegeController");
const {createIntern}= require("../controller/internController");



router.route('/functionup/colleges').post(createCollege);
router.route('/functionup/interns').post(createIntern);


module.exports = router;

