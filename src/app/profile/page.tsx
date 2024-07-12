import MyProfile from "./components/MyProfile";
import MyTrainers from "./components/MyTrainers";
import MyTrainings from "./components/MyTrainings";
import ProfileOptions from "./components/ProfileOptions";

export default function Profile() {
  return (
    <>
      <h1 className="mb-20 pt-28 text-center text-6xl font-bold">My Account</h1>
      <section className="flex flex-col justify-between md:flex-row">
        <MyProfile />
        <MyTrainers />
      </section>
      <ProfileOptions />
      <MyTrainings />
    </>
  );
}

// TODO add role to differentiate between trainer and student
