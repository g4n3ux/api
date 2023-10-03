import { CreateGlobalInput } from './create-global.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGlobalInput extends PartialType(CreateGlobalInput) {
  @Field(() => Int)
  id: number;
}
