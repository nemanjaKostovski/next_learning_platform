export default function ProfileOptions() {
  return (
    <div className="mb-10 mt-4 flex flex-col justify-between sm:flex-row">
      <div className="flex flex-col sm:flex-row">
        <button className="btn btn--primary mb-1 rounded">Edit profile</button>
        <button className="btn btn--secondary mb-1 rounded sm:ml-10">
          Change password
        </button>
      </div>
      <button className="btn btn--important mb-1 rounded sm:ml-10">
        Delete profile
      </button>
    </div>
  );
}
