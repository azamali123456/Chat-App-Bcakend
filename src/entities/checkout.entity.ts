import { BaseEntity, Column, Entity, BeforeInsert, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'checkout' })
class Checkout extends BaseEntity {
    @Column('uuid', { primary: true, generated: 'uuid' })
    id!: string;

    @Column({ nullable: true, type: String })
    name!: string;

    @Column({ nullable: true, type: String })
    email!: string;

    @Column({ nullable: true, type: String })
    stripeId!: string;

    @Column({ nullable: true, type: String })
    type!: string;

    @Column({ nullable: true, type: String })
    invoice_prefix!: String;

    @Column({ nullable: true, type: Number })
    userId!: number;



    @Column({ nullable: false, default: false, type: 'boolean' })
    checkOut!: boolean;

    @Column({ nullable: true, type: String })
    productId!: String;

    @Column({ nullable: true, type: String })
    card_Name!: String;

    @Column({ nullable: true, type: String })
    card_ExpYear!: String;

    @Column({ nullable: true, type: String })
    card_ExpMonth!: String;

    @Column({ nullable: true, type: String })
    card_CVC!: String;


;;;
    @Column({ nullable: true, type: String })
    address_zip!: String;

    @Column({ nullable: true, type: String })
    address_zip_check!: String;

    @Column({ nullable: true, type: String })
    brand!: String;

    @Column({ nullable: true, type: String })
    country!: String;


    @Column({ nullable: true, type: String })
    cvc_check!: String;

    @Column({ nullable: true, type: Number })
    exp_month!: number;

    @Column({ nullable: true, type: String })
    dynamic_last4!: String;

    @Column({ nullable: true, type: Number })
    exp_year!: number;


    @Column({ nullable: true, type: String })
    funding!: String;

    @Column({ nullable: true, type: String })
    cardId!: String;

    @Column({ nullable: true, type: String })
    cardToken!: String;

    @Column({ nullable: true, type: String })
    fingerprint!: String;

    

    @Column({ nullable: true, type: String })
    last4!: String;
  
    @Column({ nullable: true, type: String })
    tokenization_method!: String;

    @Column({ nullable: true, type: String })
    wallet!: String;
    

    @Column({ nullable: true, type: String })
    customer!: String;
    
    @Column({ nullable: true, type: String })
    address_line1!: String;

    @Column({ nullable: true, type: String })
    address_line2!: String;

    @Column({ nullable: true, type: String })
    object!: String;
  

}
export default Checkout;
