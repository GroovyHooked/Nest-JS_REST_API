import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Repair } from "src/repairs/repair.entity";


@Entity("scooter")
export class Scooter {

    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()  
    @Column()
    motorization: number;

    @ApiProperty()
    @Column()
    brand: string;

    @ApiProperty()
    @Column()
    model: string

    @ApiProperty()
    @Column()
    mileage: number;

    @ApiProperty()
    @OneToMany( type => Repair, repair => repair.scooter)
    repairs: Repair[];

    addRepair(repair: Repair){
        if(this.repairs == null){
            this.repairs = Array<Repair>();
        }
        this.repairs.push(repair)
    }
}