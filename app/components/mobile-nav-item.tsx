import { Chewy } from "next/font/google";

type Props = {
  children: React.ReactNode;
};

const chewy = Chewy({ subsets: ["latin"], weight: ["400"] });

export function MobileNavItem({ children }: Props) {
  return (
    <svg
      width="200"
      height="100"
      viewBox="0 0 228 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <path
        d="M132.346 78.1004C171.02 64.0321 175.93 72.1081 200.084 64.147C220.103 57.5452 232.527 33.5573 225.518 13.1712C217.336 -10.6356 190.475 3.56525 177.744 14.3092C170.349 20.5519 160.559 25.4748 151.621 29.1011C137.929 34.6548 122.551 34.2822 109.145 28.0606C91.2926 19.7759 71.9437 12.1427 53.1344 18.4081C30.8941 25.8238 8.17877 47.0671 1.95864 70.2622C-10.9978 118.595 70.3985 130.061 92.9375 103.752C106.791 91.0632 113.299 86.8913 132.339 78.0997"
        fill="white"
      />
      <text
        x="40"
        y="65"
        fill="#F4981C"
        fontSize="16"
        fontFamily="Arial"
        fontWeight="bold"
        className={`uppercase ${chewy.className} text-xl`}
      >
        {children}
      </text>
    </svg>
  );
}
