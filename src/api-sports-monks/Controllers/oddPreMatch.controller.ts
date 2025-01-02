import { Controller, Get, Param, Query } from '@nestjs/common';
import { OddsService } from '../Services/oddPreMatch.service';

@Controller('odds')
export class OddsController {
    constructor(private readonly oddsService: OddsService) {}

    // Endpoint para obter todas as odds pré-jogo
    @Get('pre-match')
    async getAllOdds(
        @Query('page') page: number = 1,
        @Query('perPage') perPage: number = 25,
        @Query('order') order: 'asc' | 'desc' = 'asc',
        @Query('includes') includes: string = '',
    ) {
        const includesArray = includes ? includes.split(',') : [];
        return this.oddsService.getAllOdds(page, perPage, order, includesArray);
    }

    // Endpoint para obter odds por ID de fixture
    @Get('pre-match/fixtures/:fixtureId')
    async getOddsByFixture(
        @Param('fixtureId') fixtureId: number,
        @Query('includes') includes: string = '',
    ) {
        const includesArray = includes ? includes.split(',') : [];
        return this.oddsService.getOddsByFixture(fixtureId, includesArray);
    }

    // Endpoint para obter odds por ID de fixture e bookmaker
    @Get('pre-match/fixtures/:fixtureId/bookmakers/:bookmakerId')
    async getOddsByFixtureAndBookmaker(
        @Param('fixtureId') fixtureId: number,
        @Param('bookmakerId') bookmakerId: number,
        @Query('includes') includes: string = '',
    ) {
        const includesArray = includes ? includes.split(',') : [];
        return this.oddsService.getOddsByFixtureAndBookmaker(fixtureId, bookmakerId, includesArray);
    }

    // Endpoint para obter odds por ID de fixture e mercado
    @Get('pre-match/fixtures/:fixtureId/markets/:marketId')
    async getOddsByFixtureAndMarket(
        @Param('fixtureId') fixtureId: number,
        @Param('marketId') marketId: number,
        @Query('includes') includes: string = '',
    ) {
        const includesArray = includes ? includes.split(',') : [];
        return this.oddsService.getOddsByFixtureAndMarket(fixtureId, marketId, includesArray);
    }

    // Endpoint para obter as últimas odds atualizadas
    @Get('pre-match/latest')
    async getLastUpdatedOdds(@Query('includes') includes: string = '') {
        const includesArray = includes ? includes.split(',') : [];
        return this.oddsService.getLastUpdatedOdds(includesArray);
    }
}
