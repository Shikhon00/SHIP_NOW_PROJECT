import {
  FacebookIcon,
  XIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "@/components/icons/SocialIcons";

const SOCIALS = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: XIcon, href: "#", label: "X" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pb-8 pt-6 text-xs text-gray-400 md:flex-row">
      <div className="flex flex-wrap items-center gap-6">
        <span>Copyright © {new Date().getFullYear()} ShipNow</span>
        <a href="#" className="hover:text-brand-600">Privacy Policy</a>
        <a href="#" className="hover:text-brand-600">Terms and Conditions</a>
        <a href="#" className="hover:text-brand-600">Contact</a>
      </div>

      <div className="flex items-center gap-3">
        {SOCIALS.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-brand-200 hover:text-brand-600"
          >
            <Icon className="h-3.5 w-3.5" />
          </a>
        ))}
      </div>
    </footer>
  );
}