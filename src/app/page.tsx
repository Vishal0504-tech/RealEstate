import AboutUs from "@/components/AboutUs"
import Faq from "@/components/Faq"
import FeaturedProperties from "@/components/FeaturedProperties"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import Navbar from "@/components/Navbar"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import  Footer  from "@/components/Footer"


  
 
 const Home = () => {
   return (
     <div> 
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedProperties />
      <Services />
      <AboutUs />
      <Testimonials />
      <Faq />
      <Footer />
     </div>
   )
 }
 
 export default Home