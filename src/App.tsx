import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import ProductsPage from '@/pages/ProductsPage';
import EventsPage from '@/pages/EventsPage';
import EwastePage from '@/pages/EwastePage';
import CareerPage from '@/pages/CareerPage';
import BlogPage from '@/pages/BlogPage';
import LegalPage from '@/pages/LegalPage';

/**
 * Hash routing: "#/events" is a page; "#about" is a section on the home page.
 * Works on any static host with no server rewrite rules.
 */
function renderRoute(route: string) {
  switch (route) {
    case '/products': return <ProductsPage />;
    case '/events': return <EventsPage />;
    case '/e-waste': return <EwastePage />;
    case '/career': return <CareerPage />;
    case '/blog': return <BlogPage />;
    case '/terms': return <LegalPage kind="terms" />;
    case '/privacy': return <LegalPage kind="privacy" />;
    default: return <Home />;
  }
}

function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const route = hash.startsWith('#/') ? hash.slice(1) : '/';

  useEffect(() => {
    if (route !== '/' || !hash) {
      window.scrollTo(0, 0);
    } else {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [route, hash]);

  const known = ['/', '/products', '/events', '/e-waste', '/career', '/blog', '/terms', '/privacy'];
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>{renderRoute(known.includes(route) ? route : '/')}</main>
      <Footer />
    </div>
  );
}

export default App;
