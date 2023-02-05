import Nav from "@/components/Nav";
import Balancer from "react-wrap-balancer";

export default function SignupPage() {
  return (
    <>
      <Nav />
      <main className="container mx-auto grid h-[calc(100vh-4rem)] grid-cols-2 place-items-center justify-items-start">
        <h1 className="text-5xl leading-tight">
          <Balancer>
            transform your notes with typed -{" "}
            <span className="text-primary">create an account</span>
          </Balancer>
        </h1>

        <form className="w-full">
          <label htmlFor="name" className="flex w-full flex-col">
            Name
            <input type="text" className="w-full bg-zinc-900" />
          </label>
        </form>
      </main>
    </>
  );
}
