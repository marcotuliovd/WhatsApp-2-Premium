const validateEmail = async (req, res, next) => {
    const { email } = req.body;
    const re = /\S+@\S+\.\S+/;
    const emailOK = re.test(email);
    if (emailOK === false) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }
    next();
};

const validateDisplayName = async (req, res, next) => {
    const { displayName } = req.body;
    if (displayName.length < 8) {
        return res.status(400)
            .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    next();
};

const validatePassword = async (req, res, next) => {
    const { password } = req.body;
    if (password.length < 6) {
        return res.status(400)
            .json({ message: '"password" length must be at least 6 characters long' });
    }
    next();
};

module.exports = {
    validateEmail,
    validateDisplayName,
    validatePassword,
};