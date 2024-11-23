import { Card } from "@/components/ui/card";

export const Contact = () => {
  const hours = [
    { day: "Monday - Friday", hours: "9:00 - 20:00" },
    { day: "Saturday", hours: "10:00 - 18:00" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Visit Us</h2>
        <Card className="glass p-8">
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
      </div>
    </div>
  );
};