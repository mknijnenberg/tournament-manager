export type Options = {
  separator?: string;
}

const defaultOptions = {
  separator: '-',
}

export const slugify = (text: string, options: Options = {}): string => {
  const separator = options.separator || defaultOptions.separator;

  return text
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between lowercase and uppercase letters
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9\s]/g, "") // Remove non-alphanumeric characters except spaces
    .trim() // Trim leading/trailing spaces
    .replace(/\s+/g, separator); // Replace spaces with the chosen separator
}
