export const saveUser = (req, res) => {
    req.checkBody('name')
        .notEmpty()
        .withMessage("Name is requaired");
    req.checkBody('email')
        .notEmpty()
        .withMessage("Email is requaired");
    req.checkBody('email')
        .isEmail()
        .withMessage("The email shold have @ and .");
    req.checkBody('password')
        .notEmpty()
        .withMessage("Password is requaired");
    req.checkBody('userType')
        .notEmpty()
        .withMessage("User Type is requaired")
};