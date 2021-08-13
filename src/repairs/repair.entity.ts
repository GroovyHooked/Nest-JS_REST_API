import { Column, Entity, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Scooter } from "src/scooters/scooter.entity";

@Entity("repair")
export class Repair {

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column("varchar", { length: 25 })
    shortname: string;

    @ApiProperty()
    @Column()
    description: string;

    @ApiProperty()
    @Column()
    price: number;

    @ApiProperty()
    @Column({nullable: true})
    scooterId: number;

    @ManyToOne( () => Scooter, scooter => scooter.repairs)
    @JoinColumn({ name: "scooterId"})
    scooter: Scooter;

}