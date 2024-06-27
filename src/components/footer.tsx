// Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-secondary dark:bg-secondary font-body w-full py-4">
      <div className="text-sm m-2 text-center ">
        <p>
          © {new Date().getFullYear()}{" "}
          <a href="/about" className="pointer hover:text-accent hover:underline">
            Pau Garcia
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
