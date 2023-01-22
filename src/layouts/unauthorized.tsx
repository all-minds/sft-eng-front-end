import { useAuthContext } from "@/contexts/auth.context";
import useAuth from "@/hooks/useAuth";
import { Container, createStyles, Flex, MediaQuery } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
  const { loginStatus } = useAuthContext();
  const { push } = useRouter();

  useEffect(() => {
    if (loginStatus == "logged") {
      push("/");
    }
  }, [loginStatus, push]);

  return (
    <Flex style={{ height: "100%" }} data-testid="unauthorized-layout">
      <Container
        fluid
        style={{ flex: "1" }}
        data-testid="unauthorized_content-container"
      >
        {children}
      </Container>
      <MediaQuery smallerThan={"lg"} styles={() => ({ display: "none" })}>
        <Container
          fluid
          className={classes.brandContainer}
          data-testid="unauthorized_brand-image"
        ></Container>
      </MediaQuery>
    </Flex>
  );
}
