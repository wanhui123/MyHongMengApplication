import * as $protobuf from "@ohos/protobufjs";
import Long = require("long");
import { common } from "./common";

/** Namespace cycling_data. */
export namespace cycling_data {

    /** CYCLING_DATA_OPERATE_TYPE enum. */
    enum CYCLING_DATA_OPERATE_TYPE {
        enum_CYCLING_DATA_OPERATE_TYPE_NONE = 0,
        enum_CYCLING_DATA_OPERATE_TYPE_LIST_GET = 1,
        enum_CYCLING_DATA_OPERATE_TYPE_LIST_SEND = 2,
        enum_CYCLING_DATA_OPERATE_TYPE_FILE_GET = 3,
        enum_CYCLING_DATA_OPERATE_TYPE_FILE_SEND = 4,
        enum_CYCLING_DATA_OPERATE_TYPE_FILE_DEL = 5,
        enum_CYCLING_DATA_OPERATE_TYPE_ALL_DEL = 6,
        enum_CYCLING_DATA_OPERATE_TYPE_AUTO_UPLOAD = 7,
        enum_CYCLING_DATA_OPERATE_TYPE_LIST_NUM_GET = 8
    }

    /** Properties of a cycling_data_file_flag_message. */
    interface Icycling_data_file_flag_message {

        /** cycling_data_file_flag_message timestamp */
        timestamp: number;

        /** cycling_data_file_flag_message fileSize */
        fileSize?: (number|null);

        /** cycling_data_file_flag_message userId */
        userId?: (string|null);

        /** cycling_data_file_flag_message deviceId */
        deviceId?: (string|null);
    }

    /** Represents a cycling_data_file_flag_message. */
    class cycling_data_file_flag_message implements Icycling_data_file_flag_message {

        /**
         * Constructs a new cycling_data_file_flag_message.
         * @param [properties] Properties to set
         */
        constructor(properties?: cycling_data.Icycling_data_file_flag_message);

        /** cycling_data_file_flag_message timestamp. */
        public timestamp: number;

        /** cycling_data_file_flag_message fileSize. */
        public fileSize: number;

        /** cycling_data_file_flag_message userId. */
        public userId: string;

        /** cycling_data_file_flag_message deviceId. */
        public deviceId: string;

        /**
         * Creates a new cycling_data_file_flag_message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns cycling_data_file_flag_message instance
         */
        public static create(properties?: cycling_data.Icycling_data_file_flag_message): cycling_data.cycling_data_file_flag_message;

        /**
         * Encodes the specified cycling_data_file_flag_message message. Does not implicitly {@link cycling_data.cycling_data_file_flag_message.verify|verify} messages.
         * @param message cycling_data_file_flag_message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cycling_data.Icycling_data_file_flag_message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified cycling_data_file_flag_message message, length delimited. Does not implicitly {@link cycling_data.cycling_data_file_flag_message.verify|verify} messages.
         * @param message cycling_data_file_flag_message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cycling_data.Icycling_data_file_flag_message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a cycling_data_file_flag_message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns cycling_data_file_flag_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cycling_data.cycling_data_file_flag_message;

        /**
         * Decodes a cycling_data_file_flag_message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns cycling_data_file_flag_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cycling_data.cycling_data_file_flag_message;

        /**
         * Verifies a cycling_data_file_flag_message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a cycling_data_file_flag_message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns cycling_data_file_flag_message
         */
        public static fromObject(object: { [k: string]: any }): cycling_data.cycling_data_file_flag_message;

        /**
         * Creates a plain object from a cycling_data_file_flag_message message. Also converts values to other types if specified.
         * @param message cycling_data_file_flag_message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cycling_data.cycling_data_file_flag_message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this cycling_data_file_flag_message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for cycling_data_file_flag_message
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a cycling_data_auto_upload_message. */
    interface Icycling_data_auto_upload_message {

        /** cycling_data_auto_upload_message status */
        status?: (number|null);

        /** cycling_data_auto_upload_message cyclingDataUrl */
        cyclingDataUrl?: (string|null);

        /** cycling_data_auto_upload_message cyclingDataCheckUrl */
        cyclingDataCheckUrl?: (string|null);
    }

    /** Represents a cycling_data_auto_upload_message. */
    class cycling_data_auto_upload_message implements Icycling_data_auto_upload_message {

        /**
         * Constructs a new cycling_data_auto_upload_message.
         * @param [properties] Properties to set
         */
        constructor(properties?: cycling_data.Icycling_data_auto_upload_message);

        /** cycling_data_auto_upload_message status. */
        public status: number;

        /** cycling_data_auto_upload_message cyclingDataUrl. */
        public cyclingDataUrl: string;

        /** cycling_data_auto_upload_message cyclingDataCheckUrl. */
        public cyclingDataCheckUrl: string;

        /**
         * Creates a new cycling_data_auto_upload_message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns cycling_data_auto_upload_message instance
         */
        public static create(properties?: cycling_data.Icycling_data_auto_upload_message): cycling_data.cycling_data_auto_upload_message;

        /**
         * Encodes the specified cycling_data_auto_upload_message message. Does not implicitly {@link cycling_data.cycling_data_auto_upload_message.verify|verify} messages.
         * @param message cycling_data_auto_upload_message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cycling_data.Icycling_data_auto_upload_message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified cycling_data_auto_upload_message message, length delimited. Does not implicitly {@link cycling_data.cycling_data_auto_upload_message.verify|verify} messages.
         * @param message cycling_data_auto_upload_message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cycling_data.Icycling_data_auto_upload_message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a cycling_data_auto_upload_message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns cycling_data_auto_upload_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cycling_data.cycling_data_auto_upload_message;

        /**
         * Decodes a cycling_data_auto_upload_message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns cycling_data_auto_upload_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cycling_data.cycling_data_auto_upload_message;

        /**
         * Verifies a cycling_data_auto_upload_message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a cycling_data_auto_upload_message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns cycling_data_auto_upload_message
         */
        public static fromObject(object: { [k: string]: any }): cycling_data.cycling_data_auto_upload_message;

        /**
         * Creates a plain object from a cycling_data_auto_upload_message message. Also converts values to other types if specified.
         * @param message cycling_data_auto_upload_message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cycling_data.cycling_data_auto_upload_message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this cycling_data_auto_upload_message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for cycling_data_auto_upload_message
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a cycling_data_msg. */
    interface Icycling_data_msg {

        /** cycling_data_msg serviceType */
        serviceType: common.service_type_index;

        /** cycling_data_msg cyclingDataOperateType */
        cyclingDataOperateType: cycling_data.CYCLING_DATA_OPERATE_TYPE;

        /** cycling_data_msg cyclingDataFileFlagMsg */
        cyclingDataFileFlagMsg?: (cycling_data.Icycling_data_file_flag_message[]|null);

        /** cycling_data_msg fileContent */
        fileContent?: (Uint8Array|null);

        /** cycling_data_msg cyclingDataAutoUploadMsg */
        cyclingDataAutoUploadMsg?: (cycling_data.Icycling_data_auto_upload_message|null);

        /** cycling_data_msg listMsg */
        listMsg?: (common.Ifile_list_get_message|null);
    }

    /** Represents a cycling_data_msg. */
    class cycling_data_msg implements Icycling_data_msg {

        /**
         * Constructs a new cycling_data_msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: cycling_data.Icycling_data_msg);

        /** cycling_data_msg serviceType. */
        public serviceType: common.service_type_index;

        /** cycling_data_msg cyclingDataOperateType. */
        public cyclingDataOperateType: cycling_data.CYCLING_DATA_OPERATE_TYPE;

        /** cycling_data_msg cyclingDataFileFlagMsg. */
        public cyclingDataFileFlagMsg: cycling_data.Icycling_data_file_flag_message[];

        /** cycling_data_msg fileContent. */
        public fileContent: Uint8Array;

        /** cycling_data_msg cyclingDataAutoUploadMsg. */
        public cyclingDataAutoUploadMsg?: (cycling_data.Icycling_data_auto_upload_message|null);

        /** cycling_data_msg listMsg. */
        public listMsg?: (common.Ifile_list_get_message|null);

        /**
         * Creates a new cycling_data_msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns cycling_data_msg instance
         */
        public static create(properties?: cycling_data.Icycling_data_msg): cycling_data.cycling_data_msg;

        /**
         * Encodes the specified cycling_data_msg message. Does not implicitly {@link cycling_data.cycling_data_msg.verify|verify} messages.
         * @param message cycling_data_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cycling_data.Icycling_data_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified cycling_data_msg message, length delimited. Does not implicitly {@link cycling_data.cycling_data_msg.verify|verify} messages.
         * @param message cycling_data_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cycling_data.Icycling_data_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a cycling_data_msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns cycling_data_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cycling_data.cycling_data_msg;

        /**
         * Decodes a cycling_data_msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns cycling_data_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cycling_data.cycling_data_msg;

        /**
         * Verifies a cycling_data_msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a cycling_data_msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns cycling_data_msg
         */
        public static fromObject(object: { [k: string]: any }): cycling_data.cycling_data_msg;

        /**
         * Creates a plain object from a cycling_data_msg message. Also converts values to other types if specified.
         * @param message cycling_data_msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cycling_data.cycling_data_msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this cycling_data_msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for cycling_data_msg
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
