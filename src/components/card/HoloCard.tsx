/*
// Helper to get card styles by index and screen size
function getCardStyle(idx) {
  // 0-based index
  let base = "relative transition-opacity duration-200 ease-in-out";
  // Responsive logic for mobile/medium/large
  // Tailwind doesn't support nth-child, so we use JS
  let rotate = "";
  let left = "";
  let top = "";

  // For demonstration: mimic 3-card fanning on mobile/medium
  if (window.innerWidth < 900) {
    switch ((idx % 3) + 1) {
      case 1:
        rotate = "-rotate-[5deg]";
        left = "-left-[50px]";
        top = "top-[10px]";
        break;
      case 2:
        rotate = "rotate-0";
        left = "left-0";
        top = "-top-[10px]";
        break;
      case 3:
        rotate = "rotate-[5deg]";
        left = "left-[50px]";
        top = "top-0";
        break;
      default:
        break;
    }
  }

  return `${base} ${rotate} ${left} ${top}`;
}

export function Card({ children, idx }) {
  // Add more state/handlers for 'active' or 'interacting' here if needed
  return (
    <div className={`card ${getCardStyle(idx)}`}>
      {children}
    </div>
  );
}


export function CardGrid({ children, isActive }) {
  return (
    <section
      className={`grid grid-cols-1 gap-y-[50px] gap-x-[2vw] transform-style-3d h-full max-w-[1200px] mx-auto p-[50px] relative 
        ${isActive ? "z-[99] isolate" : ""}
        md:grid-cols-3
        md:max-w-[1200px]
        sm:max-w-[420px]
      `}
    >
      {children}
    </section>
  );
}

export default function App() {
  return (
    <CardGrid isActive={true}>
      <Card>Card 1</Card>
      <Card>Card 2</Card>
      <Card>Card 3</Card>
      {/!* Add more cards as needed *!/}
    </CardGrid>
  );
}*/
