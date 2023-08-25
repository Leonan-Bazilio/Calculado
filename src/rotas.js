const express = require("express")
const numerosValidos = require("./intermediarios/operacoesBasicas")
const { somar, subtrair, multiplicar, dividir } = require("./controladores/operaçoesBasicas")
const bhaskara = require("./controladores/bhaskara")
const rotas = express()

rotas.get("/somar", numerosValidos, somar)
rotas.get("/subtrair", numerosValidos, subtrair)
rotas.get("/multiplicar", numerosValidos, multiplicar)
rotas.get("/dividir", numerosValidos, dividir)
rotas.get("/bhaskara", bhaskara)

module.exports = rotas