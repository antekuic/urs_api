// POST
export const loginSchema = {
  tags: ['users'],
  description: 'Login to user',
  body: {
    type: 'object',
    required: ['password', 'email'],
    properties: {
      email: { type: 'string' },
      password: { type: 'string' }
    }
  },
  response: {
    200: { 
      token: {
        $ref: 'tokenResponseScheme#'
      },
      user: {
        $ref: 'userSchema#'
      } 
    },
    404: { $ref: 'messageResponseSchema#' },
  }
};

