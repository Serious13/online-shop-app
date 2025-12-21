
import { Index, Entity, Column, PrimaryGeneratedColumn, OneToMany, ObjectIdColumn, ObjectId } from 'typeorm';
import { Post } from 'src/post/post.entity';
 

@Entity('Product')
export class Product {

  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  version: string;

  @Column()
  shortDescription: string;

  @Column()
  longDescription: string;

  @Column()
  inStock: boolean;
  
  @Column((type) => Post)
  posts: Post[]
}
