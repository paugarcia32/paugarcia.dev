// Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background font-body w-full py-4">
      <div className="text-sm m-2 text-center ">
        <p>
          © {new Date().getFullYear()}{" "}
          <Link
            href="/about"
            className="pointer hover:text-accent hover:underline"
          >
            Pau Garcia
          </Link>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
