import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonks.service';

@Injectable()
export class RivalService {
    constructor(private readonly soccerClientService: SoccerClientService) { }

    // Método para obter todos os rivais
    async getAllRivals(perPage: number = 25, page: number = 1) {
        const endpoint = 'rivals';
        const params = { per_page: perPage, page };
        return this.soccerClientService.get(endpoint, params);
    }

    // Método para obter rivais de um time específico por ID
    async getRivalsByTeamId(id: number) {
        const endpoint = `rivals/teams/${id}`;
        return this.soccerClientService.get(endpoint);
    }
}
