import logoIcon from '@/assets/gishdev-logo-icon.jpg';

const GishDevLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-primary to-accent p-0.5">
        <img 
          src={logoIcon} 
          alt="GishDev" 
          className="w-full h-full object-contain rounded-lg bg-background"
        />
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <span className="font-space font-bold text-xl leading-tight">
          GISH<span className="text-primary">DEV</span>
        </span>
        <span className="text-[9px] uppercase tracking-[2px] text-muted-foreground leading-tight">
          Web Development
        </span>
      </div>
    </div>
  );
};

export default GishDevLogo;
