import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGlobalInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
