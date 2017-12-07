const routes = require('express').Router();
const posts = require('./posts.js')
const comments  = require('./comments.js')
const postsValidator = require('./postsValidator.js')
const commentsValidator = require('./commentsValidator.js')


routes.get('/posts',  posts.getPosts)
routes.post('/posts', postsValidator.validatePost, posts.addPost)
routes.put('/posts/:postId', posts.updatePost)
routes.delete('/posts/:postId', posts.removePost)

routes.get('/posts/:postId/comments', comments.getComments)
routes.post('/posts/:postId/comments', commentsValidator.validateComment, comments.addComment)
routes.put('/posts/:postId/comments/:commentId', comments.updateComment)
routes.delete('/posts/:postId/comments/:commentId', comments.removeComment)

module.exports = routes;