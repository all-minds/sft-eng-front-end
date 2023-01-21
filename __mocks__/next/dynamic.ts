const dynamic = (func: Function) => {
  const functionString = func.toString();
  const modulePath = (functionString.match(/"(.*?)"/) ?? [])[1];

  const namedExport = functionString.match(/mod\.(.+?(?=\)))/);
  const componentName = namedExport ? namedExport[1] : "default";

  return require(modulePath)[componentName];
};

export default dynamic;
