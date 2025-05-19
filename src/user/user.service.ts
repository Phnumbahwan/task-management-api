import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>,
    ) { }

    findAll() {
        try {
            return this.userRepo.find()
        } catch (error) {
            console.log(error)
        }
    }
}
