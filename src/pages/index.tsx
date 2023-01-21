import Authorized from "@/layouts/authorized";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { replace } = useRouter();

  useEffect(() => {
    replace("/properties");
  }, [replace]);

  return <></>;
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return <Authorized>{page}</Authorized>;
};
