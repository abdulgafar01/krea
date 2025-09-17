import { Folder, Video} from "lucide-react";
import React from "react";

const Nav = () => {
  return (
    <nav
      aria-label="Primary"
      className="bg-gray-100  md:fixed top-2 py-2 px-3 right-0 left-0 z-[500] w-fit mx-auto rounded-2xl backdrop-blur-2xl transition-[transform,opacity,filter] duration-[500ms] ease-[cubic-bezier(.4,0,.2,1)]"
    >
      <ul className="m-0 flex flex-col md:flex-row gap-2 list-none p-0">
        {/* Home */}
        <li className="relative group ">
          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center text-gray-700  bg-white rounded-xl"
          >
          <svg width="18" height="18" className="absolute inset-0 z-20 m-auto"
           viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11.7354C2 10.4141 2 9.75338 2.18958 9.15972C2.35736 8.63437 2.63195 8.14939 
            2.99611 7.73524C3.40763 7.26724 3.97416 6.92732 5.10723 6.24748L8.70722 4.08748C9.90443
             3.36916 10.503 3.01 11.142 2.86967C11.7073 2.74555 12.2927 2.74555 12.858 2.86967C13.497
              3.01 14.0956 3.36916 15.2928 4.08748L18.8928 6.24748C20.0258 6.92732 20.5924 7.26724 21.0039
            7.73524C21.3681 8.14939 21.6426 8.63437 21.8104 9.15972C22 9.75338 22 10.4141 22 
            11.7354V18.9118C22 20.0319 22 20.592 21.782 21.0198C21.5903 21.3961 21.2843 21.7021 20.908
            21.8938C20.4802 22.1118 19.9201 22.1118 18.8 22.1118H18.2C17.0799 22.1118 16.5198 22.1118
                16.092 21.8938C15.7157 21.7021 15.4097 21.3961 15.218 21.0198C15 20.592 15 20.0319 15 18.9118V15.7118C15
                15.1518 15 14.8717 14.891 14.6578C14.7951 14.4697 14.6422 14.3167 14.454 14.2208C14.2401
                14.1118 13.9601 14.1118 13.4 14.1118H10.6C10.0399 14.1118 9.75992 14.1118 9.54601
                14.2208C9.35785 14.3167 9.20487 14.4697 9.10899 14.6578C9 14.8717 9 15.1518
                    9 15.7118V18.9118C9 20.0319 9 20.592 8.78201 21.0198C8.59027 21.3961 8.28431
                    21.7021 7.90798 21.8938C7.48016 22.1118 6.9201 22.1118 5.8 22.1118H5.2C4.0799
                    22.1118 3.51984 22.1118 3.09202 21.8938C2.71569 21.7021 2.40973 21.3961 2.21799
                    21.0198C2 20.592 2 20.0319 2 18.9118V11.7354Z" fill="currentColor"></path>
                    </svg>
            <span className="absolute -bottom-8 scale-0 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100
             bg-gray-200 text-black text-xs  py-1 px-2 font-bold rounded-3xl">
              Home
            </span>
          </a>
        </li>

        {/* Image */}
        <li className="relative group">
          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center text-gray-700 hover:bg-gray-300 rounded-lg"
          >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 z-20 m-auto">
          <path fillRule="evenodd" clipRule="evenodd" d="M10.4763 9.85043C10.4763 10.8104 9.69763 11.589 8.73768 11.589C7.77772 11.589 7 10.8104 
          7 9.85043C7 8.89049 7.77772 8.11182 8.73768 8.11182C9.69763 8.11182 10.4754 8.88955 10.4763 9.84856V9.85043Z" fill="currentColor">
            </path><rect x="2.75" y="3.86182" width="18.5" height="16.5" rx="3.25" stroke="currentColor" strokeWidth="1.5"></rect>
            <path d="M15.758 13.1118C17.5271 13.1118 19.1544 14.6938 20 15.4766V19.1118H4C4 19.1118 5.29914 17.0464 6.6586 16.0349C8.01806 15.0235 9.56678 16.6015 
            11.2673 16.6015C12.9687 16.6015 13.9898 13.1118 15.758 13.1118Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            </path></svg>
            <span className="absolute -bottom-8 scale-0 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100
             bg-gray-200 text-black text-xs  py-1 px-2 font-bold rounded-3xl">
              Image
            </span>
          </a>
        </li>

        {/* Video */}
        <li className="relative group">
          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center text-gray-800  hover:bg-gray-300 rounded-lg"
          >
            
            <Video fill="black dark:blue" height={18} width={18}/>
            
            <span className="absolute -bottom-8 scale-0 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100
             bg-gray-200 text-black text-xs  py-1 px-2 font-bold rounded-3xl">
              Video
            </span>
          </a>
        </li>

        {/* Enhancer */}
        <li className="relative group">
          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center text-gray-800  hover:bg-gray-300 rounded-lg"
          >
           
            <svg
            width="18"
            height="18"
            className="absolute inset-0 z-20 m-auto"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M4.49935 13.0083C4.34395 13.5194 3.94455 13.9195 3.43425 14.075C3.94455 14.2306
                 4.34395 14.6306 4.49935 15.1417C4.65465 14.6306 5.05405 14.2306 5.56445 14.075C5.05405 13.9195 4.65465 13.5194 4.49935 13.0083Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path

                d="M16.3704 5.57373C16.215 6.08483 15.8156 6.48493 15.3053 6.64043C15.8156 6.79603
                 16.215 7.19603 16.3704 7.70713C16.5257 7.19603 16.9251 6.79603 17.4355 6.64043C16.9251 6.48493 16.5257 6.08483 16.3704 5.57373Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.82105 18.4485H7.83105"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.8125 3.69873H12.8025"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <rect
                x="3.3868"
                y="5.14091"
                width="2.5"
                height="22.0199"
                rx="1.25"
                transform="rotate(-44.5361 3.3868 5.14091)"
                stroke="currentColor"
                strokeWidth="1.5"
            />
            <path
                d="M8.4043 11.3093L11.2555 8.50389L20.2713 17.6668C21.046 18.4542 21.0357 19.7204 20.2484 20.4951C19.461 21.2698 18.1947 21.2596 17.42 20.4722L8.4043 11.3093Z"
                fill="currentColor"
            />
            </svg>

            <span className="absolute -bottom-8 scale-0 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100
            
            bg-gray-200 text-black text-xs  py-1 px-2 font-bold rounded-3xl">
              Enhancer
            </span>
          </a>
        </li>

        {/* Realtime */}
        <li className="relative group">
          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center text-gray-800 hover:bg-gray-300 rounded-lg"
          >
            <svg
                width="18"
                height="18"
                className="absolute inset-0 z-20 m-auto"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M14.9472 14.4612C14.6244 14.8306 14.4629 15.0153 14.2819
                     15.1777C14.121 15.3219 13.9487 15.4529 13.7667 15.5693C13.5618
                    15.7004 13.3384 15.8077 12.8914 16.0223C11.8174 16.538 11.2804
                    16.7959 10.9271 16.705C10.6205 16.626 10.3693 16.4065 10.25
                    16.1132C10.1126 15.7753 10.2963 15.2086 10.6635 14.0752C10.8164
                    13.6035 10.8928 13.3677 10.9952 13.1471C11.0863 12.9511 11.193
                    12.7629 11.3144 12.5842C11.4511 12.383 11.6125 12.1983 11.9354 
                    11.8289L17.0023 6.03138C17.076 5.94704 17.1129 5.90487 17.1574
                    5.88701C17.1966 5.87129 17.2398 5.86839 17.2807 5.87871C17.3273
                    5.89045 17.3695 5.92731 17.4538 6.00102L19.9838 8.21213C20.0681
                    8.28584 20.1103 8.3227 20.1281 8.36727C20.1438 8.40647 20.1467
                    8.44964 20.1364 8.4906C20.1247 8.53715 20.0878 8.57932 20.0141
                            8.66366L14.9472 14.4612Z"
                    fill="currentColor"
                />
                <path
                    d="M20.8883 7.65066C20.8146 7.73499 20.7778 7.77716
                     20.7332 7.79503C20.694 7.81075 20.6508 7.81365 20.6099
                      7.80333C20.5633 7.79159 20.5211 7.75473 20.4368 7.68102L17.9096 
                      5.47231C17.8253 5.3986 17.7831 5.36175 17.7652 5.31718C17.7495 5.27798
                       17.7466 5.23481 17.7569 5.19385C17.7687 5.14729 17.8055 5.10512 17.8792
                        5.02079L18.3305 4.50446C18.6354 4.15563 18.7878 3.98121 18.9511
                         3.87147C19.3968 3.57199 19.9685 3.53354 20.4502 3.77066C20.6267
                          3.85755 20.8012 4.00999 21.15 4.31486C21.4988 4.61972 21.6732 4.77216
                           21.783 4.93546C22.0824 5.3811 22.1209 5.95283 21.8838 6.43456C21.7969
                            6.61108 21.6444 6.7855 21.3396 7.13432L20.8883 7.65066Z"
                    fill="currentColor"
                />
                <path
                    d="M9.5 18C9.5 18 7.2314 20.6818 6 20C4.7686 19.3182 8.43957 14.8136 8.43957 13.0357C8.43957 12.0802 5.54026 16.2053 3.75331 16.7185C0.87539 17.5452 7.17108 5 7.17108 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>


            <span className="absolute -bottom-8 scale-0 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100
             bg-gray-200 text-black text-xs  py-1 px-2 font-bold rounded-3xl">
              Realtime
            </span>
          </a>
        </li>

        {/* Edit */}
        <li className="relative group">
          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center text-gray-800  hover:bg-gray-300 rounded-lg"
          >
           <svg
      width="18"
      height="18"
      className="absolute inset-0 z-20 m-auto"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2.854L12 5.51603"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle
        cx="12.0001"
        cy="8.17831"
        r="2.12118"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10.4869 10.1001L7.45996 21.4302"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17.2646 21.2366C17.3715 21.6368 17.1338 22.0479 16.7336 22.1548C16.3334
         22.2617 15.9224 22.0239 15.8155 21.6238L17.2646 21.2366ZM14.2377 9.90652L17.2646 
         21.2366L15.8155 21.6238L12.7885 10.2937L14.2377 9.90652Z"
        fill="currentColor"
      />
      <path
        d="M6.42188 16.1118C6.42188 16.1118 7.91228 17.3606 12.0006 17.3606C16.0889
         17.3606 17.5793 16.1118 17.5793 16.1118"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
        <span className="absolute -bottom-8 scale-0 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100 bg-gray-200 text-black text-xs  py-1 px-2 font-bold rounded-3xl">
            Edit
        </span>
          </a>
        </li>

        {/* Assets */}
        <li className="relative group">
          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center text-gray-800  hover:bg-gray-300 rounded-lg"
          >
           <Folder fill="black" height={18} width={18}/>
            <span className="absolute -bottom-8 scale-0 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100 bg-gray-200 text-black text-xs  py-1 px-2 font-bold rounded-3xl">
              Assets
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
