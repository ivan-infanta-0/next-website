/* IGNORE THIS PAGE IGNORE THIS PAGE IGNORE THIS PAGE */


import {useRouter} from 'next/router';
import {useRef, useState} from 'react';


export default function Signup() {
  const router = useRouter();
  
  const usernameInput = useRef();
  const passwordInput = useRef();
  const repeatpwInput = useRef();
  
  const handleSubmit = async (e) => {
    e.preventdefault();
    
    const username = usernameInput.current.value;
    const password = passwordInput.current.value;
    const repeatpw = repeatpwInput.current.value;
    
    if (password !== repeatpw) {
      // XXXXXXXXXXXXXXXXX!!!! ABORT!
    }
    
    
  }
}
