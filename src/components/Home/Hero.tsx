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
      title: "Audi Q5",
      subtitle: "Inspiración sin límites",
      link: "",
      imageDesktop: "/Hero/Q5-desktop.jpg",
      imageMobile: "/Hero/Q5-mobile.jpg",
    },
    {
      title: "Audi A5",
      subtitle: "Velocidad y calidad",
      link: "",
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
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
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
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                <div className="relative z-10 h-full flex flex-col items-center justify-end pb-16 text-white px-6 mb-10">
                  <div className="text-center">
                    <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl  mb-2 md:mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
                      {slide.subtitle}
                    </p>
                    <Link
                      href={slide.link}
                      className="group mt-6 md:mt-8 inline-block"
                    >
                      <div className="bg-white text-[#05141F]  text-sm md:text-base py-3 px-8 md:py-4 md:px-10 hover:bg-[#37434C] hover:text-white transition-all duration-300">
                        <span className="relative">
                          Conocer más
                          <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#05141F] transition-all duration-300 group-hover:w-full group-hover:bg-white" />
                        </span>
                      </div>
                    </Link>
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