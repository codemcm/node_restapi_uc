const dbCon = require("../conf/config");

function getPersona(req, res, next) {
    dbCon.any("SELECT * FROM  persona")
        .then(function (data) {
            res
                .json({
                    status: "successfull",
                    data: data,
                    message: "Consulta exitosa"
                })
        }).catch(function (err) {
            console.log(err)
            res.json({
                status: "error",
                data: "Sin registros",
                message: err
            })
        })

}

module.exports = {
    getPersona: getPersona
}