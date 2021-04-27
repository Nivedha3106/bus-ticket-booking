const User = require('../models/User');

const login = (req, res) => {
  const { name } = req.body;
  const { password } = req.body;
  User.findOne({ name, password })
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response.data);
      if (response != null) {
        res.json({
          res: true,
          response,
        });
      } else {
        res.json({
          res: false,
        });
      }
    })
    .catch(() => {
      res.json({
        message: 'An Error Occured',
      });
    });
};

const signUp = (req, res) => {
  const New = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPwd: req.body.confirmPwd,
  });
  /* let errors=[];
    if(password !== confirmPwd){
        errors.push({msg: 'Password do not match'});
    } */
  New.save()
    .then(() => {
      res.json({
        message: 'New User Details Added!',
      });
    });
};

const index = (req, res) => {
  User.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch(() => {
      res.join({
        message: 'An error occured',
      });
    });
};
module.exports = {
  index, login, signUp,
};
