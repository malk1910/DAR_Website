// import PageHeader from "./PageHeader";
// import bg from "./assets/helmetConst.png";

// export default function Contact() {
//   return (
//     <>
//       <PageHeader
//         title="Contact Us"
//         subtitle="We are ready to answer your questions and discuss your next project."
//         bgImage={bg}
//       />

//       {/* Contact Section */}
//     </>
//   );
// }

import { Link } from "react-router-dom";
import PageHero from "./PageHero";
import bg from "./assets/helmetConst.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(

        "service_dar09",

        "template_3py1xzh",

        form.current,

        "o2Tcj_7yKT8h61AV1"

    )

    .then(() => {

        alert("Message Sent Successfully");

    })

    .catch((error) => {

        console.log(error);

        alert("Failed");

    });

    e.target.reset();

};

  return (
    <>

      <PageHero
        title="Contact Us"
        subtitle="We are ready to answer your questions."
        bgImage={bg}
      />

<section className="contact-wrapper">
  <div className="container">

    <div className="contact-card">

      <div className="row g-5 align-items-start">

        {/* Left Side */}

        <div className="col-lg-5">

          <div className="section-content">

            <h2 className="section-title">Get In Touch</h2>

            <p>
              Share your project goals and we'll connect you with the right
              specialists for design, supervision, and delivery.
            </p>

          </div>

          <div className="contact-info">

            <div className="info-item">

              <i className="fa-solid fa-location-dot"></i>

              <div>
                <h5>Head Office</h5>

                <p>
                  Giza - 6th of October City<br />
                  10th District, Silver Mall<br />
                  6th Floor - Office 10
                </p>
              </div>

            </div>

            <div className="info-item">

              <i className="fa-solid fa-envelope"></i>

              <div>

                <h5>Email</h5>

                <p>info@dar.com.eg</p>

              </div>

            </div>

            <div className="info-item">

              <i className="fa-solid fa-phone"></i>

              <div>

                <h5>Phone</h5>

                <p>
                  +20 100 101 6416 <br />
                  02 38339000
                </p>

              </div>

            </div>

          </div>

          <h5 className="mt-5">Follow Us</h5>

          <div className="social-icons-footer mt-3">

            <Link to="/" className="social-link">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>

            <Link to="/" className="social-link">
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>

            <Link to="/" className="social-link">
              <i className="fa-brands fa-x-twitter"></i>
            </Link>

            <Link to="/" className="social-link">
              <i className="fa-brands fa-instagram"></i>
            </Link>

          </div>

        </div>

        {/* Right Side */}

        <div className="col-lg-7">

        <form
ref={form}
onSubmit={sendEmail}
className="contact-form"
>
          {/* <form className="contact-form"> */}

            <input type="text" name="name" placeholder="Full Name" />

            <input type="email" name="email" placeholder="Email Address" />
            <input
      type="tel"
      name="phone"
      placeholder="Phone Number"
      required
    />

            <select name="project">

              <option>Project Type</option>

              <option>Industrial</option>

              <option>Medical</option>

              <option>Educational</option>

              <option>Infrastructure</option>

            </select>

            <textarea
            name="message"
              rows="6"
              placeholder="Tell us about your project..."
            ></textarea>

            <button type="submit" className="submit-btn">

              Send Message

              <i className="fa-solid fa-paper-plane ms-2"></i>

            </button>

          </form>

        </div>

      </div>

    </div>

  </div>
</section>
    </>
  );
}