import React, { useRef, useState } from 'react'; // useState 추가
import emailjs from '@emailjs/browser';
import Alert from '../Modals/Alert';
import Confirm from '../Modals/Confirm';
import './Contact.css';

const SERVICE_ID = 'service_mc8wofz';
const TEMPLATE_ID = 'template_tsroweg';
const PUBLIC_KEY = 'kxMeHS9UnX9rJ2Ns_';

function Contact() {
  const form = useRef();

  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  const sendEmail = (e) => {

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          fnShowAlert('메일 전송이 완료되었습니다.');
          form.current.reset();
        },
        (error) => {
          fnShowAlert('메일 전송에 실패했습니다.');
        }
      );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formElements = e.target.elements;
    const fromName = formElements.from_name.value;
    const messages = formElements.messages.value;

    if (!fromName || !messages) {
      fnShowAlert('모든 항목을 작성해주세요.');
      return;
    }

    setShowConfirm(true);
  };

  const handleConfirmAction = () => {
    setShowConfirm(false);
    sendEmail();
  };

  const handleCancelAction = () => {
    setShowConfirm(false);
  };

  const fnShowAlert = (msg) => {
    setAlertMsg(msg);
    setShowAlert(true);
  };

  return (
    <div className='contact-container'>
      <div className='form'>
        <form ref={form} onSubmit={handleFormSubmit}>
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

      {showAlert && (
        <Alert 
          message={alertMsg}
          onClose={() => setShowAlert(false)}/>
      )}
      {showConfirm && (
        <Confirm
          message="메일을 전송하시겠습니까?"
          onConfirm={handleConfirmAction}
          onCancel={handleCancelAction}
        />
      )}
    </div>
  );
}

export default Contact;