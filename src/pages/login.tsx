import useAuth from "@/hooks/useAuth";
import Unauthorized from "@/layouts/unauthorized";
import {
  Button,
  Center,
  Container,
  createStyles,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";

const useStyles = createStyles(({ spacing }) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },

  content: {
    "& > form": {
      gap: spacing.md,
      display: "flex",
      flexDirection: "column",
    },
  },
}));

interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const { classes } = useStyles();
  const { push } = useRouter();
  const { getInputProps, onSubmit } = useForm<LoginForm>({
    validateInputOnChange: true,

    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => {
        return /^\S+@\S+$/.test(value) ? null : "Email inválido";
      },
      password: (value) => (value.length > 6 ? null : "Senha inválida"),
    },
  });
  const { login, loading } = useAuth();

  return (
    <Center h="100%">
      <Container fluid p={0} maw={400} w="90%">
        <Text weight={"bold"} size={"lg"}>
          Faça seu login
        </Text>
        <Text mb={"md"}>Você pode ter acesso as funcionalidades</Text>
        <div className={classes.content}>
          <form onSubmit={onSubmit(login)}>
            <TextInput
              label="Email"
              data-testid="login_email"
              placeholder="Ex: ze@gmail.com"
              {...getInputProps("email")}
            />
            <TextInput
              type="password"
              label="Senha"
              data-testid="login_password"
              placeholder="Ex: pass123"
              {...getInputProps("password")}
            />
            <Button
              type="submit"
              fullWidth
              loading={loading}
              data-testid="login_submit"
            >
              Entrar
            </Button>
          </form>
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
