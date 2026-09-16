import bgSubMenu from "../../assets/navbar/BgSubMenu.svg";
import btnBrand from "../../assets/navbar/BtnBrand.svg";
import btnCareer from "../../assets/navbar/BtnCareer.svg";
import btnContactUs from "../../assets/navbar/BtnContactUs.svg";
import btnMedia from "../../assets/navbar/BtnMedia.svg";
import btnProfile from "../../assets/navbar/BtnProfile.svg";
import logo from "../../assets/navbar/Logo.svg";
import arrow from "../../assets/navbar/PanahSubMenu.svg";

const Navbar = () => {
    return (
        <div className="">
        <header className="fixed left-0 top-0 z-30">
            <img
                className="absolute left-79.5 top-0 object-fill drop-shadow-[0_8px_4px_rgba(0,0,0,0.25)]"
                src={bgSubMenu}
                alt=""
            />
            <img
                className="absolute left-0 top-0 z-10 "
                src={logo}
                alt="Altama Surya Anugerah"
            />

            <nav
                className="relative z-20 ml-100.75 flex items-center gap-20 whitespace-nowrap pb-6.5 pt-6.5"
                aria-label="Main navigation"
            >
                <a
                    className="inline-flex flex-[0_0_auto] items-center focus-visible:outline-3 focus-visible:outline-offset-4"
                    href="#profile"
                    aria-label="Profile"
                >
                    <img className="block" src={btnProfile} alt="Profile" />
                </a>
                <a
                    className="inline-flex flex-[0_0_auto] items-center focus-visible:outline-3 focus-visible:outline-offset-4"
                    href="#brand"
                    aria-label="Brand"
                >
                    <img className="block" src={btnBrand} alt="Brand" />
                    <img className="ml-2" src={arrow} alt="" />
                </a>
                <a
                    className="inline-flex flex-[0_0_auto] items-center focus-visible:outline-3 focus-visible:outline-primary focus-visible:outline-offset-4"
                    href="#media-center"
                    aria-label="Media Center"
                >
                    <img className="block" src={btnMedia} alt="Media Center" />
                </a>
                <a
                    className="inline-flex flex-[0_0_auto] items-center focus-visible:outline-3 focus-visible:outline-primary focus-visible:outline-offset-4"
                    href="#career"
                    aria-label="Career"
                >
                    <img className="block" src={btnCareer} alt="Career" />
                    <img className="ml-2" src={arrow} alt="" />
                </a>
                <a
                    className="inline-flex flex-[0_0_auto] items-center focus-visible:outline-3 focus-visible:outline-primary focus-visible:outline-offset-4"
                    href="#contact-us"
                    aria-label="Contact Us"
                >
                    <img className="block" src={btnContactUs} alt="Contact Us" />
                </a>
            </nav>
        </header>
        </div>
    );
};

export default Navbar