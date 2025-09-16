import Link from "next/link";
import Image from "next/image";

type EventProps = {
  id: string;
  title: string;
  date: string;
  location: string;
  registered: number;
  capacity: number;
  status: "Active" | "Closed" | "Open";
  image: string;
};

export default function EventCard({
  id,
  title,
  date,
  location,
  registered,
  capacity,
  status,
  image,
}: EventProps) {
  const remaining = capacity - registered;

  const statusColor =
    status === "Active"
      ? "bg-purple-600 text-white"
      : status === "Open"
      ? "bg-green-200 text-green-800"
      : "bg-red-600 text-white";

  return (
    <div className="bg-white rounded-lg shadow p-4 flex gap-4 items-center">
      {/* Left: Image */}
      <div className="w-48 h-32 relative rounded-lg overflow-hidden flex-shrink-0">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Right: Details */}
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-gray-500">
              📅 {date} • 📍 {location}
            </p>
            <p className="text-sm mt-1">
              <span className="font-semibold">{registered}</span>/{capacity} registered
            </p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}>
            {status}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gray-200 h-2 rounded-full"
            style={{ width: `${(registered / capacity) * 100}%` }}
          ></div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm text-gray-500">{remaining} slots remaining</p>
          <Link href={`/retreats/${id}`}>
            <button className="flex items-center gap-2 px-4 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
              👁️ View Registrations
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
