export default () => ({
  // system status and user status info
  user_mode: 1, // This shows what is actually open S,V, or R.
  // TODO replace functionality of user_mode by the isSurveyActive, etc.
  // systemStatus section:
  isSurveyActive: false,
  isVoteActive: false,
  isRatifyActive: false,
  // userStatus section:
  surveyDone: false,
  voteDone: false,
  ratifyDone: false,
  SVRSInfo: {
    SVRSData: []
  },
  SystemInfo: {
    SystemData: []
  },
  ParamInfo: {
    ParamData: [
      // { key: 1, category: 1, bycategory: 0 },
      // { key: 2, category: 2, bycategory: 0 },
      // { key: 3, category: 3, bycategory: 0 }
    ]
  },
  // Retrieved and converted from the system table:
  init_time_seconds: 0, // Initial time point converted from 'init' of system table.
  iteration: 0 // Current iteration number counted from blockchain data.
})
