import { Burger, Header, MantineTheme, MediaQuery, Text } from "@mantine/core";

interface DefaultHeaderProps {
  opened: boolean;
  theme: MantineTheme;
  setOpened: (arg: boolean) => void;
}

export default function DefaultHeader({
  theme,
  opened,
  setOpened,
}: DefaultHeaderProps) {
  return (
    <Header height={{ base: 50, md: 70 }} p="md" data-testid="default-header">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="md" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
            data-testid="default-header_mobile-burger"
          />
        </MediaQuery>

        <Text>CarbonCredits</Text>
      </div>
    </Header>
  );
}
