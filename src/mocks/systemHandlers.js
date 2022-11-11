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

export const systemHandlers = [
  // table 1
  rest.get('/api/QR-equip-management', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(informationResult)),
  ),
  // table 2
  rest.get('/api/QRcode-inout-history', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(informationResult)),
  ),
  // table 3
  rest.get('/api/personal-management', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(informationResult)),
  ),
];
