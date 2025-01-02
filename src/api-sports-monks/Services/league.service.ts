import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonks.service';

@Injectable()
export class LeagueService {
    constructor(private readonly soccerClientService: SoccerClientService) { }

    // Método para buscar todas as ligas
    async getAllLeagues(
        include: string = '',   // Parâmetro opcional para incluir dados adicionais
        filters: string = '',   // Parâmetro opcional para filtros relacionados às ligas
        locale: string = '',    // Parâmetro opcional para tradução
        order: string = 'asc',  // Parâmetro opcional para ordem de resposta
        perPage: number = 25,   // Parâmetro opcional para definir quantidade por página (máximo 50)
        page: number = 1        // Parâmetro opcional para definir qual página retornar
    ): Promise<any> {

        const queryParams = { order, per_page: perPage, page };  // Parâmetros principais, incluindo o token da API

        // Adiciona parâmetros opcionais à consulta
        if (include) queryParams['include'] = include;
        if (filters) queryParams['filters'] = filters;
        if (locale) queryParams['locale'] = locale;

        // Realiza a requisição à API utilizando o cliente configurado
        return await this.soccerClientService.get(`leagues`, { params: queryParams });
    }

    // Método para buscar liga por ID
    async getLeagueById(
        id: string,          // ID da liga a ser buscada
        include: string = '',   // Parâmetro opcional para incluir dados adicionais
        filters: string = '',   // Parâmetro opcional para filtros relacionados às ligas
        locale: string = '',    // Parâmetro opcional para tradução
        order: string = 'asc',  // Parâmetro opcional para ordem de resposta
        perPage: number = 25,   // Parâmetro opcional para definir quantidade por página (máximo 50)
        page: number = 1,        // Parâmetro opcional para definir qual página retornar
    ): Promise<any> {

        const queryParams = { order, per_page: perPage, page };  // Parâmetros principais, incluindo o token da API

        // Adiciona parâmetros opcionais à consulta
        if (include) queryParams['include'] = include;
        if (filters) queryParams['filters'] = filters;
        if (locale) queryParams['locale'] = locale;

        // Realiza a requisição à API utilizando o cliente configurado
        return await this.soccerClientService.get(`leagues`, { params: queryParams });
    }

    // Método para buscar ligas com jogos ao vivo
    async getLeaguesByLive(
        include: string = '',   // Parâmetro opcional para enriquecer a resposta com dados adicionais
        filters: string = '',   // Parâmetro opcional para filtros relacionados às ligas
        locale: string = '',    // Parâmetro opcional para tradução
    ): Promise<any> {
        const endpoint = 'leagues/live';  // Endpoint para buscar ligas com jogos ao vivo

        const queryParams = {};  // Parâmetros principais, incluindo o token da API

        // Adiciona parâmetros opcionais à consulta
        if (include) queryParams['include'] = include;
        if (filters) queryParams['filters'] = filters;
        if (locale) queryParams['locale'] = locale;

        // Realiza a requisição à API utilizando o cliente configurado
        return await this.soccerClientService.get(endpoint, queryParams);
    }

    // Método para buscar ligas por data de jogo (fixture date)
    async getLeaguesByFixtureDate(
        date: string,          // Data da partida a ser buscada
        include: string = '',   // Parâmetro opcional para enriquecer a resposta com dados adicionais
        filters: string = '',   // Parâmetro opcional para filtros relacionados às ligas
        locale: string = '',    // Parâmetro opcional para tradução
        order: string = 'asc',  // Parâmetro opcional para ordenar os resultados
        perPage: number = 25,   // Parâmetro opcional para definir a quantidade de resultados por página
        page: number = 1        // Parâmetro opcional para a paginação dos resultados
    ): Promise<any> {
        const endpoint = `leagues/date/${date}`;  // Endpoint para buscar ligas com jogos em uma data específica

        const queryParams = { order, per_page: perPage, page };  // Parâmetros principais

        // Adiciona parâmetros opcionais à consulta
        if (include) queryParams['include'] = include;
        if (filters) queryParams['filters'] = filters;
        if (locale) queryParams['locale'] = locale;

        // Realiza a requisição à API utilizando o cliente configurado
        return await this.soccerClientService.get(endpoint, queryParams);
    }

    // Método para buscar ligas por nome
    async searchLeaguesByName(
        searchQuery: string,    // Parâmetro obrigatório para busca por nome
        include: string = '',    // Parâmetro opcional para enriquecer a resposta com dados adicionais
        filters: string = '',    // Parâmetro opcional para filtros relacionados às ligas
        locale: string = '',     // Parâmetro opcional para tradução
        order: string = 'asc',   // Parâmetro opcional para ordenar os resultados
        perPage: number = 25,    // Parâmetro opcional para definir a quantidade de resultados por página
        page: number = 1         // Parâmetro opcional para a paginação dos resultados
    ): Promise<any> {
        const endpoint = `leagues/search/${searchQuery}`;  // Endpoint para buscar ligas pelo nome

        const queryParams = { order, per_page: perPage, page };  // Parâmetros principais

        // Adiciona parâmetros opcionais à consulta
        if (include) queryParams['include'] = include;
        if (filters) queryParams['filters'] = filters;
        if (locale) queryParams['locale'] = locale;

        // Realiza a requisição à API utilizando o cliente configurado
        return await this.soccerClientService.get(endpoint, queryParams);
    }

    // Método para buscar todas as ligas de um time específico
    async getLeaguesByTeamId(
        teamId: string,        // ID do time para buscar suas ligas
        include: string = '',   // Parâmetro opcional para enriquecer a resposta com dados adicionais
        filters: string = '',   // Parâmetro opcional para filtros relacionados às ligas
        locale: string = '',    // Parâmetro opcional para tradução
        order: string = 'asc',  // Parâmetro opcional para ordenar os resultados
        perPage: number = 25,   // Parâmetro opcional para definir a quantidade de resultados por página
        page: number = 1        // Parâmetro opcional para a paginação dos resultados
    ): Promise<any> {
        const endpoint = `leagues/teams/${teamId}`;  // Endpoint para buscar ligas de um time específico

        const queryParams = { order, per_page: perPage, page };  // Parâmetros principais

        // Adiciona parâmetros opcionais à consulta
        if (include) queryParams['include'] = include;
        if (filters) queryParams['filters'] = filters;
        if (locale) queryParams['locale'] = locale;

        // Realiza a requisição à API utilizando o cliente configurado
        return await this.soccerClientService.get(endpoint, queryParams);
    }

    // Método para buscar as ligas atuais de um time específico
    async getCurrentLeaguesByTeamId(
        teamId: string,        // ID do time para buscar suas ligas atuais
        include: string = '',   // Parâmetro opcional para enriquecer a resposta com dados adicionais
        filters: string = '',   // Parâmetro opcional para filtros relacionados às ligas
        locale: string = '',    // Parâmetro opcional para tradução
        order: string = 'asc',  // Parâmetro opcional para ordenar os resultados
        perPage: number = 25,   // Parâmetro opcional para definir a quantidade de resultados por página
        page: number = 1        // Parâmetro opcional para a paginação dos resultados
    ): Promise<any> {
        const endpoint = `leagues/teams/${teamId}/current`;  // Endpoint para buscar ligas atuais de um time

        const queryParams = { order, per_page: perPage, page };  // Parâmetros principais

        // Adiciona parâmetros opcionais à consulta
        if (include) queryParams['include'] = include;
        if (filters) queryParams['filters'] = filters;
        if (locale) queryParams['locale'] = locale;

        // Realiza a requisição à API utilizando o cliente configurado
        return await this.soccerClientService.get(endpoint, queryParams);
    }
}
