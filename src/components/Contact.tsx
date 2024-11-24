import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export const Contact = () => {
  const hours = [
    { day: "Monday - Friday", hours: "9:00 - 20:00" },
    { day: "Saturday", hours: "10:00 - 18:00" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Visit Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass p-8 border-2 border-secondary-dark rounded-xl">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2">
                {hours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between max-w-sm mx-auto">
                    <span>{schedule.day}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-600">Phone: (123) 456-7890</p>
              <p className="text-gray-600">Email: info@solarijum.com</p>
            </div>
          </Card>

          <Card className="glass p-8 border-2 border-secondary-dark rounded-xl">
            <div className="flex flex-col items-center justify-center h-full">
              <MapPin className="w-12 h-12 text-secondary-dark mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Location Coming Soon</h3>
              <p className="text-gray-600 text-center">
                We're preparing something special! Our exact location will be revealed soon.
                Stay tuned for updates.
              </p>
              <div className="mt-6 w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Interactive Map Coming Soon</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};