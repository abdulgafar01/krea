"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Tools from "@/components/Tools";


const slides = [
  {
    id: 1,
    title: "WAN 2.2 Image generation",
    subtitle: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    button: "Try WAN 2.2",
    image: "/wan.png", // replace with your own image path
  },
  {
    id: 2,
    title: "Open Source",
    subtitle: "We’re making the weights to our FLUX1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    button: "Learn More",
    image: "/flux.png",
  },
];

const tools = [
  { name: "Image", desc: "Generate images with custom styles like PBR and ideogram.", badge: "New" },
  { name: "Video", desc: "Generate videos with Haiku, Pika, Runway, Luma, and more." },
  { name: "Realtime", desc: "Realtime AI rendering on a canvas, traditional feedback loops." },
  { name: "Enhancer", desc: "Upscale and enhance images and videos up to 2K/4K." },
  { name: "Edit", desc: "Generate and edit images, inpaint, and outpaint." },
  { name: "Video Lipsync", desc: "Sync any video to any audio.", badge: "New" },
  { name: "Motion Transfer", desc: "Transfer motion to images and animate characters." },
  { name: "Train", desc: "Train AI models to recognize styles, products, or characters." },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <main className="min-h-screen w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Top Navigation */}
      {/* <Header/> */}
     <Header/>


      <div>
        <Carousel/>
      </div>
      

      <div>
        <Tools/>
      </div>

      {/* Tools Section */}
      <section className="px-6 py-12">
        <h3 className="text-lg font-semibold mb-4">Generate</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, i) => (
            <Card key={i} className="hover:shadow-md transition">
              <CardContent className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h4 className="font-bold text-base flex items-center gap-2">
                    {tool.name}
                    {tool.badge && <span className="px-2 py-0.5 text-xs bg-blue-100 text-blue-600 rounded">{tool.badge}</span>}
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">{tool.desc}</p>
                </div>
                <Button className="mt-4" variant="outline">Open</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-6 flex flex-col md:flex-row justify-between items-center border-t text-sm text-gray-500">
        <div>Krea AI</div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Button variant="link" className="p-0 h-auto">Legal</Button>
          <Button variant="link" className="p-0 h-auto">Pricing</Button>
        </div>
        <div className="mt-2 md:mt-0">curated by <span className="font-semibold">Mobbin</span></div>
      </footer>
    </main>
  );
}
