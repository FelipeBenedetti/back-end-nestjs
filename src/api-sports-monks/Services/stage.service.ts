import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonks.service';


@Injectable()
export class StageService {
    constructor(private readonly soccerClientService: SoccerClientService) {}

    // Método para buscar todos os estágios com parâmetros opcionais
    async getAllStages(params: Record<string, any> = {}): Promise<any> {
        const endpoint = 'stages';
        return this.soccerClientService.get(endpoint, params);
    }

    // Método para buscar um estágio específico por ID, aceitando parâmetros adicionais como 'include'
    async getStageById(stageId: number, params: Record<string, any> = {}): Promise<any> {
        const endpoint = `stages/${stageId}`;
        return this.soccerClientService.get(endpoint, params);
    }

    // Método para buscar estágios por Season ID, aceitando parâmetros adicionais como 'include'
    async getStagesBySeasonId(seasonId: number, params: Record<string, any> = {}): Promise<any> {
        const endpoint = `stages/seasons/${seasonId}`;
        return this.soccerClientService.get(endpoint, params);
    }

    // Método para buscar estágios por nome, aceitando parâmetros adicionais como 'include'
    async getStagesBySearchQuery(searchQuery: string, params: Record<string, any> = {}): Promise<any> {
        const endpoint = `stages/search/${searchQuery}`;
        return this.soccerClientService.get(endpoint, params);
    }
}
