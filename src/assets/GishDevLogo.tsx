const GishDevLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent p-0.5">
        <div className="w-full h-full rounded-lg bg-background flex items-center justify-center">
          <svg 
            viewBox="0 0 24 24" 
            className="w-5 h-5 text-primary"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
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
