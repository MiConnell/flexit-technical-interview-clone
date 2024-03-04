"use client";
import React from "react";

import Header from "@/components/header";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Input,
  Button,
} from "@nextui-org/react";

export default function Deploy() {
  const [selected, setSelected] = React.useState("customer");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <b>I Want To</b>
        <Card
          shadow="sm"
          key="customer"
          isPressable
          onPress={() => setSelected("customer")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              radius="sm"
              width="55%"
              alt="Host Myself"
              src="/server-local.webp"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Host Myself</b>
          </CardFooter>
        </Card>
        <Card
          shadow="sm"
          key="flexit"
          isPressable
          onPress={() => setSelected("flexit")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              radius="sm"
              width="55%"
              alt="Use FlexLake Servers"
              src="/cloud-server.webp"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Use FlexLake Servers</b>
          </CardFooter>
        </Card>
        <Card
          shadow="sm"
          key="unsure"
          isPressable
          onPress={() => setSelected("unsure")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              radius="sm"
              width="55%"
              alt="I'm Not Sure"
              src="/unsure.png"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>I&apos;m Not Sure</b>
          </CardFooter>
        </Card>
      </div>
      {selected === "customer" && (
        <form className="flex flex-col gap-4">
          <div className="flex gap-3 justify-center">
            <Button
              fullWidth
              color="primary"
              onPress={() =>
                open(
                  "https://github.com/flexanalytics/dbt-business-intelligence"
                )
              }
            >
              Clone this repo to get started!
            </Button>
          </div>
        </form>
      )}
      {selected === "flexit" && (
        <form className="flex flex-col gap-4">
          <b>provide your datasource credentials</b>
          <Input isRequired placeholder="server" />
          <Input isRequired placeholder="port" />
          <Input isRequired placeholder="database" />
          <Input isRequired placeholder="admin user" />
          <Input isRequired placeholder="password" type="password" />
          <div className="flex gap-3 justify-center">
            <Button fullWidth color="primary">
              Test Connection
            </Button>
            <Button fullWidth color="primary">
              Login
            </Button>
          </div>
        </form>
      )}
      {selected === "unsure" && (
        <form className="flex flex-col gap-4">
          <Input isRequired placeholder="Enter your email" type="email" />
          <div className="flex gap-2 justify-end">
            <Button fullWidth color="primary">
              Get in touch!
            </Button>
          </div>
        </form>
      )}
    </main>
  );
}
