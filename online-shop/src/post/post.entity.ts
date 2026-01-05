import { Entity, ObjectId, ObjectIdColumn, Column } from "typeorm"

@Entity('Post')
export class Post {
    @ObjectIdColumn()
    id: ObjectId

    @Column()
    userId: string

    @Column()
    comment: string

    @Column()
    score: number

    constructor(userId: string, comment: string, score: number) {        
        this.userId = userId
        this.comment = comment
        this.score = score
    }
}