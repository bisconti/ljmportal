import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const SERVICE_ID = 'service_mc8wofz';
const TEMPLATE_ID = 'template_tsroweg';
const PUBLIC_KEY = 'kxMeHS9UnX9rJ2Ns_';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // event.target을 사용하여 폼 요소에 접근
    const formElements = e.target.elements;
    const fromName = formElements.from_name.value;
    const messages = formElements.messages.value;

    if (!fromName || !messages) {
      alert('모든 필드를 채워주세요.');
      return; // 필드가 비어있으면 함수 실행 중단
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('Email send Success!');
          alert('메일 전송이 완료되었습니다.');
          form.current.reset();
        },
        (error) => {
          console.log('Email send Failed', error.text);
          alert('메일 전송에 실패했습니다.'); // 실패 시 사용자에게 알림
        }
      );
  };

  return (
    <div className='contact-container'>
      <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
          <h4 className='form-title'>이메일 보내기</h4>
          <div className='form-group'>
            <label className='label'>Email 주소</label>
            <input className='email-field' type='email' name='from_name' spellCheck='false' />
          </div>
          <div className='form-group'>
            <label className='label'>내용</label>
            <textarea className='textarea-field' name='messages' spellCheck='false'></textarea>
          </div>
          <input className='submitBtn' type='submit' value='전송하기' />
        </form>
      </div>
    </div>
  );
}

export default Contact;