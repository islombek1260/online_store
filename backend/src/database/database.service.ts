import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  getConnection() {
    return this.connection;
  }
}