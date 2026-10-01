*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#F9FAFB; --surface:#FFFFFF; --text:#0B1220; --muted:#6B7280;
  --hairline:#E5E7EB; --black:#0B1220; --on-black:#FFFFFF; --link:#2563EB;
  --accent:#ef4444; --ok:#16a34a;
  --font:'Instrument Sans',ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  --font-display:'Poppins',var(--font);
}
html,body{background:var(--bg)}
body{font-family:var(--font);color:var(--text);min-height:100vh;-webkit-font-smoothing:antialiased;display:flex;flex-direction:column;text-rendering:optimizeSpeed}
a{color:inherit;text-decoration:none}
button{font-family:inherit;cursor:pointer}
img{max-width:100%}

.hdr{width:100%;border-bottom:1px solid var(--hairline);background:var(--surface)}
.wrap{width:100%;max-width:1152px;margin:0 auto;padding:0 24px}
.hdr-row{display:flex;align-items:center;justify-content:space-between;padding:14px 0}
.logo{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-display);font-weight:800;font-size:24px;letter-spacing:-0.04em;color:var(--text);line-height:1}
.logo .dot{width:10px;height:10px;border-radius:50%;background:linear-gradient(150deg,#3b82f6,#2563eb);box-shadow:0 2px 6px rgba(37,99,235,.45)}
.upload{display:inline-flex;align-items:center;gap:7px;background:var(--black);color:var(--on-black);font-size:15px;font-weight:700;border:0;border-radius:100px;padding:8px 20px;transition:opacity .15s}
.upload:hover{opacity:.85}
.upload svg{width:16px;height:16px}

.main{flex:1;width:100%;max-width:920px;margin:0 auto;padding:24px 16px 0}

.player{position:relative;width:100%;aspect-ratio:16/9;background:#0B1220;border-radius:14px;overflow:hidden;contain:content}
.video{display:block;width:100%;height:100%;object-fit:contain;background:#000;outline:none;-webkit-user-select:none;user-select:none}

.poster{position:absolute;inset:0;z-index:1;background:#0B1220 center/cover no-repeat;transition:opacity .25s}
.poster.blur{filter:blur(14px);transform:scale(1.08)}
.poster::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,18,32,.15),rgba(11,18,32,.45))}
.player[data-state="playing"] .poster,.player[data-state="paused"] .poster{opacity:0;visibility:hidden}

.bigplay{position:absolute;inset:0;margin:auto;width:76px;height:76px;z-index:3;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.16);backdrop-filter:blur(2px);border:0;border-radius:9999px;color:#fff;box-shadow:0 6px 24px rgba(0,0,0,.35);transition:background .15s,transform .15s,opacity .2s}
.bigplay:hover{background:rgba(255,255,255,.26);transform:scale(1.05)}
.bigplay svg{width:34px;height:34px;margin-left:3px}
.player[data-state="playing"] .bigplay{opacity:0;pointer-events:none}

.play-hint{position:absolute;left:0;right:0;bottom:18px;z-index:3;text-align:center;color:#fff;font-size:13px;font-weight:600;letter-spacing:.01em;text-shadow:0 1px 3px rgba(0,0,0,.5);pointer-events:none;transition:opacity .2s}
.player[data-state="playing"] .play-hint,.player[data-state="paused"] .play-hint{opacity:0}

.flash{position:absolute;inset:0;margin:auto;width:84px;height:84px;z-index:4;display:flex;align-items:center;justify-content:center;background:rgba(11,18,32,.55);border-radius:9999px;color:#fff;pointer-events:none;opacity:0}
.flash svg{width:38px;height:38px}
.flash.go{animation:flash .55s ease-out}
@keyframes flash{0%{opacity:.9;transform:scale(.7)}100%{opacity:0;transform:scale(1.35)}}

.spin{position:absolute;inset:0;margin:auto;width:44px;height:44px;z-index:4;border:3px solid rgba(255,255,255,.25);border-top-color:#fff;border-radius:9999px;animation:spin .8s linear infinite}
.spin[hidden]{display:none}
@keyframes spin{to{transform:rotate(360deg)}}

/* ── PERBAIKAN UTAMA: TRANSISI SMOOTH CONTROLS VISIBILITY ── */
.controls{
  position:absolute;
  inset-inline:0;
  bottom:0;
  z-index:5;
  display:flex;
  flex-direction:column;
  gap:4px;
  padding:48px 16px 10px;
  color:#fff;
  background:linear-gradient(to top,rgba(0,0,0,.85),rgba(0,0,0,.45) 45%,transparent);
  opacity:1;
  visibility:visible;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

/* KELAS PEMICU SEMBUNYI OTOMATIS (AUTO-HIDE) */
.player.hide-controls .controls {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

/* Sembunyikan Cursor Mouse di Desktop Saat Menu Hilang */
.player.hide-controls {
  cursor: none;
}

.scrub{position:relative;height:14px;cursor:pointer;user-select:none;touch-action:none}
.track{position:absolute;inset-inline:0;top:50%;height:4px;transform:translateY(-50%);background:rgba(255,255,255,.25);border-radius:9999px;transition:height .1s}
.scrub:hover .track{height:6px}
.buffered{position:absolute;inset-block:0;left:0;width:0;background:rgba(255,255,255,.4);border-radius:9999px}
.progress{position:absolute;inset-block:0;left:0;width:0;background:var(--accent);border-radius:9999px}
.scrub-thumb{position:absolute;top:50%;left:0;width:13px;height:13px;transform:translate(-50%,-50%) scale(0);background:var(--accent);border-radius:9999px;transition:transform .1s}
.scrub:hover .scrub-thumb{transform:translate(-50%,-50%) scale(1)}

.cbar{display:flex;align-items:center;gap:12px;font-size:14px}
.cbtn{display:flex;align-items:center;justify-content:center;width:42px;height:42px;flex-shrink:0;background:none;border:0;border-radius:6px;color:#fff;transition:background .15s}
.cbtn:hover{background:rgba(255,255,255,.12)}
.ic{width:26px;height:26px;color:#fff;filter:drop-shadow(0 1px 2px rgba(0,0,0,.55))}
.ic[hidden]{display:none}

.vol{display:flex;align-items:center}
.vrange{width:0;height:4px;margin:0;appearance:none;-webkit-appearance:none;background:rgba(255,255,255,.25);border-radius:9999px;opacity:0;cursor:pointer;transition:width .2s,opacity .2s,margin .2s;overflow:hidden}
.vol:hover .vrange{width:72px;margin-left:4px;opacity:1}
.vrange::-webkit-slider-thumb{-webkit-appearance:none;width:12px;height:12px;border-radius:9999px;background:#fff;box-shadow:-200px 0 0 200px #fff}
.vrange::-moz-range-thumb{width:12px;height:12px;border:0;border-radius:9999px;background:#fff}

.time{font-size:13px;font-variant-numeric:tabular-nums;color:rgba(255,255,255,.9)}
.cright{margin-left:auto;display:flex;align-items:center;gap:4px;position:relative}

.menu{position:absolute;right:0;bottom:44px;min-width:132px;background:rgba(20,20,20,.96);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:6px;display:flex;flex-direction:column;gap:2px;box-shadow:0 8px 28px rgba(0,0,0,.5)}
.menu[hidden]{display:none}
.menu-title{font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:rgba(255,255,255,.5);padding:4px 10px 6px}
.speed{text-align:left;background:none;border:0;color:#fff;font-size:13px;padding:7px 10px;border-radius:6px}
.speed:hover{background:rgba(255,255,255,.1)}
.speed[data-active="true"]{color:var(--accent);font-weight:600}

.info{padding:20px 2px 0}
.v-title{font-family:var(--font-display);font-size:22px;font-weight:800;letter-spacing:-0.02em;color:var(--text);word-break:break-word;line-height:1.25}
.v-meta{margin-top:7px;font-size:14px;color:var(--muted);display:flex;flex-wrap:wrap;gap:6px 10px}
.actions{margin-top:18px;display:flex;gap:10px;flex-wrap:wrap}
.act{display:inline-flex;align-items:center;gap:8px;background:var(--surface);color:var(--text);border:1px solid var(--hairline);border-radius:100px;padding:9px 18px;font-size:14px;font-weight:600;transition:border-color .15s,background .15s}
.act:hover{border-color:var(--black);background:var(--bg)}
.act svg{width:17px;height:17px}

.ftr{margin-top:32px;padding:24px 32px 28px;display:flex;align-items:center;justify-content:center;gap:28px;font-size:14px}
.ftr a{color:var(--muted);transition:color .15s}
.ftr a:hover{color:var(--text)}

@media(max-width:580px){
  .wrap{padding:0 16px}.logo{font-size:22px}.main{padding:14px 12px 0}
  .vol:hover .vrange{width:0;opacity:0;margin-left:0}
  .cbar{gap:8px}
  .ftr{padding:20px 16px;gap:22px;font-size:13px}
}

.share-wrap { position: relative; }
.share-pop {
  position: absolute; left: 0; top: calc(100% + 8px); z-index: 30;
  width: 220px; padding: 6px;
  background: var(--surface); border: 1px solid rgba(15,23,42,0.1);
  border-radius: 14px; box-shadow: 0 12px 34px rgba(15,23,42,0.18);
  display: flex; flex-direction: column; gap: 2px;
  animation: sharePopIn .14s ease-out;
}
.share-pop[hidden] { display: none; }
@keyframes sharePopIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
.share-opt {
  display: flex; align-items: center; gap: 11px;
  padding: 9px 10px; border: none; background: none; border-radius: 9px;
  font-family: var(--font); font-size: 0.9rem; font-weight: 600;
  color: var(--text); cursor: pointer; text-decoration: none; width: 100%; text-align: left;
  transition: background .13s;
}
.share-opt:hover { background: var(--bg); }
.share-ic { display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 9px; flex-shrink: 0; }
.share-ic svg { width: 16px; height: 16px; }

.related{padding:30px 2px 0;border-top:1px solid var(--hairline);margin-top:28px;content-visibility:auto;contain-intrinsic-size:1px 600px}
.related-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
.related-title{font-family:var(--font-display);font-size:18px;font-weight:800;letter-spacing:-0.01em;color:var(--text)}
.autoplay{display:inline-flex;align-items:center;gap:9px;background:none;border:0;color:var(--muted);font-size:13px;font-weight:600;padding:0}
.switch{position:relative;width:38px;height:22px;border-radius9999px;background:var(--hairline);transition:background .18s;flex-shrink:0}
.autoplay[aria-checked="true"] .switch{background:var(--black)}
.knob{position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:9999px;background:#fff;box-shadow:0 1px 2px rgba(11,18,32,.25);transition:transform .18s}
.autoplay[aria-checked="true"] .knob{transform:translateX(16px)}

.related-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:20px 16px}
.rel-card{display:block;cursor:pointer}
.rel-thumb{position:relative;width:100%;aspect-ratio:16/10;background:#0B1220;border:1px solid var(--hairline);border-radius:12px;overflow:hidden;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 2px rgba(15,23,42,.05),0 10px 26px rgba(15,23,42,.06);transition:transform .2s,box-shadow .2s}
.rel-card:hover .rel-thumb{transform:translateY(-3px);box-shadow:0 4px 10px rgba(37,99,235,.12),0 18px 40px rgba(37,99,235,.16)}
.rel-thumb img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .3s}
.rel-card:hover .rel-thumb img{transform:scale(1.05)}
.rel-ph{color:rgba(255,255,255,.2)}.rel-ph svg{width:40px;height:40px}
.rel-thumb::after{content:"";position:absolute;inset:0;margin:auto;width:48px;height:48px;border-radius:9999px;background:rgba(239,68,68,.92) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z'/%3E%3C/svg%3E") center/22px no-repeat;box-shadow:0 6px 20px rgba(239,68,68,.5);opacity:0;transform:scale(.85);transition:opacity .18s,transform .18s;pointer-events:none}
.rel-card:hover .rel-thumb::after{opacity:1;transform:scale(1)}
.rel-dur{position:absolute;right:7px;bottom:7px;z-index:1;background:rgba(11,18,32,.82);color:#fff;font-size:11px;font-weight:600;padding:2px 7px;border-radius:5px;font-variant-numeric:tabular-nums}
.rel-info{padding:9px 2px 0}
.rel-title{font-family:var(--font-display);font-size:14px;font-weight:600;line-height:1.3;letter-spacing:-0.01em;color:var(--text);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.rel-meta{margin-top:4px;font-size:12.5px;color:var(--muted)}

.rel-sponsored .rel-thumb{background:linear-gradient(150deg,#1e3a8a,#0B1220 78%);border-color:rgba(59,130,246,.35)}
.rel-sponsored .rel-thumb::after{display:none}
.rel-spon-bg{position:absolute;inset:0;background:radial-gradient(circle at 70% 28%,rgba(59,130,246,.5),transparent 62%)}
.rel-badge{position:absolute;left:7px;top:7px;z-index:2;background:#F5C542;color:#0B1220;font-size:10px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;padding:3px 8px;border-radius:6px;box-shadow:0 2px 8px rgba(0,0,0,.25)}
.rel-spon-cta{position:absolute;inset:0;margin:auto;width:54px;height:54px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.18);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);border-radius:9999px;color:#fff;box-shadow:0 6px 20px rgba(37,99,235,.45);transition:transform .18s,background .18s}
.rel-sponsored:hover .rel-spon-cta{transform:scale(1.06);background:rgba(255,255,255,.28)}
.rel-spon-cta svg{width:24px;height:24px}
.rel-spon-meta{display:inline-flex;align-items:center;gap:5px;color:#b45309;font-weight:600}
.rel-spon-meta::before{content:"";width:6px;height:6px;border-radius:50%;background:#F5A623}

.next-ov{position:absolute;inset:0;z-index:6;display:flex;align-items:center;justify-content:center;background:rgba(11,18,32,.72);backdrop-filter:blur(4px)}
.next-ov[hidden]{display:none}
.next-card{width:100%;max-width:340px;text-align:center;color:#fff;padding:20px}
.next-label{font-size:13px;font-weight:600;color:rgba(255,255,255,.7);margin-bottom:12px}
.next-label span{color:#fff;font-variant-numeric:tabular-nums}
.next-thumb{width:160px;aspect-ratio:16/10;margin:0 auto 12px;border-radius:10px;overflow:hidden;background:#000;border:1px solid rgba(255,255,255,.16)}
.next-thumb img{width:100%;height:100%;object-fit:cover;display:block}
.next-title{font-size:15px;font-weight:700;line-height:1.3;margin-bottom:16px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.next-actions{display:flex;gap:10px;justify-content:center}
.next-btn{border-radius:100px;padding:9px 20px;font-size:14px;font-weight:700;border:1px solid transparent;transition:opacity .15s,background .15s,border-color .15s}
.next-btn.solid{background:#fff;color:var(--black)}
.next-btn.solid:hover{opacity:.88}
.next-btn.ghost{background:none;color:#fff;border-color:rgba(255,255,255,.35)}
.next-btn.ghost:hover{background:rgba(255,255,255,.12)}

@media(max-width:580px){
  .related-grid{grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:16px 12px}
}
@media (prefers-reduced-motion: reduce){
  *{animation-duration:.001ms!important;transition-duration:.001ms!important}
}
