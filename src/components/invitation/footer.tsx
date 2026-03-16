import { Instagram } from "lucide-react";

export const InvitationFooter = () => {
  return (
    <footer className="py-24 px-6 bg-[#fdfcf9] text-center border-t border-slate-100/50">
      <div className="flex flex-col items-center gap-8">
        {/* Instagram Link */}
        <a 
          href="https://www.instagram.com/festa_invitaciones" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-[10px] tracking-[0.4em] text-[#3d2b1f]/40 hover:text-[#3d2b1f] transition-colors uppercase font-bold"
        >
          <Instagram size={14} strokeWidth={1.5} />
          @festa_invitaciones
        </a>

        {/* Brand Text */}
        <div className="space-y-3">
          <p className="text-[11px] tracking-[0.5em] text-[#3d2b1f] uppercase font-bold">
            Diseño exclusivo para eventos
          </p>
          <p className="font-serif italic text-sm text-[#3d2b1f]/60">
            Hecho con amor por Festa
          </p>
        </div>
      </div>
    </footer>
  );
};