import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class SoccerClientService {
    private readonly baseUrl: string;
    private readonly apiToken: string;

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) {
        this.baseUrl = 'https://api.sportmonks.com/v3/football';
        this.apiToken = this.configService.get<string>('SPORTMONKS_API_TOKEN');
        if (!this.apiToken) {
            throw new Error('API TOKEN Não definido nas variaveis de ambiente.');
        }
    }

    async get(
        endpoint: string,
        params: Record<string, any> = {},
        includes: string[] = [],
    ): Promise<any> {
        console.log("Parametros Recebidos: ", endpoint, params, includes )
        const url = `${this.baseUrl}/${endpoint}`;
        const includeParam = includes.length > 0 ? { include: includes.join(',') } : {};
        const response$ = this.httpService.get(url, {
            params: { ...params, ...includeParam, api_token: this.apiToken },
        });

        try {
            const response: any = await lastValueFrom(response$);
            return response.data;
        } catch (error) {
            const status = error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR;
            const message = error.response?.data || 'Erro';
            throw new HttpException(message, status);
        }
    }
}
