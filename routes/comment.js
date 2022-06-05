const { prisma } = require('@prisma/client');

const router = require('express').Router();

router.get('/', async (req, res, next) => {
     let comments = await prisma.comment.findMany({select : {
         email : true ,
         contenu : true 
       },}
       
     )
     res.json(comments)

});

router.post('/',function(res,req){
  const newcomment  = await prisma.comment.create({
    data: {
      email,
      contenu 
    }
  })      
  res.json(newcomment)   
})
router.patch('/',function(res,req){
  const comm=await prisma.comment.update({
    where:{id:req.body.id},
    data:req.body
  })
  req.send(comm) 
})

router.delete('/:id',async(res,req) => {
   const com=await prisma.comment.delete({
    where:{id:req.body.id},
    data: req.body
  })
  req.send(Supprimer) 
})


module.exports = router;

