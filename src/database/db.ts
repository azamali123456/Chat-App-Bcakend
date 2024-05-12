import { createConnection } from "typeorm";
import {User} from '../entities/user.entity';
import Checkout from '../entities/checkout.entity';
import CheckoutUser from '../entities/checkoutUser.entity';
export const db = async () => {
     const connection = await createConnection({
          type: "mysql",
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: 'developmet',
          entities: [User , Checkout ],
          synchronize: false
     });
     // Synchronize schema manually
     await connection.synchronize();
     console.log("Schema synchronized successfully");
};
