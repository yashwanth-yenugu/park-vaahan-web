import { Card, CardContent } from "@/components/ui/card";
import { DoorOpen, MapPin, ParkingCircle, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Rent Out Your Parking Spot",
    description:
      "Turn your empty parking spot into extra income by listing it on Parkvaahan!",
    icon: ParkingCircle,
  },
  {
    title: "Reliable & Protected",
    description:
      "Find and book parking spots near your destination in seconds!",
    icon: ShieldCheck,
  },
  {
    title: "Seamless Entry",
    description:
      "Get hassle-free access to your reserved parking spot with our easy-to-use app!",
    icon: DoorOpen,
  },
  {
    title: "Locate Your Perfect Parking Spot",
    description:
      "Count on our dedicated customer support for a smooth and stress-free parking experience!",
    icon: MapPin,
  },
];

export default function ParkingBenefits() {
  return (
    <section className="pt-16 md:py-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Why Choose </span>
            <span className="text-[#80b7f2]">ParkVaahan</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Experience the future of parking with our innovative solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="flex flex-col items-center text-center gap-4 p-6 bg-white/5 border-white/10 backdrop-blur-xl shadow-lg hover:bg-white/10 transition-all"
              >
                <Icon className="text-[#80b7f2] w-16 h-16" />
                <CardContent>
                  <h3 className="text-xl font-semibold text-[#80b7f2] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
