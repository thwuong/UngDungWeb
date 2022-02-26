class BadRequestError extends Error {
    constructor(statusCode, message){
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
class ErrorHandler {
    constructor(){
        this.handlerError = (error, responseStream = null) => {
           if(responseStream) {
            responseStream.status(error.statusCode || 500).json({
                message : error.message || "Internal Server Error"
            })
        }
            else {
                console.log(error);
            }
        }
    }
}
module.exports = {
    BadRequestError,
    errorhandler : new ErrorHandler
}