import ourBrand from "../../assets/brand/ourBrand.png"
import award from "../../assets/brand/award.png"
import Button from "../../ui/Button"


const Brand = ()=>{
    return <div className="px-28.75 mt-18 ">
        <img src={ourBrand} alt=""  className="mx-auto"/>
        <div className="flex justify-center mt-56.75 items-center h-136.75">
            <div className="w-200  flex flex-col gap-8">
                <h1 className="w-170 text-[56px] font-semibold font-header">DIGITAL<span className="text-primary"> POPULER BRAND</span> AWARD 2023</h1>
                <p className="text-[24px] text-grey font-normal  h-22.5">Tahun ini kembali PT.Altama Surya Anugerah mengawinkan Digital Populer Brand Award 2023 untuk brand Tekiro kategori Handtools dan Ryu kategori Powertools.</p>
                <div className="flex gap-4">
                <div className="w-63.5 h-31 rounded-xl border border-border bg-primary/32 ">
                    <h1 className="text-darkBlue px-4 text-[43px] font-bold">7</h1>
                    <p className="text-darkBlue text-[20px]w-55.5 h-12.5 px-4 pb-1.5">Penghargaan yang diterima brand Tekiro </p>
                </div>
                <div className="w-63.5 h-31 rounded-xl border border-border bg-primary/32 ">
                    <h1 className="text-darkBlue px-4 text-[43px] font-bold">3</h1>
                    <p className="text-darkBlue text-[20px]w-55.5 h-12.5 px-4 pb-1.5">Penghargaan yang diterima Ryu Berturut-turut </p>
                </div>
                </div>
                <Button>Read More</Button>
            </div>
            <img src={award} alt="" />
        </div>
    </div>
}

export default Brand