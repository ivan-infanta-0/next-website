import {useRouter} from 'next/router';
import {useRef, useState} from 'react';
import {withSessionSsr} from '../lib/config/withSession';


export const getServerSideProps = withSessionSsr(async (context) => {
  const user = context.req.session.user;
  
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


export default function Signup() {
  const router = useRouter();
  
  const usernameInput = useRef();
  const passwordInput = useRef();
  const repeatpwInput = useRef();
  
  // modify dom to display a message
  const [displayIncorrectInputMessage, toggleIncorrectInputMessage] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventdefault();
    
    const username = usernameInput.current.value;
    const password = passwordInput.current.value;
    const repeatpw = repeatpwInput.current.value;
    
    if (password !== repeatpw) {
      return // X!!!! ABORT! (wip)
    }
    
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username, password})
    });
    
    if (res.ok) {
      // login immediately after creating an account
    }
  }
  
  return (
    <form action="/api/signup" method="post">
      <label htmlFor="fusername">username</label>
      <input type="text" id="fusername" name="username" ref={usernameInput} required />
      <label htmlFor="fpassword">password</label>
      <input type="password" id="fpassword" name="password" ref={passwordInput} required />
      <label htmlFor="frepeatpw">password</label>
      <input type="password" id="frepeatpw" name="repeatpw" ref={repeatpwInput} required />
      <button type="submit">submit</button>
    </form>
  )
}
