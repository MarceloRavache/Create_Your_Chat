exports.postLogin = (req,res,next)=>{
    const {username , senha} = req.body;
    res.status(200).send("Ok");
};

exports.postRegister = (req,res,next)=>{
    const {username, email, senha, senhaComfirm} = req.body;
};
