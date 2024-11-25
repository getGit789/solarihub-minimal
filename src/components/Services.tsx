import { Card } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      title: "Professional Solarijum",
      description: "Experience safe and controlled UV tanning in our state-of-the-art facilities. Perfect for achieving that natural, sun-kissed glow you desire.",
      duration: "10-20 minutes",
      backgroundImage: "https://images.unsplash.com/photo-1501446529957-6226bd447c46?auto=format&fit=crop&q=80",
    },
    {
      title: "Advanced Kolarijum",
      description: "Rejuvenate your skin with our premium collagen therapy. Ideal for reducing fine lines, improving skin elasticity, and maintaining youthful radiance.",
      duration: "15-30 minutes",
      backgroundImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div id="services" className="section-padding bg-primary/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Premium Services in Zrenjanin
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="glass p-8 hover:scale-105 transition-transform [border:3px_solid_#9b87f5] [border-radius:70px_20px_70px_20px] relative overflow-hidden group"
            >
              {/* Background image with overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity"
                style={{
                  backgroundImage: `url("${service.backgroundImage}")`,
                }}
              />
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-sm text-gray-500">Session Duration: {service.duration}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};