import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactIsland() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(contentRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-zinc-950 text-white py-32 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">Get In Touch</p>
        <h2 ref={headingRef} className="text-5xl font-bold mb-8">
          Let's create something together.
        </h2>
        <div ref={contentRef}>
          <p className="text-gray-400 leading-relaxed mb-12">
            Whether you have a project in mind or just want to talk, we'd love to hear from you.
          </p>
          <a
            href="mailto:hello@luminarystudio.com"
            className="border border-white text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            hello@luminarystudio.com
          </a>
        </div>
      </div>
    </section>
  );
}
