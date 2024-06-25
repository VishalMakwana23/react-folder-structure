const createDeepCopy = (dataForCopy) => [
  ...JSON.parse(JSON.stringify(dataForCopy)),
];

export default createDeepCopy;
