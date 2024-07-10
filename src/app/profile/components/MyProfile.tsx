import Image from "next/image";
import ProfileInfo from "./ProfileInfo";
import { headers } from "next/headers";
export default function MyProfile() {
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
      <h3 className="mb-4 text-2xl font-bold">My Profile</h3>
      <div className="mb-6 flex flex-row">
        <Image src={"/profpic.png"} width={150} height={150} alt="user" />
        <div className="ml-8">
          <h3 className="font-bold text-slate-700">Status</h3>
          <Image
            src={"/check.png"}
            width={15}
            height={15}
            alt="check"
            className="inline"
          />
          <span className="ml-2 text-green-400">Active</span>
        </div>
      </div>

      {info.map((info, index) => (
        <ProfileInfo key={index} header={info.header} info={info.info} />
      ))}
    </div>
  );
}
