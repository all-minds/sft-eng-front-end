import Authorized from "@/layouts/authorized";

export default function Properties() {
  return <div></div>;
}

Properties.getLayout = function getLayout(page: JSX.Element) {
  return <Authorized>{page}</Authorized>;
};
