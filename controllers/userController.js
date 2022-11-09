import asyncHandler from 'express-async-handler';
import Contact from '../models/contact.js';
import User from '../models/userModel.js'

// @dec Auth user & get tocken
// @routs POST /api/user/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if(user && (user.password === password)) {
        res.json({
            _id: user._id,
            email: user.email,
           
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

// @dec register a new user
// @routs POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const {  email, password } = req.body
    const userExists = await User.findOne({ email })
    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }
    const user = await User.create({

        email,
        password
    })
    if (user) {
        res.status(201).json({
            _id: user._id,
           
            email: user.email,
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

})
const contactUser = asyncHandler(async (req, res) => {
    const { name, email, message } = req.body
    const user = await Contact.create({

        name,
        email,
        message
    })
    if (user) {
        res.status(201).json({
            _id: user._id,
           
            email: user.email,
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

})

export { authUser, registerUser, contactUser }