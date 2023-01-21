import PropertiesHeader from "@/components/properties-header";
import Authorized from "@/layouts/authorized";
import { generateProperty } from "@/mocks/property";
import Property from "@/models/property";
import { useState } from "react";
import PropertyDrawer from "@/components/property-drawer";
import dynamic from "next/dynamic";
/** Importing dynamic component */
const PropertiesGrid = dynamic(() => import("@/components/properties-grid"), {
  ssr: false,
  loading: () => <>Loading...</>,
});

const properties = [
  generateProperty(),
  generateProperty(),
  generateProperty(),
  generateProperty(),
  generateProperty(),
  generateProperty(),
  generateProperty(),
  generateProperty(),
  generateProperty(),
  generateProperty(),
  generateProperty(),
  generateProperty(),
];

export default function Properties() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClickItem = (property: Property) => {
    setSelectedProperty(property);
    setIsDrawerOpen(true);
  };

  const onClose = () => {
    setSelectedProperty(null);
    setIsDrawerOpen(false);
  };

  return (
    <>
      <PropertiesHeader onClickAdd={() => setIsDrawerOpen(true)} />
      <PropertiesGrid properties={properties} onClickItem={handleClickItem} />
      <PropertyDrawer
        opened={isDrawerOpen}
        property={selectedProperty}
        onClose={onClose}
        onUpdateProperty={() => {}}
        onCreateProperty={() => {}}
      />
    </>
  );
}

Properties.getLayout = function getLayout(page: JSX.Element) {
  return <Authorized>{page}</Authorized>;
};
