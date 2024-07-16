"use client";

import TrainersTable from "./TrainersTable";
import { usePathname } from "next/navigation";

export default function MyTrainers() {
  const pathName = usePathname();
  return (
    <div className="lg:mr-[10%] xl:w-1/3">
      <div className="flex w-full flex-row items-baseline">
        <h3 className="mb-4 mr-2 text-xl font-bold md:text-2xl lg:text-4xl">
          My Trainers
        </h3>
        {!pathName.includes("/addtrainer") && (
          <button className="btn btn--primary ml-24 rounded">
            Add Trainer
          </button>
        )}
      </div>
      <TrainersTable hidden={true} />
    </div>
  );
}
