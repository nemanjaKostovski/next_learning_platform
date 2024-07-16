import { TrainersType } from "@/app/types";

export default function TrainersTableRow({ trainers, hidden }: TrainersType) {
  return trainers.map((trainer, index) => (
    <tr key={`${index}${trainer}`} className="h-12 border-2 border-slate-100">
      <td className={`${hidden ? "hidden" : ""} mt-4 flex justify-center`}>
        <input type="checkbox" name={trainer.name} className="h-4 w-4" />
      </td>
      <td className="pl-2 font-bold">{trainer.name}</td>
      <td>{trainer.specialization}</td>
    </tr>
  ));
}
