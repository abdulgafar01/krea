import { ChevronDown } from 'lucide-react'
import Image from 'next/image';
import React from 'react'

const realtime = "bg-[linear-gradient(0deg,rgb(206,246,255)_0%,oklch(0.7972_0.1583_221.31)_35%,oklch(0.6575_0.1796_237.869)_100%)]";
// bg-[#1B1C1D]

const tools = [
  {image:"/icons/image.svg", bg:"bg-[linear-gradient(0deg,#D0E3F1_0%,#294962_100%)]", name: "Image", desc: "Generate images with custom styles like PBR and ideogram.", badge: "New" },
  {image:"/icons/video.svg", bg:"bg-[oklch(79.55%_0.1875_75.3501)]", name: "Video", desc: "Generate videos with Haiku, Pika, Runway, Luma, and more." },
  {image:"/icons/real-time.svg", bg:realtime, name: "Realtime", desc: "Realtime AI rendering on a canvas, traditional feedback loops." },
  {image:"/icons/wand.svg", bg:"bg-[linear-gradient(0deg,rgb(136,_136,_136)_0%,rgb(0,_0,_0)_100%)]", name: "Enhancer", desc: "Upscale and enhance images and videos up to 2K/4K.", badge: "New" },
  {image:"/icons/edit.svg", bg:"bg-[linear-gradient(0deg,rgb(174,_145,_202)_0%,rgb(89,_42,_133)_60%,rgb(24,_7,_40)_100%)]", name: "Edit", desc: "Generate and edit images, inpaint, and outpaint.", badge: "New" },
  {image:"/icons/mic.svg", bg:"bg-[linear-gradient(0deg,rgb(187,_202,_145)_0%,rgb(60,_135,_143)_60%,rgb(7,_40,_15)_100%)]", name: "Video Lipsync", desc: "Sync any video to any audio.", badge: "New" },
  {image:"/icons/up-user.svg", bg:"bg-[#1B1C1D]", name: "Motion Transfer", desc: "Transfer motion to images and animate characters.",badge: "New" },
  {image:"/icons/box.svg", bg:"bg-[#2f2f2f]", name: "Train", desc: "Train AI models to recognize styles, products, or characters." },
];

const Tools = () => {
    

  return (
    <section className="px-8 py-12">
        <div className='flex items-center justify-between'>
            <h3 className="text-xl font-bold mb-4">Generate</h3>

            <div className='text-blue-400 font-semibold flex items-center gap-2 cursor-pointer'>
                <ChevronDown/>
                <span>Show all</span>
            </div>

        </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
          {tools.map((tool, i) => (
            <div key={i} className="w-86">
              <div className="p-2 flex items-center gap-3 md:gap-1 ">
                <div className='flex items-center gap-3'>
                <div className={`rounded-xl p-3 ${tool.bg} text-white`}>
                    <Image src={tool.image} alt='icon' width={23} height={23}/>
                </div>
                <div>
                  <h4 className="font-bold flex items-center gap-2">
                    <span>{tool.name}</span>
                    {tool.badge && <span className="px-2 py-0.5 text-[10px] bg-blue-600 text-white rounded-2xl">{tool.badge}</span>}
                  </h4>
                  <p className="md:text-xs  text-sm md:w-48 w-45 mt-2">{tool.desc}</p>
                </div>

                </div>
                <button className="bg-gray-200 dark:text-gray-800 cursor-pointer py-1 px-3 text-xs rounded-full">Open</button>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Tools
