import { Container, createStyles, Flex, MediaQuery } from "@mantine/core";

interface UnauthorizedProps {
  children?: JSX.Element;
}

const useStyles = createStyles(() => ({
  brandContainer: {
    flex: 1,
    backgroundImage: `url('./brand-wallpaper.jpg')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));

export default function Unauthorized({ children }: UnauthorizedProps) {
  const { classes } = useStyles();

  return (
    <Flex style={{ height: "100%" }} data-testid="unauthorized-layout">
      <Container fluid style={{ flex: "1" }} data-testid="unauthorized_content-container">
        {children}
      </Container>
      <MediaQuery smallerThan={"lg"} styles={() => ({ display: "none" })}>
        <Container
          fluid
          className={classes.brandContainer}
          data-testid="unauthorized_brand-image"
        >
          oi
        </Container>
      </MediaQuery>
    </Flex>
  );
}
