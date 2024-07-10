export default function ProfileInfo({
  header,
  info,
}: {
  header: string;
  info: string;
}) {
  return (
    <>
      <h3 className="mb-2 font-bold text-slate-700">{header}</h3>
      <p className="mb-5">{info}</p>
    </>
  );
}
