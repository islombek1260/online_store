import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column('int', { array: true })
  productIds: number[];

  @Column('decimal')
  totalAmount: number;

  // Другие поля по необходимости
}