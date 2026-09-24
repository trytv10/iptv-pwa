/*
 * intro.js — Intro estilo Netflix / Disney+ / Prime para la PWA "Guía de Canales"
 * Duración total: ~3 segundos. Autocontenido: no depende de nada más.
 *
 * Uso: en index.html, dentro de <head> y ANTES de los otros scripts:
 *   <script src="intro.js"></script>
 */
(function () {
  // ====== CONFIGURACIÓN (tocá acá) ======
  var CONFIG = {
    mark: 'TV',                 // texto grande del logo
    title: 'GUÍA DE CANALES',   // texto chico debajo
    accent: '#19c3b1',          // color principal del logo
    bg: '#0B1418',              // fondo (mismo que meta theme-color)
    duration: 3000,             // ms totales (entre 2000 y 4000)
    oncePerSession: true        // true = solo la 1ra vez por sesión; false = siempre
  };
  // ======================================

  try {
    if (CONFIG.oncePerSession) {
      if (sessionStorage.getItem('introShown')) return;
      sessionStorage.setItem('introShown', '1');
    }
  } catch (e) {}

  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var D = reduce ? 1200 : CONFIG.duration;
  var fadeStart = Math.max(D - 600, 0);

  var css =
    '#intro-splash{position:fixed;inset:0;z-index:2147483647;background:' + CONFIG.bg + ';' +
    'display:flex;align-items:center;justify-content:center;overflow:hidden;' +
    'animation:introFade .6s ease-in ' + fadeStart + 'ms forwards}' +

    '#intro-splash .i-wrap{display:flex;flex-direction:column;align-items:center;gap:14px;' +
    'animation:' + (reduce ? 'none' : 'introZoom .6s cubic-bezier(.6,0,.9,.4) ' + fadeStart + 'ms forwards') + '}' +

    /* Logo con brillo que barre de izquierda a derecha */
    '#intro-splash .i-mark{font:900 clamp(72px,22vw,180px)/1 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;' +
    'letter-spacing:.04em;display:flex;align-items:center;gap:.12em;' +
    'background:linear-gradient(100deg,' + CONFIG.accent + ' 42%,#fff 50%,' + CONFIG.accent + ' 58%);' +
    'background-size:260% 100%;background-position:120% 0;' +
    '-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;' +
    'opacity:0;transform:scale(.7);' +
    'filter:drop-shadow(0 0 28px ' + CONFIG.accent + '66);' +
    'animation:introPop .8s cubic-bezier(.2,.8,.2,1) .1s forwards,introShine 1.2s ease-out .6s forwards}' +

    '#intro-splash .i-title{font:600 clamp(11px,3vw,20px)/1 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;' +
    'color:#cfe3e6;opacity:0;letter-spacing:.2em;' +
    'animation:introTitle 1s ease-out .9s forwards}' +

    '@keyframes introPop{to{opacity:1;transform:scale(1)}}' +
    '@keyframes introShine{to{background-position:-20% 0}}' +
    '@keyframes introTitle{to{opacity:1;letter-spacing:.42em}}' +
    '@keyframes introZoom{to{transform:scale(1.7)}}' +
    '@keyframes introFade{to{opacity:0}}';

  var style = document.createElement('style');
  style.textContent = css;
  document.documentElement.appendChild(style);

  var el = document.createElement('div');
  el.id = 'intro-splash';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML =
    '<div class="i-wrap">' +
      '<div class="i-mark">&#9654;&#xFE0E; ' + CONFIG.mark + '</div>' +
      '<div class="i-title">' + CONFIG.title + '</div>' +
    '</div>';
  document.documentElement.appendChild(el);

  var done = false;
  function close() {
    if (done) return;
    done = true;
    el.style.transition = 'opacity .25s';
    el.style.opacity = '0';
    setTimeout(function () { el.remove(); style.remove(); }, 300);
  }

  setTimeout(close, D + 50);          // cierre automático
  el.addEventListener('click', close); // tocar/click para saltar
  document.addEventListener('keydown', close, { once: true }); // cualquier tecla / control remoto
})();
