'use client';

import { useState } from 'react';
import { regionInfo } from "@/app/data/region";
import { shops } from "@/app/data/shop";
import { Shop } from "@/app/interfaces/shop";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose } from "@/app/components/ui/drawer";

export default function Shops() {
    const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState<{ name: string, boutiques: Shop[] } | null>(null);

    function handleRegionClick(regionId: string) {
        const regionData = shops.find(region => String(region.id) === String(regionId));
        const regionInfoData = regionInfo.find(region => region.id === regionId);
        setSelectedRegion({
            name: regionInfoData ? regionInfoData.title : "Région inconnue",
            boutiques: regionData ? regionData.shop : []
        });
        setOpenDrawer(true);
    }

    return (
        <div className="w-full h-full max-h-screen">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="596.41547"
                height="584.5448"
                viewBox="0 0 596.41547 584.5448"
                className="w-full h-full max-h-screen"
            >
                <g>
                    {regionInfo.map((region) => (
                        <path
                            key={region.id}
                            d={region.d}
                            aria-label={region.title}
                            id={region.id}
                            className={`transition-colors duration-200 cursor-pointer ${hoveredRegion === region.id ? 'fill-blue-500' : 'fill-gray-300'
                                }`}
                            onMouseEnter={() => setHoveredRegion(region.id)}
                            onMouseLeave={() => setHoveredRegion(null)}
                            onClick={() => handleRegionClick(region.id)}
                        />
                    ))}
                </g>
            </svg>
            {/* Drawer affichant les boutiques */}
            <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>
                            {selectedRegion ? selectedRegion.name : "Région"}
                        </DrawerTitle>
                        <DrawerDescription>
                            {selectedRegion && selectedRegion.boutiques.length > 0 ? (
                                <ul className="mt-4 space-y-4">
                                    {selectedRegion.boutiques.map((boutique) => (
                                        <li key={boutique.id} className="p-3 border rounded-xl">
                                            <strong>{boutique.name}</strong><br />
                                            {boutique.address}<br />
                                            <span className="text-xs">{boutique.phone} — {boutique.email}</span><br />
                                            <span className="text-sm italic">{boutique.opening_hours}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <span>Nous n&apos;avons pas encore de boutiques dans cette région</span>
                            )}
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerClose className="mt-4">Fermer</DrawerClose>
                </DrawerContent>
            </Drawer>
        </div>
    );
}
