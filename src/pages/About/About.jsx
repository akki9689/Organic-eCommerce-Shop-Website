import React from 'react'
import Members from '../../component/home2/Members'
import AboutTestimonial from '../../component/about/Abouttestimonial'
import TrustedOrganicStore2 from '../../component/about/TrustedOrganicStore2'
import TrustedOrganicStore from '../../component/about/TrustedOrganicStore'
import DeliverySection from '../../component/about/DeliverySection'
import NewsletterThree from '../../component/common/NewsletterThree'
import Steps from '../../component/Home5/Steps'
import Footer1 from '../../component/common/footer/footer1'
import BreadCrumbs from '../../component/common/BreadCrumbs'

function About() {
  return (
    <div>
      <BreadCrumbs/>
      <TrustedOrganicStore />
      <TrustedOrganicStore2 />
      <DeliverySection />
      <Members />
      <AboutTestimonial />
      <Steps />
      <NewsletterThree />
      <Footer1/>
    </div>
  )
}

export default About
