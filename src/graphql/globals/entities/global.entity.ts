import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Global {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
