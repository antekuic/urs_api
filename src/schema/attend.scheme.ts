// POST
export const attendCreateScheme = {
  tags: ['attends'],
  description: 'Create attend',
  body: {
    type: 'object',
    required: ['lecture_id', 'hash'],
    properties: {
      lecture_id: {type: 'number' },
      hash: { type: 'string' }
    }
  },
  headers: {
      $ref: 'authorizedSchema#'
  },
  params: {
    $ref: 'paramUUIDScheme#'
  },
  response: {
    200: { 
        $ref: 'attendSchema#'
    },
    404: { $ref: 'messageResponseSchema#' },
  }
};

