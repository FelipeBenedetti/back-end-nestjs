import { Controller, Get, Param, Query } from '@nestjs/common';
import { PlayerService } from '../Services/player.service';

@Controller('players')
export class PlayerController {
    constructor(private readonly playerService: PlayerService) { }

    // Endpoint para buscar todos os jogadores com filtros e includes
    @Get()
    async getAllPlayers(
        @Query('order') order?: string,
        @Query('per_page') perPage?: number,
        @Query('page') page?: number,
        @Query('filters') filters?: string,
        @Query('includes') includes?: string,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        const filterParams = filters ? JSON.parse(filters) : {};
        return this.playerService.getAllPlayers(
            { order, per_page: perPage, page, ...filterParams },
            includeArray,
        );
    }

    // Endpoint para buscar um jogador específico pelo ID com filtros e includes
    @Get(':id')
    async getPlayerById(
        @Param('id') playerId: number,
        @Query('includes') includes?: string,
        @Query('filters') filters?: string,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        const filterParams = filters ? JSON.parse(filters) : {};
        return this.playerService.getPlayerById(playerId, includeArray, filterParams);
    }

    // Endpoint para buscar jogadores por ID de país com filtros e includes
    @Get('countries/:countryId')
    async getPlayersByCountryId(
        @Param('countryId') countryId: number,
        @Query('order') order?: string,
        @Query('per_page') perPage?: number,
        @Query('page') page?: number,
        @Query('filters') filters?: string,
        @Query('includes') includes?: string,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        const filterParams = filters ? JSON.parse(filters) : {};
        return this.playerService.getPlayersByCountryId(
            countryId,
            { order, per_page: perPage, page, ...filterParams },
            includeArray,
        );
    }

    // Endpoint para buscar jogadores por nome com filtros e includes
    @Get('search/:searchQuery')
    async searchPlayersByName(
        @Param('searchQuery') searchQuery: string,
        @Query('order') order?: string,
        @Query('per_page') perPage?: number,
        @Query('page') page?: number,
        @Query('filters') filters?: string,
        @Query('includes') includes?: string,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        const filterParams = filters ? JSON.parse(filters) : {};
        return this.playerService.searchPlayersByName(
            searchQuery,
            { order, per_page: perPage, page, ...filterParams },
            includeArray,
        );
    }

    // Endpoint para buscar jogadores atualizados nas últimas 2 horas
    @Get('latest')
    async getLastUpdatedPlayers(
        @Query('order') order?: string,
        @Query('includes') includes?: string,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        return this.playerService.getLastUpdatedPlayers({ order }, includeArray);
    }
}
