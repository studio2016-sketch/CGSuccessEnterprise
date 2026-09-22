const services = [
  { n: "01", title: "Strategic Consulting", desc: "Clarity, strategy and solutions for complex challenges.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000&q=85" },
  { n: "02", title: "Event Production", desc: "Extraordinary experiences designed to inspire action.", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1000&q=85" },
  { n: "03", title: "Organizational Systems", desc: "People, processes and structures built for what comes next.", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1000&q=85" },
];
const sectors = ["Media & Live Events", "Government", "Philanthropy", "Social Impact"];
export default function Home() {
  return <>
    <header className="header">
      <a href="/" className="logo" aria-label="CG Enterprises home"><span className="monogram">CG</span><span>ENTERPRISES<small>STRATEGY · PEOPLE · EXPERIENCES · IMPACT</small></span></a>
      <nav aria-label="Primary navigation"><a href="/about">ABOUT</a><a href="/expertise">EXPERTISE</a><a href="#sectors">SECTORS</a><a href="/boutique">BOUTIQUE</a><a href="/contact">CONTACT</a></nav>
      <a className="goldButton topCta" href="/contact">WORK WITH US ↗</a>
    </header>
    <main>
      <section className="hero">
        <div className="heroCopy"><p className="eyebrow">VISION INTO IMPACT <span className="rule"/></p><h1>STRATEGY<br/>FOR A BRIGHTER<br/>TOMORROW.</h1><p className="lead">We help mission-driven organizations, brands and changemakers bring bold ideas to life through strategic consulting, event production and organizational systems.</p><a className="goldButton" href="/expertise">EXPLORE OUR EXPERTISE <span>→</span></a></div>
        <div className="heroImage" role="img" aria-label="Sunlit architectural interior"><span className="heroAside">PEOPLE<br/>IDEAS<br/>PARTNERSHIPS<br/>EXPERIENCES<br/>LASTING CHANGE</span></div>
      </section>
      <section className="expertise" aria-labelledby="expertise-heading"><div className="sectionIntro"><p className="eyebrow">WHAT WE DO</p><h2 id="expertise-heading">Thoughtful strategy.<br/><em>Exceptional execution.</em></h2></div><div className="serviceGrid">{services.map(s => <a href="/expertise" className="service" key={s.n}><div className="serviceImage" style={{backgroundImage:`url("${s.image}")`}} role="img" aria-label={s.title}/><div className="serviceMeta"><span>{s.n} / EXPERTISE</span><span>↗</span></div><h3>{s.title}</h3><p>{s.desc}</p></a>)}</div></section>
      <section className="statement"><p className="eyebrow">OUR PHILOSOPHY</p><h2>Where vision meets <em>the ability to deliver.</em></h2><p>We connect strategic thinking with exceptional execution, helping organizations create meaningful experiences and sustainable impact.</p><a className="textLink" href="/about">DISCOVER OUR APPROACH ↗</a></section>
      <section id="sectors" className="sectors"><div><p className="eyebrow">THE SECTORS WE SERVE</p><h2>Impact beyond<br/><em>boundaries.</em></h2></div><div className="sectorList">{sectors.map((name,i)=><div key={name}><span>0{i+1}</span><strong>{name}</strong><span aria-hidden="true">↗</span></div>)}</div></section>
      <section className="boutique"><div className="boutiqueImage" role="img" aria-label="Curated boutique lifestyle vignette"/><div className="boutiqueCopy"><p className="eyebrow">THE CG EDIT / BOUTIQUE BY CHARMIN</p><h2>Beauty<br/>with purpose.</h2><p>A curated shopping experience for a more intentional life. Discover the collection through our Etsy boutique.</p><a className="goldButton" href="https://www.etsy.com/shop/BoutiqueByCharmin" target="_blank" rel="noopener noreferrer">EXPLORE THE BOUTIQUE <span>↗</span></a><small>Purchases are completed securely on Etsy.</small></div></section>
      <section className="contact" id="contact"><div><p className="eyebrow">LET'S BUILD WHAT'S NEXT</p><h2>A more impactful<br/><em>tomorrow is possible.</em></h2><p>Tell us what you're building and let's start a conversation.</p></div><form action="mailto:info@cgsuccessenterprise.com" method="post" encType="text/plain"><label>FIRST NAME<input name="firstName" required autoComplete="given-name"/></label><label>LAST NAME<input name="lastName" required autoComplete="family-name"/></label><label>EMAIL<input type="email" name="email" required autoComplete="email"/></label><label>SUBJECT<input name="subject" required/></label><label className="full">MESSAGE<textarea name="message" rows={5} required/></label><button className="goldButton" type="submit">PREPARE EMAIL <span>↗</span></button><p className="formNote">This opens your email app. Secure website form submission will be added before launch; the contact email is subject to verification.</p></form></section>
    </main>
    <footer><a href="/" className="logo"><span className="monogram">CG</span><span>ENTERPRISES<small>PEOPLE · PURPOSE · PROGRESS</small></span></a><p>STRATEGIC PARTNERSHIPS.<br/>EXTRAORDINARY OUTCOMES.</p><span>© {new Date().getFullYear()} CG ENTERPRISES</span></footer>
  </>;
}