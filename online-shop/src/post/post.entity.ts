import { Entity, ObjectId, ObjectIdColumn, Column } from "typeorm"

@Entity('Post')
export class Post {
    @ObjectIdColumn()
    id: ObjectId

    @Column()
    userId: string

    @Column()
    comment: string

    constructor(userId: string, comment: string) {        
        this.userId = userId
        this.comment = comment
    }
}