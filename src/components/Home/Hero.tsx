"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [, setScrolled] = useState(false);
  const [, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Embla Carousel config
  const autoplay = Autoplay({ delay: 5000, stopOnInteraction: false });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [autoplay]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const slides = [
    {
      title: "Nuevo Audi Q5",
      subtitle: "Incomparable",
      link: "/modelos/Q5",
      imageDesktop: "/Hero/Q5-desktop.jpg",
      imageMobile: "/Hero/Q5-mobile.jpg",
    },
    {
      title: "Audi A5",
      subtitle: "Emociones intensas",
      link: "/modelos/A5",
      imageDesktop: "/Hero/A5.jpg",
      imageMobile: "/Hero/A5.jpg",
    },
    
  ];

  const emblaStyles = `
    .embla {
      overflow: hidden;
      width: 100%;
      height: 100%;
    }
    .embla__container {
      display: flex;
      height: 100%;
    }
    .embla__slide {
      flex: 0 0 100%;
      min-width: 0;
      position: relative;
      height: 100%;
    }
  `;

  return (
    <>
      <style jsx global>{emblaStyles}</style>
      
      {/* HERO FULL SCREEN */}
      <section className="relative h-screen overflow-hidden -mt-6">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container z-30">
            {slides.map((slide, index) => (
              <div key={index} className="embla__slide">
                <div className="absolute inset-0 hidden md:block">
                  <Image
                    src={slide.imageDesktop}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                </div>

                <div className="absolute inset-0 block md:hidden">
                  <Image
                    src={slide.imageMobile}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                </div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
                  <div className="text-center max-w-4xl">
                    <h1 className="text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-light mb-4 md:mb-6 tracking-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-light text-gray-200 mb-8 md:mb-12">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <Link
                        href={slide.link}
                        className="group inline-flex items-center"
                      >
                        <div className="bg-white text-[#05141F] font-medium text-sm md:text-base py-3.5 px-10 md:py-4 md:px-12 hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider">
                          Descubrí todos los modelos {slide.title}
                        </div>
                      </Link>
                      <Link
                        href="/modelos"
                        className="group inline-flex items-center border-2 border-white text-white font-medium text-sm md:text-base py-3.5 px-10 md:py-4 md:px-12 hover:bg-white hover:text-[#05141F] transition-all duration-300 uppercase tracking-wider"
                      >
                        Explorar modelos
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all"
          aria-label="Slide anterior"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all"
          aria-label="Slide siguiente"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
         </>
  );
}