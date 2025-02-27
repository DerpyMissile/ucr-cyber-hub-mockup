import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/avatar.png",
  siteUrl: "https://cybersecurity.cs.ucr.edu/",
  siteName: "Haocheng Mai",
  siteDescription: "A hub for everything cybersecurity related in UCR.",
  siteThumbnail: "/og-image.png",
  nav: [
    { label: "Professors", href: "/posts" },
    { label: "Resources", href: "/resources" },
    { label: "About", href: "/about" },
  ],
  social: {
    github: "https://github.com/DerpyMissile/ucr-cyber-hub-mockup",
    // twitter: "https://twitter.com/hyrbid_alex",
    linkedin: "https://www.linkedin.com/in/haocheng-mai/",
    // instagram: "https://www.instagram.com/alexcarp/",
  },
};
export default siteConfig;
