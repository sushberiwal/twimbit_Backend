const postModel = require("../Model/postModel");

async function createPost(req , res){
    // console.log(req.body);
    try{
        let postDetails = req.body;
        let post = await postModel.create(postDetails);
        res.status(200).json({
            message:"Post Created Succesfully !",
            data : post
        })
    }
    catch(err){
        res.status(502).json({
            message:"Post Creation Failed !",
            err
        })
    }
}


async function getAllPosts(req , res){
    try{
        let allPosts = await postModel.find();
        res.status(200).json({
            message:"All posts get succesfully !",
            data : allPosts
        })
    }
    catch(err){
        res.status(501).json({
            message:"Failed to get All Posts !",
            err
        })
    }
}

async function getPostById(req , res){
    try{
        let post = await postModel.findById("615715d0844a4d9588f20a7e");
        res.status(200).json({
            message:"Post get succesfully !",
            data : post
        })
    }
    catch(err){
        res.status(501).json({
            message:"Failed to get post !",
            err
        })
    }
}

module.exports.createPost = createPost;
module.exports.getAllPosts = getAllPosts;
module.exports.getPostById = getPostById;