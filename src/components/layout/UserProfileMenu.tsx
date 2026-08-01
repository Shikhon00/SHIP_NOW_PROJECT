import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface UserProfileMenuProps {
  name: string;
  role: string;
  avatarUrl: string;
}

/**
 * Static for now — swap the onClick/button for a real dropdown
 * (profile / logout / switch org) once auth is wired up.
 */
export function UserProfileMenu({ name, role, avatarUrl }: UserProfileMenuProps) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between rounded-xl border border-transparent bg-gray-50 p-2 text-left transition-colors hover:border-gray-100 hover:bg-gray-100"
    >
      <span className="flex items-center gap-3">
        <Image
          src={avatarUrl}
          alt={name}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
        />
        <span>
          <span className="block text-sm font-semibold text-slate-900">{name}</span>
          <span className="block text-xs text-slate-500">{role}</span>
        </span>
      </span>
      <ChevronDown className="h-4 w-4 shrink-0 text-slate-400" />
    </button>
  );
}
