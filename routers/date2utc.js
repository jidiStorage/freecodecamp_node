var express=require('express');
var router=express.Router()

router.get('/:date',function(req,res){
    let date=req.params.date   //2015-12-25 ||1410...
    //1.2015-12-25  含-
    if (date.includes("-")){
        let time=new Date(date)
        let unix=time.getTime()
        let event=time.toGMTString()
        res.send({"unix":unix,"utc":event})
    }
    //2.unix time
    else{
        let time=new Date(Number(date))
        let unix=time.getTime()
        let event=time.toGMTString()
        res.send({"unix":unix,"utc":event})
    }

})

module.exports=router