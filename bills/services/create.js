import Bill from './../schemas/Bill'
export default (req,res) =>{
     let bill = new Bill(req.body)
     console.log('Bill: ' + bill)
    bill      
          .save()
          .then((created) =>{
               if(!created){
                    return res.status(404)
                              .json({ status: false, data: {}})
               }
               return res.status(201)
                         .json({statu: true, data: created})
          })
          .catch((err) => res.status(500)
                             .json({err: err, status: false, data: {} }))
}