// avatar parallax + reveal on scroll (moved from index.php)
document.addEventListener('DOMContentLoaded', function () {
  const wrap = document.getElementById('avatarWrap');
  const avatar = document.getElementById('avatar');
  if (wrap && avatar) {
    wrap.addEventListener('mousemove', (e) => {
      const rect = wrap.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1..1
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      const rx = (y) * 6;
      const ry = (x) * -8;
      wrap.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
      avatar.style.transform = `translateZ(12px) scale(1.03) rotateZ(${x*1.5}deg)`;
      wrap.style.boxShadow = `${-ry*1.6}px ${Math.abs(rx)*1.2}px 36px rgba(3,105,161,0.12)`;
    });
    wrap.addEventListener('mouseleave', () => {
      wrap.style.transform = '';
      avatar.style.transform = '';
      wrap.style.boxShadow = '';
    });
  }

  // reveal observer (existing)
  const reveals = document.querySelectorAll('[data-reveal]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => obs.observe(r));

  // Proximity hover: when cursor is near an element with .hoverable, add .is-hover-prox
  (function() {
    const items = Array.from(document.querySelectorAll('.hoverable'));
    if (!items.length) return;
    let raf = null;
    let mouse = {x:0,y:0};
    document.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX; mouse.y = e.clientY;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const THRESHOLD = 90; // px
        items.forEach(el => {
          const r = el.getBoundingClientRect();
          const cx = r.left + r.width/2;
          const cy = r.top + r.height/2;
          const dx = mouse.x - cx;
          const dy = mouse.y - cy;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < THRESHOLD) {
            el.classList.add('is-hover-prox');
          } else {
            el.classList.remove('is-hover-prox');
          }
        });
      });
    });
    // clean on leave
    document.addEventListener('mouseleave', () => {
      items.forEach(el => el.classList.remove('is-hover-prox'));
    });
  })();

  // Quick Message: open mailto or copy message
  const qmSend = document.getElementById('qm-send');
  const qmCopy = document.getElementById('qm-copy');
  const qmName = document.getElementById('qm-name');
  const qmEmail = document.getElementById('qm-email');
  const qmMessage = document.getElementById('qm-message');
  const qmFeedback = document.getElementById('qm-feedback');
  if (qmSend) {
    qmSend.addEventListener('click', (e) => {
      e.preventDefault();
      const name = (qmName && qmName.value.trim()) || 'Tanpa nama';
      const from = (qmEmail && qmEmail.value.trim()) || '';
      const body = encodeURIComponent(`Dari: ${name}${from ? ' <' + from + '>' : ''}\n\n${(qmMessage && qmMessage.value.trim()) || ''}`);
      const subject = encodeURIComponent('Pesan dari portofolio — ' + name);
      const mailto = `mailto:<?=htmlspecialchars($site['email'])?>?subject=${subject}&body=${body}`;
      // Try to open mail client
      window.location.href = mailto;
      if (qmFeedback) { qmFeedback.textContent = 'Membuka aplikasi email...'; setTimeout(()=>qmFeedback.textContent='',3000); }
    });
  }
});