"use client";

import { useState } from "react";

const services = [
  ["01", "品牌策略", "把模糊的想法，變成有方向的品牌語言。"],
  ["02", "社群行銷", "從一篇貼文到一整個宇宙，讓對的人想加入。"],
  ["03", "創意企劃", "想一個讓人停下來、願意分享、記得很久的點子。"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main>
      <nav className="nav" aria-label="主要導覽">
        <a className="brand" href="#top" aria-label="有趣企劃首頁">FUN PROJECT<span>®</span></a>
        <div className="nav-links">
          <a href="#about">關於我們</a><a href="#services">服務項目</a><a href="#contact">合作洽詢</a>
        </div>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="開啟選單">MENU <i /></button>
      </nav>
      {menuOpen && <div className="mobile-menu"><a onClick={() => setMenuOpen(false)} href="#about">關於我們</a><a onClick={() => setMenuOpen(false)} href="#services">服務項目</a><a onClick={() => setMenuOpen(false)} href="#contact">合作洽詢</a></div>}

      <section id="top" className="hero">
        <div className="hero-copy"><p className="eyebrow">TAIPEI · TAIWAN · EVERYWHERE</p><h1>讓好玩的<br /><em>被看見。</em></h1><p className="intro">我們是有趣企劃，一間相信創意可以帶來改變的品牌與行銷顧問公司。</p><a href="#contact" className="round-link">開始一個有趣的計畫 <b>↘</b></a></div>
        <div className="hero-art" aria-label="有趣企劃品牌識別">
          <div className="blob blob-a" /><div className="blob blob-b" /><div className="spark">✦</div><div className="orbit">MAKE<br />IT<br />MATTER</div>
          <img src="/logo.png" alt="有趣企劃 FUN PROJECT" />
        </div>
        <div className="scroll">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section id="about" className="manifesto"><p className="eyebrow">WHAT WE BELIEVE</p><h2>有趣，不只是讓人笑。<br />是讓人<strong>在乎。</strong></h2><p className="body-copy">我們用策略找到問題的核心，用創意把答案說得動人。從品牌的第一句話，到被大家分享的那一刻，我們陪你把每個細節做得更有意思。</p><div className="tape">GOOD IDEAS DESERVE A BIGGER STAGE — GOOD IDEAS DESERVE A BIGGER STAGE —</div></section>

      <section id="services" className="services"><div className="services-heading"><p className="eyebrow">HOW WE PLAY</p><h2>把靈感<br />做成影響力。</h2></div><div className="service-list">{services.map(([num, title, text]) => <article className="service" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p><b>↗</b></article>)}</div></section>

      <section className="statement"><p>我們不追著<br />趨勢跑。</p><p>我們做出<br /><em>值得追的</em>事。</p><div className="sun">✳</div></section>

      <section id="contact" className="contact"><p className="eyebrow">LET&apos;S MAKE SOME NOISE</p><h2>有一個好點子？<br /><em>我們想聽。</em></h2><a href="mailto:hello@funproject.tw" className="email">hello@funproject.tw <span>↗</span></a><p className="contact-small">台北市 · 服務全世界<br />© 2026 FUN PROJECT CREATIVE CONSULTANCY</p></section>
    </main>
  );
}
