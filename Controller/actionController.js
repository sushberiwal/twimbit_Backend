async function likePost(req , res){
    res.end("post like");
}

async function commentPost(req , res){
    res.end("post comment");
}


module.exports.likePost = likePost;
module.exports.commentPost = commentPost;