import { Controller, Post, Body, Get, Put, Delete, Param, Query } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiQuery, ApiParam } from '@nestjs/swagger';
import { Repair } from 'src/repairs/repair.entity';
import { RepairsService } from 'src/repairs/repairs.service';
import { Scooter } from './scooter.entity';
import { ScootersService } from './scooters.service';


@ApiTags('Scooters')
@Controller('scooters')
export class ScootersController {
    constructor(
        private service: ScootersService
        ){}

    @Get()
    all() {
        return this.service.getScooters()
    }
    
    @Get(':id')
    @ApiQuery({ name: 'withRepairs', allowEmptyValue: true, example: '1' })
    @ApiParam({ name: 'id', allowEmptyValue: true, example: '1' })
    get(@Param() params, @Query('withRepairs') withRepairs: String) {
        if (withRepairs) {
            return this.service.getScooterWithRepairs(params.id);
        }
        return this.service.getScooter(params.id);
    }

    @ApiCreatedResponse({ description: "Scooter row generated in database" })
    @Post()
    create(@Body() scooter: Scooter) {
             this.service.createScooter(scooter);
    }


    /*@Post(':name/:motorization/:brand/:model/:mileage/:shortname/:description/:price')
    @ApiParam({ name: 'price', allowEmptyValue: false, example: '180' })
    @ApiParam({ name: 'description', allowEmptyValue: false, example: 'Moteur' })
    @ApiParam({ name: 'shortname', allowEmptyValue: false, example: 'Reparations' })
    @ApiParam({ name: 'mileage', allowEmptyValue: false, example: '3400' })
    @ApiParam({ name: 'Model', allowEmptyValue: false, example: 'Sneeze' })
    @ApiParam({ name: 'Brand', allowEmptyValue: false, example: 'Vespa' })
    @ApiParam({ name: 'Motorization', allowEmptyValue: false, example: '50' })
    @ApiParam({ name: 'Name', allowEmptyValue: false, example: 'Martin' })
    insertScootAndRepair(@Param('name') name: string, @Param('motorization') motorization: number, @Param('brand') brand: string, @Param('model') model: string, @Param('mileage') mileage: number, @Param('shortname') shortname: string, @Param('description') description: string, @Param('price') price: number ):any {
        return this.service.insertScooterWithRepair(name, motorization, brand, model, mileage, shortname, description, price)
    }*/

    @Post()
    insert(@Body() scooter: Scooter, @Body() repair: Repair) {
        return this.service.insertBoth(scooter, repair)
    }

    @Put()
    update(@Body() scooter: Scooter) {
        return this.service.updateScooter(scooter);
    }

    @Delete(':id')
    @ApiParam({ name: 'id', allowEmptyValue: true, example: '1' })
    delete(@Param() params) {
        return this.service.deleteScooter(params.id);
    }
}

function RequestParam() {
    throw new Error('Function not implemented.');
}
   