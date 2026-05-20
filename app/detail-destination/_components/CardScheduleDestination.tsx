type CardScheduleDestinationProps = {
  day: string;
  date: string;
  price: string;
  active?: boolean;
};

export default function CardScheduleDestination({
  day,
  date,
  price,
  active,
}: CardScheduleDestinationProps) {
  return (
    <div
      className="
        relative
        w-[170px]
        border
        border-gray-300
        p-3
        hover:bg-gray-50
        cursor-pointer
      "
    >
      <p className="text-sm text-gray-500">
        {day}, {date}
      </p>

      <h1 className="text-2xl font-bold text-gray-800">
        IDR {price}
      </h1>

      {active && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-full"></div>
      )}
    </div>
    
  );
}