import React from 'react'

import { Link } from "react-router-dom";
import Banner from '../Banner';
import Modelingstory from '../Modelingstory';
import bannerImg from "../../assets/banner modeling2.webp";
import Ribbon from '../Ribbon';
import Faq from '../Faq';
import Newsletter from '../Newsletter';
import Modestat from '../Modestat';
import Modetabs from '../Modetabs';
import Modecoverflow from '../Modecoverflow';
import Modecards from '../Modecards';
import Modelingquote from '../Modelingquote';
import Modelingfaq from '../Modelingfaq';


function Modeling() {
  return (
    <>
      <>
        <Banner title="3D Modeling"

          bannerImage={bannerImg} />

        <Modelingstory />
        <Modestat />
        <Modetabs />
        <Modecards />
        <Modecoverflow />
        <Modelingquote />
        <Ribbon />
        <Modelingfaq />
        <Newsletter />
      </>
    </>
  )
}

export default Modeling
