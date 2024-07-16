import MyTrainers from "../components/MyTrainers";
import AddTrainers from "../components/AddTrainers";

export default function AddTrainer() {
  return (
    <div>
      <h1 className="mb-10 pt-28 text-center text-6xl font-bold">
        Add Trainer
      </h1>
      <p className="mb-10 md:w-2/5">
        Please select trainers for adding them into your trainers list * - There
        is no possibility to remove the trainer.
      </p>
      <section className="mb-20 flex flex-col justify-between md:flex-row">
        <AddTrainers />
        <MyTrainers />
      </section>
    </div>
  );
}
