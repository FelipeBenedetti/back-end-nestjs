import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonks.service';

@Injectable()
export class VenuesService {
    constructor(private readonly soccerClientService: SoccerClientService) { }

    async getAllVenues(
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

        return this.soccerClientService.get('venues', params, includes);
    }

    async getVenueById(id: number, includes: string[] = []): Promise<any> {
        const endpoint = `venues/${id}`;
        return this.soccerClientService.get(endpoint, {}, includes);
    }

    async getVenuesBySeasonId(seasonId: number, includes: string[] = []): Promise<any> {
        const endpoint = `venues/seasons/${seasonId}`;
        return this.soccerClientService.get(endpoint, {}, includes);
    }



    // Método para buscar jogadores por nome com filtros e includes
    async searchVenuesByName(
        searchQuery: string,
        params: {
            order?: string;
            per_page?: number;
            page?: number;
            [key: string]: any;
        } = {},
        includes: string[] = [],
    ): Promise<any> {
        const endpoint = `venues/search/${searchQuery}`;
        return this.soccerClientService.get(endpoint, params, includes);
    }
}