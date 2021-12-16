import * as Actions from "./action-type";
import { v4 as uuidV4 } from "uuid";
import { format, addDays, parse } from 'date-fns';
import { ko } from 'date-fns/locale';

const DATE_FORMAT = 'yyyyMMdd';
const workDate = window.location.hash ? window.location.hash.substring(1) : format(new Date(), DATE_FORMAT);
const buildDate = baseDate => ({
  today: baseDate,
  todayCaption: format(parse(baseDate, DATE_FORMAT, new Date()), "MM월 dd일 eeee", { locale: ko }),
  prevDay: format(addDays(parse(baseDate, DATE_FORMAT, new Date()), -1), DATE_FORMAT),
  nextDay: format(addDays(parse(baseDate, DATE_FORMAT, new Date()), 1), DATE_FORMAT),
});

const InitializeState = {
  ...buildDate(workDate),
  sectionList: []
};

export default (state, action) => {
  if (state === undefined) {
    const saveData = localStorage.getItem(`timekeeper-${workDate}`);
        
    state = saveData ? JSON.parse(saveData) : InitializeState;
  }

  if (action.type === Actions.LOAD_TODAY || action.type === Actions.LOAD_PREV_DAY || action.type === Actions.LOAD_NEXT_DAY) {
    state.sectionList = state.sectionList.map(section => ({ ...section, isDiscuss: false }));
  }

  localStorage.setItem(`timekeeper-${state.today}`, JSON.stringify(state));

  switch (action.type) {
    case Actions.LOAD_TODAY: {
      const today = format(new Date(), DATE_FORMAT);
      const loadData = localStorage.getItem(`timekeeper-${today}`);
      if (loadData) {
        return { ...JSON.parse(loadData) };
      } else {
        return {
          ...buildDate(today),
          sectionList: []
        }        
      }
    }
    case Actions.LOAD_PREV_DAY: {
      const loadData = localStorage.getItem(`timekeeper-${state.prevDay}`);
      if (loadData) {
        return { ...JSON.parse(loadData) };
      } else {
        return {
          ...buildDate(state.prevDay),
          sectionList: []
        }        
      }
    }
    case Actions.LOAD_NEXT_DAY: {
      const loadData = localStorage.getItem(`timekeeper-${state.nextDay}`);
      if (loadData) {
        return { ...JSON.parse(loadData) };
      } else {
        return {
          ...buildDate(state.nextDay),
          sectionList: []
        }        
      }
    }
    case Actions.ADD_SECTION:
      return {
        ...state,
        sectionList: [
          ...state.sectionList,
          {
            id: uuidV4(),
            title: action.payload.title,
            est: action.payload.est,
            starttime: 0,
            runAct: 0,
            prevAct: 0,
            act: 0,
            isDiscuss: false,
            isDone: false,
          }
        ]
      };
    case Actions.REMOVE_SECTION:
      return {
        ...state,
        sectionList: [
          ...state.sectionList.filter(
            section => section.id !== action.payload.id
          )
        ]
      };
    case Actions.START_DISCUSS:
      return {
        ...state,
        sectionList: [
          ...state.sectionList
            .map(section => ({ ...section, isDiscuss: false }))
            .map(section => {
            if (section.id === action.payload.id) {
              section.isDiscuss = true;
              section.starttime = Date.now();
              section.runAct = 0;
              section.prevAct = section.act;
            }

            return section;
          })
        ]
      };
    case Actions.STOP_DISCUSS:
      return {
        ...state,
        sectionList: [
          ...state.sectionList.map(section => {
            if (section.id === action.payload.id) {
              section.isDiscuss = false;
              section.starttime = 0;
              section.runAct = 0;
            }

            return section;
          })
        ]
      };
    case Actions.DONE:
      return {
        ...state,
        sectionList: [
          ...state.sectionList.map(section => {
            if (section.id === action.payload.id) {
              section.isDiscuss = false;
              section.isDone = true;
            }

            return section;
          })
        ]
      }
    case Actions.NOT_YET:
      return {
        ...state,
        sectionList: [
          ...state.sectionList.map(section => {
            if (section.id === action.payload.id) {
              section.isDone = false;
            }

            return section;
          })
        ]
      }  
    case Actions.REMOVE_DISCUSS:
      return {
        ...state,
        sectionList: [
          ...state.sectionList.map(section => {
            
            if (section.id === action.payload.id) {
              section.act = 0;
            }

            return section;
          })
        ]
      };
    case Actions.TICK_NEXT_TIME:
      return {
        ...state,
        sectionList: [
          ...state.sectionList.map(section => {
            if (section.isDiscuss) { 
              section.act = section.prevAct + Math.floor((Date.now() - section.starttime) / 1000);
            }

            return section;
          })
        ]
      };
    default:
      return { ...state };
  }
};
