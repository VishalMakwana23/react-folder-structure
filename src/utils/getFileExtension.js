function getFileExtension(fileName) {
  return fileName ? fileName.split(".").pop() : undefined;
}

export default getFileExtension;
