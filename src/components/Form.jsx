"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import axios from "axios";
import dynamic from 'next/dynamic'

function Form() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('algo_va_aca', 'algo_va_aca', form.current, 'algo_va_aca')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const [clientName, setClientName] = useState("");
  const [clientInstitution, setClientInstitution] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [messages, setMessages] = useState("");
  const [errClientName, setErrClientName] = useState(false);
  const [errClientInstitution, setErrClientInstitution] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPhone, setErrPhone] = useState(false);
  const [errMessages, setErrMessage] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
  };

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
  };
  const handleInstitution = (e) => {
    setClientInstitution(e.target.value);
    setErrClientInstitution(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setErrPhone(false);
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessage(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName(true);
    }
    if (!email) {
      setErrEmail(true);
    }
    if (!phone) {
      setErrPhone(true);
    }
    if (!messages) {
      setErrMessage(true);
    }
    if (clientName && email && EmailValidation(email) && messages) {
      axios.post("hola", {
        nombre: clientName,
        institucion: clientInstitution,
        email: email,
        numero: phone,
        mensaje: messages,
      });
      setSuccessMsg(
        ("Hola ") + `${clientName}` + (", gracias por tu consulta. Te responderemos en la brevedad")
      );
      setClientName("");
      setClientInstitution("");
      setEmail("");
      setPhone("");
      setMessages("");
    }
  };

  return (
    <section className="w-11/12 xl:w-4/5 mx-auto xl:mt-2">
      {successMsg ? (
        <p className="text-center text-xl font-bold p-20">
          {successMsg}
        </p>
      ) : (
        <form
          id="form"
          ref={form}
          onSubmit={sendEmail}
          method="POST"
          className="p-2 grid grid-rows-2"
        >
          <div className="w-full flex flex-col gap-4 justify-center">
            <div>
              <label htmlFor="clientName" className="ml-2 text-lg font-bold text-[#161616]">Nombre</label>
              <input
                required
                onChange={handleName}
                value={clientName}
                name="user_name"
                className={`${errClientName
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-primaryColor "
                  } w-full bg-slate-100/90 border-2 rounded-lg px-4 py-1 text-base text-gray-600 outline-none duration-400`}
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="clientInstitution" className="ml-2 text-lg font-bold text-[#161616]">Institución</label>
              <input
                required
                onChange={handleInstitution}
                value={clientInstitution}
                name="user_lastName"
                className={`${errClientInstitution
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-primaryColor "
                  } w-full bg-slate-100/90 border-2 rounded-lg px-4 py-1 text-base text-gray-600 outline-none duration-400`}
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="email" className="ml-2 text-lg font-bold text-[#161616]">Mail</label>
              <input
                required
                onChange={handleEmail}
                value={email}
                name="user_email"
                className={`${errEmail
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-primaryColor"
                  } w-full bg-slate-100/90 border-2 rounded-lg px-4 py-1 text-base text-gray-600 outline-none duration-300`}
                type="email"
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="phone" className="ml-2 text-lg font-bold text-[#161616]">Teléfono</label>
              <input
                onChange={handlePhone}
                value={phone}
                name="user_phone"
                className={`${errPhone
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-primaryColor "
                  } w-full bg-slate-100/90 border-2 rounded-lg px-4 py-1 text-base text-gray-600 outline-none duration-300`}
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="messages" className="text-lg font-bold text-[#161616] ml-2">Dejanos tu consulta</label>
            <textarea
              required
              onChange={handleMessages}
              value={messages}
              name='message'
              className={`${errMessages
                ? "border-red-600 focus-visible:border-red-600"
                : "border-primaryColor "
                } w-full bg-slate-100/90 border-2 rounded-2xl px-4 py-2 text-base text-gray-600 outline-none duration-300 resize-none`}
              rows="6"
            ></textarea>
            <div className="flex flex-col mt-6 md:flex-row justify-center text-center align-middle lg:justify-end">
              <button className="border-2 rounded-2xl border-primaryColor bg-primaryColor flex justify-center text-center mt-2 md:mt-0 md:w-full md:text-2xl lg:text-xl xl:text-2xl py-2 md:py-6 lg:py-2  transition duration-150 hover:bg-primaryColor/70 hover:ease-linear text-white" onClick={handleSend}>ENVIAR</button>
            </div>
          </div>
        </form>
      )}
    </section>
  )
}

export default dynamic(() => Promise.resolve(Form), { ssr: false })