import Button from "../../ui/Button"
import image from "../../assets/company/image.png"
import companyOverview from "../../assets/company/companyOverview.svg"
import category from "../../assets/company/category.svg"

const CompanyPreview =()=>{
    return <div className="flex gap-45 px-28.75 mt-20 h-198.5 justify-center items-center">
        <img src={image} alt="" />
        <div className="w-208.25 flex flex-col gap-7 ">
        <img src={companyOverview} alt="" className="w-[320px] h-13.25" />
        <h1 className="text-[56px] font-header w-208.25 tracking-[-4px] h-39 font-semibold leading-[93%]"><div className="text-primary">PT Altama Surya Anugerah</div> adalah distributor resmi merek Tekiro, RYU, dan Rexco di Indonesia.</h1>
        <p className="text-grey text-[24px] leading-[125%]">Kami menghadirkan perkakas, mesin, dan chemical berkualitas tinggi yang kokoh, inovatif, dan terpercaya. Dengan jaringan  distribusi luas, kami menjadi mitra bagi para profesional maupun individu dalam mendukung berbagai kebutuhan.</p>
        <img src={category} alt="" className="w-139.5 h-9.5"/>
        <Button className="mt-7">Read More</Button>
        </div>

    </div>
}

export default CompanyPreview