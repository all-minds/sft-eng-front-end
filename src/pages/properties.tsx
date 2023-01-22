import PropertiesHeader from "@/components/properties-header";
import Authorized from "@/layouts/authorized";
import Property, { NewProperty } from "@/models/property";
import { useCallback, useEffect, useState } from "react";
import PropertyDrawer from "@/components/property-drawer";
import dynamic from "next/dynamic";
import useProperties from "@/hooks/useProperties";
/** Importing dynamic component */
const PropertiesGrid = dynamic(() => import("@/components/properties-grid"), {
  ssr: false,
  loading: () => <>Loading...</>,
});

export default function Properties() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { fetchAllProperties, createProperty, updateProperty } =
    useProperties();
  const [properties, setProperties] = useState<Property[]>([]);

  const loadAll = useCallback(async () => {
    const response = await fetchAllProperties();

    setProperties(response);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  const handleClickItem = (property: Property) => {
    setSelectedProperty(property);
    setIsDrawerOpen(true);
  };

  const onClose = () => {
    setSelectedProperty(null);
    setIsDrawerOpen(false);
  };

  const handleCreateProperty = async (
    property: Omit<NewProperty, "ownerId">
  ) => {
    await createProperty(property);
    loadAll();
  };

  const handleUpdateProperty = async (property: Property) => {
    await updateProperty(property);
    loadAll();
  };

  return (
    <>
      <PropertiesHeader onClickAdd={() => setIsDrawerOpen(true)} />
      <PropertiesGrid properties={properties} onClickItem={handleClickItem} />
      <PropertyDrawer
        opened={isDrawerOpen}
        property={selectedProperty}
        onClose={onClose}
        onUpdateProperty={handleUpdateProperty}
        onCreateProperty={handleCreateProperty}
        onActiveProperty={({ active, ...property }) =>
          handleUpdateProperty({ ...property, active: !active })
        }
      />
    </>
  );
}

Properties.getLayout = function getLayout(page: JSX.Element) {
  return <Authorized>{page}</Authorized>;
};
