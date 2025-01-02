
import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonks.service';

@Injectable()
export class TeamService {
    constructor(private readonly soccerClientService: SoccerClientService) { }

    async getAllTeams(
        params: { order?: string; per_page?: number; page?: number } = {},
        includes: string[] = [],
    ): Promise<any> {
        const endpoint = `teams`;
        return this.soccerClientService.get(endpoint, params, includes);
    }

    async getTeamById(
        id: number,
        includes: string[] = [],
    ): Promise<any> {
        const endpoint = `teams/${id}`;
        return this.soccerClientService.get(endpoint, {}, includes);
    }

    async getTeamsByCountryId(
        countryId: number,
        params: { order?: string; per_page?: number; page?: number } = {},
        includes: string[] = [],
    ): Promise<any> {
        const endpoint = `teams/countries/${countryId}`;
        return this.soccerClientService.get(endpoint, params, includes);
    }

    async getTeamsBySeasonId(
        seasonId: number,
        params: { order?: string; per_page?: number; page?: number } = {},
        includes: string[] = [],
    ): Promise<any> {
        const endpoint = `teams/seasons/${seasonId}`;
        return this.soccerClientService.get(endpoint, params, includes);
    }

    async searchTeamsByName(
        query: string,
        params: { order?: string; per_page?: number; page?: number } = {},
        includes: string[] = [],
    ): Promise<any> {
        const endpoint = `teams/search/${query}`;
        return this.soccerClientService.get(endpoint, params, includes);
    }

}










/*import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonksService';


@Injectable()
export class TeamService {
    constructor(private readonly client: SoccerClientService) { }

    async getTeam(id: number) {
        return this.client.get(`teams/${id}`);
    }

    async getAllTeams() {
        return this.client.get('teams');
    }
}*/
