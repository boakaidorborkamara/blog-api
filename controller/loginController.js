const logIn = (req, res)=>{
    console.log("logging in...");
    res.status(200).json({msg:"Logging in..."})
}

module.exports = {
    logIn
}