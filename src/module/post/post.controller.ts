import SuccessResponse from "@common/builder/success-response.builder";
import appDataSource from "@database/app.datasource";
import { postEntity } from "@database/entity/post.entity";
import { BadRequest } from "@exception/response/client.exception";
import { InternalServeError } from "@exception/response/server.exception";
import { ICreatePostInput, IUpdatePostInput } from "@module/post/post.interface";
import { Request, Response } from "express";

class PostController {
  public createPost = async (request: Request, response: Response) => {
    const postInput: ICreatePostInput = request.body;

    try {
      const createdTask = await appDataSource.getRepository(postEntity).save({
        title: postInput.title,
        author: postInput.author,
        content: postInput.content
      });

      response.status(200).json(SuccessResponse(200, createdTask));
    } catch (error) {
      throw new InternalServeError(error);
    }
  };

  public getPosts = async (request: Request, response: Response) => {
    try {
      const posts = await appDataSource.getRepository(postEntity).find();

      response.status(200).json(SuccessResponse(200, posts));
    } catch (error) {
      throw new InternalServeError();
    }
  };

  public async getPostById(request: Request, response: Response) {
    const id = Number(request.params.id);

    try {
      const post = await appDataSource.getRepository(postEntity).findOne({ where: [{ id }] });

      if (!post) {
        throw new BadRequest(`The post with the id "${id}" not found.`);
      }

      response.status(200).json(SuccessResponse(200, post));
    } catch (error) {
      throw new InternalServeError();
    }
  }

  public async updatePost(request: Request, response: Response) {
    const id = Number(request.params.id);
    const postInput: IUpdatePostInput = request.body;

    const post = await appDataSource.getRepository(postEntity).findOne({
      where: [{ id }]
    });

    if (!post) {
      throw new BadRequest(`The post with the id "${id}" not found.`);
    }

    try {
      await appDataSource.getRepository(postEntity).update(
        { id },
        {
          title: postInput.title,
          author: postInput.author,
          content: postInput.content
        }
      );

      const updatedTask = await appDataSource
        .getRepository(postEntity)
        .findOneOrFail({ where: [{ id }] });

      response.status(200).json(SuccessResponse(200, updatedTask));
    } catch (error) {
      throw new InternalServeError();
    }
  }

  public async deletePost(request: Request, response: Response) {
    const id = Number(request.params.id);

    try {
      const post = await appDataSource.getRepository(postEntity).findOne({ where: [{ id }] });

      if (!post) {
        throw new BadRequest(`The post with the id "${id}" not found.`);
      }

      const deleteTask = await appDataSource.getRepository(postEntity).delete({ id });

      response.status(200).json(SuccessResponse(200, deleteTask));
    } catch (error) {
      throw new InternalServeError();
    }
  }
}

export default PostController;
