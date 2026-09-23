import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const services = ["Wedding Coverage", "Family Portraits", "Bridal Sessions", "Premium Albums"];
const images = ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=85", "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=85"];

function App(){
  const wa = 'https://wa.me/922135844947?text=' + encodeURIComponent("Assalamualaikum, I would like to know more about Jimmy's Studio services.");
  return <div className="site">
    <header className="nav wrap">
      <a className="brand" href="#top"><span className="brandDot"></span><span>Jimmy's Studio</span></a>
      <nav><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a></nav>
      <a className="navCta" href={wa} target="_blank" rel="noreferrer">Reserve a Date</a>
    </header>

    <main id="top">
      <section className="hero wrap">
        <div className="heroCopy">
          <div className="eyebrow">PHOTOGRAPHY • DHA PHASE 5, KARACHI</div>
          <h1>Portraits with polish. Memories with soul.</h1>
          <p>A luxury studio presentation for weddings, portraits and milestone photography with an editorial visual identity.</p>
          <div className="heroActions">
            <a className="primary" href={wa} target="_blank" rel="noreferrer">Reserve a Date</a>
            <a className="secondary" href="tel:+922135844947">Call 021-35844947</a>
          </div>
          <div className="trustRow"><span>Mobile friendly</span><span>Direct booking</span><span>Karachi based</span></div>
        </div>
        <div className="heroMedia">
          <img src={images[0]} alt="Photography Studio showcase" />
          <div className="floatingCard"><small>QUICK CONTACT</small><strong>021-35844947</strong><span>Tap to book on WhatsApp</span></div>
        </div>
      </section>

      <section className="ticker"><div>Jimmy's Studio • Photography Studio • Jimmy's Studio • Photography Studio • Jimmy's Studio • Photography Studio •</div></section>

      <section id="work" className="section wrap">
        <div className="sectionHead"><div><span className="eyebrow">SELECTED HIGHLIGHTS</span><h2>A visual-first presentation that sells the experience.</h2></div><p>Demo imagery is used for presentation. It can be replaced with the business's real work before launch.</p></div>
        <div className="gallery">
          {images.slice(1).map((src,i)=><figure key={src}><img src={src} alt={"Jimmy\'s Studio highlight " + (i+1)} /><figcaption>0{i+1} / Featured</figcaption></figure>)}
        </div>
      </section>

      <section id="services" className="section alt">
        <div className="wrap">
          <div className="eyebrow">SERVICES</div><h2>Everything important, easy to understand.</h2>
          <div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>Clear service information with a direct route to enquiry and booking.</p></article>)}</div>
        </div>
      </section>

      <section id="about" className="section wrap about">
        <div><div className="eyebrow">ABOUT THE CONCEPT</div><h2>Built to turn local discovery into direct enquiries.</h2></div>
        <div><p>Designed as a high-end visual portfolio with understated typography, elegant spacing and direct booking actions for a premium studio experience.</p><div className="miniStats"><div><b>01</b><span>Fast mobile experience</span></div><div><b>02</b><span>WhatsApp-first conversion</span></div><div><b>03</b><span>Easy to customize</span></div></div></div>
      </section>

      <section className="ctaBand wrap">
        <div><span className="eyebrow">READY TO BOOK?</span><h2>Make the next enquiry one tap away.</h2></div>
        <div className="ctaButtons"><a className="primary" href={wa} target="_blank" rel="noreferrer">WhatsApp 021-35844947</a><a className="secondary" href="tel:+922135844947">Call now</a></div>
      </section>
    </main>

    <footer className="wrap"><div className="brand"><span className="brandDot"></span><span>Jimmy's Studio</span></div><p>Demo website concept • PHOTOGRAPHY • DHA PHASE 5, KARACHI</p></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />);
