import * as express from 'express';
import { create, getList, remove,update, login , getProfile } from '../controllers/user.controller';
import { userValidation } from '../validations/user.validation' 
import  {authenticateToken} from '../middleware/auth'
 export const userRoute = express.Router();

userRoute.post('/register', userValidation(), create);
userRoute.post('/login',  login);
userRoute.get('/list',authenticateToken, getList);
userRoute.get('/getProfile',authenticateToken, getProfile);
userRoute.delete('/',authenticateToken, remove);
userRoute.patch('/',authenticateToken,userValidation(), update);
// userRoute.get('/myAccounts',authenticateToken, myAccount);