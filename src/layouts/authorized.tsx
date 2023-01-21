import DefaultHeader from "@/components/header";
import DefaultNavbar from "@/components/navbar";
import { useAuthContext } from "@/contexts/auth.context";
import { AppShell, useMantineTheme } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface AuthorizedProps {
  children?: JSX.Element;
}

export default function Authorized({ children }: AuthorizedProps) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { loginStatus } = useAuthContext();
  const { push } = useRouter();

  useEffect(() => {
    if (loginStatus == "unlogged") {
      push("/login");
    }
  }, [loginStatus, push]);

  return (
    <AppShell
      data-testid="authorized-layout"
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
