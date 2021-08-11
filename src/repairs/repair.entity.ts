import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";


@Entity("repair")
export class Repair {

    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    @ApiProperty()
    @Column({ type: "varchar", length: 25 })
    name: string;

    @ApiProperty()
    @Column({ type: "varchar", length: 255 })
    description: string;

    @ApiProperty()
    @Column()
    price: number;

    @ApiProperty()
    @Column()
    scooterId: number;

}