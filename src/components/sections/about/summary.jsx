import React from 'react'
import profile from "../../../assets/images/about/me.gif"
const Summary = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row align-items-center">
                        {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                        <div className="col-lg-5">
                            <div className="about-image-part wow fadeInUp delay-0-3s">
                                <img src={profile} alt="About Me" />
                            </div>
                        </div>
                        {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                        <!-- START ABOUT TEXT DESIGN AREA --> */}
                        <div className="col-lg-7">
    <div className="about-content-part wow fadeInUp delay-0-5s">
    <h3 className="highlight-heading">X Türkiye Nedir?</h3> {/* Renkli yapılacak başlık */}
        <p>
        X Türkiye, dijital dünyada yaratıcılığı ve yenilikçi çözümleri birleştiren bir platformdur. Sanattan dijital medya üretimine, müzik endüstrisinden sosyal medya fenomenlerine kadar birçok farklı sektörde faaliyet gösteren X Türkiye, özellikle YouTube gibi dijital platformlarda güçlü projeler geliştirmektedir. YouTube'da içerik üretimi, fenomen işbirlikleri ve müzik video prodüksiyonlarıyla tanınan platform, markalar ve sanatçılar için özgün ve etkili çözümler sunar.


        </p>
        <p>
        X Türkiye, YouTube üzerinde popüler içerik üreticileri ile yaptığı işbirlikleri ve yüksek etkileşimli videoları ile dikkat çekmektedir. Müşterilerine, YouTube’un algoritmalarına uygun stratejilerle geniş kitlelere ulaşma fırsatı sunar. Ayrıca, YouTube üzerinden sanatçıların ve markaların dijital etkilerini artırmalarına yardımcı olur.


        </p>
        <p>
        1200'ün üzerinde sanatçıyla işbirliği yapan ve YouTube üzerinde binlerce saatlik içerik üreten X Türkiye, bu platformda da güçlü bir varlık göstererek sektördeki gelişmeleri takip eder ve yenilikçi projeleri hayata geçirir. YouTube'da yüksek etkileşimli, dikkat çekici ve özgün projeler üreterek müşteri memnuniyetini her zaman ön planda tutar.
        </p>
    </div>
</div>

                        {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Summary