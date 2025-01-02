import { Controller, Get, Query, Param } from '@nestjs/common';
import { PredictionService } from '../Services/prediction.service';


@Controller('predictions')
export class PredictionController {
    constructor(private readonly predictionService: PredictionService) {}

    // Endpoint para obter probabilidades gerais
    @Get('probabilities')
    async getProbabilities(
        @Query('page') page: number = 1,
        @Query('perPage') perPage: number = 25,
        @Query('order') order: 'asc' | 'desc' = 'asc',
        @Query('includes') includes: string = '',
        @Query('filters') filters: string = '',
    ) {
        const includesArray = includes ? includes.split(',') : [];
        const filtersArray = filters ? filters.split(';') : [];
        return this.predictionService.getProbabilities(page, perPage, order, includesArray, filtersArray);
    }

    // Endpoint para obter previsibilidade por ID da liga
    @Get('predictability/leagues/:leagueId')
    async getPredictabilityByLeague(
        @Param('leagueId') leagueId: number,
        @Query('page') page: number = 1,
        @Query('perPage') perPage: number = 25,
        @Query('order') order: 'asc' | 'desc' = 'asc',
        @Query('includes') includes: string = '',
        @Query('filters') filters: string = '',
    ) {
        const includesArray = includes ? includes.split(',') : [];
        const filtersArray = filters ? filters.split(';') : [];
        return this.predictionService.getPredictabilityByLeague(
            leagueId,
            page,
            perPage,
            order,
            includesArray,
            filtersArray,
        );
    }

    // Endpoint para obter probabilidades por ID da partida
    @Get('probabilities/fixtures/:fixtureId')
    async getProbabilitiesByFixture(
        @Param('fixtureId') fixtureId: number,
        @Query('page') page: number = 1,
        @Query('perPage') perPage: number = 25,
        @Query('order') order: 'asc' | 'desc' = 'asc',
        @Query('includes') includes: string = '',
        @Query('filters') filters: string = '',
    ) {
        const includesArray = includes ? includes.split(',') : [];
        const filtersArray = filters ? filters.split(';') : [];
        return this.predictionService.getProbabilitiesByFixture(
            fixtureId,
            page,
            perPage,
            order,
            includesArray,
            filtersArray,
        );
    }

        // Endpoint para obter todas as value bets
        @Get('value-bets')
        async getValueBets(
            @Query('page') page: number = 1,
            @Query('perPage') perPage: number = 25,
            @Query('order') order: 'asc' | 'desc' = 'asc',
            @Query('includes') includes: string = '',
        ) {
            const includesArray = includes ? includes.split(',') : [];
            return this.predictionService.getValueBets(page, perPage, order, includesArray);
        }
    
        // Endpoint para obter value bets por ID da partida
        @Get('value-bets/fixtures/:fixtureId')
        async getValueBetsByFixture(
            @Param('fixtureId') fixtureId: number,
            @Query('page') page: number = 1,
            @Query('perPage') perPage: number = 25,
            @Query('order') order: 'asc' | 'desc' = 'asc',
            @Query('includes') includes: string = '',
        ) {
            const includesArray = includes ? includes.split(',') : [];
            return this.predictionService.getValueBetsByFixture(fixtureId, page, perPage, order, includesArray);
        }
}
