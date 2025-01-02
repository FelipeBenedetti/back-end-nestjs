import { Injectable } from "@nestjs/common";
import { SoccerClientService } from "../sportsMonks.service";

@Injectable()
export class NewsService {
    constructor(private readonly soccerClientService: SoccerClientService) {}

    // Obter todas as notícias Pre-Match
    async getPreMatchNews(order: 'asc' | 'desc' = 'asc', perPage: number = 25, page: number = 1): Promise<any> {
        const params = {
            order,
            per_page: perPage,
            page,
        };
        return this.soccerClientService.get('news/pre-match', params);
    }

    // Obter notícias Pre-Match por Season ID
    async getPreMatchNewsBySeasonId(seasonId: number, order: 'asc' | 'desc' = 'asc', perPage: number = 25, page: number = 1): Promise<any> {
        const params = {
            order,
            per_page: perPage,
            page,
        };
        return this.soccerClientService.get(`news/pre-match/seasons/${seasonId}`, params);
    }

    // Obter notícias Pre-Match para Fixtures próximos
    async getPreMatchNewsForUpcomingFixtures(order: 'asc' | 'desc' = 'asc', perPage: number = 25, page: number = 1): Promise<any> {
        const params = {
            order,
            per_page: perPage,
            page,
        };
        return this.soccerClientService.get('news/pre-match/upcoming', params);
    }

    // Obter todas as notícias Post-Match
    async getPostMatchNews(order: 'asc' | 'desc' = 'asc', perPage: number = 25, page: number = 1): Promise<any> {
        const params = {
            order,
            per_page: perPage,
            page,
        };
        return this.soccerClientService.get('news/post-match', params);
    }

    // Obter notícias Post-Match por Season ID
    async getPostMatchNewsBySeasonId(seasonId: number, order: 'asc' | 'desc' = 'asc', perPage: number = 25, page: number = 1): Promise<any> {
        const params = {
            order,
            per_page: perPage,
            page,
        };
        return this.soccerClientService.get(`news/post-match/seasons/${seasonId}`, params);
    }
}
