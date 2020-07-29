export const handleError = (error) => {
    return {
        statusCode: 403,
        message: "Please login",
        error
    }  
}