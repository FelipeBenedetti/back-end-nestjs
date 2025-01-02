import {Controller, Get, Query, Param } from "@nestjs/common";
import { InplayOddsService } from "../Services/oddAoVivo.service";

@Controller('inplay-odds')
export class InplayOddsController {
    constructor(private readonly inplayOddsService: InplayOddsService) { }

    // Endpoint para obter todas as odds em jogo
    @Get()
    async getAllInplayOdds(
        @Query('page') page: number = 1,
        @Query('perPage') perPage: number = 25,
        @Query('order') order: 'asc' | 'desc' = 'asc',
        @Query('includes') includes: string = '',
    ) {
        const includesArray = includes ? includes.split(',') : [];
        return this.inplayOddsService.getAllInplayOdds(page, perPage, order, includesArray);
    }

    // Endpoint para obter odds em jogo por ID de fixture
    @Get('fixtures/:fixtureId')
    async getInplayOddsByFixture(
        @Param('fixtureId') fixtureId: number,
        @Query('includes') includes: string = '',
    ) {
        const includesArray = includes ? includes.split(',') : [];
        return this.inplayOddsService.getInplayOddsByFixture(fixtureId, includesArray);
    }

    // Endpoint para obter odds em jogo por ID de fixture e bookmaker
    @Get('fixtures/:fixtureId/bookmakers/:bookmakerId')
    async getInplayOddsByFixtureAndBookmaker(
        @Param('fixtureId') fixtureId: number,
        @Param('bookmakerId') bookmakerId: number,
        @Query('includes') includes: string = '',
    ) {
        const includesArray = includes ? includes.split(',') : [];
        return this.inplayOddsService.getInplayOddsByFixtureAndBookmaker(fixtureId, bookmakerId, includesArray);
    }

    // Endpoint para obter odds em jogo por ID de fixture e mercado
    @Get('fixtures/:fixtureId/markets/:marketId')
    async getInplayOddsByFixtureAndMarket(
        @Param('fixtureId') fixtureId: number,
        @Param('marketId') marketId: number,
        @Query('includes') includes: string = '',
    ) {
        const includesArray = includes ? includes.split(',') : [];
        return this.inplayOddsService.getInplayOddsByFixtureAndMarket(fixtureId, marketId, includesArray);
    }

    // Endpoint para obter as últimas odds em jogo atualizadas
    @Get('latest')
    async getLastUpdatedInplayOdds(@Query('includes') includes: string = '') {
        const includesArray = includes ? includes.split(',') : [];
        return this.inplayOddsService.getLastUpdatedInplayOdds(includesArray);
    }
}
