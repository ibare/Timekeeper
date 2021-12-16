import * as Actions from "./action-type";

const actionBuilder = (type, payload = {}) => ({
  type,
  payload: { ...payload }
});

export const addSection = (title, est) =>
  actionBuilder(Actions.ADD_SECTION, { title, est });

export const removeSection = id =>
  actionBuilder(Actions.REMOVE_SECTION, { id });

export const tickNextTime = () => actionBuilder(Actions.TICK_NEXT_TIME);
export const startDiscuss = id => actionBuilder(Actions.START_DISCUSS, { id });
export const stopDiscuss = id => actionBuilder(Actions.STOP_DISCUSS, { id });
export const done = id => actionBuilder(Actions.DONE, { id });
export const notYet = id => actionBuilder(Actions.NOT_YET, { id });
export const removeDiscuss = id => actionBuilder(Actions.REMOVE_DISCUSS, { id });
export const loadToday = () => actionBuilder(Actions.LOAD_TODAY);
export const loadPrevDay = () => actionBuilder(Actions.LOAD_PREV_DAY);
export const loadNextDay = () => actionBuilder(Actions.LOAD_NEXT_DAY);
