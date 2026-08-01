import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existUSer = await User.findOne({ email });
        if (existUSer) {
            return res.status(400).json({
                success: false,
                message: 'User Already Exist'
            })
        }
        const HashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: HashedPassword,
        })
        return res.status(201).json({
            success: true,
            message: "User Register Successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })

    }
}
export const loginUser = async (req,res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
               return res.status(400).json({
                    success: false,
                    message: "Email and Passwords are required"
                })
            }
            const user = await User.findOne({ email });
            if (!user) {
               return res.status(400).json({
                    success: false,
                    message: "User not Found"
                })
            }
            const passwordMatch = await bcrypt.compare(password, user.password)
            if (!passwordMatch) {
               return res.status(400).json({
                    success: false,
                    message: "Invalid Password"
                })
            }
            const token = jwt.sign(
                {
                    id: user.id,
                    role: user.role

                },
                process.env.JWT_SECRET,
                {
                    expiresIn: '7d',
                }
            )

            return res.status(200).json({
                success: true,
                message: "Login Successfully",
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
            });
        }
        catch (error) {
           return res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }
