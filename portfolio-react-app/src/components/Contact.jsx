import React from "react";
import style from "./Common-style";
function Contact() {
  return (
    <div
      name="Contact"
      className={
        `mx-auto flex p-4 justify-center items-center ` +
        style.background +
        ` ` +
        style.screenWidth
      }
    >
      <form
        method="POST"
        action="https://getform.io/f/b9f4a06b-f33b-4e6a-98f7-dc1c7df75358"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-5">
          <p
            className={
              `text-4xl text-gray-300 font-bold inline ` + style.underlineBorder
            }
          >
            Contact
          </p>
          <p className="py-4 text-gray-300">
            Fill the form or mail me @ chinmaybhate123@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        ></input>
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        ></input>
        <textarea
          className="p-2 bg-[#ccd6f6]"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className={`px-8 py-3  my-6 ` + style.buttonStyle}>
          Let's Connect
        </button>
      </form>
    </div>
  );
}

export default Contact;
