import MyProfile from "./components/MyProfile";

export default function Profile() {
  return (
    <>
      <h1 className="pt-28 text-center text-6xl font-bold">My Account</h1>
      <section>
        <MyProfile />
      </section>
    </>
  );
}

// TODO add role to differentiate between trainer and student
