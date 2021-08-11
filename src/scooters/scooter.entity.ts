import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";


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
}