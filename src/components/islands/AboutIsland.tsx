import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutIsland() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        opacity: 0,
        x: -60,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(contentRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        opacity: 0,
        x: 60,
        duration: 1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-zinc-950 text-white py-32 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
          alt="About Luminary Studio"
          className="w-full h-[500px] object-cover"
        />
        <div ref={contentRef}>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">Who We Are</p>
          <h2 className="text-5xl font-bold mb-8">Light is our language.</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Luminary Studio was born from a simple obsession — the way light transforms the ordinary
            into something eternal. Founded in 2018, we've built a reputation for images that don't
            just document moments, but define them.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Our team works across weddings, portraits, and commercial projects with one constant: an
            uncompromising eye for detail and a deep respect for the stories we're trusted to tell.
          </p>
        </div>
      </div>
    </section>
  );
}
