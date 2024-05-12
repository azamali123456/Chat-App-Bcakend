import * as express from 'express';
export const checkoutRoute = express.Router();
import { createCustomer, stripeAddToCard ,checkout, checkoutNew1} from '../controllers/checkout.controller';
import { stripeUser, AddToCard } from '../validations/account.validation'


checkoutRoute.post('/create-customer',createCustomer);
checkoutRoute.post('/add-to-card', stripeAddToCard);
checkoutRoute.post('/create-Charge', checkout);


checkoutRoute.post('/create-charge', checkoutNew1);
