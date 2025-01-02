import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonks.service';

@Injectable()
export class StandingService {
    constructor(private readonly soccerClientService: SoccerClientService) {}

    // Método para obter todas as classificações (standings) com filtros e parâmetros opcionais
    async getAllStandings(params: Record<string, any> = {}): Promise<any> {
        const endpoint = 'standings';
        return this.soccerClientService.get(endpoint, params);
    }

    // Método para obter as classificações por ID da temporada
    async getStandingsBySeasonId(seasonId: number, params: Record<string, any> = {}): Promise<any> {
        const endpoint = `standings/seasons/${seasonId}`;
        return this.soccerClientService.get(endpoint, params);
    }

    // Método para obter as classificações por ID da rodada
    async getStandingsByRoundId(roundId: number, params: Record<string, any> = {}): Promise<any> {
        const endpoint = `standings/rounds/${roundId}`;
        return this.soccerClientService.get(endpoint, params);
    }

    // Método para obter as correções de standings por ID da temporada
    async getStandingCorrectionsBySeasonId(seasonId: number, params: Record<string, any> = {}): Promise<any> {
        const endpoint = `standings/corrections/seasons/${seasonId}`;
        return this.soccerClientService.get(endpoint, params);
    }

    // Método para obter as classificações ao vivo por ID da liga
    async getLiveStandingsByLeagueId(leagueId: number, params: Record<string, any> = {}): Promise<any> {
        const endpoint = `standings/live/leagues/${leagueId}`;
        return this.soccerClientService.get(endpoint, params);
    }
}
