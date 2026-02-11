import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Layout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};