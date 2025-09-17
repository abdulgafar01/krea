import Image from "next/image";


const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 dark:bg-gray-100 pb-2 ">
      <div className="mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Krea AI Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-9 h-9 text-white bg-black rounded-lg">
             <Image src="/logo-white.svg" alt="Krea AI Logo" width={24} height={24} className="text-white" />
            </div>
            <span className="text-white dark:text-gray-800 font-bold text-base sm:text-2xl">Krea AI</span>
          </div>

          {/* Right Side - Curated by Mobbin */}
          <div className="flex items-center gap-3 text-white">
            <span className="text-base sm:text-2xl font-bold tracking-normal dark:text-gray-800 ">
              curated by
            </span>
            <div>
      {/* Light mode logo */}
                    <Image
                        src="/mobbin-logo-wordmark_dark.svg"
                        alt="Mobbin Logo"
                        width={100}
                        height={24}
                        className="block dark:hidden"
                    />
                    {/* Dark mode logo */}
                    <Image
                        src="/mobbin-logo-wordmark_light.svg"
                        alt="Mobbin Logo"
                        width={100}
                        height={24}
                        className="hidden dark:block"
                    />
                    </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer