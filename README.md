# API Sports Monks com NestJS

Este projeto é uma API desenvolvida com **NestJS** que consome todos os endpoints da **Sports Monks API**. Ela foi projetada para oferecer uma interface para acessar dados esportivos como placares, estatísticas, times, ligas e muito mais.

---

## **Recursos do Projeto**

- **NestJS Framework**: Arquitetura modular, organizando controladores e serviços.
- **Parâmetros e Includes Dinâmicos**: Flexibilidade para consultas otimizadas à API da Sports Monks.
- **Integração Completa**: Consumo de todos os endpoints disponiveis, alguns requerem pagamento. 

---

## **Instalação**

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-repositorio/sports-monks-api.git
   cd sports-monks-api
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env`:

   ```env
   SPORTS_MONKS_API_KEY=seu_api_key
   ```

4. Inicie o servidor:

   ```bash
   npm run start
   ```

---

## **Estrutura do Projeto**

```plaintext
src/
├── controllers/
│   ├── teamSquad.controller.ts
│   ├── topScorer.controller.ts
│   ├── tvStation.controller.ts
│   └── venues.controller.ts
├── services/
│   ├── sportsMonks.service.ts
│   ├── team.service.ts
│   ├── topScorer.service.ts
│   ├── ...
│   └── auth.service.ts
├── exceptions/
│   ├── apiRequestException.ts
│   └── invalidDataFormatException.ts
└── main.ts
```

---

## **Endpoints**

### Dados Esportivos

- **GET /api/teams**: Lista informações de todos os times.
- **GET /api/fixtures**: Consulta partidas com suporte a includes como estatísticas e resultados ao vivo.
- **GET /api/players/**:id**: Detalhes sobre um jogador específico.
- Outros endpoints estão documentados diretamente no código.

---

## **Próximos Passos**

- Adicionar testes unitários e de integração.
- Implementar suporte à cache para melhorar a performance.
- Criar uma documentação Swagger para a API.

---

## **Contribuições**

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

---

## **Licença**

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

