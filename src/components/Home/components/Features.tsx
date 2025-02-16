import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, CheckCircle2, User2 } from "lucide-react";

const parkerFeatures = [
  "Search for available parking spaces in nearby apartments or gated communities.",
  "Book monthly parking at affordable rates with secure payment options.",
  "Find parking close to your home, saving time and avoiding the stress of street parking.",
];

const ownerFeatures = [
  "List available parking spaces in your apartment or gated community.",
  "Set your pricing and availability to earn passive income.",
  "Manage and monitor bookings effortlessly.",
];

export default function Features() {
  return (
    <section className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-[#80b7f2] mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#80b7f2] mr-2" />
            Features & Benefits
          </div>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Your Convenient Solution for </span>
            <span className="text-[#80b7f2]">Finding Parking</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Whether you&apos;re struggling to find parking in a busy area or
            need a long-term spot near your home, our app connects you with
            available spaces in nearby apartments or gated communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-[#80b7f2] flex items-center gap-2">
                  <User2 className="h-5 w-5" />
                  For Parkers (Users)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {parkerFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#80b7f2] shrink-0 mt-0.5" />
                      <span className="text-gray-300 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-[#80b7f2] flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  For Space Owners
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {ownerFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#80b7f2] shrink-0 mt-0.5" />
                      <span className="text-gray-300 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-[#80b7f2]/20 blur-2xl -z-10 rounded-[32px]" />
            <div className="relative bg-white/5 border-white/10 p-4 rounded-[32px] shadow-2xl backdrop-blur-xl">
              <img
                src="person.jpg"
                className="w-full h-auto rounded-2xl"
                alt="Parking Solution"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
                <p className="text-sm font-medium text-gray-300">
                  Trusted by 100+ users
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
