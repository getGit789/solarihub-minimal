import { Card } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export const Contact = () => {
  const hours = [
    { day: "Monday - Friday", hours: "9:00 - 20:00" },
    { day: "Saturday", hours: "10:00 - 18:00" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div id="contact" className="section-padding bg-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Visit Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass p-8 flex flex-col items-center [border:2px_solid_#9b87f5] rounded-2xl">
            <Clock className="w-8 h-8 text-secondary-dark mb-4" />
            <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
            <div className="space-y-4 w-full">
              {hours.map((schedule) => (
                <div 
                  key={schedule.day} 
                  className="flex justify-between items-center max-w-sm mx-auto px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <span className="font-medium">{schedule.day}</span>
                  <span className="text-gray-600">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass p-8 flex flex-col items-center [border:2px_solid_#9b87f5] rounded-2xl">
            <div className="space-y-8 w-full">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5 text-secondary-dark" />
                    <p className="text-gray-600">Phone: (123) 456-7890</p>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="w-5 h-5 text-secondary-dark" />
                    <p className="text-gray-600">Email: info@solarijum.com</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200/20">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-secondary-dark" />
                  <h3 className="text-xl font-semibold">Location</h3>
                </div>
                <p className="text-gray-600 text-center">
                  Coming Soon
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};