import Authorized from "@/layouts/authorized";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>odas</div>
    </>
  );
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return <Authorized>{page}</Authorized>;
};
