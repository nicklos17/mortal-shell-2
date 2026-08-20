export type UpdatePost = {
  slug: string;
  title: string;
  datePublished: string; // ISO
  dateModified?: string;
  author: string;
  excerpt: string;
  tags: string[];
};

export const updatePosts: UpdatePost[] = [
  {
    slug: "mortal-shell-2-release-date",
    title: "Mortal Shell 2 Release Date",
    datePublished: "2026-08-14T09:00:00Z",
    author: "Mortal Shell 2 Wiki Staff",
    excerpt:
      "Cold Symmetry has officially confirmed the Mortal Shell 2 release date. The sequel to the cult soulslike arrives on August 20, 2026 for Steam, PS5, and Xbox Series X|S.",
    tags: ["News", "Release Date", "Announcement"],
  },
];
