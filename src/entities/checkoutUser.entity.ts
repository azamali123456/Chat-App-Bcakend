import { BaseEntity, Column, Entity, BeforeInsert, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'checkoutUser' })
 class CheckoutUser extends BaseEntity {
     @Column('uuid', { primary: true, generated: 'uuid' })
     id!: string;

    
}
export default CheckoutUser;
