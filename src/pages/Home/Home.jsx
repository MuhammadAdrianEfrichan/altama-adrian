import CompanyPreview from "../../components/CompanyPreview"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import Navbar from "../../components/Navbar"
import carasip from "../../assets/motion/carasip.gif"

const Home =()=>{
    return<>
    <div className="h-1000">
        <Navbar />
        <Hero />
        <CompanyPreview />
        <div className="aspect-1921/421 w-full overflow-hidden">
            <img src={carasip} alt="" className="block w-full"/>
        </div>
        </div>
         <Footer />
    </>
}

export default Home