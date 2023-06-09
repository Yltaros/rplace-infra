import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class UserEntity {

    @PrimaryColumn('text')
    userId: string;     // pcsope.username

    @Column('text')
    username: string;

    @Column('text')
    pscope: string;

    @Column('int', {
        nullable: true
    })
    timer: number = null;

    @Column("simple-array", {
        nullable: true
    })
    colors: string[] = null;

    @Column("int", {
        nullable: true
    })
    stickedPixelAvailable: number;

    @Column("int", {
        nullable: true
    })
    bombAvailable: number;

    @Column("boolean", {
        nullable: true
    })
    isUserGold: boolean;

}