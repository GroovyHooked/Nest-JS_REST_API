import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Repair } from "src/repairs/repair.entity";

@Entity("scooter")
export class Scooter {

    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    @ApiProperty({
        description: 'The name of the owner',
        type: 'String'
      })
    @Column({ type: "varchar", length: 255 })
    name: string;

    @ApiProperty({
        description: 'Motorization of the vehicule',
        type: 'Number'
      })  
    @Column({ type: "int" })
    motorization: number;

    @ApiProperty({
        description: 'Brand of the vehicule',
        type: 'String'
      })
    @Column({ type: "varchar", length: 255 })
    brand: string;

    @ApiProperty({
        description: 'Model of the vehicule',
        type: 'String'
      })
    @Column({ type: "varchar", length: 255 })
    model: string

    @ApiProperty({
        description: 'Mileage of the vehicule',
        type: 'Number'
      })
    @Column({ type: "int" })
    mileage: number;

    @ApiProperty({
        description: 'OneToMany Relationship with repairs table',
      })
    @OneToMany( type => Repair, repair => repair.scooter)
    repairs: Repair[];

    addRepair(repair: Repair){
        if(this.repairs == null){
            this.repairs = Array<Repair>();
        }
        this.repairs.push(repair)
    }
}