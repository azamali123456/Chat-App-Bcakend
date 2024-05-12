import Checkout from "../entities/checkout.entity";
// import CheckoutUser from '../entities/checkoutUser.entity'
const { getRepository } = require('typeorm');
//const jwt = require('jsonwebtoken');
const stripe = require('stripe')('sk_test_51NFKZLAgDjJFNJDFCKn6K3RAcVhlQ4xnm6TaKI6ddKkHdfxT3928rcB8baVoB3XCFoscIrllGpeuPjRmwWAVt6qJ00vrjPBTnF');

// Create Stripe User
export const createStripUser = async (accountData: any) => {
     try {
          const { name, email } = accountData;
          const user: any = await Checkout.findOne({ where: { email: email } });
          if (user == null) {
               const stripeUser: any = await stripe.customers.create({ name, email });
               const StripeUser: any = { email: stripeUser['email'], name: stripeUser['name'], stripeId: stripeUser['id'], type: stripeUser['object'], invoice_prefix: stripeUser['invoice_prefix'] }
               const newAccount = Checkout.create(StripeUser);
               const savedAccount = await newAccount.save();
               return {
                    status: false,
                    message: "Checkout Customer is created successfully!",
                    data: [savedAccount]
               };
          } else {
               return {
                    status: false,
                    message: "Checkout Customer is created successfully!",
                    data: [user]
               };
          }
     } catch (error: any) {
          return { status: false, message: error.message };
     }
};
// Create Stripe Card
export const AddToCard = async (stripeDto: any) => {
     try {
          const data: any = await Checkout.findOne({ where: { stripeId: stripeDto.stripeId } });
          if (data) {
               const card = await stripe.customers.createSource(stripeDto.stripeId, {
                    source: stripeDto.cardToken,
               });
               delete card.address_city
               delete card.address_country
               delete card.address_line1_check
               delete card.metadata
               delete card.address_state
               const cardDetail: any = await Checkout.update(data.id, card);
               const updatedData: any = await Checkout.findOne({ where: { stripeId: stripeDto.stripeId } });

               return {
                    status: true,
                    message: "Card registered successfully!",
                    data: updatedData,
               };
          } else {
               return {
                    status: false,
                    message: "Checkout Customer does not exist. Please create the Checkout Customer.",
               };
          }
     } catch (error: any) {
          return { status: false, message: error.message };
     }
};
// Create Checkout/Charge for Item/Product
export const checkoutNow = async (paymentDto: any) => {
     try {
          // if (data) {
          const payment = await stripe.charges.create({
               receipt_email: 'test@gmail.com',
               amount: parseInt(paymentDto.amount) * 100,
               currency: 'INR',
               card: paymentDto.cardId,
               customer: paymentDto.customerId
          });


          return {
               status: true,
               message: "Your checkout successfully done!",
               data: payment,
          };
          // } else {
          //      return {
          //           status: false,
          //           message: "Checkout Customer does not exist. Please create the Checkout Customer.",
          //      };
          // }
     } catch (error: any) {
          return { status: false, message: error.message };
     }
};


//All In One
export const checkoutNew = async (paymentDto: any) => {
     try {
          console.log(paymentDto)
          const { job } = paymentDto;
          const confirmPaymentIntents = [];
          console.log(paymentDto, "paymentDto")

          for (let i = 0; i < paymentDto.job.length; i++) {
               const { name, email, token, address, paymentMethodType } = paymentDto;

               // Create Customer
               const stripeUser: any = await stripe.customers.create({
                    name,
                    email,
                    address: {
                         line1: address.line1,
                         city: address.city,
                         state: address.state,
                         postal_code: address.postal_code,
                         country: address.country,
                    },
                    phone: "03327387009",
                    description: "this is description!",
               });

               // Create Payment Method
               const paymentMethod = await stripe.paymentMethods.create({
                    type: paymentMethodType,
                    card: {
                         token: token,
                    },
               });

               // Attach Payment Method to Customer
               await stripe.paymentMethods.attach(paymentMethod.id, {
                    customer: stripeUser.id,
               });

               // Create Payment Intent
               const paymentIntent = await stripe.paymentIntents.create({
                    amount: parseInt('100') * 100, // Adjust amount as needed
                    currency: 'usd', // Adjust currency as needed
                    customer: stripeUser.id,
                    payment_method_types: [paymentMethodType], // Set payment method type dynamically
                    // Set the Payment Method to be used for this Payment Intent
                    payment_method: paymentMethod.id,
               });

               // Confirm Payment Intent
               const confirmPaymentIntent = await stripe.paymentIntents.confirm(
                    paymentIntent.id,
                    {
                         return_url: 'https://example.com/payment-return-url', // Adjust return URL as needed
                    },
               );

               confirmPaymentIntents.push(confirmPaymentIntent);
          }

          return confirmPaymentIntents;
     } catch (err: any) {
          return { message: err.message };
     }
}


export const checkoutNew2 = async (paymentDto: any) => {
     try {
          const { token, amount, description, currency } = paymentDto;
          // Create a charge using the token received from the client
          const charge = await stripe.charges.create({
               amount,
               currency,
               description,
               source: token,
          });

          return charge;
     } catch (err: any) {
          console.log(err.message)
          return { message: err.message };
     }
}

