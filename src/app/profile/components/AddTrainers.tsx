import TrainersTable from "./TrainersTable";

export default function AddTrainers() {
  return (
    <div className="lg:mr-[10%] xl:w-2/5">
      <div className="flex w-full flex-row items-baseline justify-between">
        <h3 className="mb-4 text-xl font-bold md:text-2xl lg:text-4xl">
          AddTrainer
        </h3>
      </div>
      <TrainersTable hidden={false} />
      <button className="btn btn--primary my-10 w-20 rounded">Add</button>
    </div>
  );
}
