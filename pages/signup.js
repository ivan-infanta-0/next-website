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
  
  const emailInput = useRef();
  const usernameInput = useRef();
  const passwordInput = useRef();
  const repeatpwInput = useRef();
  
  // modify dom to display a message
  const [displayIncorrectInputMessage, toggleIncorrectInputMessage] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const email = emailInput.current.value;
    const username = usernameInput.current.value;
    const password = passwordInput.current.value;
    const repeatpw = repeatpwInput.current.value;
    
    if (password !== repeatpw) {
      return toggleIncorrectInputMessage(true)
    }
    
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, username, password})
    });
    
    if (res.ok) {
      // login immediately after creating an account
      console.log("signup succ"); // /!\ outputs to browser console /!\
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="femail">email</label>
      <input type="email" id="femail" name="email" ref={emailInput} required />
      <label htmlFor="fusername">username</label>
      <input type="text" id="fusername" name="username" ref={usernameInput} required />
      <label htmlFor="fpassword">password</label>
      <input type="password" id="fpassword" name="password" ref={passwordInput} required />
      <label htmlFor="frepeatpw">password</label>
      <input type="password" id="frepeatpw" name="repeatpw" ref={repeatpwInput} required />
      <button type="submit">submit</button>
      <p hidden={!displayIncorrectInputMessage}>invalid credentials -- username already exists; passwords do not match, etc.</p>
    </form>
  )
}
