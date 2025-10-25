import { cn } from "@/lib/utils";
import { Book, Computer, Contact, Home } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const menuItems = [
  { href: "/", label: "Home", icon: <Home/> },
  { href: "/skills", label: "Skills", icon: <Book/> },
  { href: "/projects", label: "Projects", icon: <Computer/> },
  { href: "/contact", label: "Contact", icon: <Contact /> },
];

export default function Sidebar() {
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <span className="text-xl">✕</span>
        ) : (
          <span className="text-xl">☰</span>
        )}
      </button>

      <aside className={cn(
        "fixed left-0 top-0 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-white/10",
        "z-40 transition-transform duration-300 ease-in-out",
        "w-[280px] md:w-64",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        {/* Logo/Home link at top */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <a href="/" className="flex items-center gap-3 text-inherit no-underline">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-amber-600 text-white font-semibold">
            <strong>SP.</strong>
          </span>
          <span className="text-lg font-medium text-gray-800 dark:text-white">
            Subhodip Paul
          </span>
        </a>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-amber-100 hover:text-amber-800 dark:hover:bg-amber-900 dark:hover:text-amber-200 transition-colors",
                  isActive(item.href) &&
                    "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                )}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
    </>
  );
}