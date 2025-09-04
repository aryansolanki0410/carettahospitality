"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { exploreCuisineAction } from "@/lib/actions";

// Define the form schema here using the standard Zod library
const formSchema = z.object({
  dietaryRestrictions: z.string(),
  cuisinePreferences: z.string(),
  eventTypes: z.string(),
});

export function CuisineExplorer() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dietaryRestrictions: "",
      cuisinePreferences: "",
      eventTypes: "",
    },
  });

  async function onSubmit(
    values: z.infer<typeof formSchema>
  ) {
    setLoading(true);
    setResult(null);

    // The values object already matches the required structure for the server action.
    const response = await exploreCuisineAction(values);

    if (response.success && response.data) {
      setResult(response.data.suggestions);
    } else {
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: response.error,
      });
    }

    setLoading(false);
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="cuisinePreferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cuisine Preferences</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., North Indian, Italian, Continental"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      What kind of food are you in the mood for?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dietaryRestrictions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dietary Restrictions</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Vegetarian, gluten-free, no nuts"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Any allergies or dietary needs we should know about?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="eventTypes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Type</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Corporate lunch, birthday party, wedding"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      What's the occasion?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={loading} className="w-full">
                {loading && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {loading ? "Exploring..." : "Find My Meal"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {result && (
        <Card className="mt-8 animate-in fade-in">
          <CardHeader>
            <CardTitle className="font-headline">Our Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none whitespace-pre-wrap font-body">
              {result}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
