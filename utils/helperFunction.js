export function deepCopy(obj){
    return JSON.parse(JSON.stringify(obj));
} 

export function getErrorFromErrorObj(error){
    let errorObj = {};
    if(error instanceof Error){
        if(error.code){
            errorObj.code = error.code;
        }
        if(error.message){
            errorObj.message = error.message;
        }
        if(error.stack){
            errorObj.stack = error.stack;
        }
        if(error.original){
            errorObj.original = error.original;
        }
        if(error.parent){
            errorObj.parent = error.parent;
        }
        if(error.parent){
            errorObj.parent = error.parent;
        }
    }else if(typeof error == "string"){
        errorObj.errorString = error;
    }else{
        errorObj.error = error;
    }

    return errorObj;
}