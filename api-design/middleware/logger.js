const fs = require('fs')
const { source_path } = require('../environment/environment')

const infoStream = fs.createWriteStream(source_path+"logs/general-info.log")
const errorStream = fs.createWriteStream(source_path+"logs/error-logs.log")

class Logger{
    constructor(type,component){
        this.component = component
        this.type = type
    }
    keepLog(message){

        const now = new Date().toISOString()
        const text = `[${now}] message: ${message},component: ${this.component}\n`

        this.type == "info" ? infoStream.write(text) : errorStream.write(text)
    }
}

module.exports = {
    Logger, infoStream, errorStream
}