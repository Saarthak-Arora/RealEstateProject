import express from "express";

const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        message : "ram ram ji"
    })
});

export default router;
