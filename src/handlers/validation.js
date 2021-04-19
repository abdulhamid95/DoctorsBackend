const showValidationErrors = (req, res, next) => {
    const errors = req.validationErrors();
    if(errors){
        const errorArray = errors.map(err => err.msg);
        return res.status(442).json({message: errorArray});
    }

    next();
}

const validate = fn => {
    return function(req, res, next){
        fn(req, res);
        showValidationErrors(req, res, next);
    }
}

export default validate;