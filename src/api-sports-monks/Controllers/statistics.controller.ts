import { Controller, Get, Param, Query } from '@nestjs/common';
import { StatisticsService } from '../Services/statistics.service';
import { StageStatisticsService } from '../Services/statistics.service';
import { RoundStatisticsService } from '../Services/statistics.service';

@Controller('statistics')  // Define o caminho base para os endpoints relacionados às estatísticas
export class StatisticsController {
    constructor(
        private readonly statisticsService: StatisticsService,  // Serviço principal de estatísticas
        private readonly stageStatisticsService: StageStatisticsService,  // Serviço de estatísticas de estágio
        private readonly roundStatisticsService: RoundStatisticsService,  // Serviço de estatísticas de rodada
    ) { }


    // Endpoint para buscar as estatísticas de temporada por participante
    @Get('seasons/:participant/:id')  // Rota para buscar estatísticas por participante e ID
    async getSeasonStatisticsByParticipant(
        @Param('participant') participant: 'players' | 'teams' | 'coaches' | 'referees',  // Tipo de participante (obrigatório)
        @Param('id') id: string,  // ID do participante (obrigatório)
        @Query('include') include: string,  // Parâmetro opcional para enriquecer a resposta com dados adicionais
        @Query('filters') filters: string,  // Parâmetro opcional para filtros
        @Query('order') order: string,  // Parâmetro opcional para ordenação (asc ou desc)
        @Query('per_page') perPage: number,  // Quantidade de resultados por página
        @Query('page') page: number  // Número da página para a paginação
    ) {
        return await this.statisticsService.getSeasonStatisticsByParticipant(
            participant, id, include, filters, order, perPage, page
        );
    }

    // Endpoint para buscar estatísticas de estágio por ID
    @Get('stages/:stageId')
    async getStageStatisticsById(
        @Param('stageId') stageId: string,
        @Query('include') include: string,
        @Query('filters') filters: string,
        @Query('order') order: string,
        @Query('per_page') perPage: number,
        @Query('page') page: number
    ) {
        return await this.stageStatisticsService.getStageStatisticsById(
            stageId, include, filters, order, perPage, page
        );
    }

    // Endpoint para buscar as estatísticas de uma rodada
    @Get('rounds/:roundId')  // Rota para buscar estatísticas de rodada por ID
    async getRoundStatisticsById(
        @Param('roundId') roundId: string,  // ID da rodada (obrigatório)
        @Query('include') include: string,  // Parâmetro opcional para enriquecer a resposta com dados adicionais
        @Query('filters') filters: string,  // Parâmetro opcional para filtros
        @Query('order') order: string,  // Parâmetro opcional para ordenação (asc ou desc)
        @Query('per_page') perPage: number,  // Quantidade de resultados por página
        @Query('page') page: number  // Número da página para a paginação
    ) {
        return await this.roundStatisticsService.getRoundStatisticsById(
            roundId, include, filters, order, perPage, page
        );
    }
}


/*
Include options
playerseasoncoach teamrefereeposition
*/