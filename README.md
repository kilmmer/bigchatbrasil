# Instructions

clone the project

run the command:
docker-compose up --build -d

run manually into database the follow query:
`INSERT INTO "Plan" (name, value)
VALUES ("Plano pré-pago", "prepago");

INSERT INTO "Plan" (name, value)
VALUES ("Plano pré-pago", "prepago");`

open the front at: localhost:4000

# Sumary

Vamos desenvolver uma plataforma nova, iremos criar o BCB – Big Chat Brasil, o mais novo e interessante enviador de SMS e outras mensagens brasileiro. Precisamos que seja possível via web ou mobile que os clientes enviem mensagens para seus usuários finais. Nesse sistema cada cliente precisa ser previamente cadastrado. Ao receber a solicitação de envio de mensagem deve ser verificado o tipo de plano de pagamento desse cliente. Caso for pre-pago, esse cliente deve possuir creditos para envio de SMS que custam R$0,25 cada. Caso o cliente seja pós pago, deve registrar o consumo na conta até o limite máximo autorizado.

# Project

Dados para cadastro do cliente:

Nome, e-mail, Telefone, CPF responsável, CNPJ, Nome empresa.
Para envio de SMS deve conter:

Número telefone, flag se é WhatsApp, texto
No Backoffice, nossos financeiro deve poder fazer operações e disponibilizar dados como:

# Functions

Incluir creditos para um cliente
Consultar saldo de um cliente
Alterar limite de um cliente
Alterar plano de um cliente
Ver dados de um cliente

# Premissas

• Backend:
Desenvolvi utilizando a estrutura base do NestJS, utilizei o Prisma ORM para dar celeridade no desenvolvimento.
Eu nunca utilizei o Prisma com mais profundidade assim, só li a documentação de maneira superficial. Esse desafio me fez estudá-lo um pouco mais e entender melhor como a ferramenta funciona. Consegui utilizá-la sem grandes problemas e tive uma boa produtividade com a mesma.
Utilizei também o banco de dados Postgres, com o qual já trabalhei antes.
Utilizei a versão 18.17.1 do NodeJS para o desenvolvimento, visto que essa é a versão LTS.

• Frontend:
Desenvolvi o frontend com React e NextJS, há alguns meses, trabalhei com o Next, mas eu estava mais focado no backend, então eu não consegui ter um bom entendimento sobre o Next.
Utilizá-lo nesse desafio, foi parte de um desafio pessoal também e eu pude entender melhor como utilizá-lo. Consegui aprender melhor e desenvolver algo de maneira mais rápida com o mesmo.

• Docker:
Eu já trabalhei com o Docker há alguns anos atrás, porém, de maneira superficial - afinal, era o meu primeiro contato com a tecnologia. Eu pesquisei um pouco mais sobre como fazer o que eu queria, que era rodar os dois sides no mesmo container, sendo esse, o maior desafio para mim. E consegui! Pedi ajuda para algumas IA's (Bard e ChatGPT) e consegui subir o container e executar os projetos.
