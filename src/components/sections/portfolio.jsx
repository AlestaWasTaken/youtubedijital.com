import React, { useState } from 'react';
import { FaBullseye, FaUsers, FaClock, FaVideo, FaChartLine, FaLock } from 'react-icons/fa';
import { RiYoutubeLine } from 'react-icons/ri'; // Ensure this import is there if you're using RiYoutubeLine
import { Carousel } from 'react-bootstrap';
import "./portfolio.css";


const portfolioItems = [
    { id: 1, title: "Hedef İzlenme Sayısını Belirleyin", icon: <FaBullseye />, description: "İzlenme hedeflerinizi belirleyerek stratejinizi oluşturun." },
    { id: 2, title: "Doğru Kitleye Ulaşın", icon: <FaUsers />, description: "Hedef kitlenizi analiz ederek doğru kişilere ulaşın." },
    { id: 3, title: "Hızlı Ve Kolay Sipariş Verin", icon: <FaClock />, description: "Kolay sipariş süreci ile vakit kaybetmeden hizmet alın." },
    { id: 4, title: "Gerçek İzleyicilere Ulaşın", icon: <FaVideo />, description: "Sadece organik ve gerçek izleyicilere erişim sağlayın." },
    { id: 5, title: "Hedefli Reklam Kampanya Fırsatı", icon: <FaBullseye />, description: "Hedefli reklam kampanyalarından faydalanın." },
    { id: 6, title: "Otomatik Yapay Zeka Optimizasyonu", icon: <FaChartLine />, description: "Yapay zeka ile reklam kampanyalarınızı optimize edin." },
    { id: 7, title: "Uzun Vadeli Büyüme Stratejileri", icon: <FaChartLine />, description: "Sürekli büyüme için etkili stratejiler geliştirin." },
    { id: 8, title: "Esnek Paketlerle Uygun Olanı Seçin", icon: <FaLock />, description: "İhtiyacınıza göre esnek paket seçenekleriyle hizmet alın." },
    { id: 9, title: "Güvenlik ve Gizlilik", icon: <FaLock />, description: "Tüm verileriniz güvende ve gizliliğiniz korunuyor." },
    { id: 10, title: "Sınırsız Destek", icon: <FaUsers />, description: "Hizmetlerimizde sınırsız destek ile yanınızdayız." }
];

const Portfolio = () => {
    const [showPrices, setShowPrices] = useState(false);
    const [videoLink, setVideoLink] = useState("");
    const [targetViews, setTargetViews] = useState("");
    const [targetAge, setTargetAge] = useState([]);
    const [targetLocation, setTargetLocation] = useState("");
    const [targetAudience, setTargetAudience] = useState("");

    // YouTube video linkinden video ID alma
    const extractYouTubeID = (url) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([\w-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    // Video ID'ye bağlı olarak önizleme oluşturma
    const videoID = extractYouTubeID(videoLink);
    const videoPreview = videoID ? `https://www.youtube.com/embed/${videoID}` : null;

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

    return (
        <div className="projects-area" id="portfolio">
            <div className="custom-text">
                <h2>YouTube Dijital İle %100 Organik İzleyicilere Şimdi Ulaşın!</h2>
            </div>

            {/* Formu üstte, kutuların hemen üzerinde gösterme */}
            <div className="form-container" style={{ marginBottom: '30px' }}>
                
                <form onSubmit={handleFormSubmit} style={{ padding: "15px", border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                <div className="mt-3">
    <input
        type="text"
        className="form-control"
        value={videoLink}
        onChange={(e) => setVideoLink(e.target.value)}
        placeholder="YouTube Video Linkini Giriniz"
        style={{ 
            marginBottom: "10px", 
            textAlign: "center", 
            color: "black" 
        }}
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
    <button type="submit" className="theme-btn">Şimdi Sipariş Ver</button>
    <button 
        type="button" 
        className="theme-btn" 
        style={{ marginLeft: '10px', backgroundColor: '#ffcc00', color: '#000' }} 
        onClick={() => setShowPrices(true)}
    >
        Fiyatlar
    </button>
</div>

{/* Fiyatlar Modalı */}
{showPrices && (
    <div className="price-modal">
        <div className="price-modal-content" style={{ color: "#000" , backgroundColor: "#fff", padding: "15px", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <h3>Fiyat Listesi</h3>
            <ul>
            <li>2.500 İzlenme - 400₺</li>
                <li>5.000 İzlenme - 750₺</li>
                <li>10.000 İzlenme - 1200₺</li>
                <li>20.000 İzlenme - 1600₺</li>
                <li>50.000 İzlenme - 3900₺</li>
                <li>100.000 İzlenme - 6500₺</li>
                <li>200.000 İzlenme - 12.000₺</li>
                <li>500.000 İzlenme - 30.000₺</li>
                <li>1.000.000 İzlenme - 55.000₺</li>
                <li>5.000.000 İzlenme - 250.000₺</li>
            </ul>
            <button 
                className="theme-btn" 
                onClick={() => setShowPrices(false)}
            >
                Kapat
            </button>
        </div>
    </div>
)}

                </form>
            </div>

            {/* İlk 6 kutu bi yapamadık amk */}
            <div className="container-fluid">
                <div className="row g-4 portfolio-grid">
                    {portfolioItems.slice(0, 6).map(({ id, title, icon, description }) => (
                        <div key={id} className="col-md-6 col-xl-4 portfolio-item">
                            <div className="portfolio-box">
                                <div className="icon">{icon}</div>
                                <h2 className="portfolio-title">{title}</h2>
                                <div className="portfolio-description">{description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* YouTube Video Carousel ELLEME ANANI SİKERİM BOZULUYO SONRA */}
            <div className="container-fluid mt-5">
                <Carousel>
                <Carousel.Item>
    <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/7nZAbsKG-Jc?si=rY8esuGbwre971RF"
        title="YouTube video 6"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>
</Carousel.Item>
                    {/* First Slide with YouTube Video 1 */}
                    <Carousel.Item>
    <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/PcH9Pe63EN4"
        title="YouTube video 6"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>
</Carousel.Item>


<Carousel.Item>
    <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/8-ZK-LqA3dM"
        title="YouTube video 6"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>
</Carousel.Item>

<Carousel.Item>
    <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/YG4xKYjx3XE"
        title="YouTube video 6"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>
</Carousel.Item>

<Carousel.Item>
    <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/KKFDogui-OQ"
        title="YouTube video 6"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>
</Carousel.Item>

<Carousel.Item>
    <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/5sUIcmZSlqM"
        title="YouTube video 6"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>
</Carousel.Item>

<Carousel.Item>
    <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/w0LtuMcdImc"
        title="YouTube video 6"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>
</Carousel.Item>

<Carousel.Item>
    <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/XW2YNOlH88I"
        title="YouTube video 6"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>
</Carousel.Item>

<Carousel.Item>
    <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/ZEWFzmXQcfQ"
        title="YouTube video 6"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>
</Carousel.Item>

<Carousel.Item>
    <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/F6E7uOrM3dc"
        title="YouTube video 6"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>
</Carousel.Item>

<Carousel.Item>
    <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/cuEeVR3cqt4"
        title="YouTube video 6"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>
</Carousel.Item>

<Carousel.Item>
    <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/Ag_v8HNqDnw"
        title="YouTube video 6"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>
</Carousel.Item>

<Carousel.Item>
    <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/l98HY_lNqLM"
        title="YouTube video 6"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>
</Carousel.Item>

<Carousel.Item>
    <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/4f5IJjmTmXE"
        title="YouTube video 6"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>
</Carousel.Item>

<Carousel.Item>
    <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/869CzD0n3dM"
        title="YouTube video 6"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>
</Carousel.Item>

<Carousel.Item>
    <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/upvadsf_QXg"
        title="YouTube video 6"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>
</Carousel.Item>

<Carousel.Item>
    <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/k2UXy0VbdpM"
        title="YouTube video 6"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>
</Carousel.Item>

<Carousel.Item>
    <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/Cp8z03vKKaU"
        title="YouTube video 6"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>
</Carousel.Item>

<Carousel.Item>
    <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/gxyOb1awpQ0"
        title="YouTube video 6"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>
</Carousel.Item>

<Carousel.Item>
    <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/2NJ1L7K5Ops"
        title="YouTube video 6"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>
</Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};





export default Portfolio;
