/* 9lumine homepage: Pages CMS -> site.json. Supports Thai and Unicode media filenames. */
(async function () {
  'use strict';
  try {
    const response = await fetch('./site.json', { cache: 'no-cache' });
    if (!response.ok) throw new Error('Cannot load site.json');
    const site = await response.json();
    const setText = (id, value, multiline = false) => {
      const element = document.getElementById(id);
      if (!element || typeof value !== 'string') return;
      element.textContent = value;
      if (multiline) element.style.whiteSpace = 'pre-line';
    };
    setText('homeEyebrow', site.eyebrow);
    setText('homeTagline', site.tagline);
    setText('homeNoteTitle', site.note_title);
    setText('homeNoteText', site.note_text, true);
    setText('homeFeatureText', site.feature_text, true);
    setText('homeFooterText', site.footer_text);

    const isHex = (value) => typeof value === 'string' && /^#[0-9a-f]{6}$/i.test(value);
    if (isHex(site.background_color)) document.documentElement.style.setProperty('--sage', site.background_color);
    if (isHex(site.accent_color)) document.documentElement.style.setProperty('--lime', site.accent_color);

    const banner = document.getElementById('homeBanner');
    if (banner) {
      // Pages CMS paths can include Thai letters, spaces, and other Unicode characters.
      const path = typeof site.hero_image === 'string' ? site.hero_image.trim() : '';
      let validPath = false;
      if (path.startsWith('/media/') && !/[?#\\\u0000-\u001f]/.test(path)) {
        try {
          const decoded = decodeURIComponent(path);
          const segments = decoded.split('/');
          validPath = segments.length >= 3 && segments[0] === '' && segments[1] === 'media' &&
            segments.slice(2).every((segment) => segment !== '' && segment !== '.' && segment !== '..' && !segment.includes('\\')) &&
            /\.(?:png|jpe?g|webp)$/i.test(decoded);
        } catch (_) { validPath = false; }
      }
      if (validPath) {
        banner.onerror = function () {
          banner.hidden = true;
          console.warn('Banner not found. Check that this media file exists in GitHub:', path);
        };
        banner.onload = function () { banner.hidden = false; };
        banner.alt = typeof site.hero_image_alt === 'string' ? site.hero_image_alt : '9lumine banner';
        banner.src = path;
      } else {
        banner.hidden = true;
        if (path) console.warn('Unsupported banner path:', path);
      }
    }
  } catch (error) {
    console.warn('Homepage uses built-in defaults:', error.message);
  }
})();
