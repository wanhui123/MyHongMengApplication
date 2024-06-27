import * as $protobuf from "@ohos/protobufjs";
import Long = require("long");
import { common } from "./common";

/** Namespace sensor. */
export namespace sensor {

    /** SENSOR_OPERATE_TYPE enum. */
    enum SENSOR_OPERATE_TYPE {
        enum_SENSOR_OPERATE_TYPE_NONE = 0,
        enum_SENSOR_OPERATE_TYPE_GET = 1,
        enum_SENSOR_OPERATE_TYPE_SET = 2,
        enum_SENSOR_OPERATE_TYPE_DEL = 3,
        enum_SENSOR_OPERATE_TYPE_CONNECT = 4,
        enum_SENSOR_OPERATE_TYPE_SEND = 5,
        enum_SENSOR_OPERATE_TYPE_EXIT = 6,
        enum_SENSOR_OPERATE_TYPE_POW_CALIB = 7,
        enum_SENSOR_OPERATE_TYPE_SYNC = 8,
        enum_SENSOR_OPERATE_TYPE_QUERY = 9
    }

    /** SENSOR_TYPE enum. */
    enum SENSOR_TYPE {
        enum_SENSOR_TYPE_INVALID = 0,
        enum_SENSOR_TYPE_HRM = 1,
        enum_SENSOR_TYPE_CBSC = 2,
        enum_SENSOR_TYPE_PEDAL_BPWR = 3,
        enum_SENSOR_TYPE_OTHER_BPWR = 4,
        enum_SENSOR_TYPE_CAD = 5,
        enum_SENSOR_TYPE_SPD = 6,
        enum_SENSOR_TYPE_SHFT = 7,
        enum_SENSOR_TYPE_DI2 = 8,
        enum_SENSOR_TYPE_FEC = 9,
        enum_SENSOR_TYPE_LEV = 10,
        enum_SENSOR_TYPE_RD = 11,
        enum_SENSOR_TYPE_RADAR = 12,
        enum_SENSOR_TYPE_LIGHT = 13
    }

    /** SENSOR_RADIO_TYPE enum. */
    enum SENSOR_RADIO_TYPE {
        enum_SENSOR_RADIO_TYPE_INVALID = 0,
        enum_SENSOR_RADIO_TYPE_BLE = 1,
        enum_SENSOR_RADIO_TYPE_ANT = 2
    }

    /** SENSOR_STATUS_TYPE enum. */
    enum SENSOR_STATUS_TYPE {
        enum_SENSOR_STATUS_TYPE_SAVED = 0,
        enum_SENSOR_STATUS_TYPE_CONNECTED = 1,
        enum_SENSOR_STATUS_TYPE_NO_SAVED = 2
    }

    /** Properties of a radar_sensor_set_message. */
    interface Iradar_sensor_set_message {

        /** radar_sensor_set_message alertBarSide */
        alertBarSide?: (number|null);

        /** radar_sensor_set_message alertSoundOpen */
        alertSoundOpen?: (number|null);
    }

    /** Represents a radar_sensor_set_message. */
    class radar_sensor_set_message implements Iradar_sensor_set_message {

        /**
         * Constructs a new radar_sensor_set_message.
         * @param [properties] Properties to set
         */
        constructor(properties?: sensor.Iradar_sensor_set_message);

        /** radar_sensor_set_message alertBarSide. */
        public alertBarSide: number;

        /** radar_sensor_set_message alertSoundOpen. */
        public alertSoundOpen: number;

        /**
         * Creates a new radar_sensor_set_message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns radar_sensor_set_message instance
         */
        public static create(properties?: sensor.Iradar_sensor_set_message): sensor.radar_sensor_set_message;

        /**
         * Encodes the specified radar_sensor_set_message message. Does not implicitly {@link sensor.radar_sensor_set_message.verify|verify} messages.
         * @param message radar_sensor_set_message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sensor.Iradar_sensor_set_message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified radar_sensor_set_message message, length delimited. Does not implicitly {@link sensor.radar_sensor_set_message.verify|verify} messages.
         * @param message radar_sensor_set_message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sensor.Iradar_sensor_set_message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a radar_sensor_set_message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns radar_sensor_set_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sensor.radar_sensor_set_message;

        /**
         * Decodes a radar_sensor_set_message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns radar_sensor_set_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sensor.radar_sensor_set_message;

        /**
         * Verifies a radar_sensor_set_message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a radar_sensor_set_message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns radar_sensor_set_message
         */
        public static fromObject(object: { [k: string]: any }): sensor.radar_sensor_set_message;

        /**
         * Creates a plain object from a radar_sensor_set_message message. Also converts values to other types if specified.
         * @param message radar_sensor_set_message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sensor.radar_sensor_set_message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this radar_sensor_set_message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for radar_sensor_set_message
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** DI2_CHN_NUM enum. */
    enum DI2_CHN_NUM {
        enum_DI2_CHN_NUM_0 = 0,
        enum_DI2_CHN_NUM_1 = 1,
        enum_DI2_CHN_NUM_2 = 2,
        enum_DI2_CHN_NUM_3 = 3
    }

    /** DI2_BUTTON_OP_TYPE enum. */
    enum DI2_BUTTON_OP_TYPE {
        enum_DI2_BUTTON_OP_TYPE_LONG = 0,
        enum_DI2_BUTTON_OP_TYPE_SINGLE = 1,
        enum_DI2_BUTTON_OP_TYPE_DOUBLE = 2
    }

    /** DI2_FUNC_TYPE enum. */
    enum DI2_FUNC_TYPE {
        enum_DI2_FUNC_INVALID = 0,
        enum_DI2_FUNC_PAGE_UP = 1,
        enum_DI2_FUNC_PAGE_DOWN = 2,
        enum_DI2_FUNC_LAP = 3,
        enum_DI2_FUNC_START_PAUSE = 4,
        enum_DI2_FUNC_UNDEFINE = 15
    }

    /** Properties of a di2_sensor_set_message. */
    interface Idi2_sensor_set_message {

        /** di2_sensor_set_message num */
        num?: (sensor.DI2_CHN_NUM|null);

        /** di2_sensor_set_message buttonOpType */
        buttonOpType?: (sensor.DI2_BUTTON_OP_TYPE|null);

        /** di2_sensor_set_message func */
        func?: (sensor.DI2_FUNC_TYPE|null);
    }

    /** Represents a di2_sensor_set_message. */
    class di2_sensor_set_message implements Idi2_sensor_set_message {

        /**
         * Constructs a new di2_sensor_set_message.
         * @param [properties] Properties to set
         */
        constructor(properties?: sensor.Idi2_sensor_set_message);

        /** di2_sensor_set_message num. */
        public num: sensor.DI2_CHN_NUM;

        /** di2_sensor_set_message buttonOpType. */
        public buttonOpType: sensor.DI2_BUTTON_OP_TYPE;

        /** di2_sensor_set_message func. */
        public func: sensor.DI2_FUNC_TYPE;

        /**
         * Creates a new di2_sensor_set_message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns di2_sensor_set_message instance
         */
        public static create(properties?: sensor.Idi2_sensor_set_message): sensor.di2_sensor_set_message;

        /**
         * Encodes the specified di2_sensor_set_message message. Does not implicitly {@link sensor.di2_sensor_set_message.verify|verify} messages.
         * @param message di2_sensor_set_message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sensor.Idi2_sensor_set_message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified di2_sensor_set_message message, length delimited. Does not implicitly {@link sensor.di2_sensor_set_message.verify|verify} messages.
         * @param message di2_sensor_set_message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sensor.Idi2_sensor_set_message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a di2_sensor_set_message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns di2_sensor_set_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sensor.di2_sensor_set_message;

        /**
         * Decodes a di2_sensor_set_message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns di2_sensor_set_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sensor.di2_sensor_set_message;

        /**
         * Verifies a di2_sensor_set_message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a di2_sensor_set_message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns di2_sensor_set_message
         */
        public static fromObject(object: { [k: string]: any }): sensor.di2_sensor_set_message;

        /**
         * Creates a plain object from a di2_sensor_set_message message. Also converts values to other types if specified.
         * @param message di2_sensor_set_message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sensor.di2_sensor_set_message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this di2_sensor_set_message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for di2_sensor_set_message
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a sensor_data_message. */
    interface Isensor_data_message {

        /** sensor_data_message sensorType */
        sensorType?: (sensor.SENSOR_TYPE|null);

        /** sensor_data_message sensorRadioType */
        sensorRadioType?: (sensor.SENSOR_RADIO_TYPE|null);

        /** sensor_data_message sensorStatusType */
        sensorStatusType?: (sensor.SENSOR_STATUS_TYPE|null);

        /** sensor_data_message sensorKey */
        sensorKey?: (string|null);

        /** sensor_data_message sensorBleName */
        sensorBleName?: (string|null);

        /** sensor_data_message sensorRssi */
        sensorRssi?: (number|null);

        /** sensor_data_message sensorPwr */
        sensorPwr?: (number|null);

        /** sensor_data_message wheelSize */
        wheelSize?: (number|null);

        /** sensor_data_message crankLength */
        crankLength?: (number|null);

        /** sensor_data_message sensorForbidden */
        sensorForbidden?: (number|null);

        /** sensor_data_message autoWheelSize */
        autoWheelSize?: (number|null);

        /** sensor_data_message radarSensorSetMsg */
        radarSensorSetMsg?: (sensor.Iradar_sensor_set_message|null);

        /** sensor_data_message di2SensorSetMsg */
        di2SensorSetMsg?: (sensor.Idi2_sensor_set_message[]|null);
    }

    /** Represents a sensor_data_message. */
    class sensor_data_message implements Isensor_data_message {

        /**
         * Constructs a new sensor_data_message.
         * @param [properties] Properties to set
         */
        constructor(properties?: sensor.Isensor_data_message);

        /** sensor_data_message sensorType. */
        public sensorType: sensor.SENSOR_TYPE;

        /** sensor_data_message sensorRadioType. */
        public sensorRadioType: sensor.SENSOR_RADIO_TYPE;

        /** sensor_data_message sensorStatusType. */
        public sensorStatusType: sensor.SENSOR_STATUS_TYPE;

        /** sensor_data_message sensorKey. */
        public sensorKey: string;

        /** sensor_data_message sensorBleName. */
        public sensorBleName: string;

        /** sensor_data_message sensorRssi. */
        public sensorRssi: number;

        /** sensor_data_message sensorPwr. */
        public sensorPwr: number;

        /** sensor_data_message wheelSize. */
        public wheelSize: number;

        /** sensor_data_message crankLength. */
        public crankLength: number;

        /** sensor_data_message sensorForbidden. */
        public sensorForbidden: number;

        /** sensor_data_message autoWheelSize. */
        public autoWheelSize: number;

        /** sensor_data_message radarSensorSetMsg. */
        public radarSensorSetMsg?: (sensor.Iradar_sensor_set_message|null);

        /** sensor_data_message di2SensorSetMsg. */
        public di2SensorSetMsg: sensor.Idi2_sensor_set_message[];

        /**
         * Creates a new sensor_data_message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns sensor_data_message instance
         */
        public static create(properties?: sensor.Isensor_data_message): sensor.sensor_data_message;

        /**
         * Encodes the specified sensor_data_message message. Does not implicitly {@link sensor.sensor_data_message.verify|verify} messages.
         * @param message sensor_data_message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sensor.Isensor_data_message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified sensor_data_message message, length delimited. Does not implicitly {@link sensor.sensor_data_message.verify|verify} messages.
         * @param message sensor_data_message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sensor.Isensor_data_message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a sensor_data_message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns sensor_data_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sensor.sensor_data_message;

        /**
         * Decodes a sensor_data_message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns sensor_data_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sensor.sensor_data_message;

        /**
         * Verifies a sensor_data_message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a sensor_data_message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns sensor_data_message
         */
        public static fromObject(object: { [k: string]: any }): sensor.sensor_data_message;

        /**
         * Creates a plain object from a sensor_data_message message. Also converts values to other types if specified.
         * @param message sensor_data_message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sensor.sensor_data_message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this sensor_data_message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for sensor_data_message
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a sensor_message. */
    interface Isensor_message {

        /** sensor_message serviceType */
        serviceType: common.service_type_index;

        /** sensor_message sensorOperateType */
        sensorOperateType: sensor.SENSOR_OPERATE_TYPE;

        /** sensor_message sensorDataMsg */
        sensorDataMsg?: (sensor.Isensor_data_message[]|null);
    }

    /** Represents a sensor_message. */
    class sensor_message implements Isensor_message {

        /**
         * Constructs a new sensor_message.
         * @param [properties] Properties to set
         */
        constructor(properties?: sensor.Isensor_message);

        /** sensor_message serviceType. */
        public serviceType: common.service_type_index;

        /** sensor_message sensorOperateType. */
        public sensorOperateType: sensor.SENSOR_OPERATE_TYPE;

        /** sensor_message sensorDataMsg. */
        public sensorDataMsg: sensor.Isensor_data_message[];

        /**
         * Creates a new sensor_message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns sensor_message instance
         */
        public static create(properties?: sensor.Isensor_message): sensor.sensor_message;

        /**
         * Encodes the specified sensor_message message. Does not implicitly {@link sensor.sensor_message.verify|verify} messages.
         * @param message sensor_message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sensor.Isensor_message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified sensor_message message, length delimited. Does not implicitly {@link sensor.sensor_message.verify|verify} messages.
         * @param message sensor_message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sensor.Isensor_message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a sensor_message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns sensor_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sensor.sensor_message;

        /**
         * Decodes a sensor_message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns sensor_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sensor.sensor_message;

        /**
         * Verifies a sensor_message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a sensor_message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns sensor_message
         */
        public static fromObject(object: { [k: string]: any }): sensor.sensor_message;

        /**
         * Creates a plain object from a sensor_message message. Also converts values to other types if specified.
         * @param message sensor_message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sensor.sensor_message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this sensor_message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for sensor_message
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace common. */
// export namespace common {
//
//     /** service_type_index enum. */
//     enum service_type_index {
//         enum_SERVICE_TYPE_INDEX_NONE = 0,
//         enum_SERVICE_TYPE_INDEX_INS = 1,
//         enum_SERVICE_TYPE_INDEX_MAP = 2,
//         enum_SERVICE_TYPE_INDEX_BACK = 3,
//         enum_SERVICE_TYPE_INDEX_FIRMWARE = 4,
//         enum_SERVICE_TYPE_INDEX_WIFI = 5,
//         enum_SERVICE_TYPE_INDEX_CYCLING_DATA = 6,
//         enum_SERVICE_TYPE_INDEX_ROUTE_PLAN = 7,
//         enum_SERVICE_TYPE_INDEX_REAL_TIME_TRACE = 8,
//         enum_SERVICE_TYPE_INDEX_USER_CONFIG = 9,
//         enum_SERVICE_TYPE_INDEX_BLE = 10,
//         enum_SERVICE_TYPE_INDEX_FACTORY = 11,
//         enum_SERVICE_TYPE_INDEX_CONFIG = 12,
//         enum_SERVICE_TYPE_INDEX_DEV_STATUS = 13,
//         enum_SERVICE_TYPE_INDEX_SENSOR = 14,
//         enum_SERVICE_TYPE_INDEX_TRAINING = 15,
//         enum_SERVICE_TYPE_INDEX_TEAM_INFO = 16,
//         enum_SERVICE_TYPE_INDEX_DEV_VER_INFO = 17,
//         enum_SERVICE_TYPE_INDEX_LANGUAGE = 18,
//         enum_SERVICE_TYPE_INDEX_LOG = 19,
//         enum_SERVICE_TYPE_INDEX_THEME = 20,
//         enum_SERVICE_TYPE_INDEX_FILE_OPERATION = 21,
//         enum_SERVICE_TYPE_INDEX_MAP_NEW = 22,
//         enum_SERVICE_TYPE_INDEX_ROUTE_BOOK = 23,
//         enum_SERVICE_TYPE_INDEX_STAGE = 24,
//         enum_SERVICE_TYPE_INDEX_TRAINING_PLAN = 25,
//         enum_SERVICE_TYPE_INDEX_ALG_GOMORE = 26
//     }
//
//     /** SERVICE_OPERATE_TYPE enum. */
//     enum SERVICE_OPERATE_TYPE {
//         enum_SERVICE_OPERATE_TYPE_NONE = 0,
//         enum_SERVICE_OPERATE_TYPE_SET = 1,
//         enum_SERVICE_OPERATE_TYPE_GET = 2,
//         enum_SERVICE_OPERATE_TYPE_ADD = 3,
//         enum_SERVICE_OPERATE_TYPE_DEL = 4
//     }
//
//     /** Properties of a file_list_get_message. */
//     interface Ifile_list_get_message {
//
//         /** file_list_get_message fileNum */
//         fileNum?: (number|null);
//
//         /** file_list_get_message fileListSupportNumMax */
//         fileListSupportNumMax?: (number|null);
//
//         /** file_list_get_message fileIndexStart */
//         fileIndexStart?: (number|null);
//
//         /** file_list_get_message fileIndexEnd */
//         fileIndexEnd?: (number|null);
//     }
//
//     /** Represents a file_list_get_message. */
//     class file_list_get_message implements Ifile_list_get_message {
//
//         /**
//          * Constructs a new file_list_get_message.
//          * @param [properties] Properties to set
//          */
//         constructor(properties?: common.Ifile_list_get_message);
//
//         /** file_list_get_message fileNum. */
//         public fileNum: number;
//
//         /** file_list_get_message fileListSupportNumMax. */
//         public fileListSupportNumMax: number;
//
//         /** file_list_get_message fileIndexStart. */
//         public fileIndexStart: number;
//
//         /** file_list_get_message fileIndexEnd. */
//         public fileIndexEnd: number;
//
//         /**
//          * Creates a new file_list_get_message instance using the specified properties.
//          * @param [properties] Properties to set
//          * @returns file_list_get_message instance
//          */
//         public static create(properties?: common.Ifile_list_get_message): common.file_list_get_message;
//
//         /**
//          * Encodes the specified file_list_get_message message. Does not implicitly {@link common.file_list_get_message.verify|verify} messages.
//          * @param message file_list_get_message message or plain object to encode
//          * @param [writer] Writer to encode to
//          * @returns Writer
//          */
//         public static encode(message: common.Ifile_list_get_message, writer?: $protobuf.Writer): $protobuf.Writer;
//
//         /**
//          * Encodes the specified file_list_get_message message, length delimited. Does not implicitly {@link common.file_list_get_message.verify|verify} messages.
//          * @param message file_list_get_message message or plain object to encode
//          * @param [writer] Writer to encode to
//          * @returns Writer
//          */
//         public static encodeDelimited(message: common.Ifile_list_get_message, writer?: $protobuf.Writer): $protobuf.Writer;
//
//         /**
//          * Decodes a file_list_get_message message from the specified reader or buffer.
//          * @param reader Reader or buffer to decode from
//          * @param [length] Message length if known beforehand
//          * @returns file_list_get_message
//          * @throws {Error} If the payload is not a reader or valid buffer
//          * @throws {$protobuf.util.ProtocolError} If required fields are missing
//          */
//         public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.file_list_get_message;
//
//         /**
//          * Decodes a file_list_get_message message from the specified reader or buffer, length delimited.
//          * @param reader Reader or buffer to decode from
//          * @returns file_list_get_message
//          * @throws {Error} If the payload is not a reader or valid buffer
//          * @throws {$protobuf.util.ProtocolError} If required fields are missing
//          */
//         public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.file_list_get_message;
//
//         /**
//          * Verifies a file_list_get_message message.
//          * @param message Plain object to verify
//          * @returns `null` if valid, otherwise the reason why it is not
//          */
//         public static verify(message: { [k: string]: any }): (string|null);
//
//         /**
//          * Creates a file_list_get_message message from a plain object. Also converts values to their respective internal types.
//          * @param object Plain object
//          * @returns file_list_get_message
//          */
//         public static fromObject(object: { [k: string]: any }): common.file_list_get_message;
//
//         /**
//          * Creates a plain object from a file_list_get_message message. Also converts values to other types if specified.
//          * @param message file_list_get_message
//          * @param [options] Conversion options
//          * @returns Plain object
//          */
//         public static toObject(message: common.file_list_get_message, options?: $protobuf.IConversionOptions): { [k: string]: any };
//
//         /**
//          * Converts this file_list_get_message to JSON.
//          * @returns JSON object
//          */
//         public toJSON(): { [k: string]: any };
//
//         /**
//          * Gets the default type url for file_list_get_message
//          * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
//          * @returns The default type url
//          */
//         public static getTypeUrl(typeUrlPrefix?: string): string;
//     }
// }
