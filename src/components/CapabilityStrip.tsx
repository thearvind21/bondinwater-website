import React from "react";
import { Leaf, PawPrint, Compass, Layers } from "lucide-react";

export function CapabilityStrip() {
  const capabilities = [
    {
      id: "aquariums",
      title: "Aquariums &",
      subtitle: "Aquatic Environments",
      href: "#expertise",
      icon: Leaf,
    },
    {
      id: "habitats",
      title: "Animal Habitats",
      subtitle: "& Exhibits",
      href: "#expertise",
      icon: PawPrint,
    },
    {
      id: "design",
      title: "Design &",
      subtitle: "Engineering",
      href: "#expertise",
      icon: Compass,
    },
    {
      id: "turnkey",
      title: "Turnkey Delivery",
      subtitle: "& Ongoing Care",
      href: "#process",
      icon: Layers,
    },
  ];

  return (
    <section id="capabilities" className="bg-[#E9EFE7] border-b border-[#8CA477]/30 py-6 sm:py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0 items-center">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            const isLast = idx === capabilities.length - 1;

            return (
              <a
                key={item.id}
                href={item.href}
                className={`flex items-center gap-3.5 sm:gap-4 px-3 sm:px-6 py-2 transition-colors group ${
                  !isLast ? "lg:border-r lg:border-[#8CA477]/35" : ""
                }`}
              >
                <div className="text-[#1F4338] group-hover:text-[#4F8278] transition-colors shrink-0">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.6]" />
                </div>
                <div className="flex flex-col text-[#27302B] leading-tight">
                  <span className="text-sm sm:text-base font-serif font-medium group-hover:text-[#1F4338] transition-colors">
                    {item.title}
                  </span>
                  <span className="text-sm sm:text-base font-serif font-medium group-hover:text-[#1F4338] transition-colors">
                    {item.subtitle}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}