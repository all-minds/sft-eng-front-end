import { DefaultMantineColor } from "@mantine/core";
import { useRouter } from "next/router";
import IconButton from "./icon-button";

export interface DefaultNavbarItemProps {
  label: string;
  color: DefaultMantineColor;
  icon: JSX.Element;
  to: string;
  active?: boolean;
}

export default function DefaultNavbarItem({
  to,
  ...props
}: DefaultNavbarItemProps) {
  const { push } = useRouter();

  return (
    <div data-testid="default-navbar-item">
      <IconButton {...props} onClick={() => push(to)} />
    </div>
  );
}
