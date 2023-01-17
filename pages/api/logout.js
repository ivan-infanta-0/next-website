import {withSessionRoute} from '../../lib/config/withSession';


export default withSessionRoute(async (req, res) => {
  req.session.destroy();
  res.send({ok: true});
})
