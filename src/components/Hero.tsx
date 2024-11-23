import { Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden section-padding">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-soft to-primary-accent opacity-50" />
      <div className="relative z-10 text-center animate-fade-up">
        <div className="flex justify-center mb-6">
          <Sun className="w-16 h-16 text-secondary-dark" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Premium Solarijum & Kolarijum
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Experience the perfect blend of relaxation and beauty with our professional tanning services
        </p>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-secondary-dark hover:bg-secondary-dark/90 text-white">
              Book Now
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Schedule Your Appointment</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <iframe
                src="https://calendly.com/your-account"
                width="100%"
                height="600"
                frameBorder="0"
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};