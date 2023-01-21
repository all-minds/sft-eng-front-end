import Property from "@/models/property";
import { Center, Container, Grid, Text } from "@mantine/core";
import PropertyCard from "./property-card";

interface PropertiesGridProps {
  properties: Property[];
  onClickItem: (property: Property) => unknown;
}

export default function PropertiesGrid({
  properties,
  onClickItem,
}: PropertiesGridProps) {
  if (properties.length === 0)
    return (
      <Container fluid data-testid="properties-grid_no-content">
        <Center>
          <Text>No Data</Text>
        </Center>
      </Container>
    );

  return (
    <Grid data-testid="properties-grid">
      {properties.map((property) => (
        <Grid.Col sm={12} md={6} lg={4} xl={3} key={`grid-col-${property.id}`}>
          <PropertyCard
            property={property}
            key={property.id}
            onClick={onClickItem}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
}
