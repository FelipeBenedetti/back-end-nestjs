import { Controller, Get, Param, Query } from '@nestjs/common';
import { FixtureService } from '../Services/fixture.service';
import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';

@Controller('fixtures')
export class FixtureController {
    constructor(private readonly fixtureService: FixtureService) { }

    // Rota para buscar todos os fixtures com filtros e includes
    @Get()
    async getFixtures(
        @Query() filters: Record<string, any>,
        @Query('includes') includes: string,
        @Query('page') page?: number,
        @Query('per_page') per_page?: number,
    ) {
        const includesArray = includes ? includes.split(',') : [];
        return await this.fixtureService.getFixtures(filters, includesArray, {
            page,
            per_page,
        });
    }

    // Rota para fixtures de hoje
    @Get('today')
    async getTodayFixtures(@Query('includes') includes: string) {
        const includesArray = includes ? includes.split(',') : [];
        return await this.fixtureService.getTodayFixtures(includesArray);
    }

    // Rota para fixtures paginados
    @Get('paginated')
    async getPaginatedFixtures(
        @Query('page') page: number,
        @Query('per_page') per_page: number,
        @Query('includes') includes: string,
    ) {
        const includesArray = includes ? includes.split(',') : [];
        return await this.fixtureService.getPaginatedFixtures(page, per_page, includesArray);
    }

    // Rota para buscar um fixture específico pelo ID
    @Get(':id')
    async getFixtureById(
        @Param('id') id: number,
        @Query('includes') includes: string,
    ) {
        const includesArray = includes ? includes.split(',') : [];
        return await this.fixtureService.getFixtureById(id, includesArray);
    }

    // Rota para buscar múltiplos fixtures por IDs
    @Get('multi')
    async getFixturesByMultipleIds(
        @Query('ids') ids: string, // IDs separados por vírgulas
        @Query('includes') includes: string,
    ) {
        if (!ids) {
            throw new Error('IDs parameter is required.');
        }

        const idsArray = ids.split(',').map((id) => parseInt(id.trim(), 10));
        const includesArray = includes ? includes.split(',') : [];
        return await this.fixtureService.getFixturesByMultipleIds(idsArray, includesArray);
    }


    //Busca por data
    @Get('by-date/:date') // Atualização da rota
    async getFixturesByDate(
        @Param('date') date: string, // Captura o parâmetro da URL
        @Query('includes') includes: string = '', // Includes opcionais (string separada por vírgula)
        @Query('filters') filters: string = '', // Filtros dinâmicos opcionais (string separada por vírgula)
        @Query('per_page') perPage: number = 25, // Número de resultados por página
        @Query('page') page: number = 1, // Página de resultados
        @Query('order') order: string = 'asc' // Ordenação dos resultados (asc ou desc)
    ): Promise<any> {
        console.log('Parametros Recebidos:', { date, includes, filters, perPage, page, order });

        if (!date) {
            throw new HttpException('Date is required.', HttpStatus.BAD_REQUEST);
        }

        // Converte os parâmetros `includes` e `filters` para arrays
        const includesArray = includes ? includes.split(',') : [];
        const filtersArray = filters ? filters.split(',') : [];

        console.log('Includes Array:', includesArray);
        console.log('Filters Array:', filtersArray);

        // Chama o serviço para buscar os dados
        return await this.fixtureService.getFixturesByDate(
            date,
            includesArray,
            filtersArray,
            perPage,
            page,
            order
        );
    }

    // Buscar em um intervalo de datas
    @Get('by-date-range/:start_date/:end_date') // Rota com parâmetros na URL
    async getFixturesByDateRange(
        @Param('start_date') start_Date: string,  // Captura o start-date
        @Param('end_date') end_Date: string,      // Captura o end-date
        @Query('filters') filters: string = '',   // Filtros dinâmicos opcionais
        @Query('includes') includes: string = '', // Includes opcionais (string separada por vírgula)
        @Query('per_page') perPage: number = 25,  // Parâmetro de paginação
        @Query('page') page: number = 1          // Página de resultados
    ) {
        if (!start_Date || !end_Date) {
            throw new HttpException('Data de inicio e fim requiridas.', HttpStatus.BAD_REQUEST);
        }

        const includesArray = includes ? includes.split(',') : [];
        const filtersArray = filters ? filters.split(',') : [];

        return await this.fixtureService.getFixturesByDateRange(
            start_Date,
            end_Date,
            includesArray,
            filtersArray,
            perPage,
            page
        );
    }

    // Endpoint para buscar fixtures por intervalo de datas para um time específico
    // Endpoint para buscar fixtures por intervalo de datas para um time específico
    @Get('deumtime/:start_date/:end_date/:team_id')
    async getFixturesByDateRangeForTeam(
        @Param('team_id') team_Id: number,          // ID do time
        @Param('start_date') start_Date: string,   // Data de início do intervalo
        @Param('end_date') end_Date: string,       // Data de término do intervalo
        @Query('includes') includes: string = '', // Parâmetro opcional para incluir dados relacionados
        @Query('filters') filters: string = '',   // Parâmetro opcional para filtros dinâmicos
        @Query('per_page') perPage: number = 25,  // Parâmetro opcional para o número de resultados por página
        @Query('page') page: number = 1           // Parâmetro opcional para a página
    ) {
        // Valida se as datas de início, fim e ID do time são fornecidos
        if (!start_Date || !end_Date) {
            throw new HttpException('Both start_date and end_date are required.', HttpStatus.BAD_REQUEST);
        }
        if (!team_Id) {
            throw new HttpException('Team ID is required.', HttpStatus.BAD_REQUEST);
        }

        // Converte os parâmetros 'includes' e 'filters' para arrays
        const includesArray = includes ? includes.split(',') : [];
        const filtersArray = filters ? filters.split(',') : [];

        // Chama o serviço para buscar os fixtures no intervalo de datas para o time
        return await this.fixtureService.getFixturesByDateRangeForTeam(
            team_Id,
            start_Date,
            end_Date,
            includesArray,
            filtersArray,
            perPage,
            page
        );
    }


    // Endpoint para buscar fixtures head-to-head entre dois times
    @Get('head-to-head/:team_id_1/:team_id_2')  // Rota para buscar fixtures head-to-head entre dois times
    async getHeadToHeadFixtures(
        @Param('team_id_1') teamId1: number,  // ID do primeiro time
        @Param('team_id_2') teamId2: number,  // ID do segundo time
        @Query('includes') includes: string = '',  // Parâmetro opcional para incluir dados relacionados
        @Query('filters') filters: string = '',   // Parâmetro opcional para filtros dinâmicos
        @Query('per_page') perPage: number = 25,  // Parâmetro opcional para o número de resultados por página
        @Query('page') page: number = 1          // Parâmetro opcional para a página
    ) {
        // Converte os parâmetros 'includes' e 'filters' para arrays
        const includesArray = includes ? includes.split(',') : [];
        const filtersArray = filters ? filters.split(',') : [];

        // Chama o serviço para buscar os fixtures head-to-head entre os dois times
        return await this.fixtureService.getHeadToHeadFixtures(
            teamId1,
            teamId2,
            includesArray,  // Passa o array de includes
            filtersArray,   // Passa o array de filtros
            perPage,        // Passa o parâmetro perPage
            page            // Passa o parâmetro page
        );
    }

    // Endpoint para buscar fixtures por nome
    @Get('search/:searchQuery')  // Rota para buscar fixtures pela pesquisa de nome
    async searchFixturesByName(
        @Query('includes') includes: string = '',  // Parâmetro opcional para incluir dados relacionados
        @Query('filters') filters: string = '',   // Parâmetro opcional para filtros dinâmicos
        @Query('per_page') perPage: number = 25,  // Parâmetro opcional para o número de resultados por página
        @Query('page') page: number = 1,          // Parâmetro opcional para a página
        @Param('searchQuery') searchQuery: string  // Parâmetro obrigatório para a pesquisa de nome
    ) {
        // Converte os parâmetros 'includes' e 'filters' para arrays
        const includesArray = includes ? includes.split(',') : [];
        const filtersArray = filters ? filters.split(',') : [];

        // Chama o serviço para buscar os fixtures pela pesquisa de nome
        return await this.fixtureService.searchFixturesByName(
            searchQuery,
            includesArray,  // Passa o array de includes
            filtersArray,   // Passa o array de filtros
            perPage,        // Passa o parâmetro perPage
            page            // Passa o parâmetro page
        );
    }
}

/*
Include options
sport round stage group aggregate league seasoncoaches 
tvStations venue state  weatherReport lineups
events timeline comments trends statistics periods
participants  oddspremiumOdds inplayOdds prematchNews postmatchNews
metadata sidelinedpredictions referees formations
ballCoordinates scores xGFixture pressure*/