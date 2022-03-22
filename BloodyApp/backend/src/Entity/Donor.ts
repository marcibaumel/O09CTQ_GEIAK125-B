import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Donation } from "./Donation";

@Entity()
export class Donor {

    @PrimaryGeneratedColumn()
    donor_id: number;

    @Column()
    name: string;

    @Column()
    sex: string;

    @Column()
    nationality: string;

    @Column()
    birth_place: string;

    @Column()
    birth_time: string;

    @Column()
    postcode: string;

    @Column()
    town: string;

    @Column()
    address: string;

    @Column()
    taj_code: string;

    @OneToMany(() => Donation, (donation: Donation) => donation.donation_id)
    donations: Donation[]
}