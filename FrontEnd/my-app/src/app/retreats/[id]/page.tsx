type Props = {
  params: { id: string };
};

export default function RetreatDetail({ params }: Props) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-600">
        Retreat Details - ID: {params.id}
      </h1>
      <p className="mt-2 text-gray-700">
        Here you can show all registrations for this retreat.
      </p>
    </div>
  );
}
