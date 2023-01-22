import useAuth from "@/hooks/useAuth";
import useOwner from "@/hooks/useOwner";
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
import { FormEvent, FormEventHandler } from "react";

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

interface SignupForm {
  email: string;
  name: string;
  password: string;
}

export default function Signup() {
  const { classes } = useStyles();
  const { push } = useRouter();

  const { getInputProps, errors, onSubmit } = useForm<SignupForm>({
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email inválido"),
      password: (value) => (value.length > 6 ? null : "Senha inválida"),
      name: (value) => (value ? null : "Digite o nome"),
    },

    validateInputOnChange: true,

    initialValues: {
      email: "",
      name: "",
      password: "",
    },
  });
  const { createUser, loading } = useAuth();
  const { createOwner } = useOwner();

  const handleSubmit = async (values: SignupForm) => {
    const user = await createUser(values);
    await createOwner(user);
  };

  return (
    <Center h="100%">
      <Container fluid p={0} maw={400} w="90%">
        <Text weight={"bold"} size={"lg"}>
          Cadastre-se
        </Text>
        {/* <Text mb={"md"}>Você pode ter acesso as funcionalidades</Text> */}
        <div className={classes.content}>
          <form onSubmit={onSubmit(handleSubmit)}>
            <TextInput
              label="Nome completo"
              data-testid="signup_fullName"
              placeholder="Ex: Zé"
              withAsterisk
              {...getInputProps("name")}
            />
            <TextInput
              label="Email"
              data-testid="signup_email"
              placeholder="Ex: ze@gmail.com"
              withAsterisk
              {...getInputProps("email")}
            />
            <TextInput
              type="password"
              label="Senha"
              data-testid="signup_password"
              placeholder="Ex: pass123"
              withAsterisk
              {...getInputProps("password")}
            />
            <Button
              fullWidth
              type="submit"
              data-testid="signup_submit"
              loading={loading}
            >
              Cadastrar
            </Button>
          </form>
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
