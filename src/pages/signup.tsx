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

export default function Signup() {
  const { classes } = useStyles();
  const { push } = useRouter();

  return (
    <Center h="100%">
      <Container fluid p={0} maw={400} w="90%">
        <Text weight={"bold"} size={"lg"}>
          Cadastre-se
        </Text>
        {/* <Text mb={"md"}>Você pode ter acesso as funcionalidades</Text> */}
        <div className={classes.content}>
          <TextInput
            label="Nome completo"
            data-testid="signup_fullName"
            placeholder="Ex: ze@gmail.com"
          />
          <TextInput
            type="email"
            label="Email"
            data-testid="signup_email"
            placeholder="Ex: ze@gmail.com"
          />
          <TextInput
            type="password"
            label="Senha"
            data-testid="signup_password"
            placeholder="Ex: pass123"
          />
          <Button fullWidth data-testid="signup_submit">
            Cadastrar
          </Button>
        </div>
        {/* <Text align="center" my="md" color={"gray"}>
          ou
        </Text> */}
        <Button
          fullWidth
          variant="light"
          data-testid="login_signup"
          mt="md"
          onClick={() => push("/login")}
        >
          Voltar
        </Button>
      </Container>
    </Center>
  );
}

Signup.getLayout = function getLayout(page: JSX.Element) {
  return <Unauthorized>{page}</Unauthorized>;
};
