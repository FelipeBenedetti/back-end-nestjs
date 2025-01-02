import { Controller, Get, Param, Query, ParseIntPipe } from '@nestjs/common';
import { StageService } from '../Services/stage.service';

@Controller('stages')
export class StageController {
    constructor(private readonly stageService: StageService) {}

    // Endpoint para obter todos os estágios
    @Get()
    async getStages(@Query() queryParams: Record<string, any>): Promise<any> {
        return this.stageService.getAllStages(queryParams);
    }

    // Endpoint para obter um estágio por ID
    @Get(':stageId')
    async getStageById(
        @Param('stageId', ParseIntPipe) stageId: number,
        @Query() queryParams: Record<string, any>,  // Aceita filtros e includes na query
    ): Promise<any> {
        return this.stageService.getStageById(stageId, queryParams);
    }

    // Endpoint para obter os estágios por Season ID
    @Get('seasons/:seasonId')
    async getStagesBySeasonId(
        @Param('seasonId', ParseIntPipe) seasonId: number,
        @Query() queryParams: Record<string, any>,  // Aceita filtros e includes na query
    ): Promise<any> {
        return this.stageService.getStagesBySeasonId(seasonId, queryParams);
    }
}
