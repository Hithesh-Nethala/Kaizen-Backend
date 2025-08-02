var express=require('express');
var router=express.Router();
var FormController=require('../controllers/FormController');

router.post('/register',FormController.formRegistration);
router.get('/details',FormController.userDetails);
router.get('/indv',FormController.IndvUser);
module.exports=router;