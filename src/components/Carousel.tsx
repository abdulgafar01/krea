"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroCards = [
  {
    id: "wan22",
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the latest new and improved WAN 2.2 model. Exceptionally prompt adherence and liking abilities.",
    badge: "Latest Model",
    buttonText: "Try WAN 2.2",
    image: "/wan.webp",
  },
  {
    id: "flux1",
    title: "FLUX1 Krea",
    subtitle: "AI Image Generation",
    description:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    badge: "AI Model",
    buttonText: "Try FLUX1",
    image: "/krea.webp",
  },
  {
    id: "opensource",
    title: "Open Source",
    subtitle: "Community Models",
    description:
      "Explore community-driven AI models and contribute to the open source ecosystem.",
    badge: "Community",
    buttonText: "Explore",
    image: "/video.webp",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroCards.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + heroCards.length) % heroCards.length);
    
  };

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl relative">
        {/* Slide */}
                {/* <div className="relative overflow-hidden rounded-xl">
        <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 80}%)` }}
        >
            {heroCards.map((card) => (
            <div
                key={card.id}
                className="min-w-[80%] mr-4 relative bg-cover bg-center rounded-xl flex-shrink-0"
                style={{ backgroundImage: `url(${card.image})` }}
            >
                Overlay & content
                <div className="relative z-10 py-6 px-8 h-[420px] flex flex-col justify-between  rounded-xl">
                <div>
                <span className="text-xs px-2 py-1 bg-white/10 text-white border-white/20 rounded">
                    {card.badge}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-white">
                    {card.title}
                </h2>

                </div>

                <div className="flex items-center justify-between">
                    <div>
                    <h3 className="text-base lg:text-lg text-white font-bold">
                        {card.subtitle}
                    </h3>
                    <p className="text-white/80 text-sm max-w-md">
                        {card.description}
                    </p>
                    </div>
                    <Button className="bg-white text-gray-800 rounded-full">
                    {card.buttonText}
                    </Button>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div> */}

        <div className="relative min-h-[420px] rounded-xl overflow-hidden">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroCards[current].image})` }}
          />
          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/30 to-transparent" /> */}
          {/* Content */}
          <div className="relative z-10 py-6 px-8 h-full flex flex-col justify-between">
            <div>
                <span className="text-xs px-2 py-1 bg-white/10 text-white border-white/20 rounded">
                  {heroCards[current].badge}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                {heroCards[current].title}
                </h2>
            </div>

                    {/* down */}
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
        </div>

        {/* Navigation */}
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
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-muted-foreground  bg-gray-300 dark:bg-gray-50 rounded-full"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>


            
          <Button
            onClick={nextSlide}
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-muted-foreground hover:text-foreground bg-gray-300 dark:bg-gray-50 rounded-full"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Carousel;
