 // ── LOGIQUE DU CARROUSEL DE PRODUITS ──
  const container = document.getElementById('carouselContainer');
  document.getElementById('slideRight').addEventListener('click', () => {
    container.scrollBy({ left: 320, behavior: 'smooth' });
  });
  document.getElementById('slideLeft').addEventListener('click', () => {
    container.scrollBy({ left: -320, behavior: 'smooth' });
  });

  // ── LOGIQUE D'OUVERTURE ET CLIC UNIQUE DIRECT DEPUIS CONSEILS ──
  document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById('menuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    
    if (menuBtn && mobileDrawer) {
      menuBtn.onclick = (e) => {
        e.stopPropagation();
        mobileDrawer.classList.toggle('active');
      };
      
      // Ferme la boîte en cliquant à côté
      document.addEventListener('click', () => mobileDrawer.classList.remove('active'));
    }
  });

  // ── EFFET DYNAMIQUE NAVBAR BLANCHE AU SCROLL & DISPARITION VIDÉO ──
  const header = document.getElementById('mainHeader');
  const videoSection = document.getElementById('videoSection');
  const mobileDrawer = document.getElementById('mobileDrawer');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const observerOptions = {
    root: null,
    threshold: 0.35
  };

  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        header.classList.add('hidden-nav');
        if (mobileDrawer) mobileDrawer.classList.remove('active');
      } else {
        header.classList.remove('hidden-nav');
      }
    });
  }, observerOptions);

  if (videoSection) {
    videoObserver.observe(videoSection);
  }