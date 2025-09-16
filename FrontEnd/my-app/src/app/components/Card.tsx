import { ReactNode } from "react";

type CardProps = {
  title: string;
  value: number;
  subtitle: string;
  icon: ReactNode;
  subtitleColor?: "green" | "red" | "gray";
};

export default function Card({ title, value, subtitle, icon, subtitleColor = "gray" }: CardProps) {
  const subtitleClasses =
    subtitleColor === "green"
      ? "text-green-600"
      : subtitleColor === "red"
      ? "text-red-600"
      : "text-gray-500";

  return (
    <div className="bg-gray-50 shadow rounded-lg p-4 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <div className="text-purple-600">{icon}</div>
      </div>
      <p className="text-2xl font-bold mt-2">{value}</p>
      <p className={`text-sm mt-1 ${subtitleClasses}`}>{subtitle}</p>
    </div>
  );
}
