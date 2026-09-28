/*
 * intro.js — Intro de arranque para la PWA "Guía de Canales".
 *
 * - Autocontenida: no depende de styles.css ni de nada más.
 * - Coherente con la identidad de la app: rojo #e50914, Oswald + Inter.
 * - Se salta con click, tap, cualquier tecla o botón del control remoto.
 * - Respeta prefers-reduced-motion.
 * - Se muestra una sola vez por sesión (sessionStorage).
 *
 * Uso: incluir en <head> ANTES de los otros scripts:
 *   <script src="intro.js"></script>
 */
(function () {
  // ====== CONFIGURACIÓN ======
  var CONFIG = {
    marca: 'TV',                    // texto grande del logo (junto al ▶)
    titulo: 'GUÍA DE CANALES',      // subtítulo debajo del logo
    color: '#e50914',               // rojo de la app
    fondo: '#0B1418',               // mismo que meta theme-color
    duracion: 2400,                 // ms totales
    unaVezPorSesion: true,          // true = solo la 1ra vez por sesión
    mostrarHint: true               // muestra "tocá para saltar"
  };
  // ============================

  // Si ya se mostró en esta sesión, salir
  try {
    if (CONFIG.unaVezPorSesion) {
      if (sessionStorage.getItem('introShown')) return;
      sessionStorage.setItem('introShown', '1');
    }
  } catch (e) {}

  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var D = reduce ? 1200 : CONFIG.duracion;
  var fadeStart = Math.max(D - 500, 0);

  // ====== CSS inyectado (una sola vez) ======
  var css =
    // Fondo y layout
    '#intro-splash{position:fixed;inset:0;z-index:2147483647;background:' + CONFIG.fondo + ';' +
    'display:flex;align-items:center;justify-content:center;overflow:hidden;' +
    'font-family:"Inter",system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;' +
    'animation:introFade .5s ease-in ' + fadeStart + 'ms forwards;' +
    '-webkit-tap-highlight-color:transparent;user-select:none;cursor:pointer}' +

    // "Glow" rojo sutil detrás del logo
    '#intro-splash::before{content:"";position:absolute;width:60vmin;height:60vmin;' +
    'background:radial-gradient(circle,' + CONFIG.color + '33 0%,transparent 70%);' +
    'filter:blur(20px);animation:introGlow 2s ease-in-out infinite alternate;pointer-events:none}' +

    // Wrapper que hace zoom al final
    '#intro-splash .i-wrap{position:relative;display:flex;flex-direction:column;align-items:center;gap:18px;' +
    'animation:' + (reduce ? 'none' : 'introZoom .55s cubic-bezier(.6,0,.9,.4) ' + fadeStart + 'ms forwards') + '}' +

    // Logo: ▶ + TV, con brillo que barre
    '#intro-splash .i-mark{display:flex;align-items:center;gap:.18em;' +
    'font-family:"Oswald","Inter",system-ui,sans-serif;font-weight:600;' +
    'font-size:clamp(72px,22vw,180px);line-height:1;letter-spacing:.03em;' +
    'background:linear-gradient(100deg,' + CONFIG.color + ' 40%,#ffffff 50%,' + CONFIG.color + ' 60%);' +
    'background-size:260% 100%;background-position:120% 0;' +
    '-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;' +
    'opacity:0;transform:scale(.72);' +
    'filter:drop-shadow(0 0 32px ' + CONFIG.color + '55);' +
    'animation:introPop .7s cubic-bezier(.2,.8,.2,1) .05s forwards,introShine 1.1s ease-out .5s forwards}' +

    // El "▶" rojo del logo (replica el badge del header)
    '#intro-splash .i-play{display:inline-flex;align-items:center;justify-content:center;' +
    'width:.62em;height:.62em;background:' + CONFIG.color + ';border-radius:.10em;' +
    'color:#fff;-webkit-text-fill-color:#fff;font-size:.55em;' +
    'box-shadow:0 0 24px ' + CONFIG.color + '88,0 0 60px ' + CONFIG.color + '44;' +
    'transform:translateY(.02em)}' +

    // Subtítulo
    '#intro-splash .i-title{font-weight:600;font-size:clamp(11px,2.4vw,16px);' +
    'color:#cfe3e6;opacity:0;letter-spacing:.32em;text-transform:uppercase;' +
    'animation:introTitle 1s ease-out .75s forwards}' +

    // Hint "tocá para saltar"
    '#intro-splash .i-hint{position:absolute;bottom:max(24px,env(safe-area-inset-bottom,0px));' +
    'font-size:clamp(10px,2.2vw,13px);color:#94a3b8;opacity:0;letter-spacing:.18em;' +
    'text-transform:uppercase;font-weight:500;' +
    'animation:introHint 1s ease-out 1s forwards}' +

    // Barra de progreso fina abajo
    '#intro-splash .i-progress{position:absolute;left:0;bottom:0;height:3px;width:100%;' +
    'background:rgba(255,255,255,.06);overflow:hidden}' +
    '#intro-splash .i-progress span{display:block;height:100%;width:0;background:' + CONFIG.color + ';' +
    'box-shadow:0 0 12px ' + CONFIG.color + ';' +
    'animation:introProgress ' + D + 'ms linear forwards}' +

    // Keyframes
    '@keyframes introPop{to{opacity:1;transform:scale(1)}}' +
    '@keyframes introShine{to{background-position:-20% 0}}' +
    '@keyframes introTitle{to{opacity:1;letter-spacing:.42em}}' +
    '@keyframes introHint{to{opacity:.65}}' +
    '@keyframes introZoom{to{transform:scale(1.6);opacity:.9}}' +
    '@keyframes introFade{to{opacity:0}}' +
    '@keyframes introGlow{from{transform:scale(.9);opacity:.7}to{transform:scale(1.08);opacity:1}}' +
    '@keyframes introProgress{to{width:100%}}' +

    // Accesibilidad: respeta reduced motion
    (reduce ? '*{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}' : '');

  var style = document.createElement('style');
  style.textContent = css;
  document.documentElement.appendChild(style);

  // ====== DOM ======
  var el = document.createElement('div');
  el.id = 'intro-splash';
  el.setAttribute('role', 'presentation');
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML =
    '<div class="i-wrap">' +
      '<div class="i-mark">' +
        '<span class="i-play">&#9654;&#xFE0E;</span>' +
        '<span>' + CONFIG.marca + '</span>' +
      '</div>' +
      '<div class="i-title">' + CONFIG.titulo + '</div>' +
    '</div>' +
    (CONFIG.mostrarHint ? '<div class="i-hint">Tocá para saltar</div>' : '') +
    '<div class="i-progress"><span></span></div>';

  document.documentElement.appendChild(el);

  // ====== Cierre (idempotente) ======
  var cerrado = false;
  function cerrar() {
    if (cerrado) return;
    cerrado = true;

    el.style.transition = 'opacity .28s ease';
    el.style.opacity = '0';

    // Avisa al resto de la app que la intro terminó (útil para coordinar)
    try {
      document.dispatchEvent(new CustomEvent('intro:done'));
    } catch (e) {}

    setTimeout(function () {
      el.remove();
      style.remove();
    }, 320);
  }

  // Cierre automático
  var timeoutId = setTimeout(cerrar, D + 60);

  // Cierre manual: click / tap / tecla / botón del control remoto
  function saltar() {
    clearTimeout(timeoutId);
    cerrar();
  }
  el.addEventListener('click', saltar);
  el.addEventListener('touchstart', saltar, { passive: true });
  document.addEventListener('keydown', saltar, { once: true });
  document.addEventListener('keyup', saltar, { once: true });

  // Cierre por visibilidad (si el usuario cambia de pestaña, no dejar colgado)
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) saltar();
  }, { once: true });
})();