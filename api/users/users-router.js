const express = require('express');
const { 
  validateUserId,
  validateUser,
  validatePost,

} = require('../middleware/middleware')

const User = require('./users-model')
const Post = require('../posts/posts-model')

const router = express.Router();

router.get('/', (req, res, next) => {
  User.get()
  .then(users => {
    res.json(users)
  })
  .catch(next)
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

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    customMessage: 'something tragic inside posts router happened',
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router