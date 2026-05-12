import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Hero animation
gsap.from("#hero h1", { opacity: 0, y: 60, duration: 1.2, ease: "power3.out", delay: 0.3 });
gsap.from("#hero p", { opacity: 0, y: 40, duration: 1, ease: "power3.out", delay: 0.6 });
gsap.from("#hero a", { opacity: 0, y: 30, duration: 1, ease: "power3.out", delay: 0.9 });

// Services animation
gsap.from("#services h2", {
  scrollTrigger: { trigger: "#services", start: "top 80%" },
  opacity: 0, y: 50, duration: 1, ease: "power3.out"
});
gsap.from("#services .border-t", {
  scrollTrigger: { trigger: "#services", start: "top 70%" },
  opacity: 0, y: 40, duration: 0.8, stagger: 0.2, ease: "power3.out"
});

// Gallery animation
gsap.utils.toArray("#gallery img").forEach((img, i) => {
  gsap.from(img, {
    scrollTrigger: {
      trigger: img,
      start: "top 90%",
      once: true
    },
    opacity: 0,
    scale: 0.95,
    duration: 0.8,
    delay: i * 0.1,
    ease: "power3.out"
  });
});


// About animation
gsap.from("#about img", {
  scrollTrigger: { trigger: "#about", start: "top 75%" },
  opacity: 0, x: -60, duration: 1, ease: "power3.out"
});
gsap.from("#about div", {
  scrollTrigger: { trigger: "#about", start: "top 75%" },
  opacity: 0, x: 60, duration: 1, ease: "power3.out"
});

// Testimonials animation
gsap.from("#testimonials .border-t", {
  scrollTrigger: { trigger: "#testimonials", start: "top 75%" },
  opacity: 0, y: 40, duration: 0.8, stagger: 0.2, ease: "power3.out"
});

// Contact animation
gsap.from("#contact h2", {
  scrollTrigger: { trigger: "#contact", start: "top 80%" },
  opacity: 0, y: 50, duration: 1, ease: "power3.out"
});