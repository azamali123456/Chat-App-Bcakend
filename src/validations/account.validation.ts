import { check } from 'express-validator'

export const stripeUser = () => {
     return [
          check('name').exists().withMessage('name is required').isLength({ min: 6}).withMessage('name should be b/w 6 and 15 characters'),

          check('email').exists().withMessage('email is required').isEmail().withMessage('email is not in right format'),
     ];
}
export const AddToCard = () => {
     return [
          check('userName').exists().withMessage('fullName is required').isLength({ min: 6, max: 15 }).withMessage('fullName should be b/w 6 and 15 characters'),

          check('email').exists().withMessage('email is required').isEmail().withMessage('email is not in right format'),

          check('password').exists().withMessage('password is required').isLength({ min: 5 }).isString().withMessage('password must be string'),

          check('checkOut').exists().withMessage('You have to check-out now').isBoolean().withMessage('check-out  must be Boolean'),

          check('userId').exists().withMessage('Account must be created against one user!').isString().withMessage('userId  must be string'),

     ];


}