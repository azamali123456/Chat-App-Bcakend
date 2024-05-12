import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User extends BaseEntity {
     @PrimaryGeneratedColumn("uuid") public id!: string;

     @Column({ nullable: false,  })
     fullName!: string;

     @Column({ nullable: false,  })
     phone!: string;

     @Column({ nullable: false,  })
     cnic!: string;

     @Column({ nullable: false, unique:true })
     email!: string;

     @Column({ nullable: false, })
     password!: string;
}
