import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Repair } from './repair.entity';
import { RepairsService } from './repairs.service';

@ApiTags('Réparations')
@Controller('repairs')
export class RepairsController {
    
    constructor(public service: RepairsService){}
    
    @Get()
    all() {
        return this.service.getRepairs()
    }
    
    @Get(':id')
    get(@Param() params) {
        return this.service.getRepair(params.id);
    }

    @Post()
    create(@Body() repair: Repair) {
        return this.service.createRepair(repair);
    }

    @Put()
    update(@Body() repair: Repair) {
        return this.service.updateRepair(repair);
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.service.deleteRepair(params.id);
    }
}