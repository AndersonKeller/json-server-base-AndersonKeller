# json-server-base

Esse é o repositório com a base de JSON-Server + JSON-Server-Auth já configurada, feita para ser usada no desenvolvimento das API's nos Projetos Front-end.

## Endpoints

Assim como a documentação do JSON-Server-Auth traz (https://www.npmjs.com/package/json-server-auth), existem 3 endpoints que podem ser utilizados para cadastro e 2 endpoints que podem ser usados para login.

### Cadastro

POST /register <br/>

registrar um novo usuário, sendo obrigatório no body um email e um password<br/>

resposta esperada<br/>

{
"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlMkBnbWFpbC5jb20iLCJpYXQiOjE2NzE1ODUxOTIsImV4cCI6MTY3MTU4ODc5Miwic3ViIjoiMyJ9.uLdqCFsoF53_OzzaAXms7Rm9i8zLhYgP5t3wwn5EAss",<br/>
"user": {<br/>
"email": "teste2@gmail.com",<br/>
"id": 3<br/>
}<br/>
}

### Login

POST /login <br/>

Login pela rota login, passando email e password no body<br/>

resposta esperada<br/>

{
"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQGdtYWlsLmNvbSIsImlhdCI6MTY3MTU4NTIxMiwiZXhwIjoxNjcxNTg4ODEyLCJzdWIiOiIyIn0.CTEhA9nXp-tDm1eSTWDcTqxRchl3VSyjufMKtH2ggCY",<br/>
"user": {<br/>
"email": "teste@gmail.com",<br/>
"id": 2<br/>
}<br/>
}

### Get atual User

GET/ users/id<br/>

consultar o usuário atual logado:<br/>

tipo de resposta esperada<br/>

{<br/>
"email": "teste@gmail.com",<br/>
"password": "$2a$10$H699X4vymKvuzsmpKlWEAeXA4RpE1RTQk/iZzZrAfh9dszv4JqpaK",<br/>
"id": 2<br/>
}

### Possíveis erros

-email já existe, ao tentar cadastrar um usuário já existente<br/>
-falta de id ou token, ao pegar o usuário atual<br/>
-email ou senhas incorretos, ao tentar fazer login de forma errada
