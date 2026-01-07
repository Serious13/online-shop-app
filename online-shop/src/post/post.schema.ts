
import { EntitySchema } from 'typeorm';
import { Comment } from './post.entity.js';

export const PostSchema = new EntitySchema<Comment>({
  name: 'Comment',
  target: Comment,
  columns: {
    id: {
      type: String,
      primary: true,
      generated: true,
    }, 
    userName :{
      type: String,
    },
    comment :{
      type: String,
    },
    score :{
      type: Number,
    }
  }
});
