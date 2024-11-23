import React from "react";
import { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [service, setService] = useState<string>("");
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string>("");
  const { toast } = useToast();

  const availableTimes = [
    "09:00", "10:00", "11:00", "12:00", "13:00", 
    "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          service,
          date: date?.toLocaleDateString(),
          time,
          to_email: 'your-email@example.com' // Replace with your email
        },
        'YOUR_PUBLIC_KEY'
      );

      toast({
        title: "Booking Submitted!",
        description: "We'll contact you shortly to confirm your appointment.",
      });

      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your booking. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="space-y-6 p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <Label>Select Service</Label>
          <RadioGroup
            value={service}
            onValueChange={setService}
            className="grid grid-cols-2 gap-4"
          >
            <div>
              <RadioGroupItem
                value="solarijum"
                id="solarijum"
                className="peer sr-only"
              />
              <Label
                htmlFor="solarijum"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-secondary-dark peer-data-[state=checked]:bg-secondary-dark peer-data-[state=checked]:text-white [&:has([data-state=checked])]:border-secondary-dark [&:has([data-state=checked])]:bg-secondary-dark [&:has([data-state=checked])]:text-white"
              >
                <span>Solarijum</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value="kolarijum"
                id="kolarijum"
                className="peer sr-only"
              />
              <Label
                htmlFor="kolarijum"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-secondary-dark peer-data-[state=checked]:bg-secondary-dark peer-data-[state=checked]:text-white [&:has([data-state=checked])]:border-secondary-dark [&:has([data-state=checked])]:bg-secondary-dark [&:has([data-state=checked])]:text-white"
              >
                <span>Kolarijum</span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Select Date</Label>
          <Flatpickr
            value={date}
            onChange={([selectedDate]) => setDate(selectedDate)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-dark focus:border-transparent"
            options={{
              minDate: "today",
              dateFormat: "Y-m-d",
              disable: [
                function(date) {
                  return (date.getDay() === 0); // Disable Sundays
                }
              ],
              onChange: ([selectedDate]) => {
                setDate(selectedDate);
              }
            }}
          />
        </div>

        <div className="space-y-2">
          <Label>Select Time</Label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {availableTimes.map((t) => (
              <Button
                key={t}
                type="button"
                variant={time === t ? "default" : "outline"}
                className={`w-full ${time === t ? 'bg-secondary-dark text-white' : ''}`}
                onClick={() => setTime(t)}
              >
                {t}
              </Button>
            ))}
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-secondary-dark hover:bg-secondary-dark/90"
          disabled={!service || !date || !time}
        >
          Confirm Booking
        </Button>
      </form>
    </div>
  );
};