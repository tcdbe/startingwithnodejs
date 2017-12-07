let data = require('../data/data.json')

module.exports = {
  getPosts(req, res) {
      res.status(200).json(data.posts)
  }, 
  addPost(req, res) {

    let newPost = 
    {
      "name": req.body.name,
      "url": req.body.url,
      "text": req.body.text,
      "comments": []     
    }

      let id = data.posts.length
      data.posts.push(newPost)        
      res.status(201).send({id: id})
  },
  updatePost(req, res) {
    data.posts[req.params.postId] = req.body
    res.status(200).send(data.posts[req.params.postId])
  },
  removePost(req, res) {
    data.posts.splice(req.params.postId,1)
    res.status(204).send()
  }
}