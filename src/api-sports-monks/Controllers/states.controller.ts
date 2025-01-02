import { Controller, Get, Query, Param } from '@nestjs/common';
import { StateService } from '../Services/states.services';

@Controller('states')  // Define o caminho base para os endpoints relacionados aos estados
export class StateController {
    constructor(private readonly stateService: StateService) { }

    // Endpoint para buscar todos os estados
    @Get()  // Rota para retornar todos os estados
    async getAllStates(
        @Query('order') order: string = 'asc',    // Parâmetro opcional para a ordenação (asc ou desc)
        @Query('per_page') perPage: number = 25,  // Parâmetro opcional para o número de resultados por página
        @Query('page') page: number = 1           // Parâmetro opcional para a página
    ) {
        // Chama o serviço para buscar todos os estados com a ordenação e paginação
        return await this.stateService.getAllStates(order, perPage, page);
    }

    // Endpoint para buscar o estado por ID
    @Get(':id')  // Rota para retornar o estado baseado no ID
    async getStateById(@Param('id') id: number) {
        return await this.stateService.getStateById(id);
    }
}
