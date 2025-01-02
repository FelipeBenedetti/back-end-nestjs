import { Controller, Get, Query, Param } from '@nestjs/common';
import { TeamService } from '../Services/team.service';

@Controller('teams')
export class TeamController {
    constructor(private readonly teamService: TeamService) { }


    //Busca Todos os times
    @Get()
    async getAllTeams(
        @Query('order') order?: string,
        @Query('per_page') perPage?: number,
        @Query('page') page?: number,
        @Query('includes') includes?: string,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        return this.teamService.getAllTeams({ order, per_page: perPage, page }, includeArray);
    }


    //Busca Por Id do time
    @Get(':id')
    async getTeamById(
        @Param('id') id: number,
        @Query('includes') includes?: string,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        return this.teamService.getTeamById(id, includeArray);
    }


    // Busca por pais
    @Get('countries/:countryId')
    async getTeamsByCountryId(
        @Param('countryId') countryId: number,
        @Query('order') order?: string,
        @Query('per_page') perPage?: number,
        @Query('page') page?: number,
        @Query('includes') includes?: string,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        return this.teamService.getTeamsByCountryId(
            countryId,
            { order, per_page: perPage, page },
            includeArray,
        );
    }


    // Busca por id da temporada 
    @Get('seasons/:seasonId')
    async getTeamsBySeasonId(
        @Param('seasonId') seasonId: number,
        @Query('order') order?: string,
        @Query('per_page') perPage?: number,
        @Query('page') page?: number,
        @Query('includes') includes?: string,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        return this.teamService.getTeamsBySeasonId(
            seasonId,
            { order, per_page: perPage, page },
            includeArray,
        );
    }

    //Busca por Nome
    @Get('search/:query')
    async searchTeamsByName(
        @Param('query') query: string,
        @Query('order') order?: string,
        @Query('per_page') perPage?: number,
        @Query('page') page?: number,
        @Query('includes') includes?: string,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        return this.teamService.searchTeamsByName(
            query,
            { order, per_page: perPage, page },
            includeArray,
        );
    }

}



















/*import { Controller, Get, Param } from '@nestjs/common';
import { TeamService } from '../Services/teamService';


@Controller('teams')
export class TeamController {
    constructor(private readonly teamService: TeamService) { }

    @Get(':id')
    getTeam(@Param('id') id: number) {
        return this.teamService.getTeam(id);
    }

    @Get()
    getAllTeams() {
        return this.teamService.getAllTeams();
    }
}
*/