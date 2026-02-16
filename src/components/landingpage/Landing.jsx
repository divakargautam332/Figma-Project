import React from 'react'
import Navbar from '../layouts/Navbar/Navbar'
import Footer from '../layouts/Footer/Footer'
import Hero from '../sections/Hero/Hero'
import Company from '../sections/Company/Company'
import Contact from '../sections/contacts/Contact'
import CTA from '../sections/CTA/CTA'
import Features from '../sections/Features/Features'
import Guide from '../sections/Guide/Guide'

function Landing() {
    return (
        <>
            <Hero></Hero>
            <Features></Features>
            <Guide></Guide>
            <Company></Company>
            <CTA></CTA>
            <Contact></Contact>
            <Footer></Footer>
        </>
    )
}

export default Landing