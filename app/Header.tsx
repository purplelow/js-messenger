import Image from "next/image";
import Link from "next/link";
import LogoutBtn from "./LogoutBtn";

export default function Header() {
  const session = true;

  if (session)
    return (
      <header className="flex sticky top-0 z-50 bg-white justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2">
          <Image
            className="rounded-full mx-2 object-contain w-auto h-auto"
            src="/assets/jne.webp"
            width={50}
            height={10}
            alt="Profile Picture"
          />

          <div>
            <p className="text-blue-400">Logged in as: </p>
            <p className="font-bold text-lg">JunSeong Lee</p>
          </div>
        </div>

        <LogoutBtn />
      </header>
    );

  return (
    <header className="flex sticky top-0 z-50 bg-white justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <Image
            className="w-auto h-auto"
            src="/assets/jne.webp"
            width={50}
            height={10}
            alt="logo"
          />

          <p className="text-blue-400">Welcome to JS Messenger</p>
        </div>

        <Link
          href="/auth/signin"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}
