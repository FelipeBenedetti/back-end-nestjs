import { Controller, Get, Param, Query } from '@nestjs/common';
import { CoachService } from '../Services/coach.service';

@Controller('coaches')
export class CoachController {
    constructor(private readonly coachService: CoachService) { }

    // Endpoint para buscar todos os coaches
    @Get()
    async getAllCoaches(
        @Query('includes') includes?: string,
        @Query('order') order: string = 'asc',
        @Query('per_page') perPage: number = 25,
        @Query('page') page: number = 1,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        return this.coachService.getAllCoaches(includeArray, order, perPage, page);
    }

    // Endpoint para buscar um coach por ID
    @Get(':coachId')
    async getCoachById(
        @Param('coachId') coachId: number,
        @Query('includes') includes?: string,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        return this.coachService.getCoachById(coachId, includeArray);
    }

    // Endpoint para buscar coaches por país
    @Get('countries/:countryId')
    async getCoachesByCountry(
        @Param('countryId') countryId: number,
        @Query('includes') includes?: string,
        @Query('order') order: string = 'asc',
        @Query('per_page') perPage: number = 25,
        @Query('page') page: number = 1,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        return this.coachService.getCoachesByCountry(countryId, includeArray, order, perPage, page);
    }

    // Endpoint para buscar coaches por nome
    @Get('search/:searchQuery')
    async searchCoachesByName(
        @Param('searchQuery') searchQuery: string,
        @Query('includes') includes?: string,
        @Query('order') order: string = 'asc',
        @Query('per_page') perPage: number = 25,
        @Query('page') page: number = 1,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        return this.coachService.searchCoachesByName(searchQuery, includeArray, order, perPage, page);
    }

    // Endpoint para buscar coaches atualizados nas últimas 2 horas
    @Get('latest')
    async getLastUpdatedCoaches(
        @Query('includes') includes?: string,
        @Query('order') order: string = 'asc',
        @Query('per_page') perPage: number = 25,
        @Query('page') page: number = 1,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        return this.coachService.getLastUpdatedCoaches(includeArray, order, perPage, page);
    }
}
