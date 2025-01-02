import { Controller, Get, Param, Query, ParseIntPipe } from '@nestjs/common';
import { RoundService } from '../Services/round.service';

@Controller('rounds')
export class RoundController {
    constructor(private readonly roundService: RoundService) {}

    // Endpoint para obter todas as rodadas
    @Get()
    async getRounds(@Query() queryParams: Record<string, any>): Promise<any> {
        return this.roundService.getAllRounds(queryParams);
    }

    // Endpoint para obter uma rodada específica por ID
    @Get(':roundId')
    async getRoundById(
        @Param('roundId', ParseIntPipe) roundId: number,
        @Query() queryParams: Record<string, any>,  // Aceita filtros e includes na query
    ): Promise<any> {
        return this.roundService.getRoundById(roundId, queryParams);
    }

    // Endpoint para obter as rodadas por Season ID
    @Get('seasons/:seasonId')
    async getRoundsBySeasonId(
        @Param('seasonId', ParseIntPipe) seasonId: number,
        @Query() queryParams: Record<string, any>,  // Aceita filtros e includes na query
    ): Promise<any> {
        return this.roundService.getRoundsBySeasonId(seasonId, queryParams);
    }

    // Endpoint para obter as rodadas por Stage ID
    @Get('stages/:stageId')
    async getRoundsByStageId(
        @Param('stageId', ParseIntPipe) stageId: number,
        @Query() queryParams: Record<string, any>,  // Aceita filtros e includes na query
    ): Promise<any> {
        return this.roundService.getRoundsByStageId(stageId, queryParams);
    }
}
