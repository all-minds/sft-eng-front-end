import { Navbar } from "@mantine/core";
import {
  IconAlertCircle,
  IconDatabase,
  IconDashboard,
  IconHomeDollar,
  IconLogout,
  IconMessages,
} from "@tabler/icons";
import IconButton from "./icon-button";
import DefaultNavbarItem, { DefaultNavbarItemProps } from "./navbar-item";

interface DefaultNavbarProps {
  opened: boolean;
}

const data: DefaultNavbarItemProps[] = [
  {
    icon: <IconDashboard size={16} />,
    color: "orange",
    label: "Meus ganhos",
    to: "/login",
  },
  {
    icon: <IconHomeDollar size={16} />,
    color: "blue",
    label: "Propriedades",
    to: "/login",
  },
];

export default function DefaultNavbar({ opened }: DefaultNavbarProps) {
  return (
    <Navbar
      data-testid="default-navbar"
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ md: 250, lg: 300 }}
    >
      <Navbar.Section grow>
        {data.map((props, index) => (
          <DefaultNavbarItem {...props} key={index} />
        ))}
      </Navbar.Section>
      <Navbar.Section>
        <IconButton
          color="red"
          label="Sair"
          icon={<IconLogout size={16} />}
          onClick={() => {}}
        />
      </Navbar.Section>
    </Navbar>
  );
}
