module.exports = {
  validatePost(req, res, next) {
    
    
    req.checkBody("name", "Name must be entered.").exists()
    req.checkBody("text", "Text must be entered.").exists()
   
    if (req.validationErrors()) 
      {        
        res.status(200).json(req.validationErrors())
      }
    else {
      next()
    }
      
  }
  
}