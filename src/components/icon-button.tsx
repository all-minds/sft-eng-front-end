import {
  DefaultMantineColor,
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";

interface IconButtonProps {
  label: string;
  onClick: (arg?: unknown) => void;
  icon: JSX.Element;
  color: DefaultMantineColor;
}

export default function IconButton({
  icon,
  label,
  color,
  onClick,
}: IconButtonProps) {
  return (
    <UnstyledButton
      data-testid="icon-button"
      onClick={onClick}
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon data-testid="icon-button_icon" color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size={"md"} data-testid="icon-button_label">
          {label}
        </Text>
      </Group>
    </UnstyledButton>
  );
}
