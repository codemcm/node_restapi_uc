const dbCon = require("../conf/config");

function getPersonas(req, res, next) {
    dbCon.any("SELECT * FROM  persona")
        .then(function (data) {
            res
                .json({
                    status: "successfull",
                    data: data,
                    message: "Retrived personas"
                })
        }).catch(function (err) {
            console.log(err)
            res.json({
                status: "error",
                data: "Sin registros",
                message: err
            });
        })

}

function getPersonaById(req, res, next) {
    var personaId = parseInt(req.params.personaId);
    dbCon.one('SELECT * FROM persona WHERE persona_id =$1', personaId)
        .then(function (data) {
            res.json({
                status: "successfull",
                data: data,
                message: "persona"
            });
        })
        .catch(function (error) {
            res.json({
                status: "error",
                data: "Persona recuperada con exito",
                message: error
            })
        })
}

function insertarPersona(req, res, next) {
    dbCon.none('INSERT INTO PUBLIC.persona(nombre, apellidos) VALUES(${nombre}, ${apellidos})', req.body)
        .then(function () {
            res.json({
                status: "successfull",
                data: "Without data",
                message: "Persona insertada correctamente"
            })
        })
        .catch(function (err) {
            console.log(err)
            res.json({
                status: "error",
                data: "no data",
                message: err
            })
        })
}

function editarPersona(req, res, next) {
    console.log(req.body)
    dbCon.none("UPDATE persona SET nombre=$1, apellidos=$2 WHERE persona_id = $3",
        [req.body.nombre, req.body.apellidos, req.body.persona_id])
        .then(function () {
            res.json({
                status: "successfull",
                data: "Without data",
                message: "Persona editada con exito"
            })
        })
        .catch(function (error) {
            console.log(error)
            res.json({
                status: "error",
                data: "no data",
                message: error
            })
        })
}

function eliminarPersona(req, res, next) {
    var personaId = parseInt(req.params.personaId);
    dbCon.any("DELETE FROM persona WHERE persona_id= $1", personaId)
        .then(function () {
            res.json({
                status: "successful",
                data: "Without data",
                message: "Persona eliminada con exito"
            })
        }
        )
        .catch(function (error) {
            console.log(error)
            res.json({
                status: "error",
                data: "no data",
                message: error
            })
        })
}

module.exports = {
    getPersonas: getPersonas,
    getPersona: getPersonaById,
    insertarPersona: insertarPersona,
    editarPersona: editarPersona,
    eliminarPersona: eliminarPersona
}