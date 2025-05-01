// Function to load and insert a component
async function loadComponent(id, url, data = {}) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    let content = await response.text();
    // Replace placeholders with data
    for (const [key, value] of Object.entries(data)) {
      content = content.replace(`{{${key}}}`, value);
    }
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = content;
    } else {
      console.warn(`Element with ID ${id} not found`);
    }
    return true;
  } catch (error) {
    console.error(`Error loading component ${url}:`, error);
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = `<p>Error loading component</p>`;
    }
    return false;
  }
}

// Preload portfolio items
const portfolioData = [
  { alt: 'Modern white house with car', src: 'https://storage.googleapis.com/a1aa/image/320bde2e-33c8-4aae-1740-4a7ec1396b3e.jpg', name: 'Casa Blanca' },
  { alt: 'Modern white house with bicycle', src: 'https://storage.googleapis.com/a1aa/image/da5e9754-2651-4f92-925a-c77bf23d65d9.jpg', name: 'Urban Retreat' },
  { alt: 'Modern white house with black fence', src: 'https://storage.googleapis.com/a1aa/image/dbb93842-1e92-48f1-2b3e-f9c496951dd2.jpg', name: 'Minimal Haven' },
  { alt: 'Modern white house with concrete wall', src: 'https://storage.googleapis.com/a1aa/image/16a7a15a-e19b-4d14-932f-cf14b82c6e27.jpg', name: 'Concrete Villa' },
  { alt: 'Modern white house with yellow wall', src: 'https://storage.googleapis.com/a1aa/image/d07e5169-5791-4ae8-f320-6916c3fe3852.jpg', name: 'Sunlit Residence' },
  { alt: 'Modern white house with black fence', src: 'https://storage.googleapis.com/a1aa/image/23753d82-74b2-4030-8786-9a3bb346a434.jpg', name: 'Modern Estate' },
  { alt: 'Modern white house with white fence', src: 'https://storage.googleapis.com/a1aa/image/b8f28bf9-a593-4d18-4df0-e29d49b23c70.jpg', name: 'White Oasis' },
  { alt: 'Modern white house with tree', src: 'https://storage.googleapis.com/a1aa/image/74f9bd4e-76b0-423d-43e0-93367e2568af.jpg', name: 'Nature Villa' }
];

// Attach page link event listeners
function attachPageLinkListeners() {
  const links = document.querySelectorAll('.page-link');
  links.forEach(link => {
    // Remove existing listeners to prevent duplicates
    link.removeEventListener('click', handlePageLinkClick);
    link.addEventListener('click', handlePageLinkClick);
  });
}

function handlePageLinkClick(e) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');
  const pageContent = document.querySelector('.page-content');
  if (pageContent) {
    pageContent.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = href;
    }, 500); // Match fadeOut duration
  } else {
    window.location.href = href; // Fallback
  }
}

// Load components and apply initial load animations
document.addEventListener('DOMContentLoaded', async () => {
  // Check if this is a fresh page load
  const isFreshLoad = !performance.getEntriesByType('navigation')[0].type.includes('navigate');

  // Apply initial load animations
  if (isFreshLoad) {
    const header = document.getElementById('header');
    const main = document.querySelector('main');
    const footer = document.getElementById('footer');
    if (header) header.classList.add('initial-load-header');
    if (main) main.classList.add('initial-load-main');
    if (footer) footer.classList.add('initial-load-footer');
  }

  // Prepare promises for component loading
  const loadPromises = [];

  // Load header
  loadPromises.push(loadComponent('header', 'components/header.html').then(() => {
    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
      menuBtn.removeEventListener('click', toggleMobileMenu); // Prevent duplicates
      menuBtn.addEventListener('click', toggleMobileMenu);
    }
  }));

  // Load footer
  loadPromises.push(loadComponent('footer', 'components/footer.html'));

  // Load portfolio items (index.html only)
  if (document.getElementById('portfolio-items')) {
    portfolioData.forEach((item, index) => {
      loadPromises.push(loadComponent(`portfolio-item-${index}`, 'components/portfolio-item.html', item).then(() => {
        if (isFreshLoad) {
          const itemElement = document.getElementById(`portfolio-item-${index}`);
          if (itemElement) itemElement.classList.add('initial-load-item');
        }
      }));
    });
  }

  // Load Instagram sections (index.html only)
  if (document.getElementById('instagram-1')) {
    loadPromises.push(loadComponent('instagram-1', 'components/instagram-section.html', {
      link: '#',
      text: 'We Now Have 35K+ Followers',
      followText: 'FOLLOW US'
    }).then(() => {
      if (isFreshLoad) {
        const instagram1 = document.getElementById('instagram-1');
        if (instagram1) instagram1.classList.add('initial-load-item');
      }
    }));
  }
  if (document.getElementById('instagram-2')) {
    loadPromises.push(loadComponent('instagram-2', 'components/instagram-section.html', {
      link: '#',
      text: "Our Principal's Social Media",
      followText: 'FOLLOW HIM'
    }).then(() => {
      if (isFreshLoad) {
        const instagram2 = document.getElementById('instagram-2');
        if (instagram2) instagram2.classList.add('initial-load-item');
      }
    }));
  }

  // Wait for all components to load before attaching listeners
  await Promise.all(loadPromises);

  // Attach page link listeners
  attachPageLinkListeners();

  // Reattach listeners on DOM changes (for robustness)
  const observer = new MutationObserver(() => {
    attachPageLinkListeners();
  });
  observer.observe(document.body, { childList: true, subtree: true });
});

// Mobile menu toggle function
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('active');
  }
}