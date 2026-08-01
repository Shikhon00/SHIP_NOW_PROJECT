import { Button } from "@/components/ui/Button";

interface PromoCardProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export function PromoCard({
  title = "Loving ShipNow Free?",
  description = "Go Pro to access priority support, real-time tracking, and full analytics.",
  ctaLabel = "Go Pro Today",
  onCtaClick,
}: PromoCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-surface p-5 text-white">
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-500/20 blur-xl" />
      <div className="relative z-10">
        <h3 className="mb-2 text-lg font-bold leading-tight">{title}</h3>
        <p className="mb-4 text-xs leading-relaxed text-gray-400">{description}</p>
        <Button
          variant="subtle"
          className="w-full bg-white text-slate-900 hover:bg-gray-100"
          onClick={onCtaClick}
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
