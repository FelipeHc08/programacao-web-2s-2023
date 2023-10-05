const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/dados', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;

    // Renderiza a página "submit.html" com os dados
    res.render('dados', { nome, email, telefone });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App rodando na porta ${8080}`);
});
