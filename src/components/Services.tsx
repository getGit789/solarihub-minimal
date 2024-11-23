import { Card } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      title: "Professional Solarijum",
      description: "Experience safe and controlled UV tanning in our state-of-the-art facilities. Perfect for achieving that natural, sun-kissed glow you desire.",
      duration: "10-20 minutes",
    },
    {
      title: "Advanced Kolarijum",
      description: "Rejuvenate your skin with our premium collagen therapy. Ideal for reducing fine lines, improving skin elasticity, and maintaining youthful radiance.",
      duration: "15-30 minutes",
    },
  ];

  return (
    <div id="services" className="section-padding bg-primary/10 border-2 border-secondary-dark rounded-xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Premium Services in Zrenjanin
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="glass p-8 hover:scale-105 transition-transform border-2 border-secondary-dark">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-sm text-gray-500">Session Duration: {service.duration}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};