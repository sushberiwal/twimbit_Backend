const postModel = require("../Model/postModel");

async function likePost(req , res){
    try{
        let {userId , postId} = req.body;
        let post = await postModel.findById(postId);
        post.likes.push(userId);
        let updatedPost = await post.save();
        res.status(200).json({
            message:"Like Added Succesfully",
            updatedPost
        })    
    }
    catch(err){
        res.status(200).json({
            error:"Failed to like !"
        })
    }
}
async function unLikePost(req , res){
    try{
        let {userId , postId} = req.body;
        let post = await postModel.findById(postId);
        let filteredPosts = post.likes.filter( id => id!=userId);
        post.likes = filteredPosts;
        let updatedPost = await post.save();
        res.status(200).json({
            message:"unliked Succesfully",
            updatedPost
        })    
    }
    catch(err){
        res.status(200).json({
            error:"Failed to like !"
        })
    }
}

async function commentPost(req , res){
    try{
        let {postId , comment , username} = req.body;
        console.log(postId , comment , username);
        let post = await postModel.findById(postId);
        post.comments.push({comment , username});
        let updatedPost = await post.save();
        res.status(200).json({
            message:"Comment Added Succesfully",
            updatedPost
        })    
    }
    catch(err){
        res.status(200).json({
            error:"Failed to comment !"
        })
    }
}


module.exports.likePost = likePost;
module.exports.unLikePost = unLikePost;
module.exports.commentPost = commentPost;