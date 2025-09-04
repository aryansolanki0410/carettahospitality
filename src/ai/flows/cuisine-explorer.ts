'use server';
/**
 * @fileOverview An AI agent for exploring cuisine options based on user preferences.
 *
 * - cuisineExplorer - A function that suggests food pairings or menu options.
 */

import {ai} from '@/ai/genkit';
import {
  CuisineExplorerInputSchema,
  CuisineExplorerOutputSchema,
  type CuisineExplorerInput,
  type CuisineExplorerOutput,
} from '@/ai/schemas/cuisine-explorer';

export async function cuisineExplorer(
  input: CuisineExplorerInput
): Promise<CuisineExplorerOutput> {
  return cuisineExplorerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'cuisineExplorerPrompt',
  input: {schema: CuisineExplorerInputSchema},
  output: {schema: CuisineExplorerOutputSchema},
  prompt: `You are a culinary expert at Caretta Hospitality, skilled in suggesting food pairings and menu options.

  Based on the following user preferences, provide a list of suitable suggestions from Caretta Hospitality's offerings.

  Dietary Restrictions: {{{dietaryRestrictions}}}
  Cuisine Preferences: {{{cuisinePreferences}}}
  Event Type: {{{eventTypes}}}

  Suggestions:`,
});

const cuisineExplorerFlow = ai.defineFlow(
  {
    name: 'cuisineExplorerFlow',
    inputSchema: CuisineExplorerInputSchema,
    outputSchema: CuisineExplorerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
