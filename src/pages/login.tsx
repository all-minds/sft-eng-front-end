import Unauthorized from "@/layouts/unauthorized";
import {
  Button,
  Center,
  Container,
  createStyles,
  Text,
  TextInput,
} from "@mantine/core";
import { useRouter } from "next/router";

const useStyles = createStyles(({ spacing }) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },

  content: {
    gap: spacing.md,
    display: "flex",
    flexDirection: "column",
  },
}));

export default function Login() {
  const { classes } = useStyles();
  const { push } = useRouter();

  return (
    <Center h="100%">
      <Container fluid p={0} maw={400} w="90%">
        <Text weight={"bold"} size={"lg"}>
          Faça seu login
        </Text>
        <Text mb={"md"}>Você pode ter acesso as funcionalidades</Text>
        <div className={classes.content}>
          <TextInput
            type="email"
            label="Email"
            data-testid="login_email"
            placeholder="Ex: ze@gmail.com"
          />
          <TextInput
            type="password"
            label="Senha"
            data-testid="login_password"
            placeholder="Ex: pass123"
          />
          <Button fullWidth data-testid="login_submit">
            Entrar
          </Button>
        </div>
        <Text align="center" my="md" color={"gray"}>
          ou
        </Text>
        <Button
          fullWidth
          variant="light"
          data-testid="login_signup"
          onClick={() => push("/signup")}
        >
          Cadastrar
        </Button>
      </Container>
    </Center>
  );
}

Login.getLayout = function getLayout(page: JSX.Element) {
  return <Unauthorized>{page}</Unauthorized>;
};
