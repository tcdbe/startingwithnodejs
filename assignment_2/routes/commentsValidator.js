module.exports = {
  validateComment(req, res, next) {
    
    
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