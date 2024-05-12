import { Request, Response } from "express";
import { createUser, getUser, removeUser ,updateUser , authUser , getUserById} from '../services/user.servics'
import { validationResult } from "express-validator";

export const create = async (req: Request, res: Response) => {
     try {
          const err = validationResult(req)
          if (!err.isEmpty()) {
               res.json({
                    error: true,
                    Errors: err.array(),
                    message: 'there are some validations error'
               })
          } else {
               const data = await createUser(req.body)
               res.json(data)
          }

     } catch (err) {
          return err
     }
}
export const login = async (req: Request, res: Response) => {
     try {
               const data = await authUser(req.body)
               res.json(data)
          }
          catch (err) {
               return err
          }
}

export const getList = async (req: Request, res: Response) => {
     try {
          const data = await getUser()
          res.json(data)
     } catch (err) {
          return err
     }
}
export const remove = async (req: Request, res: Response) => {
     try {
          const data = await removeUser(req.query.id)
          res.json(data)
     } catch (err) {
          return err
     }
}
export const getProfile = async (req: Request, res: Response) => {
     try {

          const data = await getUserById(req.query.id)
          res.json(data)
     } catch (err) {
          return err
     }
}
export const update = async (req: Request, res: Response) => {
     try {

          const data = await updateUser(req.query.id,req.body) 
          res.json(data)
     } catch (err) {
          return err
     }
}

// export const myAccount = async (req: Request, res: Response) => {
//      try {

//           const data = await getMyAccounts(req.query.id) 
//           res.json(data)
//      } catch (err) {
//           return err
//      }
// }