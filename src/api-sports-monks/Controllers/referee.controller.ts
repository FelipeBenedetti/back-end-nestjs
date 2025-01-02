import { Controller, Get, Param, Query } from '@nestjs/common';
import { RefereeService } from '../Services/referee.service';

@Controller('referees')
export class RefereeController {
    constructor(private readonly refereeService: RefereeService) { }

    // Endpoint para buscar todos os árbitros
    @Get()
    async getAllReferees(
        @Query('includes') includes?: string,
        @Query('order') order: string = 'asc',
        @Query('per_page') perPage: number = 25,
        @Query('page') page: number = 1,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        return this.refereeService.getAllReferees(includeArray, order, perPage, page);
    }

    // Endpoint para buscar árbitros por ID de país
    @Get('countries/:countryId')
    async getRefereesByCountryId(
        @Param('countryId') countryId: number,
        @Query('includes') includes?: string,
        @Query('order') order: string = 'asc',
        @Query('per_page') perPage: number = 25,
        @Query('page') page: number = 1,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        return this.refereeService.getRefereesByCountryId(countryId, includeArray, order, perPage, page);
    }

    // Endpoint para buscar árbitros por ID de temporada
    @Get('seasons/:seasonId')
    async getRefereesBySeasonId(
        @Param('seasonId') seasonId: number,
        @Query('includes') includes?: string,
        @Query('order') order: string = 'asc',
        @Query('per_page') perPage: number = 25,
        @Query('page') page: number = 1,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        return this.refereeService.getRefereesBySeasonId(seasonId, includeArray, order, perPage, page);
    }

    // Endpoint para buscar árbitros por nome
    @Get('search/:searchQuery')
    async searchRefereesByName(
        @Param('searchQuery') searchQuery: string,
        @Query('includes') includes?: string,
        @Query('order') order: string = 'asc',
        @Query('per_page') perPage: number = 25,
        @Query('page') page: number = 1,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        return this.refereeService.searchRefereesByName(searchQuery, includeArray, order, perPage, page);
    }

    // Endpoint para buscar um árbitro específico por ID
    @Get(':refereeId')
    async getRefereeById(
        @Param('refereeId') refereeId: number,
        @Query('includes') includes?: string,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        return this.refereeService.getRefereeById(refereeId, includeArray);
    }
}
