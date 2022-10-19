const adminValidate = (req, res, next) => {
  const { role } = req.user
  
  if(role == 'admin') return next()
  else return res.status(401).json({message: 'Access deny'})
}

module.exports = { adminValidate }