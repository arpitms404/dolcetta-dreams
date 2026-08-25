import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BadgeLogo, ScallopEdge } from "./decor";

type NavItem = { label: string; to?: string; children?: { label: string; to: string }[] };

const LEFT: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Pages",
    children: [
      { label: "About Us", to: "/about-us" },
      { label: "Our Staff", to: "/our-staff" },
      { label: "Pricing Tables", to: "/pricing-tables" },
      { label: "Content Elements", to: "/content-elements" },
      { label: "Recipes Grid", to: "/recipes-grid" },
    ],
  },
  { label: "Portfolio", children: [{ label: "Portfolio Masonry", to: "/portfolio" }] },
];

const RIGHT: NavItem[] = [
  { label: "Blog", children: [{ label: "Blog Standard", to: "/blog" }] },
  {
    label: "Shop",
    children: [
      { label: "Shop", to: "/shop" },
      { label: "Cart", to: "/cart" },
      { label: "Contact", to: "/contacts" },
    ],
  },
  { label: "Contacts", to: "/contacts" },
];

function useActive() {
  return useRouterState({ select: (s) => s.location.pathname });
}

function TopLink({ item }: { item: NavItem }) {
  const path = useActive();
  const [open, setOpen] = useState(false);
  const active =
    item.to === path || item.children?.some((c) => c.to === path) || false;

  const cls = `serif relative inline-flex items-center gap-1 text-[17px] font-bold transition-colors ${
    active ? "text-rose" : "text-ink hover:text-rose"
  }`;

  if (!item.children) {
    return (
      <Link to={item.to!} className={cls}>
        {active && <span className="h-1.5 w-1.5 rounded-full bg-rose" />}
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className={cls}>
        {active && <span className="h-1.5 w-1.5 rounded-full bg-rose" />}
        {item.label}
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-4"
          >
            <ul className="overflow-hidden rounded-2xl bg-white py-2 shadow-lift">
              {item.children.map((c) => (
                <li key={c.to}>
                  <Link
                    to={c.to}
                    className="block px-5 py-2 text-sm text-body transition-colors hover:bg-mint/10 hover:text-rose"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileGroup({ item, close }: { item: NavItem; close: () => void }) {
  const [open, setOpen] = useState(false);
  if (!item.children)
    return (
      <Link to={item.to!} onClick={close} className="serif block py-3 text-lg font-bold text-ink">
        {item.label}
      </Link>
    );
  return (
    <div className="border-b border-border/60">
      <button
        onClick={() => setOpen((v) => !v)}
        className="serif flex w-full items-center justify-between py-3 text-lg font-bold text-ink"
      >
        {item.label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="pb-3">
          {item.children.map((c) => (
            <li key={c.to}>
              <Link to={c.to} onClick={close} className="block py-2 pl-3 text-sm text-body">
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const path = useActive();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenu(false), [path]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-soft" : ""
      }`}
    >
      <div
        className={`relative mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 ${
          scrolled ? "py-1" : "py-3"
        }`}
      >
        {/* mobile */}
        <button
          className="lg:hidden"
          aria-label="Menu"
          onClick={() => setMenu((v) => !v)}
        >
          {menu ? <X className="h-6 w-6 text-ink" /> : <Menu className="h-6 w-6 text-ink" />}
        </button>

        <nav className="hidden flex-1 items-center justify-end gap-9 lg:flex">
          {LEFT.map((i) => (
            <TopLink key={i.label} item={i} />
          ))}
        </nav>

        <Link to="/" className="mx-6 shrink-0">
          <BadgeLogo size={scrolled ? 78 : 104} />
        </Link>

        <nav className="hidden flex-1 items-center gap-9 lg:flex">
          {RIGHT.map((i) => (
            <TopLink key={i.label} item={i} />
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/cart" aria-label="Cart">
            <ShoppingBag className="h-5 w-5 text-ink transition-colors hover:text-rose" />
          </Link>
          <button aria-label="Search" onClick={() => setSearch((v) => !v)}>
            <Search className="h-5 w-5 text-ink transition-colors hover:text-rose" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {search && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-cream"
          >
            <div className="mx-auto max-w-3xl px-4 py-5">
              <input
                placeholder="Search the bakery…"
                className="w-full rounded-full border border-border bg-white px-6 py-3 text-sm outline-none focus:border-mint"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden bg-white lg:hidden"
          >
            <div className="px-6 pb-6">
              {[...LEFT, ...RIGHT].map((i) => (
                <MobileGroup key={i.label} item={i} close={() => setMenu(false)} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        <ScallopEdge color="#ffffff" position="bottom" className="!bottom-auto !top-0 translate-y-full" />
      </div>
    </header>
  );
}
