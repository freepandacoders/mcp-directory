import { Category } from "@/types/category";
import { getProjectsCountByCategory } from "./project";
import { getSupabaseClient } from "./db";

export async function insertCategory(category: Category) {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase.from("categories").insert(category);

  if (error) throw error;
  return data;
}

export async function findCategoryByName(
  name: string
): Promise<Category | undefined> {
  if (!name) return undefined;
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("name", name)
    .eq("status", "created")
    .single();

  if (error) return undefined;

  return data;
}

export async function getCategories(
  page: number,
  limit: number
): Promise<Category[]> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("status", "created")
    .order("created_at", { ascending: false })
    .range((page - 1) * limit, page * limit - 1);

  if (error) return [];

  return data.map((category) => ({
    ...category,
    projects_count: getProjectsCountByCategory(category.name),
  }));
}

export async function updateCategory(name: string, category: Partial<Category>) {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("categories")
    .update(category)
    .eq("name", name);

  if (error) throw error;
  return data;
}
