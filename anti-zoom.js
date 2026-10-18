/* anti-zoom.js — bloque le zoom dans l'application Vintrack
   À inclure dans index.html avec : <script src="anti-zoom.js"></script> */
(function () {
  // 1. Viewport : interdit le zoom
  var vp = document.querySelector('meta[name="viewport"]');
  if (!vp) { vp = document.createElement('meta'); vp.name = 'viewport'; document.head.appendChild(vp); }
  vp.content = 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover';

  // 2. Styles : pas de zoom au double-tap, et champs en 16px (sinon l'iPhone zoome quand on tape dedans)
  var st = document.createElement('style');
  st.textContent =
    'html,body{touch-action:pan-x pan-y;-webkit-text-size-adjust:100%;text-size-adjust:100%}' +
    '*{touch-action:manipulation}' +
    'input,select,textarea{font-size:16px!important}';
  document.head.appendChild(st);

  var o = { passive: false };

  // 3. Pincement à deux doigts (iPhone / Safari)
  ['gesturestart', 'gesturechange', 'gestureend'].forEach(function (e) {
    document.addEventListener(e, function (ev) { ev.preventDefault(); }, o);
  });
  document.addEventListener('touchmove', function (ev) {
    if (ev.touches.length > 1 || (ev.scale && ev.scale !== 1)) ev.preventDefault();
  }, o);

  // 4. Double-tap rapide
  var last = 0;
  document.addEventListener('touchend', function (ev) {
    var t = Date.now();
    if (t - last < 300 && !/INPUT|TEXTAREA|SELECT/.test(ev.target.tagName)) ev.preventDefault();
    last = t;
  }, o);

  // 5. Ordinateur : Ctrl + molette et Ctrl + / - / 0
  document.addEventListener('wheel', function (ev) { if (ev.ctrlKey) ev.preventDefault(); }, o);
  document.addEventListener('keydown', function (ev) {
    if ((ev.ctrlKey || ev.metaKey) && /^(\+|-|=|0)$/.test(ev.key)) ev.preventDefault();
  });
})();
