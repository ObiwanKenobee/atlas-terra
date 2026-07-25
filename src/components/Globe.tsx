export function Globe({ size = 360 }: { size?: number }) {
  const s = size;
  const cx = s / 2;
  const cy = s / 2;
  const r = s * 0.34;
  return (
    <div className="relative grid place-items-center" style={{ width: s, height: s }}>
      {/* orbit rings */}
      <div className="absolute inset-0 atlas-orbit-slow">
        <div
          className="absolute inset-[6%] rounded-full border border-cyan/25"
          style={{ transform: "rotateX(70deg)" }}
        />
      </div>
      <div className="absolute inset-0 atlas-orbit-med">
        <div
          className="absolute inset-[16%] rounded-full border border-violet/25"
          style={{ transform: "rotateX(65deg) rotateZ(30deg)" }}
        />
      </div>
      <div className="absolute inset-0 atlas-orbit-fast">
        <div
          className="absolute inset-[24%] rounded-full border border-emerald/25"
          style={{ transform: "rotateX(60deg) rotateZ(-25deg)" }}
        />
      </div>

      <svg viewBox={`0 0 ${s} ${s}`} className="relative" width={s} height={s}>
        <defs>
          <radialGradient id="globeFill" cx="45%" cy="40%" r="65%">
            <stop offset="0%" stopColor="oklch(0.55 0.14 220)" />
            <stop offset="55%" stopColor="oklch(0.28 0.08 258)" />
            <stop offset="100%" stopColor="oklch(0.14 0.04 260)" />
          </radialGradient>
          <radialGradient id="globeGlow" cx="50%" cy="50%" r="60%">
            <stop offset="70%" stopColor="oklch(0.7 0.15 200 / 0)" />
            <stop offset="100%" stopColor="oklch(0.7 0.18 200 / 0.55)" />
          </radialGradient>
        </defs>
        <circle cx={cx} cy={cy} r={r + 18} fill="url(#globeGlow)" />
        <circle cx={cx} cy={cy} r={r} fill="url(#globeFill)" stroke="oklch(0.7 0.15 200 / 0.5)" />
        {/* meridians */}
        {[0.3, 0.55, 0.8].map((k, i) => (
          <ellipse
            key={`m-${i}`}
            cx={cx}
            cy={cy}
            rx={r * k}
            ry={r}
            fill="none"
            stroke="oklch(0.75 0.12 200 / 0.35)"
            strokeWidth="0.8"
          />
        ))}
        {/* parallels */}
        {[0.35, 0.6, 0.85].map((k, i) => (
          <ellipse
            key={`p-${i}`}
            cx={cx}
            cy={cy}
            rx={r}
            ry={r * k}
            fill="none"
            stroke="oklch(0.75 0.12 200 / 0.3)"
            strokeWidth="0.8"
          />
        ))}
        {/* land blobs */}
        <g fill="oklch(0.68 0.14 155 / 0.55)" stroke="oklch(0.8 0.15 155 / 0.6)" strokeWidth="0.5">
          <path d={`M ${cx - r * 0.55} ${cy - r * 0.35} q ${r * 0.15} -${r * 0.2} ${r * 0.35} -${r * 0.05} q ${r * 0.1} ${r * 0.15} -${r * 0.05} ${r * 0.25} q -${r * 0.2} ${r * 0.05} -${r * 0.3} -${r * 0.05} z`} />
          <path d={`M ${cx - r * 0.1} ${cy + r * 0.1} q ${r * 0.2} -${r * 0.05} ${r * 0.35} ${r * 0.1} q ${r * 0.05} ${r * 0.25} -${r * 0.1} ${r * 0.3} q -${r * 0.2} 0 -${r * 0.3} -${r * 0.15} z`} />
          <path d={`M ${cx + r * 0.3} ${cy - r * 0.55} q ${r * 0.15} ${r * 0.03} ${r * 0.18} ${r * 0.18} q -${r * 0.05} ${r * 0.15} -${r * 0.2} ${r * 0.1} z`} />
        </g>
        {/* nodes */}
        {[
          [cx - r * 0.35, cy - r * 0.2],
          [cx - r * 0.1, cy + r * 0.15],
          [cx + r * 0.25, cy - r * 0.35],
          [cx + r * 0.4, cy + r * 0.05],
          [cx - r * 0.4, cy + r * 0.35],
          [cx + r * 0.05, cy - r * 0.55],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="3.5" fill="oklch(0.9 0.16 85)" />
            <circle cx={x} cy={y} r="7" fill="none" stroke="oklch(0.9 0.16 85 / 0.5)">
              <animate attributeName="r" values="3;10" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;0" dur="2.5s" repeatCount="indefinite" />
            </circle>
          </g>
        ))}
        {/* connecting arcs */}
        <g fill="none" stroke="oklch(0.85 0.14 195 / 0.55)" strokeWidth="1">
          <path d={`M ${cx - r * 0.35} ${cy - r * 0.2} Q ${cx} ${cy - r * 0.8} ${cx + r * 0.25} ${cy - r * 0.35}`} />
          <path d={`M ${cx - r * 0.4} ${cy + r * 0.35} Q ${cx - r * 0.1} ${cy - r * 0.4} ${cx + r * 0.4} ${cy + r * 0.05}`} />
          <path d={`M ${cx - r * 0.1} ${cy + r * 0.15} Q ${cx + r * 0.2} ${cy + r * 0.6} ${cx + r * 0.4} ${cy + r * 0.05}`} />
        </g>
      </svg>
    </div>
  );
}
