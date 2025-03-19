export const validateExtensionType = (file: any) => {
  const ext = file.originalname.split('.')[1].toLowerCase();

  return ext;
}