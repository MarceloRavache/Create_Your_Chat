exports.postComment = (req,res,next)=>{
    const { username, comment} = req.body;
    res.status(200).send("Ok");
};
