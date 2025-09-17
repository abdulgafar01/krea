import { HeroCardProps } from '@/lib/types'
import React from 'react'
import { Button } from './ui/button'

const HeroCard = ({
  image,
  badge,
  title,
  description,
  centerText,
  buttonText,
}: HeroCardProps) => {
  return (
    <div className="relative rounded-xl overflow-hidden  w-[20rem] md:w-[55rem] h-[12rem] md:h-[30rem]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/50 to-transparent" /> */}
      {/* Content */}
      <div className="relative z-10 py-6 px-8 h-full">
        <div className='absolute top-2 left-2'>
            <span className="text-[10px] px-2 py-1 bg-white/30 text-white border-white/20 rounded-full">
              {badge}
            </span>
            
        </div>
          {/* center text */}
          <div className='absolute inset-0 flex items-center justify-center text-white text-3xl  md:text-8xl font-bold'>
                {centerText}
          </div>

                {/* down */}
            <div className="absolute bottom-2 left-0 right-0 flex items-end justify-between md:px-8 px-3">
                <div>
                    <h3 className="text-sm md:text-base lg:text-lg text-white/99 font-bold">
                    {title}
                    </h3>
                <p className="text-white/80 text-xs md:text-sm max-w-sm md:max-w-md tracking-tighter">
                    {description}
                </p>
                </div>
                <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white text-gray-800 border-white/20 rounded-full hover:bg-white backdrop-blur-sm mt-2 cursor-pointer"
                >
                    {buttonText}
                </Button>
            </div>
      </div>
    </div>
  )
}

export default HeroCard
