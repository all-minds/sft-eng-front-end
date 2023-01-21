import useAuth from "@/hooks/useAuth";
import { Navbar } from "@mantine/core";
import {
  IconAlertCircle,
  IconDatabase,
  IconDashboard,
  IconHomeDollar,
  IconLogout,
  IconMessages,
} from "@tabler/icons";
import { useRouter } from "next/router";
import { useCallback } from "react";
import IconButton from "./icon-button";
import DefaultNavbarItem, { DefaultNavbarItemProps } from "./navbar-item";

interface DefaultNavbarProps {
  opened: boolean;
}

const data: DefaultNavbarItemProps[] = [
  // {
  //   icon: <IconDashboard size={16} />,
  //   color: "orange",
  //   label: "Meus ganhos",
  //   to: "/",
  // },
  {
    icon: <IconHomeDollar size={16} />,
    color: "blue",
    label: "Minhas propriedades",
    to: "/properties",
  },
];

export default function DefaultNavbar({ opened }: DefaultNavbarProps) {
  const { pathname } = useRouter();
  const isActive = useCallback((to: string) => to === pathname, [pathname]);
  const { logout } = useAuth();

  return (
    <Navbar
      data-testid="default-navbar"
      p="md"
      hiddenBreakpoint="md"
      hidden={!opened}
      width={{ md: 280, lg: 300 }}
    >
      <Navbar.Section grow>
        {data.map((props, index) => (
          <DefaultNavbarItem
            {...props}
            active={isActive(props.to)}
            key={index}
          />
        ))}
      </Navbar.Section>
      <Navbar.Section>
        <IconButton
          color="red"
          label="Sair"
          icon={<IconLogout size={16} />}
          onClick={logout}
        />
      </Navbar.Section>
    </Navbar>
  );
}
