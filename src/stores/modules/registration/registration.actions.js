import { createAction } from 'redux-actions';
import * as TYPE from './registration.types';

export const submitRegistrationEpic = createAction(
  TYPE.SUBMIT_REGISTRATION_EPIC,
);

export const submitRegistrationSucceeded = createAction(
  TYPE.SUBMIT_REGISTRATION_SUCCEEDED,
);

export const submitRegistrationFailed = createAction(
  TYPE.SUBMIT_REGISTRATION_FAILED,
);

export const submitRegistrationCancel = createAction(
  TYPE.SUBMIT_REGISTRATION_CANCEL,
);

export const submitRegistrationReading = createAction(
  TYPE.SUBMIT_REGISTRATION_READING,
);