import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonks.service';

@Injectable()
export class FixtureService {
    constructor(private readonly soccerClientService: SoccerClientService) { }

    // Retorna todos oas partidas com suporte para filtros e includes
    async getFixtures(
        filters: Record<string, any> = {},
        includes: string[] = [],
        pagination: { page?: number; per_page?: number } = {},
    ): Promise<any> {
        const endpoint = 'fixtures';
        const params = { ...filters, ...pagination };
        return await this.soccerClientService.get(endpoint, params, includes);
    }

    // Retorna apenas partidas de hoje
    async getTodayFixtures(includes: string[] = []): Promise<any> {
        return await this.getFixtures({ filters: 'todayDate' }, includes);
    }

    // Retorna partidas paginados
    async getPaginatedFixtures(
        page: number,
        per_page: number,
        includes: string[] = [],
    ): Promise<any> {
        return await this.getFixtures({}, includes, { page, per_page });
    }

    // Busca uma partda específica pelo ID
    async getFixtureById(
        id: number,
        includes: string[] = [],
    ): Promise<any> {
        const endpoint = `fixtures/${id}`;
        return await this.soccerClientService.get(endpoint, {}, includes);
    }

    // Busca múltiplos fixtures por IDs
    async getFixturesByMultipleIds(
        ids: number[],
        includes: string[] = [],  // Parâmetro opcional com valor padrão
    ): Promise<any> {  // Retorno mais específico que 'any', se possível
        if (!ids || ids.length === 0) {
            throw new Error('IDs array cannot be empty.');
        }

        const endpoint = `fixtures/multi/${ids.join(',')}`;
        // O retorno da chamada para o serviço pode ser tipado corretamente conforme esperado
        return await this.soccerClientService.get(endpoint, {}, includes);
    }


    //Busca Por data
    async getFixturesByDate(
        date: string,
        includes: string[] = [],
        filters: string[] = [],
        perPage: number = 25,
        page: number = 1,
        order: string = 'asc'
    ): Promise<any> {
        console.log('Parametros recebidos no servico:', { date, includes, filters, perPage, page, order });

        if (!date) {
            throw new Error('Data requerida.');
        }

        // Parâmetros para a requisição
        const params = {
            per_page: perPage,
            page: page,
            order: order,
            filters: filters.length > 0 ? filters.join(',') : undefined,
        };

        console.log("Parametros Recebidos no FixtureService: ", params)

        // Faz a chamada ao SoccerClientService
        return await this.soccerClientService.get(`fixtures/date/${date}`, params, includes);
    }

    // Busca no intervalo de datas
    async getFixturesByDateRange(
        start_Date: string,
        end_Date: string,
        includes: string[] = [],
        filters: string[] = [],
        perPage: number = 25,
        page: number = 1
    ): Promise<any> {
        console.log("Parametros recebidos no servico: ", start_Date, end_Date, includes, filters, perPage, page)

        if (!start_Date || !end_Date) {
            throw new Error('Data de inicio e fim são requeridas.');
        }

        const params: any = {
            per_page: perPage,
            page: page,
        };

        if (filters.length > 0) {
            params.filters = filters.join(',');
        }

        if (includes.length > 0) {
            params.include = includes.join(',');
        }

        return await this.soccerClientService.get(`fixtures/between/${start_Date}/${end_Date}`, {params: params });
    }

    // Busca fixtures para um time específico em um intervalo de datas
    // Busca fixtures para um time específico em um intervalo de datas
    async getFixturesByDateRangeForTeam(
        team_Id: number,
        start_Date: string,
        end_Date: string,
        includes: string[] = [],
        filters: string[] = [],
        perPage: number = 25,
        page: number = 1
    ): Promise<any> {
        if (!start_Date || !end_Date) {
            throw new Error('Both start_date and end_date are required.');
        }
        if (!team_Id) {
            throw new Error('Team ID is required.');
        }
        
        
        const queryParams: any = {
            per_page: perPage,
            page: page,
        };
        
        // Adiciona parâmetros de filtro dinâmico
        if (filters.length > 0) {
            queryParams.filters = filters.join(',');
        }
        
        // Adiciona parâmetros de inclusão
        if (includes.length > 0) {
            queryParams.include = includes.join(',');
            console.log("Query Param: ", queryParams)
        }
        
        // Chama a API externa para buscar os fixtures
        return await this.soccerClientService.get(`fixtures/between/${start_Date}/${end_Date}/${team_Id}`, {params: queryParams});
    }

    // Busca fixtures head-to-head entre dois times
    async getHeadToHeadFixtures(
        teamId1: number,
        teamId2: number,
        includes: string[] = [],
        filters: string[] = [],
        perPage: number = 25,
        page: number = 1
    ): Promise<any> {
        const endpoint = `fixtures/head-to-head/${teamId1}/${teamId2}`;

        const queryParams: any = {
            per_page: perPage,
            page: page,
        };

        // Adiciona parâmetros de filtro dinâmico
        if (filters.length > 0) {
            queryParams.filters = filters.join(',');
        }

        // Adiciona parâmetros de inclusão
        if (includes.length > 0) {
            queryParams.include = includes.join(',');
        }

        // Chama a API externa para buscar os fixtures
        return await this.soccerClientService.get(endpoint, queryParams);
    }

    // Busca fixtures por nome de pesquisa
    async searchFixturesByName(
        searchQuery: string,
        includes: string[] = [],
        filters: string[] = [],
        perPage: number = 25,
        page: number = 1
    ): Promise<any> {
        const endpoint = `fixtures/search/${searchQuery}`;

        const queryParams: any = {
            per_page: perPage,
            page: page,
        };

        // Adiciona parâmetros de filtro dinâmico
        if (filters.length > 0) {
            queryParams.filters = filters.join(',');
        }

        // Adiciona parâmetros de inclusão
        if (includes.length > 0) {
            queryParams.include = includes.join(',');
        }

        // Chama a API externa para buscar os fixtures
        return await this.soccerClientService.get(endpoint, queryParams);
    }
}
