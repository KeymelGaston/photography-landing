import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroIsland() {
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(eyebrowRef.current, { opacity: 0, y: 30, duration: 1, delay: 0.2 })
      .from(headingRef.current, { opacity: 0, y: 60, duration: 1.2 }, '-=0.7')
      .from(subRef.current, { opacity: 0, y: 40, duration: 1 }, '-=0.8')
      .from(ctaRef.current, { opacity: 0, y: 30, duration: 1 }, '-=0.7');

    return () => { tl.kill(); };
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-60 z-10" />
      <img
        src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1600&q=80"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 text-center text-white px-6">
        <p
          ref={eyebrowRef}
          className="text-sm uppercase tracking-[0.3em] text-gray-300 mb-4"
        >
          Photography Agency
        </p>
        <h1
          ref={headingRef}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          Luminary Studio
        </h1>
        <p
          ref={subRef}
          className="text-xl md:text-2xl text-gray-300 italic mb-10"
        >
          We don't take photos. We capture light.
        </p>
        <a
          ref={ctaRef}
          href="#services"
          className="border border-white text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
        >
          Explore
        </a>
      </div>
    </section>
  );
}
