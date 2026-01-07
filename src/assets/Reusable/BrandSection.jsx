import { useEffect, useState } from "react"; // Added useState import

export default function () {
  const comp_logo = [
    {
      imgsrc: "./public/Logos/andritz-logo-icon.png",
      alt: "Andritz Logo"
    },
    {
      imgsrc: "./public/Logos/avl.png",
      alt: "AVL Logo"
    },
    {
      imgsrc: "./public/Logos/BlissAnand.png",
      alt: "Bliss Anand Logo"
    },
    {
      imgsrc: "./public/Logos/dantal.svg",
      alt: "Dantal Logo"
    },
    {
      imgsrc: "./public/Logos/Flovel.jpg",
      alt: "Flovel Logo"
    },
    {
      imgsrc: "./public/Logos/isgec.png",
      alt: "Isgec Logo"
    },
    {
      imgsrc: "./public/Logos/HPP.png",
      alt: "Hpp Logo"
    },
    {
      imgsrc: "./public/Logos/pentaflo.png",
      alt: "Pentaflo Logo"
    },
    {
      imgsrc: "./public/Logos/maruti.svg",
      alt: "Maruti Logo"
    },
    {
      imgsrc: "./public/Logos/Samco.png",
      alt: "Samco Logo"
    },
    {
      imgsrc: "./public/Logos/voith.svg",
      alt: "Voith Logo"
    },
    {
      imgsrc: "./public/Logos/Sietz.png",
      alt: "Sietz Logo"
    },
  ];

const [logos, setLogos] = useState(comp_logo);
  const [isMoving, setIsMoving] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIsMoving(true); // Start animation

      setTimeout(() => {
        setLogos((prev) => {
          const [head, ...tail] = prev;
          return [...tail, head];
        });
        setIsMoving(false); // Reset position instantly
      }, 400); // Must match CSS transition time
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="brand-section">
      <div className="container">
        <h2 className="text-center mb-5">Our Clients</h2>
        <div className="slider-window"onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}>
          {/* We add 'moving' class to trigger the CSS transform */}
          <div className={`slider-track ${isMoving ? "moving" : ""}`}>
            {logos.slice(0, 6).map((item) => (
              <div className="logo-card" key={item.alt}>
                <img src={item.imgsrc} alt={item.alt} className="img-fluid" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}