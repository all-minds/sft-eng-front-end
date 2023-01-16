import DefaultHeader from "@/components/header";
import DefaultNavbar from "@/components/navbar";
import {
  AppShell,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";

interface AuthorizedProps {
  children?: JSX.Element;
}

export default function Authorized({ children }: AuthorizedProps) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<DefaultNavbar opened={opened} />}
      header={
        <DefaultHeader opened={opened} setOpened={setOpened} theme={theme} />
      }
    >
      {children}
    </AppShell>
  );
}
