import { Controller, Get, Query } from '@nestjs/common';
import { ExpectedXGService } from '../Services/expectedXG.service';

@Controller('expected-xg')
export class ExpectedXGController {
    constructor(private readonly expectedXGService: ExpectedXGService) {}

    // Endpoint para obter xG por equipe
    @Get('teams')
    async getExpectedByTeam(
        @Query('page') page: number = 1,
        @Query('perPage') perPage: number = 25,
        @Query('order') order: 'asc' | 'desc' = 'asc',
        @Query('includes') includes: string = '',
        @Query('filters') filters: string = '',
    ) {
        const includesArray = includes ? includes.split(',') : [];
        const filtersArray = filters ? filters.split(';') : [];
        return this.expectedXGService.getExpectedByTeam(
            page,
            perPage,
            order,
            includesArray,
            filtersArray,
        );
    }

    // Endpoint para obter xG por jogador
    @Get('players')
    async getExpectedByPlayer(
        @Query('page') page: number = 1,
        @Query('perPage') perPage: number = 25,
        @Query('order') order: 'asc' | 'desc' = 'asc',
        @Query('includes') includes: string = '',
        @Query('filters') filters: string = '',
    ) {
        const includesArray = includes ? includes.split(',') : [];
        const filtersArray = filters ? filters.split(';') : [];
        return this.expectedXGService.getExpectedByPlayer(
            page,
            perPage,
            order,
            includesArray,
            filtersArray,
        );
    }
}
