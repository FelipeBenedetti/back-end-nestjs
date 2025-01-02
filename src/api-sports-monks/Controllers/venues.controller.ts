import { Controller, Get, Query, Param } from '@nestjs/common';
import { VenuesService } from '../Services/venues.service';

@Controller('venues')
export class VenuesController {
    constructor(private readonly venuesService: VenuesService) { }

    @Get()
    async getAllVenues(
        @Query('page') page: number = 1,
        @Query('perPage') perPage: number = 25,
        @Query('order') order: 'asc' | 'desc' = 'asc',
        @Query('includes') includes: string = '',
    ) {
        const includesArray = includes ? includes.split(',') : [];
        return this.venuesService.getAllVenues(page, perPage, order, includesArray);
    }

    @Get(':id')
    async getVenueById(
        @Param('id') id: number,
        @Query('includes') includes: string = '',
    ) {
        const includesArray = includes ? includes.split(',') : [];
        return this.venuesService.getVenueById(id, includesArray);
    }

    @Get('seasons/:seasonId')
    async getVenuesBySeasonId(
        @Param('seasonId') seasonId: number,
        @Query('includes') includes: string = '',
    ) {
        const includesArray = includes ? includes.split(',') : [];
        return this.venuesService.getVenuesBySeasonId(seasonId, includesArray);
    }


    // Endpoint para buscar jogadores por nome com filtros e includes
    @Get('search/:searchQuery')
    async searchVenuesByName(
        @Param('searchQuery') searchQuery: string,
        @Query('order') order?: string,
        @Query('per_page') perPage?: number,
        @Query('page') page?: number,
        @Query('filters') filters?: string,
        @Query('includes') includes?: string,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        const filterParams = filters ? JSON.parse(filters) : {};
        return this.venuesService.searchVenuesByName(
            searchQuery,
            { order, per_page: perPage, page, ...filterParams },
            includeArray,
        );
    }
}