import Image from "next/image";
import { Logo } from "@/components/layout/Logo";

/**
 * Static branded panel shown on the left of auth screens (Login, Register, etc).
 * Hidden below the `lg` breakpoint — the form takes the full width on mobile.
 */
export function AuthHero() {
  return (
    <section className="relative hidden w-1/2 flex-col items-center justify-center overflow-hidden bg-brand-500 p-12 lg:flex">
      <Logo variant="light" href="/login" className="absolute left-12 top-12" />

      <div className="relative mb-12 w-full max-w-lg">
        <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlhNQOqxa3AIukL0DXpl2RZ87244psglR6GuVj11a_t54YVP0LspiIIv-Zmz992vD_6J73xdrsHogeodf00zxiJllJsWeRS8OJUgZOskgtESahCiyxGli1bISTrxGFBhJMjTcWB07J1GbZTpWKYZWMXvJVqSMLIrZYtSeAWVnCGdlDHc5ETKxAhAQ2CtrJCPYfFCZe_56LvKohi_FXI8Qy9TWwu9ob0dUmvP9c53W3sTuQQJ2O0Z71vw"
            alt="Delivery van loaded with packages on a city street"
            width={640}
            height={480}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <div className="absolute -right-10 -top-10 z-20 h-64 w-64 overflow-hidden rounded-2xl border-4 border-brand-500 shadow-xl">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWdqhDbCGMVUnXmes9Mi4IqKbovkQwU-I4mOm24GiY5uqoPHZ1rUGEETJyso8HUuwjRjSa0bltDVm6umPS7TDkVxgp9yacYHCkdrVqj51diu_SP0fRc6VknfW90vB7aD7z3wthybj_EVRCmqImkxQ_psfUTCpQHovV-3IkEHm5ROpMoqWEqtStyV8n-NCm8RHH-3upOQ-Y8nVSHhM4IhMsvufVZ-VCsjG6q-xq0tktvQr9Gletq2EsVA"
            alt="Courier scanning a package with a phone"
            width={256}
            height={256}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-md text-center text-white">
        <h1 className="mb-4 text-4xl font-extrabold">Welcome to ShipNow</h1>
        <p className="text-lg leading-relaxed opacity-90">
          Manage your shipments, fleet, and warehouse in one smart dashboard.
        </p>
      </div>
    </section>
  );
}
