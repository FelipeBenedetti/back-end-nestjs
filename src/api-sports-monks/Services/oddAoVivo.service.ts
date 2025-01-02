import { Injectable } from "@nestjs/common";
import { SoccerClientService } from "../sportsMonks.service";

@Injectable()
export class InplayOddsService {
    constructor(private readonly soccerClientService: SoccerClientService) {}

    // Obter todas as odds em jogo
    async getAllInplayOdds(
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

        return this.soccerClientService.get('odds/inplay', params, includes);
    }

    // Obter odds em jogo por ID de fixture
    async getInplayOddsByFixture(
        fixtureId: number,
        includes: string[] = [],
    ): Promise<any> {
        return this.soccerClientService.get(`odds/inplay/fixtures/${fixtureId}`, {}, includes);
    }

    // Obter odds em jogo por ID de fixture e ID de bookmaker
    async getInplayOddsByFixtureAndBookmaker(
        fixtureId: number,
        bookmakerId: number,
        includes: string[] = [],
    ): Promise<any> {
        return this.soccerClientService.get(`odds/inplay/fixtures/${fixtureId}/bookmakers/${bookmakerId}`, {}, includes);
    }

    // Obter odds em jogo por ID de fixture e ID de mercado
    async getInplayOddsByFixtureAndMarket(
        fixtureId: number,
        marketId: number,
        includes: string[] = [],
    ): Promise<any> {
        return this.soccerClientService.get(`odds/inplay/fixtures/${fixtureId}/markets/${marketId}`, {}, includes);
    }

    // Obter últimas odds em jogo atualizadas
    async getLastUpdatedInplayOdds(includes: string[] = []): Promise<any> {
        return this.soccerClientService.get('odds/inplay/latest', {}, includes);
    }
}
