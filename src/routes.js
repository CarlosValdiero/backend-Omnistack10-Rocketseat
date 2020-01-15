const { Router } =require('express');

const routes = Router();


routes.get('/',(req,res)=>{
    return res.json({message:'hellow'});
});

module.exports = routes;