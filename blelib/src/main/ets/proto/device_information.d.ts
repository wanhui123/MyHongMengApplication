import * as $protobuf from "@ohos/protobufjs";
import Long = require("long");
/** Namespace device_information. */
export namespace device_information {

    /** DeviceCategoryType enum. */
    enum DeviceCategoryType {
        DEVICE_CYCLE_COMPUTER = 0,
        DEVICE_ACCESSORY = 1,
        DEVICE_WATCH = 2
    }

    /** FunctionType enum. */
    enum FunctionType {
        DATA_MANAGEMENT_MODULE = 0,
        DATA_MANAGEMENT_ACTIVITIES_FUNCTION = 1,
        DATA_MANAGEMENT_ACTIVITIES_LIST_INFORMATION_FUNCTION = 2,
        DATA_MANAGEMENT_ROUTES_FUNCTION = 3,
        DATA_MANAGEMENT_WORKOUTS_FUNCTION = 4,
        DATA_MANAGEMENT_SYNC_SETTING_FUNCTION = 5,
        DEVICE_SETTINGS_MODULE = 6,
        PROMPT_FOR_DELETION_WHEN_THE_DEVICE_ACTIVE_FILE_IS_FULL = 7,
        NOTIFICATION_MODULE = 31,
        NOTIFICATION_INCOMING_CALL_FUNCTION = 32,
        NOTIFICATION_INCOMING_MESSAGE_FUNCTION = 33,
        NOTIFICATION_APP_FUNCTION = 34,
        NOTIFICATION_READ_SWITCH_STATUS = 35,
        NOTIFICATION_SUPPORT_CUSTOM_APP_SWITCH = 36,
        NAVIGATION_MAP_MODULE = 51,
        UNIT_MODULE = 71,
        UNIT_METRIC_FUNCTION = 72,
        UNIT_IMPERIAL_FUNCTION = 73,
        UNIT_CUSTOMIZE_FUNCTION = 74,
        CYCLING_COMPUTER_CONFIG_MODULE = 91,
        KEY_FUNCTION_SET_SUB_MODULE = 92,
        AUTO_FUNCTION_SET_SUB_MODULE = 93,
        AUTO_PAUSE_FUNCTION = 94,
        AUTO_RECORD_START_FUNCTION = 95,
        AUTO_POWER_OFF_FUNCTION = 96,
        AUTO_SLEEP_FUNCTION = 97,
        AUTO_HOME_PAGE_BACK_FUNCTION = 98,
        SMART_SAVE_FUNCTION = 99,
        ALARM_SET_SUB_MODULE = 100,
        ALARM_RIDE_TIME_FUNCTION = 101,
        ALARM_RIDE_DISTANCE_FUNCTION = 102,
        ALARM_HRM_FUNCTION = 103,
        ALARM_CAD_FUNCTION = 104,
        ALARM_PWR_FUNCTION = 105,
        ALARM_CALORIE_FUNCTION = 106,
        LAP_SET_SUB_MODULE = 107,
        SOUND_MODULE = 108,
        SOUND_KEY_FUNCTION = 109,
        SOUND_BEEP_FUNCTION = 110,
        SOUND_BEEP_MULTIPLE_CHOICE_FUNCTION = 555,
        UPLOAD_LOG_MODULE = 111,
        AUTO_RECORD_START_SUPPORT_THRESHOLD = 112,
        AUTO_PAUSE_SUPPORT_THRESHOLD = 113,
        AUTO_FUNCTION_SET_SUB_MODULE_520 = 114,
        WEATHER_TEST_MODULE = 141,
        ROUTES_MODULE = 161,
        ROUTE_SUPPORT_DIFFERENCE_ALGORITHM = 162,
        ROUTE_SUPPORT_ONLY_SINGLE_ROUTE = 163,
        ROUTE_SUPPORT_AUXILIARY_POINT = 164,
        BROADCAST_MODULE = 181,
        GROUP_TRACK_MODULE = 182,
        SENSORS_MODULE = 201,
        CRANK_LENGTH_PLUS = 202,
        POWER_CALIBRATION = 203,
        SUPPORT_SENSOR_SYNC = 204,
        FIRMWARE_DETECTION_MODULE = 221,
        WIFI_MODULE = 251,
        PAGE_SETTING_MODULE = 281,
        PAGE_SETTING_NAME_MAPPING = 282,
        PAGE_COMPASS = 283,
        TRAINING_MODULE = 311,
        BIKE_SETTING_MODULE = 341,
        PERSONAL_SETTINGS_MODULE = 371,
        FONT_DOWNLOAD_MODULE = 401,
        ANTI_THEFT_ALARM_MODULE = 421,
        SEND_WEATHER_INFORMATION_MODULE = 451,
        SEND_AGPS_MODULE = 452,
        SEND_USER_INFORMATION_MODULE = 453,
        SEND_OFFLINE_AGPS_MODULE = 454,
        REMOVE_DEVICE_MODULE = 501,
        MODEL_MANAGEMENT_MODULE = 502,
        EDIT_MODEL_MANAGEMENT_MODULE = 503,
        THEME_MANAGEMENT_MODULE = 511,
        DISPLAY_SETTING_MODULE = 521,
        ALTITUDE_CALIBRATION_MODULE = 522,
        LOCATION_POINT_MANAGEMENT_MODULE = 523,
        OTHER_SETTING_MODULE = 531,
        CALCULATE_AVERAGE_CADENCE_FILTER_0_VALUE = 532,
        CALCULATE_AVERAGE_POWER_FILTER_0_VALUE = 533,
        MOTION_STATE_DETECTION = 534,
        PRESS_TO_SWITCH_SPORT_MODE = 535,
        AUTO_START_CUSTOM = 541,
        AUTO_START_ALERT = 542,
        AUTO_PAGE_SLOW = 543,
        AUTO_PAGE_NORMAL = 544,
        POWER_SAVING_MODEL = 545,
        SMART_POWER_SAVING_FUNCTIONALITY = 546,
        BLE_MAP_MODULE = 547,
        ALARM_SPEED_FUNCTION = 548,
        READ_SN_FUNCTION = 549,
        HR_DEVICE = 550,
        SPD_DEVICE = 551,
        CAD_DEVICE = 552,
        ADVANCED_HR_DEVICE = 553,
        RADAR_DEVICE = 554,
        POWER_MANAGEMENT_MODULE = 556,
        LIGHT_DEVICE = 557,
        SUPPORT_STAGE = 601,
        VITALITY_GOAL_MODULE = 2000,
        HEALTH_DATA_DETECTION_MODULE = 2010,
        MY_HEALTH_DATA_MODULE = 2020,
        DIAL_MODULE = 2030,
        BLUETOOTH_CALL_MODULE = 2060,
        SOS_CALL_MODULE = 2070,
        PREFERENCES_MODULE = 2080,
        WORLD_CLOCK = 2081,
        ALARM_DRINK_WATER_FUNCTION = 3001,
        ALARM_FOOD_FUNCTION = 3002,
        GO_MORE_FUNCTION = 3003,
        TRAINING_PLAN_FUNCTION = 3004
    }

    /** Properties of a DeviceInfo. */
    interface IDeviceInfo {

        /** DeviceInfo deviceImage */
        deviceImage?: (device_information.IDeviceImage[]|null);

        /** DeviceInfo devName */
        devName?: (string|null);

        /** DeviceInfo devCustomName */
        devCustomName?: (string|null);

        /** DeviceInfo generation */
        generation?: (number|null);

        /** DeviceInfo isSupportProtoBuf */
        isSupportProtoBuf?: (boolean|null);

        /** DeviceInfo sendFileMtuSize */
        sendFileMtuSize?: (number|null);

        /** DeviceInfo dataReceiveTimeOut */
        dataReceiveTimeOut?: (number|null);

        /** DeviceInfo functionTypeList */
        functionTypeList?: (device_information.FunctionType[]|null);

        /** DeviceInfo manufacturerSpecificData */
        manufacturerSpecificData?: (string|null);

        /** DeviceInfo mapManual */
        mapManual?: (device_information.IMapManual[]|null);

        /** DeviceInfo pagingInformation */
        pagingInformation?: (device_information.IPagingInformation[]|null);

        /** DeviceInfo isAccessory */
        isAccessory?: (boolean|null);

        /** DeviceInfo ephemerisEffectiveTime */
        ephemerisEffectiveTime?: (number|null);

        /** DeviceInfo deviceMaxActivityFileNum */
        deviceMaxActivityFileNum?: (number|null);

        /** DeviceInfo connectionMode */
        connectionMode?: (number|null);

        /** DeviceInfo androidSupportMinVersion */
        androidSupportMinVersion?: (number|null);

        /** DeviceInfo upperLimitOfMode */
        upperLimitOfMode?: (number|null);

        /** DeviceInfo isShowRecommendDevice */
        isShowRecommendDevice?: (boolean|null);

        /** DeviceInfo deviceCategoryType */
        deviceCategoryType?: (device_information.DeviceCategoryType|null);
    }

    /** Represents a DeviceInfo. */
    class DeviceInfo implements IDeviceInfo {

        /**
         * Constructs a new DeviceInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: device_information.IDeviceInfo);

        /** DeviceInfo deviceImage. */
        public deviceImage: device_information.IDeviceImage[];

        /** DeviceInfo devName. */
        public devName: string;

        /** DeviceInfo devCustomName. */
        public devCustomName: string;

        /** DeviceInfo generation. */
        public generation: number;

        /** DeviceInfo isSupportProtoBuf. */
        public isSupportProtoBuf: boolean;

        /** DeviceInfo sendFileMtuSize. */
        public sendFileMtuSize: number;

        /** DeviceInfo dataReceiveTimeOut. */
        public dataReceiveTimeOut: number;

        /** DeviceInfo functionTypeList. */
        public functionTypeList: device_information.FunctionType[];

        /** DeviceInfo manufacturerSpecificData. */
        public manufacturerSpecificData: string;

        /** DeviceInfo mapManual. */
        public mapManual: device_information.IMapManual[];

        /** DeviceInfo pagingInformation. */
        public pagingInformation: device_information.IPagingInformation[];

        /** DeviceInfo isAccessory. */
        public isAccessory: boolean;

        /** DeviceInfo ephemerisEffectiveTime. */
        public ephemerisEffectiveTime: number;

        /** DeviceInfo deviceMaxActivityFileNum. */
        public deviceMaxActivityFileNum: number;

        /** DeviceInfo connectionMode. */
        public connectionMode: number;

        /** DeviceInfo androidSupportMinVersion. */
        public androidSupportMinVersion: number;

        /** DeviceInfo upperLimitOfMode. */
        public upperLimitOfMode: number;

        /** DeviceInfo isShowRecommendDevice. */
        public isShowRecommendDevice: boolean;

        /** DeviceInfo deviceCategoryType. */
        public deviceCategoryType: device_information.DeviceCategoryType;

        /**
         * Creates a new DeviceInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceInfo instance
         */
        public static create(properties?: device_information.IDeviceInfo): device_information.DeviceInfo;

        /**
         * Encodes the specified DeviceInfo message. Does not implicitly {@link device_information.DeviceInfo.verify|verify} messages.
         * @param message DeviceInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: device_information.IDeviceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceInfo message, length delimited. Does not implicitly {@link device_information.DeviceInfo.verify|verify} messages.
         * @param message DeviceInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: device_information.IDeviceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): device_information.DeviceInfo;

        /**
         * Decodes a DeviceInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): device_information.DeviceInfo;

        /**
         * Verifies a DeviceInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceInfo
         */
        public static fromObject(object: { [k: string]: any }): device_information.DeviceInfo;

        /**
         * Creates a plain object from a DeviceInfo message. Also converts values to other types if specified.
         * @param message DeviceInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: device_information.DeviceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeviceInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MapManual. */
    interface IMapManual {

        /** MapManual manualType */
        manualType?: (device_information.MapManual.ManualType|null);

        /** MapManual url */
        url?: (string|null);
    }

    /** Represents a MapManual. */
    class MapManual implements IMapManual {

        /**
         * Constructs a new MapManual.
         * @param [properties] Properties to set
         */
        constructor(properties?: device_information.IMapManual);

        /** MapManual manualType. */
        public manualType: device_information.MapManual.ManualType;

        /** MapManual url. */
        public url: string;

        /**
         * Creates a new MapManual instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MapManual instance
         */
        public static create(properties?: device_information.IMapManual): device_information.MapManual;

        /**
         * Encodes the specified MapManual message. Does not implicitly {@link device_information.MapManual.verify|verify} messages.
         * @param message MapManual message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: device_information.IMapManual, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MapManual message, length delimited. Does not implicitly {@link device_information.MapManual.verify|verify} messages.
         * @param message MapManual message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: device_information.IMapManual, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MapManual message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MapManual
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): device_information.MapManual;

        /**
         * Decodes a MapManual message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MapManual
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): device_information.MapManual;

        /**
         * Verifies a MapManual message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MapManual message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MapManual
         */
        public static fromObject(object: { [k: string]: any }): device_information.MapManual;

        /**
         * Creates a plain object from a MapManual message. Also converts values to other types if specified.
         * @param message MapManual
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: device_information.MapManual, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MapManual to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MapManual
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace MapManual {

        /** ManualType enum. */
        enum ManualType {
            INVALID = 0,
            UNBIND = 1,
            CONNECT_HELP = 2
        }
    }

    /** Properties of a DeviceImage. */
    interface IDeviceImage {

        /** DeviceImage imageType */
        imageType?: (device_information.DeviceImage.ImageType|null);

        /** DeviceImage url */
        url?: (string|null);
    }

    /** Represents a DeviceImage. */
    class DeviceImage implements IDeviceImage {

        /**
         * Constructs a new DeviceImage.
         * @param [properties] Properties to set
         */
        constructor(properties?: device_information.IDeviceImage);

        /** DeviceImage imageType. */
        public imageType: device_information.DeviceImage.ImageType;

        /** DeviceImage url. */
        public url: string;

        /**
         * Creates a new DeviceImage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceImage instance
         */
        public static create(properties?: device_information.IDeviceImage): device_information.DeviceImage;

        /**
         * Encodes the specified DeviceImage message. Does not implicitly {@link device_information.DeviceImage.verify|verify} messages.
         * @param message DeviceImage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: device_information.IDeviceImage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceImage message, length delimited. Does not implicitly {@link device_information.DeviceImage.verify|verify} messages.
         * @param message DeviceImage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: device_information.IDeviceImage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceImage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceImage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): device_information.DeviceImage;

        /**
         * Decodes a DeviceImage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceImage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): device_information.DeviceImage;

        /**
         * Verifies a DeviceImage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceImage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceImage
         */
        public static fromObject(object: { [k: string]: any }): device_information.DeviceImage;

        /**
         * Creates a plain object from a DeviceImage message. Also converts values to other types if specified.
         * @param message DeviceImage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: device_information.DeviceImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceImage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeviceImage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace DeviceImage {

        /** ImageType enum. */
        enum ImageType {
            INVALID = 0,
            BIG = 1,
            SMALL = 2,
            BACKGROUND_IN_PAGE_SETTING = 3,
            DFU = 4,
            UNBINDING_ANIMATION = 5
        }
    }

    /** Properties of a PagingInformation. */
    interface IPagingInformation {

        /** PagingInformation function */
        "function"?: (device_information.PagingInformation.Function|null);

        /** PagingInformation isSupportPaging */
        isSupportPaging?: (boolean|null);
    }

    /** Represents a PagingInformation. */
    class PagingInformation implements IPagingInformation {

        /**
         * Constructs a new PagingInformation.
         * @param [properties] Properties to set
         */
        constructor(properties?: device_information.IPagingInformation);

        /** PagingInformation function. */
        public function: device_information.PagingInformation.Function;

        /** PagingInformation isSupportPaging. */
        public isSupportPaging: boolean;

        /**
         * Creates a new PagingInformation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PagingInformation instance
         */
        public static create(properties?: device_information.IPagingInformation): device_information.PagingInformation;

        /**
         * Encodes the specified PagingInformation message. Does not implicitly {@link device_information.PagingInformation.verify|verify} messages.
         * @param message PagingInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: device_information.IPagingInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PagingInformation message, length delimited. Does not implicitly {@link device_information.PagingInformation.verify|verify} messages.
         * @param message PagingInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: device_information.IPagingInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PagingInformation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PagingInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): device_information.PagingInformation;

        /**
         * Decodes a PagingInformation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PagingInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): device_information.PagingInformation;

        /**
         * Verifies a PagingInformation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PagingInformation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PagingInformation
         */
        public static fromObject(object: { [k: string]: any }): device_information.PagingInformation;

        /**
         * Creates a plain object from a PagingInformation message. Also converts values to other types if specified.
         * @param message PagingInformation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: device_information.PagingInformation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PagingInformation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PagingInformation
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PagingInformation {

        /** Function enum. */
        enum Function {
            INVALID = 0,
            ACTIVITIES = 1,
            ROUTES = 2,
            WORKOUTS = 3
        }
    }
}
