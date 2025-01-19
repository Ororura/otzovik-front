import { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between">
        <h1 className="text-2xl">Otzovik</h1>
        <ul className="flex items-center space-x-4">
          <li className="text-center">
            <Link href={"/"} className="hover:underline">
              Home
            </Link>
          </li>
          <li className="text-center">
            <Link href={"/create-review"} className="hover:underline">
              Create review
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export { Header };
