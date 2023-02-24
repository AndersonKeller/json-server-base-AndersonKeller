/* eslint-disable no-undef */
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = jsonServer.create();
const router = jsonServer.router("db.json");
app.db = router.db;

const rules = auth.rewriter({
    users: 664,
    despesas: 664,
    novadespesa: 664,
    vendas: 664,
    produto: 664,
    novavenda: 664,
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);

/* A senha do Admin é 12345 */
