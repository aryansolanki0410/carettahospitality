import {z} from 'genkit';

export const CuisineExplorerInputSchema = z.object({
  dietaryRestrictions: z
    .string()
    .describe('Any dietary restrictions or allergies the user has.'),
  cuisinePreferences: z
    .string()
    .describe('The preferred cuisine types of the user.'),
  eventTypes: z
    .string()
    .describe(
      'The type of event for which the user needs food suggestions (e.g., corporate lunch, wedding, birthday party).'
    ),
});
export type CuisineExplorerInput = z.infer<typeof CuisineExplorerInputSchema>;

export const CuisineExplorerOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'A list of suggested food pairings or menu options based on the user input.'
    ),
});
export type CuisineExplorerOutput = z.infer<
  typeof CuisineExplorerOutputSchema
>;
