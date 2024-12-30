const router = require("express").Router();
const User = require("../models/User");
const { userValidationRules } = require("../validators/userValidator");
const validate = require("../middlewares/validate");
const bcrypt = require('bcrypt');

// Register
router.post("/register", userValidationRules(), validate, async (req, res) => {
    try{
        // Gera senha criptografada
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
        // Cria novo usuário
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            address: req.body.address,
            phone: req.body.phone,
        });

        // Salva usuário e retorna resposta
        const user = await newUser.save();
        res.status(200).json(user._id);
    }
    catch(err){
        res.status(500).json(err);
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        // Busca usuário
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).json("Username or password is incorrect");
        }

        // Valida senha
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!validPassword) {
            return res.status(400).json("Username or password is incorrect");
        }

        // Retorna resposta
        res.status(200).json({ _id: user._id, username: user.username });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;