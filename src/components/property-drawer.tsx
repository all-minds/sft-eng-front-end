import Property, { NewProperty } from "@/models/property";
import {
  Button,
  Drawer,
  Flex,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect } from "react";

interface PropertyDrawer {
  opened: boolean;
  property: Property | null;
  onClose: () => void;
  onCreateProperty: (newProperty: Omit<NewProperty, "ownerId">) => unknown;
  onUpdateProperty: (property: Property) => unknown;
  onActiveProperty: (property: Property) => unknown;
}

type PropertyForm = Omit<NewProperty, "ownerId">;

export default function PropertyDrawer({
  opened,
  property,
  onClose,
  onCreateProperty,
  onUpdateProperty,
  onActiveProperty,
}: PropertyDrawer) {
  const { breakpoints } = useMantineTheme();
  const matches = useMediaQuery(`(min-width: ${breakpoints.md}px)`);
  const { getInputProps, setValues, reset, onSubmit } = useForm<PropertyForm>({
    validate: {
      city: (value) => (value.length > 1 ? null : "Digite um valor"),
      name: (value) => (value.length > 1 ? null : "Digite um valor"),
      number: (value) => (value.length > 1 ? null : "Digite um valor"),
      state: (value) => (value.length > 1 ? null : "Digite um valor"),
      street: (value) => (value.length > 1 ? null : "Digite um valor"),
      zipCode: (value) => (value.length > 1 ? null : "Digite um valor"),
    },

    initialValues: {
      city: property?.city ?? "",
      name: property?.name ?? "",
      number: property?.number ?? "",
      state: property?.state ?? "",
      street: property?.street ?? "",
      zipCode: property?.zipCode ?? "",
      complement: property?.complement ?? "",
    },
  });

  useEffect(() => {
    if (property) {
      setValues(property);
    } else {
      reset();
    }
  }, [property, setValues, reset]);

  const handleSubmit = (values: PropertyForm) => {
    if (property) {
      onUpdateProperty({ ...property, ...values });
    } else {
      onCreateProperty(values);
    }

    onClose();
    reset();
  };

  return (
    <Drawer
      opened={opened}
      title="Propriedade"
      data-testid="property-drawer"
      padding="xl"
      size={matches ? "xl" : "full"}
      position="right"
      onClose={onClose}
    >
      <form onSubmit={onSubmit(handleSubmit)}>
        <TextInput label="Nome" {...getInputProps("name")} />
        <Flex gap={"md"}>
          <TextInput
            label="Rua"
            mt="md"
            style={{ flex: 3 }}
            withAsterisk
            {...getInputProps("street")}
          />
          <TextInput
            label="Número"
            mt="md"
            style={{ flex: 1 }}
            withAsterisk
            {...getInputProps("number")}
          />
        </Flex>
        <Flex gap={"md"}>
          <TextInput
            label="Cidade"
            mt="md"
            style={{ flex: 3 }}
            withAsterisk
            {...getInputProps("city")}
          />
          <TextInput
            label="Estado"
            mt="md"
            style={{ flex: 1 }}
            withAsterisk
            {...getInputProps("state")}
          />
        </Flex>
        <TextInput label="CEP" mt="md" {...getInputProps("zipCode")} />
        <TextInput
          label="Complemento"
          mt="md"
          {...getInputProps("complement")}
        />
        <Button mt="md" type="submit">
          Salvar
        </Button>
        {property?.id && (
          <Button
            mt="md"
            ml="md"
            color={property.active ? "red" : "green"}
            variant="outline"
            onClick={() => {
              onActiveProperty(property);
              onClose();
            }}
          >
            {property.active ? "Desativar" : "Ativar"}
          </Button>
        )}
      </form>
    </Drawer>
  );
}
