const { prisma } = require('@prisma/client');

const router = require('express').Router();


//pour ajouter une categorie 
router.post('/',function(req,res){
    let {post}=req.body
      const newPOst = await prisma.categorie.create({
        data:
        post 
      })
    })


//retourner une categorie 

router.get('/', async (req, res, next) => {
  const cat= await prisma.categorie.findMany({
    select :{
      post

    }
    
  })
  res.json(cat);

  

  
});

//pour supprimer une categorie
router.delete('/:id',async(req,res)=>{
    const com=await prisma.categorie.delete({
  where:{id:req.body.id},
  data: req.body
})
req.send(Supprimer) 
})


//pour ajouoter un article dans cette categorie
router.patch('/',function(res,req){
  const post=await prisma.categorie.update({
    where:{id:req.body.id},
    data:req.body }
  )

}
)



module.exports = router;
