import { Menu, Settings } from "lucide-react";
import Image from "next/image";
import foxyHead from "@/app/assets/foxy-head.png";
import logo from "@/app/assets/logo.png";

export function MobileHeader() {
  return (
    <header className="lg:hidden bg-[var(--orange-500)]">
      <div className="w-full flex items-center justify-center lg:hidden mb-5">
        <svg
          width="402"
          height="44"
          viewBox="0 0 402 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9516 -15.5163L13.4223 -21.3671C-14.1177 -50.5083 6.34264 -98.4709 46.4372 -98.7599L360.198 -101.021C404.829 -101.343 424.747 -45.1177 389.866 -17.2715L386.914 -14.9142C380.496 -9.79063 372.527 -7 364.315 -7H360.02C358.027 -7 356.054 -6.60161 354.217 -5.82824C349.977 -4.04313 346.795 -0.405899 345.59 4.03341L337.335 34.4254C336.787 36.4446 335.754 38.2995 334.326 39.8291C331.321 43.0489 326.877 44.5068 322.549 43.6929L279.05 35.5136C273.832 34.5324 268.435 35.3123 263.708 37.7308L259.281 39.9957C253.357 43.0265 246.192 42.2013 241.113 37.9031C238.134 35.3829 234.359 34 230.458 34H172.396C168.262 34 164.257 35.4422 161.072 38.0779C155.324 42.835 147.216 43.4922 140.777 39.7229L137.71 37.9276C133.359 35.381 128.288 34.3451 123.288 34.9816L107.177 37.032C104.729 37.3436 102.308 37.8374 99.9334 38.5094L83.9547 43.0317C79.5589 44.2758 74.8359 43.4542 71.1184 40.7989C68.1419 38.6728 66.0424 35.5348 65.2127 31.9723L58.9513 5.08508C58.3281 2.40903 57.0105 -0.0554504 55.1313 -2.05997C52.1765 -5.21178 48.0488 -7 43.7285 -7H38.7177C31.2382 -7 24.0889 -10.0803 18.9516 -15.5163Z"
            fill="white"
          />
        </svg>
        <Menu size={32} className="text-[var(--blue-200)] cursor-pointer" />
      </div>
      <div className="w-full flex items-center justify-center gap-4 pb-10">
        <Image src={foxyHead} alt="Logo" width={50} height={50} />
        <Image src={logo} alt="Logo" width={70} height={70} />
        <Settings size={32} className="text-[var(--blue-200)]" />
      </div>
    </header>
  );
}
