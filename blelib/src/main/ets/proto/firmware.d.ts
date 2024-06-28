import * as $protobuf from "@ohos/protobufjs";
import Long = require("long");
import { common } from "./common";

/** Namespace firmware. */
export namespace firmware {

    /** FIRMWARE_OPERATE_TYPE enum. */
    enum FIRMWARE_OPERATE_TYPE {
        enum_FIRMWARE_OPERATE_TYPE_NONE = 0,
        enum_FIRMWARE_OPERATE_TYPE_GET_VERSION = 1,
        enum_FIRMWARE_OPERATE_TYPE_SEND_VERSION = 2,
        enum_FIRMWARE_OPERATE_TYPE_MCU_UPDATE = 3,
        enum_FIRMWARE_OPERATE_TYPE_PROGRESS = 4,
        enum_FIRMWARE_OPERATE_TYPE_BLE_UPDATE = 5
    }

    /** Properties of a firmware_data_message. */
    interface Ifirmware_data_message {

        /** firmware_data_message mcuFirmwareVer */
        mcuFirmwareVer?: (number|null);

        /** firmware_data_message bleFirmwareVer */
        bleFirmwareVer?: (number|null);

        /** firmware_data_message firmwareSize */
        firmwareSize?: (number|null);

        /** firmware_data_message url */
        url?: (string|null);

        /** firmware_data_message process */
        process?: (number|null);

        /** firmware_data_message bleBootFirmwareVer */
        bleBootFirmwareVer?: (number|null);
    }

    /** Represents a firmware_data_message. */
    class firmware_data_message implements Ifirmware_data_message {

        /**
         * Constructs a new firmware_data_message.
         * @param [properties] Properties to set
         */
        constructor(properties?: firmware.Ifirmware_data_message);

        /** firmware_data_message mcuFirmwareVer. */
        public mcuFirmwareVer: number;

        /** firmware_data_message bleFirmwareVer. */
        public bleFirmwareVer: number;

        /** firmware_data_message firmwareSize. */
        public firmwareSize: number;

        /** firmware_data_message url. */
        public url: string;

        /** firmware_data_message process. */
        public process: number;

        /** firmware_data_message bleBootFirmwareVer. */
        public bleBootFirmwareVer: number;

        /**
         * Creates a new firmware_data_message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns firmware_data_message instance
         */
        public static create(properties?: firmware.Ifirmware_data_message): firmware.firmware_data_message;

        /**
         * Encodes the specified firmware_data_message message. Does not implicitly {@link firmware.firmware_data_message.verify|verify} messages.
         * @param message firmware_data_message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: firmware.Ifirmware_data_message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified firmware_data_message message, length delimited. Does not implicitly {@link firmware.firmware_data_message.verify|verify} messages.
         * @param message firmware_data_message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: firmware.Ifirmware_data_message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a firmware_data_message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns firmware_data_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): firmware.firmware_data_message;

        /**
         * Decodes a firmware_data_message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns firmware_data_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): firmware.firmware_data_message;

        /**
         * Verifies a firmware_data_message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a firmware_data_message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns firmware_data_message
         */
        public static fromObject(object: { [k: string]: any }): firmware.firmware_data_message;

        /**
         * Creates a plain object from a firmware_data_message message. Also converts values to other types if specified.
         * @param message firmware_data_message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: firmware.firmware_data_message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this firmware_data_message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for firmware_data_message
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a firmware_msg. */
    interface Ifirmware_msg {

        /** firmware_msg serviceType */
        serviceType: common.service_type_index;

        /** firmware_msg firmwareOperateType */
        firmwareOperateType: firmware.FIRMWARE_OPERATE_TYPE;

        /** firmware_msg firmwareDataMsg */
        firmwareDataMsg?: (firmware.Ifirmware_data_message|null);
    }

    /** Represents a firmware_msg. */
    class firmware_msg implements Ifirmware_msg {

        /**
         * Constructs a new firmware_msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: firmware.Ifirmware_msg);

        /** firmware_msg serviceType. */
        public serviceType: common.service_type_index;

        /** firmware_msg firmwareOperateType. */
        public firmwareOperateType: firmware.FIRMWARE_OPERATE_TYPE;

        /** firmware_msg firmwareDataMsg. */
        public firmwareDataMsg?: (firmware.Ifirmware_data_message|null);

        /**
         * Creates a new firmware_msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns firmware_msg instance
         */
        public static create(properties?: firmware.Ifirmware_msg): firmware.firmware_msg;

        /**
         * Encodes the specified firmware_msg message. Does not implicitly {@link firmware.firmware_msg.verify|verify} messages.
         * @param message firmware_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: firmware.Ifirmware_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified firmware_msg message, length delimited. Does not implicitly {@link firmware.firmware_msg.verify|verify} messages.
         * @param message firmware_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: firmware.Ifirmware_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a firmware_msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns firmware_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): firmware.firmware_msg;

        /**
         * Decodes a firmware_msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns firmware_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): firmware.firmware_msg;

        /**
         * Verifies a firmware_msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a firmware_msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns firmware_msg
         */
        public static fromObject(object: { [k: string]: any }): firmware.firmware_msg;

        /**
         * Creates a plain object from a firmware_msg message. Also converts values to other types if specified.
         * @param message firmware_msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: firmware.firmware_msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this firmware_msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for firmware_msg
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
