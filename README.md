# json-server-base

Esse é o repositório com a base de JSON-Server + JSON-Server-Auth já configurada, feita para ser usada no desenvolvimento das API's nos Projetos Front-end.

## Endpoints

Assim como a documentação do JSON-Server-Auth traz (https://www.npmjs.com/package/json-server-auth), existem 3 endpoints que podem ser utilizados para cadastro e 2 endpoints que podem ser usados para login.

### Cadastro

POST /register <br/>

registrar um novo usuário, sendo obrigatório no body um email e um password

resposta esperada

{
"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlMkBnbWFpbC5jb20iLCJpYXQiOjE2NzE1ODUxOTIsImV4cCI6MTY3MTU4ODc5Miwic3ViIjoiMyJ9.uLdqCFsoF53_OzzaAXms7Rm9i8zLhYgP5t3wwn5EAss",
"user": {
"email": "teste2@gmail.com",
"id": 3
}
}

### Login

POST /login <br/>

Login pela rota login, passando email e password no body

resposta esperada

{
"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQGdtYWlsLmNvbSIsImlhdCI6MTY3MTU4NTIxMiwiZXhwIjoxNjcxNTg4ODEyLCJzdWIiOiIyIn0.CTEhA9nXp-tDm1eSTWDcTqxRchl3VSyjufMKtH2ggCY",
"user": {
"email": "teste@gmail.com",
"id": 2
}
}

### Get atual User

GET/ users/id

consultar o usuário atual logado:

tipo de resposta esperada

{
"email": "teste@gmail.com",
"password": "$2a$10$H699X4vymKvuzsmpKlWEAeXA4RpE1RTQk/iZzZrAfh9dszv4JqpaK",
"id": 2
}

### Possíveis erros

-email já existe, ao tentar cadastrar um usuário já existente
-falta de id ou token, ao pegar o usuário atual
-email ou senhas incorretos, ao tentar fazer login de forma errada
