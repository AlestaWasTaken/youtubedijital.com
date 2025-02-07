import { RiDownloadLine, RiWhatsappFill } from '@remixicon/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
    return (
        <section className="call-to-action-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-12">
                        <div className="call-to-action-part wow fadeInUp delay-0-2s text-center">
                            <h2>YouTube videolarınızı milyonlarca izleyiciyle buluşturmaya şimdi başlamak istemez misiniz?</h2>
                            <p>XTürkiye olarak 6 yıl boyunca 1950’den fazla içerik üreticisiyle harika projelere imza attık. Büyük isimlerle organizasyonlar, konser etkinlikleri ve dijital projeler yapmaya devam ediyoruz. Şimdi sen de bize katıl, içeriğini duyurmaya hemen başla!</p>
                            <div className="hero-btns">
                                <Link to="https://api.whatsapp.com/send?phone=905517477767&text=Merhaba,%20xturkiye.online%20sitenizden%20ulaşıyorum,%20yardımcı%20olabilir%20misiniz?" className="theme-btn call-to-action-button">Hadi Tıkla ve İletişime Geç! <i><RiWhatsappFill size={16}/></i></Link>
                            </div>
                        </div>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default CallToAction