async function createPost(req , res){
    res.end("create post");
}

async function deletePost(req , res){
    res.end("delete post");
}

module.exports.createPost = createPost;
module.exports.deletePost = deletePost;