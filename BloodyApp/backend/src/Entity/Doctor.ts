import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Donation } from "./Donation";

@Entity()
export class Doctor {

    @PrimaryGeneratedColumn()
    doctor_id: number;

    @Column()
    email: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @OneToMany(() => Donation, (donation: Donation) => donation.donation_id)
    donations: Donation[]
}
