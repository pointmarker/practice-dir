const { Logger } = require("../middleware/logger")
const { users } = require("../mock/users.mock")

const errorLogger = new Logger("error","api.controller")
const infoLogger = new Logger("info","api.controller")

function apiGetController(req,res,next){
    try {
        const {username}  = req.query
    
        if(!username || parseInt(username) || parseInt(username[0])) return next(new Error("unidentified username"))

        const user = users.filter(user => user.username.toLowerCase() == username.toLowerCase())

        if(!searchedUser){
            const response = {
                message: "there is no user with this name"
            }
            infoLogger.keepLog(response)
            res.json(response)

        } 
            infoLogger.keepLog("user found")
        res.json({
            success:true,
            user
        })
    } catch (error) {
        next(error)
    }
}   

function apiGetUserController(req,res,next){
    try {
        const {id} = req.params
        if(!id || !Number(id)) next(new Error("the id format is unacceptable : "+id))

        const user = users.find(user => user.id == id)
        if(!user){
            const response = {
                success:false,
                message: "there is no user with the id"
            }
            infoLogger(response)
            res.status(204).json(response)
        } 

        res.status(200).json({
            succes: true,
            user
        })

    } catch (error) {
        next(error)
    }
}

function getAllUsers(req,res){
    res.status(200).json({
        users
    })
}
module.exports ={
    apiGetController,
    apiGetUserController,
    getAllUsers

}