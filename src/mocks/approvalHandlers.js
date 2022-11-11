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

export const approvalHandlers = [
  // table 1
  rest.get('/api/equipment-approval-history', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(informationResult)),
  ),
];
