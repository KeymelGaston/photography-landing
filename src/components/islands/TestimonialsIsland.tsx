import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: '"Luminary Studio captured our wedding in a way we never imagined possible. Every photo tells a story we\'ll treasure forever."',
    author: '— Sofia & Marcus',
  },
  {
    quote: '"Our brand campaign exceeded every expectation. The team has an incredible eye and made the entire process effortless."',
    author: '— Aria Collective',
  },
  {
    quote: '"My portrait session was an experience in itself. I\'ve never felt more confident in front of a camera — or loved photos of myself more."',
    author: '— James R.',
  },
];

export default function TestimonialsIsland() {
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
      id="testimonials"
      ref={sectionRef}
      className="bg-black text-white py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">Kind Words</p>
        <h2 ref={headingRef} className="text-5xl font-bold mb-20">
          What Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="border-t border-gray-700 pt-8"
            >
              <p className="text-gray-300 leading-relaxed mb-8">{t.quote}</p>
              <span className="text-sm uppercase tracking-widest text-gray-500">{t.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
