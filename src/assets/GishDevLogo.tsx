const GishDevLogo = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 180 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Icon - stylized code brackets */}
      <path
        d="M10 15L2 25L10 35"
        stroke="url(#logoGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 15L34 25L26 35"
        stroke="url(#logoGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 12L15 38"
        stroke="url(#logoGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* GISHDEV text */}
      <text
        x="44"
        y="30"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="currentColor"
      >
        GISH
        <tspan fill="url(#logoGradient)">DEV</tspan>
      </text>
      
      {/* Web Development subtitle */}
      <text
        x="44"
        y="44"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="9"
        fontWeight="400"
        fill="currentColor"
        opacity="0.6"
        letterSpacing="2"
      >
        Web Development
      </text>
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GishDevLogo;
