import { Controller, Get, Query, Param } from '@nestjs/common';
import { StandingService } from '../Services/standing.service';


@Controller('standings')
export class StandingController {
    constructor(private readonly standingService: StandingService) {}

    // Endpoint para obter todas as classificações (standings)
    @Get()
    async getStandings(@Query() queryParams: Record<string, any>): Promise<any> {
        return this.standingService.getAllStandings(queryParams);
    }

    // Endpoint para obter as classificações por ID da temporada
    @Get('seasons/:seasonId')
    async getStandingsBySeasonId(
        @Param('seasonId') seasonId: number,
        @Query() queryParams: Record<string, any>
    ): Promise<any> {
        return this.standingService.getStandingsBySeasonId(seasonId, queryParams);
    }

    // Endpoint para obter as classificações por ID da rodada
    @Get('rounds/:roundId')
    async getStandingsByRoundId(
        @Param('roundId') roundId: number,
        @Query() queryParams: Record<string, any>
    ): Promise<any> {
        return this.standingService.getStandingsByRoundId(roundId, queryParams);
    }

    // Endpoint para obter as correções de standings por ID da temporada
    @Get('corrections/seasons/:seasonId')
    async getStandingCorrectionsBySeasonId(
        @Param('seasonId') seasonId: number,
        @Query() queryParams: Record<string, any>
    ): Promise<any> {
        return this.standingService.getStandingCorrectionsBySeasonId(seasonId, queryParams);
    }

    // Endpoint para obter as classificações ao vivo por ID da liga
    @Get('live/leagues/:leagueId')
    async getLiveStandingsByLeagueId(
        @Param('leagueId') leagueId: number,
        @Query() queryParams: Record<string, any>
    ): Promise<any> {
        return this.standingService.getLiveStandingsByLeagueId(leagueId, queryParams);
    }
}
