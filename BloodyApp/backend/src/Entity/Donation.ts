import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Doctor } from "./Doctor";
import { DonationPlace } from "./DonationPlace";
import { Donor } from "./Donor";

@Entity()
export class Donation {

    @PrimaryGeneratedColumn()
    donation_id: number;

    @Column()
    donation_date: Date;

    @Column()
    success_donation: boolean;

    @Column()
    about: string;

    @Column()
    directed_donation: boolean;

    @Column()
    directed_name: string;

    @Column()
    directed_taj_code: string;

    @ManyToOne(() => Donor, (donor: Donor) => donor.donor_id)
    donor_id_fk: Donor

    @ManyToOne(() => Doctor, (doctor: Doctor) => doctor.doctor_id)
    doctor_id_fk: Doctor

    @ManyToOne(() => DonationPlace, (donationPlace: DonationPlace) => donationPlace.place_id)
    donationPlace_id_fk: DonationPlace
}
