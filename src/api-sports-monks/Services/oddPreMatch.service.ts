import { Injectable } from "@nestjs/common";
import { SoccerClientService } from "../sportsMonks.service";

@Injectable()
export class OddsService {
    constructor(private readonly soccerClientService: SoccerClientService) { }

    // Obter todas as odds pré-jogo
    async getAllOdds(
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

        return this.soccerClientService.get('odds/pre-match', params, includes);
    }

    // Obter odds por ID de fixture
    async getOddsByFixture(
        fixtureId: number,
        includes: string[] = [],
    ): Promise<any> {
        return this.soccerClientService.get(`odds/pre-match/fixtures/${fixtureId}`, {}, includes);
    }

    // Obter odds por ID de fixture e ID de bookmaker
    async getOddsByFixtureAndBookmaker(
        fixtureId: number,
        bookmakerId: number,
        includes: string[] = [],
    ): Promise<any> {
        return this.soccerClientService.get(`odds/pre-match/fixtures/${fixtureId}/bookmakers/${bookmakerId}`, {}, includes);
    }

    // Obter odds por ID de fixture e ID de mercado
    async getOddsByFixtureAndMarket(
        fixtureId: number,
        marketId: number,
        includes: string[] = [],
    ): Promise<any> {
        return this.soccerClientService.get(`odds/pre-match/fixtures/${fixtureId}/markets/${marketId}`, {}, includes);
    }

    // Obter últimas odds atualizadas
    async getLastUpdatedOdds(includes: string[] = []): Promise<any> {
        return this.soccerClientService.get('odds/pre-match/latest', {}, includes);
    }
}
