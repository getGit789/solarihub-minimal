import { Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BookingModal } from "./BookingModal";
import { useState } from "react";

export const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="relative min-h-[90vh] mt-20 md:mt-0 flex items-center justify-center overflow-hidden section-padding border-2 border-secondary-dark rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-soft to-primary-accent opacity-50" />
      <div className="relative z-10 text-center animate-fade-up">
        <div className="flex justify-center mb-6">
          <Sun className="w-16 h-16 text-secondary-dark" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Premium Solarijum & Kolarijum Zrenjanin
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Discover your radiant glow with our professional tanning and skin rejuvenation services. Specially designed for ladies who appreciate quality and care.
        </p>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-secondary-dark hover:bg-secondary-dark/90 text-white">
              Book Your Session Now
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Schedule Your Appointment</DialogTitle>
            </DialogHeader>
            <BookingModal isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};