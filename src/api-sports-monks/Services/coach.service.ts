import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonks.service';

@Injectable()
export class CoachService {
    constructor(private readonly soccerClientService: SoccerClientService) { }

    // Método para buscar todos os coaches
    async getAllCoaches(includes: string[] = [], order: string = 'asc', perPage: number = 25, page: number = 1): Promise<any> {
        const endpoint = 'coaches';
        const params = {
            order,
            per_page: perPage,
            page,
        };
        return this.soccerClientService.get(endpoint, params, includes);
    }

    // Método para buscar um coach específico por ID
    async getCoachById(coachId: number, includes: string[] = []): Promise<any> {
        const endpoint = `coaches/${coachId}`;
        return this.soccerClientService.get(endpoint, {}, includes);
    }

    // Método para buscar coaches por país
    async getCoachesByCountry(countryId: number, includes: string[] = [], order: string = 'asc', perPage: number = 25, page: number = 1): Promise<any> {
        const endpoint = `coaches/countries/${countryId}`;
        const params = {
            order,
            per_page: perPage,
            page,
        };
        return this.soccerClientService.get(endpoint, params, includes);
    }

    // Método para buscar coaches por nome
    async searchCoachesByName(searchQuery: string, includes: string[] = [], order: string = 'asc', perPage: number = 25, page: number = 1): Promise<any> {
        const endpoint = `coaches/search/${searchQuery}`;
        const params = {
            order,
            per_page: perPage,
            page,
        };
        return this.soccerClientService.get(endpoint, params, includes);
    }

    // Método para buscar coaches atualizados nas últimas 2 horas
    async getLastUpdatedCoaches(includes: string[] = [], order: string = 'asc', perPage: number = 25, page: number = 1): Promise<any> {
        const endpoint = 'coaches/latest';
        const params = {
            order,
            per_page: perPage,
            page,
        };
        return this.soccerClientService.get(endpoint, params, includes);
    }
}
