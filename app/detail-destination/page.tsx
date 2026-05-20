import CardScheduleDestination from "./_components/CardScheduleDestination";

export default function DetailDestinationPage() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen flex items-center justify-center">

      <div className="flex">
        
        <CardScheduleDestination
          day="Sen"
          date="18 Mei 2026"
          price="3.458.690"
          active
        />
        {/* active itu buat aktifin atau manngil kode yang adadi cardschedulee */}
        
      </div>

      <div className="flex">

        <CardScheduleDestination
          day="Sel"
          date="19 Mei 2026"
          price="2.488.000"
        />

      </div>

      <div className="flex">

        <CardScheduleDestination
          day="Rab"
          date="20 Mei 2026"
          price="1.558.999"
        />

      </div>

      <div className="flex">

        <CardScheduleDestination
          day="Jum"
          date="21 Mei 2026"
          price="1.470.808"
        />

      </div>

      <div className="flex">

        <CardScheduleDestination
          day="Sab"
          date="22 Mei 2026"
          price="3.128.000"
        />

      </div>

      <div className="flex">

        <CardScheduleDestination
          day="min"
          date="23 Mei 2026"
          price="4.698.770"
        />

      </div>

    </div>
  );
}