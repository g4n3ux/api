import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GlobalsService } from './globals.service';
import { Global } from './entities/global.entity';
import { CreateGlobalInput } from './dto/create-global.input';
import { UpdateGlobalInput } from './dto/update-global.input';

@Resolver(() => Global)
export class GlobalsResolver {
  constructor(private readonly globalsService: GlobalsService) {}

  @Mutation(() => Global)
  createGlobal(@Args('createGlobalInput') createGlobalInput: CreateGlobalInput) {
    return this.globalsService.create(createGlobalInput);
  }

  @Query(() => [Global], { name: 'globals' })
  findAll() {
    return this.globalsService.findAll();
  }

  @Query(() => Global, { name: 'global' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.globalsService.findOne(id);
  }

  @Mutation(() => Global)
  updateGlobal(@Args('updateGlobalInput') updateGlobalInput: UpdateGlobalInput) {
    return this.globalsService.update(updateGlobalInput.id, updateGlobalInput);
  }

  @Mutation(() => Global)
  removeGlobal(@Args('id', { type: () => Int }) id: number) {
    return this.globalsService.remove(id);
  }
}
