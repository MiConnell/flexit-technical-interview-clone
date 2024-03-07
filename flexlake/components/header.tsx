import Image from "next/image";
export default function Header() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <a href="/" className="">
        FlexLake By{" "}
        <Image
          src="/flexit.png"
          alt="Flexit Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </a>
      <b>Your all-in-one pre-built analytics solution</b>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end space-x-5 justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 hover:underline"
          href="/"
        >
          Admin
        </a>
        <form action="" method="post">
          <button className="button block hover:underline" type="submit">
            Sign Out
          </button>
        </form>
        <a
          className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 hover:underline"
          href="/"
          rel="noopener noreferrer"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}
