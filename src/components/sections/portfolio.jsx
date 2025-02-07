import React, { useState } from 'react';
import workScribble from "../../assets/images/custom/work-scribble.svg";
import { FaBullseye, FaUsers, FaClock, FaVideo, FaChartLine, FaLock } from 'react-icons/fa';
import "./portfolio.css"; // Özel CSS dosyası

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
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDescription = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="projects-area" id="portfolio">
            <div className="custom-icon">
                <img src={workScribble} alt="custom" />
            </div>
            <div className="container-fluid">
                <div className="row g-4 portfolio-grid">
                    {portfolioItems.map(({ id, title, icon, description }, index) => (
                        <div key={id} className="col-md-6 col-xl-4 portfolio-item">
                            <div className={`portfolio-box ${openIndex === index ? "active" : ""}`} onClick={() => toggleDescription(index)}>
                                <div className="icon">{icon}</div>
                                <h2 className="portfolio-title">{title}</h2>
                                <div className={`portfolio-description ${openIndex === index ? "show" : ""}`}>{description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;