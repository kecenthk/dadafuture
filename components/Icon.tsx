import {
  Bot,
  Coffee,
  Factory,
  Flame,
  Globe,
  Handshake,
  HeartPulse,
  Radio,
  Search,
  Share2,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  UserRound,
  UserSearch,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Bot,
  Coffee,
  Factory,
  Flame,
  Globe,
  Handshake,
  HeartPulse,
  Linkedin: UserSearch,
  Radio,
  Search,
  Share2,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  UserRound,
  Warehouse,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = MAP[name] ?? Globe;
  return <C className={className} aria-hidden />;
}
