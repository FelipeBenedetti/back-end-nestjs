import { Controller, Get, Param, Query } from '@nestjs/common';
import { SeasonService } from '../Services/season.service';

@Controller('seasons')  // Define o caminho base para os endpoints relacionados às temporadas
export class SeasonController {
    constructor(private readonly seasonService: SeasonService) { }

    // Endpoint para buscar todas as temporadas
    @Get()  // Rota para buscar todas as temporadas
    async getAllSeasons(
        @Query('include') include: string,      // Parâmetro opcional para enriquecer a resposta com dados adicionais
        @Query('filters') filters: string,      // Parâmetro opcional para filtros
        @Query('locale') locale: string,        // Parâmetro opcional para tradução
        @Query('order') order: string,          // Parâmetro opcional para ordenação
        @Query('per_page') perPage: number,     // Quantidade de resultados por página
        @Query('page') page: number            // Número da página para a paginação dos resultados
    ) {
        return await this.seasonService.getAllSeasons(include, filters, locale, order, perPage, page);
    }

    // Endpoint para buscar uma temporada específica pelo ID
    @Get(':id')  // Rota para buscar temporada por ID
    async getSeasonById(
        @Param('id') id: string,                // Parâmetro obrigatório para o ID da temporada
        @Query('include') include: string,      // Parâmetro opcional para enriquecer a resposta com dados adicionais
        @Query('filters') filters: string,      // Parâmetro opcional para filtros
        @Query('locale') locale: string,        // Parâmetro opcional para tradução
    ) {
        return await this.seasonService.getSeasonById(id, include, filters, locale);
    }

    // Endpoint para buscar temporadas de uma equipe específica pelo ID
    @Get('teams/:teamId')  // Rota para buscar temporadas por ID de equipe
    async getSeasonsByTeamId(
        @Param('teamId') teamId: string,        // Parâmetro obrigatório para o ID da equipe
        @Query('include') include: string,      // Parâmetro opcional para enriquecer a resposta com dados adicionais
        @Query('filters') filters: string,      // Parâmetro opcional para filtros
        @Query('locale') locale: string,        // Parâmetro opcional para tradução
    ) {
        return await this.seasonService.getSeasonsByTeamId(teamId, include, filters, locale);
    }

    // Endpoint para buscar temporadas por nome
    @Get('search/:searchQuery')  // Rota para buscar temporadas por nome
    async searchSeasonsByName(
        @Param('searchQuery') searchQuery: string, // Parâmetro obrigatório para a consulta de pesquisa
        @Query('include') include: string,          // Parâmetro opcional para enriquecer a resposta com dados adicionais
        @Query('filters') filters: string,          // Parâmetro opcional para filtros
        @Query('locale') locale: string,            // Parâmetro opcional para tradução
        @Query('order') order: string,              // Parâmetro opcional para ordenação
        @Query('per_page') perPage: number,         // Quantidade de resultados por página
        @Query('page') page: number                // Número da página para a paginação
    ) {
        return await this.seasonService.searchSeasonsByName(searchQuery, include, filters, locale, order, perPage, page);
    }
}


/*
Include options
sport league teams stages currentStage fixtures groups statistics topscorers
*/