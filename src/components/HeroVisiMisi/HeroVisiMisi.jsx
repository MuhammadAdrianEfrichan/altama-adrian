
import logoBrand from "../../assets/hero/logoBrand.png"
import heroVisi from "../../assets/hero/heroVisi.png"

const HeroVisiMisi =()=>{
    return <section
            className="relative h-270 overflow-hidden "
            style={{ backgroundImage: `url(${heroVisi})` }}
        >
            <div
                className="pointer-events-none absolute inset-0 bg-linear-to-r from-primary to-primary/20"
                aria-hidden="true"
            />
            <div className="relative z-10 px-27.25 pt-80">
                <img
                className="absolute top-58 left-29.5 z-10"
                src={logoBrand}
                alt="Tekiro, Rexco, and Ryu"
            />
            
                <h1 className="mt-8 max-w-186.5 font-header text-[82px] font-semibold leading-[0.95] tracking-[-0.02em] text-white">
                    Our Vision, Mission & 
                    <br />
                    <span className="rounded-md bg-[#F4C41C] px-2 py-1">Company Values</span>
                </h1>
                <p className="mt-6 max-w-167.5 font-inter text-[32px] font-normal leading-none tracking-[-0.04em] text-abu">
                    Fondasi yang membentuk Altama Surya Anugerah 
                    <br />
                    sdalam berkarya dan berkembang.
                </p>
                <div className="flex w-fit items-center justify-center rounded-[65px] border border-border bg-primary px-5 py-2 mt-10">
                    <span className="text-2xl text-white">#AltamaGueBanget</span>
                </div>
            </div>
           
        </section>
}

export default HeroVisiMisi