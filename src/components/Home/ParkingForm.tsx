import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronUp } from "lucide-react";

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

// Validation Schema using Zod
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
  city: z.string().min(2, "City must be at least 2 characters"),
  purpose: z.enum(["find", "list"], {
    required_error: "Please select your purpose",
  }),
});

const ParkingForm = () => {
  const [isExpanded, setIsExpanded] = useState(true);

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
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    onChange(value);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", values);
  };

  return (
    <div className="w-full max-w-sm mx-auto p-6">
      <div className="backdrop-blur-md bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Collapsible Header */}
        <div
          className="flex items-center justify-between p-6 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h2 className="text-2xl font-semibold text-gray-900">Get Started</h2>
          <ChevronUp
            className={`text-gray-900 transition-transform duration-200 ${
              isExpanded ? "" : "rotate-180"
            }`}
          />
        </div>

        {/* Collapsible Form Section */}
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
                {/* Full Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your name"
                          autoComplete="off"
                          {...field}
                          className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-gray-400 transition-colors"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                {/* Phone Number Field */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Phone Number</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 select-none">
                            +91
                          </span>
                          <Input
                            type="tel"
                            inputMode="numeric"
                            maxLength={10}
                            autoComplete="off"
                            placeholder="Enter your phone number"
                            {...field}
                            onChange={(e) => handlePhoneInput(e, field.onChange)}
                            value={field.value}
                            className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-gray-400 transition-colors pl-12"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                {/* City Field */}
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">City</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your city"
                          autoComplete="off"
                          {...field}
                          className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-gray-400 transition-colors"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                {/* Email Field (Optional) */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">
                        Email (Optional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          autoComplete="off"
                          required={false}
                          {...field}
                          className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-gray-400 transition-colors"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                {/* Purpose Select Field */}
                <FormField
                  control={form.control}
                  name="purpose"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">I want to</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-900 focus:border-gray-400 transition-colors">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white border-gray-200">
                          <SelectItem
                            value="find"
                            className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900 cursor-pointer"
                          >
                            Find Parking Space
                          </SelectItem>
                          <SelectItem
                            value="list"
                            className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900 cursor-pointer"
                          >
                            List My Parking Space
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#04AA6D] hover:bg-[#038857] text-white font-medium transition-colors duration-200"
                >
                  Get in Touch
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
