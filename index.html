<?php
// index.php - simple PHP templating with arrays of content

// Production-safe error handling & security headers
ini_set('display_errors', '0');
ini_set('log_errors', '1');
ini_set('error_log', __DIR__ . '/storage/logs/php-error.log');

// Force HTTPS (if site served via HTTPS) and secure headers
if ((!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || $_SERVER['SERVER_PORT'] == 443) {
  header('Strict-Transport-Security: max-age=31536000; includeSubDomains; preload');
}
header('X-Frame-Options: SAMEORIGIN');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer-when-downgrade');
header("Permissions-Policy: camera=(), microphone=(), geolocation=()");
header("X-XSS-Protection: 1; mode=block");
// Minimal Content-Security-Policy (tweak for your needs)
header("Content-Security-Policy: default-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; frame-ancestors 'self';");
session_start();
// Session hardening
session_regenerate_id(true);
ini_set('session.use_strict_mode', 1);
session_set_cookie_params([
  'lifetime' => 0,
  'path' => '/',
  'domain' => $_SERVER['HTTP_HOST'] ?? '',
  'secure' => isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
  'httponly' => true,
  'samesite' => 'Lax'
]);

// CONTENT (ganti sesuai kebutuhan)
$site = [
  'name' => 'WAQIAT TUR RACHMAT',
  'title' => 'JUNIOR SOFTWARE ENGINEER',
  'email' => 'waqiatturrachmat10@gmail.com',
  'github' => 'https://github.com/waqiatturrachmat10',
  'location' => 'Indramayu, Jawa Barat, Indonesia',
  'phone' => '082115810858'
];

$about = "Lulusan S1 Teknik Informatika Universitas Mandiri (Subang) yang memiliki ketertarikan tinggi pada bidang teknologi, pengembangan dan pengelolaan website. Teliti, bertanggung jawab, serta mampu beradaptasi dengan cepat terhadap perkembangan teknologi baru. Memiliki kemampuan komunikasi yang baik, berpikir logis, dan mampu bekerja sama secara efektif dalam tim untuk mencapai hasil yang optimal. Berminat bekerja di bidang software engineer.";

$principles = [
  'Vibe coding: praktik pengembangan perangkat lunak yang menggunakan kecerdasan buatan (AI).',
  'Kerjasama Tim: Mampu bekerja efektif dalam tim, berkolaborasi, untuk pencapaian bersama.',
  'Manajemen Waktu: Terampil mengatur prioritas dan menyelesaikan tugas dengan tepat waktu.',
  'Komunikasi: Menyampaikan ide dan informasi secara jelas dan efektif dalam presentasi.',
  'Kemampuan Beradaptasi: Cepat menyesuaikan diri dengan lingkungan kerja baru, teknologi, serta perubahan situasi.',
];

$skills = [
  'HTML', 'CSS', 'PHP', 'Javascript', 'Tailwind CSS', 'MySQL',
  'Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Canva', 'Capcut',
  'Kerjasama Tim', 'Manajemen Waktu', 'Komunikasi', 'Kemampuan Beradaptasi'
];

// tambahan: daftar logo skill (letakkan file SVG/PNG di assets/icons/)
$skillLogos = [
  ['file'=>'assets/icons/html.svg','name'=>'HTML'],
  ['file'=>'assets/icons/css3.svg','name'=>'CSS3'],
  ['file'=>'assets/icons/php.svg','name'=>'PHP'],
  ['file'=>'assets/icons/javascript.svg','name'=>'JavaScript'],
  ['file'=>'assets/icons/tailwind.svg','name'=>'Tailwind CSS'],
  ['file'=>'assets/icons/mysql.svg','name'=>'MySQL'],
  ['file'=>'assets/icons/canva.svg','name'=>'Canva'],
  ['file'=>'assets/icons/capcut.svg','name'=>'CapCut'],
  ['file'=>'assets/icons/msword.svg','name'=>'Microsoft Word'],
  ['file'=>'assets/icons/microsoftexcel.svg','name'=>'Microsoft Excel'],
  ['file'=>'assets/icons/powerpoint.svg','name'=>'Microsoft PowerPoint'],
];

// Dummy projects (akan buka tab baru ketika diklik)
$projects = [
  [
    'title' => 'Inventory Manager (Demo)',
    'desc' => 'Sistem manajemen inventaris sederhana dengan CRUD, filter, dan ekspor CSV.',
    'stack' => 'PHP, MySQL, Tailwind, JS',
    'url' => 'https://example.com/?project=inventory'
  ],
  [
    'title' => 'Blog CMS (Demo)',
    'desc' => 'CMS blogging ringan dengan editor, tagging, dan pagination.',
    'stack' => 'PHP, MySQL, Tailwind, JS',
    'url' => 'https://example.com/?project=blog'
  ],
  [
    'title' => 'Sistem Pengaduan (Demo)',
    'desc' => 'Aplikasi pengaduan instansi dengan upload file dan tracking status.',
    'stack' => 'PHP, MySQL, Tailwind, JS',
    'url' => 'https://example.com/?project=complaint'
  ]
];

// Experience
$experience = [
  [
    'role' => 'Magang - Digital Technology And Information (D&IT)',
    'company' => 'PT Trakindo',
    'location' => 'Jakarta Selatan, Indonesia',
    'period' => 'Juli – September 2024',
    'bullets' => [
      'Mengelola dan mengoptimalkan website perusahaan agar berjalan stabil dan efisien.',
      'Mencari dan memperbaiki bug atau kesalahan pada sistem website.',
      'Membuat dan memperbarui query database untuk mendukung pengembangan website.',
      'Berpartisipasi dalam proyek Sims Card Migration termasuk validasi data pengguna dan monitoring via diagram batang interaktif.'
    ]
  ]
];

// Certificates - gunakan 3 gambar sejajar
$certificates = [
  'assets/images/cert1.png',
  'assets/images/cert2.jpeg',
  'assets/images/cert3.jpeg',
  'assets/images/cert4.png',
  'assets/images/cert5.jpeg'
  


];

?>
<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title><?=htmlspecialchars($site['name'])?> — <?=htmlspecialchars($site['title'])?></title>
  <meta name="description" content="Portofolio <?=htmlspecialchars($site['name'])?>" />
  <link rel="icon" href="favicon.ico" />
  <!-- fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- external styles -->
  <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body class="antialiased">

  <div class="relative overflow-hidden">
    <!-- subtle decorative gradients -->
    <div style="position:absolute; inset:0; pointer-events:none; z-index:0; opacity:0.45;">
      <svg width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <linearGradient id="g1" x1="0" x2="1"><stop offset="0" stop-color="#e6f7ff"/><stop offset="1" stop-color="#f4fbff"/></linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g1)" />
      </svg>
    </div>

    <header class="max-w-6xl mx-auto px-6 py-6 flex items-start justify-between relative z-10" id="siteHeader">
      <div class="flex items-start gap-4">
        <div class="header-left">
          <!-- name + title (small, left corner) -->
          <div class="header-brand">
            <div class="header-name reveal" data-reveal style="font-size:16px;"><?=htmlspecialchars($site['name'])?></div>
            <div class="header-title reveal" data-reveal style="font-size:12px;"><?=htmlspecialchars($site['title'])?></div>
          </div>
        </div>
      </div>
 
       <!-- mobile hamburger toggle (visible on small screens) -->
  <button id="navToggle" class="md:hidden p-2 rounded-lg" aria-label="Buka menu" aria-expanded="false" aria-controls="siteNav">
    <span class="hamburger" aria-hidden="true"></span>
  </button>

  <nav id="siteNav" class="site-nav space-x-3 text-sm hidden md:flex">
    <a href="#about" class="nav-btn hoverable">Profil</a>
    <a href="#projects" class="nav-btn hoverable">Proyek</a>
    <a href="#experience" class="nav-btn hoverable">Pengalaman</a>
    <a href="#certificates" class="nav-btn hoverable">Sertifikat</a>
    <a href="#contact" class="nav-btn hoverable">Kontak</a>
  </nav>
     </header>
 
     <!-- centered larger avatar placed right below header (tengah) -->
     <div class="center-avatar">
       <div id="avatarWrap" class="relative glass p-2" aria-hidden="true">
         <div class="avatar-ring" aria-hidden="true"></div>
         <img id="avatar" src="assets/images/profile.jpeg" alt="profile" />
       </div>
     </div>
 
     <main class="max-w-6xl mx-auto px-6 relative z-10">
 
       <!-- ABOUT (dipindah di bawah foto profil) -->
      <section id="about" class="py-8 reveal" data-reveal>
        <div class="about-card-container reveal" data-reveal>
          <!-- CV di atas kiri card About -->
          <a href="assets/cv_waqiat_tur_rachmat.pdf" class="about-cv btn-primary" target="_blank" rel="noopener noreferrer">Lihat CV</a>

          <div class="about-card glass p-8 hoverable">
            <h2 class="text-2xl font-semibold mb-3">Profil</h2>
            <p class="about-text"><?=nl2br(htmlspecialchars($about))?></p>
          </div>
        </div>

        <!-- principles + skills sejajar di bawah about card -->
        <div class="mt-6 pr-sk-container grid md:grid-cols-2 gap-6">
          <!-- swap: Skills (left) and Skill Tambahan (right) -->
          <div class="glass p-5 reveal" data-reveal>
            <h3 class="font-medium text-slate-800 mb-3">Skills</h3>
            <div class="skill-grid">
              <?php foreach($skillLogos as $sk):
                  $candidates = [
                    $sk['file'],
                    preg_replace('/\.svg$/i', '.png', $sk['file']),
                    'assets/icons/' . strtolower($sk['name']) . '.svg',
                    'assets/icons/' . strtolower($sk['name']) . '.png'
                  ];
                  $found = null;
                  foreach ($candidates as $c) {
                    if (is_file(__DIR__ . '/' . $c)) { $found = $c; break; }
                  }
              ?>
                <div class="skill reveal hoverable" data-reveal>
                  <?php if ($found): ?>
                    <img src="<?=htmlspecialchars($found)?>" alt="<?=htmlspecialchars($sk['name'])?>" loading="lazy" />
                  <?php else: ?>
                    <div style="width:44px;height:44px;border-radius:8px;background:linear-gradient(90deg,var(--accent-700),var(--accent-600));display:flex;align-items:center;justify-content:center;color:white;font-weight:700;">
                      <?=htmlspecialchars(substr($sk['name'],0,2))?>
                    </div>
                  <?php endif; ?>
                  <div class="skill-label"><?=htmlspecialchars($sk['name'])?></div>
                </div>
              <?php endforeach; ?>
            </div>
          </div>
 
          <div class="glass p-5 reveal" data-reveal>
            <h3 class="font-medium text-slate-800 mb-3">Skills Lainnya</h3>
            <div class="space-y-2">
              <?php foreach($principles as $p): ?>
                <div class="p-3 bg-white rounded-lg flex items-start gap-3 hoverable">
                  <div class="w-9 h-9 rounded-md bg-[var(--accent-700)] text-white flex items-center justify-center font-semibold">•</div>
                  <div class="text-sm text-slate-700"><?=htmlspecialchars($p)?></div>
                </div>
              <?php endforeach; ?>
            </div>
          </div>
         </div>
       </section>

      <!-- PROJECTS -->
      <section id="projects" class="py-8">
        <div class="flex items-baseline justify-between">
          <h2 class="text-2xl font-semibold text-slate-900 reveal" data-reveal>Proyek</h2>
          <div class="text-sm text-slate-500 reveal" data-reveal>Stack: PHP · MySQL · Tailwind · JS</div>
        </div>

        <div class="mt-4 grid md:grid-cols-3 gap-6">
          <?php foreach($projects as $proj): ?>
            <a href="<?=htmlspecialchars($proj['url'])?>" target="_blank" rel="noopener noreferrer" class="block p-5 bg-white rounded-lg border border-slate-100 hover:shadow-lg transition transform hover:-translate-y-1 reveal card hoverable" data-reveal>
              <div class="flex items-center justify-between">
                <h4 class="font-medium text-slate-900"><?=htmlspecialchars($proj['title'])?></h4>
                <div class="proj-badge"><?=htmlspecialchars($proj['stack'])?></div>
              </div>
              <p class="text-sm text-slate-600 mt-3"><?=htmlspecialchars($proj['desc'])?></p>
            </a>
          <?php endforeach; ?>
        </div>
      </section>

      <!-- EXPERIENCE -->
      <section id="experience" class="py-8">
        <h2 class="text-2xl font-semibold text-slate-900 reveal" data-reveal>Pengalaman</h2>
        <div class="mt-4 space-y-4">
          <?php foreach($experience as $exp): ?>
            <div class="p-4 bg-white rounded border border-slate-100 shadow-sm reveal card" data-reveal>
              <div class="flex items-center justify-between">
                <div>
                  <div class="font-medium text-slate-900"><?=htmlspecialchars($exp['company'])?> — <span class="text-slate-600"><?=htmlspecialchars($exp['role'])?></span></div>
                  <div class="text-sm text-slate-500"><?=htmlspecialchars($exp['location'])?> · <?=htmlspecialchars($exp['period'])?></div>
                </div>
              </div>
              <ul class="mt-3 text-slate-700 list-disc list-inside">
                <?php foreach($exp['bullets'] as $d): ?>
                  <li><?=htmlspecialchars($d)?></li>
                <?php endforeach; ?>
              </ul>
            </div>
          <?php endforeach; ?>
        </div>
      </section>

      <!-- CERTIFICATES -->
      <section id="certificates" class="py-8">
        <h2 class="text-2xl font-semibold text-slate-900 reveal" data-reveal>Sertifikat</h2>
        <div class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <?php foreach($certificates as $c):
            $ext = strtolower(pathinfo($c, PATHINFO_EXTENSION));
            $type = in_array($ext, ['pdf']) ? 'pdf' : 'image';
          ?>
            <div class="bg-white rounded p-3 flex items-center justify-center border border-slate-100 reveal card" data-reveal>
              <a href="<?=htmlspecialchars($c)?>" target="_blank" rel="noopener noreferrer" class="cert-link" aria-label="Open certificate in new tab" title="Lihat Sertifikiat" style="display:block;width:100%;text-align:center">
                <?php if ($type === 'pdf'): ?>
                  <div style="width:220px;height:140px;display:flex;align-items:center;justify-content:center;background:#fbfdff;border-radius:6px;overflow:hidden;">
                    <img src="assets/icons/pdf-icon.png" alt="PDF" style="width:48px;height:48px;opacity:.9">
                  </div>
                <?php else: ?>
                  <img src="<?=htmlspecialchars($c)?>" alt="certificate" class="max-h-44 object-contain mx-auto"/>
                <?php endif; ?>
              </a>
            </div>
          <?php endforeach; ?>
        </div>
      </section>

      <!-- Certificate preview modal -->
      <div id="certificateModal" class="cert-modal" aria-hidden="true" role="dialog" aria-modal="true">
        <div class="cert-modal-backdrop" data-action="close"></div>
        <div class="cert-modal-panel" role="document" tabindex="-1">
          <button class="cert-modal-close" aria-label="Close preview" data-action="close">&times;</button>
          <div class="cert-modal-body">
            <!-- dynamic content injected here -->
          </div>
        </div>
      </div>

      <!-- CONTACT (modern) -->
      <section id="contact" class="py-8">
        <h2 class="text-2xl font-semibold text-slate-900 reveal" data-reveal>Kontak</h2>
        <div class="mt-4 grid md:grid-cols-2 gap-6 items-start">
          <!-- Left: contact cards -->
          <div class="glass p-6 space-y-4 reveal" data-reveal>
            <div class="flex items-center justify-between">
              <div>
                <h3 class="font-medium text-slate-800">Hubungi Saya</h3>
                <p class="text-sm text-slate-500">Pilih metode di bawah untuk menghubungi saya.</p>
              </div>
            </div>

            <a href="mailto:<?=htmlspecialchars($site['email'])?>" class="contact-item hoverable" title="Email">
              ✉️ <div style="flex:1"><div class="text-sm font-semibold"><?=htmlspecialchars($site['email'])?></div><div class="text-xs text-slate-500">Kirim email langsung</div></div>
            </a>

            <?php
              // prepare phone / WhatsApp links
              $phoneRaw = $site['phone'] ?? '';
              $phoneDigits = preg_replace('/\D+/', '', $phoneRaw);
              $telHref = $phoneRaw ? 'tel:' . preg_replace('/\s+/', '', $phoneRaw) : '';
              if ($phoneDigits !== '') {
                // normalize to international WA format (Indonesia): leading 0 -> 62
                if ($phoneDigits[0] === '0') $waDigits = '62' . substr($phoneDigits, 1);
                else $waDigits = $phoneDigits;
                $waHref = 'https://wa.me/' . $waDigits;
              } else {
                $waHref = '';
              }
            ?>
            <?php if ($waHref): ?>
            <a href="<?=htmlspecialchars($waHref)?>" target="_blank" rel="noopener noreferrer" class="contact-item hoverable" title="WhatsApp">
              📱 <div style="flex:1"><div class="text-sm font-semibold"><?=htmlspecialchars($phoneRaw)?></div><div class="text-xs text-slate-500">Chat via WhatsApp</div></div>
            </a>
            <?php endif; ?>

            <a href="<?=htmlspecialchars($site['github'])?>" target="_blank" rel="noopener noreferrer" class="contact-item hoverable" title="GitHub">
               <div style="flex:1"><div class="text-sm font-semibold">GitHub</div><div class="text-xs text-slate-500"><?=parse_url($site['github'], PHP_URL_HOST)?></div></div>
            </a>

            <div class="contact-item hoverable" title="Location">
              📍 <div style="flex:1"><div class="text-sm font-semibold"><?=htmlspecialchars($site['location'])?></div></div>
            </div>
          </div>

          <!-- Right: Quick Message (opens mail client or copy) -->
          <div class="glass p-6 reveal" data-reveal>
            <h3 class="font-medium text-slate-800 mb-2">Berikan Saya Pesan</h3>
            <p class="text-sm text-slate-500 mb-4">Ketik pesan singkat — tombol "Kirim via Email" akan membuka Email Anda dengan pesan terisi.</p>

            <div class="space-y-3">
              <input id="qm-name" placeholder="Nama" class="input w-full" />
              <input id="qm-email" placeholder="Email Anda" class="input w-full" />
              <textarea id="qm-message" rows="5" placeholder="Tulis pesan singkat..." class="input w-full"></textarea>

              <div class="flex items-center gap-3">
                <button id="qm-send" class="btn-primary">Kirim via Email</button>
                <div id="qm-feedback" class="text-sm text-slate-600 ml-2" aria-live="polite"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>

    <footer class="mt-12 relative z-10">
      <svg viewBox="0 0 1440 80" width="100%" height="80" preserveAspectRatio="none"><path class="footer-wave" d="M0,40 C360,120 1080,-40 1440,40 L1440,80 L0,80 Z"></path></svg>
      <div class="max-w-6xl mx-auto px-6 py-6 text-sm text-slate-600 text-center">
        © <?=date('Y')?> <?=htmlspecialchars($site['name'])?> — WEBSITE PORTOFOLIO
      </div>
    </footer>
  </div>

  <!-- external scripts -->
  <script src="assets/js/main.js" defer></script>
</body>
</html>
