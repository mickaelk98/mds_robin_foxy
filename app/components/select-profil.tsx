"use client"

import Image from "next/image";
import proIcon from "@/app/assets/pro-icon.png";
import otherIcon from "@/app/assets/other-icon.png";
import { useUsertypeStore } from "@/app/lib/stores/user-type-store";
import { UserType } from "@/app/interfaces/user";

export function SelectProfil() {
    const { userType, changeUserType } = useUsertypeStore();

    return <div className="relative md:hidden flex flex-col items-center bg-white rounded-[100px] my-10 p-4 border-4 border-[var(--green-200)] mx-auto w-[90%] max-w-[350px]">
        <h1 className="text-2xl uppercase font-bold absolute -top-4 left-[50%] translate-x-[-50%]">Vous etes</h1>
        <div className="flex flex-col items-center">
            <div className="flex items-center justify-center">
                <button className={`font-bold cursor-pointer ${userType === UserType.PROFESSIONAL ? "bg-[var(--green-200)] py-2 px-2 rounded-[10px]" : ""}`} onClick={() => changeUserType()}>Professionnel</button>
                <Image src={proIcon} alt="icon pro" width={100} height={100} />
            </div>
            <div className="flex items-center justify-center">
                <Image src={otherIcon} alt="icon autre" width={100} height={100} />
                <button className={`font-bold cursor-pointer ${userType === UserType.USER ? "bg-[var(--green-200)] py-2 px-2 rounded-[10px]" : ""}`} onClick={() => changeUserType()}>Autre</button>
            </div>
        </div>
    </div>
}