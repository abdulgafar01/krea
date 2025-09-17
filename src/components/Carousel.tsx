"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroCard from "./HeroCard";

const heroCards = [
  {
    id: "1",
    title: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the latest new and improved WAN 2.2 model.",
    badge: "Latest Model",
    buttonText: "Try WAN 2.2",
    image: "/wan.webp",
  },
  {
    id: "2",
    title: "AI Image Generation",
    description:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights.",
    badge: "AI Model",
    buttonText: "Try FLUX1",
    image: "/krea.webp",
  },
  {
    id: "3",
    title: "Community Models",
    description:
      "Explore community-driven AI models and contribute to the open source ecosystem.",
    centerText: "OSS",
    badge: "Community",
    buttonText: "Explore",
    image: "/video.webp",
  },
   {
    id: "4",
    title: "Shared Resources",
    description:
      "Discover, share, and fork AI models uploaded by the community. Build faster with collaborative tools.",
    centerText: "Model Hub",
    badge: "Open Source",
    buttonText: "Browse Hub",
    image: "/images/img.webp",
  },
  {
    id: "5",
    title: "Join the Movement",
    description:
      "Submit your own models, datasets, or improvements and become a part of the open AI ecosystem.",
    centerText: "Contribute",
    badge: "Contributor",
    buttonText: "Contribute Now",
    image: "/images/haircut.webp",
  },
  {
    id: "6",
    title: "Fuel for Models",
    description:
      "Access curated datasets to train, fine-tune, or benchmark AI models shared by the community.",
    centerText: "Datasets",
    badge: "Resources",
    buttonText: "Explore Data",
    image: "/images/img2.webp",
  },
  {
    id: "7",
    title: "Papers & Findings",
    description:
      "Read cutting-edge research papers and findings from contributors driving AI innovation.",
    centerText: "AI Research",
    badge: "Research",
    buttonText: "Read Papers",
    image: "/images/img6.webp",
  },
  {
    id: "8",
    title: "Open-Source Libraries",
    description:
      "Discover libraries, SDKs, and plugins created to accelerate AI development for everyone.",
    centerText: "SDK",
    badge: "Tools",
    buttonText: "View Tools",
    image: "/images/img4.webp",
  },
  {
    id: "9",
    title: "Collaborate & Connect",
    description:
      "Join discussions, forums, and hackathons. Connect with other AI enthusiasts worldwide.",
    centerText: "Chat",
    badge: "Community",
    buttonText: "Join Now",
    image: "/images/img5.webp",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
   const [scrollAmount, setScrollAmount] = useState(896);
  
    // Update scroll amount based on screen size
    useEffect(() => {
      const updateScrollAmount = () => {
        if (window.innerWidth < 640) {
          setScrollAmount(336); // 320px card + 16px gap
        } else if (window.innerWidth < 900) {
          setScrollAmount(576); // 560px card + 16px gap
        } else if (window.innerWidth < 1024) {
          setScrollAmount(736); // 720px card + 16px gap
        } else {
          setScrollAmount(896); // 880px card + 16px gap
        }
      };
       updateScrollAmount();
    window.addEventListener("resize", updateScrollAmount);
    return () => window.removeEventListener("resize", updateScrollAmount);
  }, []);

  

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroCards.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + heroCards.length) % heroCards.length);
    
  };

  return (
    <section className="py-6 px-2 sm:px-6 lg:px-8">
      <div className="mx-auto md:max-w-6xl max-w-4xl relative">
        {/* Slide */}
      
      <div className="overflow-hidden">
              <div
                className="flex gap-4 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${current * scrollAmount}px)`,
                }}
              >
                {heroCards.map((card) => (
                  <div key={card.id} className="flex-shrink-0">
                    <HeroCard
                      image={card.image}
                      badge={card.badge}
                      title={card.title}
                      description={card.description}
                      buttonText={card.buttonText}
                      centerText={card.centerText}
                    />
                  </div>
                ))}
              </div>
            </div>


{/* 
        <div className="relative min-h-[420px] rounded-xl overflow-hidden">
          
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroCards[current].image})` }}
          />
       
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/30 to-transparent" />
          

          <div className="relative z-10 py-6 px-8 h-full flex flex-col justify-between">
            <div>
                <span className="text-xs px-2 py-1 bg-white/10 text-white border-white/20 rounded">
                  {heroCards[current].badge}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                {heroCards[current].title}
                </h2>
            </div>

                    
                <div className="flex items-center justify-between mt-54">
                    <div>
                        <h3 className="text-base lg:text-lg text-white/99 font-bold">
                        {heroCards[current].subtitle}
                        </h3>
                    <p className="text-white/89 text-sm max-w-md leading-relaxed">
                        {heroCards[current].description}
                    </p>
                    </div>
                    <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white text-gray-800 border-white/20 rounded-full hover:bg-white backdrop-blur-sm mt-2"
                    >
                        {heroCards[current].buttonText}
                    </Button>
                </div>

            
          </div>
        </div> */}

        
        <div className="flex items-center justify-between mt-4">
          <div>

          </div>

          {/* Dots */}
          <div className="flex space-x-2">
            {heroCards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition ${
                  idx === current
                    ? "bg-foreground"
                    : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">

          <Button
            onClick={prevSlide}
            size="icon"
            className="w-8 h-8 text-muted-foreground  bg-gray-300 hover:bg-gray-300 dark:bg-gray-50 rounded-full cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" color="black"/>
          </Button>


            
          <Button
            onClick={nextSlide}
            size="icon"
            className="w-8 h-8 text-muted-foreground hover:text-foreground bg-gray-300 hover:bg-gray-300 dark:bg-gray-50 rounded-full cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" color="black"/>
          </Button>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Carousel;
