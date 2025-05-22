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

    create(data: { first_name: string, last_name: string, email: string }) {
        try {
            return this.userRepo.save(data)
        } catch (error) {
            console.log(error)
        }
    }

    async updateUser(id: number, updatedUser: { first_name: string; last_name: string; email: string }) {
        const existingUser = await this.userRepo.findOneBy({ id });
        if (!existingUser) {
            throw new Error('User not found');
        }
        Object.assign(existingUser, updatedUser);
        return this.userRepo.save(existingUser);
    }
}

// Test commit 4