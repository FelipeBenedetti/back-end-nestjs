import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonks.service';

@Injectable()
export class LiveScoreService {
    constructor(private readonly soccerClientService: SoccerClientService) { }

    // Retorna partidas ao vivo com suporte para includes dinâmicos
    async getAllLiveMatches(includes: string[] = []): Promise<any> {
        const endpoint = 'livescores/inplay';
        return await this.soccerClientService.get(endpoint, {}, includes);
    }

    // Retorna partidas ao vivo com filtros e includes
    async getLiveMatchesWithFilters(
        filters: Record<string, any>,
        includes: string[] = [],
    ): Promise<any> {
        const endpoint = 'livescores/inplay';
        return await this.soccerClientService.get(endpoint, filters, includes);
    }
}
