export interface ICreatePostInput {
  title: string;
  author: string;
  content?: string;
}

export interface IUpdatePostInput extends ICreatePostInput {}
