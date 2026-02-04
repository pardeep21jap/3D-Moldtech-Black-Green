import React from 'react'

import { Link } from "react-router-dom";
import Banner from '../Banner';
import bannerImg from "../../assets/banner.png";
import Ribbon from '../Ribbon';
import Faq from '../Faq';
import Newsletter from '../Newsletter';
import Printingstat from '../Printingstat';
import Tabs from '../Tabs';
import Coverflow from '../Coverflow';
import Cards from '../Cards';
import Quote from '../Quote';
import Printingstory from '../Printingstory';
import Printingtabs from '../Printingtabs';
import Printingcards from '../Printingcards';
import Printingcoverflow from '../Printingcoverflow';
import Printingquote from '../Printingquote';
import Printingfaq from '../Printingfaq';



function Printing() {
  return (
    <>
      <>
        <Banner title="3D Printing"

          bannerImage={bannerImg} />

        <Printingstory />
        <Printingstat />
        <Printingtabs />
        <Printingcards />
        <Printingcoverflow />
        <Printingquote />
        <Ribbon />
        <Printingfaq />
        <Newsletter />
      </>
    </>
  )
}

export default Printing
