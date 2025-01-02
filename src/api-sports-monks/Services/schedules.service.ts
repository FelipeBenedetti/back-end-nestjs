import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonks.service';


@Injectable()
export class SchedulesService {
    constructor(private readonly soccerClientService: SoccerClientService) { }

    // Método para buscar schedules por Season ID
    async getSchedulesBySeasonId(seasonId: number): Promise<any> {
        const endpoint = `schedules/seasons/${seasonId}`;
        return this.soccerClientService.get(endpoint);
    }

    // Método para buscar schedules por Team ID
    async getSchedulesByTeamId(teamId: number): Promise<any> {
        const endpoint = `schedules/teams/${teamId}`;
        return this.soccerClientService.get(endpoint);
    }

    // Método para buscar schedules por Season ID e Team ID
    async getSchedulesBySeasonAndTeamId(seasonId: number, teamId: number): Promise<any> {
        const endpoint = `schedules/seasons/${seasonId}/teams/${teamId}`;
        return this.soccerClientService.get(endpoint);
    }
}
