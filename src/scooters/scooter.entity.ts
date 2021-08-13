import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Repair } from "src/repairs/repair.entity";

@Entity("scooter")
export class Scooter {

    @PrimaryGeneratedColumn()
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
    @OneToMany( () => Repair, repairs => repairs.scooter)
    repairs: Repair[];

    addRepair(repair: Repair){
        if(this.repairs == null){
            this.repairs = Array<Repair>();
        }
        this.repairs.push(repair)
    }
}