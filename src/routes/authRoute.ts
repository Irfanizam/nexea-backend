import { registerUser, getlogin, getprofile, forgetPassword, resetPassword } from '@controllers/authController';
import { Router } from 'express';
import { validateToken } from '@utils/JwtHelper';
// import { login } from '../controllers/index';

export const authRouter = Router();

//Register

authRouter.route('/register').post(registerUser);

//login + logout

authRouter.route('/login').post(getlogin);
//authRouter.route('/logout').post(logout);

//Profile

authRouter.route('/profile').get(validateToken, getprofile);

// Password

authRouter.route('/forget-password').post(forgetPassword);
authRouter.route('/reset-password').post(resetPassword);