import { Request, Response } from "express";
import { createStripUser, AddToCard, checkoutNow, checkoutNew,checkoutNew2 } from '../services/checkout.servics'
import { validationResult } from "express-validator";

// Create Stripe User ( Optional)
export const createCustomer = async (req: Request, res: Response) => {
     try {
          const err = validationResult(req)
          if (!err.isEmpty()) {
               res.json({
                    error: true,
                    Errors: err.array(),
                    message: 'there are some validations error'
               })
          } else {
               const data = await createStripUser(req.body)
               res.json(data)
          }

     } catch (err) {
          return err
     }
}
// Create Stripe User Card Account 
export const stripeAddToCard = async (req: Request, res: Response) => {
     try {
          const data = await AddToCard(req.body)
          res.json(data)
     } catch (err) {
          return err
     }
}

// Checkout For Stripe User Card   
export const checkout = async (req: Request, res: Response) => {
     try {
          const data = await checkoutNow(req.body)
          res.json(data)
     } catch (err) {
          return err
     }
}

export const checkoutNew1 =async (req: Request, res: Response) => {
     try {
          const data = await checkoutNew(req.body)
          res.json(data)
     } catch (err) {
          return err
     }
}
