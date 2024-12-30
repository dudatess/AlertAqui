# AlertAqui
Aplicativo estilo "Waze" para alertas de desastres climáticos e escassez de recursos.

Utiliza NodeJS e Express para o backend
Mongoose para o banco de dados
React para o frontend

# Como rodar e testar
O arquivo .env deve ser adicionado com esse nome na pasta backend manualmente.

Abra o terminal e use "npm start" ou "yarn start", se tiver yarn instalado, para rodar a aplicação.
A mensagem "Backend server is running!" e "MongoDB connected", devem aparecer no terminal se tudo deu certo. Agora a aplição está rodando locamente na sua máquina.

Para fazer uma requisição de teste pode usar o Postman, nele escolha o tipo de requisição e escreva ela. 
Por exemplo, para enviar dados de um "Pin", escolha Post e escreva http://localhost:8800/api/pins.
Na aba logo abaixo, selecione "Body" e logo abaixo selecione "raw", nessa caixa de texto você escreve o corpo dos dados sendo enviados, com todos os dados requeridos definidos no modelo "Pin.js" na pasta models, no formato JSon. 
Nesse caso, um dado de teste poderia ser:
{
    "disaster": "enchente",
    "lat": "1000",
    "long": "1000"
}
*Note que eu optei por não colocar descrição pois ela não é obrigatória.