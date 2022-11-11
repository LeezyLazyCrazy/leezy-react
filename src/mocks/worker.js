import { setupWorker } from 'msw';
import { handlers } from './handlers';
import { equipmentHandlers } from './equipmentHandlers';

export const worker = setupWorker(...handlers, ...equipmentHandlers);
