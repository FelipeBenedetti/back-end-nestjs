import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonks.service';

@Injectable()
export class TopScorerService {
    constructor(private readonly soccerClientService: SoccerClientService) { }

    async getTopScorersBySeasonId(
        seasonId: string,
        params: { order?: string; per_page?: number; page?: number } = {},
        includes: string[] = [],
    ): Promise<any> {
        const endpoint = `topscorers/seasons/${seasonId}`;
        return this.soccerClientService.get(endpoint, params, includes);
    }

    async getTopScorersByStageId(
        stageId: string,
        params: { order?: string; per_page?: number; page?: number } = {},
        includes: string[] = [],
    ): Promise<any> {
        const endpoint = `topscorers/stages/${stageId}`;
        return this.soccerClientService.get(endpoint, params, includes);
    }
}
