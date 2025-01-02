import { Controller, Get, Param, Query } from '@nestjs/common';
import { TopScorerService } from '../Services/topScorer.service';

@Controller('topscorers')
export class TopScorerController {
    constructor(private readonly topScorerService: TopScorerService) { }

    @Get('seasons/:seasonId')
    async getTopScorersBySeason(
        @Param('seasonId') seasonId: string,
        @Query('order') order?: string,
        @Query('per_page') perPage?: number,
        @Query('page') page?: number,
        @Query('includes') includes?: string,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        return this.topScorerService.getTopScorersBySeasonId(seasonId, { order, per_page: perPage, page }, includeArray);
    }

    @Get('stages/:stageId')
    async getTopScorersByStage(
        @Param('stageId') stageId: string,
        @Query('order') order?: string,
        @Query('per_page') perPage?: number,
        @Query('page') page?: number,
        @Query('includes') includes?: string,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        return this.topScorerService.getTopScorersByStageId(stageId, { order, per_page: perPage, page }, includeArray);
    }
}
