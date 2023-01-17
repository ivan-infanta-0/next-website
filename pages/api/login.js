import {withSessionRoute} from '../../lib/config/withSession';
// import database object here?
var bcrypt = require('bcryptjs');

var salt = bcrypt.genSaltSync(10);

export default withSessionRoute(async (req, res) => {
  if (req.method !== 'POST') return res.status(404).send('Not found.')

  const username = req.body.username;
  const password = req.body.password;
  
  // do a database query here
  const db_user = '...';
  const db_hash = '...';
    
  // uncomment this line once db is supplied; for now, username and password field is both '...'
  // if (username === db_user && bcrypt.hashSync(password, salt) === db_hash) {
  if (username === db_user && password === db_hash) {
    req.session.user = username;
    await req.session.save();
    
    return res.status(201).send({ok: true});
  }
    
  return res.status(403).send('');
})
