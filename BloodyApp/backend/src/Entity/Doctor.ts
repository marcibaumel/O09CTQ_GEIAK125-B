import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm";
import { Donation } from "./Donation";

@Entity()
export class Doctor extends BaseEntity {

    @PrimaryGeneratedColumn()
    doctor_id: number;

    @Column()
    email: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    password: string;

    @OneToMany(() => Donation, (donation: Donation) => donation.donation_id)
    donations: Donation[]
}
