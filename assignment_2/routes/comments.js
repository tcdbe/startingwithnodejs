let data = require('../data/data.json')

module.exports = {
  getComments(req, res) {
    res.status(200).json(data.posts[req.params.postId].comments)  
  }, 
  addComment(req, res) {
    
    let newComment = {
      text: req.body.text }
      
    
    // check if there are comments
    let commentId = null;
    if (data.posts[req.params.postId].comments == undefined)
    {
      data.posts[req.params.postId].comments = [];
      commentId = 0
    } else {
       commentId = data.posts[req.params.postId].comments.length
    }

    
    data.posts[req.params.postId].comments.push(newComment)        
    res.status(201).send({id: commentId})
  },
  updateComment(req, res) {
    data.posts[req.params.postId].comments[req.params.commentId] = req.body
    res.status(200).send(data.posts[req.params.postId].comments[req.params.commentId])
  },
  removeComment(req, res) {
    data.posts[req.params.postId].comments.splice(req.params.commentId, 1)
    res.status(204).send()
  }  
}