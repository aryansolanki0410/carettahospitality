"use server";

import type { z } from "zod";
import { cuisineExplorer } from "@/ai/flows/cuisine-explorer";
import { CuisineExplorerInputSchema } from "@/ai/schemas/cuisine-explorer";

type ActionResult = {
  success: boolean;
  data?: { suggestions: string };
  error?: string;
};

export async function exploreCuisineAction(
  input: z.infer<typeof CuisineExplorerInputSchema>
): Promise<ActionResult> {
  const parsedInput = CuisineExplorerInputSchema.safeParse(input);

  if (!parsedInput.success) {
    return {
      success: false,
      error: "Invalid input. Please check your entries.",
    };
  }

  try {
    const result = await cuisineExplorer(parsedInput.data);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error in cuisineExplorer action:", error);
    return {
      success: false,
      error:
        "Sorry, we couldn't generate suggestions at this time. Please try again later.",
    };
  }
}
