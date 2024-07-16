import TrainersTableRow from "./TrainersTableRow";

export default function TrainersTable({ hidden }: { hidden: boolean }) {
  const trainers = [
    { name: "Elizabeth Lopez", specialization: "PHP" },
    { name: "Matthew Martinez", specialization: "JavaScript" },
    { name: "Elizabeth Hall", specialization: "Algorithms" },
    { name: "Maria White", specialization: "Java" },
  ];

  return (
    <table className="w-full border-collapse rounded-md border-2 border-slate-100 text-left align-middle">
      <thead>
        <tr>
          <th
            className={`h-12 w-1/5 bg-slate-100 p-1 pl-2 text-xl ${hidden ? "hidden" : ""}`}
          ></th>
          <th className="h-12 w-1/2 bg-slate-100 pl-2 pr-10 text-lg">NAME</th>
          <th className="h-12 w-1/2 bg-slate-100 pr-10 text-lg">
            SPECIALIZATION
          </th>
        </tr>
      </thead>
      <tbody>
        <TrainersTableRow trainers={trainers} hidden={hidden} />
      </tbody>
    </table>
  );
}
