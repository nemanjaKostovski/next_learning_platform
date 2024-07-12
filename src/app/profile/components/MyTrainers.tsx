export default function MyTrainers() {
  return (
    <div className="lg:mr-[10%] xl:w-1/3">
      <div className="flex w-full flex-row items-baseline justify-between">
        <h3 className="mb-4 text-xl font-bold md:text-2xl lg:text-4xl">
          My Trainers
        </h3>
        <button className="btn btn--primary ml-10 rounded">Add Trainer</button>
      </div>
      <table className="w-full border-collapse rounded-md border-2 border-slate-100 text-left align-middle">
        <tr>
          <th className="h-12 w-1/2 bg-slate-100 p-1 pl-2 text-xl">NAME</th>
          <th className="h-12 w-1/2 bg-slate-100 p-1 text-xl">
            SPECIALIZATION
          </th>
        </tr>

        <tr className="h-12 border-2 border-slate-100">
          <td className="pl-2 font-bold">Elizabeth Lopez</td>
          <td>PHP</td>
        </tr>
        <tr className="h-12 border-2 border-slate-100">
          <td className="pl-2 font-bold">Matthew Martinez</td>
          <td>JavaScript</td>
        </tr>
        <tr className="h-12 border-2 border-slate-100">
          <td className="pl-2 font-bold">Elizabeth Hall</td>
          <td>Algorithms</td>
        </tr>
        <tr className="h-12 border-2 border-slate-100">
          <td className="pl-2 font-bold">Maria White</td>
          <td>Java</td>
        </tr>
      </table>
    </div>
  );
}
