exports.getBinsByShelf = (req, res) => {
  const db = req.app.get('db')
  const { shelf } = req.params

  return db.readShelf([shelf.toUpperCase()])
    .then(result => res.status(200).send(result))
    .catch(() => res.status(500).send())
}
