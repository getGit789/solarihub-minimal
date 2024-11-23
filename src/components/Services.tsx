import { Card } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      title: "Solarijum",
      description: "Professional UV tanning in a controlled environment",
      duration: "10-20 minutes",
    },
    {
      title: "Kolarijum",
      description: "Advanced collagen therapy for skin rejuvenation",
      duration: "15-30 minutes",
    },
  ];

  return (
    <div className="section-padding bg-primary/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="glass p-8 hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-sm text-gray-500">Duration: {service.duration}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};