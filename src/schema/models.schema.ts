/*
* Some global schemas, representing our stuff from the Database.
* These will be used mostly when serializing data in our responses.
*
* See More: https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/
*/

export const userSchema = {
  $id: 'userSchema',
  type: 'object',
  // required: ['name'],
  nullable: true,
  properties: {
    id: { type: 'number' },
    name: { type: 'string' },
    surname: { type: 'string' },
    role: { type: 'string' },
    createdAt: { type: 'string', format: 'date-time' },
    updatedAt: { type: 'string', format: 'date-time' },
  },
};

export const lectureSchema = {
  $id: 'lectureSchema',
  type: 'object',
  nullable: true,
  properties: {
    id: {type: 'number'},
    name: {type: 'string'},
    start_date: {type: 'string', format: 'date-time'},
    end_date: {type: ['string', 'null'], format: 'date-time'},
    user_id: {type: 'number'},
    class_id: {type: 'string'},
    createdAt: {type: 'string', format: 'date-time'},
    updatedAt: {type: 'string', format: 'date-time'},
    salt: {type: 'string'}
  }
}

export const attendSchema = {
  $id: 'attendSchema',
  type: 'object',
  nullable: true,
  properties: {
    id: {type: 'number'},
    user_id: {type: 'number'},
    lecture_id: {type: 'number'},
    createdAt: {type: 'string', format: 'date-time'},
  }
}