import { Column, Entity, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Scooter } from "src/scooters/scooter.entity";

@Entity("repair")
export class Repair {

    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    @ApiProperty()
    @Column({ type: "varchar", length: 25 })
    shortname: string;

    @ApiProperty()
    @Column({ type: "varchar", length: 255 })
    description: string;

    @ApiProperty()
    @Column()
    price: number;

    @ApiProperty()
    @Column()
    scooterId: number;

    @ManyToOne( type => Scooter, scooter => scooter.repairs)
    @JoinColumn({ name: "scooterId"})
    scooter: Scooter;

}