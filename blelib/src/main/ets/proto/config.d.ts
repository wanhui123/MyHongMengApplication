import * as $protobuf from "@ohos/protobufjs";
import Long = require("long");
import { common } from './common';

/** Namespace config. */
export namespace config {

    /** CONFIG_SERVICE_TYPE enum. */
    enum CONFIG_SERVICE_TYPE {
        enum_CONFIG_SERVICE_TYPE_NONE = 0,
        enum_CONFIG_SERVICE_TYPE_USER = 1,
        enum_CONFIG_SERVICE_TYPE_PAGE = 2,
        enum_CONFIG_SERVICE_TYPE_BIKE = 3,
        enum_CONFIG_SERVICE_TYPE_UNIT = 4,
        enum_CONFIG_SERVICE_TYPE_LANG = 5,
        enum_CONFIG_SERVICE_TYPE_KEY = 6,
        enum_CONFIG_SERVICE_TYPE_WHEEL = 7,
        enum_CONFIG_SERVICE_TYPE_GPS = 16,
        enum_CONFIG_SERVICE_TYPE_SOUND = 17,
        enum_CONFIG_SERVICE_TYPE_POWER = 18,
        enum_CONFIG_SERVICE_TYPE_DIS_COLOR = 19,
        enum_CONFIG_SERVICE_TYPE_BK = 20,
        enum_CONFIG_SERVICE_TYPE_ALARM = 48,
        enum_CONFIG_SERVICE_TYPE_LAP = 49,
        enum_CONFIG_SERVICE_TYPE_AUTO = 50,
        enum_CONFIG_SERVICE_TYPE_MODE = 51,
        enum_CONFIG_SERVICE_TYPE_ALTITUDE = 52,
        enum_CONFIG_SERVICE_TYPE_DATA = 53
    }

    /** CONFIG_OPERATE_TYPE enum. */
    enum CONFIG_OPERATE_TYPE {
        enum_CONFIG_OPERATE_TYPE_NONE = 0,
        enum_CONFIG_OPERATE_TYPE_SET = 1,
        enum_CONFIG_OPERATE_TYPE_GET = 2,
        enum_CONFIG_OPERATE_TYPE_SEND = 3,
        enum_CONFIG_OPERATE_TYPE_ADD = 4,
        enum_CONFIG_OPERATE_TYPE_DEL = 5,
        enum_CONFIG_OPERATE_TYPE_GET_MODULE_INFO = 6,
        enum_CONFIG_OPERATE_TYPE_CTRL = 7
    }

    /** SOUND_TYPE enum. */
    enum SOUND_TYPE {
        enum_SOUND_TYPE_INVALID = 0,
        enum_SOUND_RECORD_START = 1,
        enum_SOUND_RECORD_PAUSE = 2,
        enum_SOUND_RECORD_SAVE = 4,
        enum_SOUND_LAP = 8,
        enum_SOUND_ALART = 16,
        enum_SOUND_KEY = 32,
        enum_SOUND_USB = 64,
        enum_SOUND_GPS = 128,
        enum_SOUND_SENSOR = 256,
        enum_SOUND_CALL = 512,
        enum_SOUND_SOCIAL = 1024,
        enum_SOUND_BURGLAR_ALARM = 2048,
        enum_SOUND_DEV_FIND = 4096
    }

    /** SOUND_SCENE_TYPE enum. */
    enum SOUND_SCENE_TYPE {
        enum_SOUND_SCENE_TYPE_INVALID = 0,
        enum_ALL_SCENE = 1,
        enum_RECORDING_SCENE = 2
    }

    /** Properties of a sound_set_msg. */
    interface Isound_set_msg {

        /** sound_set_msg soundType */
        soundType?: (number|null);

        /** sound_set_msg soundScene */
        soundScene?: (config.SOUND_SCENE_TYPE|null);

        /** sound_set_msg status */
        status?: (number|null);
    }

    /** Represents a sound_set_msg. */
    class sound_set_msg implements Isound_set_msg {

        /**
         * Constructs a new sound_set_msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.Isound_set_msg);

        /** sound_set_msg soundType. */
        public soundType: number;

        /** sound_set_msg soundScene. */
        public soundScene: config.SOUND_SCENE_TYPE;

        /** sound_set_msg status. */
        public status: number;

        /**
         * Creates a new sound_set_msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns sound_set_msg instance
         */
        public static create(properties?: config.Isound_set_msg): config.sound_set_msg;

        /**
         * Encodes the specified sound_set_msg message. Does not implicitly {@link config.sound_set_msg.verify|verify} messages.
         * @param message sound_set_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.Isound_set_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified sound_set_msg message, length delimited. Does not implicitly {@link config.sound_set_msg.verify|verify} messages.
         * @param message sound_set_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.Isound_set_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a sound_set_msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns sound_set_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.sound_set_msg;

        /**
         * Decodes a sound_set_msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns sound_set_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.sound_set_msg;

        /**
         * Verifies a sound_set_msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a sound_set_msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns sound_set_msg
         */
        public static fromObject(object: { [k: string]: any }): config.sound_set_msg;

        /**
         * Creates a plain object from a sound_set_msg message. Also converts values to other types if specified.
         * @param message sound_set_msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.sound_set_msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this sound_set_msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for sound_set_msg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** KEY_TYPE enum. */
    enum KEY_TYPE {
        enum_KEY_TYPE_INVALID = 0,
        enum_KEY1 = 1,
        enum_KEY2 = 2,
        enum_KEY3 = 3,
        enum_KEY4 = 4,
        enum_KEY5 = 5,
        enum_KEY6 = 6
    }

    /** KEY_FUNCTION_TYPE enum. */
    enum KEY_FUNCTION_TYPE {
        enum_KEY_FUNCTION_TYPE_INVALID = 0,
        enum_RECORD_STATUS_MANUAL_PAUSE = 1,
        enum_RECORD_STATUS_MANUAL_LAP = 2
    }

    /** Properties of a key_set_msg. */
    interface Ikey_set_msg {

        /** key_set_msg keyType */
        keyType?: (config.KEY_TYPE|null);

        /** key_set_msg keyFunctionType */
        keyFunctionType?: (config.KEY_FUNCTION_TYPE|null);
    }

    /** Represents a key_set_msg. */
    class key_set_msg implements Ikey_set_msg {

        /**
         * Constructs a new key_set_msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.Ikey_set_msg);

        /** key_set_msg keyType. */
        public keyType: config.KEY_TYPE;

        /** key_set_msg keyFunctionType. */
        public keyFunctionType: config.KEY_FUNCTION_TYPE;

        /**
         * Creates a new key_set_msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns key_set_msg instance
         */
        public static create(properties?: config.Ikey_set_msg): config.key_set_msg;

        /**
         * Encodes the specified key_set_msg message. Does not implicitly {@link config.key_set_msg.verify|verify} messages.
         * @param message key_set_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.Ikey_set_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified key_set_msg message, length delimited. Does not implicitly {@link config.key_set_msg.verify|verify} messages.
         * @param message key_set_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.Ikey_set_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a key_set_msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns key_set_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.key_set_msg;

        /**
         * Decodes a key_set_msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns key_set_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.key_set_msg;

        /**
         * Verifies a key_set_msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a key_set_msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns key_set_msg
         */
        public static fromObject(object: { [k: string]: any }): config.key_set_msg;

        /**
         * Creates a plain object from a key_set_msg message. Also converts values to other types if specified.
         * @param message key_set_msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.key_set_msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this key_set_msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for key_set_msg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** AUTO_TYPE enum. */
    enum AUTO_TYPE {
        enum_AUTO_TYPE_INVALID = 0,
        enum_PAUSE = 1,
        enum_RECORD_START = 2,
        enum_POWER_OFF = 3,
        enum_SLEEP = 4,
        enum_HOME_PAGE_BACK = 5,
        enum_SMART_SAVE = 6,
        enum_POWER_SAVE = 7,
        enum_PAGE_AUTO = 8,
        enum_MOTION_CHECK = 9
    }

    /** POWER_SAVE_STATUS enum. */
    enum POWER_SAVE_STATUS {
        POWER_SAVE_STATUS_OFF = 0,
        POWER_SAVE_STATUS_ON = 1,
        POWER_SAVE_STATUS_SMART = 2
    }

    /** PAGE_AUTO_STATUS enum. */
    enum PAGE_AUTO_STATUS {
        PAGE_AUTO_STATUS_OFF = 0,
        PAGE_AUTO_STATUS_ON = 1,
        PAGE_AUTO_STATUS_FAST = 2,
        PAGE_AUTO_STATUS_SLOW = 3,
        PAGE_AUTO_STATUS_MAIN = 4
    }

    /** Properties of an auto_set_msg. */
    interface Iauto_set_msg {

        /** auto_set_msg autoType */
        autoType?: (config.AUTO_TYPE|null);

        /** auto_set_msg status */
        status?: (number|null);

        /** auto_set_msg param1 */
        param1?: (number|null);
    }

    /** Represents an auto_set_msg. */
    class auto_set_msg implements Iauto_set_msg {

        /**
         * Constructs a new auto_set_msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.Iauto_set_msg);

        /** auto_set_msg autoType. */
        public autoType: config.AUTO_TYPE;

        /** auto_set_msg status. */
        public status: number;

        /** auto_set_msg param1. */
        public param1: number;

        /**
         * Creates a new auto_set_msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns auto_set_msg instance
         */
        public static create(properties?: config.Iauto_set_msg): config.auto_set_msg;

        /**
         * Encodes the specified auto_set_msg message. Does not implicitly {@link config.auto_set_msg.verify|verify} messages.
         * @param message auto_set_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.Iauto_set_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified auto_set_msg message, length delimited. Does not implicitly {@link config.auto_set_msg.verify|verify} messages.
         * @param message auto_set_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.Iauto_set_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an auto_set_msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns auto_set_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.auto_set_msg;

        /**
         * Decodes an auto_set_msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns auto_set_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.auto_set_msg;

        /**
         * Verifies an auto_set_msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an auto_set_msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns auto_set_msg
         */
        public static fromObject(object: { [k: string]: any }): config.auto_set_msg;

        /**
         * Creates a plain object from an auto_set_msg message. Also converts values to other types if specified.
         * @param message auto_set_msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.auto_set_msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this auto_set_msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for auto_set_msg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** ALARM_TYPE enum. */
    enum ALARM_TYPE {
        ALARM_TYPE_INVALID = 0,
        ALARM_TYPE_RIDE_TIME = 1,
        ALARM_TYPE_RIDE_DISTANCE = 2,
        ALARM_TYPE_HRM = 3,
        ALARM_TYPE_CAD = 4,
        ALARM_TYPE_PWR = 5,
        ALARM_TYPE_CALORIE = 6,
        ALARM_TYPE_SPEED = 7,
        ALARM_TYPE_WATER = 8,
        ALARM_TYPE_FOOD = 9
    }

    /** ALARM_SELECT enum. */
    enum ALARM_SELECT {
        ALARM_SELECT_INVALID = 0,
        ALARM_SELECT_RIDE_TIME = 1,
        ALARM_SELECT_DISTANCE = 2,
        ALARM_SELECT_CALORIE = 3
    }

    /** Properties of an alarm_select_info. */
    interface Ialarm_select_info {

        /** alarm_select_info selectType */
        selectType?: (config.ALARM_SELECT|null);

        /** alarm_select_info value */
        value?: (number|null);
    }

    /** Represents an alarm_select_info. */
    class alarm_select_info implements Ialarm_select_info {

        /**
         * Constructs a new alarm_select_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.Ialarm_select_info);

        /** alarm_select_info selectType. */
        public selectType: config.ALARM_SELECT;

        /** alarm_select_info value. */
        public value: number;

        /**
         * Creates a new alarm_select_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns alarm_select_info instance
         */
        public static create(properties?: config.Ialarm_select_info): config.alarm_select_info;

        /**
         * Encodes the specified alarm_select_info message. Does not implicitly {@link config.alarm_select_info.verify|verify} messages.
         * @param message alarm_select_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.Ialarm_select_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified alarm_select_info message, length delimited. Does not implicitly {@link config.alarm_select_info.verify|verify} messages.
         * @param message alarm_select_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.Ialarm_select_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an alarm_select_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns alarm_select_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.alarm_select_info;

        /**
         * Decodes an alarm_select_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns alarm_select_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.alarm_select_info;

        /**
         * Verifies an alarm_select_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an alarm_select_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns alarm_select_info
         */
        public static fromObject(object: { [k: string]: any }): config.alarm_select_info;

        /**
         * Creates a plain object from an alarm_select_info message. Also converts values to other types if specified.
         * @param message alarm_select_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.alarm_select_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this alarm_select_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for alarm_select_info
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an alarm_params_set_msg. */
    interface Ialarm_params_set_msg {

        /** alarm_params_set_msg alarmType */
        alarmType: config.ALARM_TYPE;

        /** alarm_params_set_msg valueMax */
        valueMax?: (number|null);

        /** alarm_params_set_msg valueMin */
        valueMin?: (number|null);

        /** alarm_params_set_msg status */
        status: number;

        /** alarm_params_set_msg selectType */
        selectType?: (config.ALARM_SELECT|null);

        /** alarm_params_set_msg selectInfo */
        selectInfo?: (config.Ialarm_select_info[]|null);
    }

    /** Represents an alarm_params_set_msg. */
    class alarm_params_set_msg implements Ialarm_params_set_msg {

        /**
         * Constructs a new alarm_params_set_msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.Ialarm_params_set_msg);

        /** alarm_params_set_msg alarmType. */
        public alarmType: config.ALARM_TYPE;

        /** alarm_params_set_msg valueMax. */
        public valueMax: number;

        /** alarm_params_set_msg valueMin. */
        public valueMin: number;

        /** alarm_params_set_msg status. */
        public status: number;

        /** alarm_params_set_msg selectType. */
        public selectType: config.ALARM_SELECT;

        /** alarm_params_set_msg selectInfo. */
        public selectInfo: config.Ialarm_select_info[];

        /**
         * Creates a new alarm_params_set_msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns alarm_params_set_msg instance
         */
        public static create(properties?: config.Ialarm_params_set_msg): config.alarm_params_set_msg;

        /**
         * Encodes the specified alarm_params_set_msg message. Does not implicitly {@link config.alarm_params_set_msg.verify|verify} messages.
         * @param message alarm_params_set_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.Ialarm_params_set_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified alarm_params_set_msg message, length delimited. Does not implicitly {@link config.alarm_params_set_msg.verify|verify} messages.
         * @param message alarm_params_set_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.Ialarm_params_set_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an alarm_params_set_msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns alarm_params_set_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.alarm_params_set_msg;

        /**
         * Decodes an alarm_params_set_msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns alarm_params_set_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.alarm_params_set_msg;

        /**
         * Verifies an alarm_params_set_msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an alarm_params_set_msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns alarm_params_set_msg
         */
        public static fromObject(object: { [k: string]: any }): config.alarm_params_set_msg;

        /**
         * Creates a plain object from an alarm_params_set_msg message. Also converts values to other types if specified.
         * @param message alarm_params_set_msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.alarm_params_set_msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this alarm_params_set_msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for alarm_params_set_msg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an alarm_msg. */
    interface Ialarm_msg {

        /** alarm_msg setMsg */
        setMsg?: (config.Ialarm_params_set_msg[]|null);

        /** alarm_msg alarmIntervalTime */
        alarmIntervalTime?: (number|null);
    }

    /** Represents an alarm_msg. */
    class alarm_msg implements Ialarm_msg {

        /**
         * Constructs a new alarm_msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.Ialarm_msg);

        /** alarm_msg setMsg. */
        public setMsg: config.Ialarm_params_set_msg[];

        /** alarm_msg alarmIntervalTime. */
        public alarmIntervalTime: number;

        /**
         * Creates a new alarm_msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns alarm_msg instance
         */
        public static create(properties?: config.Ialarm_msg): config.alarm_msg;

        /**
         * Encodes the specified alarm_msg message. Does not implicitly {@link config.alarm_msg.verify|verify} messages.
         * @param message alarm_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.Ialarm_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified alarm_msg message, length delimited. Does not implicitly {@link config.alarm_msg.verify|verify} messages.
         * @param message alarm_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.Ialarm_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an alarm_msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns alarm_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.alarm_msg;

        /**
         * Decodes an alarm_msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns alarm_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.alarm_msg;

        /**
         * Verifies an alarm_msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an alarm_msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns alarm_msg
         */
        public static fromObject(object: { [k: string]: any }): config.alarm_msg;

        /**
         * Creates a plain object from an alarm_msg message. Also converts values to other types if specified.
         * @param message alarm_msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.alarm_msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this alarm_msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for alarm_msg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** LAP_TYPE enum. */
    enum LAP_TYPE {
        LAP_TYPE_INVALID = 0,
        LAP_TYPE_LOCATION = 1,
        LAP_TYPE_TIME = 2,
        LAP_TYPE_DISTANCE = 3
    }

    /** Properties of a lap_msg. */
    interface Ilap_msg {

        /** lap_msg lapType */
        lapType: config.LAP_TYPE;

        /** lap_msg value */
        value?: (number|null);

        /** lap_msg status */
        status?: (number|null);
    }

    /** Represents a lap_msg. */
    class lap_msg implements Ilap_msg {

        /**
         * Constructs a new lap_msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.Ilap_msg);

        /** lap_msg lapType. */
        public lapType: config.LAP_TYPE;

        /** lap_msg value. */
        public value: number;

        /** lap_msg status. */
        public status: number;

        /**
         * Creates a new lap_msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns lap_msg instance
         */
        public static create(properties?: config.Ilap_msg): config.lap_msg;

        /**
         * Encodes the specified lap_msg message. Does not implicitly {@link config.lap_msg.verify|verify} messages.
         * @param message lap_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.Ilap_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified lap_msg message, length delimited. Does not implicitly {@link config.lap_msg.verify|verify} messages.
         * @param message lap_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.Ilap_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a lap_msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns lap_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.lap_msg;

        /**
         * Decodes a lap_msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns lap_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.lap_msg;

        /**
         * Verifies a lap_msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a lap_msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns lap_msg
         */
        public static fromObject(object: { [k: string]: any }): config.lap_msg;

        /**
         * Creates a plain object from a lap_msg message. Also converts values to other types if specified.
         * @param message lap_msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.lap_msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this lap_msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for lap_msg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** UNIT_TYPE enum. */
    enum UNIT_TYPE {
        enum_UNIT_TYPE_INVALID = 0,
        enum_UNIT_TYPE_METRIC = 1,
        enum_UNIT_TYPE_INCH = 2
    }

    /** UNIT_ITEM enum. */
    enum UNIT_ITEM {
        enum_UNIT_ITEM_INVALID = 0,
        enum_UNIT_ITEM_DISTANCE = 1,
        enum_UNIT_ITEM_ELEVATION = 2,
        enum_UNIT_ITEM_WEIGHT = 3,
        enum_UNIT_ITEM_TEMPERATURE = 4
    }

    /** Properties of an unit_msg. */
    interface Iunit_msg {

        /** unit_msg unitItem */
        unitItem?: (config.UNIT_ITEM|null);

        /** unit_msg unitType */
        unitType?: (config.UNIT_TYPE|null);
    }

    /** Represents an unit_msg. */
    class unit_msg implements Iunit_msg {

        /**
         * Constructs a new unit_msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.Iunit_msg);

        /** unit_msg unitItem. */
        public unitItem: config.UNIT_ITEM;

        /** unit_msg unitType. */
        public unitType: config.UNIT_TYPE;

        /**
         * Creates a new unit_msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns unit_msg instance
         */
        public static create(properties?: config.Iunit_msg): config.unit_msg;

        /**
         * Encodes the specified unit_msg message. Does not implicitly {@link config.unit_msg.verify|verify} messages.
         * @param message unit_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.Iunit_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified unit_msg message, length delimited. Does not implicitly {@link config.unit_msg.verify|verify} messages.
         * @param message unit_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.Iunit_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an unit_msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns unit_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.unit_msg;

        /**
         * Decodes an unit_msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns unit_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.unit_msg;

        /**
         * Verifies an unit_msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an unit_msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns unit_msg
         */
        public static fromObject(object: { [k: string]: any }): config.unit_msg;

        /**
         * Creates a plain object from an unit_msg message. Also converts values to other types if specified.
         * @param message unit_msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.unit_msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this unit_msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for unit_msg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a section_data_msg. */
    interface Isection_data_msg {

        /** section_data_msg hrm */
        hrm?: (number[]|null);

        /** section_data_msg cad */
        cad?: (number[]|null);

        /** section_data_msg spd */
        spd?: (number[]|null);

        /** section_data_msg FTP */
        FTP?: (number|null);

        /** section_data_msg power */
        power?: (number[]|null);
    }

    /** Represents a section_data_msg. */
    class section_data_msg implements Isection_data_msg {

        /**
         * Constructs a new section_data_msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.Isection_data_msg);

        /** section_data_msg hrm. */
        public hrm: number[];

        /** section_data_msg cad. */
        public cad: number[];

        /** section_data_msg spd. */
        public spd: number[];

        /** section_data_msg FTP. */
        public FTP: number;

        /** section_data_msg power. */
        public power: number[];

        /**
         * Creates a new section_data_msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns section_data_msg instance
         */
        public static create(properties?: config.Isection_data_msg): config.section_data_msg;

        /**
         * Encodes the specified section_data_msg message. Does not implicitly {@link config.section_data_msg.verify|verify} messages.
         * @param message section_data_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.Isection_data_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified section_data_msg message, length delimited. Does not implicitly {@link config.section_data_msg.verify|verify} messages.
         * @param message section_data_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.Isection_data_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a section_data_msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns section_data_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.section_data_msg;

        /**
         * Decodes a section_data_msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns section_data_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.section_data_msg;

        /**
         * Verifies a section_data_msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a section_data_msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns section_data_msg
         */
        public static fromObject(object: { [k: string]: any }): config.section_data_msg;

        /**
         * Creates a plain object from a section_data_msg message. Also converts values to other types if specified.
         * @param message section_data_msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.section_data_msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this section_data_msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for section_data_msg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a user_data_msg. */
    interface Iuser_data_msg {

        /** user_data_msg sex */
        sex?: (number|null);

        /** user_data_msg weight */
        weight?: (number|null);

        /** user_data_msg age */
        age?: (number|null);

        /** user_data_msg height */
        height?: (number|null);

        /** user_data_msg timeZone */
        timeZone?: (number|null);

        /** user_data_msg memberId */
        memberId?: (string|null);

        /** user_data_msg updateStatus */
        updateStatus?: (number|null);

        /** user_data_msg sectionData */
        sectionData?: (config.Isection_data_msg|null);
    }

    /** Represents a user_data_msg. */
    class user_data_msg implements Iuser_data_msg {

        /**
         * Constructs a new user_data_msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.Iuser_data_msg);

        /** user_data_msg sex. */
        public sex: number;

        /** user_data_msg weight. */
        public weight: number;

        /** user_data_msg age. */
        public age: number;

        /** user_data_msg height. */
        public height: number;

        /** user_data_msg timeZone. */
        public timeZone: number;

        /** user_data_msg memberId. */
        public memberId: string;

        /** user_data_msg updateStatus. */
        public updateStatus: number;

        /** user_data_msg sectionData. */
        public sectionData?: (config.Isection_data_msg|null);

        /**
         * Creates a new user_data_msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns user_data_msg instance
         */
        public static create(properties?: config.Iuser_data_msg): config.user_data_msg;

        /**
         * Encodes the specified user_data_msg message. Does not implicitly {@link config.user_data_msg.verify|verify} messages.
         * @param message user_data_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.Iuser_data_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified user_data_msg message, length delimited. Does not implicitly {@link config.user_data_msg.verify|verify} messages.
         * @param message user_data_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.Iuser_data_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a user_data_msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns user_data_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.user_data_msg;

        /**
         * Decodes a user_data_msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns user_data_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.user_data_msg;

        /**
         * Verifies a user_data_msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a user_data_msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns user_data_msg
         */
        public static fromObject(object: { [k: string]: any }): config.user_data_msg;

        /**
         * Creates a plain object from a user_data_msg message. Also converts values to other types if specified.
         * @param message user_data_msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.user_data_msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this user_data_msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for user_data_msg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a mode_msg. */
    interface Imode_msg {

        /** mode_msg modeIndex */
        modeIndex?: (number|null);

        /** mode_msg modeColor */
        modeColor?: (number|null);

        /** mode_msg valid */
        valid?: (number|null);

        /** mode_msg inuse */
        inuse?: (number|null);

        /** mode_msg templateIndex */
        templateIndex?: (number|null);

        /** mode_msg modeName */
        modeName?: (string|null);
    }

    /** 模式设置************* */
    class mode_msg implements Imode_msg {

        /**
         * Constructs a new mode_msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.Imode_msg);

        /** mode_msg modeIndex. */
        public modeIndex: number;

        /** mode_msg modeColor. */
        public modeColor: number;

        /** mode_msg valid. */
        public valid: number;

        /** mode_msg inuse. */
        public inuse: number;

        /** mode_msg templateIndex. */
        public templateIndex: number;

        /** mode_msg modeName. */
        public modeName: string;

        /**
         * Creates a new mode_msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns mode_msg instance
         */
        public static create(properties?: config.Imode_msg): config.mode_msg;

        /**
         * Encodes the specified mode_msg message. Does not implicitly {@link config.mode_msg.verify|verify} messages.
         * @param message mode_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.Imode_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified mode_msg message, length delimited. Does not implicitly {@link config.mode_msg.verify|verify} messages.
         * @param message mode_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.Imode_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a mode_msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns mode_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.mode_msg;

        /**
         * Decodes a mode_msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns mode_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.mode_msg;

        /**
         * Verifies a mode_msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a mode_msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns mode_msg
         */
        public static fromObject(object: { [k: string]: any }): config.mode_msg;

        /**
         * Creates a plain object from a mode_msg message. Also converts values to other types if specified.
         * @param message mode_msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.mode_msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this mode_msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for mode_msg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** PAGE_TYPE enum. */
    enum PAGE_TYPE {
        enum_PAGE_TYPE_INVALID = 0,
        enum_PAGE_TYPE_DATA = 1,
        enum_PAGE_TYPE_ELEVATION = 2,
        enum_PAGE_TYPE_MAP = 3,
        enum_PAGE_TYPE_AREA = 4,
        enum_PAGE_TYPE_TRAINING_COURSE = 5,
        enum_PAGE_TYPE_TRAINING_FEC = 6,
        enum_PAGE_TYPE_COMPASS = 7,
        enum_PAGE_TYPE_LAP = 8,
        enum_PAGE_TYPE_ROADBOOK = 9,
        enum_PAGE_TYPE_CLIMB = 10,
        enum_PAGE_TYPE_AIPARTNER = 11,
        enum_PAGE_TYPE_SEGMENT = 12,
        enum_PAGE_TYPE_FITNESS = 13
    }

    /** Properties of a page_msg. */
    interface Ipage_msg {

        /** page_msg pageIndex */
        pageIndex?: (number|null);

        /** page_msg status */
        status?: (number|null);

        /** page_msg data */
        data?: (number[]|null);

        /** page_msg dataSite */
        dataSite?: (number|null);

        /** page_msg pageName */
        pageName?: (string|null);

        /** page_msg pageType */
        pageType?: (config.PAGE_TYPE|null);

        /** page_msg pageMode */
        pageMode?: (number|null);

        /** page_msg mainPageStatus */
        mainPageStatus?: (number|null);

        /** page_msg lineWidth */
        lineWidth?: (number|null);

        /** page_msg graphicDisplay */
        graphicDisplay?: (number|null);
    }

    /** Represents a page_msg. */
    class page_msg implements Ipage_msg {

        /**
         * Constructs a new page_msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.Ipage_msg);

        /** page_msg pageIndex. */
        public pageIndex: number;

        /** page_msg status. */
        public status: number;

        /** page_msg data. */
        public data: number[];

        /** page_msg dataSite. */
        public dataSite: number;

        /** page_msg pageName. */
        public pageName: string;

        /** page_msg pageType. */
        public pageType: config.PAGE_TYPE;

        /** page_msg pageMode. */
        public pageMode: number;

        /** page_msg mainPageStatus. */
        public mainPageStatus: number;

        /** page_msg lineWidth. */
        public lineWidth: number;

        /** page_msg graphicDisplay. */
        public graphicDisplay: number;

        /**
         * Creates a new page_msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns page_msg instance
         */
        public static create(properties?: config.Ipage_msg): config.page_msg;

        /**
         * Encodes the specified page_msg message. Does not implicitly {@link config.page_msg.verify|verify} messages.
         * @param message page_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.Ipage_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified page_msg message, length delimited. Does not implicitly {@link config.page_msg.verify|verify} messages.
         * @param message page_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.Ipage_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a page_msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns page_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.page_msg;

        /**
         * Decodes a page_msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns page_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.page_msg;

        /**
         * Verifies a page_msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a page_msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns page_msg
         */
        public static fromObject(object: { [k: string]: any }): config.page_msg;

        /**
         * Creates a plain object from a page_msg message. Also converts values to other types if specified.
         * @param message page_msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.page_msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this page_msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for page_msg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** LCD_TYPE enum. */
    enum LCD_TYPE {
        INVALID = 0,
        PIXEL_LCD = 1,
        SECTION_LCD = 2
    }

    /** Properties of a cur_page_status_msg. */
    interface Icur_page_status_msg {

        /** cur_page_status_msg pageLineNumMax */
        pageLineNumMax?: (number|null);

        /** cur_page_status_msg pageLineDataMax */
        pageLineDataMax?: (number|null);

        /** cur_page_status_msg dataPageNumMax */
        dataPageNumMax?: (number|null);

        /** cur_page_status_msg unsupportData */
        unsupportData?: (number[]|null);

        /** cur_page_status_msg lcdType */
        lcdType?: (config.LCD_TYPE|null);

        /** cur_page_status_msg supportPageLayout */
        supportPageLayout?: (number[]|null);

        /** cur_page_status_msg mainPageOpen */
        mainPageOpen?: (number|null);
    }

    /** Represents a cur_page_status_msg. */
    class cur_page_status_msg implements Icur_page_status_msg {

        /**
         * Constructs a new cur_page_status_msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.Icur_page_status_msg);

        /** cur_page_status_msg pageLineNumMax. */
        public pageLineNumMax: number;

        /** cur_page_status_msg pageLineDataMax. */
        public pageLineDataMax: number;

        /** cur_page_status_msg dataPageNumMax. */
        public dataPageNumMax: number;

        /** cur_page_status_msg unsupportData. */
        public unsupportData: number[];

        /** cur_page_status_msg lcdType. */
        public lcdType: config.LCD_TYPE;

        /** cur_page_status_msg supportPageLayout. */
        public supportPageLayout: number[];

        /** cur_page_status_msg mainPageOpen. */
        public mainPageOpen: number;

        /**
         * Creates a new cur_page_status_msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns cur_page_status_msg instance
         */
        public static create(properties?: config.Icur_page_status_msg): config.cur_page_status_msg;

        /**
         * Encodes the specified cur_page_status_msg message. Does not implicitly {@link config.cur_page_status_msg.verify|verify} messages.
         * @param message cur_page_status_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.Icur_page_status_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified cur_page_status_msg message, length delimited. Does not implicitly {@link config.cur_page_status_msg.verify|verify} messages.
         * @param message cur_page_status_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.Icur_page_status_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a cur_page_status_msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns cur_page_status_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.cur_page_status_msg;

        /**
         * Decodes a cur_page_status_msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns cur_page_status_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.cur_page_status_msg;

        /**
         * Verifies a cur_page_status_msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a cur_page_status_msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns cur_page_status_msg
         */
        public static fromObject(object: { [k: string]: any }): config.cur_page_status_msg;

        /**
         * Creates a plain object from a cur_page_status_msg message. Also converts values to other types if specified.
         * @param message cur_page_status_msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.cur_page_status_msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this cur_page_status_msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for cur_page_status_msg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a bike_msg. */
    interface Ibike_msg {

        /** bike_msg bikeIndex */
        bikeIndex?: (number|null);

        /** bike_msg bikeName */
        bikeName?: (string|null);

        /** bike_msg bikeWeigth */
        bikeWeigth?: (number|null);

        /** bike_msg wheelDia */
        wheelDia?: (number|null);

        /** bike_msg odometer */
        odometer?: (number|Long|null);

        /** bike_msg autoDia */
        autoDia?: (number|null);

        /** bike_msg bikeStatus */
        bikeStatus?: (number|null);
    }

    /** Represents a bike_msg. */
    class bike_msg implements Ibike_msg {

        /**
         * Constructs a new bike_msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.Ibike_msg);

        /** bike_msg bikeIndex. */
        public bikeIndex: number;

        /** bike_msg bikeName. */
        public bikeName: string;

        /** bike_msg bikeWeigth. */
        public bikeWeigth: number;

        /** bike_msg wheelDia. */
        public wheelDia: number;

        /** bike_msg odometer. */
        public odometer: (number|Long);

        /** bike_msg autoDia. */
        public autoDia: number;

        /** bike_msg bikeStatus. */
        public bikeStatus: number;

        /**
         * Creates a new bike_msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns bike_msg instance
         */
        public static create(properties?: config.Ibike_msg): config.bike_msg;

        /**
         * Encodes the specified bike_msg message. Does not implicitly {@link config.bike_msg.verify|verify} messages.
         * @param message bike_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.Ibike_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified bike_msg message, length delimited. Does not implicitly {@link config.bike_msg.verify|verify} messages.
         * @param message bike_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.Ibike_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a bike_msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns bike_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.bike_msg;

        /**
         * Decodes a bike_msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns bike_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.bike_msg;

        /**
         * Verifies a bike_msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a bike_msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns bike_msg
         */
        public static fromObject(object: { [k: string]: any }): config.bike_msg;

        /**
         * Creates a plain object from a bike_msg message. Also converts values to other types if specified.
         * @param message bike_msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.bike_msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this bike_msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for bike_msg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** LANGUAGE_TYPE enum. */
    enum LANGUAGE_TYPE {
        enum_LANGUAGE_TYPE_INVALID = 0,
        enum_LANGUAGE_TYPE_ENGLISH = 1,
        enum_LANGUAGE_TYPE_SPANISH = 2,
        enum_LANGUAGE_TYPE_FRENCH = 3,
        enum_LANGUAGE_TYPE_GERMAN = 4,
        enum_LANGUAGE_TYPE_JAPANESE = 5,
        enum_LANGUAGE_TYPE_ITALIAN = 6,
        enum_LANGUAGE_TYPE_PORTUGUESE = 7,
        enum_LANGUAGE_TYPE_KOREAN = 8,
        enum_LANGUAGE_TYPE_CHINESE = 9,
        enum_LANGUAGE_TYPE_TAIWANESE = 10,
        enum_LANGUAGE_TYPE_POLISH = 11,
        enum_LANGUAGE_TYPE_CROATIAN = 12,
        enum_LANGUAGE_TYPE_CZECH = 13,
        enum_LANGUAGE_TYPE_DANISH = 14,
        enum_LANGUAGE_TYPE_DUTCH = 15,
        enum_LANGUAGE_TYPE_FINNISH = 16,
        enum_LANGUAGE_TYPE_GREEK = 17,
        enum_LANGUAGE_TYPE_HUNGARIAN = 18,
        enum_LANGUAGE_TYPE_NORWEGIAN = 19,
        enum_LANGUAGE_TYPE_SLOVAKIAN = 20,
        enum_LANGUAGE_TYPE_SLOVENIAN = 21,
        enum_LANGUAGE_TYPE_SWEDISH = 22,
        enum_LANGUAGE_TYPE_RUSSIAN = 23,
        enum_LANGUAGE_TYPE_TURKISH = 24,
        enum_LANGUAGE_TYPE_LATVIAN = 25,
        enum_LANGUAGE_TYPE_UKRAINIAN = 26,
        enum_LANGUAGE_TYPE_ARABIC = 27,
        enum_LANGUAGE_TYPE_FARSI = 28,
        enum_LANGUAGE_TYPE_BULGARIAN = 29,
        enum_LANGUAGE_TYPE_ROMANIAN = 30,
        enum_LANGUAGE_TYPE_THAI = 31,
        enum_LANGUAGE_TYPE_HEBREW = 32,
        enum_LANGUAGE_TYPE_BRAZILIAN_PORTUGUESE = 33,
        enum_LANGUAGE_TYPE_INDONESIAN = 34,
        enum_LANGUAGE_TYPE_MALAYSIAN = 35,
        enum_LANGUAGE_TYPE_VIETNAMESE = 36,
        enum_LANGUAGE_TYPE_BURMESE = 37,
        enum_LANGUAGE_TYPE_MONGOLIAN = 38,
        enum_LANGUAGE_TYPE_ALL = 100,
        enum_LANGUAGE_TYPE_CUSTOM = 254
    }

    /** Properties of a language_msg. */
    interface Ilanguage_msg {

        /** language_msg curLanguage */
        curLanguage: config.LANGUAGE_TYPE;

        /** language_msg supportedLanguage */
        supportedLanguage?: (config.LANGUAGE_TYPE[]|null);
    }

    /** Represents a language_msg. */
    class language_msg implements Ilanguage_msg {

        /**
         * Constructs a new language_msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.Ilanguage_msg);

        /** language_msg curLanguage. */
        public curLanguage: config.LANGUAGE_TYPE;

        /** language_msg supportedLanguage. */
        public supportedLanguage: config.LANGUAGE_TYPE[];

        /**
         * Creates a new language_msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns language_msg instance
         */
        public static create(properties?: config.Ilanguage_msg): config.language_msg;

        /**
         * Encodes the specified language_msg message. Does not implicitly {@link config.language_msg.verify|verify} messages.
         * @param message language_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.Ilanguage_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified language_msg message, length delimited. Does not implicitly {@link config.language_msg.verify|verify} messages.
         * @param message language_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.Ilanguage_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a language_msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns language_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.language_msg;

        /**
         * Decodes a language_msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns language_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.language_msg;

        /**
         * Verifies a language_msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a language_msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns language_msg
         */
        public static fromObject(object: { [k: string]: any }): config.language_msg;

        /**
         * Creates a plain object from a language_msg message. Also converts values to other types if specified.
         * @param message language_msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.language_msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this language_msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for language_msg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a backlight_msg. */
    interface Ibacklight_msg {

        /** backlight_msg backlightNightOn */
        backlightNightOn?: (number|null);

        /** backlight_msg backlingTime */
        backlingTime?: (number|null);

        /** backlight_msg backlightAuto */
        backlightAuto?: (number|null);

        /** backlight_msg backlightDayPercent */
        backlightDayPercent?: (number|null);

        /** backlight_msg backlightNightPercent */
        backlightNightPercent?: (number|null);
    }

    /** Represents a backlight_msg. */
    class backlight_msg implements Ibacklight_msg {

        /**
         * Constructs a new backlight_msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.Ibacklight_msg);

        /** backlight_msg backlightNightOn. */
        public backlightNightOn: number;

        /** backlight_msg backlingTime. */
        public backlingTime: number;

        /** backlight_msg backlightAuto. */
        public backlightAuto: number;

        /** backlight_msg backlightDayPercent. */
        public backlightDayPercent: number;

        /** backlight_msg backlightNightPercent. */
        public backlightNightPercent: number;

        /**
         * Creates a new backlight_msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns backlight_msg instance
         */
        public static create(properties?: config.Ibacklight_msg): config.backlight_msg;

        /**
         * Encodes the specified backlight_msg message. Does not implicitly {@link config.backlight_msg.verify|verify} messages.
         * @param message backlight_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.Ibacklight_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified backlight_msg message, length delimited. Does not implicitly {@link config.backlight_msg.verify|verify} messages.
         * @param message backlight_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.Ibacklight_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a backlight_msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns backlight_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.backlight_msg;

        /**
         * Decodes a backlight_msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns backlight_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.backlight_msg;

        /**
         * Verifies a backlight_msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a backlight_msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns backlight_msg
         */
        public static fromObject(object: { [k: string]: any }): config.backlight_msg;

        /**
         * Creates a plain object from a backlight_msg message. Also converts values to other types if specified.
         * @param message backlight_msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.backlight_msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this backlight_msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for backlight_msg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** DATA_TYPE enum. */
    enum DATA_TYPE {
        enum_DATA_TYPE_INVALID = 0,
        enum_DATA_TYPE_PWR_WITH_ZERO = 1,
        enum_DATA_TYPE_CAD_WITH_ZERO = 2
    }

    /** Properties of a data_msg. */
    interface Idata_msg {

        /** data_msg dataType */
        dataType?: (config.DATA_TYPE|null);

        /** data_msg status */
        status?: (number|null);
    }

    /** Represents a data_msg. */
    class data_msg implements Idata_msg {

        /**
         * Constructs a new data_msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.Idata_msg);

        /** data_msg dataType. */
        public dataType: config.DATA_TYPE;

        /** data_msg status. */
        public status: number;

        /**
         * Creates a new data_msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns data_msg instance
         */
        public static create(properties?: config.Idata_msg): config.data_msg;

        /**
         * Encodes the specified data_msg message. Does not implicitly {@link config.data_msg.verify|verify} messages.
         * @param message data_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.Idata_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified data_msg message, length delimited. Does not implicitly {@link config.data_msg.verify|verify} messages.
         * @param message data_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.Idata_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a data_msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns data_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.data_msg;

        /**
         * Decodes a data_msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns data_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.data_msg;

        /**
         * Verifies a data_msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a data_msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns data_msg
         */
        public static fromObject(object: { [k: string]: any }): config.data_msg;

        /**
         * Creates a plain object from a data_msg message. Also converts values to other types if specified.
         * @param message data_msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.data_msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this data_msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for data_msg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a config_msg. */
    interface Iconfig_msg {

        /** config_msg serviceType */
        serviceType: common.service_type_index;

        /** config_msg configSeviceType */
        configSeviceType: config.CONFIG_SERVICE_TYPE;

        /** config_msg configOperateType */
        configOperateType: config.CONFIG_OPERATE_TYPE;

        /** config_msg userDataMessage */
        userDataMessage?: (config.Iuser_data_msg|null);

        /** config_msg pageMessage */
        pageMessage?: (config.Ipage_msg[]|null);

        /** config_msg bikeMessage */
        bikeMessage?: (config.Ibike_msg[]|null);

        /** config_msg unitMessage */
        unitMessage?: (config.Iunit_msg[]|null);

        /** config_msg pageStatusMessage */
        pageStatusMessage?: (config.Icur_page_status_msg|null);

        /** config_msg altitude */
        altitude?: (number|null);

        /** config_msg languageMessage */
        languageMessage?: (config.Ilanguage_msg|null);

        /** config_msg backlightMessage */
        backlightMessage?: (config.Ibacklight_msg|null);

        /** config_msg curOperateMode */
        curOperateMode?: (number|null);

        /** config_msg modeMessage */
        modeMessage?: (config.Imode_msg[]|null);

        /** config_msg alarmMessage */
        alarmMessage?: (config.Ialarm_msg[]|null);

        /** config_msg lapMessage */
        lapMessage?: (config.Ilap_msg[]|null);

        /** config_msg autoSetMessage */
        autoSetMessage?: (config.Iauto_set_msg[]|null);

        /** config_msg keySetMessage */
        keySetMessage?: (config.Ikey_set_msg[]|null);

        /** config_msg soundSetMessage */
        soundSetMessage?: (config.Isound_set_msg[]|null);

        /** config_msg dataMessage */
        dataMessage?: (config.Idata_msg[]|null);
    }

    /** Represents a config_msg. */
    class config_msg implements Iconfig_msg {

        /**
         * Constructs a new config_msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: config.Iconfig_msg);

        /** config_msg serviceType. */
        public serviceType: common.service_type_index;

        /** config_msg configSeviceType. */
        public configSeviceType: config.CONFIG_SERVICE_TYPE;

        /** config_msg configOperateType. */
        public configOperateType: config.CONFIG_OPERATE_TYPE;

        /** config_msg userDataMessage. */
        public userDataMessage?: (config.Iuser_data_msg|null);

        /** config_msg pageMessage. */
        public pageMessage: config.Ipage_msg[];

        /** config_msg bikeMessage. */
        public bikeMessage: config.Ibike_msg[];

        /** config_msg unitMessage. */
        public unitMessage: config.Iunit_msg[];

        /** config_msg pageStatusMessage. */
        public pageStatusMessage?: (config.Icur_page_status_msg|null);

        /** config_msg altitude. */
        public altitude: number;

        /** config_msg languageMessage. */
        public languageMessage?: (config.Ilanguage_msg|null);

        /** config_msg backlightMessage. */
        public backlightMessage?: (config.Ibacklight_msg|null);

        /** config_msg curOperateMode. */
        public curOperateMode: number;

        /** config_msg modeMessage. */
        public modeMessage: config.Imode_msg[];

        /** config_msg alarmMessage. */
        public alarmMessage: config.Ialarm_msg[];

        /** config_msg lapMessage. */
        public lapMessage: config.Ilap_msg[];

        /** config_msg autoSetMessage. */
        public autoSetMessage: config.Iauto_set_msg[];

        /** config_msg keySetMessage. */
        public keySetMessage: config.Ikey_set_msg[];

        /** config_msg soundSetMessage. */
        public soundSetMessage: config.Isound_set_msg[];

        /** config_msg dataMessage. */
        public dataMessage: config.Idata_msg[];

        /**
         * Creates a new config_msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns config_msg instance
         */
        public static create(properties?: config.Iconfig_msg): config.config_msg;

        /**
         * Encodes the specified config_msg message. Does not implicitly {@link config.config_msg.verify|verify} messages.
         * @param message config_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: config.Iconfig_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified config_msg message, length delimited. Does not implicitly {@link config.config_msg.verify|verify} messages.
         * @param message config_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: config.Iconfig_msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a config_msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns config_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): config.config_msg;

        /**
         * Decodes a config_msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns config_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): config.config_msg;

        /**
         * Verifies a config_msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a config_msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns config_msg
         */
        public static fromObject(object: { [k: string]: any }): config.config_msg;

        /**
         * Creates a plain object from a config_msg message. Also converts values to other types if specified.
         * @param message config_msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: config.config_msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this config_msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for config_msg
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
