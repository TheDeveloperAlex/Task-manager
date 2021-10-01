import { createReducer } from '@reduxjs/toolkit';
import authOperations from '../auth/auth-operations';
import projectOperations from '../projects/projects-operations';
import {
  addSprint,
  changeSprintsTitle,
  deleteSprint,
  getProjectsSprints,
} from '../sprints/sprints-operations';
import { resetErrorAction } from './error-action';

const setError = (_, { payload }) => payload;
const resetError = (_, { payload }) => null;

export const error = createReducer(null, {
  [resetErrorAction]: resetError,
  [authOperations.register.rejected]: setError,
  [authOperations.logIn.rejected]: setError,
  [projectOperations.postProject.rejected]: setError,
  [projectOperations.getProjects.rejected]: setError,
  [addSprint.rejected]: setError,
  [getProjectsSprints.rejected]: setError,
  [changeSprintsTitle.rejected]: setError,
  [deleteSprint.rejected]: setError,
  [addSprint.rejected]: setError,
  [getProjectsSprints.rejected]: setError,
  [changeSprintsTitle.rejected]: setError,
  [deleteSprint.rejected]: setError,
});
