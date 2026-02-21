import React from 'react';
import Banner from '../Banner';
import Story from '../Story';
import bannerImg from "../../assets/banner aboutus2.webp";
import Stat from '../Stat';
import Mv from '../Mv';
import Ribbon from '../Ribbon';
import Faq from '../Faq';
import Newsletter from '../Newsletter';

function Blogs() {
  return (
    <>
      <Banner title="Blogs" bannerImage={bannerImg} />
      <Story />
      <Stat />
      <Mv />
      <Ribbon />
      <Faq />
      <Newsletter />
    </>
  );
}

export default Blogs;