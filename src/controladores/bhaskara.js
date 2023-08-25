const bhaskara = (req, res) => {
  let { a, b, c } = req.query
  a = Number(a)
  b = Number(b)
  c = Number(c)
  const delta = b ** 2 - 4 * a * c
  if (delta < 0) {
    return res.send(`Delta: ${delta}\nComo delta é um numero negativo nao é possivel calcular bhaskara positivo e negativo ja que nao tem como tirar a raiz de delta`)
  } else if (delta === 0) {
    const raiz = -b / (2 * a);
    res.send(`Delta: 0\nBhaskara: ${raiz}\nComo delta é 0 ambas as raizes de delta positiva e negativa resulta no mesmo valor`)
  } else {
    const raizPositiva = (-b + Math.sqrt(delta)) / (2 * a);
    const raizNegativa = (-b - Math.sqrt(delta)) / (2 * a);
    return res.send(`Delta: ${delta}\nBhaskara para raiz de delta positivo: ${raizPositiva}\nBhaskara para raiz de delta positivo: ${raizNegativa}`)
  }

}


module.exports = bhaskara