
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <NavigationMenu />
      <main className="flex-1">
        <div className="animate-fade-in">
          {children}
        </div>
      </main>
      <footer className="bg-secondary py-12 mt-auto">
        <div className="container-lg">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold mb-4">Northridge Academy</h3>
              <p className="text-muted-foreground">
                Empowering students to become leaders in a global community.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <address className="not-italic text-muted-foreground">
                <p>123 School Lane</p>
                <p>Northridge, CA 91330</p>
                <p>Email: info@northridge.edu</p>
                <p>Phone: (555) 123-4567</p>
              </address>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="/about" className="link-hover">About Us</a>
                </li>
                <li>
                  <a href="/academics" className="link-hover">Academics</a>
                </li>
                <li>
                  <a href="/news" className="link-hover">News & Events</a>
                </li>
                <li>
                  <a href="/gallery" className="link-hover">Gallery</a>
                </li>
                <li>
                  <a href="/contact" className="link-hover">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-muted text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Northridge Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
