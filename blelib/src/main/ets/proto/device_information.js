/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "@ohos/protobufjs";
import Long from 'long';
$protobuf.util.Long=Long
$protobuf.configure()

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const device_information = $root.device_information = (() => {

    /**
     * Namespace device_information.
     * @exports device_information
     * @namespace
     */
    const device_information = {};

    /**
     * DeviceCategoryType enum.
     * @name device_information.DeviceCategoryType
     * @enum {number}
     * @property {number} DEVICE_CYCLE_COMPUTER=0 DEVICE_CYCLE_COMPUTER value
     * @property {number} DEVICE_ACCESSORY=1 DEVICE_ACCESSORY value
     * @property {number} DEVICE_WATCH=2 DEVICE_WATCH value
     */
    device_information.DeviceCategoryType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DEVICE_CYCLE_COMPUTER"] = 0;
        values[valuesById[1] = "DEVICE_ACCESSORY"] = 1;
        values[valuesById[2] = "DEVICE_WATCH"] = 2;
        return values;
    })();

    /**
     * FunctionType enum.
     * @name device_information.FunctionType
     * @enum {number}
     * @property {number} DATA_MANAGEMENT_MODULE=0 DATA_MANAGEMENT_MODULE value
     * @property {number} DATA_MANAGEMENT_ACTIVITIES_FUNCTION=1 DATA_MANAGEMENT_ACTIVITIES_FUNCTION value
     * @property {number} DATA_MANAGEMENT_ACTIVITIES_LIST_INFORMATION_FUNCTION=2 DATA_MANAGEMENT_ACTIVITIES_LIST_INFORMATION_FUNCTION value
     * @property {number} DATA_MANAGEMENT_ROUTES_FUNCTION=3 DATA_MANAGEMENT_ROUTES_FUNCTION value
     * @property {number} DATA_MANAGEMENT_WORKOUTS_FUNCTION=4 DATA_MANAGEMENT_WORKOUTS_FUNCTION value
     * @property {number} DATA_MANAGEMENT_SYNC_SETTING_FUNCTION=5 DATA_MANAGEMENT_SYNC_SETTING_FUNCTION value
     * @property {number} DEVICE_SETTINGS_MODULE=6 DEVICE_SETTINGS_MODULE value
     * @property {number} PROMPT_FOR_DELETION_WHEN_THE_DEVICE_ACTIVE_FILE_IS_FULL=7 PROMPT_FOR_DELETION_WHEN_THE_DEVICE_ACTIVE_FILE_IS_FULL value
     * @property {number} NOTIFICATION_MODULE=31 NOTIFICATION_MODULE value
     * @property {number} NOTIFICATION_INCOMING_CALL_FUNCTION=32 NOTIFICATION_INCOMING_CALL_FUNCTION value
     * @property {number} NOTIFICATION_INCOMING_MESSAGE_FUNCTION=33 NOTIFICATION_INCOMING_MESSAGE_FUNCTION value
     * @property {number} NOTIFICATION_APP_FUNCTION=34 NOTIFICATION_APP_FUNCTION value
     * @property {number} NOTIFICATION_READ_SWITCH_STATUS=35 NOTIFICATION_READ_SWITCH_STATUS value
     * @property {number} NOTIFICATION_SUPPORT_CUSTOM_APP_SWITCH=36 NOTIFICATION_SUPPORT_CUSTOM_APP_SWITCH value
     * @property {number} NAVIGATION_MAP_MODULE=51 NAVIGATION_MAP_MODULE value
     * @property {number} UNIT_MODULE=71 UNIT_MODULE value
     * @property {number} UNIT_METRIC_FUNCTION=72 UNIT_METRIC_FUNCTION value
     * @property {number} UNIT_IMPERIAL_FUNCTION=73 UNIT_IMPERIAL_FUNCTION value
     * @property {number} UNIT_CUSTOMIZE_FUNCTION=74 UNIT_CUSTOMIZE_FUNCTION value
     * @property {number} CYCLING_COMPUTER_CONFIG_MODULE=91 CYCLING_COMPUTER_CONFIG_MODULE value
     * @property {number} KEY_FUNCTION_SET_SUB_MODULE=92 KEY_FUNCTION_SET_SUB_MODULE value
     * @property {number} AUTO_FUNCTION_SET_SUB_MODULE=93 AUTO_FUNCTION_SET_SUB_MODULE value
     * @property {number} AUTO_PAUSE_FUNCTION=94 AUTO_PAUSE_FUNCTION value
     * @property {number} AUTO_RECORD_START_FUNCTION=95 AUTO_RECORD_START_FUNCTION value
     * @property {number} AUTO_POWER_OFF_FUNCTION=96 AUTO_POWER_OFF_FUNCTION value
     * @property {number} AUTO_SLEEP_FUNCTION=97 AUTO_SLEEP_FUNCTION value
     * @property {number} AUTO_HOME_PAGE_BACK_FUNCTION=98 AUTO_HOME_PAGE_BACK_FUNCTION value
     * @property {number} SMART_SAVE_FUNCTION=99 SMART_SAVE_FUNCTION value
     * @property {number} ALARM_SET_SUB_MODULE=100 ALARM_SET_SUB_MODULE value
     * @property {number} ALARM_RIDE_TIME_FUNCTION=101 ALARM_RIDE_TIME_FUNCTION value
     * @property {number} ALARM_RIDE_DISTANCE_FUNCTION=102 ALARM_RIDE_DISTANCE_FUNCTION value
     * @property {number} ALARM_HRM_FUNCTION=103 ALARM_HRM_FUNCTION value
     * @property {number} ALARM_CAD_FUNCTION=104 ALARM_CAD_FUNCTION value
     * @property {number} ALARM_PWR_FUNCTION=105 ALARM_PWR_FUNCTION value
     * @property {number} ALARM_CALORIE_FUNCTION=106 ALARM_CALORIE_FUNCTION value
     * @property {number} LAP_SET_SUB_MODULE=107 LAP_SET_SUB_MODULE value
     * @property {number} SOUND_MODULE=108 SOUND_MODULE value
     * @property {number} SOUND_KEY_FUNCTION=109 SOUND_KEY_FUNCTION value
     * @property {number} SOUND_BEEP_FUNCTION=110 SOUND_BEEP_FUNCTION value
     * @property {number} SOUND_BEEP_MULTIPLE_CHOICE_FUNCTION=555 SOUND_BEEP_MULTIPLE_CHOICE_FUNCTION value
     * @property {number} UPLOAD_LOG_MODULE=111 UPLOAD_LOG_MODULE value
     * @property {number} AUTO_RECORD_START_SUPPORT_THRESHOLD=112 AUTO_RECORD_START_SUPPORT_THRESHOLD value
     * @property {number} AUTO_PAUSE_SUPPORT_THRESHOLD=113 AUTO_PAUSE_SUPPORT_THRESHOLD value
     * @property {number} AUTO_FUNCTION_SET_SUB_MODULE_520=114 AUTO_FUNCTION_SET_SUB_MODULE_520 value
     * @property {number} WEATHER_TEST_MODULE=141 WEATHER_TEST_MODULE value
     * @property {number} ROUTES_MODULE=161 ROUTES_MODULE value
     * @property {number} ROUTE_SUPPORT_DIFFERENCE_ALGORITHM=162 ROUTE_SUPPORT_DIFFERENCE_ALGORITHM value
     * @property {number} ROUTE_SUPPORT_ONLY_SINGLE_ROUTE=163 ROUTE_SUPPORT_ONLY_SINGLE_ROUTE value
     * @property {number} ROUTE_SUPPORT_AUXILIARY_POINT=164 ROUTE_SUPPORT_AUXILIARY_POINT value
     * @property {number} BROADCAST_MODULE=181 BROADCAST_MODULE value
     * @property {number} GROUP_TRACK_MODULE=182 GROUP_TRACK_MODULE value
     * @property {number} SENSORS_MODULE=201 SENSORS_MODULE value
     * @property {number} CRANK_LENGTH_PLUS=202 CRANK_LENGTH_PLUS value
     * @property {number} POWER_CALIBRATION=203 POWER_CALIBRATION value
     * @property {number} SUPPORT_SENSOR_SYNC=204 SUPPORT_SENSOR_SYNC value
     * @property {number} FIRMWARE_DETECTION_MODULE=221 FIRMWARE_DETECTION_MODULE value
     * @property {number} WIFI_MODULE=251 WIFI_MODULE value
     * @property {number} PAGE_SETTING_MODULE=281 PAGE_SETTING_MODULE value
     * @property {number} PAGE_SETTING_NAME_MAPPING=282 PAGE_SETTING_NAME_MAPPING value
     * @property {number} PAGE_COMPASS=283 PAGE_COMPASS value
     * @property {number} TRAINING_MODULE=311 TRAINING_MODULE value
     * @property {number} BIKE_SETTING_MODULE=341 BIKE_SETTING_MODULE value
     * @property {number} PERSONAL_SETTINGS_MODULE=371 PERSONAL_SETTINGS_MODULE value
     * @property {number} FONT_DOWNLOAD_MODULE=401 FONT_DOWNLOAD_MODULE value
     * @property {number} ANTI_THEFT_ALARM_MODULE=421 ANTI_THEFT_ALARM_MODULE value
     * @property {number} SEND_WEATHER_INFORMATION_MODULE=451 SEND_WEATHER_INFORMATION_MODULE value
     * @property {number} SEND_AGPS_MODULE=452 SEND_AGPS_MODULE value
     * @property {number} SEND_USER_INFORMATION_MODULE=453 SEND_USER_INFORMATION_MODULE value
     * @property {number} SEND_OFFLINE_AGPS_MODULE=454 SEND_OFFLINE_AGPS_MODULE value
     * @property {number} REMOVE_DEVICE_MODULE=501 REMOVE_DEVICE_MODULE value
     * @property {number} MODEL_MANAGEMENT_MODULE=502 MODEL_MANAGEMENT_MODULE value
     * @property {number} EDIT_MODEL_MANAGEMENT_MODULE=503 EDIT_MODEL_MANAGEMENT_MODULE value
     * @property {number} THEME_MANAGEMENT_MODULE=511 THEME_MANAGEMENT_MODULE value
     * @property {number} DISPLAY_SETTING_MODULE=521 DISPLAY_SETTING_MODULE value
     * @property {number} ALTITUDE_CALIBRATION_MODULE=522 ALTITUDE_CALIBRATION_MODULE value
     * @property {number} LOCATION_POINT_MANAGEMENT_MODULE=523 LOCATION_POINT_MANAGEMENT_MODULE value
     * @property {number} OTHER_SETTING_MODULE=531 OTHER_SETTING_MODULE value
     * @property {number} CALCULATE_AVERAGE_CADENCE_FILTER_0_VALUE=532 CALCULATE_AVERAGE_CADENCE_FILTER_0_VALUE value
     * @property {number} CALCULATE_AVERAGE_POWER_FILTER_0_VALUE=533 CALCULATE_AVERAGE_POWER_FILTER_0_VALUE value
     * @property {number} MOTION_STATE_DETECTION=534 MOTION_STATE_DETECTION value
     * @property {number} PRESS_TO_SWITCH_SPORT_MODE=535 PRESS_TO_SWITCH_SPORT_MODE value
     * @property {number} AUTO_START_CUSTOM=541 AUTO_START_CUSTOM value
     * @property {number} AUTO_START_ALERT=542 AUTO_START_ALERT value
     * @property {number} AUTO_PAGE_SLOW=543 AUTO_PAGE_SLOW value
     * @property {number} AUTO_PAGE_NORMAL=544 AUTO_PAGE_NORMAL value
     * @property {number} POWER_SAVING_MODEL=545 POWER_SAVING_MODEL value
     * @property {number} SMART_POWER_SAVING_FUNCTIONALITY=546 SMART_POWER_SAVING_FUNCTIONALITY value
     * @property {number} BLE_MAP_MODULE=547 BLE_MAP_MODULE value
     * @property {number} ALARM_SPEED_FUNCTION=548 ALARM_SPEED_FUNCTION value
     * @property {number} READ_SN_FUNCTION=549 READ_SN_FUNCTION value
     * @property {number} HR_DEVICE=550 HR_DEVICE value
     * @property {number} SPD_DEVICE=551 SPD_DEVICE value
     * @property {number} CAD_DEVICE=552 CAD_DEVICE value
     * @property {number} ADVANCED_HR_DEVICE=553 ADVANCED_HR_DEVICE value
     * @property {number} RADAR_DEVICE=554 RADAR_DEVICE value
     * @property {number} POWER_MANAGEMENT_MODULE=556 POWER_MANAGEMENT_MODULE value
     * @property {number} LIGHT_DEVICE=557 LIGHT_DEVICE value
     * @property {number} SUPPORT_STAGE=601 SUPPORT_STAGE value
     * @property {number} VITALITY_GOAL_MODULE=2000 VITALITY_GOAL_MODULE value
     * @property {number} HEALTH_DATA_DETECTION_MODULE=2010 HEALTH_DATA_DETECTION_MODULE value
     * @property {number} MY_HEALTH_DATA_MODULE=2020 MY_HEALTH_DATA_MODULE value
     * @property {number} DIAL_MODULE=2030 DIAL_MODULE value
     * @property {number} BLUETOOTH_CALL_MODULE=2060 BLUETOOTH_CALL_MODULE value
     * @property {number} SOS_CALL_MODULE=2070 SOS_CALL_MODULE value
     * @property {number} PREFERENCES_MODULE=2080 PREFERENCES_MODULE value
     * @property {number} WORLD_CLOCK=2081 WORLD_CLOCK value
     * @property {number} ALARM_DRINK_WATER_FUNCTION=3001 ALARM_DRINK_WATER_FUNCTION value
     * @property {number} ALARM_FOOD_FUNCTION=3002 ALARM_FOOD_FUNCTION value
     * @property {number} GO_MORE_FUNCTION=3003 GO_MORE_FUNCTION value
     * @property {number} TRAINING_PLAN_FUNCTION=3004 TRAINING_PLAN_FUNCTION value
     */
    device_information.FunctionType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DATA_MANAGEMENT_MODULE"] = 0;
        values[valuesById[1] = "DATA_MANAGEMENT_ACTIVITIES_FUNCTION"] = 1;
        values[valuesById[2] = "DATA_MANAGEMENT_ACTIVITIES_LIST_INFORMATION_FUNCTION"] = 2;
        values[valuesById[3] = "DATA_MANAGEMENT_ROUTES_FUNCTION"] = 3;
        values[valuesById[4] = "DATA_MANAGEMENT_WORKOUTS_FUNCTION"] = 4;
        values[valuesById[5] = "DATA_MANAGEMENT_SYNC_SETTING_FUNCTION"] = 5;
        values[valuesById[6] = "DEVICE_SETTINGS_MODULE"] = 6;
        values[valuesById[7] = "PROMPT_FOR_DELETION_WHEN_THE_DEVICE_ACTIVE_FILE_IS_FULL"] = 7;
        values[valuesById[31] = "NOTIFICATION_MODULE"] = 31;
        values[valuesById[32] = "NOTIFICATION_INCOMING_CALL_FUNCTION"] = 32;
        values[valuesById[33] = "NOTIFICATION_INCOMING_MESSAGE_FUNCTION"] = 33;
        values[valuesById[34] = "NOTIFICATION_APP_FUNCTION"] = 34;
        values[valuesById[35] = "NOTIFICATION_READ_SWITCH_STATUS"] = 35;
        values[valuesById[36] = "NOTIFICATION_SUPPORT_CUSTOM_APP_SWITCH"] = 36;
        values[valuesById[51] = "NAVIGATION_MAP_MODULE"] = 51;
        values[valuesById[71] = "UNIT_MODULE"] = 71;
        values[valuesById[72] = "UNIT_METRIC_FUNCTION"] = 72;
        values[valuesById[73] = "UNIT_IMPERIAL_FUNCTION"] = 73;
        values[valuesById[74] = "UNIT_CUSTOMIZE_FUNCTION"] = 74;
        values[valuesById[91] = "CYCLING_COMPUTER_CONFIG_MODULE"] = 91;
        values[valuesById[92] = "KEY_FUNCTION_SET_SUB_MODULE"] = 92;
        values[valuesById[93] = "AUTO_FUNCTION_SET_SUB_MODULE"] = 93;
        values[valuesById[94] = "AUTO_PAUSE_FUNCTION"] = 94;
        values[valuesById[95] = "AUTO_RECORD_START_FUNCTION"] = 95;
        values[valuesById[96] = "AUTO_POWER_OFF_FUNCTION"] = 96;
        values[valuesById[97] = "AUTO_SLEEP_FUNCTION"] = 97;
        values[valuesById[98] = "AUTO_HOME_PAGE_BACK_FUNCTION"] = 98;
        values[valuesById[99] = "SMART_SAVE_FUNCTION"] = 99;
        values[valuesById[100] = "ALARM_SET_SUB_MODULE"] = 100;
        values[valuesById[101] = "ALARM_RIDE_TIME_FUNCTION"] = 101;
        values[valuesById[102] = "ALARM_RIDE_DISTANCE_FUNCTION"] = 102;
        values[valuesById[103] = "ALARM_HRM_FUNCTION"] = 103;
        values[valuesById[104] = "ALARM_CAD_FUNCTION"] = 104;
        values[valuesById[105] = "ALARM_PWR_FUNCTION"] = 105;
        values[valuesById[106] = "ALARM_CALORIE_FUNCTION"] = 106;
        values[valuesById[107] = "LAP_SET_SUB_MODULE"] = 107;
        values[valuesById[108] = "SOUND_MODULE"] = 108;
        values[valuesById[109] = "SOUND_KEY_FUNCTION"] = 109;
        values[valuesById[110] = "SOUND_BEEP_FUNCTION"] = 110;
        values[valuesById[555] = "SOUND_BEEP_MULTIPLE_CHOICE_FUNCTION"] = 555;
        values[valuesById[111] = "UPLOAD_LOG_MODULE"] = 111;
        values[valuesById[112] = "AUTO_RECORD_START_SUPPORT_THRESHOLD"] = 112;
        values[valuesById[113] = "AUTO_PAUSE_SUPPORT_THRESHOLD"] = 113;
        values[valuesById[114] = "AUTO_FUNCTION_SET_SUB_MODULE_520"] = 114;
        values[valuesById[141] = "WEATHER_TEST_MODULE"] = 141;
        values[valuesById[161] = "ROUTES_MODULE"] = 161;
        values[valuesById[162] = "ROUTE_SUPPORT_DIFFERENCE_ALGORITHM"] = 162;
        values[valuesById[163] = "ROUTE_SUPPORT_ONLY_SINGLE_ROUTE"] = 163;
        values[valuesById[164] = "ROUTE_SUPPORT_AUXILIARY_POINT"] = 164;
        values[valuesById[181] = "BROADCAST_MODULE"] = 181;
        values[valuesById[182] = "GROUP_TRACK_MODULE"] = 182;
        values[valuesById[201] = "SENSORS_MODULE"] = 201;
        values[valuesById[202] = "CRANK_LENGTH_PLUS"] = 202;
        values[valuesById[203] = "POWER_CALIBRATION"] = 203;
        values[valuesById[204] = "SUPPORT_SENSOR_SYNC"] = 204;
        values[valuesById[221] = "FIRMWARE_DETECTION_MODULE"] = 221;
        values[valuesById[251] = "WIFI_MODULE"] = 251;
        values[valuesById[281] = "PAGE_SETTING_MODULE"] = 281;
        values[valuesById[282] = "PAGE_SETTING_NAME_MAPPING"] = 282;
        values[valuesById[283] = "PAGE_COMPASS"] = 283;
        values[valuesById[311] = "TRAINING_MODULE"] = 311;
        values[valuesById[341] = "BIKE_SETTING_MODULE"] = 341;
        values[valuesById[371] = "PERSONAL_SETTINGS_MODULE"] = 371;
        values[valuesById[401] = "FONT_DOWNLOAD_MODULE"] = 401;
        values[valuesById[421] = "ANTI_THEFT_ALARM_MODULE"] = 421;
        values[valuesById[451] = "SEND_WEATHER_INFORMATION_MODULE"] = 451;
        values[valuesById[452] = "SEND_AGPS_MODULE"] = 452;
        values[valuesById[453] = "SEND_USER_INFORMATION_MODULE"] = 453;
        values[valuesById[454] = "SEND_OFFLINE_AGPS_MODULE"] = 454;
        values[valuesById[501] = "REMOVE_DEVICE_MODULE"] = 501;
        values[valuesById[502] = "MODEL_MANAGEMENT_MODULE"] = 502;
        values[valuesById[503] = "EDIT_MODEL_MANAGEMENT_MODULE"] = 503;
        values[valuesById[511] = "THEME_MANAGEMENT_MODULE"] = 511;
        values[valuesById[521] = "DISPLAY_SETTING_MODULE"] = 521;
        values[valuesById[522] = "ALTITUDE_CALIBRATION_MODULE"] = 522;
        values[valuesById[523] = "LOCATION_POINT_MANAGEMENT_MODULE"] = 523;
        values[valuesById[531] = "OTHER_SETTING_MODULE"] = 531;
        values[valuesById[532] = "CALCULATE_AVERAGE_CADENCE_FILTER_0_VALUE"] = 532;
        values[valuesById[533] = "CALCULATE_AVERAGE_POWER_FILTER_0_VALUE"] = 533;
        values[valuesById[534] = "MOTION_STATE_DETECTION"] = 534;
        values[valuesById[535] = "PRESS_TO_SWITCH_SPORT_MODE"] = 535;
        values[valuesById[541] = "AUTO_START_CUSTOM"] = 541;
        values[valuesById[542] = "AUTO_START_ALERT"] = 542;
        values[valuesById[543] = "AUTO_PAGE_SLOW"] = 543;
        values[valuesById[544] = "AUTO_PAGE_NORMAL"] = 544;
        values[valuesById[545] = "POWER_SAVING_MODEL"] = 545;
        values[valuesById[546] = "SMART_POWER_SAVING_FUNCTIONALITY"] = 546;
        values[valuesById[547] = "BLE_MAP_MODULE"] = 547;
        values[valuesById[548] = "ALARM_SPEED_FUNCTION"] = 548;
        values[valuesById[549] = "READ_SN_FUNCTION"] = 549;
        values[valuesById[550] = "HR_DEVICE"] = 550;
        values[valuesById[551] = "SPD_DEVICE"] = 551;
        values[valuesById[552] = "CAD_DEVICE"] = 552;
        values[valuesById[553] = "ADVANCED_HR_DEVICE"] = 553;
        values[valuesById[554] = "RADAR_DEVICE"] = 554;
        values[valuesById[556] = "POWER_MANAGEMENT_MODULE"] = 556;
        values[valuesById[557] = "LIGHT_DEVICE"] = 557;
        values[valuesById[601] = "SUPPORT_STAGE"] = 601;
        values[valuesById[2000] = "VITALITY_GOAL_MODULE"] = 2000;
        values[valuesById[2010] = "HEALTH_DATA_DETECTION_MODULE"] = 2010;
        values[valuesById[2020] = "MY_HEALTH_DATA_MODULE"] = 2020;
        values[valuesById[2030] = "DIAL_MODULE"] = 2030;
        values[valuesById[2060] = "BLUETOOTH_CALL_MODULE"] = 2060;
        values[valuesById[2070] = "SOS_CALL_MODULE"] = 2070;
        values[valuesById[2080] = "PREFERENCES_MODULE"] = 2080;
        values[valuesById[2081] = "WORLD_CLOCK"] = 2081;
        values[valuesById[3001] = "ALARM_DRINK_WATER_FUNCTION"] = 3001;
        values[valuesById[3002] = "ALARM_FOOD_FUNCTION"] = 3002;
        values[valuesById[3003] = "GO_MORE_FUNCTION"] = 3003;
        values[valuesById[3004] = "TRAINING_PLAN_FUNCTION"] = 3004;
        return values;
    })();

    device_information.DeviceInfo = (function() {

        /**
         * Properties of a DeviceInfo.
         * @memberof device_information
         * @interface IDeviceInfo
         * @property {Array.<device_information.IDeviceImage>|null} [deviceImage] DeviceInfo deviceImage
         * @property {string|null} [devName] DeviceInfo devName
         * @property {string|null} [devCustomName] DeviceInfo devCustomName
         * @property {number|null} [generation] DeviceInfo generation
         * @property {boolean|null} [isSupportProtoBuf] DeviceInfo isSupportProtoBuf
         * @property {number|null} [sendFileMtuSize] DeviceInfo sendFileMtuSize
         * @property {number|null} [dataReceiveTimeOut] DeviceInfo dataReceiveTimeOut
         * @property {Array.<device_information.FunctionType>|null} [functionTypeList] DeviceInfo functionTypeList
         * @property {string|null} [manufacturerSpecificData] DeviceInfo manufacturerSpecificData
         * @property {Array.<device_information.IMapManual>|null} [mapManual] DeviceInfo mapManual
         * @property {Array.<device_information.IPagingInformation>|null} [pagingInformation] DeviceInfo pagingInformation
         * @property {boolean|null} [isAccessory] DeviceInfo isAccessory
         * @property {number|null} [ephemerisEffectiveTime] DeviceInfo ephemerisEffectiveTime
         * @property {number|null} [deviceMaxActivityFileNum] DeviceInfo deviceMaxActivityFileNum
         * @property {number|null} [connectionMode] DeviceInfo connectionMode
         * @property {number|null} [androidSupportMinVersion] DeviceInfo androidSupportMinVersion
         * @property {number|null} [upperLimitOfMode] DeviceInfo upperLimitOfMode
         * @property {boolean|null} [isShowRecommendDevice] DeviceInfo isShowRecommendDevice
         * @property {device_information.DeviceCategoryType|null} [deviceCategoryType] DeviceInfo deviceCategoryType
         */

        /**
         * Constructs a new DeviceInfo.
         * @memberof device_information
         * @classdesc Represents a DeviceInfo.
         * @implements IDeviceInfo
         * @constructor
         * @param {device_information.IDeviceInfo=} [properties] Properties to set
         */
        function DeviceInfo(properties) {
            this.deviceImage = [];
            this.functionTypeList = [];
            this.mapManual = [];
            this.pagingInformation = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeviceInfo deviceImage.
         * @member {Array.<device_information.IDeviceImage>} deviceImage
         * @memberof device_information.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.deviceImage = $util.emptyArray;

        /**
         * DeviceInfo devName.
         * @member {string} devName
         * @memberof device_information.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.devName = "";

        /**
         * DeviceInfo devCustomName.
         * @member {string} devCustomName
         * @memberof device_information.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.devCustomName = "";

        /**
         * DeviceInfo generation.
         * @member {number} generation
         * @memberof device_information.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.generation = 0;

        /**
         * DeviceInfo isSupportProtoBuf.
         * @member {boolean} isSupportProtoBuf
         * @memberof device_information.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.isSupportProtoBuf = false;

        /**
         * DeviceInfo sendFileMtuSize.
         * @member {number} sendFileMtuSize
         * @memberof device_information.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.sendFileMtuSize = 0;

        /**
         * DeviceInfo dataReceiveTimeOut.
         * @member {number} dataReceiveTimeOut
         * @memberof device_information.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.dataReceiveTimeOut = 0;

        /**
         * DeviceInfo functionTypeList.
         * @member {Array.<device_information.FunctionType>} functionTypeList
         * @memberof device_information.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.functionTypeList = $util.emptyArray;

        /**
         * DeviceInfo manufacturerSpecificData.
         * @member {string} manufacturerSpecificData
         * @memberof device_information.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.manufacturerSpecificData = "";

        /**
         * DeviceInfo mapManual.
         * @member {Array.<device_information.IMapManual>} mapManual
         * @memberof device_information.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.mapManual = $util.emptyArray;

        /**
         * DeviceInfo pagingInformation.
         * @member {Array.<device_information.IPagingInformation>} pagingInformation
         * @memberof device_information.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.pagingInformation = $util.emptyArray;

        /**
         * DeviceInfo isAccessory.
         * @member {boolean} isAccessory
         * @memberof device_information.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.isAccessory = false;

        /**
         * DeviceInfo ephemerisEffectiveTime.
         * @member {number} ephemerisEffectiveTime
         * @memberof device_information.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.ephemerisEffectiveTime = 0;

        /**
         * DeviceInfo deviceMaxActivityFileNum.
         * @member {number} deviceMaxActivityFileNum
         * @memberof device_information.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.deviceMaxActivityFileNum = 0;

        /**
         * DeviceInfo connectionMode.
         * @member {number} connectionMode
         * @memberof device_information.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.connectionMode = 0;

        /**
         * DeviceInfo androidSupportMinVersion.
         * @member {number} androidSupportMinVersion
         * @memberof device_information.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.androidSupportMinVersion = 0;

        /**
         * DeviceInfo upperLimitOfMode.
         * @member {number} upperLimitOfMode
         * @memberof device_information.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.upperLimitOfMode = 0;

        /**
         * DeviceInfo isShowRecommendDevice.
         * @member {boolean} isShowRecommendDevice
         * @memberof device_information.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.isShowRecommendDevice = false;

        /**
         * DeviceInfo deviceCategoryType.
         * @member {device_information.DeviceCategoryType} deviceCategoryType
         * @memberof device_information.DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.deviceCategoryType = 0;

        /**
         * Creates a new DeviceInfo instance using the specified properties.
         * @function create
         * @memberof device_information.DeviceInfo
         * @static
         * @param {device_information.IDeviceInfo=} [properties] Properties to set
         * @returns {device_information.DeviceInfo} DeviceInfo instance
         */
        DeviceInfo.create = function create(properties) {
            return new DeviceInfo(properties);
        };

        /**
         * Encodes the specified DeviceInfo message. Does not implicitly {@link device_information.DeviceInfo.verify|verify} messages.
         * @function encode
         * @memberof device_information.DeviceInfo
         * @static
         * @param {device_information.IDeviceInfo} message DeviceInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceImage != null && message.deviceImage.length)
                for (let i = 0; i < message.deviceImage.length; ++i)
                    $root.device_information.DeviceImage.encode(message.deviceImage[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.devName != null && Object.hasOwnProperty.call(message, "devName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.devName);
            if (message.devCustomName != null && Object.hasOwnProperty.call(message, "devCustomName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.devCustomName);
            if (message.generation != null && Object.hasOwnProperty.call(message, "generation"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.generation);
            if (message.isSupportProtoBuf != null && Object.hasOwnProperty.call(message, "isSupportProtoBuf"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isSupportProtoBuf);
            if (message.sendFileMtuSize != null && Object.hasOwnProperty.call(message, "sendFileMtuSize"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.sendFileMtuSize);
            if (message.dataReceiveTimeOut != null && Object.hasOwnProperty.call(message, "dataReceiveTimeOut"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.dataReceiveTimeOut);
            if (message.functionTypeList != null && message.functionTypeList.length) {
                writer.uint32(/* id 8, wireType 2 =*/66).fork();
                for (let i = 0; i < message.functionTypeList.length; ++i)
                    writer.int32(message.functionTypeList[i]);
                writer.ldelim();
            }
            if (message.manufacturerSpecificData != null && Object.hasOwnProperty.call(message, "manufacturerSpecificData"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.manufacturerSpecificData);
            if (message.mapManual != null && message.mapManual.length)
                for (let i = 0; i < message.mapManual.length; ++i)
                    $root.device_information.MapManual.encode(message.mapManual[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.pagingInformation != null && message.pagingInformation.length)
                for (let i = 0; i < message.pagingInformation.length; ++i)
                    $root.device_information.PagingInformation.encode(message.pagingInformation[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.isAccessory != null && Object.hasOwnProperty.call(message, "isAccessory"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.isAccessory);
            if (message.ephemerisEffectiveTime != null && Object.hasOwnProperty.call(message, "ephemerisEffectiveTime"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.ephemerisEffectiveTime);
            if (message.deviceMaxActivityFileNum != null && Object.hasOwnProperty.call(message, "deviceMaxActivityFileNum"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.deviceMaxActivityFileNum);
            if (message.connectionMode != null && Object.hasOwnProperty.call(message, "connectionMode"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.connectionMode);
            if (message.androidSupportMinVersion != null && Object.hasOwnProperty.call(message, "androidSupportMinVersion"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.androidSupportMinVersion);
            if (message.upperLimitOfMode != null && Object.hasOwnProperty.call(message, "upperLimitOfMode"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.upperLimitOfMode);
            if (message.isShowRecommendDevice != null && Object.hasOwnProperty.call(message, "isShowRecommendDevice"))
                writer.uint32(/* id 18, wireType 0 =*/144).bool(message.isShowRecommendDevice);
            if (message.deviceCategoryType != null && Object.hasOwnProperty.call(message, "deviceCategoryType"))
                writer.uint32(/* id 19, wireType 0 =*/152).int32(message.deviceCategoryType);
            return writer;
        };

        /**
         * Encodes the specified DeviceInfo message, length delimited. Does not implicitly {@link device_information.DeviceInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof device_information.DeviceInfo
         * @static
         * @param {device_information.IDeviceInfo} message DeviceInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeviceInfo message from the specified reader or buffer.
         * @function decode
         * @memberof device_information.DeviceInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {device_information.DeviceInfo} DeviceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.device_information.DeviceInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.deviceImage && message.deviceImage.length))
                            message.deviceImage = [];
                        message.deviceImage.push($root.device_information.DeviceImage.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.devName = reader.string();
                        break;
                    }
                case 3: {
                        message.devCustomName = reader.string();
                        break;
                    }
                case 4: {
                        message.generation = reader.int32();
                        break;
                    }
                case 5: {
                        message.isSupportProtoBuf = reader.bool();
                        break;
                    }
                case 6: {
                        message.sendFileMtuSize = reader.int32();
                        break;
                    }
                case 7: {
                        message.dataReceiveTimeOut = reader.int32();
                        break;
                    }
                case 8: {
                        if (!(message.functionTypeList && message.functionTypeList.length))
                            message.functionTypeList = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.functionTypeList.push(reader.int32());
                        } else
                            message.functionTypeList.push(reader.int32());
                        break;
                    }
                case 9: {
                        message.manufacturerSpecificData = reader.string();
                        break;
                    }
                case 10: {
                        if (!(message.mapManual && message.mapManual.length))
                            message.mapManual = [];
                        message.mapManual.push($root.device_information.MapManual.decode(reader, reader.uint32()));
                        break;
                    }
                case 11: {
                        if (!(message.pagingInformation && message.pagingInformation.length))
                            message.pagingInformation = [];
                        message.pagingInformation.push($root.device_information.PagingInformation.decode(reader, reader.uint32()));
                        break;
                    }
                case 12: {
                        message.isAccessory = reader.bool();
                        break;
                    }
                case 13: {
                        message.ephemerisEffectiveTime = reader.int32();
                        break;
                    }
                case 14: {
                        message.deviceMaxActivityFileNum = reader.int32();
                        break;
                    }
                case 15: {
                        message.connectionMode = reader.int32();
                        break;
                    }
                case 16: {
                        message.androidSupportMinVersion = reader.int32();
                        break;
                    }
                case 17: {
                        message.upperLimitOfMode = reader.int32();
                        break;
                    }
                case 18: {
                        message.isShowRecommendDevice = reader.bool();
                        break;
                    }
                case 19: {
                        message.deviceCategoryType = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeviceInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof device_information.DeviceInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {device_information.DeviceInfo} DeviceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeviceInfo message.
         * @function verify
         * @memberof device_information.DeviceInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeviceInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceImage != null && message.hasOwnProperty("deviceImage")) {
                if (!Array.isArray(message.deviceImage))
                    return "deviceImage: array expected";
                for (let i = 0; i < message.deviceImage.length; ++i) {
                    let error = $root.device_information.DeviceImage.verify(message.deviceImage[i]);
                    if (error)
                        return "deviceImage." + error;
                }
            }
            if (message.devName != null && message.hasOwnProperty("devName"))
                if (!$util.isString(message.devName))
                    return "devName: string expected";
            if (message.devCustomName != null && message.hasOwnProperty("devCustomName"))
                if (!$util.isString(message.devCustomName))
                    return "devCustomName: string expected";
            if (message.generation != null && message.hasOwnProperty("generation"))
                if (!$util.isInteger(message.generation))
                    return "generation: integer expected";
            if (message.isSupportProtoBuf != null && message.hasOwnProperty("isSupportProtoBuf"))
                if (typeof message.isSupportProtoBuf !== "boolean")
                    return "isSupportProtoBuf: boolean expected";
            if (message.sendFileMtuSize != null && message.hasOwnProperty("sendFileMtuSize"))
                if (!$util.isInteger(message.sendFileMtuSize))
                    return "sendFileMtuSize: integer expected";
            if (message.dataReceiveTimeOut != null && message.hasOwnProperty("dataReceiveTimeOut"))
                if (!$util.isInteger(message.dataReceiveTimeOut))
                    return "dataReceiveTimeOut: integer expected";
            if (message.functionTypeList != null && message.hasOwnProperty("functionTypeList")) {
                if (!Array.isArray(message.functionTypeList))
                    return "functionTypeList: array expected";
                for (let i = 0; i < message.functionTypeList.length; ++i)
                    switch (message.functionTypeList[i]) {
                    default:
                        return "functionTypeList: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 31:
                    case 32:
                    case 33:
                    case 34:
                    case 35:
                    case 36:
                    case 51:
                    case 71:
                    case 72:
                    case 73:
                    case 74:
                    case 91:
                    case 92:
                    case 93:
                    case 94:
                    case 95:
                    case 96:
                    case 97:
                    case 98:
                    case 99:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 104:
                    case 105:
                    case 106:
                    case 107:
                    case 108:
                    case 109:
                    case 110:
                    case 555:
                    case 111:
                    case 112:
                    case 113:
                    case 114:
                    case 141:
                    case 161:
                    case 162:
                    case 163:
                    case 164:
                    case 181:
                    case 182:
                    case 201:
                    case 202:
                    case 203:
                    case 204:
                    case 221:
                    case 251:
                    case 281:
                    case 282:
                    case 283:
                    case 311:
                    case 341:
                    case 371:
                    case 401:
                    case 421:
                    case 451:
                    case 452:
                    case 453:
                    case 454:
                    case 501:
                    case 502:
                    case 503:
                    case 511:
                    case 521:
                    case 522:
                    case 523:
                    case 531:
                    case 532:
                    case 533:
                    case 534:
                    case 535:
                    case 541:
                    case 542:
                    case 543:
                    case 544:
                    case 545:
                    case 546:
                    case 547:
                    case 548:
                    case 549:
                    case 550:
                    case 551:
                    case 552:
                    case 553:
                    case 554:
                    case 556:
                    case 557:
                    case 601:
                    case 2000:
                    case 2010:
                    case 2020:
                    case 2030:
                    case 2060:
                    case 2070:
                    case 2080:
                    case 2081:
                    case 3001:
                    case 3002:
                    case 3003:
                    case 3004:
                        break;
                    }
            }
            if (message.manufacturerSpecificData != null && message.hasOwnProperty("manufacturerSpecificData"))
                if (!$util.isString(message.manufacturerSpecificData))
                    return "manufacturerSpecificData: string expected";
            if (message.mapManual != null && message.hasOwnProperty("mapManual")) {
                if (!Array.isArray(message.mapManual))
                    return "mapManual: array expected";
                for (let i = 0; i < message.mapManual.length; ++i) {
                    let error = $root.device_information.MapManual.verify(message.mapManual[i]);
                    if (error)
                        return "mapManual." + error;
                }
            }
            if (message.pagingInformation != null && message.hasOwnProperty("pagingInformation")) {
                if (!Array.isArray(message.pagingInformation))
                    return "pagingInformation: array expected";
                for (let i = 0; i < message.pagingInformation.length; ++i) {
                    let error = $root.device_information.PagingInformation.verify(message.pagingInformation[i]);
                    if (error)
                        return "pagingInformation." + error;
                }
            }
            if (message.isAccessory != null && message.hasOwnProperty("isAccessory"))
                if (typeof message.isAccessory !== "boolean")
                    return "isAccessory: boolean expected";
            if (message.ephemerisEffectiveTime != null && message.hasOwnProperty("ephemerisEffectiveTime"))
                if (!$util.isInteger(message.ephemerisEffectiveTime))
                    return "ephemerisEffectiveTime: integer expected";
            if (message.deviceMaxActivityFileNum != null && message.hasOwnProperty("deviceMaxActivityFileNum"))
                if (!$util.isInteger(message.deviceMaxActivityFileNum))
                    return "deviceMaxActivityFileNum: integer expected";
            if (message.connectionMode != null && message.hasOwnProperty("connectionMode"))
                if (!$util.isInteger(message.connectionMode))
                    return "connectionMode: integer expected";
            if (message.androidSupportMinVersion != null && message.hasOwnProperty("androidSupportMinVersion"))
                if (!$util.isInteger(message.androidSupportMinVersion))
                    return "androidSupportMinVersion: integer expected";
            if (message.upperLimitOfMode != null && message.hasOwnProperty("upperLimitOfMode"))
                if (!$util.isInteger(message.upperLimitOfMode))
                    return "upperLimitOfMode: integer expected";
            if (message.isShowRecommendDevice != null && message.hasOwnProperty("isShowRecommendDevice"))
                if (typeof message.isShowRecommendDevice !== "boolean")
                    return "isShowRecommendDevice: boolean expected";
            if (message.deviceCategoryType != null && message.hasOwnProperty("deviceCategoryType"))
                switch (message.deviceCategoryType) {
                default:
                    return "deviceCategoryType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a DeviceInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof device_information.DeviceInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {device_information.DeviceInfo} DeviceInfo
         */
        DeviceInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.device_information.DeviceInfo)
                return object;
            let message = new $root.device_information.DeviceInfo();
            if (object.deviceImage) {
                if (!Array.isArray(object.deviceImage))
                    throw TypeError(".device_information.DeviceInfo.deviceImage: array expected");
                message.deviceImage = [];
                for (let i = 0; i < object.deviceImage.length; ++i) {
                    if (typeof object.deviceImage[i] !== "object")
                        throw TypeError(".device_information.DeviceInfo.deviceImage: object expected");
                    message.deviceImage[i] = $root.device_information.DeviceImage.fromObject(object.deviceImage[i]);
                }
            }
            if (object.devName != null)
                message.devName = String(object.devName);
            if (object.devCustomName != null)
                message.devCustomName = String(object.devCustomName);
            if (object.generation != null)
                message.generation = object.generation | 0;
            if (object.isSupportProtoBuf != null)
                message.isSupportProtoBuf = Boolean(object.isSupportProtoBuf);
            if (object.sendFileMtuSize != null)
                message.sendFileMtuSize = object.sendFileMtuSize | 0;
            if (object.dataReceiveTimeOut != null)
                message.dataReceiveTimeOut = object.dataReceiveTimeOut | 0;
            if (object.functionTypeList) {
                if (!Array.isArray(object.functionTypeList))
                    throw TypeError(".device_information.DeviceInfo.functionTypeList: array expected");
                message.functionTypeList = [];
                for (let i = 0; i < object.functionTypeList.length; ++i)
                    switch (object.functionTypeList[i]) {
                    default:
                        if (typeof object.functionTypeList[i] === "number") {
                            message.functionTypeList[i] = object.functionTypeList[i];
                            break;
                        }
                    case "DATA_MANAGEMENT_MODULE":
                    case 0:
                        message.functionTypeList[i] = 0;
                        break;
                    case "DATA_MANAGEMENT_ACTIVITIES_FUNCTION":
                    case 1:
                        message.functionTypeList[i] = 1;
                        break;
                    case "DATA_MANAGEMENT_ACTIVITIES_LIST_INFORMATION_FUNCTION":
                    case 2:
                        message.functionTypeList[i] = 2;
                        break;
                    case "DATA_MANAGEMENT_ROUTES_FUNCTION":
                    case 3:
                        message.functionTypeList[i] = 3;
                        break;
                    case "DATA_MANAGEMENT_WORKOUTS_FUNCTION":
                    case 4:
                        message.functionTypeList[i] = 4;
                        break;
                    case "DATA_MANAGEMENT_SYNC_SETTING_FUNCTION":
                    case 5:
                        message.functionTypeList[i] = 5;
                        break;
                    case "DEVICE_SETTINGS_MODULE":
                    case 6:
                        message.functionTypeList[i] = 6;
                        break;
                    case "PROMPT_FOR_DELETION_WHEN_THE_DEVICE_ACTIVE_FILE_IS_FULL":
                    case 7:
                        message.functionTypeList[i] = 7;
                        break;
                    case "NOTIFICATION_MODULE":
                    case 31:
                        message.functionTypeList[i] = 31;
                        break;
                    case "NOTIFICATION_INCOMING_CALL_FUNCTION":
                    case 32:
                        message.functionTypeList[i] = 32;
                        break;
                    case "NOTIFICATION_INCOMING_MESSAGE_FUNCTION":
                    case 33:
                        message.functionTypeList[i] = 33;
                        break;
                    case "NOTIFICATION_APP_FUNCTION":
                    case 34:
                        message.functionTypeList[i] = 34;
                        break;
                    case "NOTIFICATION_READ_SWITCH_STATUS":
                    case 35:
                        message.functionTypeList[i] = 35;
                        break;
                    case "NOTIFICATION_SUPPORT_CUSTOM_APP_SWITCH":
                    case 36:
                        message.functionTypeList[i] = 36;
                        break;
                    case "NAVIGATION_MAP_MODULE":
                    case 51:
                        message.functionTypeList[i] = 51;
                        break;
                    case "UNIT_MODULE":
                    case 71:
                        message.functionTypeList[i] = 71;
                        break;
                    case "UNIT_METRIC_FUNCTION":
                    case 72:
                        message.functionTypeList[i] = 72;
                        break;
                    case "UNIT_IMPERIAL_FUNCTION":
                    case 73:
                        message.functionTypeList[i] = 73;
                        break;
                    case "UNIT_CUSTOMIZE_FUNCTION":
                    case 74:
                        message.functionTypeList[i] = 74;
                        break;
                    case "CYCLING_COMPUTER_CONFIG_MODULE":
                    case 91:
                        message.functionTypeList[i] = 91;
                        break;
                    case "KEY_FUNCTION_SET_SUB_MODULE":
                    case 92:
                        message.functionTypeList[i] = 92;
                        break;
                    case "AUTO_FUNCTION_SET_SUB_MODULE":
                    case 93:
                        message.functionTypeList[i] = 93;
                        break;
                    case "AUTO_PAUSE_FUNCTION":
                    case 94:
                        message.functionTypeList[i] = 94;
                        break;
                    case "AUTO_RECORD_START_FUNCTION":
                    case 95:
                        message.functionTypeList[i] = 95;
                        break;
                    case "AUTO_POWER_OFF_FUNCTION":
                    case 96:
                        message.functionTypeList[i] = 96;
                        break;
                    case "AUTO_SLEEP_FUNCTION":
                    case 97:
                        message.functionTypeList[i] = 97;
                        break;
                    case "AUTO_HOME_PAGE_BACK_FUNCTION":
                    case 98:
                        message.functionTypeList[i] = 98;
                        break;
                    case "SMART_SAVE_FUNCTION":
                    case 99:
                        message.functionTypeList[i] = 99;
                        break;
                    case "ALARM_SET_SUB_MODULE":
                    case 100:
                        message.functionTypeList[i] = 100;
                        break;
                    case "ALARM_RIDE_TIME_FUNCTION":
                    case 101:
                        message.functionTypeList[i] = 101;
                        break;
                    case "ALARM_RIDE_DISTANCE_FUNCTION":
                    case 102:
                        message.functionTypeList[i] = 102;
                        break;
                    case "ALARM_HRM_FUNCTION":
                    case 103:
                        message.functionTypeList[i] = 103;
                        break;
                    case "ALARM_CAD_FUNCTION":
                    case 104:
                        message.functionTypeList[i] = 104;
                        break;
                    case "ALARM_PWR_FUNCTION":
                    case 105:
                        message.functionTypeList[i] = 105;
                        break;
                    case "ALARM_CALORIE_FUNCTION":
                    case 106:
                        message.functionTypeList[i] = 106;
                        break;
                    case "LAP_SET_SUB_MODULE":
                    case 107:
                        message.functionTypeList[i] = 107;
                        break;
                    case "SOUND_MODULE":
                    case 108:
                        message.functionTypeList[i] = 108;
                        break;
                    case "SOUND_KEY_FUNCTION":
                    case 109:
                        message.functionTypeList[i] = 109;
                        break;
                    case "SOUND_BEEP_FUNCTION":
                    case 110:
                        message.functionTypeList[i] = 110;
                        break;
                    case "SOUND_BEEP_MULTIPLE_CHOICE_FUNCTION":
                    case 555:
                        message.functionTypeList[i] = 555;
                        break;
                    case "UPLOAD_LOG_MODULE":
                    case 111:
                        message.functionTypeList[i] = 111;
                        break;
                    case "AUTO_RECORD_START_SUPPORT_THRESHOLD":
                    case 112:
                        message.functionTypeList[i] = 112;
                        break;
                    case "AUTO_PAUSE_SUPPORT_THRESHOLD":
                    case 113:
                        message.functionTypeList[i] = 113;
                        break;
                    case "AUTO_FUNCTION_SET_SUB_MODULE_520":
                    case 114:
                        message.functionTypeList[i] = 114;
                        break;
                    case "WEATHER_TEST_MODULE":
                    case 141:
                        message.functionTypeList[i] = 141;
                        break;
                    case "ROUTES_MODULE":
                    case 161:
                        message.functionTypeList[i] = 161;
                        break;
                    case "ROUTE_SUPPORT_DIFFERENCE_ALGORITHM":
                    case 162:
                        message.functionTypeList[i] = 162;
                        break;
                    case "ROUTE_SUPPORT_ONLY_SINGLE_ROUTE":
                    case 163:
                        message.functionTypeList[i] = 163;
                        break;
                    case "ROUTE_SUPPORT_AUXILIARY_POINT":
                    case 164:
                        message.functionTypeList[i] = 164;
                        break;
                    case "BROADCAST_MODULE":
                    case 181:
                        message.functionTypeList[i] = 181;
                        break;
                    case "GROUP_TRACK_MODULE":
                    case 182:
                        message.functionTypeList[i] = 182;
                        break;
                    case "SENSORS_MODULE":
                    case 201:
                        message.functionTypeList[i] = 201;
                        break;
                    case "CRANK_LENGTH_PLUS":
                    case 202:
                        message.functionTypeList[i] = 202;
                        break;
                    case "POWER_CALIBRATION":
                    case 203:
                        message.functionTypeList[i] = 203;
                        break;
                    case "SUPPORT_SENSOR_SYNC":
                    case 204:
                        message.functionTypeList[i] = 204;
                        break;
                    case "FIRMWARE_DETECTION_MODULE":
                    case 221:
                        message.functionTypeList[i] = 221;
                        break;
                    case "WIFI_MODULE":
                    case 251:
                        message.functionTypeList[i] = 251;
                        break;
                    case "PAGE_SETTING_MODULE":
                    case 281:
                        message.functionTypeList[i] = 281;
                        break;
                    case "PAGE_SETTING_NAME_MAPPING":
                    case 282:
                        message.functionTypeList[i] = 282;
                        break;
                    case "PAGE_COMPASS":
                    case 283:
                        message.functionTypeList[i] = 283;
                        break;
                    case "TRAINING_MODULE":
                    case 311:
                        message.functionTypeList[i] = 311;
                        break;
                    case "BIKE_SETTING_MODULE":
                    case 341:
                        message.functionTypeList[i] = 341;
                        break;
                    case "PERSONAL_SETTINGS_MODULE":
                    case 371:
                        message.functionTypeList[i] = 371;
                        break;
                    case "FONT_DOWNLOAD_MODULE":
                    case 401:
                        message.functionTypeList[i] = 401;
                        break;
                    case "ANTI_THEFT_ALARM_MODULE":
                    case 421:
                        message.functionTypeList[i] = 421;
                        break;
                    case "SEND_WEATHER_INFORMATION_MODULE":
                    case 451:
                        message.functionTypeList[i] = 451;
                        break;
                    case "SEND_AGPS_MODULE":
                    case 452:
                        message.functionTypeList[i] = 452;
                        break;
                    case "SEND_USER_INFORMATION_MODULE":
                    case 453:
                        message.functionTypeList[i] = 453;
                        break;
                    case "SEND_OFFLINE_AGPS_MODULE":
                    case 454:
                        message.functionTypeList[i] = 454;
                        break;
                    case "REMOVE_DEVICE_MODULE":
                    case 501:
                        message.functionTypeList[i] = 501;
                        break;
                    case "MODEL_MANAGEMENT_MODULE":
                    case 502:
                        message.functionTypeList[i] = 502;
                        break;
                    case "EDIT_MODEL_MANAGEMENT_MODULE":
                    case 503:
                        message.functionTypeList[i] = 503;
                        break;
                    case "THEME_MANAGEMENT_MODULE":
                    case 511:
                        message.functionTypeList[i] = 511;
                        break;
                    case "DISPLAY_SETTING_MODULE":
                    case 521:
                        message.functionTypeList[i] = 521;
                        break;
                    case "ALTITUDE_CALIBRATION_MODULE":
                    case 522:
                        message.functionTypeList[i] = 522;
                        break;
                    case "LOCATION_POINT_MANAGEMENT_MODULE":
                    case 523:
                        message.functionTypeList[i] = 523;
                        break;
                    case "OTHER_SETTING_MODULE":
                    case 531:
                        message.functionTypeList[i] = 531;
                        break;
                    case "CALCULATE_AVERAGE_CADENCE_FILTER_0_VALUE":
                    case 532:
                        message.functionTypeList[i] = 532;
                        break;
                    case "CALCULATE_AVERAGE_POWER_FILTER_0_VALUE":
                    case 533:
                        message.functionTypeList[i] = 533;
                        break;
                    case "MOTION_STATE_DETECTION":
                    case 534:
                        message.functionTypeList[i] = 534;
                        break;
                    case "PRESS_TO_SWITCH_SPORT_MODE":
                    case 535:
                        message.functionTypeList[i] = 535;
                        break;
                    case "AUTO_START_CUSTOM":
                    case 541:
                        message.functionTypeList[i] = 541;
                        break;
                    case "AUTO_START_ALERT":
                    case 542:
                        message.functionTypeList[i] = 542;
                        break;
                    case "AUTO_PAGE_SLOW":
                    case 543:
                        message.functionTypeList[i] = 543;
                        break;
                    case "AUTO_PAGE_NORMAL":
                    case 544:
                        message.functionTypeList[i] = 544;
                        break;
                    case "POWER_SAVING_MODEL":
                    case 545:
                        message.functionTypeList[i] = 545;
                        break;
                    case "SMART_POWER_SAVING_FUNCTIONALITY":
                    case 546:
                        message.functionTypeList[i] = 546;
                        break;
                    case "BLE_MAP_MODULE":
                    case 547:
                        message.functionTypeList[i] = 547;
                        break;
                    case "ALARM_SPEED_FUNCTION":
                    case 548:
                        message.functionTypeList[i] = 548;
                        break;
                    case "READ_SN_FUNCTION":
                    case 549:
                        message.functionTypeList[i] = 549;
                        break;
                    case "HR_DEVICE":
                    case 550:
                        message.functionTypeList[i] = 550;
                        break;
                    case "SPD_DEVICE":
                    case 551:
                        message.functionTypeList[i] = 551;
                        break;
                    case "CAD_DEVICE":
                    case 552:
                        message.functionTypeList[i] = 552;
                        break;
                    case "ADVANCED_HR_DEVICE":
                    case 553:
                        message.functionTypeList[i] = 553;
                        break;
                    case "RADAR_DEVICE":
                    case 554:
                        message.functionTypeList[i] = 554;
                        break;
                    case "POWER_MANAGEMENT_MODULE":
                    case 556:
                        message.functionTypeList[i] = 556;
                        break;
                    case "LIGHT_DEVICE":
                    case 557:
                        message.functionTypeList[i] = 557;
                        break;
                    case "SUPPORT_STAGE":
                    case 601:
                        message.functionTypeList[i] = 601;
                        break;
                    case "VITALITY_GOAL_MODULE":
                    case 2000:
                        message.functionTypeList[i] = 2000;
                        break;
                    case "HEALTH_DATA_DETECTION_MODULE":
                    case 2010:
                        message.functionTypeList[i] = 2010;
                        break;
                    case "MY_HEALTH_DATA_MODULE":
                    case 2020:
                        message.functionTypeList[i] = 2020;
                        break;
                    case "DIAL_MODULE":
                    case 2030:
                        message.functionTypeList[i] = 2030;
                        break;
                    case "BLUETOOTH_CALL_MODULE":
                    case 2060:
                        message.functionTypeList[i] = 2060;
                        break;
                    case "SOS_CALL_MODULE":
                    case 2070:
                        message.functionTypeList[i] = 2070;
                        break;
                    case "PREFERENCES_MODULE":
                    case 2080:
                        message.functionTypeList[i] = 2080;
                        break;
                    case "WORLD_CLOCK":
                    case 2081:
                        message.functionTypeList[i] = 2081;
                        break;
                    case "ALARM_DRINK_WATER_FUNCTION":
                    case 3001:
                        message.functionTypeList[i] = 3001;
                        break;
                    case "ALARM_FOOD_FUNCTION":
                    case 3002:
                        message.functionTypeList[i] = 3002;
                        break;
                    case "GO_MORE_FUNCTION":
                    case 3003:
                        message.functionTypeList[i] = 3003;
                        break;
                    case "TRAINING_PLAN_FUNCTION":
                    case 3004:
                        message.functionTypeList[i] = 3004;
                        break;
                    }
            }
            if (object.manufacturerSpecificData != null)
                message.manufacturerSpecificData = String(object.manufacturerSpecificData);
            if (object.mapManual) {
                if (!Array.isArray(object.mapManual))
                    throw TypeError(".device_information.DeviceInfo.mapManual: array expected");
                message.mapManual = [];
                for (let i = 0; i < object.mapManual.length; ++i) {
                    if (typeof object.mapManual[i] !== "object")
                        throw TypeError(".device_information.DeviceInfo.mapManual: object expected");
                    message.mapManual[i] = $root.device_information.MapManual.fromObject(object.mapManual[i]);
                }
            }
            if (object.pagingInformation) {
                if (!Array.isArray(object.pagingInformation))
                    throw TypeError(".device_information.DeviceInfo.pagingInformation: array expected");
                message.pagingInformation = [];
                for (let i = 0; i < object.pagingInformation.length; ++i) {
                    if (typeof object.pagingInformation[i] !== "object")
                        throw TypeError(".device_information.DeviceInfo.pagingInformation: object expected");
                    message.pagingInformation[i] = $root.device_information.PagingInformation.fromObject(object.pagingInformation[i]);
                }
            }
            if (object.isAccessory != null)
                message.isAccessory = Boolean(object.isAccessory);
            if (object.ephemerisEffectiveTime != null)
                message.ephemerisEffectiveTime = object.ephemerisEffectiveTime | 0;
            if (object.deviceMaxActivityFileNum != null)
                message.deviceMaxActivityFileNum = object.deviceMaxActivityFileNum | 0;
            if (object.connectionMode != null)
                message.connectionMode = object.connectionMode | 0;
            if (object.androidSupportMinVersion != null)
                message.androidSupportMinVersion = object.androidSupportMinVersion | 0;
            if (object.upperLimitOfMode != null)
                message.upperLimitOfMode = object.upperLimitOfMode | 0;
            if (object.isShowRecommendDevice != null)
                message.isShowRecommendDevice = Boolean(object.isShowRecommendDevice);
            switch (object.deviceCategoryType) {
            default:
                if (typeof object.deviceCategoryType === "number") {
                    message.deviceCategoryType = object.deviceCategoryType;
                    break;
                }
                break;
            case "DEVICE_CYCLE_COMPUTER":
            case 0:
                message.deviceCategoryType = 0;
                break;
            case "DEVICE_ACCESSORY":
            case 1:
                message.deviceCategoryType = 1;
                break;
            case "DEVICE_WATCH":
            case 2:
                message.deviceCategoryType = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a DeviceInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof device_information.DeviceInfo
         * @static
         * @param {device_information.DeviceInfo} message DeviceInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeviceInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.deviceImage = [];
                object.functionTypeList = [];
                object.mapManual = [];
                object.pagingInformation = [];
            }
            if (options.defaults) {
                object.devName = "";
                object.devCustomName = "";
                object.generation = 0;
                object.isSupportProtoBuf = false;
                object.sendFileMtuSize = 0;
                object.dataReceiveTimeOut = 0;
                object.manufacturerSpecificData = "";
                object.isAccessory = false;
                object.ephemerisEffectiveTime = 0;
                object.deviceMaxActivityFileNum = 0;
                object.connectionMode = 0;
                object.androidSupportMinVersion = 0;
                object.upperLimitOfMode = 0;
                object.isShowRecommendDevice = false;
                object.deviceCategoryType = options.enums === String ? "DEVICE_CYCLE_COMPUTER" : 0;
            }
            if (message.deviceImage && message.deviceImage.length) {
                object.deviceImage = [];
                for (let j = 0; j < message.deviceImage.length; ++j)
                    object.deviceImage[j] = $root.device_information.DeviceImage.toObject(message.deviceImage[j], options);
            }
            if (message.devName != null && message.hasOwnProperty("devName"))
                object.devName = message.devName;
            if (message.devCustomName != null && message.hasOwnProperty("devCustomName"))
                object.devCustomName = message.devCustomName;
            if (message.generation != null && message.hasOwnProperty("generation"))
                object.generation = message.generation;
            if (message.isSupportProtoBuf != null && message.hasOwnProperty("isSupportProtoBuf"))
                object.isSupportProtoBuf = message.isSupportProtoBuf;
            if (message.sendFileMtuSize != null && message.hasOwnProperty("sendFileMtuSize"))
                object.sendFileMtuSize = message.sendFileMtuSize;
            if (message.dataReceiveTimeOut != null && message.hasOwnProperty("dataReceiveTimeOut"))
                object.dataReceiveTimeOut = message.dataReceiveTimeOut;
            if (message.functionTypeList && message.functionTypeList.length) {
                object.functionTypeList = [];
                for (let j = 0; j < message.functionTypeList.length; ++j)
                    object.functionTypeList[j] = options.enums === String ? $root.device_information.FunctionType[message.functionTypeList[j]] === undefined ? message.functionTypeList[j] : $root.device_information.FunctionType[message.functionTypeList[j]] : message.functionTypeList[j];
            }
            if (message.manufacturerSpecificData != null && message.hasOwnProperty("manufacturerSpecificData"))
                object.manufacturerSpecificData = message.manufacturerSpecificData;
            if (message.mapManual && message.mapManual.length) {
                object.mapManual = [];
                for (let j = 0; j < message.mapManual.length; ++j)
                    object.mapManual[j] = $root.device_information.MapManual.toObject(message.mapManual[j], options);
            }
            if (message.pagingInformation && message.pagingInformation.length) {
                object.pagingInformation = [];
                for (let j = 0; j < message.pagingInformation.length; ++j)
                    object.pagingInformation[j] = $root.device_information.PagingInformation.toObject(message.pagingInformation[j], options);
            }
            if (message.isAccessory != null && message.hasOwnProperty("isAccessory"))
                object.isAccessory = message.isAccessory;
            if (message.ephemerisEffectiveTime != null && message.hasOwnProperty("ephemerisEffectiveTime"))
                object.ephemerisEffectiveTime = message.ephemerisEffectiveTime;
            if (message.deviceMaxActivityFileNum != null && message.hasOwnProperty("deviceMaxActivityFileNum"))
                object.deviceMaxActivityFileNum = message.deviceMaxActivityFileNum;
            if (message.connectionMode != null && message.hasOwnProperty("connectionMode"))
                object.connectionMode = message.connectionMode;
            if (message.androidSupportMinVersion != null && message.hasOwnProperty("androidSupportMinVersion"))
                object.androidSupportMinVersion = message.androidSupportMinVersion;
            if (message.upperLimitOfMode != null && message.hasOwnProperty("upperLimitOfMode"))
                object.upperLimitOfMode = message.upperLimitOfMode;
            if (message.isShowRecommendDevice != null && message.hasOwnProperty("isShowRecommendDevice"))
                object.isShowRecommendDevice = message.isShowRecommendDevice;
            if (message.deviceCategoryType != null && message.hasOwnProperty("deviceCategoryType"))
                object.deviceCategoryType = options.enums === String ? $root.device_information.DeviceCategoryType[message.deviceCategoryType] === undefined ? message.deviceCategoryType : $root.device_information.DeviceCategoryType[message.deviceCategoryType] : message.deviceCategoryType;
            return object;
        };

        /**
         * Converts this DeviceInfo to JSON.
         * @function toJSON
         * @memberof device_information.DeviceInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeviceInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeviceInfo
         * @function getTypeUrl
         * @memberof device_information.DeviceInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeviceInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/device_information.DeviceInfo";
        };

        return DeviceInfo;
    })();

    device_information.MapManual = (function() {

        /**
         * Properties of a MapManual.
         * @memberof device_information
         * @interface IMapManual
         * @property {device_information.MapManual.ManualType|null} [manualType] MapManual manualType
         * @property {string|null} [url] MapManual url
         */

        /**
         * Constructs a new MapManual.
         * @memberof device_information
         * @classdesc Represents a MapManual.
         * @implements IMapManual
         * @constructor
         * @param {device_information.IMapManual=} [properties] Properties to set
         */
        function MapManual(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MapManual manualType.
         * @member {device_information.MapManual.ManualType} manualType
         * @memberof device_information.MapManual
         * @instance
         */
        MapManual.prototype.manualType = 0;

        /**
         * MapManual url.
         * @member {string} url
         * @memberof device_information.MapManual
         * @instance
         */
        MapManual.prototype.url = "";

        /**
         * Creates a new MapManual instance using the specified properties.
         * @function create
         * @memberof device_information.MapManual
         * @static
         * @param {device_information.IMapManual=} [properties] Properties to set
         * @returns {device_information.MapManual} MapManual instance
         */
        MapManual.create = function create(properties) {
            return new MapManual(properties);
        };

        /**
         * Encodes the specified MapManual message. Does not implicitly {@link device_information.MapManual.verify|verify} messages.
         * @function encode
         * @memberof device_information.MapManual
         * @static
         * @param {device_information.IMapManual} message MapManual message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MapManual.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.manualType != null && Object.hasOwnProperty.call(message, "manualType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.manualType);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            return writer;
        };

        /**
         * Encodes the specified MapManual message, length delimited. Does not implicitly {@link device_information.MapManual.verify|verify} messages.
         * @function encodeDelimited
         * @memberof device_information.MapManual
         * @static
         * @param {device_information.IMapManual} message MapManual message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MapManual.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MapManual message from the specified reader or buffer.
         * @function decode
         * @memberof device_information.MapManual
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {device_information.MapManual} MapManual
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MapManual.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.device_information.MapManual();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.manualType = reader.int32();
                        break;
                    }
                case 2: {
                        message.url = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MapManual message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof device_information.MapManual
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {device_information.MapManual} MapManual
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MapManual.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MapManual message.
         * @function verify
         * @memberof device_information.MapManual
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MapManual.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.manualType != null && message.hasOwnProperty("manualType"))
                switch (message.manualType) {
                default:
                    return "manualType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };

        /**
         * Creates a MapManual message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof device_information.MapManual
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {device_information.MapManual} MapManual
         */
        MapManual.fromObject = function fromObject(object) {
            if (object instanceof $root.device_information.MapManual)
                return object;
            let message = new $root.device_information.MapManual();
            switch (object.manualType) {
            default:
                if (typeof object.manualType === "number") {
                    message.manualType = object.manualType;
                    break;
                }
                break;
            case "INVALID":
            case 0:
                message.manualType = 0;
                break;
            case "UNBIND":
            case 1:
                message.manualType = 1;
                break;
            case "CONNECT_HELP":
            case 2:
                message.manualType = 2;
                break;
            }
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };

        /**
         * Creates a plain object from a MapManual message. Also converts values to other types if specified.
         * @function toObject
         * @memberof device_information.MapManual
         * @static
         * @param {device_information.MapManual} message MapManual
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MapManual.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.manualType = options.enums === String ? "INVALID" : 0;
                object.url = "";
            }
            if (message.manualType != null && message.hasOwnProperty("manualType"))
                object.manualType = options.enums === String ? $root.device_information.MapManual.ManualType[message.manualType] === undefined ? message.manualType : $root.device_information.MapManual.ManualType[message.manualType] : message.manualType;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };

        /**
         * Converts this MapManual to JSON.
         * @function toJSON
         * @memberof device_information.MapManual
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MapManual.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MapManual
         * @function getTypeUrl
         * @memberof device_information.MapManual
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MapManual.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/device_information.MapManual";
        };

        /**
         * ManualType enum.
         * @name device_information.MapManual.ManualType
         * @enum {number}
         * @property {number} INVALID=0 INVALID value
         * @property {number} UNBIND=1 UNBIND value
         * @property {number} CONNECT_HELP=2 CONNECT_HELP value
         */
        MapManual.ManualType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "INVALID"] = 0;
            values[valuesById[1] = "UNBIND"] = 1;
            values[valuesById[2] = "CONNECT_HELP"] = 2;
            return values;
        })();

        return MapManual;
    })();

    device_information.DeviceImage = (function() {

        /**
         * Properties of a DeviceImage.
         * @memberof device_information
         * @interface IDeviceImage
         * @property {device_information.DeviceImage.ImageType|null} [imageType] DeviceImage imageType
         * @property {string|null} [url] DeviceImage url
         */

        /**
         * Constructs a new DeviceImage.
         * @memberof device_information
         * @classdesc Represents a DeviceImage.
         * @implements IDeviceImage
         * @constructor
         * @param {device_information.IDeviceImage=} [properties] Properties to set
         */
        function DeviceImage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeviceImage imageType.
         * @member {device_information.DeviceImage.ImageType} imageType
         * @memberof device_information.DeviceImage
         * @instance
         */
        DeviceImage.prototype.imageType = 0;

        /**
         * DeviceImage url.
         * @member {string} url
         * @memberof device_information.DeviceImage
         * @instance
         */
        DeviceImage.prototype.url = "";

        /**
         * Creates a new DeviceImage instance using the specified properties.
         * @function create
         * @memberof device_information.DeviceImage
         * @static
         * @param {device_information.IDeviceImage=} [properties] Properties to set
         * @returns {device_information.DeviceImage} DeviceImage instance
         */
        DeviceImage.create = function create(properties) {
            return new DeviceImage(properties);
        };

        /**
         * Encodes the specified DeviceImage message. Does not implicitly {@link device_information.DeviceImage.verify|verify} messages.
         * @function encode
         * @memberof device_information.DeviceImage
         * @static
         * @param {device_information.IDeviceImage} message DeviceImage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceImage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.imageType != null && Object.hasOwnProperty.call(message, "imageType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.imageType);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            return writer;
        };

        /**
         * Encodes the specified DeviceImage message, length delimited. Does not implicitly {@link device_information.DeviceImage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof device_information.DeviceImage
         * @static
         * @param {device_information.IDeviceImage} message DeviceImage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceImage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeviceImage message from the specified reader or buffer.
         * @function decode
         * @memberof device_information.DeviceImage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {device_information.DeviceImage} DeviceImage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceImage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.device_information.DeviceImage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.imageType = reader.int32();
                        break;
                    }
                case 2: {
                        message.url = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeviceImage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof device_information.DeviceImage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {device_information.DeviceImage} DeviceImage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceImage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeviceImage message.
         * @function verify
         * @memberof device_information.DeviceImage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeviceImage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.imageType != null && message.hasOwnProperty("imageType"))
                switch (message.imageType) {
                default:
                    return "imageType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };

        /**
         * Creates a DeviceImage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof device_information.DeviceImage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {device_information.DeviceImage} DeviceImage
         */
        DeviceImage.fromObject = function fromObject(object) {
            if (object instanceof $root.device_information.DeviceImage)
                return object;
            let message = new $root.device_information.DeviceImage();
            switch (object.imageType) {
            default:
                if (typeof object.imageType === "number") {
                    message.imageType = object.imageType;
                    break;
                }
                break;
            case "INVALID":
            case 0:
                message.imageType = 0;
                break;
            case "BIG":
            case 1:
                message.imageType = 1;
                break;
            case "SMALL":
            case 2:
                message.imageType = 2;
                break;
            case "BACKGROUND_IN_PAGE_SETTING":
            case 3:
                message.imageType = 3;
                break;
            case "DFU":
            case 4:
                message.imageType = 4;
                break;
            case "UNBINDING_ANIMATION":
            case 5:
                message.imageType = 5;
                break;
            }
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };

        /**
         * Creates a plain object from a DeviceImage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof device_information.DeviceImage
         * @static
         * @param {device_information.DeviceImage} message DeviceImage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeviceImage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.imageType = options.enums === String ? "INVALID" : 0;
                object.url = "";
            }
            if (message.imageType != null && message.hasOwnProperty("imageType"))
                object.imageType = options.enums === String ? $root.device_information.DeviceImage.ImageType[message.imageType] === undefined ? message.imageType : $root.device_information.DeviceImage.ImageType[message.imageType] : message.imageType;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };

        /**
         * Converts this DeviceImage to JSON.
         * @function toJSON
         * @memberof device_information.DeviceImage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeviceImage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeviceImage
         * @function getTypeUrl
         * @memberof device_information.DeviceImage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeviceImage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/device_information.DeviceImage";
        };

        /**
         * ImageType enum.
         * @name device_information.DeviceImage.ImageType
         * @enum {number}
         * @property {number} INVALID=0 INVALID value
         * @property {number} BIG=1 BIG value
         * @property {number} SMALL=2 SMALL value
         * @property {number} BACKGROUND_IN_PAGE_SETTING=3 BACKGROUND_IN_PAGE_SETTING value
         * @property {number} DFU=4 DFU value
         * @property {number} UNBINDING_ANIMATION=5 UNBINDING_ANIMATION value
         */
        DeviceImage.ImageType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "INVALID"] = 0;
            values[valuesById[1] = "BIG"] = 1;
            values[valuesById[2] = "SMALL"] = 2;
            values[valuesById[3] = "BACKGROUND_IN_PAGE_SETTING"] = 3;
            values[valuesById[4] = "DFU"] = 4;
            values[valuesById[5] = "UNBINDING_ANIMATION"] = 5;
            return values;
        })();

        return DeviceImage;
    })();

    device_information.PagingInformation = (function() {

        /**
         * Properties of a PagingInformation.
         * @memberof device_information
         * @interface IPagingInformation
         * @property {device_information.PagingInformation.Function|null} ["function"] PagingInformation function
         * @property {boolean|null} [isSupportPaging] PagingInformation isSupportPaging
         */

        /**
         * Constructs a new PagingInformation.
         * @memberof device_information
         * @classdesc Represents a PagingInformation.
         * @implements IPagingInformation
         * @constructor
         * @param {device_information.IPagingInformation=} [properties] Properties to set
         */
        function PagingInformation(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PagingInformation function.
         * @member {device_information.PagingInformation.Function} function
         * @memberof device_information.PagingInformation
         * @instance
         */
        PagingInformation.prototype["function"] = 0;

        /**
         * PagingInformation isSupportPaging.
         * @member {boolean} isSupportPaging
         * @memberof device_information.PagingInformation
         * @instance
         */
        PagingInformation.prototype.isSupportPaging = false;

        /**
         * Creates a new PagingInformation instance using the specified properties.
         * @function create
         * @memberof device_information.PagingInformation
         * @static
         * @param {device_information.IPagingInformation=} [properties] Properties to set
         * @returns {device_information.PagingInformation} PagingInformation instance
         */
        PagingInformation.create = function create(properties) {
            return new PagingInformation(properties);
        };

        /**
         * Encodes the specified PagingInformation message. Does not implicitly {@link device_information.PagingInformation.verify|verify} messages.
         * @function encode
         * @memberof device_information.PagingInformation
         * @static
         * @param {device_information.IPagingInformation} message PagingInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PagingInformation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message["function"] != null && Object.hasOwnProperty.call(message, "function"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message["function"]);
            if (message.isSupportPaging != null && Object.hasOwnProperty.call(message, "isSupportPaging"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isSupportPaging);
            return writer;
        };

        /**
         * Encodes the specified PagingInformation message, length delimited. Does not implicitly {@link device_information.PagingInformation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof device_information.PagingInformation
         * @static
         * @param {device_information.IPagingInformation} message PagingInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PagingInformation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PagingInformation message from the specified reader or buffer.
         * @function decode
         * @memberof device_information.PagingInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {device_information.PagingInformation} PagingInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PagingInformation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.device_information.PagingInformation();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message["function"] = reader.int32();
                        break;
                    }
                case 2: {
                        message.isSupportPaging = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PagingInformation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof device_information.PagingInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {device_information.PagingInformation} PagingInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PagingInformation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PagingInformation message.
         * @function verify
         * @memberof device_information.PagingInformation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PagingInformation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message["function"] != null && message.hasOwnProperty("function"))
                switch (message["function"]) {
                default:
                    return "function: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.isSupportPaging != null && message.hasOwnProperty("isSupportPaging"))
                if (typeof message.isSupportPaging !== "boolean")
                    return "isSupportPaging: boolean expected";
            return null;
        };

        /**
         * Creates a PagingInformation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof device_information.PagingInformation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {device_information.PagingInformation} PagingInformation
         */
        PagingInformation.fromObject = function fromObject(object) {
            if (object instanceof $root.device_information.PagingInformation)
                return object;
            let message = new $root.device_information.PagingInformation();
            switch (object["function"]) {
            default:
                if (typeof object["function"] === "number") {
                    message["function"] = object["function"];
                    break;
                }
                break;
            case "INVALID":
            case 0:
                message["function"] = 0;
                break;
            case "ACTIVITIES":
            case 1:
                message["function"] = 1;
                break;
            case "ROUTES":
            case 2:
                message["function"] = 2;
                break;
            case "WORKOUTS":
            case 3:
                message["function"] = 3;
                break;
            }
            if (object.isSupportPaging != null)
                message.isSupportPaging = Boolean(object.isSupportPaging);
            return message;
        };

        /**
         * Creates a plain object from a PagingInformation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof device_information.PagingInformation
         * @static
         * @param {device_information.PagingInformation} message PagingInformation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PagingInformation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object["function"] = options.enums === String ? "INVALID" : 0;
                object.isSupportPaging = false;
            }
            if (message["function"] != null && message.hasOwnProperty("function"))
                object["function"] = options.enums === String ? $root.device_information.PagingInformation.Function[message["function"]] === undefined ? message["function"] : $root.device_information.PagingInformation.Function[message["function"]] : message["function"];
            if (message.isSupportPaging != null && message.hasOwnProperty("isSupportPaging"))
                object.isSupportPaging = message.isSupportPaging;
            return object;
        };

        /**
         * Converts this PagingInformation to JSON.
         * @function toJSON
         * @memberof device_information.PagingInformation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PagingInformation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PagingInformation
         * @function getTypeUrl
         * @memberof device_information.PagingInformation
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PagingInformation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/device_information.PagingInformation";
        };

        /**
         * Function enum.
         * @name device_information.PagingInformation.Function
         * @enum {number}
         * @property {number} INVALID=0 INVALID value
         * @property {number} ACTIVITIES=1 ACTIVITIES value
         * @property {number} ROUTES=2 ROUTES value
         * @property {number} WORKOUTS=3 WORKOUTS value
         */
        PagingInformation.Function = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "INVALID"] = 0;
            values[valuesById[1] = "ACTIVITIES"] = 1;
            values[valuesById[2] = "ROUTES"] = 2;
            values[valuesById[3] = "WORKOUTS"] = 3;
            return values;
        })();

        return PagingInformation;
    })();

    return device_information;
})();

export { $root as default };
