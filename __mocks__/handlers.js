import { rest } from 'msw'
import {MOCK_API_RESULTS} from './api_response'

export const handlers = [
  rest.get('url', (req, res, ctx) => {
    return res(ctx.json(
      { MOCK_API_RESULTS }
    ))
  })
]
