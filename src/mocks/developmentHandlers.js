import { rest } from 'msw';

const informationData = [];

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

export const developmentHandlers = [
  // table 1
  rest.get('/api/development-history', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(informationResult)),
  ),
  // table 2
  rest.get('/api/development-management', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(informationResult)),
  ),
  // table 3
  rest.get('/api/development-needs', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(informationResult)),
  ),
  // table 4
  rest.get('/api/development-issue', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(informationResult)),
  ),
  // table 5
  rest.get('/api/development-requirement', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(informationResult)),
  ),
  // table 6
  rest.get('/api/development-personal', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(informationResult)),
  ),
  // table 7
  rest.get('/api/development-test', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(informationResult)),
  ),
  // table 8
  rest.get('/api/development-evaluate', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(informationResult)),
  ),
  // table 9
  rest.get('/api/development-inspect', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(informationResult)),
  ),
];
