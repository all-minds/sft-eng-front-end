import Property from "@/models/property";
import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";

interface PropertyCardProps {
  property: Property;
  onClick: (property: Property) => unknown;
}

export default function PropertyCard({ property, onClick }: PropertyCardProps) {
  return (
    <Card
      withBorder
      data-testid="property-card"
      p="lg"
      h="100%"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Card.Section>
        <Image
          data-testid="property-card_brand-image"
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>
      <Group position="apart" mt="md" mb="xs" display="flex" noWrap>
        <Text weight={500} truncate>
          {property.name}
        </Text>
        <div>
          <Badge color={property.active ? "green" : "red"} variant="light">
            {property.active ? "Ativa" : "Inativa"}
          </Badge>
        </div>
      </Group>

      <Text size="sm" color="dimmed" lineClamp={2}>
        {property.state}, {property.city} - {property.state} -{" "}
        {property.zipCode}
      </Text>

      <div style={{ flexGrow: 1 }} />

      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={() => onClick(property)}
      >
        Ver detalhes
      </Button>
    </Card>
  );
}
