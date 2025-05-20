import Image from "next/image";
import pc from "@/app/assets/pc.png";
import welcomBuble from "@/app/assets/welcom-buble.png";

export function Welcom() {
  return (
    <>
      <div className="bg-[var(--orange-500)] py-20 w-full relative z-10">
        <div className="w-full max-w-7xl mx-auto px-2 lg:px-0">
          <div className="flex items-center justify-center">
            <div className="relative w-1/2">
              <p className="absolute top-[-10px] left-2 text-lg md:text-4xl font-extrabold bg-background p-1 md:p-2 rounded-2xl uppercase border-2 border-black rotate-[-5deg] lg:text-5xl">
                Bienvenue !
              </p>
              <Image src={welcomBuble} alt="bulle" />
            </div>
            <Image
              className="w-1/2 max-w-[470px] translate-x-[-10px] translate-y-[50px]"
              src={pc}
              alt="pc"
            />
          </div>
        </div>
      </div>

      {/* SVG WAVE TRANSITION */}
      <div className="w-full overflow-hidden flex justify-center items-center z-[5] relative">
        <svg
          width="1280"
          height="141"
          viewBox="0 0 1280 141"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="translate-y-[-70px] pointer-events-none"
        >
          <path
            d="M-65.0157 85.1399L-74.5378 73.4355C-77.4607 69.8427 -81.8 67.6964 -86.4294 67.5537C-101.938 67.0758 -107.718 46.9899 -94.8343 38.3427L-81.3662 29.3031C-79.066 27.7593 -76.4853 26.6817 -73.7703 26.1315L37.0634 3.67162C49.5271 1.14591 62.3582 1.02071 74.8688 3.30274L254.637 36.0936C259.545 36.989 264.514 37.5157 269.501 37.6694L619.155 48.4439L1255.25 40.5718C1292.57 40.1098 1315.39 81.3985 1295.13 112.757C1277.06 140.732 1236.38 141.41 1217.38 114.052L1209.25 102.332C1194.39 80.9322 1166.8 72.5053 1142.52 81.9506L1117.58 91.6547C1098.55 99.0563 1076.99 95.247 1061.65 81.7751C1047.23 69.1096 1027.23 64.9285 1008.94 70.7576L955.468 87.8047C933.695 94.7454 910.09 93.0665 889.518 83.1142L871.357 74.3279C847.499 62.7854 818.926 67.8688 800.513 86.9318L764.068 124.664C750.184 139.037 726.091 134.276 718.719 115.702C713.424 102.363 698.764 95.3363 685.049 99.5647L570.844 134.776C541.923 143.693 510.52 139.033 485.435 122.102L470.097 111.749C444.194 94.2652 410.834 92.2451 383.01 106.476L361.697 117.376C334.09 131.495 300.271 122.144 283.84 95.8473C264.479 64.8609 222.083 58.363 194.331 82.1284L175.419 98.3227C151.311 118.967 114.694 114.523 96.224 88.7116L93.9756 85.5696C74.3366 58.1245 33.9713 56.8807 12.6797 83.0645L10.9992 85.1311C-8.60358 109.238 -45.4074 109.242 -65.0157 85.1399Z"
            fill="#f4981c"
            stroke="white"
            strokeWidth="3"
          />
        </svg>
      </div>
    </>
  );
}
