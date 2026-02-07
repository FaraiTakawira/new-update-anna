import { Coffee, Heart, Smile, MapPin, Leaf, Sparkles } from "lucide-react";

const marqueeItems = [
  { icon: MapPin, text: "Ou Tronk, Worcester" },
  { icon: Sparkles, text: "Unieke Atmosfeer" },
  { icon: Heart, text: "Met Liefde Gemaak" },
  { icon: Leaf, text: "Kwaliteit Bone" },
  { icon: Smile, text: "Vriendelike Diens" },
  { icon: Coffee, text: "Vars Koffie Daagliks" },
];

const Marquee = () => {
  return (
    <div className="bg-background py-3 md:py-4 overflow-hidden border-y border-border">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 mx-4 md:mx-8 text-primary"
          >
            <item.icon className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-medium text-sm md:text-base">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
