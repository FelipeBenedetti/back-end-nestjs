import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonks.service';

@Injectable()
export class TeamSquadService {
    constructor(private readonly soccerClientService: SoccerClientService) { }


    // Método para buscar o time squad usando o ID do time
    async getTeamSquadById(
        teamId: number,
        includes: string[] = [],
    ): Promise<any> {
        const endpoint = `squads/teams/${teamId}`;
        return this.soccerClientService.get(endpoint, {}, includes);
    }

    // Método para buscar o time squad estendido baseado no ID do time
    async getExtendedTeamSquadById(
        teamId: number,
        includes: string[] = [],
    ): Promise<any> {
        const endpoint = `squads/teams/${teamId}/extended`;
        return this.soccerClientService.get(endpoint, {}, includes);
    }



    // Método para buscar o time squad por ID do time e ID da temporada
    async getTeamSquadBySeasonAndTeamId(
        seasonId: number,
        teamId: number,
        includes: string[] = [],
    ): Promise<any> {
        const endpoint = `squads/seasons/${seasonId}/teams/${teamId}`;
        return this.soccerClientService.get(endpoint, {}, includes);
    }
}
