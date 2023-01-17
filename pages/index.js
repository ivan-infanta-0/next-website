// import {getSession} from "../lib/getSession";
/*
export async function getServerSideProps(context) {
  const session = await getSession(context.req, context.res);
  const user = session.user;
  console.log(session.user);

  if (!user) {
    return {
      redirect: {
        destination: '/signup',
        permanent: false
      }
    }
  }

  return {
    props: {
      user: user ?? null
    }
  };
}
*/
export default function Index(props) {

  function handleClick() {
    
  }

  let message;
  if (!props.name) {
    message = 'can I ask your name?';
  } else {
    message = `you are ${props.name}, aren't you?`
  }

  return (
    <>
      <h1>pipis</h1>
      <form>
        <label htmlFor="belovedBox">{message}</label>
        <input type="text" name="beloved" id="belovedBox" required />
        <input type="button" value="got it?" />
      </form>
      <a href="/login">ogin</a> <a href="/signup">signup</a>
    </>
  )
}
