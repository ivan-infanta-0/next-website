import {useRef} from 'react';

var bcrypt = require('bcryptjs');

var salt = bcrypt.genSaltSync(10);

export default function handler(req, res) {
  console.log('req.body:');
  console.log(req.body);
  
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  
  try {
    // do a database insert here
    res.send({ok: true});
  } catch (error) {
    res.send({ok: false});
  }
}

// {user: body.username, pass: bcrypt.hashSync(body.password, salt)}
