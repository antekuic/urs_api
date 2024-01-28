// POST
export const createLectureSchema = {
  tags: ['lectures'],
  description: 'Create lecture',
  body: {
    type: 'object',
    required: ['name', 'start_date', 'class_id'],
    properties: {
      name: { type: 'string' },
      start_date: { type: 'string', format: 'date-time'},
      class_id: {type: 'string'}
    }
  },
  headers: {
    $ref: 'authorizedSchema#'
  },
  response: {
    200: { 
        $ref: 'lectureSchema#'
    },
    404: { $ref: 'messageResponseSchema#' },
  }
};


// PUT
// POST
export const closeLectureScheme = {
  tags: ['lectures'],
  description: 'Close lecture',
  body: {
    type: 'object',
    required: ['id', 'end_date', 'class_id'],
    properties: {
      id: { type: 'number' },
      end_date: { type: 'string', format: 'date-time'},
      class_id: {type: 'string'}
    }
  },
  headers: {
    $ref: 'authorizedSchema#'
  },
  response: {
    200: { 
        $ref: 'lectureSchema#'
    },
    404: { $ref: 'messageResponseSchema#' },
  }
};
