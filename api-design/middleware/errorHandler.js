const { Logger } = require("./logger")

const errorLogger = new Logger("error","errorHandler")

function errorHandler(err,req,res,next){
    const statusCode = err.statusCode ||500
    const errorCode = err.errorCode || "INTERNAL_SERVER_ERROR"
    const message = err.message || "Something went wrong.."


    const response =  {
        success:false,
        errorCode,
        message,
        details: err.details || "no extra detail"
    }

    errorLogger.keepLog(message)

    res.status(statusCode).json(response)
}
function fourOfourHandler(req,res,next){
    const err = new Error("route not found")
    err.statusCode = 404
    err.errorCode = "ROUTE_NOT_FOUND"

    errorLogger.keepLog(err.errorCode)

    next(err)
}

module.exports = {errorHandler,fourOfourHandler}