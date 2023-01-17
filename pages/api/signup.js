import {useRef} from 'react';

var bcrypt = require('bcryptjs');

var salt = bcrypt.genSaltSync(10);

export default function handler(req, res) {
  const body = req.body;
  
  const username = req.body.username;
  const password = req.body.password;
  
  // do a database insert here
  
  
  res.status(200).send({ok: true});
}

// {user: body.username, pass: bcrypt.hashSync(body.password, salt)}
