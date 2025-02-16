import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  image: string;
  name: string;
  rating: number;
  review: string;
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    image: "user1.jpg",
    name: "Yashwanth Reddy",
    role: "Daily Commuter",
    rating: 5,
    review:
      "I used to spend so much time looking for parking every day. This app made it so easy to find a spot near my home, and I don't have to worry anymore!",
  },
  {
    image: "user3.jpg",
    name: "Neha Negi",
    role: "Daily Commuter",
    rating: 4,
    review: "Secure and convenient parking options. Love it!",
  },
  {
    image: "user2.jpg",
    name: "Dheeraj Shetty",
    role: "Apartment Complex Manager",
    rating: 5,
    review:
      "Listing my parking space has been a great way to earn extra money every month, and it's been super easy to manage.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-0">
        <div className="space-y-6 text-center mb-12">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-[#80b7f2]">
            <span className="flex h-2 w-2 rounded-full bg-[#80b7f2] mr-2" />
            User Reviews
          </div>
          <h2 className="text-4xl font-bold">
            <span className="text-white">Trusted by Our </span>
            <span className="text-[#80b7f2]">Community</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Discover what our community has to say about their experience.
          </p>
        </div>

        <Carousel className="relative w-full max-w-5xl mx-auto">
          <CarouselContent className="flex ml-0 me-0 md:flex-nowrap">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/3 px-2"
              >
                <Card className="bg-white/10 border-white/10 shadow-lg hover:shadow-xl transition-shadow w-full h-64 mx-auto flex flex-col justify-between">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-left text-[#80b7f2]">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-300 text-left text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-col justify-between flex-grow">
                      <div className="flex items-left space-x-1 mb-2">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 fill-[#80b7f2]"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          )
                        )}
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                        &ldquo;{testimonial.review}&rdquo;
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-2 sm:-left-8 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute right-2 sm:-right-8 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
