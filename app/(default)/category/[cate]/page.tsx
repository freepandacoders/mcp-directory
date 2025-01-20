import {
    getProjectsByCategory,
    getProjectsCountByCategory,
} from '@/models/project';

import Category from '@/templates/tailspark/landing/components/category';
import { findCategoryByName } from '@/models/category';
import pagejson from '@/pagejson/cn.js';

export const runtime = 'edge';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ cate: string }>;
}) {
    const { cate } = await params;

    let title = 'Awesome MCP Servers';
    let description = 'Find Awesome MCP Servers for category';

    if (cate) {
        const category = await findCategoryByName(cate);
        title = `Awesome MCP Servers for ${category?.title || '-'} | ${
            pagejson?.metadata?.title
        }`;
        description = `Find Awesome MCP Servers for category: ${
            category?.title || '-'
        }`;
    }

    return {
        title,
        description,
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_WEB_URL}/category/${cate}`,
        },
    };
}

export default async function ({
    params,
}: {
    params: Promise<{ cate: string }>;
}) {
    const { cate } = await params;

    if (!cate) {
        return <div>invalid params</div>;
    }

    const category = await findCategoryByName(cate);
    if (!category) {
        return <div>Category not found</div>;
    }

    const projects = await getProjectsByCategory(cate, 1, 300);
    category.projects_count = await getProjectsCountByCategory(cate);

    return <Category category={category} projects={projects} />;
}
