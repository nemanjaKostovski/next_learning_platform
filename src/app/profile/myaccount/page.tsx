import Image from "next/image";
import ProfileInput from "../components/ProfileInput";
import SwitchButton from "../components/SwitchButton";

export default function myAccount() {
  const info = [
    {
      header: "First Name",
      info: "John",
    },
    {
      header: "Last Name",
      info: "Doe",
    },
    {
      header: "User Name",
      info: "john_doe",
    },
    {
      header: "Date of Birth",
      info: "01.01.2000",
    },
    {
      header: "Address",
      info: "Some address",
    },
    {
      header: "Email",
      info: "johndoe@ex.com",
    },
  ];
  return (
    <div>
      <h1 className="mb-20 pt-28 text-center text-6xl font-bold">My Account</h1>
      <section>
        <div className="xl:w-2/5">
          <h3 className="mb-4 text-2xl font-bold">Edit profile</h3>
          <h3 className="mb-2 font-bold text-slate-700">Profile photo</h3>
          <div className="sm: mb-6 flex flex-col sm:flex-row">
            <div className="h-[150px] w-[150px]">
              <Image
                src={"/profpic.png"}
                width={150}
                height={150}
                alt="user"
                className="h-full w-full"
              />
            </div>
            <div className="sm:ml-8">
              <h3 className="mb-4 text-slate-700">Upload your photo</h3>
              <p className="mb-4 text-slate-600">
                Your photo should be in PNG or JPG format
              </p>

              <div>
                <button className="btn btn--primary-inverse rounded">
                  Choose image
                </button>
                <button className="ml-10 text-slate-400">Remove</button>
              </div>
            </div>
          </div>

          {info.map((info, index) => (
            <ProfileInput key={index} header={info.header} info={info.info} />
          ))}
        </div>
        <SwitchButton />
      </section>
      <div className="mb-32 mt-20 flex justify-center">
        <button className="text-slate-400">Cancel</button>
        <button className="btn btn--primary ml-10 rounded">Save changes</button>
      </div>
    </div>
  );
}
