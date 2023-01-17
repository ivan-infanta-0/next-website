import {withSessionSsr} from '../lib/config/withSession';
import Home from '../components/home';


export const getServerSideProps = withSessionSsr(async (context) => {
  const user = context.req.session.user
  
  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
  
  return {
    props: {}
  }
  
});

export default function Images(props) {
  return (
    <>
    <Home/>
    <div className="content">
      <p style={{color:"pink"}}>blue</p>
    </div>
    </>
  );
}
