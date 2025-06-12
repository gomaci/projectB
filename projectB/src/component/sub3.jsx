import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
//yarn add @emailjs/browser --save
//npm install @emailjs/browser --save

function Sub3() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_q95mxdk', 'template_dyufplm', form.current, {
        publicKey: 'rlyT_YeS-RKY-o4qg',
      })
      .then(
        () => {
          alert("전송되었니다")
          console.log('SUCCESS!');
        },
        (error) => {
          alert("전송이 실패했습니다")
          console.log('FAILED...', error.text);
        },
      );
  }
 return(
  <div>
    <h1>서브컴포넌트3</h1>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Phone</label>
      <input type="text" name="phone" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  </div>
 )

}

export default Sub3;