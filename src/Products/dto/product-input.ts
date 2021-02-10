import { Field, InputType } from '@nestjs/graphql';
// import { IsOptional, Length, MaxLength } from 'class-validator';



@InputType()
export class ProductInput {
    @Field()
    title: string;

    @Field({ nullable: true })
    description?: string;

    @Field(type => [String])
    ingredients: string[];
}
