import React, { useState, useEffect } from 'react';
import profile from "../../assets/images/about/me.gif";
import { RiYoutubeLine } from '@remixicon/react';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoLink, setVideoLink] = useState("");
    const [targetViews, setTargetViews] = useState("");
    const [targetAge, setTargetAge] = useState("");
    const [targetLocation, setTargetLocation] = useState("");
    const [targetAudience, setTargetAudience] = useState("");

    // Modal açma ve kapama
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Disable body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen]);

    // Form gönderim
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!videoLink || !targetViews || !targetAge.length || !targetLocation || !targetAudience) {
            alert("Lütfen tüm alanları doldurun!");
            return;
        }
    
        const phoneNumber = "905517477767";
        const message = `Merhaba,%0A%0AYoutube video sipariş detaylarım:%0A- Video Link: ${videoLink}%0A- Hedef İzlenme: ${targetViews} kişi%0A- Hedef Yaş Aralığı: ${targetAge.join(", ")}%0A- Konum: ${targetLocation}%0A- Hedef Kitle: ${targetAudience}%0A%0ATeşekkürler.`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappURL, "_blank");
    };

    // YouTube video linkinden video ID alma
    const extractYouTubeID = (url) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([\w-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    // Video ID'ye bağlı olarak önizleme oluşturma
    const videoID = extractYouTubeID(videoLink);
    const videoPreview = videoID ? `https://www.youtube.com/embed/${videoID}` : null;

    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="glitch">
                            <img src={profile} alt="About Me" />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="hero-content wow fadeInUp delay-0-2s">
                            <h1>Merhaba, YouTube Dijital İle Artık Tüm İzlenme İhtiyaçlarınızı Karşılayabilirsiniz</h1>
                            <h2>Ekibimizle doğru bir planlama yapın, hedeflerinize ulaşın.</h2>
                            <div className="hero-btns">
                                
                            </div>
                        </div>

                        {/* Modal Bölgesi */}
                        {isModalOpen && (
                            <div className="modal-overlay">
                                <div className="modal-content">
                                    <button 
                                        onClick={closeModal} 
                                        className="modal-close-btn" 
                                        style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            background: 'none',
                                            border: 'none',
                                            fontSize: '30px',
                                            cursor: 'pointer',
                                            color: 'black'
                                        }}
                                    >
                                        ×
                                    </button>
                                    <h2>İletişim Formu</h2>
                                    <form onSubmit={handleFormSubmit} style={{ padding: "15px" }}>
                                        <div className="mt-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={videoLink}
                                                onChange={(e) => setVideoLink(e.target.value)}
                                                placeholder="YouTube Video Linkini Giriniz"
                                                style={{ marginBottom: "10px" }}
                                            />
                                            {videoPreview && (
                                                <div className="video-preview" style={{ margin: "10px 0", textAlign: "center" }}>
                                                    <iframe
                                                        width="100%"
                                                        height="315"
                                                        src={videoPreview}
                                                        title="YouTube Video Önizlemesi"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                            )}
                                        </div>
                                        <div className="mt-3">
                                            <select
                                                className="form-select"
                                                value={targetViews}
                                                onChange={(e) => setTargetViews(e.target.value)}
                                            >
                                                <option value="">Hedef İzlenme Sayısını Seçin</option>
                                                <option value="2500">2.500 İzlenme</option>
                                                <option value="5000">5.000 İzlenme</option>
                                                <option value="10000">10.000 İzlenme</option>
                                                <option value="20000">20.000 Doğal Kişi</option>
                                                <option value="50000">50.000 Doğal Kişi</option>
                                                <option value="100000">100.000 Doğal Kişi</option>
                                                <option value="200000">200.000 Doğal Kişi</option>
                                                <option value="500000">500.000 Doğal Kişi</option>
                                                <option value="1000000">1.000.000 Doğal Kişi</option>
                                                <option value="5000000">5.000.000 Doğal Kişi</option>
                                            </select>
                                        </div>
                                        <div className="mt-3">
    <select
        className="form-select"
        multiple
        value={targetAge}
        onChange={(e) => setTargetAge(Array.from(e.target.selectedOptions, option => option.value))}
    >
        <option value="6-12">6 - 12 Yaş</option>
        <option value="12-18">12 - 18 Yaş</option>
        <option value="18-25">18 - 25 Yaş</option>
        <option value="25-30">25 - 30 Yaş</option>
        <option value="30-40">30 - 40 Yaş</option>
        <option value="40-60">40 - 60 Yaş</option>
        <option value="60+">60 ve Üstü</option>
    </select>
</div>
                                        <div className="mt-3">
                                            <select
                                                className="form-select"
                                                value={targetLocation}
                                                onChange={(e) => setTargetLocation(e.target.value)}
                                            >
                                                <option value="">Hedef Konum</option>
                                                <option value="Türkiye">Türkiye</option>
                                                <option value="Global">Global</option>
                                            </select>
                                        </div>
                                        <div className="mt-3">
                                            <select
                                                className="form-select"
                                                value={targetAudience}
                                                onChange={(e) => setTargetAudience(e.target.value)}
                                            >
                                                <option>Hedef Kitleyi Seçin:</option>
                                                <option>Vloglar</option>
                    <option>Eğitici ve Nasıl Yapılır Videoları</option>
                    <option>Ürün İncelemeleri ve Kutu Açılışları</option>
                    <option>Oyun Videoları</option>
                    <option>Müzik</option>
                    <option>Meydan Okumalar ve Eğlence Videoları</option>
                    <option>Röportajlar ve Podcast’ler</option>
                    <option>Mizah ve Skeç Videoları</option>
                    <option>Teknoloji ve İnceleme Videoları</option>
                    <option>Yemek ve Mutfak Videoları</option>
                    <option>Haber ve Güncel Olaylar</option>
                    <option>Seyahat ve Gezi Videoları</option>
                    <option>Korku Hikayeleri ve Paranormal</option>
                    <option>Kitap ve Film İncelemeleri</option>
                    <option>Hayvan ve Evcil Hayvan Videoları</option>
                    <option>Çocuk ve Aile Dostu İçerikler</option>
                    <option>Bilim ve Keşif Videoları</option>
                    <option>Soru-Cevap (Q&A) Videoları</option>
                    <option>DIY (Kendin Yap) Projeleri</option>
                    <option>Mimari ve Ev Dekorasyonu</option>
                    <option>Yaşam Tarzı ve Kişisel Gelişim</option>
                    <option>Dil Öğrenme ve Eğitim İçerikleri</option>
                    <option>Belgeseller ve Kısa Filmler</option>
                    <option>Alışveriş ve Ürün Tanıtımları</option>
                    <option>Tepki ve Yorum Videoları</option>
                    <option>Motivasyon ve İlham Verici İçerikler</option>
                    <option>Fitness ve Sağlık</option>
                    <option>ASMR</option>
                    <option>Canlı Yayınlar</option>
                    <option>Güzellik ve Moda</option>
                    <option>Teknoloji ve Elektronik</option>
                    <option>Oyun</option>
                    <option>Spor</option>
                    <option>Seyahat ve Gezi</option>
                    <option>Müzik</option>
                    <option>Moda ve Güzellik</option>
                    <option>Yemek ve Mutfak</option>
                    <option>Otomobil</option>
                    <option>Film ve Dizi</option>
                    <option>Kitap ve İnceleme</option>
                    <option>Sanat ve Kültür</option>
                    <option>Finans ve Yatırım</option>
                    <option>Eğitim ve Sertifika</option>
                    <option>Ev Dekorasyonu</option>
                    <option>Sağlık ve Fitness</option>
                    <option>Evcil Hayvan Sahipleri</option>
                    <option>Çocuk ve Aile</option>
                    <option>İş ve Girişimcilik</option>
                    <option>Kripto Para ve Blockchain</option>
                    <option>Sürdürülebilir Yaşam</option>
                    <option>Bahçecilik ve Tarım</option>
                    <option>Koleksiyon ve Antika</option>
                    <option>Lüks Ürünler ve Hizmetler</option>
                    <option>E-spor ve Online Turnuvalar</option>
                    <option>Psikoloji ve Kişisel Gelişim</option>
                    <option>Hayatta Kalma ve Macera</option>
                    <option>Bebek ve Çocuk Bakımı</option>
                    <option>Tüketici Elektroniği</option>
                    <option>Bilim ve Keşif</option>
                    <option>Tasarım ve Grafik Sanatları</option>
                    <option>Emlak ve Gayrimenkul</option>
                    <option>Yatırım ve Sigorta</option>
                    <option>Hayvanseverler ve Doğa Tutkunları</option>
                    <option>Fitness ve Zindelik</option>
                    <option>Tıbbi Ürünler ve Sağlık Hizmetleri</option>
                    <option>Eğitim ve Öğretim Araçları</option>
                    <option>Etkinlik Organizasyonu ve Planlama</option>
                    <option>Sanayi ve Üretim</option>
                    <option>Tarım ve Hayvancılık</option>
                    <option>Yaratıcı Sanatlar ve El Sanatları</option>
                    <option>Otel ve Konaklama Hizmetleri</option> 
                                            </select>
                                        </div>
                                        <div className="mt-4 text-center">
                                            <button type="submit" className="theme-btn">Sipariş Gönder</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
