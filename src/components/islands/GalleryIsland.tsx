import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', alt: 'Wedding' },
  { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80', alt: 'Portrait' },
  { src: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800&q=80', alt: 'Commercial' },
  { src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=80', alt: 'Nature' },
  { src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80', alt: 'Camera' },
  { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80', alt: 'Landscape' },
];

export default function GalleryIsland() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imgRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      imgRefs.current.forEach((img, i) => {
        gsap.from(img, {
          scrollTrigger: { trigger: img, start: 'top 90%', once: true },
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          delay: (i % 3) * 0.1,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="bg-black text-white py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">Our Work</p>
        <h2 ref={headingRef} className="text-5xl font-bold mb-20">
          Selected Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <img
              key={img.alt}
              ref={(el) => { if (el) imgRefs.current[i] = el; }}
              src={img.src}
              alt={img.alt}
              className="w-full h-72 object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
