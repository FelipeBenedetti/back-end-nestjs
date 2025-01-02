import { Controller, Get, Param, Query } from '@nestjs/common';
import { LeagueService } from '../Services/league.service';


@Controller('leagues')  // Define o caminho base para os endpoints relacionados às ligas
export class LeagueController {
    constructor(private readonly leagueService: LeagueService) { }

    // Endpoint para buscar todas as ligas
    @Get()  // Rota para retornar todas as ligas
    async getAllLeagues(
        @Query('include') include: string,     // Parâmetro opcional para enriquecer a resposta com dados adicionais
        @Query('filters') filters: string,     // Parâmetro opcional para filtros relacionados às ligas
        @Query('locale') locale: string,       // Parâmetro opcional para tradução dos campos de nome
        @Query('order') order: string,         // Parâmetro opcional para ordenar a resposta
        @Query('per_page') perPage: number,    // Parâmetro opcional para definir quantos itens por página
        @Query('page') page: number           // Parâmetro opcional para definir a página
    ) {
        return await this.leagueService.getAllLeagues(include, filters, locale, order, perPage, page);
    }

    // Endpoint para buscar uma liga por ID
    @Get(':id')  // Rota para retornar uma liga específica por ID
    async getLeagueById(
        @Param('id') id: string,
        @Query('include') include: string,     // Parâmetro opcional para enriquecer a resposta com dados adicionais
        @Query('filters') filters: string,     // Parâmetro opcional para filtros relacionados às ligas
        @Query('locale') locale: string,       // Parâmetro opcional para tradução dos campos de nome
        @Query('order') order: string,         // Parâmetro opcional para ordenar a resposta
        @Query('per_page') perPage: number,    // Parâmetro opcional para definir quantos itens por página
        @Query('page') page: number           // Parâmetro opcional para definir a página

                        // ID da liga a ser buscada
    ) {
        return await this.leagueService.getLeagueById(id, include, filters, locale, order, perPage, page);
    }

    // Endpoint para buscar ligas com jogos ao vivo
    @Get('live')  // Rota para retornar ligas com jogos ao vivo
    async getLeaguesByLive(
        @Query('include') include: string,     // Parâmetro opcional para enriquecer a resposta com dados adicionais
        @Query('filters') filters: string,     // Parâmetro opcional para filtros relacionados às ligas
        @Query('locale') locale: string,       // Parâmetro opcional para tradução dos campos de nome
    ) {
        return await this.leagueService.getLeaguesByLive(include, filters, locale);
    }

    // Endpoint para buscar ligas por data de jogo
    @Get('date/:date')  // Rota para retornar ligas com jogos em uma data específica
    async getLeaguesByFixtureDate(
        @Param('date') date: string,            // Data da partida a ser buscada
        @Query('include') include: string,     // Parâmetro opcional para enriquecer a resposta com dados adicionais
        @Query('filters') filters: string,     // Parâmetro opcional para filtros relacionados às ligas
        @Query('locale') locale: string,       // Parâmetro opcional para tradução dos campos de nome
        @Query('order') order: string,         // Parâmetro opcional para ordenar os resultados
        @Query('per_page') perPage: number,    // Parâmetro opcional para definir a quantidade de resultados por página
        @Query('page') page: number           // Parâmetro opcional para a paginação dos resultados
    ) {
        return await this.leagueService.getLeaguesByFixtureDate(date, include, filters, locale, order, perPage, page);
    }

    // Endpoint para buscar ligas por nome
    @Get('search/:searchQuery')  // Rota para buscar ligas por nome
    async searchLeaguesByName(
        @Param('searchQuery') searchQuery: string,  // Parâmetro obrigatório para busca por nome
        @Query('include') include: string,          // Parâmetro opcional para enriquecer a resposta com dados adicionais
        @Query('filters') filters: string,          // Parâmetro opcional para filtros relacionados às ligas
        @Query('locale') locale: string,            // Parâmetro opcional para tradução
        @Query('order') order: string,              // Parâmetro opcional para ordenar os resultados
        @Query('per_page') perPage: number,         // Parâmetro opcional para a quantidade de resultados por página
        @Query('page') page: number                // Parâmetro opcional para paginação
    ) {
        return await this.leagueService.searchLeaguesByName(searchQuery, include, filters, locale, order, perPage, page);
    }

    // Endpoint para buscar ligas de um time específico
    @Get('teams/:teamId')  // Rota para buscar ligas de um time
    async getLeaguesByTeamId(
        @Param('teamId') teamId: string,  // ID do time para buscar suas ligas
        @Query('include') include: string,   // Parâmetro opcional para enriquecer a resposta
        @Query('filters') filters: string,   // Parâmetro opcional para filtros
        @Query('locale') locale: string,     // Parâmetro opcional para tradução
        @Query('order') order: string,       // Parâmetro opcional para ordenação
        @Query('per_page') perPage: number,  // Quantidade de resultados por página
        @Query('page') page: number         // Número da página
    ) {
        return await this.leagueService.getLeaguesByTeamId(teamId, include, filters, locale, order, perPage, page);
    }

    // Novo endpoint para buscar ligas atuais de um time específico
    @Get('teams/:teamId/current')  // Rota para buscar ligas atuais de um time
    async getCurrentLeaguesByTeamId(
        @Param('teamId') teamId: string,        // ID do time para buscar suas ligas atuais
        @Query('include') include: string,      // Parâmetro opcional para enriquecer a resposta
        @Query('filters') filters: string,      // Parâmetro opcional para filtros
        @Query('locale') locale: string,        // Parâmetro opcional para tradução
        @Query('order') order: string,          // Parâmetro opcional para ordenação
        @Query('per_page') perPage: number,     // Quantidade de resultados por página
        @Query('page') page: number            // Número da página
    ) {
        return await this.leagueService.getCurrentLeaguesByTeamId(teamId, include, filters, locale, order, perPage, page);
    }

}

/*
Include options
sport  country  stages latest upcoming inplay today currentSeason seasons*/