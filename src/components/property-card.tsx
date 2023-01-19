import Property from "@/models/property";
import { Card } from "@mantine/core";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({}: PropertyCardProps) {
  return (
    <Card withBorder w={200} data-testid="property-card">
      oi
    </Card>
  );
}
