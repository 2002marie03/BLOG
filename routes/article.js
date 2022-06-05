const router = require('express').Router();
const { prisma } = require('@prisma/client');
const res = require('express/lib/response');
const article = require('../data/article.json');
//pour retourner un article
router.get('/:id',function(res,req,next){
  let post=await prisma.article.findMany({
    select:{
      author,
      contenu,
      image,
      creatdDT,
      updateDt

    }
  })
  res.json(post)


}
)

//pout ajoutr un article
router.post('/',function(res,req) {
  const { email } = req.body;
  let newPost = await prisma.article.create({
    data: {
      author,
      contenu,
      image,
      creatdDT,
      updateDt
    },


  })
  
},
    res.json(newPOst)
)
//end
//pour editer 
router.patch('/',function(res,req){
  let art=await prisma.article.update(
    {
      where:{id:req.body.id},
      data:req.body
    }
  )
}
)

//pour supprimer 


router.delete('/:id',async(req,res)=>{
  const com=await prisma.article.delete({
    where:{id:req.body.id},
    data: req.body
  })
  req.send(Supprimer) 
})





















/*
//return
router.get('/', function(req, res, next) {
  console.log(req.query)
  res.setHeader('x-powered','Meriem-menqir')
  let  {skip,take}=req.query
  skip = skip || 0
  take = take || 10 
  console.log(skip,take)
  const u=[...article] //copy de tableau 
  res.json(u.splice(skip,take )) 
}
)
router.get('/:id', function (req, res, next)  {
  const posts=article.find((u)=>u.id === parseInt(req.params.id) )
  const h = article ? posts:'not found'
  res.send(h);
});
//modification complet 
//route.put



//suppression
router.delete('/:id',function(req,req) {
  console.log(req.params)
  res.send('ok')

})
//ajout
router.post('/',function(res,req){
  console.log(req.body)                                                                         //ajouter un user 

})
//modification minim if article makaynch khass ncreeiwh




module.exports = router;

*/