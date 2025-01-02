import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonks.service';

@Injectable()
export class PlayerService {
    constructor(private readonly soccerClientService: SoccerClientService) { }

    // Método para buscar todos os jogadores com filtros e includes
    async getAllPlayers(
        params: {
            order?: string;
            per_page?: number;
            page?: number;
            [key: string]: any;
        } = {},
        includes: string[] = [],
    ): Promise<any> {
        const endpoint = `players`;
        return this.soccerClientService.get(endpoint, params, includes);
    }

    // Método para buscar um jogador específico pelo ID com filtros e includes
    async getPlayerById(
        playerId: number,
        includes: string[] = [],
        filters: { [key: string]: any } = {},
    ): Promise<any> {
        const endpoint = `players/${playerId}`;
        return this.soccerClientService.get(endpoint, filters, includes);
    }

    // Método para buscar jogadores por ID de país com filtros e includes
    async getPlayersByCountryId(
        countryId: number,
        params: {
            order?: string;
            per_page?: number;
            page?: number;
            [key: string]: any;
        } = {},
        includes: string[] = [],
    ): Promise<any> {
        const endpoint = `players/countries/${countryId}`;
        return this.soccerClientService.get(endpoint, params, includes);
    }

    // Método para buscar jogadores por nome com filtros e includes
    async searchPlayersByName(
        searchQuery: string,
        params: {
            order?: string;
            per_page?: number;
            page?: number;
            [key: string]: any;
        } = {},
        includes: string[] = [],
    ): Promise<any> {
        const endpoint = `players/search/${searchQuery}`;
        return this.soccerClientService.get(endpoint, params, includes);
    }

    // Método para buscar os últimos jogadores atualizados
    async getLastUpdatedPlayers(
        params: {
            order?: string;
            [key: string]: any;
        } = {},
        includes: string[] = [],
    ): Promise<any> {
        const endpoint = `players/latest`;
        return this.soccerClientService.get(endpoint, params, includes);
    }
}
