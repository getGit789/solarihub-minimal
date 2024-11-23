import { Sun } from "lucide-react";

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
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Experience the perfect blend of relaxation and beauty with our professional tanning services
        </p>
      </div>
    </div>
  );
};