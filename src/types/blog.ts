export type TBlogContentType = "mdx" | "text" | "string";
export type TBlogStatus = "published" | "draft" | "unlisted" | "deleted";

export interface IBlogAuthor {
  name: string;
  email: string;
}

export interface ICategory {
  name: string;
  brief: string;
}

export interface IBlog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  brief: string;
  cover: string;
  contentType: TBlogContentType;
  author: IBlogAuthor;
  status: TBlogStatus;
  views: number;
  likes: number;
  comments: number;
  tags: string[];
  category: ICategory;
  createdAt: string;
  updatedAt: string;
}
