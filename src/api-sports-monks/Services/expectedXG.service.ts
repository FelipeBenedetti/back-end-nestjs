import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonks.service';


@Injectable()
export class ExpectedXGService {
    constructor(private readonly soccerClientService: SoccerClientService) {}

    // Obter xG por equipe
    async getExpectedByTeam(
        page: number = 1,
        perPage: number = 25,
        order: 'asc' | 'desc' = 'asc',
        includes: string[] = [],
        filters: string[] = [],
    ): Promise<any> {
        const params = {
            page,
            per_page: perPage,
            order,
            filters: filters.join(';'),
        };

        return this.soccerClientService.get('expected/fixtures', params, includes);
    }

    // Obter xG por jogador
    async getExpectedByPlayer(
        page: number = 1,
        perPage: number = 25,
        order: 'asc' | 'desc' = 'asc',
        includes: string[] = [],
        filters: string[] = [],
    ): Promise<any> {
        const params = {
            page,
            per_page: perPage,
            order,
            filters: filters.join(';'),
        };

        return this.soccerClientService.get('expected/lineups', params, includes);
    }
}
