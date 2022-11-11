import { rest } from 'msw';

const informationData = [
  {
    // id: "달러",
    // DevelopTaskId: 100,
    // approvalName: 4,
    // approvalDate: 10,
    // equipmentCertifyId: 5,
    // materialId: 10,
    // materialCertifyId: "2",
    // approvalId: "2020-01-03",
    // useResultEffectDate: "19-000223",
    // manufactureEffectDate: "달러",
    // destroyResultEffectDate: 100,
    // equipmentDestroyDate: 4,
    // manageAgency: 10,
    // operateAgency: 5,
    // operateDepartment: 10,
    // operatePosition: "2",
    // operateDate: "2020-01-03",
    // lastStatusGroup: "19-000223",
    // lastStatusDetail: "달러",
    // manageLevel: 100,
    // communicateLevel: 4,
    // encryptKey: 10,
    // programKey: 5,
    // managePersonalIdMain: 10,
    // managePersonalIdSub: "2",
    // lastCheckDataTime: "2020-01-03",
    // lastHandoverDateTime: "19-000223",
    // recordDateTime: 10,
    // recordPersonalId: "2",
    // remarks: "2020-01-03",
  },
];

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

export const equipmentHandlers = [
  // table 1
  rest.get('/api/equipment-information', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(informationResult)),
  ),

  // table 2
  rest.get('/api/equipment-management', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(informationResult)),
  ),
  // table 3
  rest.get('/api/equipment-manufacture', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(informationResult)),
  ),
  // table 4
  rest.get('/api/equipment-status-history', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(informationResult)),
  ),
];
