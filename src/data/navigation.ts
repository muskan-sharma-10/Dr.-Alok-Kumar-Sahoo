export interface NavItem {
  name: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/hair-transplant-services" },
  { name: "Doctors", href: "/doctors" },
  { name: "Results", href: "/results" },
  { name: "Reviews", href: "/reviews" },
  { name: "Blogs", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact-us" },
];

export const locationNavItems: NavItem[] = [
  { name: "Delhi Clinic", href: "/hair-transplant-in-delhi" },
  { name: "Bhubaneswar Clinic", href: "/hair-transplant-in-bhubaneswar" },
  { name: "Uttarakhand Clinic", href: "/hair-transplant-in-uttarakhand" },
  { name: "Chennai Clinic", href: "/hair-transplant-in-chennai" },
];
