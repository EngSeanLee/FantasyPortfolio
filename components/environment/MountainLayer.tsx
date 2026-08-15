export function MountainLayer() {
  return (
    <div aria-hidden className="absolute inset-x-0 bottom-0 h-[62%]">
      <svg
        viewBox="0 0 1600 500"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="M0,340 L140,220 260,300 400,160 560,280 700,190 860,310 1020,210 1180,290 1340,180 1480,270 1600,230 1600,500 0,500 Z"
          fill="#a7bfa6"
          opacity="0.35"
        />
        <path
          d="M0,400 L120,300 300,380 480,260 640,360 820,270 980,370 1160,280 1340,360 1600,300 1600,500 0,500 Z"
          fill="#6f8872"
          opacity="0.32"
        />
        <path
          d="M0,440 L200,380 420,430 620,360 840,420 1080,370 1300,430 1600,390 1600,500 0,500 Z"
          fill="#4e6b57"
          opacity="0.25"
        />
      </svg>
    </div>
  );
}
