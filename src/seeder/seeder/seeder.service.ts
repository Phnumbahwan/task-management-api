import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeederService implements OnModuleInit {
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>,
    ) { }

    async onModuleInit() {
        const users = await this.userRepo.find();
        if (users.length === 0) {
            await this.userRepo.save([
                { first_name: 'Admin', last_name: 'User', email: 'admin@example.com' },
                { first_name: 'Guest', last_name: 'User', email: 'guest@example.com' },
            ]);
        }
    }
}
