import { BiSend } from "react-icons/bi";
import "./Contact.css";
import { FaEnvelopeOpen, FaWhatsappSquare } from "react-icons/fa";
import swal from "sweetalert";
const Contact = () => {
  const handleAddContactInfo = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;
    const contactInfo = {
      name,
      email,
      subject,
      message,
    };

    // console.log(contactInfo);

    if (!name || !email || !subject || !message) {
      swal({
        title: "Please fill All Information",
        button: "Ok",
      });
    }

    fetch(
      "https://portfolio-server-rosy-pi.vercel.app/api/contact/create-contact",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(contactInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data?.success === true) {
          swal({
            title: "Thanks For Your Interest",
            text: "We will connect soon!!!",
            icon: "success",
            button: "Ok",
          });
        }
        form.reset();
      });
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="2000"
      id="contact"
      className=" section  lg:mx-28  mt-28 pb-28"
    >
      <p className="text-center text-lg lg:text-xl font-bold text-[#b6b4b4] uppercase">
        Contact
      </p>
      <h2 className="lg:text-5xl text-3xl font-semibold text-[#0b192c]  text-center mb-3 lg:mb-20   ">
        Get In Touch
      </h2>
      <div className=" items-center   grid lg:grid-cols-2 mx-4 lg:mx-0   gap-16 ">
        <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="contact__data lg:ms-5"
        >
          <h3 className="contact__title">Don't be Shy !</h3>

          <p className="contact__description ">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info pt-8">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon"></FaEnvelopeOpen>
              <div>
                <span className="info__title">Email</span>
                <h4 className="info__desc font-semibold">
                  keya05866@gmail.com
                </h4>
              </div>
            </div>
            <div className="info__item">
              <FaWhatsappSquare className="info__icon"></FaWhatsappSquare>
              <div>
                <span className="info__title">WhatsApp</span>
                <h4 className="info__desc font-semibold">01842669958</h4>
              </div>
            </div>
          </div>
        </div>

        <form
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="3000"
          className="contact__form   shadow-[#39424e] shadow-lg"
          onSubmit={handleAddContactInfo}
        >
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 w-full">
            <div className="form__input-div">
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                className="form__control"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              name="message"
              className="form__control textarea"
            ></textarea>
          </div>
          <button className="button">
            Send Message
            <BiSend className="ms-2 "></BiSend>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
