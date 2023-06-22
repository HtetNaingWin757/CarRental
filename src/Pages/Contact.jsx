import React from "react";
import Hero from "../Components/Hero";
import ContactInfo from "../Components/ContactInfo";
import ContactForm from "../Components/ContactForm";
import BookSection from "../Components/BookSection";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div>
      <Hero text={"Contact"} />
      <div className=" flex my-24 justify-between flex-wrap gap-10 px-10 items-start">
        <ContactInfo />
        <ContactForm />
      </div>
      <BookSection/>
      <Footer/>
    </div>
  );
};

export default Contact;
