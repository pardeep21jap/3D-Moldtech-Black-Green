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



function Modeling() {
  return (
    <>
      <>
        <Banner title="3D Modeling"

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

export default Modeling
