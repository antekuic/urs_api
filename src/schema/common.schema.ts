/*
* Simple global schemas that are going to be used across all of our app.
*
* See More: https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/
*/

// Just a single response object including a message
export const messageSchema = {
  $id: 'messageResponseSchema',
  type: 'object',
  properties: {
    message: { type: 'string' },
  },
};

// Used to validate/match URLS that include an ':id' param
export const paramUUIDScheme = {
  $id: 'paramUUIDScheme',
  type: 'object',
  properties: {
    id: { type: 'string', pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$' },
  },
  required: ['id'],
};

export const tokenSchema = {
   $id: 'tokenResponseScheme',
   type: 'object',
   properties: {
    token: { type: 'string' },
    type:  { type: 'string' }
  }
}

export const authorizedSchema = {
  $id: 'authorizedSchema',
  type: 'object',
  properties: {
    'x-auth-token': {type: 'string'}
  },
  required: ['x-auth-token']
}