import { Product } from "src/product/product.entity"
import { Entity, ObjectId, ObjectIdColumn, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"

@Entity()
export class Comment {
    @ObjectIdColumn()
    id: string

    @Column()
    userName: string

    @Column()
    comment: string

    @Column()
    score: number

    constructor(userName: string, comment: string, score: number) {        
        this.userName = userName
        this.comment = comment
        this.score = score
    }
}