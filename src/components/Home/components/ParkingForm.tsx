import { Button } from "@/components/ui/button";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronUp } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod";

const metroCities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
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
    .refine((val) => val.length === 10, "Phone number must be exactly 10 digits"),
  email: z
    .string()
    .email("Please enter a valid email")
    .optional()
    .or(z.literal("")),
  city: z.string().min(1, "City selection is required"),
  purpose: z.enum(["find", "list"], {
    required_error: "Please select your purpose",
  }),
});

const ParkingForm = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      city: "",
      purpose: undefined,
    },
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
    <div className="w-full max-w-sm mx-auto p-6">
      <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl shadow-2xl overflow-hidden">
        <div
          className="flex items-center justify-between p-6 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h2 className="text-2xl font-semibold text-white">Get Started</h2>
          <ChevronUp
            className={`text-white transition-transform duration-200 ${
              isExpanded ? "" : "rotate-180"
            }`}
          />
        </div>

        <div
          className={`transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                autoComplete="off"
              >
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/90">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your name"
                          autoComplete="off"
                          {...field}
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30 transition-colors"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Phone Number Field */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/90">Phone Number</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 select-none">
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
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30 transition-colors pl-12"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/90">Email (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          autoComplete="off"
                          required={false}
                          {...field}
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30 transition-colors"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* City Dropdown Field */}
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/90">City</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-white/30 transition-colors">
                            <SelectValue placeholder="Select your city" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white border-white/10">
                          {metroCities.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Purpose Dropdown */}
                <FormField control={form.control} name="purpose" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/90">I want to</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-white/30 transition-colors">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="find">Find Parking Space</SelectItem>
                        <SelectItem value="list">List My Parking Space</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />

<Button
                  type="submit"
                  className="w-full bg-[#04AA6D] hover:bg-[#038857] text-white font-medium transition-colors duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Get in Touch"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingForm;
