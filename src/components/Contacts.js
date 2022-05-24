import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendForm = () => {
    setIsSubmitting(true);
    if (isSubmitting) {
      toast.success("Message envoyé avec success!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const serviceId = "service_nmhi4vs";
  const templateId = "template_insj1gn";
  const publicKey = "PbkIZCZGglqE822Kq";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <div id="contact" className="contacts">
      <div className="text-center">
        <h1>contactez moi</h1>
        <p>
          Veuillez remplir le formulaire et décrire les besoins de votre projet.
          Je vous recontacterais dès que possible.
        </p>
      </div>
      <div className="container">
        <form ref={form} onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="Nom"
                  name="name"
                />
                <div className="line"></div>
              </div>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Téléphone*"
                  name="phone"
                />
                <div className="line"></div>
              </div>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  required
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                />
                <div className="line"></div>
              </div>
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="Sujet"
                  name="subject"
                />
                <div className="line"></div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* TEXTAREA */}
              <div className="text-center">
                <textarea
                  required
                  type="text"
                  className="form-control"
                  name="description"
                  placeholder="Veuillez décrire brièvement votre projet..."
                ></textarea>
                <div className="line"></div>
              </div>
              <ToastContainer />
              <button
                onClick={sendForm}
                className="btn-main-offer contact-btn"
                type="submit"
              >
                envoyer
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
