import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { createQueryBuilder, Repository, createConnection } from 'typeorm';
import { Scooter } from './scooter.entity';

@Injectable()
export class ScootersService {

    constructor(@InjectRepository(Scooter) public scootersRepo: Repository<Scooter> ){}

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

    async createScooter(scooter: Scooter) {
        this.scootersRepo.insert(scooter)
    }

    async updateScooter(scooter: Scooter) {
        this.scootersRepo.save(scooter)
    }

    async deleteScooter(scooter: Scooter) {
        this.scootersRepo.delete(scooter);
    }
}
