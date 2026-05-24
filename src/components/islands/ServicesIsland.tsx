import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: '01',
    title: 'Wedding Photography',
    description: 'We capture every emotion, every glance, every moment that makes your day unforgettable.',
  },
  {
    number: '02',
    title: 'Portrait Sessions',
    description: 'From personal branding to fine art portraits — we bring out the story behind every face.',
  },
  {
    number: '03',
    title: 'Commercial Work',
    description: 'Product shoots, editorial campaigns, and brand visuals crafted to convert and impress.',
  },
];

export default function ServicesIsland() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(cardsRef.current, {
        scrollTrigger: { trigger: cardsRef.current[0], start: 'top 80%' },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-black text-white py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">What We Do</p>
        <h2 ref={headingRef} className="text-5xl font-bold mb-20">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((s, i) => (
            <div
              key={s.number}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="border-t border-gray-700 pt-8"
            >
              <span className="text-gray-500 text-sm tracking-widest">{s.number}</span>
              <h3 className="text-2xl font-semibold mt-4 mb-4">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
