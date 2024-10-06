import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Options from '../components/options'
import Calculator from '../components/calculator'
import WhyUs from '../components/fundingOptions'

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <h1 className="font-semibold text-center text-[42px] mb-5 leading-tight text-green-500 mt-24">
          Funding Options
        </h1>
      </div>
      <Options />
      <Calculator />
      <WhyUs />
      
      
      <Footer />
    </div>
  )
}

export default Services