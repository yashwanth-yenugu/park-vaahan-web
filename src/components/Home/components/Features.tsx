import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-[#80b7f2]">
                <span className="flex h-2 w-2 rounded-full bg-[#80b7f2] mr-2" />
                Smart Parking Solution
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-white">
                  Your Convenient Solution for{" "}
                </span>
                <span className="text-[#80b7f2]">Finding Parking</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you&apos;re struggling to find parking in a busy area or
                need a long-term spot near your home, our app connects you with
                available spaces in nearby apartments or gated communities.
              </p>
            </div>

            <div className="grid gap-8">
              <Card className="bg-white/10 border-white/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-[#80b7f2] flex items-center gap-2">
                    <UserIcon className="h-5 w-5" />
                    For Parkers (Users)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {parkerFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircleIcon className="h-5 w-5 text-[#04AA6D] shrink-0 mt-0.5" />
                        <span className="text-gray-300 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-[#80b7f2] flex items-center gap-2">
                    <BuildingIcon className="h-5 w-5" />
                    For Space Owners
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {ownerFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircleIcon className="h-5 w-5 text-[#04AA6D] shrink-0 mt-0.5" />
                        <span className="text-gray-300 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-[#80b7f2]/20 blur-2xl -z-10 rounded-[32px]" />
            <div className="relative bg-white/10 p-4 rounded-[32px] shadow-2xl border border-white/10">
              <img
                src="parking-image.png"
                className="w-full h-auto rounded-2xl"
                alt="Parking Solution"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
                <p className="text-sm font-medium text-white">
                  Trusted by 100+ users
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const UserIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const BuildingIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M12 6h.01" />
    <path d="M12 10h.01" />
    <path d="M12 14h.01" />
    <path d="M16 10h.01" />
    <path d="M16 14h.01" />
    <path d="M8 10h.01" />
    <path d="M8 14h.01" />
  </svg>
);

export default Features;
