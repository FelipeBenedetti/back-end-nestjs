import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonks.service';

@Injectable()
export class StatisticsService {
    constructor(private readonly soccerClientService: SoccerClientService) { }

    // Método para buscar estatísticas de temporada por participante
    async getSeasonStatisticsByParticipant(
        participant: 'players' | 'teams' | 'coaches' | 'referees', // Tipo de participante
        id: string,  // ID do participante
        include: string = '',  // Parâmetro opcional para incluir dados adicionais
        filters: string = '',  // Parâmetro opcional para filtros
        order: string = 'desc',  // Parâmetro opcional para ordenação
        perPage: number = 25,  // Quantidade de resultados por página
        page: number = 1  // Número da página para a paginação
    ): Promise<any> {
        const endpoint = `statistics/seasons/${participant}/${id}`; // Endpoint para buscar estatísticas

        const queryParams = { order, per_page: perPage, page };  // Parâmetros principais

        // Adiciona parâmetros adicionais à consulta
        if (include) queryParams['include'] = include;
        if (filters) queryParams['filters'] = filters;

        // Realiza a requisição à API utilizando o cliente configurado
        return await this.soccerClientService.get(endpoint, queryParams);
    }
}

    // Método para buscar as estatísticas de estágio
@Injectable()
export class StageStatisticsService {
    constructor(private readonly soccerClientService: SoccerClientService) { }

    // Método para buscar as estatísticas de estágio
    async getStageStatisticsById(
        stageId: string,  // ID do estágio
        include: string = '',  // Parâmetro opcional para incluir dados adicionais
        filters: string = '',  // Parâmetro opcional para filtros
        order: string = 'desc',  // Parâmetro opcional para ordenação
        perPage: number = 25,  // Quantidade de resultados por página
        page: number = 1  // Número da página para a paginação
    ): Promise<any> {
        const endpoint = `statistics/stages/${stageId}`;  // Endpoint para buscar as estatísticas do estágio

        const queryParams = { order, per_page: perPage, page };  // Parâmetros principais

        // Adiciona parâmetros adicionais à consulta
        if (include) queryParams['include'] = include;
        if (filters) queryParams['filters'] = filters;

        // Realiza a requisição à API utilizando o cliente configurado
        return await this.soccerClientService.get(endpoint, queryParams);
    }
}

// Método para buscar as estatísticas de rodada
@Injectable()
export class RoundStatisticsService {
    constructor(private readonly soccerClientService: SoccerClientService) { }

    // Método para buscar as estatísticas de rodada
    async getRoundStatisticsById(
        roundId: string,  // ID da rodada
        include: string = '',  // Parâmetro opcional para incluir dados adicionais
        filters: string = '',  // Parâmetro opcional para filtros
        order: string = 'desc',  // Parâmetro opcional para ordenação
        perPage: number = 25,  // Quantidade de resultados por página
        page: number = 1  // Número da página para a paginação
    ): Promise<any> {
        const endpoint = `statistics/rounds/${roundId}`;  // Endpoint para buscar as estatísticas da rodada

        const queryParams = { order, per_page: perPage, page };  // Parâmetros principais

        // Adiciona parâmetros adicionais à consulta
        if (include) queryParams['include'] = include;
        if (filters) queryParams['filters'] = filters;

        // Realiza a requisição à API utilizando o cliente configurado
        return await this.soccerClientService.get(endpoint, queryParams);
    }
}