"use client";
import Header from "@/components/header";
import React from "react";
import { Card, Image, Button } from "@nextui-org/react";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Card radius="lg" className="border-none">
        <Image
          alt="salesforce"
          className="object-cover"
          height={200}
          src="/salesforce.png"
          width={200}
        />
        <Button className="justify-between  text-white bg-black/30 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          Connect
        </Button>
      </Card>
      <Card radius="lg" className="border-none">
        <Image
          alt="shopify"
          className="object-cover"
          height={200}
          src="/shop.png"
          width={200}
        />

        <Button className="justify-between  text-white bg-black/30 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          Connect
        </Button>
      </Card>
      <Card radius="lg" className="border-none">
        <Image
          alt="magento"
          className="object-cover"
          height={200}
          src="/magento.png"
          width={200}
        />
        <Button className="justify-between  text-white bg-black/30 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          Connect
        </Button>
      </Card>
    </main>
  );
}
