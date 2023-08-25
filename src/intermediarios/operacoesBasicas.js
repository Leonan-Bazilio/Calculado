const numerosValidos = (req, res, next) => {
  const { num1, num2 } = req.query
  if (isNaN(Number(num1)) || isNaN(Number(num2))) {
    return res.send(`Numeros invalidos`)
  }
  next()
}
module.exports = numerosValidos