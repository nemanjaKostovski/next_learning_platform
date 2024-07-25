export default function ProfileInfo({
  // TODO placeholder to be switched to real value later on, when backend is done
  header,
  info,
}: {
  header: string;
  info: string;
}) {
  return (
    <>
      <h3 className="mb-2 font-bold text-slate-700">{header}</h3>
      <input
        className="mb-5 h-10 w-full rounded bg-slate-100 pl-5"
        placeholder={info}
      />
    </>
  );
}
