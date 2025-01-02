import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonks.service';

@Injectable()
export class SeasonService {
    constructor(private readonly soccerClientService: SoccerClientService) { }

    // Método para buscar todas as temporadas
    async getAllSeasons(
        include: string = '',     // Parâmetro opcional para incluir dados adicionais
        filters: string = '',     // Parâmetro opcional para filtros relacionados às temporadas
        locale: string = '',      // Parâmetro opcional para tradução dos nomes
        order: string = 'asc',    // Parâmetro opcional para ordenação (ascendente ou descendente)
        perPage: number = 25,     // Quantidade de resultados por página
        page: number = 1          // Número da página para a paginação
    ): Promise<any> {
        const endpoint = 'seasons';  // Endpoint para buscar todas as temporadas

        const queryParams = { order, per_page: perPage, page };  // Parâmetros principais

        // Adiciona parâmetros adicionais à consulta
        if (include) queryParams['include'] = include;
        if (filters) queryParams['filters'] = filters;
        if (locale) queryParams['locale'] = locale;

        // Realiza a requisição à API utilizando o cliente configurado
        return await this.soccerClientService.get(endpoint, queryParams);
    }

    // Método para buscar uma temporada específica pelo ID
    async getSeasonById(
        id: string,                // ID da temporada a ser buscada
        include: string = '',       // Parâmetro opcional para incluir dados adicionais
        filters: string = '',       // Parâmetro opcional para filtros relacionados à temporada
        locale: string = '',        // Parâmetro opcional para tradução dos nomes
    ): Promise<any> {
        const endpoint = `seasons/${id}`;  // Endpoint para buscar temporada específica pelo ID

        const queryParams = {};  // Parâmetros principais

        // Adiciona parâmetros adicionais à consulta
        if (include) queryParams['include'] = include;
        if (filters) queryParams['filters'] = filters;
        if (locale) queryParams['locale'] = locale;

        // Realiza a requisição à API utilizando o cliente configurado
        return await this.soccerClientService.get(endpoint, queryParams);
    }

    // Método para buscar temporadas por ID de equipe
    async getSeasonsByTeamId(
        teamId: string,            // ID da equipe para buscar as temporadas
        include: string = '',       // Parâmetro opcional para incluir dados adicionais
        filters: string = '',       // Parâmetro opcional para filtros relacionados à temporada
        locale: string = '',        // Parâmetro opcional para tradução dos nomes
    ): Promise<any> {
        const endpoint = `seasons/teams/${teamId}`;  // Endpoint para buscar temporadas por ID de equipe

        const queryParams = {};  // Parâmetros principais

        // Adiciona parâmetros adicionais à consulta
        if (include) queryParams['include'] = include;
        if (filters) queryParams['filters'] = filters;
        if (locale) queryParams['locale'] = locale;

        // Realiza a requisição à API utilizando o cliente configurado
        return await this.soccerClientService.get(endpoint, queryParams);
    }

    // Método para buscar temporadas por nome (pesquisa)
    async searchSeasonsByName(
        searchQuery: string,           // O nome ou parte do nome da temporada
        include: string = '',          // Parâmetro opcional para incluir dados adicionais
        filters: string = '',          // Parâmetro opcional para filtros relacionados à temporada
        locale: string = '',           // Parâmetro opcional para tradução dos nomes
        order: string = 'asc',         // Parâmetro opcional para ordenação (ascendente ou descendente)
        perPage: number = 25,          // Quantidade de resultados por página
        page: number = 1               // Número da página para a paginação
    ): Promise<any> {
        const endpoint = `seasons/search/${searchQuery}`;  // Endpoint para buscar temporadas por nome

        const queryParams = { order, per_page: perPage, page };  // Parâmetros principais

        // Adiciona parâmetros adicionais à consulta
        if (include) queryParams['include'] = include;
        if (filters) queryParams['filters'] = filters;
        if (locale) queryParams['locale'] = locale;

        // Realiza a requisição à API utilizando o cliente configurado
        return await this.soccerClientService.get(endpoint, queryParams);
    }
}
