import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonks.service';


@Injectable()
export class RefereeService {
    constructor(private readonly soccerClientService: SoccerClientService) { }

    // Método para buscar todos os árbitros
    async getAllReferees(
        includes: string[] = [],
        order: string = 'asc',
        perPage: number = 25,
        page: number = 1,
    ): Promise<any> {
        const endpoint = 'referees';
        const params = {
            order,
            per_page: perPage,
            page,
        };
        return this.soccerClientService.get(endpoint, params, includes);
    }

    // Método para buscar árbitros por ID de país
    async getRefereesByCountryId(
        countryId: number,
        includes: string[] = [],
        order: string = 'asc',
        perPage: number = 25,
        page: number = 1,
    ): Promise<any> {
        const endpoint = `referees/countries/${countryId}`;
        const params = {
            order,
            per_page: perPage,
            page,
        };
        return this.soccerClientService.get(endpoint, params, includes);
    }

    // Método para buscar árbitros por ID de temporada
    async getRefereesBySeasonId(
        seasonId: number,
        includes: string[] = [],
        order: string = 'asc',
        perPage: number = 25,
        page: number = 1,
    ): Promise<any> {
        const endpoint = `referees/seasons/${seasonId}`;
        const params = {
            order,
            per_page: perPage,
            page,
        };
        return this.soccerClientService.get(endpoint, params, includes);
    }

    // Método para buscar árbitros por nome
    async searchRefereesByName(
        searchQuery: string,
        includes: string[] = [],
        order: string = 'asc',
        perPage: number = 25,
        page: number = 1,
    ): Promise<any> {
        const endpoint = `referees/search/${searchQuery}`;
        const params = {
            order,
            per_page: perPage,
            page,
        };
        return this.soccerClientService.get(endpoint, params, includes);
    }

    // Método para buscar um árbitro específico por ID
    async getRefereeById(
        refereeId: number,
        includes: string[] = [],
    ): Promise<any> {
        const endpoint = `referees/${refereeId}`;
        return this.soccerClientService.get(endpoint, {}, includes);
    }
}
