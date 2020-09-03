import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserTestEntity } from './usertest.entity';
import { UsertestService } from './usertest.service';
import { UserTestInput } from './usertest.input';

@Resolver('Usertest')
export class UsertestResolver {
    constructor(private readonly userTestService: UsertestService) { }

    @Query(() => [UserTestEntity])
    async userTests() {
        console.log('todos los test');
        return this.userTestService.findAll();
    }

    @Mutation(() => String)
    async createUserTest(@Args('input') input: UserTestInput) {
        // console.log(input);
        return this.userTestService.create(input);
        // return this.userTestService.createToken(user);
    }

}
