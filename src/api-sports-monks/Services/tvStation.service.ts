import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonks.service';

@Injectable()
export class TVService {
    constructor(private readonly soccerClientService: SoccerClientService) {}

    // Obter todas as estações de TV
    async getAllTVStations(
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

        return this.soccerClientService.get('tv-stations', params, includes);
    }

    // Obter estação de TV por ID
    async getTVStationById(id: number, includes: string[] = []): Promise<any> {
        const endpoint = `tv-stations/${id}`;
        return this.soccerClientService.get(endpoint, {}, includes);
    }

    // Obter estações de TV por ID da partida (fixture)
    async getTVStationsByFixtureId(
        fixtureId: number,
        includes: string[] = [],
    ): Promise<any> {
        const endpoint = `tv-stations/fixtures/${fixtureId}`;
        return this.soccerClientService.get(endpoint, {}, includes);
    }
}
