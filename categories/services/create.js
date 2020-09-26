import Category from '../schemas/Category'
export default (req, res) =>{
     let category = new Category(req.body)
     console.log('Category: ' + category)
     //res.json(category)
     category
          .save()
          .then((created) =>{
               if(!created){
                    return res.status(404)
                              .json({status: false, data: {}})
               }
               return res.status(201)
                         .json({status: true, data: created})
          })
          .catch(err => res.status(500)
                           .json({ status: false, data: {} })
                           
          )
}