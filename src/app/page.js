import Cta from "@/components/home/cta";
import Hero from "@/components/home/hero";
import HomeAbout from "@/components/home/home-about";
import OurStrength from "@/components/home/our-strength";
import WhatWeDo from "@/components/home/what-we-do";

import CardCarousel from "@/components/home/home-services";
import HomeServiceBento from "@/components/home/home-service-bento";
import ServicesShowcase from "@/components/home/home-projects";
import WhyUs from "@/components/home/why-us";
import CountriesWeServe from "@/components/home/countries-we-serve";
import IndustriesWeServe from "@/components/home/industries-we-serve";
import Partners from "@/components/home/partners";
import Testimonials from "@/components/home/testimonial";
import BlogPreview from "@/components/home/blog-preview";

export default function Home() {
    return (
        <>
            <Hero />
            <HomeAbout />
            <OurStrength />
            <WhatWeDo />

            <CardCarousel />
            <HomeServiceBento />
            <ServicesShowcase />
            <CountriesWeServe />
            <IndustriesWeServe />
            <WhyUs />
            <Partners />
            <Testimonials />
            <BlogPreview />
            <Cta />
        </>
    );
}
