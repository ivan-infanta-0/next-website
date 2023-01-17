import {useRouter} from 'next/router';
import {useRef, useState} from 'react';
import {withSessionSsr} from '../lib/config/withSession';


export const getServerSideProps = withSessionSsr(async (context) => {
  const user = context.req.session.user
  
  if (!!user) {
    return {
      redirect: {
        destination: '/images',
        permanent: false
      }
    }
  }
  
  return {
    props: {}
  }
});

export default function Login() {
  const router = useRouter();

  const usernameInput = useRef();
  const passwordInput = useRef();
  
  // modify dom to display a message
  const [displayIncorrectInputMessage, toggleIncorrectInputMessage] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const username = usernameInput.current.value;
    const password = passwordInput.current.value;
    
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username, password})
    });
    
    if (res.ok) {
      return router.push('/images');
    } else {
      toggleIncorrectInputMessage(true)
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fusername">username</label>
      <input type="text" id="fusername" name="username" ref={usernameInput} required />
      <label htmlFor="fpassword">password</label>
      <input type="password" id="fpassword" name="password" ref={passwordInput} required />
      <button type="submit">submit</button>
      <p hidden={!displayIncorrectInputMessage}>invalid credentials</p>
    </form>

  )
}
