import { Entity, ObjectId, ObjectIdColumn, Column } from "typeorm"

@Entity('User')
export class User {
    @ObjectIdColumn()
    id: ObjectId

    @Column()
    email: string

    @Column()
    password: string
}