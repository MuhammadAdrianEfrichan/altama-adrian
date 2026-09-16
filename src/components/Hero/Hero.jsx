import hero from "../../assets/hero/hero.png"
import lineVertical from "../../assets/hero/lineVertikal.svg"
import logoBrand from "../../assets/hero/logoBrand.png"
import alva from "../../assets/hero/ALVA.png"

const Hero = ()=>{
    return <section
        className="relative h-270 overflow-hidden "
        style={{ backgroundImage: `url(${hero})` }}
    >
        <div
            className="pointer-events-none absolute inset-0 bg-linear-to-r from-primary to-primary/20"
            aria-hidden="true"
        />
        <img
            className="pointer-events-none absolute bottom-0 left-27.25"
            src={lineVertical}
            alt=""
            aria-hidden="true"
        />
        <div className="relative z-10 px-27.25 pt-72.25">
            <div className="flex w-fit items-center justify-center rounded-[65px] border border-border bg-primary px-5 py-2">
                <span className="text-2xl text-white">#AltamaGueBanget</span>
            </div>
            <h1 className="mt-8 max-w-186.5 font-header text-[82px] font-semibold leading-[0.95] tracking-[-0.02em] text-white">
                THE POWER OF
                <br />
                <span className="rounded-md bg-[#F4C41C] px-2">INNOVATION</span> FOR A
                <br />
                STRONGER NATION.
            </h1>
            <p className="mt-6 max-w-167.5 font-inter text-[32px] font-normal leading-none tracking-[-0.04em] text-abu">
                Your partner in progress, empowering every
                <br />
                step toward Indonesia’s success.
            </p>
        </div>
        <img
            className="absolute bottom-14 left-29.5 z-10"
            src={logoBrand}
            alt="Tekiro, Rexco, and Ryu"
        />
        <img
            className="pointer-events-none fixed w-54 h-71.5 bottom-5 right-20 z-10"
            src={alva}
            alt="Alva"
        />
    </section>
}

export default Hero