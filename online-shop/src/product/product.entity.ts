
import { Index, Entity,PrimaryColumn, Column, PrimaryGeneratedColumn, OneToMany, ObjectIdColumn, ObjectId, OneToOne } from 'typeorm';
import { Comment } from 'src/post/post.entity';
 
@Entity('Product')
export class Product {
  @ObjectIdColumn()
  id: ObjectId; //ObjectId

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
  
  @Column((type) => Comment) //@Column((type) => Posts) 
  posts: Comment[] // posts: Posts[]
}
