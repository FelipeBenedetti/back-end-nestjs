import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonks.service';

@Injectable()
export class StateService {
    constructor(private readonly soccerClientService: SoccerClientService) { }

    // Método para buscar todos os estados
    async getAllStates(order: string = 'asc', perPage: number = 25, page: number = 1): Promise<any> {
        const endpoint = 'states';  // Endereço do endpoint para buscar todos os estados

        const queryParams: any = {
            order: order,          // Ordenação dos estados (asc ou desc)
            per_page: perPage,     // Número de resultados por página
            page: page,            // Página da requisição
        };

        // Chama a API externa para buscar os estados
        return await this.soccerClientService.get(endpoint, queryParams);
    }

    // Método para buscar um estado específico por ID
    async getStateById(id: number): Promise<any> {
        const endpoint = `states/${id}`;  // Endereço do endpoint para buscar o estado pelo ID

        // Chama a API externa para buscar o estado com o ID fornecido
        return await this.soccerClientService.get(endpoint);
    }
}
