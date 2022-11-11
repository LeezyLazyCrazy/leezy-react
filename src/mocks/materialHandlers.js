import { rest } from 'msw';

const informationData = [{}];

const informationResult = {
  result: true,
  data: {
    contents: informationData,
    pagination: {
      page: 1,
      totalCount: 3,
    },
  },
};

export const materialHandlers = [
  // table 1
  rest.get('/api/material-certification', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(informationResult)),
  ),
  // table 2
  rest.get('/api/material-certify-list', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(informationResult)),
  ),
  // table 3
  rest.get('/api/material-management', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(informationResult)),
  ),
];
