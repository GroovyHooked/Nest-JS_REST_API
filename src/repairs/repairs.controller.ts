import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
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
    @ApiParam({ name: 'id', allowEmptyValue: true, example: '1' })
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
    @ApiParam({ name: 'id', allowEmptyValue: true, example: '1' })
    delete(@Param() params) {
        return this.service.deleteRepair(params.id);
    }
}