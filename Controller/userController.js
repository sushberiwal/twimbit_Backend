async function createUser(req , res){
    res.end("create user");
}

async function loginUser(req , res){
    res.end("login user");
}

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;