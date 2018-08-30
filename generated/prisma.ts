import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { makePrismaBindingClass, BasePrismaOptions, Options } from 'prisma-lib'

export interface Exists {
  link: (where?: LinkWhereInput) => Promise<boolean>
  user: (where?: UserWhereInput) => Promise<boolean>
  vote: (where?: VoteWhereInput) => Promise<boolean>
}

export interface Node {}

export interface Prisma {
  $exists: Exists;
  $request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>;
  $delegate: Delegate;
  $getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;

  /**
   * Queries
  */

    links: (args?: { where?: LinkWhereInput, orderBy?: LinkOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }) => Promise<Array<LinkNode>>;
    users: (args?: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }) => Promise<Array<UserNode>>;
    votes: (args?: { where?: VoteWhereInput, orderBy?: VoteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }) => Promise<Array<VoteNode>>;
    link: (where: LinkWhereUniqueInput) => Link;
    user: (where: UserWhereUniqueInput) => User;
    vote: (where: VoteWhereUniqueInput) => Vote;
    linksConnection: (args?: { where?: LinkWhereInput, orderBy?: LinkOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }) => LinkConnection;
    usersConnection: (args?: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }) => UserConnection;
    votesConnection: (args?: { where?: VoteWhereInput, orderBy?: VoteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }) => VoteConnection;
    node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
  */

    createLink: (data: LinkCreateInput) => Link;
    createUser: (data: UserCreateInput) => User;
    createVote: (data: VoteCreateInput) => Vote;
    updateLink: (args: { data: LinkUpdateInput, where: LinkWhereUniqueInput }) => Link;
    updateUser: (args: { data: UserUpdateInput, where: UserWhereUniqueInput }) => User;
    updateVote: (args: { data: VoteUpdateInput, where: VoteWhereUniqueInput }) => Vote;
    deleteLink: (where: LinkWhereUniqueInput) => Link;
    deleteUser: (where: UserWhereUniqueInput) => User;
    deleteVote: (where: VoteWhereUniqueInput) => Vote;
    upsertLink: (args: { where: LinkWhereUniqueInput, create: LinkCreateInput, update: LinkUpdateInput }) => Link;
    upsertUser: (args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }) => User;
    upsertVote: (args: { where: VoteWhereUniqueInput, create: VoteCreateInput, update: VoteUpdateInput }) => Vote;
    updateManyLinks: (args: { data: LinkUpdateInput, where?: LinkWhereInput }) => BatchPayload;
    updateManyUsers: (args: { data: UserUpdateInput, where?: UserWhereInput }) => BatchPayload;
    updateManyVotes: (args: { data: VoteUpdateInput, where?: VoteWhereInput }) => BatchPayload;
    deleteManyLinks: (where?: LinkWhereInput) => BatchPayload;
    deleteManyUsers: (where?: UserWhereInput) => BatchPayload;
    deleteManyVotes: (where?: VoteWhereInput) => BatchPayload;
}

export interface Delegate {
  (
    operation: 'query' | 'mutation',
    fieldName: string,
    args: {
      [key: string]: any
    },
    infoOrQuery?: GraphQLResolveInfo,
    options?: Options,
  ): Promise<any>
  query: DelegateQuery
  mutation: DelegateMutation
}

export interface DelegateQuery {
    links: <T = Promise<Array<LinkNode>>>(args?: { where?: LinkWhereInput, orderBy?: LinkOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int , info?: GraphQLResolveInfo, options?: Options}) => T;
    users: <T = Promise<Array<UserNode>>>(args?: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int , info?: GraphQLResolveInfo, options?: Options}) => T;
    votes: <T = Promise<Array<VoteNode>>>(args?: { where?: VoteWhereInput, orderBy?: VoteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int , info?: GraphQLResolveInfo, options?: Options}) => T;
    link: <T = Promise<Partial<LinkNode | null>>>(where: LinkWhereUniqueInput) => T;
    user: <T = Promise<Partial<UserNode | null>>>(where: UserWhereUniqueInput) => T;
    vote: <T = Promise<Partial<VoteNode | null>>>(where: VoteWhereUniqueInput) => T;
    linksConnection: <T = Promise<Partial<LinkConnectionNode>>>(args?: { where?: LinkWhereInput, orderBy?: LinkOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int , info?: GraphQLResolveInfo, options?: Options}) => T;
    usersConnection: <T = Promise<Partial<UserConnectionNode>>>(args?: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int , info?: GraphQLResolveInfo, options?: Options}) => T;
    votesConnection: <T = Promise<Partial<VoteConnectionNode>>>(args?: { where?: VoteWhereInput, orderBy?: VoteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int , info?: GraphQLResolveInfo, options?: Options}) => T;
    node: <T = Promise<Partial<NodeNode | null>>>(args: { id: ID_Output , info?: GraphQLResolveInfo, options?: Options}) => T
}

export interface DelegateMutation {
    createLink: <T = Promise<Partial<LinkNode>>>(where: LinkCreateInput) => T;
    createUser: <T = Promise<Partial<UserNode>>>(where: UserCreateInput) => T;
    createVote: <T = Promise<Partial<VoteNode>>>(where: VoteCreateInput) => T;
    updateLink: <T = Promise<Partial<LinkNode | null>>>(args: { data: LinkUpdateInput, where: LinkWhereUniqueInput , info?: GraphQLResolveInfo, options?: Options}) => T;
    updateUser: <T = Promise<Partial<UserNode | null>>>(args: { data: UserUpdateInput, where: UserWhereUniqueInput , info?: GraphQLResolveInfo, options?: Options}) => T;
    updateVote: <T = Promise<Partial<VoteNode | null>>>(args: { data: VoteUpdateInput, where: VoteWhereUniqueInput , info?: GraphQLResolveInfo, options?: Options}) => T;
    deleteLink: <T = Promise<Partial<LinkNode | null>>>(where: LinkWhereUniqueInput) => T;
    deleteUser: <T = Promise<Partial<UserNode | null>>>(where: UserWhereUniqueInput) => T;
    deleteVote: <T = Promise<Partial<VoteNode | null>>>(where: VoteWhereUniqueInput) => T;
    upsertLink: <T = Promise<Partial<LinkNode>>>(args: { where: LinkWhereUniqueInput, create: LinkCreateInput, update: LinkUpdateInput , info?: GraphQLResolveInfo, options?: Options}) => T;
    upsertUser: <T = Promise<Partial<UserNode>>>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput , info?: GraphQLResolveInfo, options?: Options}) => T;
    upsertVote: <T = Promise<Partial<VoteNode>>>(args: { where: VoteWhereUniqueInput, create: VoteCreateInput, update: VoteUpdateInput , info?: GraphQLResolveInfo, options?: Options}) => T;
    updateManyLinks: <T = Promise<Partial<BatchPayloadNode>>>(args: { data: LinkUpdateInput, where?: LinkWhereInput , info?: GraphQLResolveInfo, options?: Options}) => T;
    updateManyUsers: <T = Promise<Partial<BatchPayloadNode>>>(args: { data: UserUpdateInput, where?: UserWhereInput , info?: GraphQLResolveInfo, options?: Options}) => T;
    updateManyVotes: <T = Promise<Partial<BatchPayloadNode>>>(args: { data: VoteUpdateInput, where?: VoteWhereInput , info?: GraphQLResolveInfo, options?: Options}) => T;
    deleteManyLinks: <T = Promise<Partial<BatchPayloadNode>>>(where?: LinkWhereInput) => T;
    deleteManyUsers: <T = Promise<Partial<BatchPayloadNode>>>(where?: UserWhereInput) => T;
    deleteManyVotes: <T = Promise<Partial<BatchPayloadNode>>>(where?: VoteWhereInput) => T
}

export interface BindingConstructor<T> {
  new(options?: BasePrismaOptions): T
}

/**
 * Types
*/

export type LinkOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'description_ASC' |
  'description_DESC' |
  'url_ASC' |
  'url_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type VoteOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface LinkCreateManyWithoutPostedByInput {
  create?: LinkCreateWithoutPostedByInput[] | LinkCreateWithoutPostedByInput
  connect?: LinkWhereUniqueInput[] | LinkWhereUniqueInput
}

export interface LinkWhereInput {
  AND?: LinkWhereInput[] | LinkWhereInput
  OR?: LinkWhereInput[] | LinkWhereInput
  NOT?: LinkWhereInput[] | LinkWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
  postedBy?: UserWhereInput
  votes_every?: VoteWhereInput
  votes_some?: VoteWhereInput
  votes_none?: VoteWhereInput
}

export interface VoteCreateInput {
  link: LinkCreateOneWithoutVotesInput
  user: UserCreateOneWithoutVotesInput
}

export interface VoteWhereInput {
  AND?: VoteWhereInput[] | VoteWhereInput
  OR?: VoteWhereInput[] | VoteWhereInput
  NOT?: VoteWhereInput[] | VoteWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  link?: LinkWhereInput
  user?: UserWhereInput
}

export interface VoteCreateManyWithoutUserInput {
  create?: VoteCreateWithoutUserInput[] | VoteCreateWithoutUserInput
  connect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput
}

export interface UserUpsertWithoutLinksInput {
  update: UserUpdateWithoutLinksDataInput
  create: UserCreateWithoutLinksInput
}

export interface VoteCreateWithoutUserInput {
  link: LinkCreateOneWithoutVotesInput
}

export interface LinkUpdateInput {
  description?: String
  url?: String
  postedBy?: UserUpdateOneWithoutLinksInput
  votes?: VoteUpdateManyWithoutLinkInput
}

export interface LinkCreateOneWithoutVotesInput {
  create?: LinkCreateWithoutVotesInput
  connect?: LinkWhereUniqueInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  links_every?: LinkWhereInput
  links_some?: LinkWhereInput
  links_none?: LinkWhereInput
  votes_every?: VoteWhereInput
  votes_some?: VoteWhereInput
  votes_none?: VoteWhereInput
}

export interface LinkCreateWithoutVotesInput {
  description: String
  url: String
  postedBy?: UserCreateOneWithoutLinksInput
}

export interface LinkSubscriptionWhereInput {
  AND?: LinkSubscriptionWhereInput[] | LinkSubscriptionWhereInput
  OR?: LinkSubscriptionWhereInput[] | LinkSubscriptionWhereInput
  NOT?: LinkSubscriptionWhereInput[] | LinkSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LinkWhereInput
}

export interface VoteCreateManyWithoutLinkInput {
  create?: VoteCreateWithoutLinkInput[] | VoteCreateWithoutLinkInput
  connect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface VoteCreateWithoutLinkInput {
  user: UserCreateOneWithoutVotesInput
}

export interface VoteUpdateInput {
  link?: LinkUpdateOneWithoutVotesInput
  user?: UserUpdateOneWithoutVotesInput
}

export interface UserCreateOneWithoutVotesInput {
  create?: UserCreateWithoutVotesInput
  connect?: UserWhereUniqueInput
}

export interface VoteUpsertWithWhereUniqueWithoutLinkInput {
  where: VoteWhereUniqueInput
  update: VoteUpdateWithoutLinkDataInput
  create: VoteCreateWithoutLinkInput
}

export interface UserCreateWithoutVotesInput {
  name: String
  email: String
  password: String
  links?: LinkCreateManyWithoutPostedByInput
}

export interface LinkUpsertWithWhereUniqueWithoutPostedByInput {
  where: LinkWhereUniqueInput
  update: LinkUpdateWithoutPostedByDataInput
  create: LinkCreateWithoutPostedByInput
}

export interface VoteUpdateWithWhereUniqueWithoutLinkInput {
  where: VoteWhereUniqueInput
  data: VoteUpdateWithoutLinkDataInput
}

export interface LinkUpdateWithWhereUniqueWithoutPostedByInput {
  where: LinkWhereUniqueInput
  data: LinkUpdateWithoutPostedByDataInput
}

export interface LinkCreateWithoutPostedByInput {
  description: String
  url: String
  votes?: VoteCreateManyWithoutLinkInput
}

export interface UserUpdateWithoutVotesDataInput {
  name?: String
  email?: String
  password?: String
  links?: LinkUpdateManyWithoutPostedByInput
}

export interface UserCreateInput {
  name: String
  email: String
  password: String
  links?: LinkCreateManyWithoutPostedByInput
  votes?: VoteCreateManyWithoutUserInput
}

export interface VoteUpdateWithoutLinkDataInput {
  user?: UserUpdateOneWithoutVotesInput
}

export interface VoteUpdateManyWithoutLinkInput {
  create?: VoteCreateWithoutLinkInput[] | VoteCreateWithoutLinkInput
  connect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput
  disconnect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput
  delete?: VoteWhereUniqueInput[] | VoteWhereUniqueInput
  update?: VoteUpdateWithWhereUniqueWithoutLinkInput[] | VoteUpdateWithWhereUniqueWithoutLinkInput
  upsert?: VoteUpsertWithWhereUniqueWithoutLinkInput[] | VoteUpsertWithWhereUniqueWithoutLinkInput
}

export interface UserCreateOneWithoutLinksInput {
  create?: UserCreateWithoutLinksInput
  connect?: UserWhereUniqueInput
}

export interface VoteSubscriptionWhereInput {
  AND?: VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput
  OR?: VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput
  NOT?: VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: VoteWhereInput
}

export interface LinkWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateOneWithoutLinksInput {
  create?: UserCreateWithoutLinksInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutLinksDataInput
  upsert?: UserUpsertWithoutLinksInput
}

export interface UserUpdateInput {
  name?: String
  email?: String
  password?: String
  links?: LinkUpdateManyWithoutPostedByInput
  votes?: VoteUpdateManyWithoutUserInput
}

export interface UserUpdateWithoutLinksDataInput {
  name?: String
  email?: String
  password?: String
  votes?: VoteUpdateManyWithoutUserInput
}

export interface LinkUpdateWithoutPostedByDataInput {
  description?: String
  url?: String
  votes?: VoteUpdateManyWithoutLinkInput
}

export interface VoteUpdateManyWithoutUserInput {
  create?: VoteCreateWithoutUserInput[] | VoteCreateWithoutUserInput
  connect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput
  disconnect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput
  delete?: VoteWhereUniqueInput[] | VoteWhereUniqueInput
  update?: VoteUpdateWithWhereUniqueWithoutUserInput[] | VoteUpdateWithWhereUniqueWithoutUserInput
  upsert?: VoteUpsertWithWhereUniqueWithoutUserInput[] | VoteUpsertWithWhereUniqueWithoutUserInput
}

export interface UserUpdateOneWithoutVotesInput {
  create?: UserCreateWithoutVotesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutVotesDataInput
  upsert?: UserUpsertWithoutVotesInput
}

export interface VoteUpdateWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput
  data: VoteUpdateWithoutUserDataInput
}

export interface UserCreateWithoutLinksInput {
  name: String
  email: String
  password: String
  votes?: VoteCreateManyWithoutUserInput
}

export interface VoteUpdateWithoutUserDataInput {
  link?: LinkUpdateOneWithoutVotesInput
}

export interface VoteWhereUniqueInput {
  id?: ID_Input
}

export interface VoteUpsertWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput
  update: VoteUpdateWithoutUserDataInput
  create: VoteCreateWithoutUserInput
}

export interface LinkUpsertWithoutVotesInput {
  update: LinkUpdateWithoutVotesDataInput
  create: LinkCreateWithoutVotesInput
}

export interface LinkUpdateWithoutVotesDataInput {
  description?: String
  url?: String
  postedBy?: UserUpdateOneWithoutLinksInput
}

export interface LinkUpdateOneWithoutVotesInput {
  create?: LinkCreateWithoutVotesInput
  connect?: LinkWhereUniqueInput
  delete?: Boolean
  update?: LinkUpdateWithoutVotesDataInput
  upsert?: LinkUpsertWithoutVotesInput
}

export interface UserUpsertWithoutVotesInput {
  update: UserUpdateWithoutVotesDataInput
  create: UserCreateWithoutVotesInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface LinkCreateInput {
  description: String
  url: String
  postedBy?: UserCreateOneWithoutLinksInput
  votes?: VoteCreateManyWithoutLinkInput
}

export interface LinkUpdateManyWithoutPostedByInput {
  create?: LinkCreateWithoutPostedByInput[] | LinkCreateWithoutPostedByInput
  connect?: LinkWhereUniqueInput[] | LinkWhereUniqueInput
  disconnect?: LinkWhereUniqueInput[] | LinkWhereUniqueInput
  delete?: LinkWhereUniqueInput[] | LinkWhereUniqueInput
  update?: LinkUpdateWithWhereUniqueWithoutPostedByInput[] | LinkUpdateWithWhereUniqueWithoutPostedByInput
  upsert?: LinkUpsertWithWhereUniqueWithoutPostedByInput[] | LinkUpsertWithWhereUniqueWithoutPostedByInput
}

/*
 * An object with an ID

 */
export interface NodeNode {
  id: ID_Output
}

export interface VotePreviousValuesNode {
  id: ID_Output
}

export interface VotePreviousValues extends Promise<VotePreviousValuesNode> {
  id: () => Promise<ID_Output>
}

/*
 * A connection to a list of items.

 */
export interface LinkConnectionNode {

}

/*
 * A connection to a list of items.

 */
export interface LinkConnection extends Promise<LinkConnectionNode> {
  pageInfo: () => PageInfo
  edges: () => Promise<Array<LinkEdgeNode>>
  aggregate: () => AggregateLink
}

export interface LinkNode extends Node {
  id: ID_Output
  createdAt: DateTime
  description: String
  url: String
}

export interface Link extends Promise<LinkNode>, Node {
  id: () => Promise<ID_Output>
  createdAt: () => Promise<DateTime>
  description: () => Promise<String>
  url: () => Promise<String>
  postedBy: (args?: { where?: UserWhereInput }) => User
  votes: (args?: { where?: VoteWhereInput, orderBy?: VoteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }) => Promise<Array<VoteNode>>
}

export interface BatchPayloadNode {
  count: Long
}

export interface BatchPayload extends Promise<BatchPayloadNode> {
  count: () => Promise<Long>
}

export interface AggregateVoteNode {
  count: Int
}

export interface AggregateVote extends Promise<AggregateVoteNode> {
  count: () => Promise<Int>
}

export interface UserNode extends Node {
  id: ID_Output
  name: String
  email: String
  password: String
}

export interface User extends Promise<UserNode>, Node {
  id: () => Promise<ID_Output>
  name: () => Promise<String>
  email: () => Promise<String>
  password: () => Promise<String>
  links: (args?: { where?: LinkWhereInput, orderBy?: LinkOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }) => Promise<Array<LinkNode>>
  votes: (args?: { where?: VoteWhereInput, orderBy?: VoteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }) => Promise<Array<VoteNode>>
}

export interface VoteNode extends Node {
  id: ID_Output
}

export interface Vote extends Promise<VoteNode>, Node {
  id: () => Promise<ID_Output>
  link: (args?: { where?: LinkWhereInput }) => Link
  user: (args?: { where?: UserWhereInput }) => User
}

/*
 * An edge in a connection.

 */
export interface VoteEdgeNode {
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface VoteEdge extends Promise<VoteEdgeNode> {
  node: () => Vote
  cursor: () => Promise<String>
}

/*
 * A connection to a list of items.

 */
export interface VoteConnectionNode {

}

/*
 * A connection to a list of items.

 */
export interface VoteConnection extends Promise<VoteConnectionNode> {
  pageInfo: () => PageInfo
  edges: () => Promise<Array<VoteEdgeNode>>
  aggregate: () => AggregateVote
}

export interface AggregateUserNode {
  count: Int
}

export interface AggregateUser extends Promise<AggregateUserNode> {
  count: () => Promise<Int>
}

/*
 * A connection to a list of items.

 */
export interface UserConnectionNode {

}

/*
 * A connection to a list of items.

 */
export interface UserConnection extends Promise<UserConnectionNode> {
  pageInfo: () => PageInfo
  edges: () => Promise<Array<UserEdgeNode>>
  aggregate: () => AggregateUser
}

/*
 * An edge in a connection.

 */
export interface LinkEdgeNode {
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface LinkEdge extends Promise<LinkEdgeNode> {
  node: () => Link
  cursor: () => Promise<String>
}

export interface LinkPreviousValuesNode {
  id: ID_Output
  createdAt: DateTime
  description: String
  url: String
}

export interface LinkPreviousValues extends Promise<LinkPreviousValuesNode> {
  id: () => Promise<ID_Output>
  createdAt: () => Promise<DateTime>
  description: () => Promise<String>
  url: () => Promise<String>
}

export interface LinkSubscriptionPayloadNode {
  mutation: MutationType
  updatedFields?: String[]
}

export interface LinkSubscriptionPayload extends Promise<LinkSubscriptionPayloadNode> {
  mutation: () => Promise<MutationType>
  node: () => Link
  updatedFields: () => Promise<String[]>
  previousValues: () => LinkPreviousValues
}

export interface UserSubscriptionPayloadNode {
  mutation: MutationType
  updatedFields?: String[]
}

export interface UserSubscriptionPayload extends Promise<UserSubscriptionPayloadNode> {
  mutation: () => Promise<MutationType>
  node: () => User
  updatedFields: () => Promise<String[]>
  previousValues: () => UserPreviousValues
}

export interface UserPreviousValuesNode {
  id: ID_Output
  name: String
  email: String
  password: String
}

export interface UserPreviousValues extends Promise<UserPreviousValuesNode> {
  id: () => Promise<ID_Output>
  name: () => Promise<String>
  email: () => Promise<String>
  password: () => Promise<String>
}

export interface VoteSubscriptionPayloadNode {
  mutation: MutationType
  updatedFields?: String[]
}

export interface VoteSubscriptionPayload extends Promise<VoteSubscriptionPayloadNode> {
  mutation: () => Promise<MutationType>
  node: () => Vote
  updatedFields: () => Promise<String[]>
  previousValues: () => VotePreviousValues
}

export interface AggregateLinkNode {
  count: Int
}

export interface AggregateLink extends Promise<AggregateLinkNode> {
  count: () => Promise<Int>
}

/*
 * An edge in a connection.

 */
export interface UserEdgeNode {
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface UserEdge extends Promise<UserEdgeNode> {
  node: () => User
  cursor: () => Promise<String>
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfoNode {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo extends Promise<PageInfoNode> {
  hasNextPage: () => Promise<Boolean>
  hasPreviousPage: () => Promise<Boolean>
  startCursor: () => Promise<String>
  endCursor: () => Promise<String>
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = string

/**
 * Type Defs
*/

const typeDefs = `type AggregateLink {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVote {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

type Link implements Node {
  id: ID!
  createdAt: DateTime!
  description: String!
  url: String!
  postedBy(where: UserWhereInput): User
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
}

"""A connection to a list of items."""
type LinkConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LinkEdge]!
  aggregate: AggregateLink!
}

input LinkCreateInput {
  description: String!
  url: String!
  postedBy: UserCreateOneWithoutLinksInput
  votes: VoteCreateManyWithoutLinkInput
}

input LinkCreateManyWithoutPostedByInput {
  create: [LinkCreateWithoutPostedByInput!]
  connect: [LinkWhereUniqueInput!]
}

input LinkCreateOneWithoutVotesInput {
  create: LinkCreateWithoutVotesInput
  connect: LinkWhereUniqueInput
}

input LinkCreateWithoutPostedByInput {
  description: String!
  url: String!
  votes: VoteCreateManyWithoutLinkInput
}

input LinkCreateWithoutVotesInput {
  description: String!
  url: String!
  postedBy: UserCreateOneWithoutLinksInput
}

"""An edge in a connection."""
type LinkEdge {
  """The item at the end of the edge."""
  node: Link!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LinkOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  description_ASC
  description_DESC
  url_ASC
  url_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LinkPreviousValues {
  id: ID!
  createdAt: DateTime!
  description: String!
  url: String!
}

type LinkSubscriptionPayload {
  mutation: MutationType!
  node: Link
  updatedFields: [String!]
  previousValues: LinkPreviousValues
}

input LinkSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LinkSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LinkSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LinkSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LinkWhereInput
}

input LinkUpdateInput {
  description: String
  url: String
  postedBy: UserUpdateOneWithoutLinksInput
  votes: VoteUpdateManyWithoutLinkInput
}

input LinkUpdateManyWithoutPostedByInput {
  create: [LinkCreateWithoutPostedByInput!]
  connect: [LinkWhereUniqueInput!]
  disconnect: [LinkWhereUniqueInput!]
  delete: [LinkWhereUniqueInput!]
  update: [LinkUpdateWithWhereUniqueWithoutPostedByInput!]
  upsert: [LinkUpsertWithWhereUniqueWithoutPostedByInput!]
}

input LinkUpdateOneWithoutVotesInput {
  create: LinkCreateWithoutVotesInput
  connect: LinkWhereUniqueInput
  delete: Boolean
  update: LinkUpdateWithoutVotesDataInput
  upsert: LinkUpsertWithoutVotesInput
}

input LinkUpdateWithoutPostedByDataInput {
  description: String
  url: String
  votes: VoteUpdateManyWithoutLinkInput
}

input LinkUpdateWithoutVotesDataInput {
  description: String
  url: String
  postedBy: UserUpdateOneWithoutLinksInput
}

input LinkUpdateWithWhereUniqueWithoutPostedByInput {
  where: LinkWhereUniqueInput!
  data: LinkUpdateWithoutPostedByDataInput!
}

input LinkUpsertWithoutVotesInput {
  update: LinkUpdateWithoutVotesDataInput!
  create: LinkCreateWithoutVotesInput!
}

input LinkUpsertWithWhereUniqueWithoutPostedByInput {
  where: LinkWhereUniqueInput!
  update: LinkUpdateWithoutPostedByDataInput!
  create: LinkCreateWithoutPostedByInput!
}

input LinkWhereInput {
  """Logical AND on all given filters."""
  AND: [LinkWhereInput!]

  """Logical OR on all given filters."""
  OR: [LinkWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LinkWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  postedBy: UserWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
}

input LinkWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createLink(data: LinkCreateInput!): Link!
  createUser(data: UserCreateInput!): User!
  createVote(data: VoteCreateInput!): Vote!
  updateLink(data: LinkUpdateInput!, where: LinkWhereUniqueInput!): Link
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateVote(data: VoteUpdateInput!, where: VoteWhereUniqueInput!): Vote
  deleteLink(where: LinkWhereUniqueInput!): Link
  deleteUser(where: UserWhereUniqueInput!): User
  deleteVote(where: VoteWhereUniqueInput!): Vote
  upsertLink(where: LinkWhereUniqueInput!, create: LinkCreateInput!, update: LinkUpdateInput!): Link!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertVote(where: VoteWhereUniqueInput!, create: VoteCreateInput!, update: VoteUpdateInput!): Vote!
  updateManyLinks(data: LinkUpdateInput!, where: LinkWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyVotes(data: VoteUpdateInput!, where: VoteWhereInput): BatchPayload!
  deleteManyLinks(where: LinkWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyVotes(where: VoteWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  links(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Link]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote]!
  link(where: LinkWhereUniqueInput!): Link
  user(where: UserWhereUniqueInput!): User
  vote(where: VoteWhereUniqueInput!): Vote
  linksConnection(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LinkConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  votesConnection(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VoteConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  link(where: LinkSubscriptionWhereInput): LinkSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  vote(where: VoteSubscriptionWhereInput): VoteSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  email: String!
  password: String!
  links(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Link!]
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  links: LinkCreateManyWithoutPostedByInput
  votes: VoteCreateManyWithoutUserInput
}

input UserCreateOneWithoutLinksInput {
  create: UserCreateWithoutLinksInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutLinksInput {
  name: String!
  email: String!
  password: String!
  votes: VoteCreateManyWithoutUserInput
}

input UserCreateWithoutVotesInput {
  name: String!
  email: String!
  password: String!
  links: LinkCreateManyWithoutPostedByInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  links: LinkUpdateManyWithoutPostedByInput
  votes: VoteUpdateManyWithoutUserInput
}

input UserUpdateOneWithoutLinksInput {
  create: UserCreateWithoutLinksInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutLinksDataInput
  upsert: UserUpsertWithoutLinksInput
}

input UserUpdateOneWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutVotesDataInput
  upsert: UserUpsertWithoutVotesInput
}

input UserUpdateWithoutLinksDataInput {
  name: String
  email: String
  password: String
  votes: VoteUpdateManyWithoutUserInput
}

input UserUpdateWithoutVotesDataInput {
  name: String
  email: String
  password: String
  links: LinkUpdateManyWithoutPostedByInput
}

input UserUpsertWithoutLinksInput {
  update: UserUpdateWithoutLinksDataInput!
  create: UserCreateWithoutLinksInput!
}

input UserUpsertWithoutVotesInput {
  update: UserUpdateWithoutVotesDataInput!
  create: UserCreateWithoutVotesInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  links_every: LinkWhereInput
  links_some: LinkWhereInput
  links_none: LinkWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Vote implements Node {
  id: ID!
  link(where: LinkWhereInput): Link!
  user(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type VoteConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [VoteEdge]!
  aggregate: AggregateVote!
}

input VoteCreateInput {
  link: LinkCreateOneWithoutVotesInput!
  user: UserCreateOneWithoutVotesInput!
}

input VoteCreateManyWithoutLinkInput {
  create: [VoteCreateWithoutLinkInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateManyWithoutUserInput {
  create: [VoteCreateWithoutUserInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateWithoutLinkInput {
  user: UserCreateOneWithoutVotesInput!
}

input VoteCreateWithoutUserInput {
  link: LinkCreateOneWithoutVotesInput!
}

"""An edge in a connection."""
type VoteEdge {
  """The item at the end of the edge."""
  node: Vote!

  """A cursor for use in pagination."""
  cursor: String!
}

enum VoteOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type VotePreviousValues {
  id: ID!
}

type VoteSubscriptionPayload {
  mutation: MutationType!
  node: Vote
  updatedFields: [String!]
  previousValues: VotePreviousValues
}

input VoteSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [VoteSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [VoteSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [VoteSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: VoteWhereInput
}

input VoteUpdateInput {
  link: LinkUpdateOneWithoutVotesInput
  user: UserUpdateOneWithoutVotesInput
}

input VoteUpdateManyWithoutLinkInput {
  create: [VoteCreateWithoutLinkInput!]
  connect: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  delete: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutLinkInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutLinkInput!]
}

input VoteUpdateManyWithoutUserInput {
  create: [VoteCreateWithoutUserInput!]
  connect: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  delete: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutUserInput!]
}

input VoteUpdateWithoutLinkDataInput {
  user: UserUpdateOneWithoutVotesInput
}

input VoteUpdateWithoutUserDataInput {
  link: LinkUpdateOneWithoutVotesInput
}

input VoteUpdateWithWhereUniqueWithoutLinkInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutLinkDataInput!
}

input VoteUpdateWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutUserDataInput!
}

input VoteUpsertWithWhereUniqueWithoutLinkInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutLinkDataInput!
  create: VoteCreateWithoutLinkInput!
}

input VoteUpsertWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutUserDataInput!
  create: VoteCreateWithoutUserInput!
}

input VoteWhereInput {
  """Logical AND on all given filters."""
  AND: [VoteWhereInput!]

  """Logical OR on all given filters."""
  OR: [VoteWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [VoteWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  link: LinkWhereInput
  user: UserWhereInput
}

input VoteWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs, endpoint: 'http://localhost:4466'})
export const prisma = new Prisma()
