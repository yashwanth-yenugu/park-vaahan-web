import { useState } from "react";

const ParkingForm = () => {
  const [showForm, setShowForm] = useState<"find" | "list" | null>(null);

  return (
    <div className="flex flex-col space-y-4 w-full max-w-sm mx-auto">
      <button
        onClick={() => setShowForm("find")}
        className="w-full bg-[#04AA6D] text-white py-3 rounded font-medium text-base"
      >
        I&apos;m Looking for Parking
      </button>

      <button
        onClick={() => setShowForm("list")}
        className="w-full bg-[#2196F3] text-white py-3 rounded font-medium text-base"
      >
        I Want to List Parking Space
      </button>
    </div>
  );
};

export default ParkingForm;
