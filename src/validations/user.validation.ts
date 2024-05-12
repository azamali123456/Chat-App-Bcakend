import { check } from 'express-validator'

export const userValidation = () => {
     return [
          check('fullName').exists().withMessage('fullName is required').isLength({ min: 6, max: 15 }).withMessage('fullNmae should be b/w 6 and 15 characters'),

          check('email').exists().withMessage('email is required').isEmail().withMessage('email is not in right format'),

          check('phone').exists().withMessage('phone is required').isLength({ min: 11 }).isNumeric().withMessage('phone is integer'),

          check('password').exists().withMessage('password is required').isLength({ min: 5 }).isString().withMessage('password is string'),

          check('cnic').exists().withMessage('cnic is required').isLength({ min: 14 }).isNumeric().withMessage('cnic is integer')
     ];


}
