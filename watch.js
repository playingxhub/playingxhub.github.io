(function () {
  function $(id) { return document.getElementById(id); }

  var params = new URLSearchParams(location.search);
  var srcParam = params.get('src') || '';
  var vid = params.get('v') || params.get('id') || '';
  var isId = /^[A-Za-z0-9]{6,32}$/.test(vid);
  var CDN = 'https://cdn2.videy.co/';
  var videoUrl = isId ? CDN + vid + '.mp4' : '';

  var video = $('video');
  var titleEl = $('videoTitle');

  document.documentElement.lang = 'en';
  document.title = vid ? 'Watch On Slicevidey - ' + vid : 'Watch On Slicevidey';
  if (titleEl && vid) titleEl.textContent = vid;

  try {
    if (sessionStorage.getItem('sd_admin_pw')) document.body.classList.add('is-admin');
  } catch (e) {}

  window.copyAdminVidId = function () {
    var text = ($('adminVidId') && $('adminVidId').textContent) || vid || '';
    if (!text || text === '-') return;
    navigator.clipboard.writeText(text).then(function () {
      alert('Video ID copied: ' + text);
    }).catch(function () {
      prompt('Copy ID', text);
    });
  };

  var panel = $('adminVideoPanel');
  var isAdmin = false;
  try { isAdmin = !!sessionStorage.getItem('sd_admin_pw'); } catch (e) {}
  if (panel && isAdmin && isId) {
    panel.hidden = false;
    panel.style.display = 'block';
    if ($('adminVidId')) $('adminVidId').textContent = vid;
    if ($('adminStorageKey')) $('adminStorageKey').textContent = '-';
    if ($('adminViews')) $('adminViews').textContent = '-';
    if ($('adminUploadedAt')) $('adminUploadedAt').textContent = '-';
    if ($('adminDirectLink')) {
      $('adminDirectLink').href = videoUrl;
      $('adminDirectLink').textContent = videoUrl;
    }
  }

  if (/^https?:\/\//i.test(srcParam)) {
    video.src = srcParam;
    video.load();
  } else if (isId && video) {
    video.src = videoUrl;
    video.load();
  }
})();