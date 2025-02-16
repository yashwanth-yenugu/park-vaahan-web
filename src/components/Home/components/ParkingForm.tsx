import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronUp } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod";

const metroCities = [
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Mumbai",
  "Delhi",
  "Kolkata",
  "Pune",
  "Ahmedabad",
];

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine((val) => /^\d+$/.test(val), "Please enter only numbers")
    .refine(
      (val) => val.length === 10,
      "Phone number must be exactly 10 digits"
    ),
  email: z
    .string()
    .email("Please enter a valid email")
    .optional()
    .or(z.literal("")),
  city: z.string().min(1, "City selection is required"),
  purpose: z.string().min(1, "Please select your purpose"),
});

const ParkingForm = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const defaultValues = {
    name: "",
    phone: "",
    email: "",
    city: "",
    purpose: "",
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const handlePhoneInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void
  ) => {
    const value = e.target.value;
    const digitsOnly = value.replace(/\D/g, "");
    onChange(digitsOnly);
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const apiUrl = import.meta.env.DEV
        ? "http://localhost:8788/api/submit-form"
        : "/api/submit-form";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      toast.success("Form submitted successfully!");
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to submit form"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 md:px-0 pb-8 md:pb-0">
      <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
        <CardHeader
          className="space-y-1 cursor-pointer select-none"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">
              <span className="text-white">Get </span>
              <span className="text-[#80b7f2]">Started</span>
            </CardTitle>
            <ChevronUp
              className={cn(
                "text-[#80b7f2] transition-all duration-300",
                !isExpanded && "rotate-180"
              )}
            />
          </div>
          <CardDescription className="text-gray-300">
            Fill out the form below and we&apos;ll get back to you
          </CardDescription>
        </CardHeader>

        <div
          className={cn(
            "transition-all duration-500 ease-in-out",
            isExpanded
              ? "max-h-[1000px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          )}
        >
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 mt-2"
                autoComplete="off"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#80b7f2] font-medium">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your name"
                          autoComplete="off"
                          {...field}
                          className="bg-white/5 border-white/10 text-gray-300 placeholder:text-gray-300/30 focus:border-[#80b7f2]/50 transition-all hover:bg-white/10"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#80b7f2] font-medium">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <div className="relative group">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300/50 select-none group-hover:text-gray-300/70 transition-colors">
                            +91
                          </span>
                          <Input
                            type="tel"
                            inputMode="numeric"
                            maxLength={10}
                            autoComplete="off"
                            placeholder="Enter your phone number"
                            {...field}
                            onChange={(e) =>
                              handlePhoneInput(e, field.onChange)
                            }
                            value={field.value}
                            className="bg-white/5 border-white/10 text-gray-300 placeholder:text-gray-300/30 focus:border-[#80b7f2]/50 transition-all hover:bg-white/10 pl-12"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#80b7f2] font-medium">
                        Email{" "}
                        <span className="text-gray-300/50">(Optional)</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          autoComplete="off"
                          required={false}
                          {...field}
                          className="bg-white/5 border-white/10 text-gray-300 placeholder:text-gray-300/30 focus:border-[#80b7f2]/50 transition-all hover:bg-white/10"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#80b7f2] font-medium">
                        City
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-white/5 border-white/10 text-gray-300 focus:border-[#80b7f2]/50 transition-all hover:bg-white/10">
                            <SelectValue placeholder="Select your city" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#151c2c]/95 border-white/10 backdrop-blur-xl">
                          {metroCities.map((city) => (
                            <SelectItem
                              key={city}
                              value={city}
                              className="text-gray-300 focus:bg-white/10 focus:text-[#80b7f2] data-[highlighted]:bg-white/10"
                            >
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="purpose"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#80b7f2] font-medium">
                        I want to
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-white/5 border-white/10 text-gray-300 focus:border-[#80b7f2]/50 transition-all hover:bg-white/10">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#151c2c]/95 border-white/10 backdrop-blur-xl">
                          <SelectItem
                            value="findParkingSpace"
                            className="text-gray-300 focus:bg-white/10 focus:text-[#80b7f2] data-[highlighted]:bg-white/10"
                          >
                            Find Parking Space
                          </SelectItem>
                          <SelectItem
                            value="listMyParkingSpace"
                            className="text-gray-300 focus:bg-white/10 focus:text-[#80b7f2] data-[highlighted]:bg-white/10"
                          >
                            List My Parking Space
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-[#80b7f2] hover:bg-[#80b7f2]/80 text-white font-medium transition-all duration-200 mt-6 hover:shadow-lg hover:shadow-[#80b7f2]/20"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </div>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default ParkingForm;
