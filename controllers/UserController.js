const User = require("../models").user;

exports.getUser = async (req, res) => {
  User.findAll()
    .then(users => res.status(200).json({ users }))
    .catch(err => res.status(500).json(err));
};
