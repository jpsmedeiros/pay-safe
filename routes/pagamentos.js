
module.exports = function(app){
    app.get('/pagamentos', function(req, res){
        console.log("Recebida requisição de teste na porta 3000.")
        res.send('OK');
    });

    app.post('/pagamentos/pagamento', function(req, res){
        var pagamento = req.body;
        console.log('processando novo pagamento');

        // TODO pagamento vazio
        pagamento.status = "CRIADO";
        pagamento.data = new Date;

        var connection = app.persistence.connectionFactory();
        var pagamentoDao = new app.persistence.PagamentoDao(connection);

        pagamentoDao.salva(pagamento, function(erro, resultado){
            console.log("pagamento criado");
            res.json(pagamento);
        });
    });
}