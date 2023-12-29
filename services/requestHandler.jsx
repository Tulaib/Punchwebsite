import { get, post, put } from './HttpProvider';
import featureConstants from './features-constants';
import axios from 'axios';

const SERVICE_URLS = {
  // service URL's (API End-Points)

  // Auth Apis End Points
  login: 'login',
  Islogin: 'Islogin',
  getroles: 'getRoles',
  modules: 'ModulesByUserAppId',
  formpermissions: 'FormsByUserAppModuleId',
  otp: 'send-otp-mail',
  otpverify: 'check-otp-mail',
  logout: 'logout',
  resetpassword: 'reset_password',
  update_password: 'update_password',
  changePassword: 'change_password',
  getuser: 'getUser',

  // Patient Module
  getpatient: 'GetPatient',
  getpatientbyId: 'EditPatient',
  editpatient: 'UpdatePatient',
  createpatient: 'CreatePatient',
  resetotpTokenCerification: 'reset_otp_token_cerification',
  editPatientStatus: 'EditPatientStatus',
  Getpatientbyprovider: 'Getpatientbyprovider',
  checkuniqueemail: 'checkuniqueemail',
  GetPatientSchedule: 'GetPatientSchedule',
  //insuranceById

  //insruance Type
  CreateInsurancetype: 'insurance/CreateInsurancetype',
  GetInsurancetype: 'insurance/GetInsurancetype',
  UpdateInsurancetype: 'insurance/UpdateInsurancetype',
  DeleteInsurancetype: 'insurance/DeleteInsurancetype',
  GetInactiveInsurancetype: 'insurance/GetInactiveInsurancetype',

  //insruance Payer
  CreateInsurancePayers: 'insurance/CreateInsurancePayers',
  GetInsurancePayers: 'insurance/GetInsurancePayers',
  GetInactiveInsurancePayers: 'insurance/GetInactiveInsurancePayers',
  UpdateInsurancePayers: 'insurance/UpdateInsurancePayers',
  DeleteInsurancePayers: 'insurance/DeleteInsurancePayers',

  //insruance
  GetInsurance: 'insurance/GetInsurance',
  CreateInsurance: 'insurance/CreateInsurance',
  UpdateInsurance: 'insurance/UpdateInsurance',
  DeleteInsurance: 'insurance/DeleteInsurance',
  GetInactiveInsurance: 'insurance/GetInactiveInsurance',
  GetInsurancetypebyid: 'insurance/GetInsurancetypebyid',
  GetInsurancePayerById: 'insurance/GetInsurancePayerById',
  GetInsuranceById: 'insurance/GetInsuranceById',
  GetInsurancetypeFilter: 'insurance/GetInsurancetypebyid',
  GetInsurancePayersFilter: 'insurance/GetInsurancePayersid',
  GetInsuranceFilter: 'insurance/GetInsuranceid',

  // patientActive: 'ActivePatients',
  // patientInActive: 'InactivePatients',

  // Provider Module
  getprovider: 'GetProvider',
  getProviderByLocation: 'locationsProvider',
  GetProviderById: 'GetProviderById',
  // Location Module
  GetLocation: 'GetLocation',
  GetLocationById: 'GetLocationById',
  CreateLocation: 'CreateLocation',
  UpdateLocation: 'UpdateLocation',
  DeleteLocation: 'inactiveLocation',

  // Practice Module
  GetPractice: 'GetPractice',
  CreatePractice: 'CreatePractice',
  GetPracticeByID: 'GetPracticeById',
  UpdatePractice: 'UpdatePractice',
  DeletePractice: 'inactivePractice',

  //Provider Type
  GetProviderType: 'GetProviderType',
  CreateProviderType: 'CreateProviderType',
  UpdateProviderType: 'UpdateProviderType',
  DeleteProviderType: 'InactiveProviderType',

  //Provider Type
  GetProvider: 'GetProvider',
  CreateProvider: 'CreateProvider',
  UpdateProvider: 'UpdateProvider',
  DeleteProvider: 'inactive_provider',

  // Search Insurance Module
  SearchInsurance: 'SearchInsurance',

  // Search filterpatientbyprovider Module
  getFilteredPatientByProvider: 'filterpatientbyprovider',

  //Permission module
  getallapp: 'get_apps',
  getallusers: 'getUsers',
  createApp: 'create_app',
  create_role: 'create_role',
  approle: 'app_roles',
  getappusers: 'get_app_users',
  getroleappuser: 'app_role_users',
  assignUserToRoleApp: 'assignUserToRoleApp',
  assignAppToRole: 'assignRoleToApp',
  createnewmodule: 'create_module',
  createnewform: 'create_form',
  get_app_role_module_forms: 'get_app_role_module_forms',
  assign_app_role_modules_forms: 'assign_app_role_modules_forms',
  assign_app_role_To_module: 'assign_app_role_To_module',
  deleteUser: 'deleteUser',
  getModules: 'getModule',
  getModuleForms: 'getForms',
  userregister: 'register',
  assignUserToRoleApp: 'assignUserToRoleApp',
  assignAppToRole: 'assignRoleToApp',
  createnewmodule: 'create_module',
  createnewform: 'create_form',
  app_role_modules: 'app_role_modules',
  get_app_role_module_forms: 'get_app_role_module_forms',
  deleteUser: 'deleteUser',
  get_user_byId: 'getUserById',
  form_access_update: 'form_access_update',
  edituser: 'updateUser',
  update_user_status: 'update_user_status',
  update_role: 'update_role',
  update_module: 'update_module',
  update_app: 'update_app',
  get_user_apps: 'get_user_apps',
  update_active_status_app_module: 'update_active_status_app_module',
  update_acitve_status_app_user: 'update_acitve_status_app_user',
  app_role_status_update: 'app_role_status_update',

  //BHI FORMS
  getBhiForms: 'get_bhi_forms',
  createBhiForms: 'create_bhi_form',
  editBhiForm: 'update_bhi_form',

  //Schedule Module
  GetAppointmentReason: 'GetAppointmentReason',
  SearchPatient: 'SearchPatient',
  GetLogs: 'GetLogs',
  GetSearchLogs: 'GlobalGetLogs',
  GlobalSearch: 'GlobalSearch',
  CreateAppointment: 'CreateAppointment',
  GetTimezone: 'GetTimezone',
  CreateSchedule: 'CreateSchedule',
  CreateProvider: 'CreateProvider',
  GetScheduleByDate: 'getScheduleByDate',
  CreateProviderAvailableTime: 'create_provider_available_time',
  GetProviderAvailableTimeByDates: 'GetProviderAvailableTimeByDates',

  CreateProviderBlockTime: 'CreateProviderBlockTime',

  GetProviderBlockTimeByDates: 'GetProviderBlockTimeByDates',
  GetProviderDurationApi: 'GetProviderDurationApi',

  getappointmenttype: 'GetAppointmentType',
  GetAppointmentReason: 'GetAppointmentReason',
  SearchPatient: 'SearchPatient',
  GetLogs: 'GetLogs',
  GetSearchLogs: 'GlobalGetLogs',
  GlobalSearch: 'GlobalSearch',
  CreateAppointment: 'CreateAppointment',
  GetTimezone: 'GetTimezone',
  CreateSchedule: 'CreateSchedule',
  CreateProvider: 'CreateProvider',
  GetScheduleByDate: 'getScheduleByDate',
  CreateClinicTime: 'CreateClinicTime',
  GetLocationsById: 'getclinictime',

  GetAppointmentsByLocationProvider: 'GetAppointmentsByLocationProvider',
  GetProviderDurationsByTimeDate:
    'GetProviderDurationsByTimeByDateProviderLocation',
  GetAppointmentCheckInCheckOutTime: 'GetAppointmentInOutTime',
  CreateAppointmentCheckInTimes: 'createAppointmentInTime',
  CreateAppointmentCheckOutTime: 'createAppointmentOutTime',
  UpdateAppointment: 'UpdateAppointment',
  DeleteAppointment: 'DeleteAppointmentById',
  DeleteProviderAvailableTime: 'DeleteProviderAvailableTimeById',

  // ---- Place of Service---
  SavePlaceOfService: 'pos/savePOS',
  GetPlaceOfServiceByLoaction: 'pos/getPOSByLocation',
  posgetPOSAll: 'pos/getPOSAll',
  // ---- Provider Schedule V.2 ---

  CreateProviderScheduleV2: '/scheduler/saveProviderSchedule',
  ShowProviderScheduleV2: 'scheduler/showProviderSchedule',
  GetLocationsByFacility: 'scheduler/getLocationsByFacility',
  GetProvidersByLocation: 'scheduler/getProvidersByLocation',
  DeleteProviderScheduleSingle: 'scheduler/removeSchedule',
  // GetProviderWeeklyScheduleV2: 'scheduler/weeklyProviderSchedule',
  GetProviderWeeklyScheduleV2: 'scheduler/showWS',

  //Encounter Module
  EncounterPatientVitals: 'encounter/encounterpatientvitals',
  EncounterSurgicalHistory: 'encounter/encountersurgicalhistory',
  EncounterAllergies: 'encounter/encounterallergies',
  EncounterImmunization: 'encounter/encounterimmunization',
  GetEncounterPatientVitalsRecent: 'encounter/latestencounterpatientvitals',
  Searchallergy: 'encounter/searchallergy',
  Searchimmunization: 'encounter/searchencounterimmunization',
  PastMedicalHistory: 'encounter/PastMedicalHistory',
  GetPastMedicalHistoryRecent: 'encounter/latestPastMedicalHistory',
  GetEncounterSurgicalHistoryRecent: 'encounter/latestencountersurgicalhistory',
  GetEncounterFamilyHistoryRecent: 'encounter/latestFamilyHistory',
  GetEncounterSocialHistoryRecent: 'encounter/latestSocialHistory',
  GetEncounterAllergiesRecent: 'encounter/latestencounterallergies',
  GetEncounterImmunizationRecent: 'encounter/latestencounterimmunization',
  CreateSocailHistory: 'encounter/CreateSocialHistory',
  CreateFamilyHistory: 'encounter/FamilyHistory',
  ICDCODE: 'encounter/icdcode',
  CPTCode: 'encounter/CPTCode',
  createnewencounter: 'encounter/createnewencounter',
  Getencounterbyid: 'encounter/Getencounterbyid',

  //encpounter stepper break into steps

  createRfvAndHpi: 'encounter/createencounter',
  createROS: 'encounter/reviewsystem',
  createPE: 'encounter/physicalexam',
  createAssestment: 'encounter/assestment',
  createbilling: 'encounter/billing',
  EncounterImmunizationHistory: 'encounter/encounterimmunizationhistory',
  EncounterImmunizationRefused: 'encounter/encounterrefusedimmunization',
  lastReasonForVisit: 'encounter/lastreasonforvisit',
  lasthistoryofpresentingillness: 'encounter/lasthistoryofpresentingillness',
  lastreviewofsystem: 'encounter/lastreviewofsystem',
  lastphysicalexam: 'encounter/lastphysicalexam',
  latestassessments: 'encounter/latestassessments',
  createencounterStepper: 'encounter/createencounter',
  checkappointmentforencounter: 'encounter/checkappointmentforencounter',
  Getencounter: 'encounter/Getencounter',
  signencounter: 'encounter/signencounter',
  inactiveencounter: 'encounter/inactiveencounter',
  getappointmentforencounter: 'encounter/getappointment',
  updateencounter: 'encounter/updateencounter',
  updateassessments: 'encounter/updateassessments',

  //Get Multiple Encounter Modules
  getencounterpatientvitals: 'encounter/getencounterpatientvitals',
  getPastMedicalHistory: 'encounter/getPastMedicalHistory',
  getencountersurgicalhistory: 'encounter/getencountersurgicalhistory',
  getFamilyHistory: 'encounter/getFamilyHistory',
  GetSocailHistory: 'encounter/GetSocialHistory',
  getencounterallergies: 'encounter/getencounterallergies',
  getencounterimmunization: 'encounter/getencounterimmunization',

  //Edit Encounter Modules
  updatePatientVitalEdit: 'encounter/updateencounterpatientvitals',
  updatepastmedicalhistory: 'encounter/UpdatePastMedicalHistory',
  updatesocialhistory: 'encounter/UpdateSocialHistory',
  updatesurgicalhistory: 'encounter/updatesurgicalhistory',
  Updateallergy: 'encounter/updateencounterallergies',
  Updateimmunization: 'encounter/Updateencounterimmunization',
  updatefamilyhistory: 'encounter/UpdateFamilyHistory',

  //Inactive Encounter Modules
  getinactiveStatusimmunization: 'encounter/getinactiveStatusimmunization',
  getinactiveStatuspatientvitals: 'encounter/getinactiveStatuspatientvitals',
  getinactiveStatussocialhistory: 'encounter/getinactiveStatuspatientvitals',
  inactiveStatussurgicalhistory: 'encounter/inactiveStatussurgicalhistory',
  inactiveStatuspatientvitals: 'encounter/inactiveStatuspatientvitals',
  inactiveStatussocialhistory: 'encounter/inactiveStatussocialhistory',
  inactiveStatusPast: 'encounter/inactiveStatusPast',

  //Appointment Type
  getappointmenttype: 'GetAppointmentType',
  UpdateAppointmentType: 'UpdateAppointmentType',
  CreateAppointmentType: 'CreateAppointmentType',
  DeleteAppointmentType: 'inactiveAppointmentType',
  GetActiveAppointmentType: 'GetActiveAppointmentType',

  //Appointment Status
  create_appointment_status: 'create_appointment_status',
  get_appointment_status: 'get_appointment_status',
  update_appointment_status: 'update_appointment_status',
  delete_appointment_status: 'inactiveAppointmentStatus',
  getActiveAppointmentStatus: 'getActiveAppointmentStatus',

  updateAppointmentJoinableStatus: 'updateAppointmentJoinableStatus',

  //Templates
  CreateTemplate: 'encounter/CreateTemplate',
  CreateproblemTemplate: 'encounter/CreateproblemTemplate',
  GetTemplate: 'encounter/GetTemplate',
  EditTemplate: 'encounter/EditTemplate',
  InactiveTemplate: 'encounter/InactiveTemplate',
  getInactiveTemplate: 'encounter/getInactiveTemplate',
  GetproblemTemplate: 'encounter/GetproblemTemplate',

  //Inner Templates
  GetTemplateRFV: 'encounter/GetTemplateRFV',
  GetTemplateHPI: 'encounter/GetTemplateHPI',
  GetTemplateROS: 'encounter/GetTemplateROS',
  GetTemplatePhysicalExam: 'encounter/GetTemplatePhysicalExam',
  //setting
  GetSpeciality: '/encounter/getSpecialties',
  GetProviderSpeciality: '/GetProviderSpeciality'
};

//********insurance******** */
const CreateInsurancetype = (data) =>
  post(SERVICE_URLS.CreateInsurancetype, data, {
    feature: featureConstants.static
  });

const CreateInsurancePayers = (data) =>
  post(SERVICE_URLS.CreateInsurancePayers, data, {
    feature: featureConstants.static
  });
const CreateInsurance = (data) =>
  post(SERVICE_URLS.CreateInsurance, data, {
    feature: featureConstants.static
  });
const UpdateInsurance = (data) =>
  post(SERVICE_URLS.UpdateInsurance + `/${data?.id}`, data, {
    feature: featureConstants.static
  });
const GetInsurancetype = () =>
  get(
    SERVICE_URLS.GetInsurancetype,
    {},
    {
      feature: featureConstants.static
    }
  );
const GetInsurancePayers = () =>
  get(
    SERVICE_URLS.GetInsurancePayers,
    {},
    {
      feature: featureConstants.static
    }
  );
const GetInsurance = () =>
  get(
    SERVICE_URLS.GetInsurance,
    {},
    {
      feature: featureConstants.static
    }
  );
const GetInactiveInsurancetype = () =>
  get(
    SERVICE_URLS.GetInactiveInsurancetype,
    {},
    {
      feature: featureConstants.static
    }
  );
const UpdateInsurancetype = (data) =>
  post(SERVICE_URLS.UpdateInsurancetype + `/${data?.id}`, data, {
    feature: featureConstants.static
  });
const UpdateInsurancePayers = (data) =>
  post(SERVICE_URLS.UpdateInsurancePayers + `/${data?.id}`, data, {
    feature: featureConstants.static
  });
const DeleteInsurancetype = (data) =>
  post(SERVICE_URLS.DeleteInsurancetype + `/${data?.id}`, data, {
    feature: featureConstants.static
  });
const DeleteInsurancePayers = (data) =>
  post(SERVICE_URLS.DeleteInsurancePayers + `/${data?.id}`, data, {
    feature: featureConstants.static
  });
const DeleteInsurance = (data) =>
  post(SERVICE_URLS.DeleteInsurance + `/${data?.id}`, data, {
    feature: featureConstants.static
  });
const GetInsurancetypebyid = (data) =>
  get(
    SERVICE_URLS.GetInsurancetypebyid + `/${data}`,
    {},
    {
      feature: featureConstants.static
    }
  );
const GetInsurancePayerById = (data) =>
  get(
    SERVICE_URLS.GetInsurancePayerById + `/${data}`,
    {},
    {
      feature: featureConstants.static
    }
  );
const GetInsuranceById = (data) =>
  get(
    SERVICE_URLS.GetInsuranceById + `/${data}`,
    {},
    {
      feature: featureConstants.static
    }
  );
const GetInsurancetypeFilter = (data) =>
  get(
    SERVICE_URLS.GetInsurancetypeFilter + `/${data}`,
    {},
    {
      feature: featureConstants.static
    }
  );
const GetInsurancePayersFilter = (data) =>
  get(
    SERVICE_URLS.GetInsurancePayersFilter + `/${data}`,
    {},
    {
      feature: featureConstants.static
    }
  );
const GetInsuranceFilter = (data) =>
  get(
    SERVICE_URLS.GetInsurancePayersFilter + `/${data}`,
    {},
    {
      feature: featureConstants.static
    }
  );
// ***********     end         ******************
//Schedule modules
// const GetAppointmentType=()=>
//       get(SERVICE_URLS.getappointmenttype,{},{ feature: featureConstants.static })
const GetSpeciality = () =>
  get(SERVICE_URLS.GetSpeciality, {}, { feature: featureConstants.static });
const GetTimezone = () =>
  get(SERVICE_URLS.GetTimezone, {}, { feature: featureConstants.static });
const GetAppointmentType = () =>
  get(
    SERVICE_URLS.getappointmenttype,
    {},
    { feature: featureConstants.static }
  );
const GetAppointmentReason = () =>
  get(
    SERVICE_URLS.GetAppointmentReason,
    {},
    { feature: featureConstants.static }
  );

const CreateNewSchedule = (data) =>
  post(SERVICE_URLS.CreateSchedule, data, { feature: featureConstants.static });
const CreateNewProvider = (data) =>
  post(SERVICE_URLS.CreateProvider, data, { feature: featureConstants.static });
// const GetSchedulesByDate = (data) => post(SERVICE_URLS.GetScheduleByDate, data, {feature: featureConstants.static});

const GetSchedulesByDate = (data) =>
  post(SERVICE_URLS.GetScheduleByDate, data, {
    feature: featureConstants.static
  });

const DeleteProviderAvailableTime = (data) => {
  get(`${SERVICE_URLS.DeleteProviderAvailableTime}/${data}`, data, {
    feature: featureConstants.static
  });
};

const UpdateAppointment = (data) =>
  post(SERVICE_URLS.UpdateAppointment, data, {
    feature: featureConstants.static
  });

const DeleteAppointment = (data) =>
  get(`${SERVICE_URLS.DeleteAppointment}/${data}`, data, {
    feature: featureConstants.static
  });

const GetProviderDurationsByDate = (data) =>
  post(SERVICE_URLS.GetProviderDurationsByTimeDate, data, {
    feature: featureConstants.static
  });

const GetProviderBlockTimeByDates = (data) =>
  post(SERVICE_URLS.GetProviderBlockTimeByDates, data, {
    feature: featureConstants.static
  });

const GetProvidersByLocation = (data) =>
  post(SERVICE_URLS.getProviderByLocation, data, {
    feature: featureConstants.static
  });

const GetAppointmentsByLocationProvider = (data) =>
  post(SERVICE_URLS.GetAppointmentsByLocationProvider, data, {
    feature: featureConstants.static
  });

const CreateProviderBlockTime = (data) =>
  post(SERVICE_URLS.CreateProviderBlockTime, data, {
    feature: featureConstants.static
  });

const CreateClinicTime = (data) =>
  post(SERVICE_URLS.CreateClinicTime, data, {
    feature: featureConstants.static
  });
const GetLocationsById = (data) => {
  // alert(`${SERVICE_URLS.GetLocationsById}/${data}`);
  get(
    `${SERVICE_URLS.GetLocationsById}/${data}`,
    {},
    {
      feature: featureConstants.static
    }
  );
};

const GetProviderDuration = () =>
  get(
    SERVICE_URLS.GetProviderDurationApi,
    {},
    { feature: featureConstants.static }
  );

const CreateProviderAvailableTimeScheduler = (data) => {
  post(SERVICE_URLS.CreateProviderAvailableTime, data, {
    feature: featureConstants.static
  });
};

// Appointment Time Tracking

const GetAppointmentCheckInCheckOutTime = (data) =>
  post(SERVICE_URLS.GetAppointmentCheckInCheckOutTime, data, {
    feature: featureConstants.static
  });

const CreateAppointmentCheckInTime = (data) => {
  post(SERVICE_URLS.CreateAppointmentCheckInTimes, data, {
    feature: featureConstants.static
  });
};

const CreateAppointmentCheckOutTime = (data) => {
  post(SERVICE_URLS.CreateAppointmentCheckOutTime, data, {
    feature: featureConstants.static
  });
};

// const GetProviderAvailableTimeByDates = (data) => {
//   post(SERVICE_URLS.GetProviderAvailableTimeByDates, data, {
//     feature: featureConstants.static
//   });
// };

const GetProviderAvailableTimeByDatesdataget = (data) =>
  post(SERVICE_URLS.GetProviderAvailableTimeByDates, data, {
    feature: featureConstants.static
  });

//     const getProvider = () =>
// get(SERVICE_URLS.getprovider, {}, { feature: featureConstants.static });

// Auth Apis All
const login = (data) =>
  post(SERVICE_URLS.login, data, { feature: featureConstants.login });
const OTP = (data) =>
  post(SERVICE_URLS.otp, data, { feature: featureConstants.static });
const OTP_VERIFY = (data) =>
  post(SERVICE_URLS.otpverify, data, { feature: featureConstants.static });
const logout = () =>
  get(SERVICE_URLS.logout, {}, { feature: featureConstants.static });
const otpsessionverify = (data) =>
  post(SERVICE_URLS.resetotpTokenCerification, data, {
    feature: featureConstants.static
  });
const Islogin = () =>
  get(SERVICE_URLS.Islogin, {}, { feature: featureConstants.static });
const getUser = () =>
  get(SERVICE_URLS.getuser, {}, { feature: featureConstants.static });

const resetpassword = (data) =>
  post(SERVICE_URLS.resetpassword, data, { feature: featureConstants.static });
const updatepassword = (data) =>
  post(SERVICE_URLS.update_password, data, {
    feature: featureConstants.static
  });
//changepassord
const changePassword = (data) =>
  post(SERVICE_URLS.changePassword, data, { feature: featureConstants.static });

// Patient Cruds
// const patientActive = (data) =>
//   get(SERVICE_URLS.patientActive, data, { feature: featureConstants.static });

// const patientInActive = (data) =>
//   get(SERVICE_URLS.patientActive, data, { feature: featureConstants.static });
// const editPatientStatus=(data)=>

const editPatientStatus = (data) =>
  post(SERVICE_URLS.editPatientStatus, data, {
    feature: featureConstants.static
  });
const checkuniqueemail = (data) =>
  post(SERVICE_URLS.checkuniqueemail, data, {
    feature: featureConstants.static
  });
const Getpatientbyprovider = (data) =>
  post(SERVICE_URLS.Getpatientbyprovider, data, {
    features: featureConstants.static
  });
const GetPatientSchedule = (data) =>
  post(SERVICE_URLS.GetPatientSchedule, data, {
    features: featureConstants.static
  });

const getPatient = () =>
  get(SERVICE_URLS.getpatient, {}, { feature: featureConstants.static });
const getPatientbyId = (data) =>
  get(
    SERVICE_URLS.getpatientbyId + `/${data}`,
    {},
    { feature: featureConstants.static }
  );
const createPatient = (data) =>
  post(SERVICE_URLS.createpatient, data, { feature: featureConstants.static });
const editPatient = (data) =>
  post(SERVICE_URLS.editpatient + `/${data?.id}`, data, {
    feature: featureConstants.static
  });
const SearchPatient = (data) =>
  post(SERVICE_URLS.SearchPatient, data, {
    feature: featureConstants.static
  });
const deletetPatient = (data) =>
  get(
    SERVICE_URLS.deletepatient + `/${data}`,
    {},
    { feature: featureConstants.static }
  );
// {*****     patientInsuranceStart         ****}

// {****** insurance ends    *****}
// Provider Module Crud
const getProvider = () =>
  get(SERVICE_URLS.getprovider, {}, { feature: featureConstants.static });

// Provider Module Crud
const createPractice = (data) =>
  post(SERVICE_URLS.CreatePractice, data, { feature: featureConstants.static });

// Insurance Module Crud
const SearchInsurance = (data) =>
  get(
    SERVICE_URLS.SearchInsurance + `/${data}`,
    {},
    { feature: featureConstants.static }
  );

// Insurance Module Crud
const getFilteredPatientByProvider = (data) =>
  get(
    SERVICE_URLS.getFilteredPatientByProvider + `/${data}`,
    {},
    { feature: featureConstants.static }
  );

//Permission module

const getRoles = () =>
  get(SERVICE_URLS.getroles, {}, { feature: featureConstants.static });
const Modules = (data) =>
  post(SERVICE_URLS.modules, data, { feature: featureConstants.static });
const Formpermissions = (data) =>
  post(SERVICE_URLS.formpermissions, data, {
    feature: featureConstants.static
  });

const createApp = (data) =>
  post(SERVICE_URLS.createApp, data, { feature: featureConstants.static });

const getAllApps = () =>
  get(SERVICE_URLS.getallapp, {}, { feature: featureConstants.static });

const appRoles = (data) =>
  get(
    SERVICE_URLS.approle + `/${data}`,
    {},
    { feature: featureConstants.static }
  );

const getAppUser = (data) =>
  get(
    SERVICE_URLS.getappusers + `/${data}`,
    {},
    { feature: featureConstants.static }
  );

const getAllUsers = () =>
  get(SERVICE_URLS.getallusers, {}, { feature: featureConstants.static });

const userregister = (data) =>
  post(SERVICE_URLS.userregister, data, { feature: featureConstants.static });

const AssignUserToRole = (data) =>
  post(SERVICE_URLS.assignUserToRoleApp, data, {
    feature: featureConstants.static
  });

const GetAppRoleUsers = (data) =>
  post(SERVICE_URLS.getroleappuser, data, { feature: featureConstants.static });

const AssignAppToRole = (data) =>
  post(SERVICE_URLS.assignAppToRole, data, {
    feature: featureConstants.static
  });

const CreateRole = (data) =>
  post(SERVICE_URLS.create_role, data, { feature: featureConstants.static });

//BHI Forms
const getBhiForms = () =>
  get(SERVICE_URLS.getBhiForms, {}, { feature: featureConstants.static });
const createBhiForms = (data) =>
  post(SERVICE_URLS.createBhiForms, data, { feature: featureConstants.static });
const editBhiForm = (data) =>
  post(SERVICE_URLS.editBhiForm, data, { feature: featureConstants.static });
//BHI END

const CreateModule = (data) =>
  post(SERVICE_URLS.createnewmodule, data, {
    feature: featureConstants.static
  });

const CreateForm = (data) =>
  post(SERVICE_URLS.createnewform, data, { feature: featureConstants.static });

const AssignRoleToModule = (data) =>
  post(SERVICE_URLS.app_role_modules, data, {
    feature: featureConstants.static
  });

const AssignRoleToModuleToForm = (data) =>
  post(SERVICE_URLS.get_app_role_module_forms, data, {
    feature: featureConstants.static
  });

const DeleteUser = (data) =>
  post(SERVICE_URLS.deleteUser, data, { feature: featureConstants.static });

const GetModules = () =>
  get(SERVICE_URLS.getModules, {}, { feature: featureConstants.static });

const GetModulesForms = () =>
  get(SERVICE_URLS.getModuleForms, {}, { feature: featureConstants.static });

const AssignSelectedRoleToSelectedModuleToForm = (data) =>
  post(SERVICE_URLS.assign_app_role_modules_forms, data, {
    feature: featureConstants.static
  });

const AssignSelectedRoleToSelectedModule = (data) =>
  post(SERVICE_URLS.assign_app_role_To_module, data, {
    feature: featureConstants.static
  });

const getUserbyId = (data) =>
  get(
    SERVICE_URLS.get_user_byId + `/${data}`,
    {},
    { feature: featureConstants.static }
  );

const FormAccessPermission = (data) =>
  post(SERVICE_URLS.form_access_update, data, {
    feature: featureConstants.static
  });

const UserEdit = (data) =>
  post(SERVICE_URLS.edituser, data, { feature: featureConstants.static });

const UserStatusChanges = (data) =>
  post(SERVICE_URLS.update_user_status, data, {
    feature: featureConstants.static
  });

const EditRole = (data) =>
  post(SERVICE_URLS.update_role, data, { feature: featureConstants.static });

const EditRoleModule = (data) =>
  post(SERVICE_URLS.update_module, data, { feature: featureConstants.static });

const EditAppRoleModule = (data) =>
  post(SERVICE_URLS.update_active_status_app_module, data, {
    feature: featureConstants.static
  });

const EditAppRoleUser = (data) =>
  post(SERVICE_URLS.update_acitve_status_app_user, data, {
    feature: featureConstants.static
  });

const EditAppRole = (data) =>
  post(SERVICE_URLS.app_role_status_update, data, {
    feature: featureConstants.static
  });

const EditApp = (data) =>
  post(SERVICE_URLS.update_app + `/${data?.id}`, data, {
    feature: featureConstants.static
  });

const GetCurrentUserApp = (data) =>
  get(SERVICE_URLS.get_user_apps, {}, { feature: featureConstants.static });

const GetLogs = () =>
  get(SERVICE_URLS.GetLogs, {}, { feature: featureConstants.static });
const GetSearchLogs = () =>
  get(SERVICE_URLS.GetSearchLogs, {}, { feature: featureConstants.static });

const GlobalSearch = (data) =>
  get(
    SERVICE_URLS.GlobalSearch + `/${data}`,
    {},
    { feature: featureConstants.static }
  );

//Encounter

const UpdatePatientVitalEdit = (data) =>
  post(SERVICE_URLS.updatePatientVitalEdit + `/${data?.id}`, data, {
    feature: featureConstants.static
  });
const UpdatePastMedicalHistory = (data) =>
  post(SERVICE_URLS.updatepastmedicalhistory + `/${data?.id}`, data, {
    feature: featureConstants.static
  });
const UpdateSocialHistory = (data) =>
  post(SERVICE_URLS.updatesocialhistory + `/${data?.id}`, data, {
    feature: featureConstants.static
  });
const UpdateFamilyHistory = (data) =>
  post(SERVICE_URLS.updatefamilyhistory + `/${data?.id}`, data, {
    feature: featureConstants.static
  });
const UpdateSurgicalHistory = (data) =>
  post(SERVICE_URLS.updatesurgicalhistory + `/${data?.id}`, data, {
    feature: featureConstants.static
  });
const UpdateAllergy = (data) =>
  post(SERVICE_URLS.Updateallergy + `/${data?.id}`, data, {
    feature: featureConstants.static
  });
const UpdateImmunization = (data) =>
  post(SERVICE_URLS.Updateimmunization + `/${data?.id}`, data, {
    feature: featureConstants.static
  });

const CreateencounterStepper = (data) =>
  post(SERVICE_URLS.createencounterStepper, data, {
    feature: featureConstants.static
  });
const EncounterPatientVitals = (data) =>
  post(SERVICE_URLS.EncounterPatientVitals, data, {
    feature: featureConstants.static
  });
const EncounterSurgicalHistory = (data) =>
  post(SERVICE_URLS.EncounterSurgicalHistory, data, {
    feature: featureConstants.static
  });
const EncounterFamilyHistory = (data) =>
  post(SERVICE_URLS.CreateFamilyHistory, data, {
    feature: featureConstants.static
  });
const EncounterAllergies = (data) =>
  post(SERVICE_URLS.EncounterAllergies, data, {
    feature: featureConstants.static
  });
const EncounterImmunization = (data) =>
  post(SERVICE_URLS.EncounterImmunization, data, {
    feature: featureConstants.static
  });
//Encounter All Records Apis

const GetEncounterAllPatientVitals = (data) =>
  get(
    SERVICE_URLS.getencounterpatientvitals + `/${data}`,
    {},
    { feature: featureConstants.static }
  );
const GetEncounterAllPastMedicalHistory = (data) =>
  get(
    SERVICE_URLS.getPastMedicalHistory + `/${data}`,
    {},
    { feature: featureConstants.static }
  );

const GetEncounterAllSurgicalHistory = (data) =>
  get(
    SERVICE_URLS.getencountersurgicalhistory + `/${data}`,
    {},
    { feature: featureConstants.static }
  );

const GetEncounterAllFamilyHistory = (data) =>
  get(
    SERVICE_URLS.getFamilyHistory + `/${data}`,
    {},
    { feature: featureConstants.static }
  );

const GetEncounterAllSocailHistory = (data) =>
  get(
    SERVICE_URLS.GetSocailHistory + `/${data}`,
    {},
    { feature: featureConstants.static }
  );

const GetEncounterAllAllergies = (data) =>
  get(
    SERVICE_URLS.getencounterallergies + `/${data}`,
    {},
    { feature: featureConstants.static }
  );

const GetEncounterAllImmunization = (data) =>
  get(
    SERVICE_URLS.getencounterimmunization + `/${data}`,
    {},
    { feature: featureConstants.static }
  );

//Encounter All Inactive Records Apis
const GetEncounterAllInactivePatientVitals = (data) =>
  get(
    SERVICE_URLS.getinactiveStatuspatientvitals + `/${data}`,
    {},
    { feature: featureConstants.static }
  );
const GetEncounterAllInactiveSocialHistory = (data) =>
  get(
    SERVICE_URLS.getinactiveStatussocialhistory + `/${data}`,
    {},
    { feature: featureConstants.static }
  );
const GetEncounterAllInactiveSurgicalHistory = (data) =>
  get(
    SERVICE_URLS.getinactiveStatussurgicalhistory + `/${data}`,
    {},
    { feature: featureConstants.static }
  );
const GetEncounterAllInactivePastMedicalHistory = (data) =>
  get(
    SERVICE_URLS.getinactiveStatuspastmedicalhistory + `/${data}`,
    {},
    { feature: featureConstants.static }
  );
const GetEncounterAllInactiveAllergies = (data) =>
  get(
    SERVICE_URLS.getinactiveStatusallergy + `/${data}`,
    {},
    { feature: featureConstants.static }
  );
const GetEncounterAllInactiveImmunization = (data) =>
  get(
    SERVICE_URLS.getinactiveStatusimmunization + `/${data}`,
    {},
    { feature: featureConstants.static }
  );
const StatusActiveInactiveVitals = (data) =>
  post(
    SERVICE_URLS.inactiveStatuspatientvitals + `/${data?.patient_id}`,
    data,
    {
      feature: featureConstants.static
    }
  );
const StatusActiveInactivePastMedicalHistory = (data) =>
  post(SERVICE_URLS.inactiveStatusPast + `/${data?.id}`, data, {
    feature: featureConstants.static
  });
const StatusActiveInactiveSocialHistory = (data) =>
  post(SERVICE_URLS.inactiveStatussocialhistory + `/${data?.id}`, data, {
    feature: featureConstants.static
  });
const StatusActiveInactiveSurgicalHistory = (data) =>
  post(SERVICE_URLS.inactiveStatussurgicalhistory + `/${data?.id}`, data, {
    feature: featureConstants.static
  });
const StatusActiveInactiveAllergy = (data) =>
  post(SERVICE_URLS.inactiveStatusallergy + `/${data?.patient_id}`, data, {
    feature: featureConstants.static
  });
const StatusActiveInactiveImmunization = (data) =>
  post(SERVICE_URLS.inactiveStatusimmunization + `/${data?.patient_id}`, data, {
    feature: featureConstants.static
  });
//Encounter All Recent Record Apis

const GetEncounterPatientVitalsRecent = (data) =>
  get(
    SERVICE_URLS.GetEncounterPatientVitalsRecent + `/${data}`,
    {},
    { feature: featureConstants.static }
  );
const GetPastMedicalHistoryRecent = (data) =>
  get(
    SERVICE_URLS.GetPastMedicalHistoryRecent + `/${data}`,
    {},
    { feature: featureConstants.static }
  );
const GetEncounterSurgicalHistoryRecent = (data) =>
  get(
    SERVICE_URLS.GetEncounterSurgicalHistoryRecent + `/${data}`,
    {},
    { feature: featureConstants.static }
  );
const GetEncounterFamilyHistoryRecent = (data) =>
  get(
    SERVICE_URLS.GetEncounterFamilyHistoryRecent + `/${data}`,
    {},
    { feature: featureConstants.static }
  );
const GetEncounterSocialHistoryRecent = (data) =>
  get(
    SERVICE_URLS.GetEncounterSocialHistoryRecent + `/${data}`,
    {},
    { feature: featureConstants.static }
  );
const GetEncounterAllergiesRecent = (data) =>
  get(
    SERVICE_URLS.GetEncounterAllergiesRecent + `/${data}`,
    {},
    { feature: featureConstants.static }
  );
const GetEncounterImmunizationRecent = (data) =>
  get(
    SERVICE_URLS.GetEncounterImmunizationRecent + `/${data}`,
    {},
    { feature: featureConstants.static }
  );

const Searchallergy = (data) =>
  post(SERVICE_URLS.Searchallergy, data, { feature: featureConstants.static });

const Searchimmunization = (data) =>
  get(
    SERVICE_URLS.Searchimmunization + `/${data}`,
    {},
    { feature: featureConstants.static }
  );

const CreatePastMedicalHistory = (data) =>
  post(SERVICE_URLS.PastMedicalHistory, data, {
    feature: featureConstants.static
  });

const GetICDCODE = (data) =>
  post(SERVICE_URLS.ICDCODE, data, { feature: featureConstants.static });

const GetCPTCode = (data) =>
  post(SERVICE_URLS.CPTCode, data, { feature: featureConstants.static });
const CreateSocailHistory = (data) =>
  post(SERVICE_URLS.CreateSocailHistory, data, {
    feature: featureConstants.static
  });
const EncounterImmunizationHistory = (data) =>
  post(SERVICE_URLS.EncounterImmunizationHistory, data, {
    feature: featureConstants.static
  });
const EncounterImmunizationRefused = (data) =>
  post(SERVICE_URLS.EncounterImmunizationRefused, data, {
    feature: featureConstants.static
  });
const GetlastReasonForVisit = (data) =>
  get(
    SERVICE_URLS.lastReasonForVisit + `/${data}`,
    {},
    {
      feature: featureConstants.static
    }
  );
const Getlasthistoryofpresentingillness = (data) =>
  get(
    SERVICE_URLS.lasthistoryofpresentingillness + `/${data}`,
    {},
    {
      feature: featureConstants.static
    }
  );
const Getlastreviewofsystem = (data) =>
  get(
    SERVICE_URLS.lastreviewofsystem + `/${data}`,
    {},
    {
      feature: featureConstants.static
    }
  );
const Getlastphysicalexam = (data) =>
  get(
    SERVICE_URLS.lastphysicalexam + `/${data}`,
    {},
    {
      feature: featureConstants.static
    }
  );
const Getlatestassessments = (data) =>
  get(
    SERVICE_URLS.latestassessments + `/${data}`,
    {},
    {
      feature: featureConstants.static
    }
  );
const Getcheckappointmentforencounter = (data) =>
  get(
    SERVICE_URLS.checkappointmentforencounter + `/${data}`,
    {},
    {
      feature: featureConstants.static
    }
  );
const Getencounter = (data) =>
  get(
    SERVICE_URLS.Getencounter + `/${data}`,
    {},
    {
      feature: featureConstants.static
    }
  );
const Createnewencounter = (data) =>
  post(SERVICE_URLS.createnewencounter, data, {
    feature: featureConstants.static
  });
const Getencounterbyid = (data) =>
  post(SERVICE_URLS.Getencounterbyid, data, {
    feature: featureConstants.static
  });

const Signencounter = (data) =>
  post(SERVICE_URLS.signencounter, data, {
    feature: featureConstants.static
  });

const Inactiveencounter = (data) =>
  post(SERVICE_URLS.inactiveencounter, data, {
    feature: featureConstants.static
  });
const Getgetappointmentforencounter = (data) =>
  get(
    SERVICE_URLS.getappointmentforencounter + `/${data}`,
    {},
    { feature: featureConstants.static }
  );
const Updateencounter = (data) =>
  post(SERVICE_URLS.updateencounter, data, {
    feature: featureConstants.static
  });
const updateassessments = (data) =>
  post(SERVICE_URLS.updateassessments + `/${data?.id}`, data, {
    feature: featureConstants.static
  });
// Practice Apis
const GetPractice = () =>
  get(SERVICE_URLS.GetPractice, {}, { feature: featureConstants.static });

const GetPracticeByIDSetting = (data) =>
  get(
    SERVICE_URLS.GetPracticeByID + `/${data}`,
    {},
    {
      feature: featureConstants.static
    }
  );

const CreatePractice = (data) =>
  post(SERVICE_URLS.CreatePractice, data, { feature: featureConstants.static });
const UpdatePractice = (data) =>
  post(SERVICE_URLS.UpdatePractice, data, { feature: featureConstants.static });
const DeletePractice = (data) =>
  post(SERVICE_URLS.DeletePractice, data, { feature: featureConstants.static });

// Providerr Type Apis
const GetProviderType = () =>
  get(SERVICE_URLS.GetProviderType, {}, { feature: featureConstants.static });
const GetProviderSpeciality = (data) =>
  post(SERVICE_URLS.GetProviderSpeciality, data, {
    feature: featureConstants.static
  });
const CreateProviderType = (data) =>
  post(SERVICE_URLS.CreateProviderType, data, {
    feature: featureConstants.static
  });
const UpdateProviderType = (data) =>
  post(SERVICE_URLS.UpdateProviderType, data, {
    feature: featureConstants.static
  });
const DeleteProviderType = (data) =>
  post(SERVICE_URLS.DeleteProviderType, data, {
    feature: featureConstants.static
  });

// const DeletePractice = (data) =>
//   get(SERVICE_URLS.DeletePractice + `/${data}`, {}, { feature: featureConstants.static });

// Location Api
const GetLocation = () =>
  get(SERVICE_URLS.GetLocation, {}, { feature: featureConstants.static });

const GetLocationByIdSetting = (data) =>
  get(
    SERVICE_URLS.GetLocationById + `/${data}`,
    {},
    {
      feature: featureConstants.static
    }
  );

const CreateLocation = (data) =>
  post(SERVICE_URLS.CreateLocation, data, { feature: featureConstants.static });
const UpdateLocation = (data) =>
  post(SERVICE_URLS.UpdateLocation, data, { feature: featureConstants.static });
const DeleteLocation = (data) =>
  post(SERVICE_URLS.DeleteLocation, data, { feature: featureConstants.static });

// Provider Api
const GetProvider = () =>
  get(SERVICE_URLS.GetProvider, {}, { feature: featureConstants.static });

const GetProviderByIdSetting = (data) =>
  get(
    SERVICE_URLS.GetProviderById + `/${data}`,
    {},
    {
      feature: featureConstants.static
    }
  );

const CreateProvider = (data) =>
  post(SERVICE_URLS.CreateProvider, data, { feature: featureConstants.static });
const UpdateProvider = (data) =>
  post(SERVICE_URLS.UpdateProvider, data, { feature: featureConstants.static });
const DeleteProvider = (data) =>
  post(SERVICE_URLS.DeleteProvider, data, { feature: featureConstants.static });

// Appointment type Api
const CreateAppointmentType = (data) =>
  post(SERVICE_URLS.CreateAppointmentType, data, {
    feature: featureConstants.static
  });
// Appointment Create Api
const CreateAppointment = (data) =>
  post(SERVICE_URLS.CreateAppointment, data, {
    feature: featureConstants.static
  });
const UpdateAppointmentType = (data) =>
  post(SERVICE_URLS.UpdateAppointmentType, data, {
    feature: featureConstants.static
  });
const DeleteAppointmentType = (data) =>
  post(SERVICE_URLS.DeleteAppointmentType, data, {
    feature: featureConstants.static
  });

// Appointment status Api
const GetActiveAppointmentType = () =>
  get(
    SERVICE_URLS.GetActiveAppointmentType,
    {},
    { feature: featureConstants.static }
  );
const getActiveAppointmentStatus = () =>
  get(
    SERVICE_URLS.getActiveAppointmentStatus,
    {},
    { feature: featureConstants.static }
  );
const get_appointment_status = () =>
  get(
    SERVICE_URLS.get_appointment_status,
    {},
    { feature: featureConstants.static }
  );
const create_appointment_status = (data) =>
  post(SERVICE_URLS.create_appointment_status, data, {
    feature: featureConstants.static
  });
const update_appointment_status = (data) =>
  post(SERVICE_URLS.update_appointment_status, data, {
    feature: featureConstants.static
  });
const delete_appointment_status = (data) =>
  post(SERVICE_URLS.delete_appointment_status, data, {
    feature: featureConstants.static
  });
const updateAppointmentJoinableStatus = (data) =>
  post(SERVICE_URLS.updateAppointmentJoinableStatus, data, {
    feature: featureConstants.static
  });
//templates

const GetTemplate = () =>
  get(SERVICE_URLS.GetTemplate, {}, { feature: featureConstants.static });
const GetproblemTemplate = () =>
  get(
    SERVICE_URLS.GetproblemTemplate,
    {},
    { feature: featureConstants.static }
  );
const CreateTemplate = (data) =>
  post(SERVICE_URLS.CreateTemplate, data, {
    feature: featureConstants.static
  });
const CreateproblemTemplate = (data) =>
  post(SERVICE_URLS.CreateproblemTemplate, data, {
    feature: featureConstants.static
  });
const EditTemplate = (data) =>
  post(SERVICE_URLS.EditTemplate + `/${data?.id}`, data, {
    feature: featureConstants.static
  });
const InactiveTemplate = (data) =>
  post(
    SERVICE_URLS.InactiveTemplate + `/${data}`,
    {},
    {
      feature: featureConstants.static
    }
  );

//template inner
const GetTemplateRFV = () =>
  get(SERVICE_URLS.GetTemplateRFV, {}, { feature: featureConstants.static });
const GetTemplateHPI = () =>
  get(SERVICE_URLS.GetTemplateHPI, {}, { feature: featureConstants.static });
const GetTemplateROS = () =>
  get(SERVICE_URLS.GetTemplateROS, {}, { feature: featureConstants.static });
const GetTemplatePhysicalExam = () =>
  get(
    SERVICE_URLS.GetTemplatePhysicalExam,
    {},
    { feature: featureConstants.static }
  );
//create stepper seperate apis

const CreateRfvAndHpi = (data) =>
  post(SERVICE_URLS.createRfvAndHpi, data, {
    feature: featureConstants.static
  });
const CreateROS = (data) =>
  post(SERVICE_URLS.createROS, data, {
    feature: featureConstants.static
  });
const CreatePE = (data) =>
  post(SERVICE_URLS.createPE, data, {
    feature: featureConstants.static
  });
const CreateAssestment = (data) =>
  post(SERVICE_URLS.createAssestment, data, {
    feature: featureConstants.static
  });
const Createbilling = (data) =>
  post(SERVICE_URLS.createbilling, data, {
    feature: featureConstants.static
  });

// ----------------------- Provider Schedule V2 -----------------

const CreateProviderScheduleV2 = (data) =>
  post(SERVICE_URLS.CreateProviderScheduleV2, data, {
    feature: featureConstants.static
  });

const DeleteProviderScheduleSingle = (data) => {
  post(SERVICE_URLS.DeleteProviderScheduleSingle, data, {
    feature: featureConstants.static
  });
};

const ShowProviderScheduleV2 = (data) =>
  post(SERVICE_URLS.ShowProviderScheduleV2, data, {
    feature: featureConstants.static
  });

const GetLocationsByFacility = (data) =>
  post(SERVICE_URLS.GetLocationsByFacility, data, {
    feature: featureConstants.static
  });

const GetProvidersByLocationV2 = (data) =>
  post(SERVICE_URLS.GetProvidersByLocation, data, {
    feature: featureConstants.static
  });

const GetProviderWeeklyScheduleV2 = (data) => {
  post(SERVICE_URLS.GetProviderWeeklyScheduleV2, data, {
    feature: featureConstants.static
  });
};

// ----------------------- END Provider Schedule V2 -----------------

// ----------------------- Place Of Services -----------------

const SavePlaceOfService = (data) =>
  post(SERVICE_URLS.SavePlaceOfService, data, {
    feature: featureConstants.static
  });

const GetPlaceOfServiceByLoaction = (data) =>
  post(SERVICE_URLS.GetPlaceOfServiceByLoaction, data, {
    feature: featureConstants.static
  });
const GetposgetPOSAll = () =>
  post(
    SERVICE_URLS.posgetPOSAll,
    {},
    {
      feature: featureConstants.static
    }
  );

// ----------------------- END Place of Services -----------------

const apiServices = {
  // Auth Exports
  changePassword,
  login,
  getRoles,
  Modules,
  Formpermissions,
  OTP,
  OTP_VERIFY,
  logout,
  otpsessionverify,
  resetpassword,
  updatepassword,
  Islogin,
  // Patient Exports
  getPatient,
  editPatient,
  createPatient,
  getPatientbyId,
  SearchPatient,
  editPatientStatus,
  Getpatientbyprovider,
  checkuniqueemail,
  GetPatientSchedule,
  // patientActive,
  // patientInActive,
  // Provider Exports

  // Location Exports
  GetLocation,
  GetLocationByIdSetting,
  CreateLocation,
  UpdateLocation,
  DeleteLocation,
  // Practice Exports
  GetPractice,
  GetPracticeByIDSetting,
  CreatePractice,
  UpdatePractice,
  DeletePractice,
  //insurance exports
  CreateInsurancetype,
  GetInsurancetype,
  UpdateInsurancetype,
  DeleteInsurancetype,
  DeleteInsurancePayers,
  DeleteInsurance,
  GetInsurancetypeFilter,
  GetInsurancePayersFilter,
  GetInsuranceFilter,
  GetInactiveInsurancetype,
  CreateInsurancePayers,
  GetInsurancePayers,
  UpdateInsurancePayers,
  GetInsurance,
  CreateInsurance,
  UpdateInsurance,

  //Provider Exports
  GetProvider,
  GetProviderByIdSetting,
  CreateProvider,
  UpdateProvider,
  DeleteProvider,
  GetProvidersByLocation,

  //provider type exports
  GetProviderType,
  CreateProviderType,
  UpdateProviderType,
  DeleteProviderType,

  // SearchInsurance Exports
  SearchInsurance,

  // SearchInsurance Exports
  getFilteredPatientByProvider,

  //Permission Exports
  createApp,
  getAllApps,
  appRoles,
  userregister,

  getAppUser,

  getAllUsers,
  AssignUserToRole,
  GetAppRoleUsers,
  AssignAppToRole,
  CreateRole,
  getUserbyId,

  //BHI FORMS
  getBhiForms,
  createBhiForms,
  editBhiForm,
  CreateModule,
  CreateForm,
  AssignRoleToModule,
  AssignRoleToModuleToForm,
  DeleteUser,

  //schedule Exports
  GetAppointmentType,
  GetAppointmentReason,
  CreateAppointment,
  GetTimezone,
  CreateNewSchedule,
  GetSchedulesByDate,
  CreateClinicTime,
  GetLocationsById,
  CreateProviderAvailableTimeScheduler,
  DeleteProviderAvailableTime,
  GetProviderDuration,
  CreateProviderBlockTime,
  GetProviderBlockTimeByDates,
  GetAppointmentsByLocationProvider,
  GetProviderDurationsByDate,
  GetAppointmentCheckInCheckOutTime,
  CreateAppointmentCheckInTime,
  CreateAppointmentCheckOutTime,
  UpdateAppointment,
  DeleteAppointment,
  DeleteProviderScheduleSingle,
  GetProviderWeeklyScheduleV2,

  //appoint end
  GetModules,
  GetModulesForms,
  AssignSelectedRoleToSelectedModule,
  AssignSelectedRoleToSelectedModuleToForm,
  FormAccessPermission,
  UserEdit,
  UserStatusChanges,
  EditRole,
  EditRoleModule,
  EditApp,
  GetCurrentUserApp,
  EditAppRoleModule,
  EditAppRole,
  EditAppRoleUser,
  GetLogs,
  GetSearchLogs,
  GlobalSearch,
  EncounterPatientVitals,
  EncounterSurgicalHistory,
  EncounterAllergies,
  EncounterImmunization,
  GetEncounterPatientVitalsRecent,
  GetPastMedicalHistoryRecent,
  GetEncounterSurgicalHistoryRecent,
  GetEncounterFamilyHistoryRecent,
  GetEncounterSocialHistoryRecent,
  GetEncounterAllergiesRecent,
  GetEncounterImmunizationRecent,
  GetEncounterAllPatientVitals,
  GetEncounterAllPastMedicalHistory,
  GetEncounterAllSurgicalHistory,
  GetEncounterAllFamilyHistory,
  GetEncounterAllSocailHistory,
  GetEncounterAllAllergies,
  GetEncounterAllImmunization,
  GetEncounterAllInactivePatientVitals,
  GetEncounterAllInactiveImmunization,
  StatusActiveInactiveVitals,

  EncounterFamilyHistory,
  getUser,
  Searchallergy,
  Searchimmunization,
  CreatePastMedicalHistory,
  GetICDCODE,
  GetCPTCode,
  CreateSocailHistory,
  EncounterImmunizationHistory,
  EncounterImmunizationRefused,
  GetlastReasonForVisit,
  Getlasthistoryofpresentingillness,
  Getencounter,
  Createnewencounter,
  Getencounterbyid,
  Signencounter,
  Inactiveencounter,
  Getgetappointmentforencounter,
  Updateencounter,

  //update encounter accrordians
  UpdatePatientVitalEdit,
  UpdatePastMedicalHistory,
  UpdateSocialHistory,
  UpdateFamilyHistory,
  UpdateSurgicalHistory,
  UpdateAllergy,
  UpdateImmunization,
  updateassessments,

  //status update encounter accordian
  StatusActiveInactivePastMedicalHistory,
  StatusActiveInactiveSurgicalHistory,
  StatusActiveInactiveSocialHistory,

  Getlastreviewofsystem,
  Getlastphysicalexam,
  Getlatestassessments,
  CreateencounterStepper,
  Getcheckappointmentforencounter,

  //stepper sepetrate
  CreateRfvAndHpi,
  CreateROS,
  CreatePE,
  CreateAssestment,
  Createbilling,

  //appoint type
  CreateAppointmentType,
  UpdateAppointmentType,
  DeleteAppointmentType,
  GetProviderAvailableTimeByDatesdataget,
  GetActiveAppointmentType,

  GetProviderSpeciality,

  //appoint status
  get_appointment_status,
  create_appointment_status,
  update_appointment_status,
  delete_appointment_status,
  getActiveAppointmentStatus,

  //Twillio Expire Link Of Room
  updateAppointmentJoinableStatus,

  //Template
  GetTemplate,
  GetproblemTemplate,
  CreateTemplate,
  CreateproblemTemplate,
  EditTemplate,
  InactiveTemplate,
  GetTemplateRFV,
  GetTemplateHPI,
  GetTemplateROS,
  GetTemplatePhysicalExam,

  // Provider schedule v2

  CreateProviderScheduleV2,
  ShowProviderScheduleV2,
  GetLocationsByFacility,
  GetProvidersByLocationV2,

  // Place of Service Exports
  SavePlaceOfService,
  GetPlaceOfServiceByLoaction,
  GetposgetPOSAll,
  //seting
  GetSpeciality,
  GetInsuranceById,

  ///insurance export
  GetInsurancetypebyid,

  GetInsurancePayerById
};
export default apiServices;
