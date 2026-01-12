import React from 'react'
import Banner from '../Banner'
import Story from '../Story'
import bannerImg from "../../assets/banner.png";
import Stat from '../Stat';
import Mv from '../Mv';
import Ribbon from '../Ribbon';
import Faq from '../Faq';
import Newsletter from '../Newsletter';
import ContactSection from '../ContactSection';

function Contact() {
  return (
    <>
      <Banner title="Contact Us"

        bannerImage={bannerImg} />

      <ContactSection />

      <Newsletter />
    </>
  )
}

export default Contact

