// store, update, destroy
const Entidade = require('../Model/Entidade');

    exports.index = (request, response) => {
        Entidade.get((err, entidade) => {
            if (err) {
                response.json({
                    status: "error",
                    message: err.message
                })
            }
            response.json({
                status: "SUCCESS",
                message: "Entidades Listadas",
                dados: entidade
            })
        })
    };
    
    exports.store = (request, response) => {
        let entidade = new Entidade();
        entidade.name = request.body.name ? request.body.name : entidade.name;
        entidade.email = request.body.email;
        entidade.latitude = request.body.latitude;
        entidade.longitude = request.body.longitude;
        entidade.date_created = new Date();
    
        entidade.save((err) => {
            if (err) {
                response.json(err);
            }
            response.json({
                message: "Entidade Salva!",
                dados: entidade
            })
        })
    };

    exports.update = (request, response) => {
        Entidade.findById(request.params.id, (err, entidade) => {
            if (err) response.send(err);
            entidade.name = request.body.name;
            entidade.email = request.body.email;
            entidade.latitude = request.body.latitude;
            entidade.longitude = request.body.longitude;
            entidade.date_updated = new Date();
    
            entidade.save(err => {
                if (err) response.json(err);
                response.json({
                    message: "Entidade atualizado(a) com sucesso!",
                    dados: entidade
                })
            })
        })
    };
    
    exports.delete = (request, response) => {
    
        Entidade.deleteOne({
            _id: request.body.id
        }, (err, response) => {
            if (err) response.send(err);
            response.json({
                status: 'Entidade deletado(a) com sucesso!',
                message: 'Entidade não existe mais'
            })
        });
    };
