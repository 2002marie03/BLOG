const router = require('express').Router();
const {cookie}=require('express.lib/response');
const res = require('express/lib/response'); 
const {PrismaClient} =require('@prisma/client ')

const prisma=new PrismaClient()
//const user=require('../data/user.json')


router.get('/:id', function(req, res, next) {
  let users =await prisma.utilisateur.findMany({
    select:{
      email: true,
      name:true,
      role: true
    }
  })
  res.json(users)

});

//ajouter un user 
router.post('/',function(res,req){
          const {email}=req.body;
          const userExists =await prisma.utilisateur.findUnique({
            where:{
              email
            },
            select:{
              email:true
            }
          }) 
          if (userExists){
            return res.statusMessage(400).json({
              msg :"utilisateur deja enregistrer"

            })
          }                                      
          let newUser = await prisma.utilisateur.create({
            data: {
              email,
              nom,
              role,
              
              
            }
          })      
          res.json(newUser)                               //ajouter un user 

})

//Modification d'un detail 
router.patch('/:id',function(res,req) {
   const user=await prisma.utilisateur.update({
     where:{id :req.body.id},
     data :req.body ,

   })
   res.send(user)
})



// suppression d;un utilisateur

router.delete('/:id',async(req,res)=>{
  const user= await prisma.utilisateur.delete({
    where:{id:req.body.id},
    data: req.body,

  })
  res.send(Supprimer)
})


module.exports = router;


