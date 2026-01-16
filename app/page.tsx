"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: "core-01",
    name: "VEXOR CORE 01",
    price: 279,
    description: "Raquette padel premium – équilibre puissance & contrôle",
    image: "/images/vexor/racket.webp",
  },
  {
    id: "pro-ball",
    name: "VEXOR PRO BALL",
    price: 7,
    description: "Balles de padel haute performance",
    image: "/images/vexor/balls.webp",
  },
  {
    id: "core-tee",
    name: "VEXOR CORE TEE",
    price: 49,
    description: "T-shirt technique premium",
    image: "/images/vexor/textile.webp",
  },
];

export default function Home() {
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (id: string) => {
    setCart((c) => [...c, id]);
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <Image
          src="/images/vexor/hero.webp"
          alt="VEXOR padel"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 max-w-2xl px-6">
          <h1 className="text-5xl font-bold tracking-tight">
            VEXOR
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Performance padel. Design. Exigence.
          </p>
          <a
            href="#shop"
            className="inline-block mt-8 rounded-full bg-[#B87333] px-8 py-3 font-semibold text-black"
          >
            Découvrir la gamme
          </a>
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10">La gamme VEXOR</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mt-4 font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-semibold">{p.price} €</span>
                <button
                  onClick={() => addToCart(p.id)}
                  className="rounded-full bg-[#B87333] px-4 py-2 text-sm font-semibold text-black"
                >
                  Ajouter
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LOOKBOOK */}
      <section className="relative h-[60vh] mt-20">
        <Image
          src="/images/vexor/lookbook.webp"
          alt="VEXOR lookbook"
          fill
          className="object-cover"
        />
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/50">
        © {new Date().getFullYear()} VEXOR — Engineered for padel
        <div className="mt-2">
          Panier : {cart.length} article(s)
        </div>
      </footer>
    </main>
  );
}