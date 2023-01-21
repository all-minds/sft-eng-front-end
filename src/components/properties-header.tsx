import { Button, Container, createStyles } from "@mantine/core";

interface PropertiesHeaderProps {
  onClickAdd: () => void;
}

const useStyles = createStyles(({ spacing }) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    position: "sticky",
    top: 70,
    zIndex: 2,
    background: "inherit",
  },
}));

export default function PropertiesHeader({
  onClickAdd,
}: PropertiesHeaderProps) {
  const { classes } = useStyles();

  return (
    <Container
      fluid
      px={0}
      py="md"
      data-testid="properties-header"
      className={classes.root}
    >
      <Button data-testid="properties-header_add-button" onClick={onClickAdd}>
        Adicionar
      </Button>
    </Container>
  );
}
