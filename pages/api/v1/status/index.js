function status(req, res) {
  res.status(200).json({ chave: ' Sou acima da média' });
}

export default status;