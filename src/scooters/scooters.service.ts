import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repair } from 'src/repairs/repair.entity';
import { createQueryBuilder, Repository, createConnection } from 'typeorm';
import { Scooter } from './scooter.entity';

@Injectable()
export class ScootersService {

    constructor(
        @InjectRepository(Scooter) 
        public scootersRepo: Repository<Scooter>,
        @InjectRepository(Repair) 
        public repairRepo: Repository<Repair>
        ){}

    getScooters(): Promise<Scooter[]> {
        return  this.scootersRepo.find();
    }

     getScooter(_id: number): Promise<Scooter> {
        return  this.scootersRepo.findOne({
            select: ["name", "motorization", "brand", "model", "mileage"],
            where: [{ "id": _id }],
        });
    }

    getScooterWithRepairs(_id: number): Promise<Scooter> {
        return createQueryBuilder("scooter")
            .leftJoinAndSelect("Scooter.repairs", "repair", "scooter.id = repair.scooterId")
            .where("scooter.id = :id", { id: _id })
            .getOne() as Promise<Scooter>
    }

    insertScooterWithRepair(
        name: string,
        motorization: number,
        brand: string,
        model: string,
        mileage: number,
        repairName: string,
        description: string,
        price: number,
        )
        {
                
                let newScooter = new Scooter();
                newScooter.name = name;
                newScooter.motorization = motorization;
                newScooter.brand = brand;
                newScooter.model = model;
                newScooter.mileage = mileage;
                
                let newRepair = new Repair();
                newRepair.shortname = repairName;
                newRepair.description = description;
                newRepair.price = price;
                newRepair.scooterId = newScooter.id;

                console.log("newRepair.scooter = " + newRepair)
                this.scootersRepo.save(newScooter);
                this.scootersRepo.createQueryBuilder('repairs')
                                .insert()
                                .into(Repair)
                                .values({
                                    shortname: newRepair.shortname,
                                    description: newRepair.description,
                                    price: newRepair.price,
                                })
                                .execute();

                console.log('Processed')
            
        
    }

    async createScooter(scooter: Scooter) {
        this.scootersRepo.insert(scooter)
    }

    async createRepair(repair: Repair) {
        this.repairRepo.insert(repair)
    }
    async updateScooter(scooter: Scooter) {
        this.scootersRepo.save(scooter)
    }

    async deleteScooter(scooter: Scooter) {
        this.scootersRepo.delete(scooter);
    }
}
