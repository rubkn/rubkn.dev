export type PinnedRepo = {
  name: string;
  bio: string;
  company: string;
  twitterUsername: string;
  websiteUrl: string;
  url: string;
  pinnedItems: {
    name: string;
    description: string;
    url: string;
    stargazerCount: number;
    forkCount: number;
    languages: {
      name: string;
      color: string;
    }[];
  }[];
};

export type BlogPost = {
  url: string;
  frontmatter: {
    title: string;
    description: string;
    publishDate: string;
    readingTime: string;
    tags: string[];
    draft?: boolean;
  };
};
