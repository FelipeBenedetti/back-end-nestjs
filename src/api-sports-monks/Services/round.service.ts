import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonks.service';

@Injectable()
export class RoundService {
    constructor(private readonly soccerClientService: SoccerClientService) {}

    // Método para buscar todas as rodadas com parâmetros opcionais
    async getAllRounds(params: Record<string, any> = {}): Promise<any> {
        const endpoint = 'rounds';
        return this.soccerClientService.get(endpoint, params);
    }

    // Método para buscar uma rodada específica por ID, aceitando parâmetros adicionais como 'include'
    async getRoundById(roundId: number, params: Record<string, any> = {}): Promise<any> {
        const endpoint = `rounds/${roundId}`;
        return this.soccerClientService.get(endpoint, params);
    }

    // Método para buscar rodadas por Season ID, aceitando parâmetros adicionais como 'include'
    async getRoundsBySeasonId(seasonId: number, params: Record<string, any> = {}): Promise<any> {
        const endpoint = `rounds/seasons/${seasonId}`;
        return this.soccerClientService.get(endpoint, params);
    }

    // Método para buscar rodadas por Stage ID, aceitando parâmetros adicionais como 'include'
    async getRoundsByStageId(stageId: number, params: Record<string, any> = {}): Promise<any> {
        const endpoint = `rounds/stages/${stageId}`;
        return this.soccerClientService.get(endpoint, params);
    }
}
