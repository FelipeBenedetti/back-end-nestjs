import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonks.service';


@Injectable()
export class PredictionService {
    constructor(private readonly soccerClientService: SoccerClientService) { }

    // Obter probabilidades gerais
    async getProbabilities(
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

        return this.soccerClientService.get('predictions/probabilities', params, includes);
    }

    // Obter previsibilidade por ID da liga
    async getPredictabilityByLeague(
        leagueId: number,
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

        return this.soccerClientService.get(`predictions/predictability/leagues/${leagueId}`, params, includes);
    }

    // Obter probabilidades por ID da partida
    async getProbabilitiesByFixture(
        fixtureId: number,
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

        return this.soccerClientService.get(`predictions/probabilities/fixtures/${fixtureId}`, params, includes);
    }

        // Obter todas as value bets
        async getValueBets(
            page: number = 1,
            perPage: number = 25,
            order: 'asc' | 'desc' = 'asc',
            includes: string[] = [],
        ): Promise<any> {
            const params = {
                page,
                per_page: perPage,
                order,
            };
    
            return this.soccerClientService.get('predictions/value-bets', params, includes);
        }
    
        // Obter value bets por ID da partida
        async getValueBetsByFixture(
            fixtureId: number,
            page: number = 1,
            perPage: number = 25,
            order: 'asc' | 'desc' = 'asc',
            includes: string[] = [],
        ): Promise<any> {
            const params = {
                page,
                per_page: perPage,
                order,
            };
    
            return this.soccerClientService.get(`predictions/value-bets/fixtures/${fixtureId}`, params, includes);
        }
}
