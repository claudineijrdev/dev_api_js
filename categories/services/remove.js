import Category from './../schemas/Category'
export default (req, res) =>{
     Category
          .findOneAndRemove(req.params._id)
          .then( () => res.status(204).end)
          .catch(err=> res.status(500).json({status: false, data: {} }) )
} 