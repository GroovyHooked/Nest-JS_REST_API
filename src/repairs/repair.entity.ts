import { Column, Entity, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Scooter } from "src/scooters/scooter.entity";

@Entity("repair")
export class Repair {

    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    @ApiProperty({
        description: 'The name of the repair',
        type: 'String'
      })
    @Column({ type: "varchar", length: 25 })
    shortname: string;

    @ApiProperty({
        description: 'Description of the problem',
        type: 'String'
      })
    @Column({ type: "varchar", length: 255 })
    description: string;

    @ApiProperty({
        description: 'Price of the repair',
        type: 'Number'
    })
    @Column({ type: "int" })
    price: number;

    @ApiProperty({
            description: 'Id of the scooter that is related to the repair',
            type: 'Number'
        })
    @Column()
    scooterId: number;

    @ManyToOne( type => Scooter, scooter => scooter.repairs)
    @JoinColumn({ name: "scooterId"})
    scooter: Scooter;

}