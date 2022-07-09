import { Query, Resolver } from "type-graphql";
import { Example } from "../schema/example.schema";


@Resolver()
export default class ExampleResolver {
  @Query(() => Example)
  exampleQuery() {
    return{
      _id: "123",
      name: "John Doe"
    }
  }
}