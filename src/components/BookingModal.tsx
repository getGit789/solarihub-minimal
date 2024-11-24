import React from "react";
import { useState, useEffect } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { X } from "lucide-react";
import { Database } from "@/integrations/supabase/types";
import { LoginModal } from "./LoginModal";
import { User } from "@supabase/supabase-js";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Booking = Database['public']['Tables']['bookings']['Insert'];

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [service, setService] = useState<string>("");
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check current auth status
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        setShowLoginModal(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const availableTimes = [
    "09:00", "10:00", "11:00", "12:00", "13:00", 
    "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      setShowLoginModal(true);
      return;
    }

    if (!date || !time || !service) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    try {
      const booking: Booking = {
        user_id: user.id,
        service,
        booking_date: date.toISOString().split('T')[0],
        booking_time: time
      };

      const { error: bookingError } = await supabase
        .from('bookings')
        .insert([booking]);

      if (bookingError) {
        console.error('Booking error:', bookingError);
        toast({
          title: "Error",
          description: "There was an error making your booking. Please try again.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Success!",
        description: "Your booking has been submitted. We'll contact you shortly to confirm.",
      });

      onClose();
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-md relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Schedule Your Appointment</h2>
            
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
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-[#9c8ee4] peer-data-[state=checked]:bg-[#9c8ee4] peer-data-[state=checked]:text-white [&:has([data-state=checked])]:border-[#9c8ee4] [&:has([data-state=checked])]:bg-[#9c8ee4] [&:has([data-state=checked])]:text-white"
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
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-[#9c8ee4] peer-data-[state=checked]:bg-[#9c8ee4] peer-data-[state=checked]:text-white [&:has([data-state=checked])]:border-[#9c8ee4] [&:has([data-state=checked])]:bg-[#9c8ee4] [&:has([data-state=checked])]:text-white"
                    >
                      <span>Kolarijum</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Select Date</Label>
                <div className="relative">
                  <Flatpickr
                    value={date}
                    onChange={([selectedDate]) => setDate(selectedDate)}
                    options={{
                      minDate: "today",
                      dateFormat: "Y-m-d",
                      disable: [
                        function(date) {
                          return (date.getDay() === 0);
                        }
                      ],
                      enableTime: false,
                      static: true
                    }}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9c8ee4] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Select Time</Label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {availableTimes.map((t) => (
                    <Button
                      key={t}
                      type="button"
                      variant={time === t ? "default" : "outline"}
                      className={`w-full ${time === t ? 'bg-[#9c8ee4] hover:bg-[#9c8ee4]/90 text-white' : ''}`}
                      onClick={() => setTime(t)}
                    >
                      {t}
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#9c8ee4] hover:bg-[#9c8ee4]/90 text-white"
              >
                {user ? 'Confirm Booking' : 'Sign in to Book'}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </>
  );
};