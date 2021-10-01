import {  createAction } from "@reduxjs/toolkit";

export const resetErrorAction = createAction<string | "error/resetError">("error/resetError");
