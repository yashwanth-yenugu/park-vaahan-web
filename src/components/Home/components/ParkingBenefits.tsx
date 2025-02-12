import { Card, CardContent } from "@/components/ui/card";
import { ParkingCircle, ShieldCheck, DoorOpen, MapPin } from "lucide-react";

const features = [
  {
    title: "Rent Out Your Parking Spot",
    description: "Turn your empty parking spot into extra income by listing it on Parkvaahan!",
    icon: ParkingCircle,
  },
  {
    title: "Reliable & Protected",
    description: "Find and book parking spots near your destination in seconds!",
    icon: ShieldCheck,
  },
  {
    title: "Seamless Entry",
    description: "Get hassle-free access to your reserved parking spot with our easy-to-use app!",
    icon: DoorOpen,
  },
  {
    title: "Locate Your Perfect Parking Spot",
    description: "Count on our dedicated customer support for a smooth and stress-free parking experience!",
    icon: MapPin,
  },
];

export default function ParkingBenefits() {
  return (
    <section className="pt-16 md:py-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 ">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="flex flex-col items-center text-center gap-4 p-6 shadow-lg bg-stone-100">
                <Icon className="text-green-600 w-16 h-16" />
                <CardContent>
                  <h3 className="text-xl font-semibold text-[#80b7f2]">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
