/* Canva -> Pages CMS -> GitHub -> Cloudflare Pages. Public homepage content only. */
(async function () {
  'use strict';
  try {
    const r = await fetch('./site.json', {cache: 'no-cache'});
    if (!r.ok) throw new Error('Cannot load site.json');
    const s = await r.json();
    const set = (id, value, multiline) => {
      const el = document.getElementById(id);
      if (!el || typeof value !== 'string') return;
      el.textContent = value;
      if (multiline) el.style.whiteSpace = 'pre-line';
    };
    set('homeEyebrow',s.eyebrow);
    set('homeTagline',s.tagline);
    set('homeNoteTitle',s.note_title);
    set('homeNoteText',s.note_text,true);
    set('homeFeatureText',s.feature_text,true);
    set('homeFooterText',s.footer_text);
    const hex = x => typeof x === 'string' && /^#[a-fA-F0-9]{6}$/.test(x);
    if(hex(s.background_color)) document.documentElement.style.setProperty('--sage',s.background_color);
    if(hex(s.accent_color)) document.documentElement.style.setProperty('--lime',s.accent_color);
    const banner = document.getElementById('homeBanner');
    if (banner && typeof s.hero_image === 'string' && /^\/media\/[a-zA-Z0-9_./-]+\.(png|jpe?g|webp)$/i.test(s.hero_image) && !s.hero_image.includes('..')) {
      banner.src=s.hero_image;
      banner.alt=typeof s.hero_image_alt==='string'?s.hero_image_alt:'ภาพแบนเนอร์ 9lumine';
      banner.hidden=false;
    }
  } catch(e) { console.warn('Homepage uses built-in defaults:',e.message); }
})();
