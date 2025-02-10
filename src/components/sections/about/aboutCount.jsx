import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import CountUp from 'react-countup';

const AboutCount = () => {
    return (
        <section className="single-page-hero-area">
            <div className="container">

                {/* Stats Section */}
                <div className="row">
                    <Card count={1200} title="1200’den Fazla Sanatçı İşbirliği" />
                    <Card count={500} title="500’den fazla Spotify Playlist" />
                    <Card count={100} title="100’den fazla TikTok Fenomen" />
                    <Card count={1600} title="1600’den fazla Total Proje Yönetimi" />
                </div>
            </div>
        </section>
    );
};

export default AboutCount;

const Card = ({ count, title, endOption }) => {
    return (
        <div className="col-6 col-lg-3">
            <div className="hero-counter-area wow fadeInUp delay-0-4s">
                <div className="counter-item counter-text-wrap">
                    <span className="count-text plus">
                        <CountUp end={count} />
                        {endOption && <span>{endOption}</span>}
                    </span>
                    <span className="counter-title">{title}</span>
                </div>
            </div>
        </div>
    );
};
