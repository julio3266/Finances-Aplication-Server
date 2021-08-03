import { buildSchemaSync } from 'type-graphql';
import User from './User';
import UserController from '../controllers/UserController';
import Auth from './Auth';
import SessionController from '../controllers/SessionController';

import AuthenticationAssurance from "../middlewares/AuthenticationAssurance";

import Node from "./Node";

const schema = buildSchemaSync({
  resolvers: [User, UserController, Auth, SessionController, Node],
  authChecker: AuthenticationAssurance
})

export default schema;
