import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
 * @namespace Entities
 * @class Movie
 */

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column('text')
    description: string;
}