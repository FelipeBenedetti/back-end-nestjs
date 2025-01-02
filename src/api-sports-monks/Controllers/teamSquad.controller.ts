import { Controller, Get, Param, Query } from '@nestjs/common';
import { TeamSquadService } from '../Services/teamSquad.service';

@Controller('teams')
export class TeamSquadController {
    constructor(private readonly teamSquadService: TeamSquadService) { }

    // Endpoint para buscar o squad de um time por ID
    @Get(':teamId/squad')
    async getTeamSquadById(
        @Param('teamId') teamId: number,
        @Query('includes') includes?: string,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        return this.teamSquadService.getTeamSquadById(teamId, includeArray);
    }


    // Endpoint para buscar o time squad estendido por ID
    @Get(':teamId/squad/extended')
    async getExtendedTeamSquadById(
        @Param('teamId') teamId: number,
        @Query('includes') includes?: string,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        return this.teamSquadService.getExtendedTeamSquadById(teamId, includeArray);
    }


    // Endpoint para buscar o time squad por ID do time e ID da temporada
    @Get(':teamId/squad/seasons/:seasonId')
    async getTeamSquadBySeasonAndTeamId(
        @Param('seasonId') seasonId: number,
        @Param('teamId') teamId: number,
        @Query('includes') includes?: string,
    ) {
        const includeArray = includes ? includes.split(',') : [];
        return this.teamSquadService.getTeamSquadBySeasonAndTeamId(seasonId, teamId, includeArray);
    }
}
