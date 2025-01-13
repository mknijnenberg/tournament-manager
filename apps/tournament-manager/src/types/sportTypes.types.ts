export const SportTypes = {
  Tabletennis: 'tabletennis',
} as const;

export type SportTypeNames = (typeof SportTypes)[keyof typeof SportTypes];
