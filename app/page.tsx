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
