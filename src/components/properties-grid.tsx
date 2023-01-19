import Property from "@/models/property";
import { Center, Container, Grid, Text } from "@mantine/core";
import PropertyCard from "./property-card";

interface PropertiesGridProps {
  properties: Property[];
}

export default function PropertiesGrid({ properties }: PropertiesGridProps) {
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
        <PropertyCard property={property} key={property.id} />
      ))}
    </Grid>
  );
}
