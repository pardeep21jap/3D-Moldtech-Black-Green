import React from 'react'
import Banner from '../Banner'
import bannerImg from "../../assets/banner.png";
import Newsletter from '../Newsletter';
import Protabs from '../Protabs';


function Projects() {
  return (
    <>
      <Banner title="Our Projects"

        bannerImage={bannerImg} />
      <Protabs />
      <Newsletter />
    </>
  )
}

export default Projects;
