import React from 'react'

import { Link } from "react-router-dom";
import Banner from '../Banner';
import Protostory from '../Protostory';
import bannerImg from "../../assets/banner.png";
import Ribbon from '../Ribbon';
import Faq from '../Faq';
import Newsletter from '../Newsletter';
import Stat from '../Stat';
import Tabs from '../Tabs';
import Coverflow from '../Coverflow';
import Cards from '../Cards';
import Quote from '../Quote';



function Prototyping() {
  return (
    <>
      <>
        <Banner title="Prototyping (LVIM)"

          bannerImage={bannerImg} />

        <Protostory />
        <Stat />
        <Tabs />
        <Cards />
        <Coverflow />
        <Quote />
        <Ribbon />
        <Faq />
        <Newsletter />
      </>
    </>
  )
}

export default Prototyping
