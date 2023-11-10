const express = require('express');
const { 
  validateUserId,
  validateUser,
  validatePost,

} = require('../middleware/middleware')


const router = express.Router();

router.get('/', (req, res) => {
  
});

router.get('/:id', validateUserId, (req, res) => {
  console.log(req.user)
 
});

router.post('/', validateUser, (req, res) => {

});

router.put('/:id', validateUserId, validateUser, (req, res) => {
 
});

router.delete('/:id', validateUserId, (req, res) => {
  
});

router.get('/:id/posts', validateUserId, (req, res) => {

});

router.post('/:id/posts', validateUserId, validatePost, (req, res) => {
 
  console.log(req.user)
  console.log(req.text)

});


module.exports = router