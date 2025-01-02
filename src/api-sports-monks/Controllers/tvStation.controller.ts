import { Controller, Get, Query, Param } from '@nestjs/common';
import { TVService } from '../Services/tvStation.service';


@Controller('tv-stations')
export class TVController {
    constructor(private readonly tvService: TVService) { }

    // Endpoint para obter todas as estações de TV
    @Get()
    async getAllTVStations(
        @Query('page') page: number = 1,
        @Query('perPage') perPage: number = 25,
        @Query('order') order: 'asc' | 'desc' = 'asc',
        @Query('includes') includes: string = '',
    ) {
        const includesArray = includes ? includes.split(',') : [];
        return this.tvService.getAllTVStations(page, perPage, order, includesArray);
    }

    // Endpoint para obter uma estação de TV por ID
    @Get(':id')
    async getTVStationById(
        @Param('id') id: number,
        @Query('includes') includes: string = '',
    ) {
        const includesArray = includes ? includes.split(',') : [];
        return this.tvService.getTVStationById(id, includesArray);
    }

    // Endpoint para obter estações de TV por ID da partida (fixture)
    @Get('fixtures/:fixtureId')
    async getTVStationsByFixtureId(
        @Param('fixtureId') fixtureId: number,
        @Query('includes') includes: string = '',
    ) {
        const includesArray = includes ? includes.split(',') : [];
        return this.tvService.getTVStationsByFixtureId(fixtureId, includesArray);
    }
}
