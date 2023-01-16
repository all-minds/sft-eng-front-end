import Unauthorized from "@/layouts/unauthorized";
import {
  Button,
  Center,
  Container,
  createStyles,
  Text,
  TextInput,
} from "@mantine/core";

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
            placeholder="Ex: ze@gmail.com"
          />
          <TextInput
            type="password"
            label="Senha"
            placeholder="Ex: pass123"
          />
          <Button fullWidth>Entrar</Button>
        </div>
        <Text align="center" my="md" color={"gray"}>
          ou
        </Text>
        <Button fullWidth variant="light">
          Cadastrar
        </Button>
      </Container>
    </Center>
  );
}

Login.getLayout = function getLayout(page: JSX.Element) {
  return <Unauthorized>{page}</Unauthorized>;
};
