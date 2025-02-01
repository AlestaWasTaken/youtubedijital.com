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
            X Türkiye, dijital dünyada yaratıcılıkla yenilikçi çözümleri birleştiren bir platformdur. Sanattan dijital medya üretimine, müzik endüstrisinden sosyal medya fenomelerine kadar birçok farklı sektörde faaliyet gösteren X Türkiye, müşterilerine özgün ve etkili projeler sunmaktadır. Türkiye'nin en iyi sanatçılarından dijital medya uzmanlarına kadar geniş bir ağ kurarak, her projede kaliteli sonuçlar elde etmeyi hedefler.
        </p>
        <p>
            Platform, globalde tanınmış Spotify Playlistleri, TikTok fenomenleri ile sağladığı işbirlikleri ve popüler müzik prodüksiyonları ile dikkat çekmektedir. X Türkiye, dijital pazarda güçlü bir etki yaratmak isteyen markalar ve sanatçılar için en verimli yol arkadaşı olma vizyonunu taşır.
        </p>
        <p>
            Yıllar içinde 1200’den fazla sanatçıyla işbirliği yapan, 500'ün üzerinde Spotify playlist'inde yer alan X Türkiye, müşteri memnuniyetine ve yaratıcı çözüm geliştirmeye odaklanarak her zaman sektördeki gelişmeleri takip eder. Bunu yaparken de sanatsal, ticari ve dijital alandaki pek çok projeyi başarıyla yönetir.
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