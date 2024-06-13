/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "@ohos/protobufjs";
import Long from 'long';
$protobuf.util.Long=Long
$protobuf.configure()

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const config = $root.config = (() => {

    /**
     * Namespace config.
     * @exports config
     * @namespace
     */
    const config = {};

    /**
     * CONFIG_SERVICE_TYPE enum.
     * @name config.CONFIG_SERVICE_TYPE
     * @enum {number}
     * @property {number} enum_CONFIG_SERVICE_TYPE_NONE=0 enum_CONFIG_SERVICE_TYPE_NONE value
     * @property {number} enum_CONFIG_SERVICE_TYPE_USER=1 enum_CONFIG_SERVICE_TYPE_USER value
     * @property {number} enum_CONFIG_SERVICE_TYPE_PAGE=2 enum_CONFIG_SERVICE_TYPE_PAGE value
     * @property {number} enum_CONFIG_SERVICE_TYPE_BIKE=3 enum_CONFIG_SERVICE_TYPE_BIKE value
     * @property {number} enum_CONFIG_SERVICE_TYPE_UNIT=4 enum_CONFIG_SERVICE_TYPE_UNIT value
     * @property {number} enum_CONFIG_SERVICE_TYPE_LANG=5 enum_CONFIG_SERVICE_TYPE_LANG value
     * @property {number} enum_CONFIG_SERVICE_TYPE_KEY=6 enum_CONFIG_SERVICE_TYPE_KEY value
     * @property {number} enum_CONFIG_SERVICE_TYPE_WHEEL=7 enum_CONFIG_SERVICE_TYPE_WHEEL value
     * @property {number} enum_CONFIG_SERVICE_TYPE_GPS=16 enum_CONFIG_SERVICE_TYPE_GPS value
     * @property {number} enum_CONFIG_SERVICE_TYPE_SOUND=17 enum_CONFIG_SERVICE_TYPE_SOUND value
     * @property {number} enum_CONFIG_SERVICE_TYPE_POWER=18 enum_CONFIG_SERVICE_TYPE_POWER value
     * @property {number} enum_CONFIG_SERVICE_TYPE_DIS_COLOR=19 enum_CONFIG_SERVICE_TYPE_DIS_COLOR value
     * @property {number} enum_CONFIG_SERVICE_TYPE_BK=20 enum_CONFIG_SERVICE_TYPE_BK value
     * @property {number} enum_CONFIG_SERVICE_TYPE_ALARM=48 enum_CONFIG_SERVICE_TYPE_ALARM value
     * @property {number} enum_CONFIG_SERVICE_TYPE_LAP=49 enum_CONFIG_SERVICE_TYPE_LAP value
     * @property {number} enum_CONFIG_SERVICE_TYPE_AUTO=50 enum_CONFIG_SERVICE_TYPE_AUTO value
     * @property {number} enum_CONFIG_SERVICE_TYPE_MODE=51 enum_CONFIG_SERVICE_TYPE_MODE value
     * @property {number} enum_CONFIG_SERVICE_TYPE_ALTITUDE=52 enum_CONFIG_SERVICE_TYPE_ALTITUDE value
     * @property {number} enum_CONFIG_SERVICE_TYPE_DATA=53 enum_CONFIG_SERVICE_TYPE_DATA value
     */
    config.CONFIG_SERVICE_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_CONFIG_SERVICE_TYPE_NONE"] = 0;
        values[valuesById[1] = "enum_CONFIG_SERVICE_TYPE_USER"] = 1;
        values[valuesById[2] = "enum_CONFIG_SERVICE_TYPE_PAGE"] = 2;
        values[valuesById[3] = "enum_CONFIG_SERVICE_TYPE_BIKE"] = 3;
        values[valuesById[4] = "enum_CONFIG_SERVICE_TYPE_UNIT"] = 4;
        values[valuesById[5] = "enum_CONFIG_SERVICE_TYPE_LANG"] = 5;
        values[valuesById[6] = "enum_CONFIG_SERVICE_TYPE_KEY"] = 6;
        values[valuesById[7] = "enum_CONFIG_SERVICE_TYPE_WHEEL"] = 7;
        values[valuesById[16] = "enum_CONFIG_SERVICE_TYPE_GPS"] = 16;
        values[valuesById[17] = "enum_CONFIG_SERVICE_TYPE_SOUND"] = 17;
        values[valuesById[18] = "enum_CONFIG_SERVICE_TYPE_POWER"] = 18;
        values[valuesById[19] = "enum_CONFIG_SERVICE_TYPE_DIS_COLOR"] = 19;
        values[valuesById[20] = "enum_CONFIG_SERVICE_TYPE_BK"] = 20;
        values[valuesById[48] = "enum_CONFIG_SERVICE_TYPE_ALARM"] = 48;
        values[valuesById[49] = "enum_CONFIG_SERVICE_TYPE_LAP"] = 49;
        values[valuesById[50] = "enum_CONFIG_SERVICE_TYPE_AUTO"] = 50;
        values[valuesById[51] = "enum_CONFIG_SERVICE_TYPE_MODE"] = 51;
        values[valuesById[52] = "enum_CONFIG_SERVICE_TYPE_ALTITUDE"] = 52;
        values[valuesById[53] = "enum_CONFIG_SERVICE_TYPE_DATA"] = 53;
        return values;
    })();

    /**
     * CONFIG_OPERATE_TYPE enum.
     * @name config.CONFIG_OPERATE_TYPE
     * @enum {number}
     * @property {number} enum_CONFIG_OPERATE_TYPE_NONE=0 enum_CONFIG_OPERATE_TYPE_NONE value
     * @property {number} enum_CONFIG_OPERATE_TYPE_SET=1 enum_CONFIG_OPERATE_TYPE_SET value
     * @property {number} enum_CONFIG_OPERATE_TYPE_GET=2 enum_CONFIG_OPERATE_TYPE_GET value
     * @property {number} enum_CONFIG_OPERATE_TYPE_SEND=3 enum_CONFIG_OPERATE_TYPE_SEND value
     * @property {number} enum_CONFIG_OPERATE_TYPE_ADD=4 enum_CONFIG_OPERATE_TYPE_ADD value
     * @property {number} enum_CONFIG_OPERATE_TYPE_DEL=5 enum_CONFIG_OPERATE_TYPE_DEL value
     * @property {number} enum_CONFIG_OPERATE_TYPE_GET_MODULE_INFO=6 enum_CONFIG_OPERATE_TYPE_GET_MODULE_INFO value
     * @property {number} enum_CONFIG_OPERATE_TYPE_CTRL=7 enum_CONFIG_OPERATE_TYPE_CTRL value
     */
    config.CONFIG_OPERATE_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_CONFIG_OPERATE_TYPE_NONE"] = 0;
        values[valuesById[1] = "enum_CONFIG_OPERATE_TYPE_SET"] = 1;
        values[valuesById[2] = "enum_CONFIG_OPERATE_TYPE_GET"] = 2;
        values[valuesById[3] = "enum_CONFIG_OPERATE_TYPE_SEND"] = 3;
        values[valuesById[4] = "enum_CONFIG_OPERATE_TYPE_ADD"] = 4;
        values[valuesById[5] = "enum_CONFIG_OPERATE_TYPE_DEL"] = 5;
        values[valuesById[6] = "enum_CONFIG_OPERATE_TYPE_GET_MODULE_INFO"] = 6;
        values[valuesById[7] = "enum_CONFIG_OPERATE_TYPE_CTRL"] = 7;
        return values;
    })();

    /**
     * SOUND_TYPE enum.
     * @name config.SOUND_TYPE
     * @enum {number}
     * @property {number} enum_SOUND_TYPE_INVALID=0 enum_SOUND_TYPE_INVALID value
     * @property {number} enum_SOUND_RECORD_START=1 enum_SOUND_RECORD_START value
     * @property {number} enum_SOUND_RECORD_PAUSE=2 enum_SOUND_RECORD_PAUSE value
     * @property {number} enum_SOUND_RECORD_SAVE=4 enum_SOUND_RECORD_SAVE value
     * @property {number} enum_SOUND_LAP=8 enum_SOUND_LAP value
     * @property {number} enum_SOUND_ALART=16 enum_SOUND_ALART value
     * @property {number} enum_SOUND_KEY=32 enum_SOUND_KEY value
     * @property {number} enum_SOUND_USB=64 enum_SOUND_USB value
     * @property {number} enum_SOUND_GPS=128 enum_SOUND_GPS value
     * @property {number} enum_SOUND_SENSOR=256 enum_SOUND_SENSOR value
     * @property {number} enum_SOUND_CALL=512 enum_SOUND_CALL value
     * @property {number} enum_SOUND_SOCIAL=1024 enum_SOUND_SOCIAL value
     * @property {number} enum_SOUND_BURGLAR_ALARM=2048 enum_SOUND_BURGLAR_ALARM value
     * @property {number} enum_SOUND_DEV_FIND=4096 enum_SOUND_DEV_FIND value
     */
    config.SOUND_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_SOUND_TYPE_INVALID"] = 0;
        values[valuesById[1] = "enum_SOUND_RECORD_START"] = 1;
        values[valuesById[2] = "enum_SOUND_RECORD_PAUSE"] = 2;
        values[valuesById[4] = "enum_SOUND_RECORD_SAVE"] = 4;
        values[valuesById[8] = "enum_SOUND_LAP"] = 8;
        values[valuesById[16] = "enum_SOUND_ALART"] = 16;
        values[valuesById[32] = "enum_SOUND_KEY"] = 32;
        values[valuesById[64] = "enum_SOUND_USB"] = 64;
        values[valuesById[128] = "enum_SOUND_GPS"] = 128;
        values[valuesById[256] = "enum_SOUND_SENSOR"] = 256;
        values[valuesById[512] = "enum_SOUND_CALL"] = 512;
        values[valuesById[1024] = "enum_SOUND_SOCIAL"] = 1024;
        values[valuesById[2048] = "enum_SOUND_BURGLAR_ALARM"] = 2048;
        values[valuesById[4096] = "enum_SOUND_DEV_FIND"] = 4096;
        return values;
    })();

    /**
     * SOUND_SCENE_TYPE enum.
     * @name config.SOUND_SCENE_TYPE
     * @enum {number}
     * @property {number} enum_SOUND_SCENE_TYPE_INVALID=0 enum_SOUND_SCENE_TYPE_INVALID value
     * @property {number} enum_ALL_SCENE=1 enum_ALL_SCENE value
     * @property {number} enum_RECORDING_SCENE=2 enum_RECORDING_SCENE value
     */
    config.SOUND_SCENE_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_SOUND_SCENE_TYPE_INVALID"] = 0;
        values[valuesById[1] = "enum_ALL_SCENE"] = 1;
        values[valuesById[2] = "enum_RECORDING_SCENE"] = 2;
        return values;
    })();

    config.sound_set_msg = (function() {

        /**
         * Properties of a sound_set_msg.
         * @memberof config
         * @interface Isound_set_msg
         * @property {number|null} [soundType] sound_set_msg soundType
         * @property {config.SOUND_SCENE_TYPE|null} [soundScene] sound_set_msg soundScene
         * @property {number|null} [status] sound_set_msg status
         */

        /**
         * Constructs a new sound_set_msg.
         * @memberof config
         * @classdesc Represents a sound_set_msg.
         * @implements Isound_set_msg
         * @constructor
         * @param {config.Isound_set_msg=} [properties] Properties to set
         */
        function sound_set_msg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * sound_set_msg soundType.
         * @member {number} soundType
         * @memberof config.sound_set_msg
         * @instance
         */
        sound_set_msg.prototype.soundType = 0;

        /**
         * sound_set_msg soundScene.
         * @member {config.SOUND_SCENE_TYPE} soundScene
         * @memberof config.sound_set_msg
         * @instance
         */
        sound_set_msg.prototype.soundScene = 0;

        /**
         * sound_set_msg status.
         * @member {number} status
         * @memberof config.sound_set_msg
         * @instance
         */
        sound_set_msg.prototype.status = 0;

        /**
         * Creates a new sound_set_msg instance using the specified properties.
         * @function create
         * @memberof config.sound_set_msg
         * @static
         * @param {config.Isound_set_msg=} [properties] Properties to set
         * @returns {config.sound_set_msg} sound_set_msg instance
         */
        sound_set_msg.create = function create(properties) {
            return new sound_set_msg(properties);
        };

        /**
         * Encodes the specified sound_set_msg message. Does not implicitly {@link config.sound_set_msg.verify|verify} messages.
         * @function encode
         * @memberof config.sound_set_msg
         * @static
         * @param {config.Isound_set_msg} message sound_set_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        sound_set_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.soundType != null && Object.hasOwnProperty.call(message, "soundType"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.soundType);
            if (message.soundScene != null && Object.hasOwnProperty.call(message, "soundScene"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.soundScene);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.status);
            return writer;
        };

        /**
         * Encodes the specified sound_set_msg message, length delimited. Does not implicitly {@link config.sound_set_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.sound_set_msg
         * @static
         * @param {config.Isound_set_msg} message sound_set_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        sound_set_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a sound_set_msg message from the specified reader or buffer.
         * @function decode
         * @memberof config.sound_set_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.sound_set_msg} sound_set_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        sound_set_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.sound_set_msg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.soundType = reader.uint32();
                        break;
                    }
                case 2: {
                        message.soundScene = reader.int32();
                        break;
                    }
                case 3: {
                        message.status = reader.uint32();
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
         * Decodes a sound_set_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.sound_set_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.sound_set_msg} sound_set_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        sound_set_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a sound_set_msg message.
         * @function verify
         * @memberof config.sound_set_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        sound_set_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.soundType != null && message.hasOwnProperty("soundType"))
                if (!$util.isInteger(message.soundType))
                    return "soundType: integer expected";
            if (message.soundScene != null && message.hasOwnProperty("soundScene"))
                switch (message.soundScene) {
                default:
                    return "soundScene: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        /**
         * Creates a sound_set_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.sound_set_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.sound_set_msg} sound_set_msg
         */
        sound_set_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.config.sound_set_msg)
                return object;
            let message = new $root.config.sound_set_msg();
            if (object.soundType != null)
                message.soundType = object.soundType >>> 0;
            switch (object.soundScene) {
            default:
                if (typeof object.soundScene === "number") {
                    message.soundScene = object.soundScene;
                    break;
                }
                break;
            case "enum_SOUND_SCENE_TYPE_INVALID":
            case 0:
                message.soundScene = 0;
                break;
            case "enum_ALL_SCENE":
            case 1:
                message.soundScene = 1;
                break;
            case "enum_RECORDING_SCENE":
            case 2:
                message.soundScene = 2;
                break;
            }
            if (object.status != null)
                message.status = object.status >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a sound_set_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.sound_set_msg
         * @static
         * @param {config.sound_set_msg} message sound_set_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        sound_set_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.soundType = 0;
                object.soundScene = options.enums === String ? "enum_SOUND_SCENE_TYPE_INVALID" : 0;
                object.status = 0;
            }
            if (message.soundType != null && message.hasOwnProperty("soundType"))
                object.soundType = message.soundType;
            if (message.soundScene != null && message.hasOwnProperty("soundScene"))
                object.soundScene = options.enums === String ? $root.config.SOUND_SCENE_TYPE[message.soundScene] === undefined ? message.soundScene : $root.config.SOUND_SCENE_TYPE[message.soundScene] : message.soundScene;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this sound_set_msg to JSON.
         * @function toJSON
         * @memberof config.sound_set_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        sound_set_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for sound_set_msg
         * @function getTypeUrl
         * @memberof config.sound_set_msg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        sound_set_msg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.sound_set_msg";
        };

        return sound_set_msg;
    })();

    /**
     * KEY_TYPE enum.
     * @name config.KEY_TYPE
     * @enum {number}
     * @property {number} enum_KEY_TYPE_INVALID=0 enum_KEY_TYPE_INVALID value
     * @property {number} enum_KEY1=1 enum_KEY1 value
     * @property {number} enum_KEY2=2 enum_KEY2 value
     * @property {number} enum_KEY3=3 enum_KEY3 value
     * @property {number} enum_KEY4=4 enum_KEY4 value
     * @property {number} enum_KEY5=5 enum_KEY5 value
     * @property {number} enum_KEY6=6 enum_KEY6 value
     */
    config.KEY_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_KEY_TYPE_INVALID"] = 0;
        values[valuesById[1] = "enum_KEY1"] = 1;
        values[valuesById[2] = "enum_KEY2"] = 2;
        values[valuesById[3] = "enum_KEY3"] = 3;
        values[valuesById[4] = "enum_KEY4"] = 4;
        values[valuesById[5] = "enum_KEY5"] = 5;
        values[valuesById[6] = "enum_KEY6"] = 6;
        return values;
    })();

    /**
     * KEY_FUNCTION_TYPE enum.
     * @name config.KEY_FUNCTION_TYPE
     * @enum {number}
     * @property {number} enum_KEY_FUNCTION_TYPE_INVALID=0 enum_KEY_FUNCTION_TYPE_INVALID value
     * @property {number} enum_RECORD_STATUS_MANUAL_PAUSE=1 enum_RECORD_STATUS_MANUAL_PAUSE value
     * @property {number} enum_RECORD_STATUS_MANUAL_LAP=2 enum_RECORD_STATUS_MANUAL_LAP value
     */
    config.KEY_FUNCTION_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_KEY_FUNCTION_TYPE_INVALID"] = 0;
        values[valuesById[1] = "enum_RECORD_STATUS_MANUAL_PAUSE"] = 1;
        values[valuesById[2] = "enum_RECORD_STATUS_MANUAL_LAP"] = 2;
        return values;
    })();

    config.key_set_msg = (function() {

        /**
         * Properties of a key_set_msg.
         * @memberof config
         * @interface Ikey_set_msg
         * @property {config.KEY_TYPE|null} [keyType] key_set_msg keyType
         * @property {config.KEY_FUNCTION_TYPE|null} [keyFunctionType] key_set_msg keyFunctionType
         */

        /**
         * Constructs a new key_set_msg.
         * @memberof config
         * @classdesc Represents a key_set_msg.
         * @implements Ikey_set_msg
         * @constructor
         * @param {config.Ikey_set_msg=} [properties] Properties to set
         */
        function key_set_msg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * key_set_msg keyType.
         * @member {config.KEY_TYPE} keyType
         * @memberof config.key_set_msg
         * @instance
         */
        key_set_msg.prototype.keyType = 0;

        /**
         * key_set_msg keyFunctionType.
         * @member {config.KEY_FUNCTION_TYPE} keyFunctionType
         * @memberof config.key_set_msg
         * @instance
         */
        key_set_msg.prototype.keyFunctionType = 0;

        /**
         * Creates a new key_set_msg instance using the specified properties.
         * @function create
         * @memberof config.key_set_msg
         * @static
         * @param {config.Ikey_set_msg=} [properties] Properties to set
         * @returns {config.key_set_msg} key_set_msg instance
         */
        key_set_msg.create = function create(properties) {
            return new key_set_msg(properties);
        };

        /**
         * Encodes the specified key_set_msg message. Does not implicitly {@link config.key_set_msg.verify|verify} messages.
         * @function encode
         * @memberof config.key_set_msg
         * @static
         * @param {config.Ikey_set_msg} message key_set_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        key_set_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.keyType != null && Object.hasOwnProperty.call(message, "keyType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.keyType);
            if (message.keyFunctionType != null && Object.hasOwnProperty.call(message, "keyFunctionType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.keyFunctionType);
            return writer;
        };

        /**
         * Encodes the specified key_set_msg message, length delimited. Does not implicitly {@link config.key_set_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.key_set_msg
         * @static
         * @param {config.Ikey_set_msg} message key_set_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        key_set_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a key_set_msg message from the specified reader or buffer.
         * @function decode
         * @memberof config.key_set_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.key_set_msg} key_set_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        key_set_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.key_set_msg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.keyType = reader.int32();
                        break;
                    }
                case 2: {
                        message.keyFunctionType = reader.int32();
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
         * Decodes a key_set_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.key_set_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.key_set_msg} key_set_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        key_set_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a key_set_msg message.
         * @function verify
         * @memberof config.key_set_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        key_set_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.keyType != null && message.hasOwnProperty("keyType"))
                switch (message.keyType) {
                default:
                    return "keyType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.keyFunctionType != null && message.hasOwnProperty("keyFunctionType"))
                switch (message.keyFunctionType) {
                default:
                    return "keyFunctionType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a key_set_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.key_set_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.key_set_msg} key_set_msg
         */
        key_set_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.config.key_set_msg)
                return object;
            let message = new $root.config.key_set_msg();
            switch (object.keyType) {
            default:
                if (typeof object.keyType === "number") {
                    message.keyType = object.keyType;
                    break;
                }
                break;
            case "enum_KEY_TYPE_INVALID":
            case 0:
                message.keyType = 0;
                break;
            case "enum_KEY1":
            case 1:
                message.keyType = 1;
                break;
            case "enum_KEY2":
            case 2:
                message.keyType = 2;
                break;
            case "enum_KEY3":
            case 3:
                message.keyType = 3;
                break;
            case "enum_KEY4":
            case 4:
                message.keyType = 4;
                break;
            case "enum_KEY5":
            case 5:
                message.keyType = 5;
                break;
            case "enum_KEY6":
            case 6:
                message.keyType = 6;
                break;
            }
            switch (object.keyFunctionType) {
            default:
                if (typeof object.keyFunctionType === "number") {
                    message.keyFunctionType = object.keyFunctionType;
                    break;
                }
                break;
            case "enum_KEY_FUNCTION_TYPE_INVALID":
            case 0:
                message.keyFunctionType = 0;
                break;
            case "enum_RECORD_STATUS_MANUAL_PAUSE":
            case 1:
                message.keyFunctionType = 1;
                break;
            case "enum_RECORD_STATUS_MANUAL_LAP":
            case 2:
                message.keyFunctionType = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a key_set_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.key_set_msg
         * @static
         * @param {config.key_set_msg} message key_set_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        key_set_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.keyType = options.enums === String ? "enum_KEY_TYPE_INVALID" : 0;
                object.keyFunctionType = options.enums === String ? "enum_KEY_FUNCTION_TYPE_INVALID" : 0;
            }
            if (message.keyType != null && message.hasOwnProperty("keyType"))
                object.keyType = options.enums === String ? $root.config.KEY_TYPE[message.keyType] === undefined ? message.keyType : $root.config.KEY_TYPE[message.keyType] : message.keyType;
            if (message.keyFunctionType != null && message.hasOwnProperty("keyFunctionType"))
                object.keyFunctionType = options.enums === String ? $root.config.KEY_FUNCTION_TYPE[message.keyFunctionType] === undefined ? message.keyFunctionType : $root.config.KEY_FUNCTION_TYPE[message.keyFunctionType] : message.keyFunctionType;
            return object;
        };

        /**
         * Converts this key_set_msg to JSON.
         * @function toJSON
         * @memberof config.key_set_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        key_set_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for key_set_msg
         * @function getTypeUrl
         * @memberof config.key_set_msg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        key_set_msg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.key_set_msg";
        };

        return key_set_msg;
    })();

    /**
     * AUTO_TYPE enum.
     * @name config.AUTO_TYPE
     * @enum {number}
     * @property {number} enum_AUTO_TYPE_INVALID=0 enum_AUTO_TYPE_INVALID value
     * @property {number} enum_PAUSE=1 enum_PAUSE value
     * @property {number} enum_RECORD_START=2 enum_RECORD_START value
     * @property {number} enum_POWER_OFF=3 enum_POWER_OFF value
     * @property {number} enum_SLEEP=4 enum_SLEEP value
     * @property {number} enum_HOME_PAGE_BACK=5 enum_HOME_PAGE_BACK value
     * @property {number} enum_SMART_SAVE=6 enum_SMART_SAVE value
     * @property {number} enum_POWER_SAVE=7 enum_POWER_SAVE value
     * @property {number} enum_PAGE_AUTO=8 enum_PAGE_AUTO value
     * @property {number} enum_MOTION_CHECK=9 enum_MOTION_CHECK value
     */
    config.AUTO_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_AUTO_TYPE_INVALID"] = 0;
        values[valuesById[1] = "enum_PAUSE"] = 1;
        values[valuesById[2] = "enum_RECORD_START"] = 2;
        values[valuesById[3] = "enum_POWER_OFF"] = 3;
        values[valuesById[4] = "enum_SLEEP"] = 4;
        values[valuesById[5] = "enum_HOME_PAGE_BACK"] = 5;
        values[valuesById[6] = "enum_SMART_SAVE"] = 6;
        values[valuesById[7] = "enum_POWER_SAVE"] = 7;
        values[valuesById[8] = "enum_PAGE_AUTO"] = 8;
        values[valuesById[9] = "enum_MOTION_CHECK"] = 9;
        return values;
    })();

    /**
     * POWER_SAVE_STATUS enum.
     * @name config.POWER_SAVE_STATUS
     * @enum {number}
     * @property {number} POWER_SAVE_STATUS_OFF=0 POWER_SAVE_STATUS_OFF value
     * @property {number} POWER_SAVE_STATUS_ON=1 POWER_SAVE_STATUS_ON value
     * @property {number} POWER_SAVE_STATUS_SMART=2 POWER_SAVE_STATUS_SMART value
     */
    config.POWER_SAVE_STATUS = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "POWER_SAVE_STATUS_OFF"] = 0;
        values[valuesById[1] = "POWER_SAVE_STATUS_ON"] = 1;
        values[valuesById[2] = "POWER_SAVE_STATUS_SMART"] = 2;
        return values;
    })();

    /**
     * PAGE_AUTO_STATUS enum.
     * @name config.PAGE_AUTO_STATUS
     * @enum {number}
     * @property {number} PAGE_AUTO_STATUS_OFF=0 PAGE_AUTO_STATUS_OFF value
     * @property {number} PAGE_AUTO_STATUS_ON=1 PAGE_AUTO_STATUS_ON value
     * @property {number} PAGE_AUTO_STATUS_FAST=2 PAGE_AUTO_STATUS_FAST value
     * @property {number} PAGE_AUTO_STATUS_SLOW=3 PAGE_AUTO_STATUS_SLOW value
     * @property {number} PAGE_AUTO_STATUS_MAIN=4 PAGE_AUTO_STATUS_MAIN value
     */
    config.PAGE_AUTO_STATUS = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PAGE_AUTO_STATUS_OFF"] = 0;
        values[valuesById[1] = "PAGE_AUTO_STATUS_ON"] = 1;
        values[valuesById[2] = "PAGE_AUTO_STATUS_FAST"] = 2;
        values[valuesById[3] = "PAGE_AUTO_STATUS_SLOW"] = 3;
        values[valuesById[4] = "PAGE_AUTO_STATUS_MAIN"] = 4;
        return values;
    })();

    config.auto_set_msg = (function() {

        /**
         * Properties of an auto_set_msg.
         * @memberof config
         * @interface Iauto_set_msg
         * @property {config.AUTO_TYPE|null} [autoType] auto_set_msg autoType
         * @property {number|null} [status] auto_set_msg status
         * @property {number|null} [param1] auto_set_msg param1
         */

        /**
         * Constructs a new auto_set_msg.
         * @memberof config
         * @classdesc Represents an auto_set_msg.
         * @implements Iauto_set_msg
         * @constructor
         * @param {config.Iauto_set_msg=} [properties] Properties to set
         */
        function auto_set_msg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * auto_set_msg autoType.
         * @member {config.AUTO_TYPE} autoType
         * @memberof config.auto_set_msg
         * @instance
         */
        auto_set_msg.prototype.autoType = 0;

        /**
         * auto_set_msg status.
         * @member {number} status
         * @memberof config.auto_set_msg
         * @instance
         */
        auto_set_msg.prototype.status = 0;

        /**
         * auto_set_msg param1.
         * @member {number} param1
         * @memberof config.auto_set_msg
         * @instance
         */
        auto_set_msg.prototype.param1 = 0;

        /**
         * Creates a new auto_set_msg instance using the specified properties.
         * @function create
         * @memberof config.auto_set_msg
         * @static
         * @param {config.Iauto_set_msg=} [properties] Properties to set
         * @returns {config.auto_set_msg} auto_set_msg instance
         */
        auto_set_msg.create = function create(properties) {
            return new auto_set_msg(properties);
        };

        /**
         * Encodes the specified auto_set_msg message. Does not implicitly {@link config.auto_set_msg.verify|verify} messages.
         * @function encode
         * @memberof config.auto_set_msg
         * @static
         * @param {config.Iauto_set_msg} message auto_set_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        auto_set_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.autoType != null && Object.hasOwnProperty.call(message, "autoType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.autoType);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.status);
            if (message.param1 != null && Object.hasOwnProperty.call(message, "param1"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.param1);
            return writer;
        };

        /**
         * Encodes the specified auto_set_msg message, length delimited. Does not implicitly {@link config.auto_set_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.auto_set_msg
         * @static
         * @param {config.Iauto_set_msg} message auto_set_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        auto_set_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an auto_set_msg message from the specified reader or buffer.
         * @function decode
         * @memberof config.auto_set_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.auto_set_msg} auto_set_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        auto_set_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.auto_set_msg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.autoType = reader.int32();
                        break;
                    }
                case 2: {
                        message.status = reader.uint32();
                        break;
                    }
                case 3: {
                        message.param1 = reader.uint32();
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
         * Decodes an auto_set_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.auto_set_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.auto_set_msg} auto_set_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        auto_set_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an auto_set_msg message.
         * @function verify
         * @memberof config.auto_set_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        auto_set_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.autoType != null && message.hasOwnProperty("autoType"))
                switch (message.autoType) {
                default:
                    return "autoType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.param1 != null && message.hasOwnProperty("param1"))
                if (!$util.isInteger(message.param1))
                    return "param1: integer expected";
            return null;
        };

        /**
         * Creates an auto_set_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.auto_set_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.auto_set_msg} auto_set_msg
         */
        auto_set_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.config.auto_set_msg)
                return object;
            let message = new $root.config.auto_set_msg();
            switch (object.autoType) {
            default:
                if (typeof object.autoType === "number") {
                    message.autoType = object.autoType;
                    break;
                }
                break;
            case "enum_AUTO_TYPE_INVALID":
            case 0:
                message.autoType = 0;
                break;
            case "enum_PAUSE":
            case 1:
                message.autoType = 1;
                break;
            case "enum_RECORD_START":
            case 2:
                message.autoType = 2;
                break;
            case "enum_POWER_OFF":
            case 3:
                message.autoType = 3;
                break;
            case "enum_SLEEP":
            case 4:
                message.autoType = 4;
                break;
            case "enum_HOME_PAGE_BACK":
            case 5:
                message.autoType = 5;
                break;
            case "enum_SMART_SAVE":
            case 6:
                message.autoType = 6;
                break;
            case "enum_POWER_SAVE":
            case 7:
                message.autoType = 7;
                break;
            case "enum_PAGE_AUTO":
            case 8:
                message.autoType = 8;
                break;
            case "enum_MOTION_CHECK":
            case 9:
                message.autoType = 9;
                break;
            }
            if (object.status != null)
                message.status = object.status >>> 0;
            if (object.param1 != null)
                message.param1 = object.param1 >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an auto_set_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.auto_set_msg
         * @static
         * @param {config.auto_set_msg} message auto_set_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        auto_set_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.autoType = options.enums === String ? "enum_AUTO_TYPE_INVALID" : 0;
                object.status = 0;
                object.param1 = 0;
            }
            if (message.autoType != null && message.hasOwnProperty("autoType"))
                object.autoType = options.enums === String ? $root.config.AUTO_TYPE[message.autoType] === undefined ? message.autoType : $root.config.AUTO_TYPE[message.autoType] : message.autoType;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.param1 != null && message.hasOwnProperty("param1"))
                object.param1 = message.param1;
            return object;
        };

        /**
         * Converts this auto_set_msg to JSON.
         * @function toJSON
         * @memberof config.auto_set_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        auto_set_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for auto_set_msg
         * @function getTypeUrl
         * @memberof config.auto_set_msg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        auto_set_msg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.auto_set_msg";
        };

        return auto_set_msg;
    })();

    /**
     * ALARM_TYPE enum.
     * @name config.ALARM_TYPE
     * @enum {number}
     * @property {number} ALARM_TYPE_INVALID=0 ALARM_TYPE_INVALID value
     * @property {number} ALARM_TYPE_RIDE_TIME=1 ALARM_TYPE_RIDE_TIME value
     * @property {number} ALARM_TYPE_RIDE_DISTANCE=2 ALARM_TYPE_RIDE_DISTANCE value
     * @property {number} ALARM_TYPE_HRM=3 ALARM_TYPE_HRM value
     * @property {number} ALARM_TYPE_CAD=4 ALARM_TYPE_CAD value
     * @property {number} ALARM_TYPE_PWR=5 ALARM_TYPE_PWR value
     * @property {number} ALARM_TYPE_CALORIE=6 ALARM_TYPE_CALORIE value
     * @property {number} ALARM_TYPE_SPEED=7 ALARM_TYPE_SPEED value
     * @property {number} ALARM_TYPE_WATER=8 ALARM_TYPE_WATER value
     * @property {number} ALARM_TYPE_FOOD=9 ALARM_TYPE_FOOD value
     */
    config.ALARM_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ALARM_TYPE_INVALID"] = 0;
        values[valuesById[1] = "ALARM_TYPE_RIDE_TIME"] = 1;
        values[valuesById[2] = "ALARM_TYPE_RIDE_DISTANCE"] = 2;
        values[valuesById[3] = "ALARM_TYPE_HRM"] = 3;
        values[valuesById[4] = "ALARM_TYPE_CAD"] = 4;
        values[valuesById[5] = "ALARM_TYPE_PWR"] = 5;
        values[valuesById[6] = "ALARM_TYPE_CALORIE"] = 6;
        values[valuesById[7] = "ALARM_TYPE_SPEED"] = 7;
        values[valuesById[8] = "ALARM_TYPE_WATER"] = 8;
        values[valuesById[9] = "ALARM_TYPE_FOOD"] = 9;
        return values;
    })();

    /**
     * ALARM_SELECT enum.
     * @name config.ALARM_SELECT
     * @enum {number}
     * @property {number} ALARM_SELECT_INVALID=0 ALARM_SELECT_INVALID value
     * @property {number} ALARM_SELECT_RIDE_TIME=1 ALARM_SELECT_RIDE_TIME value
     * @property {number} ALARM_SELECT_DISTANCE=2 ALARM_SELECT_DISTANCE value
     * @property {number} ALARM_SELECT_CALORIE=3 ALARM_SELECT_CALORIE value
     */
    config.ALARM_SELECT = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ALARM_SELECT_INVALID"] = 0;
        values[valuesById[1] = "ALARM_SELECT_RIDE_TIME"] = 1;
        values[valuesById[2] = "ALARM_SELECT_DISTANCE"] = 2;
        values[valuesById[3] = "ALARM_SELECT_CALORIE"] = 3;
        return values;
    })();

    config.alarm_select_info = (function() {

        /**
         * Properties of an alarm_select_info.
         * @memberof config
         * @interface Ialarm_select_info
         * @property {config.ALARM_SELECT|null} [selectType] alarm_select_info selectType
         * @property {number|null} [value] alarm_select_info value
         */

        /**
         * Constructs a new alarm_select_info.
         * @memberof config
         * @classdesc Represents an alarm_select_info.
         * @implements Ialarm_select_info
         * @constructor
         * @param {config.Ialarm_select_info=} [properties] Properties to set
         */
        function alarm_select_info(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * alarm_select_info selectType.
         * @member {config.ALARM_SELECT} selectType
         * @memberof config.alarm_select_info
         * @instance
         */
        alarm_select_info.prototype.selectType = 0;

        /**
         * alarm_select_info value.
         * @member {number} value
         * @memberof config.alarm_select_info
         * @instance
         */
        alarm_select_info.prototype.value = 0;

        /**
         * Creates a new alarm_select_info instance using the specified properties.
         * @function create
         * @memberof config.alarm_select_info
         * @static
         * @param {config.Ialarm_select_info=} [properties] Properties to set
         * @returns {config.alarm_select_info} alarm_select_info instance
         */
        alarm_select_info.create = function create(properties) {
            return new alarm_select_info(properties);
        };

        /**
         * Encodes the specified alarm_select_info message. Does not implicitly {@link config.alarm_select_info.verify|verify} messages.
         * @function encode
         * @memberof config.alarm_select_info
         * @static
         * @param {config.Ialarm_select_info} message alarm_select_info message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        alarm_select_info.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.selectType != null && Object.hasOwnProperty.call(message, "selectType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.selectType);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.value);
            return writer;
        };

        /**
         * Encodes the specified alarm_select_info message, length delimited. Does not implicitly {@link config.alarm_select_info.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.alarm_select_info
         * @static
         * @param {config.Ialarm_select_info} message alarm_select_info message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        alarm_select_info.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an alarm_select_info message from the specified reader or buffer.
         * @function decode
         * @memberof config.alarm_select_info
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.alarm_select_info} alarm_select_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        alarm_select_info.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.alarm_select_info();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.selectType = reader.int32();
                        break;
                    }
                case 2: {
                        message.value = reader.uint32();
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
         * Decodes an alarm_select_info message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.alarm_select_info
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.alarm_select_info} alarm_select_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        alarm_select_info.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an alarm_select_info message.
         * @function verify
         * @memberof config.alarm_select_info
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        alarm_select_info.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.selectType != null && message.hasOwnProperty("selectType"))
                switch (message.selectType) {
                default:
                    return "selectType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            return null;
        };

        /**
         * Creates an alarm_select_info message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.alarm_select_info
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.alarm_select_info} alarm_select_info
         */
        alarm_select_info.fromObject = function fromObject(object) {
            if (object instanceof $root.config.alarm_select_info)
                return object;
            let message = new $root.config.alarm_select_info();
            switch (object.selectType) {
            default:
                if (typeof object.selectType === "number") {
                    message.selectType = object.selectType;
                    break;
                }
                break;
            case "ALARM_SELECT_INVALID":
            case 0:
                message.selectType = 0;
                break;
            case "ALARM_SELECT_RIDE_TIME":
            case 1:
                message.selectType = 1;
                break;
            case "ALARM_SELECT_DISTANCE":
            case 2:
                message.selectType = 2;
                break;
            case "ALARM_SELECT_CALORIE":
            case 3:
                message.selectType = 3;
                break;
            }
            if (object.value != null)
                message.value = object.value >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an alarm_select_info message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.alarm_select_info
         * @static
         * @param {config.alarm_select_info} message alarm_select_info
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        alarm_select_info.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.selectType = options.enums === String ? "ALARM_SELECT_INVALID" : 0;
                object.value = 0;
            }
            if (message.selectType != null && message.hasOwnProperty("selectType"))
                object.selectType = options.enums === String ? $root.config.ALARM_SELECT[message.selectType] === undefined ? message.selectType : $root.config.ALARM_SELECT[message.selectType] : message.selectType;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this alarm_select_info to JSON.
         * @function toJSON
         * @memberof config.alarm_select_info
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        alarm_select_info.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for alarm_select_info
         * @function getTypeUrl
         * @memberof config.alarm_select_info
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        alarm_select_info.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.alarm_select_info";
        };

        return alarm_select_info;
    })();

    config.alarm_params_set_msg = (function() {

        /**
         * Properties of an alarm_params_set_msg.
         * @memberof config
         * @interface Ialarm_params_set_msg
         * @property {config.ALARM_TYPE} alarmType alarm_params_set_msg alarmType
         * @property {number|null} [valueMax] alarm_params_set_msg valueMax
         * @property {number|null} [valueMin] alarm_params_set_msg valueMin
         * @property {number} status alarm_params_set_msg status
         * @property {config.ALARM_SELECT|null} [selectType] alarm_params_set_msg selectType
         * @property {Array.<config.Ialarm_select_info>|null} [selectInfo] alarm_params_set_msg selectInfo
         */

        /**
         * Constructs a new alarm_params_set_msg.
         * @memberof config
         * @classdesc Represents an alarm_params_set_msg.
         * @implements Ialarm_params_set_msg
         * @constructor
         * @param {config.Ialarm_params_set_msg=} [properties] Properties to set
         */
        function alarm_params_set_msg(properties) {
            this.selectInfo = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * alarm_params_set_msg alarmType.
         * @member {config.ALARM_TYPE} alarmType
         * @memberof config.alarm_params_set_msg
         * @instance
         */
        alarm_params_set_msg.prototype.alarmType = 0;

        /**
         * alarm_params_set_msg valueMax.
         * @member {number} valueMax
         * @memberof config.alarm_params_set_msg
         * @instance
         */
        alarm_params_set_msg.prototype.valueMax = 0;

        /**
         * alarm_params_set_msg valueMin.
         * @member {number} valueMin
         * @memberof config.alarm_params_set_msg
         * @instance
         */
        alarm_params_set_msg.prototype.valueMin = 0;

        /**
         * alarm_params_set_msg status.
         * @member {number} status
         * @memberof config.alarm_params_set_msg
         * @instance
         */
        alarm_params_set_msg.prototype.status = 0;

        /**
         * alarm_params_set_msg selectType.
         * @member {config.ALARM_SELECT} selectType
         * @memberof config.alarm_params_set_msg
         * @instance
         */
        alarm_params_set_msg.prototype.selectType = 0;

        /**
         * alarm_params_set_msg selectInfo.
         * @member {Array.<config.Ialarm_select_info>} selectInfo
         * @memberof config.alarm_params_set_msg
         * @instance
         */
        alarm_params_set_msg.prototype.selectInfo = $util.emptyArray;

        /**
         * Creates a new alarm_params_set_msg instance using the specified properties.
         * @function create
         * @memberof config.alarm_params_set_msg
         * @static
         * @param {config.Ialarm_params_set_msg=} [properties] Properties to set
         * @returns {config.alarm_params_set_msg} alarm_params_set_msg instance
         */
        alarm_params_set_msg.create = function create(properties) {
            return new alarm_params_set_msg(properties);
        };

        /**
         * Encodes the specified alarm_params_set_msg message. Does not implicitly {@link config.alarm_params_set_msg.verify|verify} messages.
         * @function encode
         * @memberof config.alarm_params_set_msg
         * @static
         * @param {config.Ialarm_params_set_msg} message alarm_params_set_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        alarm_params_set_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.alarmType);
            if (message.valueMax != null && Object.hasOwnProperty.call(message, "valueMax"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.valueMax);
            if (message.valueMin != null && Object.hasOwnProperty.call(message, "valueMin"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.valueMin);
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.status);
            if (message.selectType != null && Object.hasOwnProperty.call(message, "selectType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.selectType);
            if (message.selectInfo != null && message.selectInfo.length)
                for (let i = 0; i < message.selectInfo.length; ++i)
                    $root.config.alarm_select_info.encode(message.selectInfo[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified alarm_params_set_msg message, length delimited. Does not implicitly {@link config.alarm_params_set_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.alarm_params_set_msg
         * @static
         * @param {config.Ialarm_params_set_msg} message alarm_params_set_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        alarm_params_set_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an alarm_params_set_msg message from the specified reader or buffer.
         * @function decode
         * @memberof config.alarm_params_set_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.alarm_params_set_msg} alarm_params_set_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        alarm_params_set_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.alarm_params_set_msg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.alarmType = reader.int32();
                        break;
                    }
                case 2: {
                        message.valueMax = reader.uint32();
                        break;
                    }
                case 3: {
                        message.valueMin = reader.uint32();
                        break;
                    }
                case 4: {
                        message.status = reader.uint32();
                        break;
                    }
                case 5: {
                        message.selectType = reader.int32();
                        break;
                    }
                case 6: {
                        if (!(message.selectInfo && message.selectInfo.length))
                            message.selectInfo = [];
                        message.selectInfo.push($root.config.alarm_select_info.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("alarmType"))
                throw $util.ProtocolError("missing required 'alarmType'", { instance: message });
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes an alarm_params_set_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.alarm_params_set_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.alarm_params_set_msg} alarm_params_set_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        alarm_params_set_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an alarm_params_set_msg message.
         * @function verify
         * @memberof config.alarm_params_set_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        alarm_params_set_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.alarmType) {
            default:
                return "alarmType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                break;
            }
            if (message.valueMax != null && message.hasOwnProperty("valueMax"))
                if (!$util.isInteger(message.valueMax))
                    return "valueMax: integer expected";
            if (message.valueMin != null && message.hasOwnProperty("valueMin"))
                if (!$util.isInteger(message.valueMin))
                    return "valueMin: integer expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (message.selectType != null && message.hasOwnProperty("selectType"))
                switch (message.selectType) {
                default:
                    return "selectType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.selectInfo != null && message.hasOwnProperty("selectInfo")) {
                if (!Array.isArray(message.selectInfo))
                    return "selectInfo: array expected";
                for (let i = 0; i < message.selectInfo.length; ++i) {
                    let error = $root.config.alarm_select_info.verify(message.selectInfo[i]);
                    if (error)
                        return "selectInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates an alarm_params_set_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.alarm_params_set_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.alarm_params_set_msg} alarm_params_set_msg
         */
        alarm_params_set_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.config.alarm_params_set_msg)
                return object;
            let message = new $root.config.alarm_params_set_msg();
            switch (object.alarmType) {
            default:
                if (typeof object.alarmType === "number") {
                    message.alarmType = object.alarmType;
                    break;
                }
                break;
            case "ALARM_TYPE_INVALID":
            case 0:
                message.alarmType = 0;
                break;
            case "ALARM_TYPE_RIDE_TIME":
            case 1:
                message.alarmType = 1;
                break;
            case "ALARM_TYPE_RIDE_DISTANCE":
            case 2:
                message.alarmType = 2;
                break;
            case "ALARM_TYPE_HRM":
            case 3:
                message.alarmType = 3;
                break;
            case "ALARM_TYPE_CAD":
            case 4:
                message.alarmType = 4;
                break;
            case "ALARM_TYPE_PWR":
            case 5:
                message.alarmType = 5;
                break;
            case "ALARM_TYPE_CALORIE":
            case 6:
                message.alarmType = 6;
                break;
            case "ALARM_TYPE_SPEED":
            case 7:
                message.alarmType = 7;
                break;
            case "ALARM_TYPE_WATER":
            case 8:
                message.alarmType = 8;
                break;
            case "ALARM_TYPE_FOOD":
            case 9:
                message.alarmType = 9;
                break;
            }
            if (object.valueMax != null)
                message.valueMax = object.valueMax >>> 0;
            if (object.valueMin != null)
                message.valueMin = object.valueMin >>> 0;
            if (object.status != null)
                message.status = object.status >>> 0;
            switch (object.selectType) {
            default:
                if (typeof object.selectType === "number") {
                    message.selectType = object.selectType;
                    break;
                }
                break;
            case "ALARM_SELECT_INVALID":
            case 0:
                message.selectType = 0;
                break;
            case "ALARM_SELECT_RIDE_TIME":
            case 1:
                message.selectType = 1;
                break;
            case "ALARM_SELECT_DISTANCE":
            case 2:
                message.selectType = 2;
                break;
            case "ALARM_SELECT_CALORIE":
            case 3:
                message.selectType = 3;
                break;
            }
            if (object.selectInfo) {
                if (!Array.isArray(object.selectInfo))
                    throw TypeError(".config.alarm_params_set_msg.selectInfo: array expected");
                message.selectInfo = [];
                for (let i = 0; i < object.selectInfo.length; ++i) {
                    if (typeof object.selectInfo[i] !== "object")
                        throw TypeError(".config.alarm_params_set_msg.selectInfo: object expected");
                    message.selectInfo[i] = $root.config.alarm_select_info.fromObject(object.selectInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an alarm_params_set_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.alarm_params_set_msg
         * @static
         * @param {config.alarm_params_set_msg} message alarm_params_set_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        alarm_params_set_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.selectInfo = [];
            if (options.defaults) {
                object.alarmType = options.enums === String ? "ALARM_TYPE_INVALID" : 0;
                object.valueMax = 0;
                object.valueMin = 0;
                object.status = 0;
                object.selectType = options.enums === String ? "ALARM_SELECT_INVALID" : 0;
            }
            if (message.alarmType != null && message.hasOwnProperty("alarmType"))
                object.alarmType = options.enums === String ? $root.config.ALARM_TYPE[message.alarmType] === undefined ? message.alarmType : $root.config.ALARM_TYPE[message.alarmType] : message.alarmType;
            if (message.valueMax != null && message.hasOwnProperty("valueMax"))
                object.valueMax = message.valueMax;
            if (message.valueMin != null && message.hasOwnProperty("valueMin"))
                object.valueMin = message.valueMin;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.selectType != null && message.hasOwnProperty("selectType"))
                object.selectType = options.enums === String ? $root.config.ALARM_SELECT[message.selectType] === undefined ? message.selectType : $root.config.ALARM_SELECT[message.selectType] : message.selectType;
            if (message.selectInfo && message.selectInfo.length) {
                object.selectInfo = [];
                for (let j = 0; j < message.selectInfo.length; ++j)
                    object.selectInfo[j] = $root.config.alarm_select_info.toObject(message.selectInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this alarm_params_set_msg to JSON.
         * @function toJSON
         * @memberof config.alarm_params_set_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        alarm_params_set_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for alarm_params_set_msg
         * @function getTypeUrl
         * @memberof config.alarm_params_set_msg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        alarm_params_set_msg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.alarm_params_set_msg";
        };

        return alarm_params_set_msg;
    })();

    config.alarm_msg = (function() {

        /**
         * Properties of an alarm_msg.
         * @memberof config
         * @interface Ialarm_msg
         * @property {Array.<config.Ialarm_params_set_msg>|null} [setMsg] alarm_msg setMsg
         * @property {number|null} [alarmIntervalTime] alarm_msg alarmIntervalTime
         */

        /**
         * Constructs a new alarm_msg.
         * @memberof config
         * @classdesc Represents an alarm_msg.
         * @implements Ialarm_msg
         * @constructor
         * @param {config.Ialarm_msg=} [properties] Properties to set
         */
        function alarm_msg(properties) {
            this.setMsg = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * alarm_msg setMsg.
         * @member {Array.<config.Ialarm_params_set_msg>} setMsg
         * @memberof config.alarm_msg
         * @instance
         */
        alarm_msg.prototype.setMsg = $util.emptyArray;

        /**
         * alarm_msg alarmIntervalTime.
         * @member {number} alarmIntervalTime
         * @memberof config.alarm_msg
         * @instance
         */
        alarm_msg.prototype.alarmIntervalTime = 0;

        /**
         * Creates a new alarm_msg instance using the specified properties.
         * @function create
         * @memberof config.alarm_msg
         * @static
         * @param {config.Ialarm_msg=} [properties] Properties to set
         * @returns {config.alarm_msg} alarm_msg instance
         */
        alarm_msg.create = function create(properties) {
            return new alarm_msg(properties);
        };

        /**
         * Encodes the specified alarm_msg message. Does not implicitly {@link config.alarm_msg.verify|verify} messages.
         * @function encode
         * @memberof config.alarm_msg
         * @static
         * @param {config.Ialarm_msg} message alarm_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        alarm_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.setMsg != null && message.setMsg.length)
                for (let i = 0; i < message.setMsg.length; ++i)
                    $root.config.alarm_params_set_msg.encode(message.setMsg[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.alarmIntervalTime != null && Object.hasOwnProperty.call(message, "alarmIntervalTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.alarmIntervalTime);
            return writer;
        };

        /**
         * Encodes the specified alarm_msg message, length delimited. Does not implicitly {@link config.alarm_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.alarm_msg
         * @static
         * @param {config.Ialarm_msg} message alarm_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        alarm_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an alarm_msg message from the specified reader or buffer.
         * @function decode
         * @memberof config.alarm_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.alarm_msg} alarm_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        alarm_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.alarm_msg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.setMsg && message.setMsg.length))
                            message.setMsg = [];
                        message.setMsg.push($root.config.alarm_params_set_msg.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.alarmIntervalTime = reader.uint32();
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
         * Decodes an alarm_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.alarm_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.alarm_msg} alarm_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        alarm_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an alarm_msg message.
         * @function verify
         * @memberof config.alarm_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        alarm_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.setMsg != null && message.hasOwnProperty("setMsg")) {
                if (!Array.isArray(message.setMsg))
                    return "setMsg: array expected";
                for (let i = 0; i < message.setMsg.length; ++i) {
                    let error = $root.config.alarm_params_set_msg.verify(message.setMsg[i]);
                    if (error)
                        return "setMsg." + error;
                }
            }
            if (message.alarmIntervalTime != null && message.hasOwnProperty("alarmIntervalTime"))
                if (!$util.isInteger(message.alarmIntervalTime))
                    return "alarmIntervalTime: integer expected";
            return null;
        };

        /**
         * Creates an alarm_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.alarm_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.alarm_msg} alarm_msg
         */
        alarm_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.config.alarm_msg)
                return object;
            let message = new $root.config.alarm_msg();
            if (object.setMsg) {
                if (!Array.isArray(object.setMsg))
                    throw TypeError(".config.alarm_msg.setMsg: array expected");
                message.setMsg = [];
                for (let i = 0; i < object.setMsg.length; ++i) {
                    if (typeof object.setMsg[i] !== "object")
                        throw TypeError(".config.alarm_msg.setMsg: object expected");
                    message.setMsg[i] = $root.config.alarm_params_set_msg.fromObject(object.setMsg[i]);
                }
            }
            if (object.alarmIntervalTime != null)
                message.alarmIntervalTime = object.alarmIntervalTime >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an alarm_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.alarm_msg
         * @static
         * @param {config.alarm_msg} message alarm_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        alarm_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.setMsg = [];
            if (options.defaults)
                object.alarmIntervalTime = 0;
            if (message.setMsg && message.setMsg.length) {
                object.setMsg = [];
                for (let j = 0; j < message.setMsg.length; ++j)
                    object.setMsg[j] = $root.config.alarm_params_set_msg.toObject(message.setMsg[j], options);
            }
            if (message.alarmIntervalTime != null && message.hasOwnProperty("alarmIntervalTime"))
                object.alarmIntervalTime = message.alarmIntervalTime;
            return object;
        };

        /**
         * Converts this alarm_msg to JSON.
         * @function toJSON
         * @memberof config.alarm_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        alarm_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for alarm_msg
         * @function getTypeUrl
         * @memberof config.alarm_msg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        alarm_msg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.alarm_msg";
        };

        return alarm_msg;
    })();

    /**
     * LAP_TYPE enum.
     * @name config.LAP_TYPE
     * @enum {number}
     * @property {number} LAP_TYPE_INVALID=0 LAP_TYPE_INVALID value
     * @property {number} LAP_TYPE_LOCATION=1 LAP_TYPE_LOCATION value
     * @property {number} LAP_TYPE_TIME=2 LAP_TYPE_TIME value
     * @property {number} LAP_TYPE_DISTANCE=3 LAP_TYPE_DISTANCE value
     */
    config.LAP_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "LAP_TYPE_INVALID"] = 0;
        values[valuesById[1] = "LAP_TYPE_LOCATION"] = 1;
        values[valuesById[2] = "LAP_TYPE_TIME"] = 2;
        values[valuesById[3] = "LAP_TYPE_DISTANCE"] = 3;
        return values;
    })();

    config.lap_msg = (function() {

        /**
         * Properties of a lap_msg.
         * @memberof config
         * @interface Ilap_msg
         * @property {config.LAP_TYPE} lapType lap_msg lapType
         * @property {number|null} [value] lap_msg value
         * @property {number|null} [status] lap_msg status
         */

        /**
         * Constructs a new lap_msg.
         * @memberof config
         * @classdesc Represents a lap_msg.
         * @implements Ilap_msg
         * @constructor
         * @param {config.Ilap_msg=} [properties] Properties to set
         */
        function lap_msg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * lap_msg lapType.
         * @member {config.LAP_TYPE} lapType
         * @memberof config.lap_msg
         * @instance
         */
        lap_msg.prototype.lapType = 0;

        /**
         * lap_msg value.
         * @member {number} value
         * @memberof config.lap_msg
         * @instance
         */
        lap_msg.prototype.value = 0;

        /**
         * lap_msg status.
         * @member {number} status
         * @memberof config.lap_msg
         * @instance
         */
        lap_msg.prototype.status = 0;

        /**
         * Creates a new lap_msg instance using the specified properties.
         * @function create
         * @memberof config.lap_msg
         * @static
         * @param {config.Ilap_msg=} [properties] Properties to set
         * @returns {config.lap_msg} lap_msg instance
         */
        lap_msg.create = function create(properties) {
            return new lap_msg(properties);
        };

        /**
         * Encodes the specified lap_msg message. Does not implicitly {@link config.lap_msg.verify|verify} messages.
         * @function encode
         * @memberof config.lap_msg
         * @static
         * @param {config.Ilap_msg} message lap_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        lap_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.lapType);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.value);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.status);
            return writer;
        };

        /**
         * Encodes the specified lap_msg message, length delimited. Does not implicitly {@link config.lap_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.lap_msg
         * @static
         * @param {config.Ilap_msg} message lap_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        lap_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a lap_msg message from the specified reader or buffer.
         * @function decode
         * @memberof config.lap_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.lap_msg} lap_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        lap_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.lap_msg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.lapType = reader.int32();
                        break;
                    }
                case 2: {
                        message.value = reader.uint32();
                        break;
                    }
                case 3: {
                        message.status = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("lapType"))
                throw $util.ProtocolError("missing required 'lapType'", { instance: message });
            return message;
        };

        /**
         * Decodes a lap_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.lap_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.lap_msg} lap_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        lap_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a lap_msg message.
         * @function verify
         * @memberof config.lap_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        lap_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.lapType) {
            default:
                return "lapType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        /**
         * Creates a lap_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.lap_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.lap_msg} lap_msg
         */
        lap_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.config.lap_msg)
                return object;
            let message = new $root.config.lap_msg();
            switch (object.lapType) {
            default:
                if (typeof object.lapType === "number") {
                    message.lapType = object.lapType;
                    break;
                }
                break;
            case "LAP_TYPE_INVALID":
            case 0:
                message.lapType = 0;
                break;
            case "LAP_TYPE_LOCATION":
            case 1:
                message.lapType = 1;
                break;
            case "LAP_TYPE_TIME":
            case 2:
                message.lapType = 2;
                break;
            case "LAP_TYPE_DISTANCE":
            case 3:
                message.lapType = 3;
                break;
            }
            if (object.value != null)
                message.value = object.value >>> 0;
            if (object.status != null)
                message.status = object.status >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a lap_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.lap_msg
         * @static
         * @param {config.lap_msg} message lap_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        lap_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.lapType = options.enums === String ? "LAP_TYPE_INVALID" : 0;
                object.value = 0;
                object.status = 0;
            }
            if (message.lapType != null && message.hasOwnProperty("lapType"))
                object.lapType = options.enums === String ? $root.config.LAP_TYPE[message.lapType] === undefined ? message.lapType : $root.config.LAP_TYPE[message.lapType] : message.lapType;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this lap_msg to JSON.
         * @function toJSON
         * @memberof config.lap_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        lap_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for lap_msg
         * @function getTypeUrl
         * @memberof config.lap_msg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        lap_msg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.lap_msg";
        };

        return lap_msg;
    })();

    /**
     * UNIT_TYPE enum.
     * @name config.UNIT_TYPE
     * @enum {number}
     * @property {number} enum_UNIT_TYPE_INVALID=0 enum_UNIT_TYPE_INVALID value
     * @property {number} enum_UNIT_TYPE_METRIC=1 enum_UNIT_TYPE_METRIC value
     * @property {number} enum_UNIT_TYPE_INCH=2 enum_UNIT_TYPE_INCH value
     */
    config.UNIT_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_UNIT_TYPE_INVALID"] = 0;
        values[valuesById[1] = "enum_UNIT_TYPE_METRIC"] = 1;
        values[valuesById[2] = "enum_UNIT_TYPE_INCH"] = 2;
        return values;
    })();

    /**
     * UNIT_ITEM enum.
     * @name config.UNIT_ITEM
     * @enum {number}
     * @property {number} enum_UNIT_ITEM_INVALID=0 enum_UNIT_ITEM_INVALID value
     * @property {number} enum_UNIT_ITEM_DISTANCE=1 enum_UNIT_ITEM_DISTANCE value
     * @property {number} enum_UNIT_ITEM_ELEVATION=2 enum_UNIT_ITEM_ELEVATION value
     * @property {number} enum_UNIT_ITEM_WEIGHT=3 enum_UNIT_ITEM_WEIGHT value
     * @property {number} enum_UNIT_ITEM_TEMPERATURE=4 enum_UNIT_ITEM_TEMPERATURE value
     */
    config.UNIT_ITEM = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_UNIT_ITEM_INVALID"] = 0;
        values[valuesById[1] = "enum_UNIT_ITEM_DISTANCE"] = 1;
        values[valuesById[2] = "enum_UNIT_ITEM_ELEVATION"] = 2;
        values[valuesById[3] = "enum_UNIT_ITEM_WEIGHT"] = 3;
        values[valuesById[4] = "enum_UNIT_ITEM_TEMPERATURE"] = 4;
        return values;
    })();

    config.unit_msg = (function() {

        /**
         * Properties of an unit_msg.
         * @memberof config
         * @interface Iunit_msg
         * @property {config.UNIT_ITEM|null} [unitItem] unit_msg unitItem
         * @property {config.UNIT_TYPE|null} [unitType] unit_msg unitType
         */

        /**
         * Constructs a new unit_msg.
         * @memberof config
         * @classdesc Represents an unit_msg.
         * @implements Iunit_msg
         * @constructor
         * @param {config.Iunit_msg=} [properties] Properties to set
         */
        function unit_msg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * unit_msg unitItem.
         * @member {config.UNIT_ITEM} unitItem
         * @memberof config.unit_msg
         * @instance
         */
        unit_msg.prototype.unitItem = 0;

        /**
         * unit_msg unitType.
         * @member {config.UNIT_TYPE} unitType
         * @memberof config.unit_msg
         * @instance
         */
        unit_msg.prototype.unitType = 0;

        /**
         * Creates a new unit_msg instance using the specified properties.
         * @function create
         * @memberof config.unit_msg
         * @static
         * @param {config.Iunit_msg=} [properties] Properties to set
         * @returns {config.unit_msg} unit_msg instance
         */
        unit_msg.create = function create(properties) {
            return new unit_msg(properties);
        };

        /**
         * Encodes the specified unit_msg message. Does not implicitly {@link config.unit_msg.verify|verify} messages.
         * @function encode
         * @memberof config.unit_msg
         * @static
         * @param {config.Iunit_msg} message unit_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        unit_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.unitItem != null && Object.hasOwnProperty.call(message, "unitItem"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.unitItem);
            if (message.unitType != null && Object.hasOwnProperty.call(message, "unitType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.unitType);
            return writer;
        };

        /**
         * Encodes the specified unit_msg message, length delimited. Does not implicitly {@link config.unit_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.unit_msg
         * @static
         * @param {config.Iunit_msg} message unit_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        unit_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an unit_msg message from the specified reader or buffer.
         * @function decode
         * @memberof config.unit_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.unit_msg} unit_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        unit_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.unit_msg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.unitItem = reader.int32();
                        break;
                    }
                case 2: {
                        message.unitType = reader.int32();
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
         * Decodes an unit_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.unit_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.unit_msg} unit_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        unit_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an unit_msg message.
         * @function verify
         * @memberof config.unit_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        unit_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.unitItem != null && message.hasOwnProperty("unitItem"))
                switch (message.unitItem) {
                default:
                    return "unitItem: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.unitType != null && message.hasOwnProperty("unitType"))
                switch (message.unitType) {
                default:
                    return "unitType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates an unit_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.unit_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.unit_msg} unit_msg
         */
        unit_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.config.unit_msg)
                return object;
            let message = new $root.config.unit_msg();
            switch (object.unitItem) {
            default:
                if (typeof object.unitItem === "number") {
                    message.unitItem = object.unitItem;
                    break;
                }
                break;
            case "enum_UNIT_ITEM_INVALID":
            case 0:
                message.unitItem = 0;
                break;
            case "enum_UNIT_ITEM_DISTANCE":
            case 1:
                message.unitItem = 1;
                break;
            case "enum_UNIT_ITEM_ELEVATION":
            case 2:
                message.unitItem = 2;
                break;
            case "enum_UNIT_ITEM_WEIGHT":
            case 3:
                message.unitItem = 3;
                break;
            case "enum_UNIT_ITEM_TEMPERATURE":
            case 4:
                message.unitItem = 4;
                break;
            }
            switch (object.unitType) {
            default:
                if (typeof object.unitType === "number") {
                    message.unitType = object.unitType;
                    break;
                }
                break;
            case "enum_UNIT_TYPE_INVALID":
            case 0:
                message.unitType = 0;
                break;
            case "enum_UNIT_TYPE_METRIC":
            case 1:
                message.unitType = 1;
                break;
            case "enum_UNIT_TYPE_INCH":
            case 2:
                message.unitType = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from an unit_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.unit_msg
         * @static
         * @param {config.unit_msg} message unit_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        unit_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.unitItem = options.enums === String ? "enum_UNIT_ITEM_INVALID" : 0;
                object.unitType = options.enums === String ? "enum_UNIT_TYPE_INVALID" : 0;
            }
            if (message.unitItem != null && message.hasOwnProperty("unitItem"))
                object.unitItem = options.enums === String ? $root.config.UNIT_ITEM[message.unitItem] === undefined ? message.unitItem : $root.config.UNIT_ITEM[message.unitItem] : message.unitItem;
            if (message.unitType != null && message.hasOwnProperty("unitType"))
                object.unitType = options.enums === String ? $root.config.UNIT_TYPE[message.unitType] === undefined ? message.unitType : $root.config.UNIT_TYPE[message.unitType] : message.unitType;
            return object;
        };

        /**
         * Converts this unit_msg to JSON.
         * @function toJSON
         * @memberof config.unit_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        unit_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for unit_msg
         * @function getTypeUrl
         * @memberof config.unit_msg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        unit_msg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.unit_msg";
        };

        return unit_msg;
    })();

    config.section_data_msg = (function() {

        /**
         * Properties of a section_data_msg.
         * @memberof config
         * @interface Isection_data_msg
         * @property {Array.<number>|null} [hrm] section_data_msg hrm
         * @property {Array.<number>|null} [cad] section_data_msg cad
         * @property {Array.<number>|null} [spd] section_data_msg spd
         * @property {number|null} [FTP] section_data_msg FTP
         * @property {Array.<number>|null} [power] section_data_msg power
         */

        /**
         * Constructs a new section_data_msg.
         * @memberof config
         * @classdesc Represents a section_data_msg.
         * @implements Isection_data_msg
         * @constructor
         * @param {config.Isection_data_msg=} [properties] Properties to set
         */
        function section_data_msg(properties) {
            this.hrm = [];
            this.cad = [];
            this.spd = [];
            this.power = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * section_data_msg hrm.
         * @member {Array.<number>} hrm
         * @memberof config.section_data_msg
         * @instance
         */
        section_data_msg.prototype.hrm = $util.emptyArray;

        /**
         * section_data_msg cad.
         * @member {Array.<number>} cad
         * @memberof config.section_data_msg
         * @instance
         */
        section_data_msg.prototype.cad = $util.emptyArray;

        /**
         * section_data_msg spd.
         * @member {Array.<number>} spd
         * @memberof config.section_data_msg
         * @instance
         */
        section_data_msg.prototype.spd = $util.emptyArray;

        /**
         * section_data_msg FTP.
         * @member {number} FTP
         * @memberof config.section_data_msg
         * @instance
         */
        section_data_msg.prototype.FTP = 0;

        /**
         * section_data_msg power.
         * @member {Array.<number>} power
         * @memberof config.section_data_msg
         * @instance
         */
        section_data_msg.prototype.power = $util.emptyArray;

        /**
         * Creates a new section_data_msg instance using the specified properties.
         * @function create
         * @memberof config.section_data_msg
         * @static
         * @param {config.Isection_data_msg=} [properties] Properties to set
         * @returns {config.section_data_msg} section_data_msg instance
         */
        section_data_msg.create = function create(properties) {
            return new section_data_msg(properties);
        };

        /**
         * Encodes the specified section_data_msg message. Does not implicitly {@link config.section_data_msg.verify|verify} messages.
         * @function encode
         * @memberof config.section_data_msg
         * @static
         * @param {config.Isection_data_msg} message section_data_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        section_data_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hrm != null && message.hrm.length)
                for (let i = 0; i < message.hrm.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.hrm[i]);
            if (message.cad != null && message.cad.length)
                for (let i = 0; i < message.cad.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.cad[i]);
            if (message.spd != null && message.spd.length)
                for (let i = 0; i < message.spd.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.spd[i]);
            if (message.FTP != null && Object.hasOwnProperty.call(message, "FTP"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.FTP);
            if (message.power != null && message.power.length)
                for (let i = 0; i < message.power.length; ++i)
                    writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.power[i]);
            return writer;
        };

        /**
         * Encodes the specified section_data_msg message, length delimited. Does not implicitly {@link config.section_data_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.section_data_msg
         * @static
         * @param {config.Isection_data_msg} message section_data_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        section_data_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a section_data_msg message from the specified reader or buffer.
         * @function decode
         * @memberof config.section_data_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.section_data_msg} section_data_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        section_data_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.section_data_msg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.hrm && message.hrm.length))
                            message.hrm = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.hrm.push(reader.uint32());
                        } else
                            message.hrm.push(reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.cad && message.cad.length))
                            message.cad = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.cad.push(reader.uint32());
                        } else
                            message.cad.push(reader.uint32());
                        break;
                    }
                case 3: {
                        if (!(message.spd && message.spd.length))
                            message.spd = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.spd.push(reader.uint32());
                        } else
                            message.spd.push(reader.uint32());
                        break;
                    }
                case 10: {
                        message.FTP = reader.uint32();
                        break;
                    }
                case 11: {
                        if (!(message.power && message.power.length))
                            message.power = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.power.push(reader.uint32());
                        } else
                            message.power.push(reader.uint32());
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
         * Decodes a section_data_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.section_data_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.section_data_msg} section_data_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        section_data_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a section_data_msg message.
         * @function verify
         * @memberof config.section_data_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        section_data_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hrm != null && message.hasOwnProperty("hrm")) {
                if (!Array.isArray(message.hrm))
                    return "hrm: array expected";
                for (let i = 0; i < message.hrm.length; ++i)
                    if (!$util.isInteger(message.hrm[i]))
                        return "hrm: integer[] expected";
            }
            if (message.cad != null && message.hasOwnProperty("cad")) {
                if (!Array.isArray(message.cad))
                    return "cad: array expected";
                for (let i = 0; i < message.cad.length; ++i)
                    if (!$util.isInteger(message.cad[i]))
                        return "cad: integer[] expected";
            }
            if (message.spd != null && message.hasOwnProperty("spd")) {
                if (!Array.isArray(message.spd))
                    return "spd: array expected";
                for (let i = 0; i < message.spd.length; ++i)
                    if (!$util.isInteger(message.spd[i]))
                        return "spd: integer[] expected";
            }
            if (message.FTP != null && message.hasOwnProperty("FTP"))
                if (!$util.isInteger(message.FTP))
                    return "FTP: integer expected";
            if (message.power != null && message.hasOwnProperty("power")) {
                if (!Array.isArray(message.power))
                    return "power: array expected";
                for (let i = 0; i < message.power.length; ++i)
                    if (!$util.isInteger(message.power[i]))
                        return "power: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a section_data_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.section_data_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.section_data_msg} section_data_msg
         */
        section_data_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.config.section_data_msg)
                return object;
            let message = new $root.config.section_data_msg();
            if (object.hrm) {
                if (!Array.isArray(object.hrm))
                    throw TypeError(".config.section_data_msg.hrm: array expected");
                message.hrm = [];
                for (let i = 0; i < object.hrm.length; ++i)
                    message.hrm[i] = object.hrm[i] >>> 0;
            }
            if (object.cad) {
                if (!Array.isArray(object.cad))
                    throw TypeError(".config.section_data_msg.cad: array expected");
                message.cad = [];
                for (let i = 0; i < object.cad.length; ++i)
                    message.cad[i] = object.cad[i] >>> 0;
            }
            if (object.spd) {
                if (!Array.isArray(object.spd))
                    throw TypeError(".config.section_data_msg.spd: array expected");
                message.spd = [];
                for (let i = 0; i < object.spd.length; ++i)
                    message.spd[i] = object.spd[i] >>> 0;
            }
            if (object.FTP != null)
                message.FTP = object.FTP >>> 0;
            if (object.power) {
                if (!Array.isArray(object.power))
                    throw TypeError(".config.section_data_msg.power: array expected");
                message.power = [];
                for (let i = 0; i < object.power.length; ++i)
                    message.power[i] = object.power[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a section_data_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.section_data_msg
         * @static
         * @param {config.section_data_msg} message section_data_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        section_data_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.hrm = [];
                object.cad = [];
                object.spd = [];
                object.power = [];
            }
            if (options.defaults)
                object.FTP = 0;
            if (message.hrm && message.hrm.length) {
                object.hrm = [];
                for (let j = 0; j < message.hrm.length; ++j)
                    object.hrm[j] = message.hrm[j];
            }
            if (message.cad && message.cad.length) {
                object.cad = [];
                for (let j = 0; j < message.cad.length; ++j)
                    object.cad[j] = message.cad[j];
            }
            if (message.spd && message.spd.length) {
                object.spd = [];
                for (let j = 0; j < message.spd.length; ++j)
                    object.spd[j] = message.spd[j];
            }
            if (message.FTP != null && message.hasOwnProperty("FTP"))
                object.FTP = message.FTP;
            if (message.power && message.power.length) {
                object.power = [];
                for (let j = 0; j < message.power.length; ++j)
                    object.power[j] = message.power[j];
            }
            return object;
        };

        /**
         * Converts this section_data_msg to JSON.
         * @function toJSON
         * @memberof config.section_data_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        section_data_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for section_data_msg
         * @function getTypeUrl
         * @memberof config.section_data_msg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        section_data_msg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.section_data_msg";
        };

        return section_data_msg;
    })();

    config.user_data_msg = (function() {

        /**
         * Properties of a user_data_msg.
         * @memberof config
         * @interface Iuser_data_msg
         * @property {number|null} [sex] user_data_msg sex
         * @property {number|null} [weight] user_data_msg weight
         * @property {number|null} [age] user_data_msg age
         * @property {number|null} [height] user_data_msg height
         * @property {number|null} [timeZone] user_data_msg timeZone
         * @property {string|null} [memberId] user_data_msg memberId
         * @property {number|null} [updateStatus] user_data_msg updateStatus
         * @property {config.Isection_data_msg|null} [sectionData] user_data_msg sectionData
         */

        /**
         * Constructs a new user_data_msg.
         * @memberof config
         * @classdesc Represents a user_data_msg.
         * @implements Iuser_data_msg
         * @constructor
         * @param {config.Iuser_data_msg=} [properties] Properties to set
         */
        function user_data_msg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * user_data_msg sex.
         * @member {number} sex
         * @memberof config.user_data_msg
         * @instance
         */
        user_data_msg.prototype.sex = 0;

        /**
         * user_data_msg weight.
         * @member {number} weight
         * @memberof config.user_data_msg
         * @instance
         */
        user_data_msg.prototype.weight = 0;

        /**
         * user_data_msg age.
         * @member {number} age
         * @memberof config.user_data_msg
         * @instance
         */
        user_data_msg.prototype.age = 0;

        /**
         * user_data_msg height.
         * @member {number} height
         * @memberof config.user_data_msg
         * @instance
         */
        user_data_msg.prototype.height = 0;

        /**
         * user_data_msg timeZone.
         * @member {number} timeZone
         * @memberof config.user_data_msg
         * @instance
         */
        user_data_msg.prototype.timeZone = 0;

        /**
         * user_data_msg memberId.
         * @member {string} memberId
         * @memberof config.user_data_msg
         * @instance
         */
        user_data_msg.prototype.memberId = "";

        /**
         * user_data_msg updateStatus.
         * @member {number} updateStatus
         * @memberof config.user_data_msg
         * @instance
         */
        user_data_msg.prototype.updateStatus = 0;

        /**
         * user_data_msg sectionData.
         * @member {config.Isection_data_msg|null|undefined} sectionData
         * @memberof config.user_data_msg
         * @instance
         */
        user_data_msg.prototype.sectionData = null;

        /**
         * Creates a new user_data_msg instance using the specified properties.
         * @function create
         * @memberof config.user_data_msg
         * @static
         * @param {config.Iuser_data_msg=} [properties] Properties to set
         * @returns {config.user_data_msg} user_data_msg instance
         */
        user_data_msg.create = function create(properties) {
            return new user_data_msg(properties);
        };

        /**
         * Encodes the specified user_data_msg message. Does not implicitly {@link config.user_data_msg.verify|verify} messages.
         * @function encode
         * @memberof config.user_data_msg
         * @static
         * @param {config.Iuser_data_msg} message user_data_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_data_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sex != null && Object.hasOwnProperty.call(message, "sex"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.sex);
            if (message.weight != null && Object.hasOwnProperty.call(message, "weight"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.weight);
            if (message.age != null && Object.hasOwnProperty.call(message, "age"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.age);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.height);
            if (message.timeZone != null && Object.hasOwnProperty.call(message, "timeZone"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.timeZone);
            if (message.memberId != null && Object.hasOwnProperty.call(message, "memberId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.memberId);
            if (message.updateStatus != null && Object.hasOwnProperty.call(message, "updateStatus"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.updateStatus);
            if (message.sectionData != null && Object.hasOwnProperty.call(message, "sectionData"))
                $root.config.section_data_msg.encode(message.sectionData, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified user_data_msg message, length delimited. Does not implicitly {@link config.user_data_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.user_data_msg
         * @static
         * @param {config.Iuser_data_msg} message user_data_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_data_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a user_data_msg message from the specified reader or buffer.
         * @function decode
         * @memberof config.user_data_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.user_data_msg} user_data_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_data_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.user_data_msg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.sex = reader.uint32();
                        break;
                    }
                case 2: {
                        message.weight = reader.uint32();
                        break;
                    }
                case 3: {
                        message.age = reader.uint32();
                        break;
                    }
                case 4: {
                        message.height = reader.uint32();
                        break;
                    }
                case 7: {
                        message.timeZone = reader.int32();
                        break;
                    }
                case 8: {
                        message.memberId = reader.string();
                        break;
                    }
                case 9: {
                        message.updateStatus = reader.uint32();
                        break;
                    }
                case 20: {
                        message.sectionData = $root.config.section_data_msg.decode(reader, reader.uint32());
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
         * Decodes a user_data_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.user_data_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.user_data_msg} user_data_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_data_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a user_data_msg message.
         * @function verify
         * @memberof config.user_data_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        user_data_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            if (message.weight != null && message.hasOwnProperty("weight"))
                if (!$util.isInteger(message.weight))
                    return "weight: integer expected";
            if (message.age != null && message.hasOwnProperty("age"))
                if (!$util.isInteger(message.age))
                    return "age: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.timeZone != null && message.hasOwnProperty("timeZone"))
                if (!$util.isInteger(message.timeZone))
                    return "timeZone: integer expected";
            if (message.memberId != null && message.hasOwnProperty("memberId"))
                if (!$util.isString(message.memberId))
                    return "memberId: string expected";
            if (message.updateStatus != null && message.hasOwnProperty("updateStatus"))
                if (!$util.isInteger(message.updateStatus))
                    return "updateStatus: integer expected";
            if (message.sectionData != null && message.hasOwnProperty("sectionData")) {
                let error = $root.config.section_data_msg.verify(message.sectionData);
                if (error)
                    return "sectionData." + error;
            }
            return null;
        };

        /**
         * Creates a user_data_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.user_data_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.user_data_msg} user_data_msg
         */
        user_data_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.config.user_data_msg)
                return object;
            let message = new $root.config.user_data_msg();
            if (object.sex != null)
                message.sex = object.sex >>> 0;
            if (object.weight != null)
                message.weight = object.weight >>> 0;
            if (object.age != null)
                message.age = object.age >>> 0;
            if (object.height != null)
                message.height = object.height >>> 0;
            if (object.timeZone != null)
                message.timeZone = object.timeZone | 0;
            if (object.memberId != null)
                message.memberId = String(object.memberId);
            if (object.updateStatus != null)
                message.updateStatus = object.updateStatus >>> 0;
            if (object.sectionData != null) {
                if (typeof object.sectionData !== "object")
                    throw TypeError(".config.user_data_msg.sectionData: object expected");
                message.sectionData = $root.config.section_data_msg.fromObject(object.sectionData);
            }
            return message;
        };

        /**
         * Creates a plain object from a user_data_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.user_data_msg
         * @static
         * @param {config.user_data_msg} message user_data_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        user_data_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.sex = 0;
                object.weight = 0;
                object.age = 0;
                object.height = 0;
                object.timeZone = 0;
                object.memberId = "";
                object.updateStatus = 0;
                object.sectionData = null;
            }
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.weight != null && message.hasOwnProperty("weight"))
                object.weight = message.weight;
            if (message.age != null && message.hasOwnProperty("age"))
                object.age = message.age;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.timeZone != null && message.hasOwnProperty("timeZone"))
                object.timeZone = message.timeZone;
            if (message.memberId != null && message.hasOwnProperty("memberId"))
                object.memberId = message.memberId;
            if (message.updateStatus != null && message.hasOwnProperty("updateStatus"))
                object.updateStatus = message.updateStatus;
            if (message.sectionData != null && message.hasOwnProperty("sectionData"))
                object.sectionData = $root.config.section_data_msg.toObject(message.sectionData, options);
            return object;
        };

        /**
         * Converts this user_data_msg to JSON.
         * @function toJSON
         * @memberof config.user_data_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        user_data_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for user_data_msg
         * @function getTypeUrl
         * @memberof config.user_data_msg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        user_data_msg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.user_data_msg";
        };

        return user_data_msg;
    })();

    config.mode_msg = (function() {

        /**
         * Properties of a mode_msg.
         * @memberof config
         * @interface Imode_msg
         * @property {number|null} [modeIndex] mode_msg modeIndex
         * @property {number|null} [modeColor] mode_msg modeColor
         * @property {number|null} [valid] mode_msg valid
         * @property {number|null} [inuse] mode_msg inuse
         * @property {number|null} [templateIndex] mode_msg templateIndex
         * @property {string|null} [modeName] mode_msg modeName
         */

        /**
         * Constructs a new mode_msg.
         * @memberof config
         * @classdesc 模式设置*************
         * @implements Imode_msg
         * @constructor
         * @param {config.Imode_msg=} [properties] Properties to set
         */
        function mode_msg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * mode_msg modeIndex.
         * @member {number} modeIndex
         * @memberof config.mode_msg
         * @instance
         */
        mode_msg.prototype.modeIndex = 0;

        /**
         * mode_msg modeColor.
         * @member {number} modeColor
         * @memberof config.mode_msg
         * @instance
         */
        mode_msg.prototype.modeColor = 0;

        /**
         * mode_msg valid.
         * @member {number} valid
         * @memberof config.mode_msg
         * @instance
         */
        mode_msg.prototype.valid = 0;

        /**
         * mode_msg inuse.
         * @member {number} inuse
         * @memberof config.mode_msg
         * @instance
         */
        mode_msg.prototype.inuse = 0;

        /**
         * mode_msg templateIndex.
         * @member {number} templateIndex
         * @memberof config.mode_msg
         * @instance
         */
        mode_msg.prototype.templateIndex = 0;

        /**
         * mode_msg modeName.
         * @member {string} modeName
         * @memberof config.mode_msg
         * @instance
         */
        mode_msg.prototype.modeName = "";

        /**
         * Creates a new mode_msg instance using the specified properties.
         * @function create
         * @memberof config.mode_msg
         * @static
         * @param {config.Imode_msg=} [properties] Properties to set
         * @returns {config.mode_msg} mode_msg instance
         */
        mode_msg.create = function create(properties) {
            return new mode_msg(properties);
        };

        /**
         * Encodes the specified mode_msg message. Does not implicitly {@link config.mode_msg.verify|verify} messages.
         * @function encode
         * @memberof config.mode_msg
         * @static
         * @param {config.Imode_msg} message mode_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        mode_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.modeIndex != null && Object.hasOwnProperty.call(message, "modeIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.modeIndex);
            if (message.modeColor != null && Object.hasOwnProperty.call(message, "modeColor"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.modeColor);
            if (message.valid != null && Object.hasOwnProperty.call(message, "valid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.valid);
            if (message.inuse != null && Object.hasOwnProperty.call(message, "inuse"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.inuse);
            if (message.templateIndex != null && Object.hasOwnProperty.call(message, "templateIndex"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.templateIndex);
            if (message.modeName != null && Object.hasOwnProperty.call(message, "modeName"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.modeName);
            return writer;
        };

        /**
         * Encodes the specified mode_msg message, length delimited. Does not implicitly {@link config.mode_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.mode_msg
         * @static
         * @param {config.Imode_msg} message mode_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        mode_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a mode_msg message from the specified reader or buffer.
         * @function decode
         * @memberof config.mode_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.mode_msg} mode_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        mode_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.mode_msg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.modeIndex = reader.uint32();
                        break;
                    }
                case 2: {
                        message.modeColor = reader.uint32();
                        break;
                    }
                case 3: {
                        message.valid = reader.uint32();
                        break;
                    }
                case 4: {
                        message.inuse = reader.uint32();
                        break;
                    }
                case 5: {
                        message.templateIndex = reader.uint32();
                        break;
                    }
                case 6: {
                        message.modeName = reader.string();
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
         * Decodes a mode_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.mode_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.mode_msg} mode_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        mode_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a mode_msg message.
         * @function verify
         * @memberof config.mode_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        mode_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.modeIndex != null && message.hasOwnProperty("modeIndex"))
                if (!$util.isInteger(message.modeIndex))
                    return "modeIndex: integer expected";
            if (message.modeColor != null && message.hasOwnProperty("modeColor"))
                if (!$util.isInteger(message.modeColor))
                    return "modeColor: integer expected";
            if (message.valid != null && message.hasOwnProperty("valid"))
                if (!$util.isInteger(message.valid))
                    return "valid: integer expected";
            if (message.inuse != null && message.hasOwnProperty("inuse"))
                if (!$util.isInteger(message.inuse))
                    return "inuse: integer expected";
            if (message.templateIndex != null && message.hasOwnProperty("templateIndex"))
                if (!$util.isInteger(message.templateIndex))
                    return "templateIndex: integer expected";
            if (message.modeName != null && message.hasOwnProperty("modeName"))
                if (!$util.isString(message.modeName))
                    return "modeName: string expected";
            return null;
        };

        /**
         * Creates a mode_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.mode_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.mode_msg} mode_msg
         */
        mode_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.config.mode_msg)
                return object;
            let message = new $root.config.mode_msg();
            if (object.modeIndex != null)
                message.modeIndex = object.modeIndex >>> 0;
            if (object.modeColor != null)
                message.modeColor = object.modeColor >>> 0;
            if (object.valid != null)
                message.valid = object.valid >>> 0;
            if (object.inuse != null)
                message.inuse = object.inuse >>> 0;
            if (object.templateIndex != null)
                message.templateIndex = object.templateIndex >>> 0;
            if (object.modeName != null)
                message.modeName = String(object.modeName);
            return message;
        };

        /**
         * Creates a plain object from a mode_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.mode_msg
         * @static
         * @param {config.mode_msg} message mode_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        mode_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.modeIndex = 0;
                object.modeColor = 0;
                object.valid = 0;
                object.inuse = 0;
                object.templateIndex = 0;
                object.modeName = "";
            }
            if (message.modeIndex != null && message.hasOwnProperty("modeIndex"))
                object.modeIndex = message.modeIndex;
            if (message.modeColor != null && message.hasOwnProperty("modeColor"))
                object.modeColor = message.modeColor;
            if (message.valid != null && message.hasOwnProperty("valid"))
                object.valid = message.valid;
            if (message.inuse != null && message.hasOwnProperty("inuse"))
                object.inuse = message.inuse;
            if (message.templateIndex != null && message.hasOwnProperty("templateIndex"))
                object.templateIndex = message.templateIndex;
            if (message.modeName != null && message.hasOwnProperty("modeName"))
                object.modeName = message.modeName;
            return object;
        };

        /**
         * Converts this mode_msg to JSON.
         * @function toJSON
         * @memberof config.mode_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        mode_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for mode_msg
         * @function getTypeUrl
         * @memberof config.mode_msg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        mode_msg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.mode_msg";
        };

        return mode_msg;
    })();

    /**
     * PAGE_TYPE enum.
     * @name config.PAGE_TYPE
     * @enum {number}
     * @property {number} enum_PAGE_TYPE_INVALID=0 enum_PAGE_TYPE_INVALID value
     * @property {number} enum_PAGE_TYPE_DATA=1 enum_PAGE_TYPE_DATA value
     * @property {number} enum_PAGE_TYPE_ELEVATION=2 enum_PAGE_TYPE_ELEVATION value
     * @property {number} enum_PAGE_TYPE_MAP=3 enum_PAGE_TYPE_MAP value
     * @property {number} enum_PAGE_TYPE_AREA=4 enum_PAGE_TYPE_AREA value
     * @property {number} enum_PAGE_TYPE_TRAINING_COURSE=5 enum_PAGE_TYPE_TRAINING_COURSE value
     * @property {number} enum_PAGE_TYPE_TRAINING_FEC=6 enum_PAGE_TYPE_TRAINING_FEC value
     * @property {number} enum_PAGE_TYPE_COMPASS=7 enum_PAGE_TYPE_COMPASS value
     * @property {number} enum_PAGE_TYPE_LAP=8 enum_PAGE_TYPE_LAP value
     * @property {number} enum_PAGE_TYPE_ROADBOOK=9 enum_PAGE_TYPE_ROADBOOK value
     * @property {number} enum_PAGE_TYPE_CLIMB=10 enum_PAGE_TYPE_CLIMB value
     * @property {number} enum_PAGE_TYPE_AIPARTNER=11 enum_PAGE_TYPE_AIPARTNER value
     * @property {number} enum_PAGE_TYPE_SEGMENT=12 enum_PAGE_TYPE_SEGMENT value
     * @property {number} enum_PAGE_TYPE_FITNESS=13 enum_PAGE_TYPE_FITNESS value
     */
    config.PAGE_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_PAGE_TYPE_INVALID"] = 0;
        values[valuesById[1] = "enum_PAGE_TYPE_DATA"] = 1;
        values[valuesById[2] = "enum_PAGE_TYPE_ELEVATION"] = 2;
        values[valuesById[3] = "enum_PAGE_TYPE_MAP"] = 3;
        values[valuesById[4] = "enum_PAGE_TYPE_AREA"] = 4;
        values[valuesById[5] = "enum_PAGE_TYPE_TRAINING_COURSE"] = 5;
        values[valuesById[6] = "enum_PAGE_TYPE_TRAINING_FEC"] = 6;
        values[valuesById[7] = "enum_PAGE_TYPE_COMPASS"] = 7;
        values[valuesById[8] = "enum_PAGE_TYPE_LAP"] = 8;
        values[valuesById[9] = "enum_PAGE_TYPE_ROADBOOK"] = 9;
        values[valuesById[10] = "enum_PAGE_TYPE_CLIMB"] = 10;
        values[valuesById[11] = "enum_PAGE_TYPE_AIPARTNER"] = 11;
        values[valuesById[12] = "enum_PAGE_TYPE_SEGMENT"] = 12;
        values[valuesById[13] = "enum_PAGE_TYPE_FITNESS"] = 13;
        return values;
    })();

    config.page_msg = (function() {

        /**
         * Properties of a page_msg.
         * @memberof config
         * @interface Ipage_msg
         * @property {number|null} [pageIndex] page_msg pageIndex
         * @property {number|null} [status] page_msg status
         * @property {Array.<number>|null} [data] page_msg data
         * @property {number|null} [dataSite] page_msg dataSite
         * @property {string|null} [pageName] page_msg pageName
         * @property {config.PAGE_TYPE|null} [pageType] page_msg pageType
         * @property {number|null} [pageMode] page_msg pageMode
         * @property {number|null} [mainPageStatus] page_msg mainPageStatus
         * @property {number|null} [lineWidth] page_msg lineWidth
         * @property {number|null} [graphicDisplay] page_msg graphicDisplay
         */

        /**
         * Constructs a new page_msg.
         * @memberof config
         * @classdesc Represents a page_msg.
         * @implements Ipage_msg
         * @constructor
         * @param {config.Ipage_msg=} [properties] Properties to set
         */
        function page_msg(properties) {
            this.data = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * page_msg pageIndex.
         * @member {number} pageIndex
         * @memberof config.page_msg
         * @instance
         */
        page_msg.prototype.pageIndex = 0;

        /**
         * page_msg status.
         * @member {number} status
         * @memberof config.page_msg
         * @instance
         */
        page_msg.prototype.status = 0;

        /**
         * page_msg data.
         * @member {Array.<number>} data
         * @memberof config.page_msg
         * @instance
         */
        page_msg.prototype.data = $util.emptyArray;

        /**
         * page_msg dataSite.
         * @member {number} dataSite
         * @memberof config.page_msg
         * @instance
         */
        page_msg.prototype.dataSite = 0;

        /**
         * page_msg pageName.
         * @member {string} pageName
         * @memberof config.page_msg
         * @instance
         */
        page_msg.prototype.pageName = "";

        /**
         * page_msg pageType.
         * @member {config.PAGE_TYPE} pageType
         * @memberof config.page_msg
         * @instance
         */
        page_msg.prototype.pageType = 0;

        /**
         * page_msg pageMode.
         * @member {number} pageMode
         * @memberof config.page_msg
         * @instance
         */
        page_msg.prototype.pageMode = 0;

        /**
         * page_msg mainPageStatus.
         * @member {number} mainPageStatus
         * @memberof config.page_msg
         * @instance
         */
        page_msg.prototype.mainPageStatus = 0;

        /**
         * page_msg lineWidth.
         * @member {number} lineWidth
         * @memberof config.page_msg
         * @instance
         */
        page_msg.prototype.lineWidth = 0;

        /**
         * page_msg graphicDisplay.
         * @member {number} graphicDisplay
         * @memberof config.page_msg
         * @instance
         */
        page_msg.prototype.graphicDisplay = 0;

        /**
         * Creates a new page_msg instance using the specified properties.
         * @function create
         * @memberof config.page_msg
         * @static
         * @param {config.Ipage_msg=} [properties] Properties to set
         * @returns {config.page_msg} page_msg instance
         */
        page_msg.create = function create(properties) {
            return new page_msg(properties);
        };

        /**
         * Encodes the specified page_msg message. Does not implicitly {@link config.page_msg.verify|verify} messages.
         * @function encode
         * @memberof config.page_msg
         * @static
         * @param {config.Ipage_msg} message page_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        page_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pageIndex != null && Object.hasOwnProperty.call(message, "pageIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.pageIndex);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.status);
            if (message.data != null && message.data.length)
                for (let i = 0; i < message.data.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.data[i]);
            if (message.dataSite != null && Object.hasOwnProperty.call(message, "dataSite"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.dataSite);
            if (message.pageName != null && Object.hasOwnProperty.call(message, "pageName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.pageName);
            if (message.pageType != null && Object.hasOwnProperty.call(message, "pageType"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.pageType);
            if (message.pageMode != null && Object.hasOwnProperty.call(message, "pageMode"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.pageMode);
            if (message.mainPageStatus != null && Object.hasOwnProperty.call(message, "mainPageStatus"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.mainPageStatus);
            if (message.lineWidth != null && Object.hasOwnProperty.call(message, "lineWidth"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.lineWidth);
            if (message.graphicDisplay != null && Object.hasOwnProperty.call(message, "graphicDisplay"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.graphicDisplay);
            return writer;
        };

        /**
         * Encodes the specified page_msg message, length delimited. Does not implicitly {@link config.page_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.page_msg
         * @static
         * @param {config.Ipage_msg} message page_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        page_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a page_msg message from the specified reader or buffer.
         * @function decode
         * @memberof config.page_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.page_msg} page_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        page_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.page_msg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.pageIndex = reader.uint32();
                        break;
                    }
                case 2: {
                        message.status = reader.uint32();
                        break;
                    }
                case 3: {
                        if (!(message.data && message.data.length))
                            message.data = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.data.push(reader.uint32());
                        } else
                            message.data.push(reader.uint32());
                        break;
                    }
                case 4: {
                        message.dataSite = reader.uint32();
                        break;
                    }
                case 5: {
                        message.pageName = reader.string();
                        break;
                    }
                case 6: {
                        message.pageType = reader.int32();
                        break;
                    }
                case 7: {
                        message.pageMode = reader.uint32();
                        break;
                    }
                case 8: {
                        message.mainPageStatus = reader.uint32();
                        break;
                    }
                case 9: {
                        message.lineWidth = reader.uint32();
                        break;
                    }
                case 10: {
                        message.graphicDisplay = reader.uint32();
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
         * Decodes a page_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.page_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.page_msg} page_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        page_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a page_msg message.
         * @function verify
         * @memberof config.page_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        page_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                if (!$util.isInteger(message.pageIndex))
                    return "pageIndex: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (let i = 0; i < message.data.length; ++i)
                    if (!$util.isInteger(message.data[i]))
                        return "data: integer[] expected";
            }
            if (message.dataSite != null && message.hasOwnProperty("dataSite"))
                if (!$util.isInteger(message.dataSite))
                    return "dataSite: integer expected";
            if (message.pageName != null && message.hasOwnProperty("pageName"))
                if (!$util.isString(message.pageName))
                    return "pageName: string expected";
            if (message.pageType != null && message.hasOwnProperty("pageType"))
                switch (message.pageType) {
                default:
                    return "pageType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                    break;
                }
            if (message.pageMode != null && message.hasOwnProperty("pageMode"))
                if (!$util.isInteger(message.pageMode))
                    return "pageMode: integer expected";
            if (message.mainPageStatus != null && message.hasOwnProperty("mainPageStatus"))
                if (!$util.isInteger(message.mainPageStatus))
                    return "mainPageStatus: integer expected";
            if (message.lineWidth != null && message.hasOwnProperty("lineWidth"))
                if (!$util.isInteger(message.lineWidth))
                    return "lineWidth: integer expected";
            if (message.graphicDisplay != null && message.hasOwnProperty("graphicDisplay"))
                if (!$util.isInteger(message.graphicDisplay))
                    return "graphicDisplay: integer expected";
            return null;
        };

        /**
         * Creates a page_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.page_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.page_msg} page_msg
         */
        page_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.config.page_msg)
                return object;
            let message = new $root.config.page_msg();
            if (object.pageIndex != null)
                message.pageIndex = object.pageIndex >>> 0;
            if (object.status != null)
                message.status = object.status >>> 0;
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".config.page_msg.data: array expected");
                message.data = [];
                for (let i = 0; i < object.data.length; ++i)
                    message.data[i] = object.data[i] >>> 0;
            }
            if (object.dataSite != null)
                message.dataSite = object.dataSite >>> 0;
            if (object.pageName != null)
                message.pageName = String(object.pageName);
            switch (object.pageType) {
            default:
                if (typeof object.pageType === "number") {
                    message.pageType = object.pageType;
                    break;
                }
                break;
            case "enum_PAGE_TYPE_INVALID":
            case 0:
                message.pageType = 0;
                break;
            case "enum_PAGE_TYPE_DATA":
            case 1:
                message.pageType = 1;
                break;
            case "enum_PAGE_TYPE_ELEVATION":
            case 2:
                message.pageType = 2;
                break;
            case "enum_PAGE_TYPE_MAP":
            case 3:
                message.pageType = 3;
                break;
            case "enum_PAGE_TYPE_AREA":
            case 4:
                message.pageType = 4;
                break;
            case "enum_PAGE_TYPE_TRAINING_COURSE":
            case 5:
                message.pageType = 5;
                break;
            case "enum_PAGE_TYPE_TRAINING_FEC":
            case 6:
                message.pageType = 6;
                break;
            case "enum_PAGE_TYPE_COMPASS":
            case 7:
                message.pageType = 7;
                break;
            case "enum_PAGE_TYPE_LAP":
            case 8:
                message.pageType = 8;
                break;
            case "enum_PAGE_TYPE_ROADBOOK":
            case 9:
                message.pageType = 9;
                break;
            case "enum_PAGE_TYPE_CLIMB":
            case 10:
                message.pageType = 10;
                break;
            case "enum_PAGE_TYPE_AIPARTNER":
            case 11:
                message.pageType = 11;
                break;
            case "enum_PAGE_TYPE_SEGMENT":
            case 12:
                message.pageType = 12;
                break;
            case "enum_PAGE_TYPE_FITNESS":
            case 13:
                message.pageType = 13;
                break;
            }
            if (object.pageMode != null)
                message.pageMode = object.pageMode >>> 0;
            if (object.mainPageStatus != null)
                message.mainPageStatus = object.mainPageStatus >>> 0;
            if (object.lineWidth != null)
                message.lineWidth = object.lineWidth >>> 0;
            if (object.graphicDisplay != null)
                message.graphicDisplay = object.graphicDisplay >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a page_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.page_msg
         * @static
         * @param {config.page_msg} message page_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        page_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (options.defaults) {
                object.pageIndex = 0;
                object.status = 0;
                object.dataSite = 0;
                object.pageName = "";
                object.pageType = options.enums === String ? "enum_PAGE_TYPE_INVALID" : 0;
                object.pageMode = 0;
                object.mainPageStatus = 0;
                object.lineWidth = 0;
                object.graphicDisplay = 0;
            }
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                object.pageIndex = message.pageIndex;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.data && message.data.length) {
                object.data = [];
                for (let j = 0; j < message.data.length; ++j)
                    object.data[j] = message.data[j];
            }
            if (message.dataSite != null && message.hasOwnProperty("dataSite"))
                object.dataSite = message.dataSite;
            if (message.pageName != null && message.hasOwnProperty("pageName"))
                object.pageName = message.pageName;
            if (message.pageType != null && message.hasOwnProperty("pageType"))
                object.pageType = options.enums === String ? $root.config.PAGE_TYPE[message.pageType] === undefined ? message.pageType : $root.config.PAGE_TYPE[message.pageType] : message.pageType;
            if (message.pageMode != null && message.hasOwnProperty("pageMode"))
                object.pageMode = message.pageMode;
            if (message.mainPageStatus != null && message.hasOwnProperty("mainPageStatus"))
                object.mainPageStatus = message.mainPageStatus;
            if (message.lineWidth != null && message.hasOwnProperty("lineWidth"))
                object.lineWidth = message.lineWidth;
            if (message.graphicDisplay != null && message.hasOwnProperty("graphicDisplay"))
                object.graphicDisplay = message.graphicDisplay;
            return object;
        };

        /**
         * Converts this page_msg to JSON.
         * @function toJSON
         * @memberof config.page_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        page_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for page_msg
         * @function getTypeUrl
         * @memberof config.page_msg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        page_msg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.page_msg";
        };

        return page_msg;
    })();

    /**
     * LCD_TYPE enum.
     * @name config.LCD_TYPE
     * @enum {number}
     * @property {number} INVALID=0 INVALID value
     * @property {number} PIXEL_LCD=1 PIXEL_LCD value
     * @property {number} SECTION_LCD=2 SECTION_LCD value
     */
    config.LCD_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INVALID"] = 0;
        values[valuesById[1] = "PIXEL_LCD"] = 1;
        values[valuesById[2] = "SECTION_LCD"] = 2;
        return values;
    })();

    config.cur_page_status_msg = (function() {

        /**
         * Properties of a cur_page_status_msg.
         * @memberof config
         * @interface Icur_page_status_msg
         * @property {number|null} [pageLineNumMax] cur_page_status_msg pageLineNumMax
         * @property {number|null} [pageLineDataMax] cur_page_status_msg pageLineDataMax
         * @property {number|null} [dataPageNumMax] cur_page_status_msg dataPageNumMax
         * @property {Array.<number>|null} [unsupportData] cur_page_status_msg unsupportData
         * @property {config.LCD_TYPE|null} [lcdType] cur_page_status_msg lcdType
         * @property {Array.<number>|null} [supportPageLayout] cur_page_status_msg supportPageLayout
         * @property {number|null} [mainPageOpen] cur_page_status_msg mainPageOpen
         */

        /**
         * Constructs a new cur_page_status_msg.
         * @memberof config
         * @classdesc Represents a cur_page_status_msg.
         * @implements Icur_page_status_msg
         * @constructor
         * @param {config.Icur_page_status_msg=} [properties] Properties to set
         */
        function cur_page_status_msg(properties) {
            this.unsupportData = [];
            this.supportPageLayout = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * cur_page_status_msg pageLineNumMax.
         * @member {number} pageLineNumMax
         * @memberof config.cur_page_status_msg
         * @instance
         */
        cur_page_status_msg.prototype.pageLineNumMax = 0;

        /**
         * cur_page_status_msg pageLineDataMax.
         * @member {number} pageLineDataMax
         * @memberof config.cur_page_status_msg
         * @instance
         */
        cur_page_status_msg.prototype.pageLineDataMax = 0;

        /**
         * cur_page_status_msg dataPageNumMax.
         * @member {number} dataPageNumMax
         * @memberof config.cur_page_status_msg
         * @instance
         */
        cur_page_status_msg.prototype.dataPageNumMax = 0;

        /**
         * cur_page_status_msg unsupportData.
         * @member {Array.<number>} unsupportData
         * @memberof config.cur_page_status_msg
         * @instance
         */
        cur_page_status_msg.prototype.unsupportData = $util.emptyArray;

        /**
         * cur_page_status_msg lcdType.
         * @member {config.LCD_TYPE} lcdType
         * @memberof config.cur_page_status_msg
         * @instance
         */
        cur_page_status_msg.prototype.lcdType = 0;

        /**
         * cur_page_status_msg supportPageLayout.
         * @member {Array.<number>} supportPageLayout
         * @memberof config.cur_page_status_msg
         * @instance
         */
        cur_page_status_msg.prototype.supportPageLayout = $util.emptyArray;

        /**
         * cur_page_status_msg mainPageOpen.
         * @member {number} mainPageOpen
         * @memberof config.cur_page_status_msg
         * @instance
         */
        cur_page_status_msg.prototype.mainPageOpen = 0;

        /**
         * Creates a new cur_page_status_msg instance using the specified properties.
         * @function create
         * @memberof config.cur_page_status_msg
         * @static
         * @param {config.Icur_page_status_msg=} [properties] Properties to set
         * @returns {config.cur_page_status_msg} cur_page_status_msg instance
         */
        cur_page_status_msg.create = function create(properties) {
            return new cur_page_status_msg(properties);
        };

        /**
         * Encodes the specified cur_page_status_msg message. Does not implicitly {@link config.cur_page_status_msg.verify|verify} messages.
         * @function encode
         * @memberof config.cur_page_status_msg
         * @static
         * @param {config.Icur_page_status_msg} message cur_page_status_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        cur_page_status_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pageLineNumMax != null && Object.hasOwnProperty.call(message, "pageLineNumMax"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.pageLineNumMax);
            if (message.pageLineDataMax != null && Object.hasOwnProperty.call(message, "pageLineDataMax"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.pageLineDataMax);
            if (message.dataPageNumMax != null && Object.hasOwnProperty.call(message, "dataPageNumMax"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.dataPageNumMax);
            if (message.unsupportData != null && message.unsupportData.length)
                for (let i = 0; i < message.unsupportData.length; ++i)
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.unsupportData[i]);
            if (message.lcdType != null && Object.hasOwnProperty.call(message, "lcdType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.lcdType);
            if (message.supportPageLayout != null && message.supportPageLayout.length)
                for (let i = 0; i < message.supportPageLayout.length; ++i)
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.supportPageLayout[i]);
            if (message.mainPageOpen != null && Object.hasOwnProperty.call(message, "mainPageOpen"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.mainPageOpen);
            return writer;
        };

        /**
         * Encodes the specified cur_page_status_msg message, length delimited. Does not implicitly {@link config.cur_page_status_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.cur_page_status_msg
         * @static
         * @param {config.Icur_page_status_msg} message cur_page_status_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        cur_page_status_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a cur_page_status_msg message from the specified reader or buffer.
         * @function decode
         * @memberof config.cur_page_status_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.cur_page_status_msg} cur_page_status_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        cur_page_status_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.cur_page_status_msg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.pageLineNumMax = reader.uint32();
                        break;
                    }
                case 2: {
                        message.pageLineDataMax = reader.uint32();
                        break;
                    }
                case 3: {
                        message.dataPageNumMax = reader.uint32();
                        break;
                    }
                case 4: {
                        if (!(message.unsupportData && message.unsupportData.length))
                            message.unsupportData = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.unsupportData.push(reader.uint32());
                        } else
                            message.unsupportData.push(reader.uint32());
                        break;
                    }
                case 5: {
                        message.lcdType = reader.int32();
                        break;
                    }
                case 6: {
                        if (!(message.supportPageLayout && message.supportPageLayout.length))
                            message.supportPageLayout = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.supportPageLayout.push(reader.uint32());
                        } else
                            message.supportPageLayout.push(reader.uint32());
                        break;
                    }
                case 11: {
                        message.mainPageOpen = reader.uint32();
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
         * Decodes a cur_page_status_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.cur_page_status_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.cur_page_status_msg} cur_page_status_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        cur_page_status_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a cur_page_status_msg message.
         * @function verify
         * @memberof config.cur_page_status_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        cur_page_status_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pageLineNumMax != null && message.hasOwnProperty("pageLineNumMax"))
                if (!$util.isInteger(message.pageLineNumMax))
                    return "pageLineNumMax: integer expected";
            if (message.pageLineDataMax != null && message.hasOwnProperty("pageLineDataMax"))
                if (!$util.isInteger(message.pageLineDataMax))
                    return "pageLineDataMax: integer expected";
            if (message.dataPageNumMax != null && message.hasOwnProperty("dataPageNumMax"))
                if (!$util.isInteger(message.dataPageNumMax))
                    return "dataPageNumMax: integer expected";
            if (message.unsupportData != null && message.hasOwnProperty("unsupportData")) {
                if (!Array.isArray(message.unsupportData))
                    return "unsupportData: array expected";
                for (let i = 0; i < message.unsupportData.length; ++i)
                    if (!$util.isInteger(message.unsupportData[i]))
                        return "unsupportData: integer[] expected";
            }
            if (message.lcdType != null && message.hasOwnProperty("lcdType"))
                switch (message.lcdType) {
                default:
                    return "lcdType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.supportPageLayout != null && message.hasOwnProperty("supportPageLayout")) {
                if (!Array.isArray(message.supportPageLayout))
                    return "supportPageLayout: array expected";
                for (let i = 0; i < message.supportPageLayout.length; ++i)
                    if (!$util.isInteger(message.supportPageLayout[i]))
                        return "supportPageLayout: integer[] expected";
            }
            if (message.mainPageOpen != null && message.hasOwnProperty("mainPageOpen"))
                if (!$util.isInteger(message.mainPageOpen))
                    return "mainPageOpen: integer expected";
            return null;
        };

        /**
         * Creates a cur_page_status_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.cur_page_status_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.cur_page_status_msg} cur_page_status_msg
         */
        cur_page_status_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.config.cur_page_status_msg)
                return object;
            let message = new $root.config.cur_page_status_msg();
            if (object.pageLineNumMax != null)
                message.pageLineNumMax = object.pageLineNumMax >>> 0;
            if (object.pageLineDataMax != null)
                message.pageLineDataMax = object.pageLineDataMax >>> 0;
            if (object.dataPageNumMax != null)
                message.dataPageNumMax = object.dataPageNumMax >>> 0;
            if (object.unsupportData) {
                if (!Array.isArray(object.unsupportData))
                    throw TypeError(".config.cur_page_status_msg.unsupportData: array expected");
                message.unsupportData = [];
                for (let i = 0; i < object.unsupportData.length; ++i)
                    message.unsupportData[i] = object.unsupportData[i] >>> 0;
            }
            switch (object.lcdType) {
            default:
                if (typeof object.lcdType === "number") {
                    message.lcdType = object.lcdType;
                    break;
                }
                break;
            case "INVALID":
            case 0:
                message.lcdType = 0;
                break;
            case "PIXEL_LCD":
            case 1:
                message.lcdType = 1;
                break;
            case "SECTION_LCD":
            case 2:
                message.lcdType = 2;
                break;
            }
            if (object.supportPageLayout) {
                if (!Array.isArray(object.supportPageLayout))
                    throw TypeError(".config.cur_page_status_msg.supportPageLayout: array expected");
                message.supportPageLayout = [];
                for (let i = 0; i < object.supportPageLayout.length; ++i)
                    message.supportPageLayout[i] = object.supportPageLayout[i] >>> 0;
            }
            if (object.mainPageOpen != null)
                message.mainPageOpen = object.mainPageOpen >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a cur_page_status_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.cur_page_status_msg
         * @static
         * @param {config.cur_page_status_msg} message cur_page_status_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        cur_page_status_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.unsupportData = [];
                object.supportPageLayout = [];
            }
            if (options.defaults) {
                object.pageLineNumMax = 0;
                object.pageLineDataMax = 0;
                object.dataPageNumMax = 0;
                object.lcdType = options.enums === String ? "INVALID" : 0;
                object.mainPageOpen = 0;
            }
            if (message.pageLineNumMax != null && message.hasOwnProperty("pageLineNumMax"))
                object.pageLineNumMax = message.pageLineNumMax;
            if (message.pageLineDataMax != null && message.hasOwnProperty("pageLineDataMax"))
                object.pageLineDataMax = message.pageLineDataMax;
            if (message.dataPageNumMax != null && message.hasOwnProperty("dataPageNumMax"))
                object.dataPageNumMax = message.dataPageNumMax;
            if (message.unsupportData && message.unsupportData.length) {
                object.unsupportData = [];
                for (let j = 0; j < message.unsupportData.length; ++j)
                    object.unsupportData[j] = message.unsupportData[j];
            }
            if (message.lcdType != null && message.hasOwnProperty("lcdType"))
                object.lcdType = options.enums === String ? $root.config.LCD_TYPE[message.lcdType] === undefined ? message.lcdType : $root.config.LCD_TYPE[message.lcdType] : message.lcdType;
            if (message.supportPageLayout && message.supportPageLayout.length) {
                object.supportPageLayout = [];
                for (let j = 0; j < message.supportPageLayout.length; ++j)
                    object.supportPageLayout[j] = message.supportPageLayout[j];
            }
            if (message.mainPageOpen != null && message.hasOwnProperty("mainPageOpen"))
                object.mainPageOpen = message.mainPageOpen;
            return object;
        };

        /**
         * Converts this cur_page_status_msg to JSON.
         * @function toJSON
         * @memberof config.cur_page_status_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        cur_page_status_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for cur_page_status_msg
         * @function getTypeUrl
         * @memberof config.cur_page_status_msg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        cur_page_status_msg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.cur_page_status_msg";
        };

        return cur_page_status_msg;
    })();

    config.bike_msg = (function() {

        /**
         * Properties of a bike_msg.
         * @memberof config
         * @interface Ibike_msg
         * @property {number|null} [bikeIndex] bike_msg bikeIndex
         * @property {string|null} [bikeName] bike_msg bikeName
         * @property {number|null} [bikeWeigth] bike_msg bikeWeigth
         * @property {number|null} [wheelDia] bike_msg wheelDia
         * @property {number|Long|null} [odometer] bike_msg odometer
         * @property {number|null} [autoDia] bike_msg autoDia
         * @property {number|null} [bikeStatus] bike_msg bikeStatus
         */

        /**
         * Constructs a new bike_msg.
         * @memberof config
         * @classdesc Represents a bike_msg.
         * @implements Ibike_msg
         * @constructor
         * @param {config.Ibike_msg=} [properties] Properties to set
         */
        function bike_msg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * bike_msg bikeIndex.
         * @member {number} bikeIndex
         * @memberof config.bike_msg
         * @instance
         */
        bike_msg.prototype.bikeIndex = 0;

        /**
         * bike_msg bikeName.
         * @member {string} bikeName
         * @memberof config.bike_msg
         * @instance
         */
        bike_msg.prototype.bikeName = "";

        /**
         * bike_msg bikeWeigth.
         * @member {number} bikeWeigth
         * @memberof config.bike_msg
         * @instance
         */
        bike_msg.prototype.bikeWeigth = 0;

        /**
         * bike_msg wheelDia.
         * @member {number} wheelDia
         * @memberof config.bike_msg
         * @instance
         */
        bike_msg.prototype.wheelDia = 0;

        /**
         * bike_msg odometer.
         * @member {number|Long} odometer
         * @memberof config.bike_msg
         * @instance
         */
        bike_msg.prototype.odometer = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * bike_msg autoDia.
         * @member {number} autoDia
         * @memberof config.bike_msg
         * @instance
         */
        bike_msg.prototype.autoDia = 0;

        /**
         * bike_msg bikeStatus.
         * @member {number} bikeStatus
         * @memberof config.bike_msg
         * @instance
         */
        bike_msg.prototype.bikeStatus = 0;

        /**
         * Creates a new bike_msg instance using the specified properties.
         * @function create
         * @memberof config.bike_msg
         * @static
         * @param {config.Ibike_msg=} [properties] Properties to set
         * @returns {config.bike_msg} bike_msg instance
         */
        bike_msg.create = function create(properties) {
            return new bike_msg(properties);
        };

        /**
         * Encodes the specified bike_msg message. Does not implicitly {@link config.bike_msg.verify|verify} messages.
         * @function encode
         * @memberof config.bike_msg
         * @static
         * @param {config.Ibike_msg} message bike_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        bike_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bikeIndex != null && Object.hasOwnProperty.call(message, "bikeIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.bikeIndex);
            if (message.bikeName != null && Object.hasOwnProperty.call(message, "bikeName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.bikeName);
            if (message.bikeWeigth != null && Object.hasOwnProperty.call(message, "bikeWeigth"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.bikeWeigth);
            if (message.wheelDia != null && Object.hasOwnProperty.call(message, "wheelDia"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.wheelDia);
            if (message.odometer != null && Object.hasOwnProperty.call(message, "odometer"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.odometer);
            if (message.autoDia != null && Object.hasOwnProperty.call(message, "autoDia"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.autoDia);
            if (message.bikeStatus != null && Object.hasOwnProperty.call(message, "bikeStatus"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.bikeStatus);
            return writer;
        };

        /**
         * Encodes the specified bike_msg message, length delimited. Does not implicitly {@link config.bike_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.bike_msg
         * @static
         * @param {config.Ibike_msg} message bike_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        bike_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a bike_msg message from the specified reader or buffer.
         * @function decode
         * @memberof config.bike_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.bike_msg} bike_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        bike_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.bike_msg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.bikeIndex = reader.uint32();
                        break;
                    }
                case 2: {
                        message.bikeName = reader.string();
                        break;
                    }
                case 3: {
                        message.bikeWeigth = reader.uint32();
                        break;
                    }
                case 4: {
                        message.wheelDia = reader.uint32();
                        break;
                    }
                case 5: {
                        message.odometer = reader.uint64();
                        break;
                    }
                case 6: {
                        message.autoDia = reader.uint32();
                        break;
                    }
                case 7: {
                        message.bikeStatus = reader.uint32();
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
         * Decodes a bike_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.bike_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.bike_msg} bike_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        bike_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a bike_msg message.
         * @function verify
         * @memberof config.bike_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        bike_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bikeIndex != null && message.hasOwnProperty("bikeIndex"))
                if (!$util.isInteger(message.bikeIndex))
                    return "bikeIndex: integer expected";
            if (message.bikeName != null && message.hasOwnProperty("bikeName"))
                if (!$util.isString(message.bikeName))
                    return "bikeName: string expected";
            if (message.bikeWeigth != null && message.hasOwnProperty("bikeWeigth"))
                if (!$util.isInteger(message.bikeWeigth))
                    return "bikeWeigth: integer expected";
            if (message.wheelDia != null && message.hasOwnProperty("wheelDia"))
                if (!$util.isInteger(message.wheelDia))
                    return "wheelDia: integer expected";
            if (message.odometer != null && message.hasOwnProperty("odometer"))
                if (!$util.isInteger(message.odometer) && !(message.odometer && $util.isInteger(message.odometer.low) && $util.isInteger(message.odometer.high)))
                    return "odometer: integer|Long expected";
            if (message.autoDia != null && message.hasOwnProperty("autoDia"))
                if (!$util.isInteger(message.autoDia))
                    return "autoDia: integer expected";
            if (message.bikeStatus != null && message.hasOwnProperty("bikeStatus"))
                if (!$util.isInteger(message.bikeStatus))
                    return "bikeStatus: integer expected";
            return null;
        };

        /**
         * Creates a bike_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.bike_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.bike_msg} bike_msg
         */
        bike_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.config.bike_msg)
                return object;
            let message = new $root.config.bike_msg();
            if (object.bikeIndex != null)
                message.bikeIndex = object.bikeIndex >>> 0;
            if (object.bikeName != null)
                message.bikeName = String(object.bikeName);
            if (object.bikeWeigth != null)
                message.bikeWeigth = object.bikeWeigth >>> 0;
            if (object.wheelDia != null)
                message.wheelDia = object.wheelDia >>> 0;
            if (object.odometer != null)
                if ($util.Long)
                    (message.odometer = $util.Long.fromValue(object.odometer)).unsigned = true;
                else if (typeof object.odometer === "string")
                    message.odometer = parseInt(object.odometer, 10);
                else if (typeof object.odometer === "number")
                    message.odometer = object.odometer;
                else if (typeof object.odometer === "object")
                    message.odometer = new $util.LongBits(object.odometer.low >>> 0, object.odometer.high >>> 0).toNumber(true);
            if (object.autoDia != null)
                message.autoDia = object.autoDia >>> 0;
            if (object.bikeStatus != null)
                message.bikeStatus = object.bikeStatus >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a bike_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.bike_msg
         * @static
         * @param {config.bike_msg} message bike_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        bike_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.bikeIndex = 0;
                object.bikeName = "";
                object.bikeWeigth = 0;
                object.wheelDia = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.odometer = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.odometer = options.longs === String ? "0" : 0;
                object.autoDia = 0;
                object.bikeStatus = 0;
            }
            if (message.bikeIndex != null && message.hasOwnProperty("bikeIndex"))
                object.bikeIndex = message.bikeIndex;
            if (message.bikeName != null && message.hasOwnProperty("bikeName"))
                object.bikeName = message.bikeName;
            if (message.bikeWeigth != null && message.hasOwnProperty("bikeWeigth"))
                object.bikeWeigth = message.bikeWeigth;
            if (message.wheelDia != null && message.hasOwnProperty("wheelDia"))
                object.wheelDia = message.wheelDia;
            if (message.odometer != null && message.hasOwnProperty("odometer"))
                if (typeof message.odometer === "number")
                    object.odometer = options.longs === String ? String(message.odometer) : message.odometer;
                else
                    object.odometer = options.longs === String ? $util.Long.prototype.toString.call(message.odometer) : options.longs === Number ? new $util.LongBits(message.odometer.low >>> 0, message.odometer.high >>> 0).toNumber(true) : message.odometer;
            if (message.autoDia != null && message.hasOwnProperty("autoDia"))
                object.autoDia = message.autoDia;
            if (message.bikeStatus != null && message.hasOwnProperty("bikeStatus"))
                object.bikeStatus = message.bikeStatus;
            return object;
        };

        /**
         * Converts this bike_msg to JSON.
         * @function toJSON
         * @memberof config.bike_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        bike_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for bike_msg
         * @function getTypeUrl
         * @memberof config.bike_msg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        bike_msg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.bike_msg";
        };

        return bike_msg;
    })();

    /**
     * LANGUAGE_TYPE enum.
     * @name config.LANGUAGE_TYPE
     * @enum {number}
     * @property {number} enum_LANGUAGE_TYPE_INVALID=0 enum_LANGUAGE_TYPE_INVALID value
     * @property {number} enum_LANGUAGE_TYPE_ENGLISH=1 enum_LANGUAGE_TYPE_ENGLISH value
     * @property {number} enum_LANGUAGE_TYPE_SPANISH=2 enum_LANGUAGE_TYPE_SPANISH value
     * @property {number} enum_LANGUAGE_TYPE_FRENCH=3 enum_LANGUAGE_TYPE_FRENCH value
     * @property {number} enum_LANGUAGE_TYPE_GERMAN=4 enum_LANGUAGE_TYPE_GERMAN value
     * @property {number} enum_LANGUAGE_TYPE_JAPANESE=5 enum_LANGUAGE_TYPE_JAPANESE value
     * @property {number} enum_LANGUAGE_TYPE_ITALIAN=6 enum_LANGUAGE_TYPE_ITALIAN value
     * @property {number} enum_LANGUAGE_TYPE_PORTUGUESE=7 enum_LANGUAGE_TYPE_PORTUGUESE value
     * @property {number} enum_LANGUAGE_TYPE_KOREAN=8 enum_LANGUAGE_TYPE_KOREAN value
     * @property {number} enum_LANGUAGE_TYPE_CHINESE=9 enum_LANGUAGE_TYPE_CHINESE value
     * @property {number} enum_LANGUAGE_TYPE_TAIWANESE=10 enum_LANGUAGE_TYPE_TAIWANESE value
     * @property {number} enum_LANGUAGE_TYPE_POLISH=11 enum_LANGUAGE_TYPE_POLISH value
     * @property {number} enum_LANGUAGE_TYPE_CROATIAN=12 enum_LANGUAGE_TYPE_CROATIAN value
     * @property {number} enum_LANGUAGE_TYPE_CZECH=13 enum_LANGUAGE_TYPE_CZECH value
     * @property {number} enum_LANGUAGE_TYPE_DANISH=14 enum_LANGUAGE_TYPE_DANISH value
     * @property {number} enum_LANGUAGE_TYPE_DUTCH=15 enum_LANGUAGE_TYPE_DUTCH value
     * @property {number} enum_LANGUAGE_TYPE_FINNISH=16 enum_LANGUAGE_TYPE_FINNISH value
     * @property {number} enum_LANGUAGE_TYPE_GREEK=17 enum_LANGUAGE_TYPE_GREEK value
     * @property {number} enum_LANGUAGE_TYPE_HUNGARIAN=18 enum_LANGUAGE_TYPE_HUNGARIAN value
     * @property {number} enum_LANGUAGE_TYPE_NORWEGIAN=19 enum_LANGUAGE_TYPE_NORWEGIAN value
     * @property {number} enum_LANGUAGE_TYPE_SLOVAKIAN=20 enum_LANGUAGE_TYPE_SLOVAKIAN value
     * @property {number} enum_LANGUAGE_TYPE_SLOVENIAN=21 enum_LANGUAGE_TYPE_SLOVENIAN value
     * @property {number} enum_LANGUAGE_TYPE_SWEDISH=22 enum_LANGUAGE_TYPE_SWEDISH value
     * @property {number} enum_LANGUAGE_TYPE_RUSSIAN=23 enum_LANGUAGE_TYPE_RUSSIAN value
     * @property {number} enum_LANGUAGE_TYPE_TURKISH=24 enum_LANGUAGE_TYPE_TURKISH value
     * @property {number} enum_LANGUAGE_TYPE_LATVIAN=25 enum_LANGUAGE_TYPE_LATVIAN value
     * @property {number} enum_LANGUAGE_TYPE_UKRAINIAN=26 enum_LANGUAGE_TYPE_UKRAINIAN value
     * @property {number} enum_LANGUAGE_TYPE_ARABIC=27 enum_LANGUAGE_TYPE_ARABIC value
     * @property {number} enum_LANGUAGE_TYPE_FARSI=28 enum_LANGUAGE_TYPE_FARSI value
     * @property {number} enum_LANGUAGE_TYPE_BULGARIAN=29 enum_LANGUAGE_TYPE_BULGARIAN value
     * @property {number} enum_LANGUAGE_TYPE_ROMANIAN=30 enum_LANGUAGE_TYPE_ROMANIAN value
     * @property {number} enum_LANGUAGE_TYPE_THAI=31 enum_LANGUAGE_TYPE_THAI value
     * @property {number} enum_LANGUAGE_TYPE_HEBREW=32 enum_LANGUAGE_TYPE_HEBREW value
     * @property {number} enum_LANGUAGE_TYPE_BRAZILIAN_PORTUGUESE=33 enum_LANGUAGE_TYPE_BRAZILIAN_PORTUGUESE value
     * @property {number} enum_LANGUAGE_TYPE_INDONESIAN=34 enum_LANGUAGE_TYPE_INDONESIAN value
     * @property {number} enum_LANGUAGE_TYPE_MALAYSIAN=35 enum_LANGUAGE_TYPE_MALAYSIAN value
     * @property {number} enum_LANGUAGE_TYPE_VIETNAMESE=36 enum_LANGUAGE_TYPE_VIETNAMESE value
     * @property {number} enum_LANGUAGE_TYPE_BURMESE=37 enum_LANGUAGE_TYPE_BURMESE value
     * @property {number} enum_LANGUAGE_TYPE_MONGOLIAN=38 enum_LANGUAGE_TYPE_MONGOLIAN value
     * @property {number} enum_LANGUAGE_TYPE_ALL=100 enum_LANGUAGE_TYPE_ALL value
     * @property {number} enum_LANGUAGE_TYPE_CUSTOM=254 enum_LANGUAGE_TYPE_CUSTOM value
     */
    config.LANGUAGE_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_LANGUAGE_TYPE_INVALID"] = 0;
        values[valuesById[1] = "enum_LANGUAGE_TYPE_ENGLISH"] = 1;
        values[valuesById[2] = "enum_LANGUAGE_TYPE_SPANISH"] = 2;
        values[valuesById[3] = "enum_LANGUAGE_TYPE_FRENCH"] = 3;
        values[valuesById[4] = "enum_LANGUAGE_TYPE_GERMAN"] = 4;
        values[valuesById[5] = "enum_LANGUAGE_TYPE_JAPANESE"] = 5;
        values[valuesById[6] = "enum_LANGUAGE_TYPE_ITALIAN"] = 6;
        values[valuesById[7] = "enum_LANGUAGE_TYPE_PORTUGUESE"] = 7;
        values[valuesById[8] = "enum_LANGUAGE_TYPE_KOREAN"] = 8;
        values[valuesById[9] = "enum_LANGUAGE_TYPE_CHINESE"] = 9;
        values[valuesById[10] = "enum_LANGUAGE_TYPE_TAIWANESE"] = 10;
        values[valuesById[11] = "enum_LANGUAGE_TYPE_POLISH"] = 11;
        values[valuesById[12] = "enum_LANGUAGE_TYPE_CROATIAN"] = 12;
        values[valuesById[13] = "enum_LANGUAGE_TYPE_CZECH"] = 13;
        values[valuesById[14] = "enum_LANGUAGE_TYPE_DANISH"] = 14;
        values[valuesById[15] = "enum_LANGUAGE_TYPE_DUTCH"] = 15;
        values[valuesById[16] = "enum_LANGUAGE_TYPE_FINNISH"] = 16;
        values[valuesById[17] = "enum_LANGUAGE_TYPE_GREEK"] = 17;
        values[valuesById[18] = "enum_LANGUAGE_TYPE_HUNGARIAN"] = 18;
        values[valuesById[19] = "enum_LANGUAGE_TYPE_NORWEGIAN"] = 19;
        values[valuesById[20] = "enum_LANGUAGE_TYPE_SLOVAKIAN"] = 20;
        values[valuesById[21] = "enum_LANGUAGE_TYPE_SLOVENIAN"] = 21;
        values[valuesById[22] = "enum_LANGUAGE_TYPE_SWEDISH"] = 22;
        values[valuesById[23] = "enum_LANGUAGE_TYPE_RUSSIAN"] = 23;
        values[valuesById[24] = "enum_LANGUAGE_TYPE_TURKISH"] = 24;
        values[valuesById[25] = "enum_LANGUAGE_TYPE_LATVIAN"] = 25;
        values[valuesById[26] = "enum_LANGUAGE_TYPE_UKRAINIAN"] = 26;
        values[valuesById[27] = "enum_LANGUAGE_TYPE_ARABIC"] = 27;
        values[valuesById[28] = "enum_LANGUAGE_TYPE_FARSI"] = 28;
        values[valuesById[29] = "enum_LANGUAGE_TYPE_BULGARIAN"] = 29;
        values[valuesById[30] = "enum_LANGUAGE_TYPE_ROMANIAN"] = 30;
        values[valuesById[31] = "enum_LANGUAGE_TYPE_THAI"] = 31;
        values[valuesById[32] = "enum_LANGUAGE_TYPE_HEBREW"] = 32;
        values[valuesById[33] = "enum_LANGUAGE_TYPE_BRAZILIAN_PORTUGUESE"] = 33;
        values[valuesById[34] = "enum_LANGUAGE_TYPE_INDONESIAN"] = 34;
        values[valuesById[35] = "enum_LANGUAGE_TYPE_MALAYSIAN"] = 35;
        values[valuesById[36] = "enum_LANGUAGE_TYPE_VIETNAMESE"] = 36;
        values[valuesById[37] = "enum_LANGUAGE_TYPE_BURMESE"] = 37;
        values[valuesById[38] = "enum_LANGUAGE_TYPE_MONGOLIAN"] = 38;
        values[valuesById[100] = "enum_LANGUAGE_TYPE_ALL"] = 100;
        values[valuesById[254] = "enum_LANGUAGE_TYPE_CUSTOM"] = 254;
        return values;
    })();

    config.language_msg = (function() {

        /**
         * Properties of a language_msg.
         * @memberof config
         * @interface Ilanguage_msg
         * @property {config.LANGUAGE_TYPE} curLanguage language_msg curLanguage
         * @property {Array.<config.LANGUAGE_TYPE>|null} [supportedLanguage] language_msg supportedLanguage
         */

        /**
         * Constructs a new language_msg.
         * @memberof config
         * @classdesc Represents a language_msg.
         * @implements Ilanguage_msg
         * @constructor
         * @param {config.Ilanguage_msg=} [properties] Properties to set
         */
        function language_msg(properties) {
            this.supportedLanguage = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * language_msg curLanguage.
         * @member {config.LANGUAGE_TYPE} curLanguage
         * @memberof config.language_msg
         * @instance
         */
        language_msg.prototype.curLanguage = 0;

        /**
         * language_msg supportedLanguage.
         * @member {Array.<config.LANGUAGE_TYPE>} supportedLanguage
         * @memberof config.language_msg
         * @instance
         */
        language_msg.prototype.supportedLanguage = $util.emptyArray;

        /**
         * Creates a new language_msg instance using the specified properties.
         * @function create
         * @memberof config.language_msg
         * @static
         * @param {config.Ilanguage_msg=} [properties] Properties to set
         * @returns {config.language_msg} language_msg instance
         */
        language_msg.create = function create(properties) {
            return new language_msg(properties);
        };

        /**
         * Encodes the specified language_msg message. Does not implicitly {@link config.language_msg.verify|verify} messages.
         * @function encode
         * @memberof config.language_msg
         * @static
         * @param {config.Ilanguage_msg} message language_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        language_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.curLanguage);
            if (message.supportedLanguage != null && message.supportedLanguage.length)
                for (let i = 0; i < message.supportedLanguage.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.supportedLanguage[i]);
            return writer;
        };

        /**
         * Encodes the specified language_msg message, length delimited. Does not implicitly {@link config.language_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.language_msg
         * @static
         * @param {config.Ilanguage_msg} message language_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        language_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a language_msg message from the specified reader or buffer.
         * @function decode
         * @memberof config.language_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.language_msg} language_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        language_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.language_msg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.curLanguage = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.supportedLanguage && message.supportedLanguage.length))
                            message.supportedLanguage = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.supportedLanguage.push(reader.int32());
                        } else
                            message.supportedLanguage.push(reader.int32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("curLanguage"))
                throw $util.ProtocolError("missing required 'curLanguage'", { instance: message });
            return message;
        };

        /**
         * Decodes a language_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.language_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.language_msg} language_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        language_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a language_msg message.
         * @function verify
         * @memberof config.language_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        language_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.curLanguage) {
            default:
                return "curLanguage: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
            case 27:
            case 28:
            case 29:
            case 30:
            case 31:
            case 32:
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
            case 100:
            case 254:
                break;
            }
            if (message.supportedLanguage != null && message.hasOwnProperty("supportedLanguage")) {
                if (!Array.isArray(message.supportedLanguage))
                    return "supportedLanguage: array expected";
                for (let i = 0; i < message.supportedLanguage.length; ++i)
                    switch (message.supportedLanguage[i]) {
                    default:
                        return "supportedLanguage: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 23:
                    case 24:
                    case 25:
                    case 26:
                    case 27:
                    case 28:
                    case 29:
                    case 30:
                    case 31:
                    case 32:
                    case 33:
                    case 34:
                    case 35:
                    case 36:
                    case 37:
                    case 38:
                    case 100:
                    case 254:
                        break;
                    }
            }
            return null;
        };

        /**
         * Creates a language_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.language_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.language_msg} language_msg
         */
        language_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.config.language_msg)
                return object;
            let message = new $root.config.language_msg();
            switch (object.curLanguage) {
            default:
                if (typeof object.curLanguage === "number") {
                    message.curLanguage = object.curLanguage;
                    break;
                }
                break;
            case "enum_LANGUAGE_TYPE_INVALID":
            case 0:
                message.curLanguage = 0;
                break;
            case "enum_LANGUAGE_TYPE_ENGLISH":
            case 1:
                message.curLanguage = 1;
                break;
            case "enum_LANGUAGE_TYPE_SPANISH":
            case 2:
                message.curLanguage = 2;
                break;
            case "enum_LANGUAGE_TYPE_FRENCH":
            case 3:
                message.curLanguage = 3;
                break;
            case "enum_LANGUAGE_TYPE_GERMAN":
            case 4:
                message.curLanguage = 4;
                break;
            case "enum_LANGUAGE_TYPE_JAPANESE":
            case 5:
                message.curLanguage = 5;
                break;
            case "enum_LANGUAGE_TYPE_ITALIAN":
            case 6:
                message.curLanguage = 6;
                break;
            case "enum_LANGUAGE_TYPE_PORTUGUESE":
            case 7:
                message.curLanguage = 7;
                break;
            case "enum_LANGUAGE_TYPE_KOREAN":
            case 8:
                message.curLanguage = 8;
                break;
            case "enum_LANGUAGE_TYPE_CHINESE":
            case 9:
                message.curLanguage = 9;
                break;
            case "enum_LANGUAGE_TYPE_TAIWANESE":
            case 10:
                message.curLanguage = 10;
                break;
            case "enum_LANGUAGE_TYPE_POLISH":
            case 11:
                message.curLanguage = 11;
                break;
            case "enum_LANGUAGE_TYPE_CROATIAN":
            case 12:
                message.curLanguage = 12;
                break;
            case "enum_LANGUAGE_TYPE_CZECH":
            case 13:
                message.curLanguage = 13;
                break;
            case "enum_LANGUAGE_TYPE_DANISH":
            case 14:
                message.curLanguage = 14;
                break;
            case "enum_LANGUAGE_TYPE_DUTCH":
            case 15:
                message.curLanguage = 15;
                break;
            case "enum_LANGUAGE_TYPE_FINNISH":
            case 16:
                message.curLanguage = 16;
                break;
            case "enum_LANGUAGE_TYPE_GREEK":
            case 17:
                message.curLanguage = 17;
                break;
            case "enum_LANGUAGE_TYPE_HUNGARIAN":
            case 18:
                message.curLanguage = 18;
                break;
            case "enum_LANGUAGE_TYPE_NORWEGIAN":
            case 19:
                message.curLanguage = 19;
                break;
            case "enum_LANGUAGE_TYPE_SLOVAKIAN":
            case 20:
                message.curLanguage = 20;
                break;
            case "enum_LANGUAGE_TYPE_SLOVENIAN":
            case 21:
                message.curLanguage = 21;
                break;
            case "enum_LANGUAGE_TYPE_SWEDISH":
            case 22:
                message.curLanguage = 22;
                break;
            case "enum_LANGUAGE_TYPE_RUSSIAN":
            case 23:
                message.curLanguage = 23;
                break;
            case "enum_LANGUAGE_TYPE_TURKISH":
            case 24:
                message.curLanguage = 24;
                break;
            case "enum_LANGUAGE_TYPE_LATVIAN":
            case 25:
                message.curLanguage = 25;
                break;
            case "enum_LANGUAGE_TYPE_UKRAINIAN":
            case 26:
                message.curLanguage = 26;
                break;
            case "enum_LANGUAGE_TYPE_ARABIC":
            case 27:
                message.curLanguage = 27;
                break;
            case "enum_LANGUAGE_TYPE_FARSI":
            case 28:
                message.curLanguage = 28;
                break;
            case "enum_LANGUAGE_TYPE_BULGARIAN":
            case 29:
                message.curLanguage = 29;
                break;
            case "enum_LANGUAGE_TYPE_ROMANIAN":
            case 30:
                message.curLanguage = 30;
                break;
            case "enum_LANGUAGE_TYPE_THAI":
            case 31:
                message.curLanguage = 31;
                break;
            case "enum_LANGUAGE_TYPE_HEBREW":
            case 32:
                message.curLanguage = 32;
                break;
            case "enum_LANGUAGE_TYPE_BRAZILIAN_PORTUGUESE":
            case 33:
                message.curLanguage = 33;
                break;
            case "enum_LANGUAGE_TYPE_INDONESIAN":
            case 34:
                message.curLanguage = 34;
                break;
            case "enum_LANGUAGE_TYPE_MALAYSIAN":
            case 35:
                message.curLanguage = 35;
                break;
            case "enum_LANGUAGE_TYPE_VIETNAMESE":
            case 36:
                message.curLanguage = 36;
                break;
            case "enum_LANGUAGE_TYPE_BURMESE":
            case 37:
                message.curLanguage = 37;
                break;
            case "enum_LANGUAGE_TYPE_MONGOLIAN":
            case 38:
                message.curLanguage = 38;
                break;
            case "enum_LANGUAGE_TYPE_ALL":
            case 100:
                message.curLanguage = 100;
                break;
            case "enum_LANGUAGE_TYPE_CUSTOM":
            case 254:
                message.curLanguage = 254;
                break;
            }
            if (object.supportedLanguage) {
                if (!Array.isArray(object.supportedLanguage))
                    throw TypeError(".config.language_msg.supportedLanguage: array expected");
                message.supportedLanguage = [];
                for (let i = 0; i < object.supportedLanguage.length; ++i)
                    switch (object.supportedLanguage[i]) {
                    default:
                        if (typeof object.supportedLanguage[i] === "number") {
                            message.supportedLanguage[i] = object.supportedLanguage[i];
                            break;
                        }
                    case "enum_LANGUAGE_TYPE_INVALID":
                    case 0:
                        message.supportedLanguage[i] = 0;
                        break;
                    case "enum_LANGUAGE_TYPE_ENGLISH":
                    case 1:
                        message.supportedLanguage[i] = 1;
                        break;
                    case "enum_LANGUAGE_TYPE_SPANISH":
                    case 2:
                        message.supportedLanguage[i] = 2;
                        break;
                    case "enum_LANGUAGE_TYPE_FRENCH":
                    case 3:
                        message.supportedLanguage[i] = 3;
                        break;
                    case "enum_LANGUAGE_TYPE_GERMAN":
                    case 4:
                        message.supportedLanguage[i] = 4;
                        break;
                    case "enum_LANGUAGE_TYPE_JAPANESE":
                    case 5:
                        message.supportedLanguage[i] = 5;
                        break;
                    case "enum_LANGUAGE_TYPE_ITALIAN":
                    case 6:
                        message.supportedLanguage[i] = 6;
                        break;
                    case "enum_LANGUAGE_TYPE_PORTUGUESE":
                    case 7:
                        message.supportedLanguage[i] = 7;
                        break;
                    case "enum_LANGUAGE_TYPE_KOREAN":
                    case 8:
                        message.supportedLanguage[i] = 8;
                        break;
                    case "enum_LANGUAGE_TYPE_CHINESE":
                    case 9:
                        message.supportedLanguage[i] = 9;
                        break;
                    case "enum_LANGUAGE_TYPE_TAIWANESE":
                    case 10:
                        message.supportedLanguage[i] = 10;
                        break;
                    case "enum_LANGUAGE_TYPE_POLISH":
                    case 11:
                        message.supportedLanguage[i] = 11;
                        break;
                    case "enum_LANGUAGE_TYPE_CROATIAN":
                    case 12:
                        message.supportedLanguage[i] = 12;
                        break;
                    case "enum_LANGUAGE_TYPE_CZECH":
                    case 13:
                        message.supportedLanguage[i] = 13;
                        break;
                    case "enum_LANGUAGE_TYPE_DANISH":
                    case 14:
                        message.supportedLanguage[i] = 14;
                        break;
                    case "enum_LANGUAGE_TYPE_DUTCH":
                    case 15:
                        message.supportedLanguage[i] = 15;
                        break;
                    case "enum_LANGUAGE_TYPE_FINNISH":
                    case 16:
                        message.supportedLanguage[i] = 16;
                        break;
                    case "enum_LANGUAGE_TYPE_GREEK":
                    case 17:
                        message.supportedLanguage[i] = 17;
                        break;
                    case "enum_LANGUAGE_TYPE_HUNGARIAN":
                    case 18:
                        message.supportedLanguage[i] = 18;
                        break;
                    case "enum_LANGUAGE_TYPE_NORWEGIAN":
                    case 19:
                        message.supportedLanguage[i] = 19;
                        break;
                    case "enum_LANGUAGE_TYPE_SLOVAKIAN":
                    case 20:
                        message.supportedLanguage[i] = 20;
                        break;
                    case "enum_LANGUAGE_TYPE_SLOVENIAN":
                    case 21:
                        message.supportedLanguage[i] = 21;
                        break;
                    case "enum_LANGUAGE_TYPE_SWEDISH":
                    case 22:
                        message.supportedLanguage[i] = 22;
                        break;
                    case "enum_LANGUAGE_TYPE_RUSSIAN":
                    case 23:
                        message.supportedLanguage[i] = 23;
                        break;
                    case "enum_LANGUAGE_TYPE_TURKISH":
                    case 24:
                        message.supportedLanguage[i] = 24;
                        break;
                    case "enum_LANGUAGE_TYPE_LATVIAN":
                    case 25:
                        message.supportedLanguage[i] = 25;
                        break;
                    case "enum_LANGUAGE_TYPE_UKRAINIAN":
                    case 26:
                        message.supportedLanguage[i] = 26;
                        break;
                    case "enum_LANGUAGE_TYPE_ARABIC":
                    case 27:
                        message.supportedLanguage[i] = 27;
                        break;
                    case "enum_LANGUAGE_TYPE_FARSI":
                    case 28:
                        message.supportedLanguage[i] = 28;
                        break;
                    case "enum_LANGUAGE_TYPE_BULGARIAN":
                    case 29:
                        message.supportedLanguage[i] = 29;
                        break;
                    case "enum_LANGUAGE_TYPE_ROMANIAN":
                    case 30:
                        message.supportedLanguage[i] = 30;
                        break;
                    case "enum_LANGUAGE_TYPE_THAI":
                    case 31:
                        message.supportedLanguage[i] = 31;
                        break;
                    case "enum_LANGUAGE_TYPE_HEBREW":
                    case 32:
                        message.supportedLanguage[i] = 32;
                        break;
                    case "enum_LANGUAGE_TYPE_BRAZILIAN_PORTUGUESE":
                    case 33:
                        message.supportedLanguage[i] = 33;
                        break;
                    case "enum_LANGUAGE_TYPE_INDONESIAN":
                    case 34:
                        message.supportedLanguage[i] = 34;
                        break;
                    case "enum_LANGUAGE_TYPE_MALAYSIAN":
                    case 35:
                        message.supportedLanguage[i] = 35;
                        break;
                    case "enum_LANGUAGE_TYPE_VIETNAMESE":
                    case 36:
                        message.supportedLanguage[i] = 36;
                        break;
                    case "enum_LANGUAGE_TYPE_BURMESE":
                    case 37:
                        message.supportedLanguage[i] = 37;
                        break;
                    case "enum_LANGUAGE_TYPE_MONGOLIAN":
                    case 38:
                        message.supportedLanguage[i] = 38;
                        break;
                    case "enum_LANGUAGE_TYPE_ALL":
                    case 100:
                        message.supportedLanguage[i] = 100;
                        break;
                    case "enum_LANGUAGE_TYPE_CUSTOM":
                    case 254:
                        message.supportedLanguage[i] = 254;
                        break;
                    }
            }
            return message;
        };

        /**
         * Creates a plain object from a language_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.language_msg
         * @static
         * @param {config.language_msg} message language_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        language_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.supportedLanguage = [];
            if (options.defaults)
                object.curLanguage = options.enums === String ? "enum_LANGUAGE_TYPE_INVALID" : 0;
            if (message.curLanguage != null && message.hasOwnProperty("curLanguage"))
                object.curLanguage = options.enums === String ? $root.config.LANGUAGE_TYPE[message.curLanguage] === undefined ? message.curLanguage : $root.config.LANGUAGE_TYPE[message.curLanguage] : message.curLanguage;
            if (message.supportedLanguage && message.supportedLanguage.length) {
                object.supportedLanguage = [];
                for (let j = 0; j < message.supportedLanguage.length; ++j)
                    object.supportedLanguage[j] = options.enums === String ? $root.config.LANGUAGE_TYPE[message.supportedLanguage[j]] === undefined ? message.supportedLanguage[j] : $root.config.LANGUAGE_TYPE[message.supportedLanguage[j]] : message.supportedLanguage[j];
            }
            return object;
        };

        /**
         * Converts this language_msg to JSON.
         * @function toJSON
         * @memberof config.language_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        language_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for language_msg
         * @function getTypeUrl
         * @memberof config.language_msg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        language_msg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.language_msg";
        };

        return language_msg;
    })();

    config.backlight_msg = (function() {

        /**
         * Properties of a backlight_msg.
         * @memberof config
         * @interface Ibacklight_msg
         * @property {number|null} [backlightNightOn] backlight_msg backlightNightOn
         * @property {number|null} [backlingTime] backlight_msg backlingTime
         * @property {number|null} [backlightAuto] backlight_msg backlightAuto
         * @property {number|null} [backlightDayPercent] backlight_msg backlightDayPercent
         * @property {number|null} [backlightNightPercent] backlight_msg backlightNightPercent
         */

        /**
         * Constructs a new backlight_msg.
         * @memberof config
         * @classdesc Represents a backlight_msg.
         * @implements Ibacklight_msg
         * @constructor
         * @param {config.Ibacklight_msg=} [properties] Properties to set
         */
        function backlight_msg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * backlight_msg backlightNightOn.
         * @member {number} backlightNightOn
         * @memberof config.backlight_msg
         * @instance
         */
        backlight_msg.prototype.backlightNightOn = 0;

        /**
         * backlight_msg backlingTime.
         * @member {number} backlingTime
         * @memberof config.backlight_msg
         * @instance
         */
        backlight_msg.prototype.backlingTime = 0;

        /**
         * backlight_msg backlightAuto.
         * @member {number} backlightAuto
         * @memberof config.backlight_msg
         * @instance
         */
        backlight_msg.prototype.backlightAuto = 0;

        /**
         * backlight_msg backlightDayPercent.
         * @member {number} backlightDayPercent
         * @memberof config.backlight_msg
         * @instance
         */
        backlight_msg.prototype.backlightDayPercent = 0;

        /**
         * backlight_msg backlightNightPercent.
         * @member {number} backlightNightPercent
         * @memberof config.backlight_msg
         * @instance
         */
        backlight_msg.prototype.backlightNightPercent = 0;

        /**
         * Creates a new backlight_msg instance using the specified properties.
         * @function create
         * @memberof config.backlight_msg
         * @static
         * @param {config.Ibacklight_msg=} [properties] Properties to set
         * @returns {config.backlight_msg} backlight_msg instance
         */
        backlight_msg.create = function create(properties) {
            return new backlight_msg(properties);
        };

        /**
         * Encodes the specified backlight_msg message. Does not implicitly {@link config.backlight_msg.verify|verify} messages.
         * @function encode
         * @memberof config.backlight_msg
         * @static
         * @param {config.Ibacklight_msg} message backlight_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        backlight_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.backlightNightOn != null && Object.hasOwnProperty.call(message, "backlightNightOn"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.backlightNightOn);
            if (message.backlingTime != null && Object.hasOwnProperty.call(message, "backlingTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.backlingTime);
            if (message.backlightAuto != null && Object.hasOwnProperty.call(message, "backlightAuto"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.backlightAuto);
            if (message.backlightDayPercent != null && Object.hasOwnProperty.call(message, "backlightDayPercent"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.backlightDayPercent);
            if (message.backlightNightPercent != null && Object.hasOwnProperty.call(message, "backlightNightPercent"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.backlightNightPercent);
            return writer;
        };

        /**
         * Encodes the specified backlight_msg message, length delimited. Does not implicitly {@link config.backlight_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.backlight_msg
         * @static
         * @param {config.Ibacklight_msg} message backlight_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        backlight_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a backlight_msg message from the specified reader or buffer.
         * @function decode
         * @memberof config.backlight_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.backlight_msg} backlight_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        backlight_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.backlight_msg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.backlightNightOn = reader.uint32();
                        break;
                    }
                case 2: {
                        message.backlingTime = reader.uint32();
                        break;
                    }
                case 3: {
                        message.backlightAuto = reader.uint32();
                        break;
                    }
                case 4: {
                        message.backlightDayPercent = reader.uint32();
                        break;
                    }
                case 5: {
                        message.backlightNightPercent = reader.uint32();
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
         * Decodes a backlight_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.backlight_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.backlight_msg} backlight_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        backlight_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a backlight_msg message.
         * @function verify
         * @memberof config.backlight_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        backlight_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.backlightNightOn != null && message.hasOwnProperty("backlightNightOn"))
                if (!$util.isInteger(message.backlightNightOn))
                    return "backlightNightOn: integer expected";
            if (message.backlingTime != null && message.hasOwnProperty("backlingTime"))
                if (!$util.isInteger(message.backlingTime))
                    return "backlingTime: integer expected";
            if (message.backlightAuto != null && message.hasOwnProperty("backlightAuto"))
                if (!$util.isInteger(message.backlightAuto))
                    return "backlightAuto: integer expected";
            if (message.backlightDayPercent != null && message.hasOwnProperty("backlightDayPercent"))
                if (!$util.isInteger(message.backlightDayPercent))
                    return "backlightDayPercent: integer expected";
            if (message.backlightNightPercent != null && message.hasOwnProperty("backlightNightPercent"))
                if (!$util.isInteger(message.backlightNightPercent))
                    return "backlightNightPercent: integer expected";
            return null;
        };

        /**
         * Creates a backlight_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.backlight_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.backlight_msg} backlight_msg
         */
        backlight_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.config.backlight_msg)
                return object;
            let message = new $root.config.backlight_msg();
            if (object.backlightNightOn != null)
                message.backlightNightOn = object.backlightNightOn >>> 0;
            if (object.backlingTime != null)
                message.backlingTime = object.backlingTime >>> 0;
            if (object.backlightAuto != null)
                message.backlightAuto = object.backlightAuto >>> 0;
            if (object.backlightDayPercent != null)
                message.backlightDayPercent = object.backlightDayPercent >>> 0;
            if (object.backlightNightPercent != null)
                message.backlightNightPercent = object.backlightNightPercent >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a backlight_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.backlight_msg
         * @static
         * @param {config.backlight_msg} message backlight_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        backlight_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.backlightNightOn = 0;
                object.backlingTime = 0;
                object.backlightAuto = 0;
                object.backlightDayPercent = 0;
                object.backlightNightPercent = 0;
            }
            if (message.backlightNightOn != null && message.hasOwnProperty("backlightNightOn"))
                object.backlightNightOn = message.backlightNightOn;
            if (message.backlingTime != null && message.hasOwnProperty("backlingTime"))
                object.backlingTime = message.backlingTime;
            if (message.backlightAuto != null && message.hasOwnProperty("backlightAuto"))
                object.backlightAuto = message.backlightAuto;
            if (message.backlightDayPercent != null && message.hasOwnProperty("backlightDayPercent"))
                object.backlightDayPercent = message.backlightDayPercent;
            if (message.backlightNightPercent != null && message.hasOwnProperty("backlightNightPercent"))
                object.backlightNightPercent = message.backlightNightPercent;
            return object;
        };

        /**
         * Converts this backlight_msg to JSON.
         * @function toJSON
         * @memberof config.backlight_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        backlight_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for backlight_msg
         * @function getTypeUrl
         * @memberof config.backlight_msg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        backlight_msg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.backlight_msg";
        };

        return backlight_msg;
    })();

    /**
     * DATA_TYPE enum.
     * @name config.DATA_TYPE
     * @enum {number}
     * @property {number} enum_DATA_TYPE_INVALID=0 enum_DATA_TYPE_INVALID value
     * @property {number} enum_DATA_TYPE_PWR_WITH_ZERO=1 enum_DATA_TYPE_PWR_WITH_ZERO value
     * @property {number} enum_DATA_TYPE_CAD_WITH_ZERO=2 enum_DATA_TYPE_CAD_WITH_ZERO value
     */
    config.DATA_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_DATA_TYPE_INVALID"] = 0;
        values[valuesById[1] = "enum_DATA_TYPE_PWR_WITH_ZERO"] = 1;
        values[valuesById[2] = "enum_DATA_TYPE_CAD_WITH_ZERO"] = 2;
        return values;
    })();

    config.data_msg = (function() {

        /**
         * Properties of a data_msg.
         * @memberof config
         * @interface Idata_msg
         * @property {config.DATA_TYPE|null} [dataType] data_msg dataType
         * @property {number|null} [status] data_msg status
         */

        /**
         * Constructs a new data_msg.
         * @memberof config
         * @classdesc Represents a data_msg.
         * @implements Idata_msg
         * @constructor
         * @param {config.Idata_msg=} [properties] Properties to set
         */
        function data_msg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * data_msg dataType.
         * @member {config.DATA_TYPE} dataType
         * @memberof config.data_msg
         * @instance
         */
        data_msg.prototype.dataType = 0;

        /**
         * data_msg status.
         * @member {number} status
         * @memberof config.data_msg
         * @instance
         */
        data_msg.prototype.status = 0;

        /**
         * Creates a new data_msg instance using the specified properties.
         * @function create
         * @memberof config.data_msg
         * @static
         * @param {config.Idata_msg=} [properties] Properties to set
         * @returns {config.data_msg} data_msg instance
         */
        data_msg.create = function create(properties) {
            return new data_msg(properties);
        };

        /**
         * Encodes the specified data_msg message. Does not implicitly {@link config.data_msg.verify|verify} messages.
         * @function encode
         * @memberof config.data_msg
         * @static
         * @param {config.Idata_msg} message data_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        data_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dataType != null && Object.hasOwnProperty.call(message, "dataType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.dataType);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.status);
            return writer;
        };

        /**
         * Encodes the specified data_msg message, length delimited. Does not implicitly {@link config.data_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.data_msg
         * @static
         * @param {config.Idata_msg} message data_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        data_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a data_msg message from the specified reader or buffer.
         * @function decode
         * @memberof config.data_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.data_msg} data_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        data_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.data_msg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.dataType = reader.int32();
                        break;
                    }
                case 2: {
                        message.status = reader.uint32();
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
         * Decodes a data_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.data_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.data_msg} data_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        data_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a data_msg message.
         * @function verify
         * @memberof config.data_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        data_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dataType != null && message.hasOwnProperty("dataType"))
                switch (message.dataType) {
                default:
                    return "dataType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        /**
         * Creates a data_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.data_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.data_msg} data_msg
         */
        data_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.config.data_msg)
                return object;
            let message = new $root.config.data_msg();
            switch (object.dataType) {
            default:
                if (typeof object.dataType === "number") {
                    message.dataType = object.dataType;
                    break;
                }
                break;
            case "enum_DATA_TYPE_INVALID":
            case 0:
                message.dataType = 0;
                break;
            case "enum_DATA_TYPE_PWR_WITH_ZERO":
            case 1:
                message.dataType = 1;
                break;
            case "enum_DATA_TYPE_CAD_WITH_ZERO":
            case 2:
                message.dataType = 2;
                break;
            }
            if (object.status != null)
                message.status = object.status >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a data_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.data_msg
         * @static
         * @param {config.data_msg} message data_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        data_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.dataType = options.enums === String ? "enum_DATA_TYPE_INVALID" : 0;
                object.status = 0;
            }
            if (message.dataType != null && message.hasOwnProperty("dataType"))
                object.dataType = options.enums === String ? $root.config.DATA_TYPE[message.dataType] === undefined ? message.dataType : $root.config.DATA_TYPE[message.dataType] : message.dataType;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this data_msg to JSON.
         * @function toJSON
         * @memberof config.data_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        data_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for data_msg
         * @function getTypeUrl
         * @memberof config.data_msg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        data_msg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.data_msg";
        };

        return data_msg;
    })();

    config.config_msg = (function() {

        /**
         * Properties of a config_msg.
         * @memberof config
         * @interface Iconfig_msg
         * @property {common.service_type_index} serviceType config_msg serviceType
         * @property {config.CONFIG_SERVICE_TYPE} configSeviceType config_msg configSeviceType
         * @property {config.CONFIG_OPERATE_TYPE} configOperateType config_msg configOperateType
         * @property {config.Iuser_data_msg|null} [userDataMessage] config_msg userDataMessage
         * @property {Array.<config.Ipage_msg>|null} [pageMessage] config_msg pageMessage
         * @property {Array.<config.Ibike_msg>|null} [bikeMessage] config_msg bikeMessage
         * @property {Array.<config.Iunit_msg>|null} [unitMessage] config_msg unitMessage
         * @property {config.Icur_page_status_msg|null} [pageStatusMessage] config_msg pageStatusMessage
         * @property {number|null} [altitude] config_msg altitude
         * @property {config.Ilanguage_msg|null} [languageMessage] config_msg languageMessage
         * @property {config.Ibacklight_msg|null} [backlightMessage] config_msg backlightMessage
         * @property {number|null} [curOperateMode] config_msg curOperateMode
         * @property {Array.<config.Imode_msg>|null} [modeMessage] config_msg modeMessage
         * @property {Array.<config.Ialarm_msg>|null} [alarmMessage] config_msg alarmMessage
         * @property {Array.<config.Ilap_msg>|null} [lapMessage] config_msg lapMessage
         * @property {Array.<config.Iauto_set_msg>|null} [autoSetMessage] config_msg autoSetMessage
         * @property {Array.<config.Ikey_set_msg>|null} [keySetMessage] config_msg keySetMessage
         * @property {Array.<config.Isound_set_msg>|null} [soundSetMessage] config_msg soundSetMessage
         * @property {Array.<config.Idata_msg>|null} [dataMessage] config_msg dataMessage
         */

        /**
         * Constructs a new config_msg.
         * @memberof config
         * @classdesc Represents a config_msg.
         * @implements Iconfig_msg
         * @constructor
         * @param {config.Iconfig_msg=} [properties] Properties to set
         */
        function config_msg(properties) {
            this.pageMessage = [];
            this.bikeMessage = [];
            this.unitMessage = [];
            this.modeMessage = [];
            this.alarmMessage = [];
            this.lapMessage = [];
            this.autoSetMessage = [];
            this.keySetMessage = [];
            this.soundSetMessage = [];
            this.dataMessage = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * config_msg serviceType.
         * @member {common.service_type_index} serviceType
         * @memberof config.config_msg
         * @instance
         */
        config_msg.prototype.serviceType = 12;

        /**
         * config_msg configSeviceType.
         * @member {config.CONFIG_SERVICE_TYPE} configSeviceType
         * @memberof config.config_msg
         * @instance
         */
        config_msg.prototype.configSeviceType = 0;

        /**
         * config_msg configOperateType.
         * @member {config.CONFIG_OPERATE_TYPE} configOperateType
         * @memberof config.config_msg
         * @instance
         */
        config_msg.prototype.configOperateType = 0;

        /**
         * config_msg userDataMessage.
         * @member {config.Iuser_data_msg|null|undefined} userDataMessage
         * @memberof config.config_msg
         * @instance
         */
        config_msg.prototype.userDataMessage = null;

        /**
         * config_msg pageMessage.
         * @member {Array.<config.Ipage_msg>} pageMessage
         * @memberof config.config_msg
         * @instance
         */
        config_msg.prototype.pageMessage = $util.emptyArray;

        /**
         * config_msg bikeMessage.
         * @member {Array.<config.Ibike_msg>} bikeMessage
         * @memberof config.config_msg
         * @instance
         */
        config_msg.prototype.bikeMessage = $util.emptyArray;

        /**
         * config_msg unitMessage.
         * @member {Array.<config.Iunit_msg>} unitMessage
         * @memberof config.config_msg
         * @instance
         */
        config_msg.prototype.unitMessage = $util.emptyArray;

        /**
         * config_msg pageStatusMessage.
         * @member {config.Icur_page_status_msg|null|undefined} pageStatusMessage
         * @memberof config.config_msg
         * @instance
         */
        config_msg.prototype.pageStatusMessage = null;

        /**
         * config_msg altitude.
         * @member {number} altitude
         * @memberof config.config_msg
         * @instance
         */
        config_msg.prototype.altitude = 0;

        /**
         * config_msg languageMessage.
         * @member {config.Ilanguage_msg|null|undefined} languageMessage
         * @memberof config.config_msg
         * @instance
         */
        config_msg.prototype.languageMessage = null;

        /**
         * config_msg backlightMessage.
         * @member {config.Ibacklight_msg|null|undefined} backlightMessage
         * @memberof config.config_msg
         * @instance
         */
        config_msg.prototype.backlightMessage = null;

        /**
         * config_msg curOperateMode.
         * @member {number} curOperateMode
         * @memberof config.config_msg
         * @instance
         */
        config_msg.prototype.curOperateMode = 0;

        /**
         * config_msg modeMessage.
         * @member {Array.<config.Imode_msg>} modeMessage
         * @memberof config.config_msg
         * @instance
         */
        config_msg.prototype.modeMessage = $util.emptyArray;

        /**
         * config_msg alarmMessage.
         * @member {Array.<config.Ialarm_msg>} alarmMessage
         * @memberof config.config_msg
         * @instance
         */
        config_msg.prototype.alarmMessage = $util.emptyArray;

        /**
         * config_msg lapMessage.
         * @member {Array.<config.Ilap_msg>} lapMessage
         * @memberof config.config_msg
         * @instance
         */
        config_msg.prototype.lapMessage = $util.emptyArray;

        /**
         * config_msg autoSetMessage.
         * @member {Array.<config.Iauto_set_msg>} autoSetMessage
         * @memberof config.config_msg
         * @instance
         */
        config_msg.prototype.autoSetMessage = $util.emptyArray;

        /**
         * config_msg keySetMessage.
         * @member {Array.<config.Ikey_set_msg>} keySetMessage
         * @memberof config.config_msg
         * @instance
         */
        config_msg.prototype.keySetMessage = $util.emptyArray;

        /**
         * config_msg soundSetMessage.
         * @member {Array.<config.Isound_set_msg>} soundSetMessage
         * @memberof config.config_msg
         * @instance
         */
        config_msg.prototype.soundSetMessage = $util.emptyArray;

        /**
         * config_msg dataMessage.
         * @member {Array.<config.Idata_msg>} dataMessage
         * @memberof config.config_msg
         * @instance
         */
        config_msg.prototype.dataMessage = $util.emptyArray;

        /**
         * Creates a new config_msg instance using the specified properties.
         * @function create
         * @memberof config.config_msg
         * @static
         * @param {config.Iconfig_msg=} [properties] Properties to set
         * @returns {config.config_msg} config_msg instance
         */
        config_msg.create = function create(properties) {
            return new config_msg(properties);
        };

        /**
         * Encodes the specified config_msg message. Does not implicitly {@link config.config_msg.verify|verify} messages.
         * @function encode
         * @memberof config.config_msg
         * @static
         * @param {config.Iconfig_msg} message config_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        config_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serviceType);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.configSeviceType);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.configOperateType);
            if (message.userDataMessage != null && Object.hasOwnProperty.call(message, "userDataMessage"))
                $root.config.user_data_msg.encode(message.userDataMessage, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.pageMessage != null && message.pageMessage.length)
                for (let i = 0; i < message.pageMessage.length; ++i)
                    $root.config.page_msg.encode(message.pageMessage[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.bikeMessage != null && message.bikeMessage.length)
                for (let i = 0; i < message.bikeMessage.length; ++i)
                    $root.config.bike_msg.encode(message.bikeMessage[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.unitMessage != null && message.unitMessage.length)
                for (let i = 0; i < message.unitMessage.length; ++i)
                    $root.config.unit_msg.encode(message.unitMessage[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.pageStatusMessage != null && Object.hasOwnProperty.call(message, "pageStatusMessage"))
                $root.config.cur_page_status_msg.encode(message.pageStatusMessage, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.altitude != null && Object.hasOwnProperty.call(message, "altitude"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.altitude);
            if (message.languageMessage != null && Object.hasOwnProperty.call(message, "languageMessage"))
                $root.config.language_msg.encode(message.languageMessage, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.backlightMessage != null && Object.hasOwnProperty.call(message, "backlightMessage"))
                $root.config.backlight_msg.encode(message.backlightMessage, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.curOperateMode != null && Object.hasOwnProperty.call(message, "curOperateMode"))
                writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.curOperateMode);
            if (message.modeMessage != null && message.modeMessage.length)
                for (let i = 0; i < message.modeMessage.length; ++i)
                    $root.config.mode_msg.encode(message.modeMessage[i], writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.alarmMessage != null && message.alarmMessage.length)
                for (let i = 0; i < message.alarmMessage.length; ++i)
                    $root.config.alarm_msg.encode(message.alarmMessage[i], writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.lapMessage != null && message.lapMessage.length)
                for (let i = 0; i < message.lapMessage.length; ++i)
                    $root.config.lap_msg.encode(message.lapMessage[i], writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.autoSetMessage != null && message.autoSetMessage.length)
                for (let i = 0; i < message.autoSetMessage.length; ++i)
                    $root.config.auto_set_msg.encode(message.autoSetMessage[i], writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            if (message.keySetMessage != null && message.keySetMessage.length)
                for (let i = 0; i < message.keySetMessage.length; ++i)
                    $root.config.key_set_msg.encode(message.keySetMessage[i], writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            if (message.soundSetMessage != null && message.soundSetMessage.length)
                for (let i = 0; i < message.soundSetMessage.length; ++i)
                    $root.config.sound_set_msg.encode(message.soundSetMessage[i], writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            if (message.dataMessage != null && message.dataMessage.length)
                for (let i = 0; i < message.dataMessage.length; ++i)
                    $root.config.data_msg.encode(message.dataMessage[i], writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified config_msg message, length delimited. Does not implicitly {@link config.config_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof config.config_msg
         * @static
         * @param {config.Iconfig_msg} message config_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        config_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a config_msg message from the specified reader or buffer.
         * @function decode
         * @memberof config.config_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {config.config_msg} config_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        config_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.config.config_msg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.serviceType = reader.int32();
                        break;
                    }
                case 2: {
                        message.configSeviceType = reader.int32();
                        break;
                    }
                case 3: {
                        message.configOperateType = reader.int32();
                        break;
                    }
                case 4: {
                        message.userDataMessage = $root.config.user_data_msg.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        if (!(message.pageMessage && message.pageMessage.length))
                            message.pageMessage = [];
                        message.pageMessage.push($root.config.page_msg.decode(reader, reader.uint32()));
                        break;
                    }
                case 6: {
                        if (!(message.bikeMessage && message.bikeMessage.length))
                            message.bikeMessage = [];
                        message.bikeMessage.push($root.config.bike_msg.decode(reader, reader.uint32()));
                        break;
                    }
                case 7: {
                        if (!(message.unitMessage && message.unitMessage.length))
                            message.unitMessage = [];
                        message.unitMessage.push($root.config.unit_msg.decode(reader, reader.uint32()));
                        break;
                    }
                case 8: {
                        message.pageStatusMessage = $root.config.cur_page_status_msg.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.altitude = reader.uint32();
                        break;
                    }
                case 12: {
                        message.languageMessage = $root.config.language_msg.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.backlightMessage = $root.config.backlight_msg.decode(reader, reader.uint32());
                        break;
                    }
                case 19: {
                        message.curOperateMode = reader.uint32();
                        break;
                    }
                case 20: {
                        if (!(message.modeMessage && message.modeMessage.length))
                            message.modeMessage = [];
                        message.modeMessage.push($root.config.mode_msg.decode(reader, reader.uint32()));
                        break;
                    }
                case 21: {
                        if (!(message.alarmMessage && message.alarmMessage.length))
                            message.alarmMessage = [];
                        message.alarmMessage.push($root.config.alarm_msg.decode(reader, reader.uint32()));
                        break;
                    }
                case 22: {
                        if (!(message.lapMessage && message.lapMessage.length))
                            message.lapMessage = [];
                        message.lapMessage.push($root.config.lap_msg.decode(reader, reader.uint32()));
                        break;
                    }
                case 23: {
                        if (!(message.autoSetMessage && message.autoSetMessage.length))
                            message.autoSetMessage = [];
                        message.autoSetMessage.push($root.config.auto_set_msg.decode(reader, reader.uint32()));
                        break;
                    }
                case 24: {
                        if (!(message.keySetMessage && message.keySetMessage.length))
                            message.keySetMessage = [];
                        message.keySetMessage.push($root.config.key_set_msg.decode(reader, reader.uint32()));
                        break;
                    }
                case 25: {
                        if (!(message.soundSetMessage && message.soundSetMessage.length))
                            message.soundSetMessage = [];
                        message.soundSetMessage.push($root.config.sound_set_msg.decode(reader, reader.uint32()));
                        break;
                    }
                case 26: {
                        if (!(message.dataMessage && message.dataMessage.length))
                            message.dataMessage = [];
                        message.dataMessage.push($root.config.data_msg.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("serviceType"))
                throw $util.ProtocolError("missing required 'serviceType'", { instance: message });
            if (!message.hasOwnProperty("configSeviceType"))
                throw $util.ProtocolError("missing required 'configSeviceType'", { instance: message });
            if (!message.hasOwnProperty("configOperateType"))
                throw $util.ProtocolError("missing required 'configOperateType'", { instance: message });
            return message;
        };

        /**
         * Decodes a config_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof config.config_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {config.config_msg} config_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        config_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a config_msg message.
         * @function verify
         * @memberof config.config_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        config_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.serviceType) {
            default:
                return "serviceType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
                break;
            }
            switch (message.configSeviceType) {
            default:
                return "configSeviceType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
                break;
            }
            switch (message.configOperateType) {
            default:
                return "configOperateType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                break;
            }
            if (message.userDataMessage != null && message.hasOwnProperty("userDataMessage")) {
                let error = $root.config.user_data_msg.verify(message.userDataMessage);
                if (error)
                    return "userDataMessage." + error;
            }
            if (message.pageMessage != null && message.hasOwnProperty("pageMessage")) {
                if (!Array.isArray(message.pageMessage))
                    return "pageMessage: array expected";
                for (let i = 0; i < message.pageMessage.length; ++i) {
                    let error = $root.config.page_msg.verify(message.pageMessage[i]);
                    if (error)
                        return "pageMessage." + error;
                }
            }
            if (message.bikeMessage != null && message.hasOwnProperty("bikeMessage")) {
                if (!Array.isArray(message.bikeMessage))
                    return "bikeMessage: array expected";
                for (let i = 0; i < message.bikeMessage.length; ++i) {
                    let error = $root.config.bike_msg.verify(message.bikeMessage[i]);
                    if (error)
                        return "bikeMessage." + error;
                }
            }
            if (message.unitMessage != null && message.hasOwnProperty("unitMessage")) {
                if (!Array.isArray(message.unitMessage))
                    return "unitMessage: array expected";
                for (let i = 0; i < message.unitMessage.length; ++i) {
                    let error = $root.config.unit_msg.verify(message.unitMessage[i]);
                    if (error)
                        return "unitMessage." + error;
                }
            }
            if (message.pageStatusMessage != null && message.hasOwnProperty("pageStatusMessage")) {
                let error = $root.config.cur_page_status_msg.verify(message.pageStatusMessage);
                if (error)
                    return "pageStatusMessage." + error;
            }
            if (message.altitude != null && message.hasOwnProperty("altitude"))
                if (!$util.isInteger(message.altitude))
                    return "altitude: integer expected";
            if (message.languageMessage != null && message.hasOwnProperty("languageMessage")) {
                let error = $root.config.language_msg.verify(message.languageMessage);
                if (error)
                    return "languageMessage." + error;
            }
            if (message.backlightMessage != null && message.hasOwnProperty("backlightMessage")) {
                let error = $root.config.backlight_msg.verify(message.backlightMessage);
                if (error)
                    return "backlightMessage." + error;
            }
            if (message.curOperateMode != null && message.hasOwnProperty("curOperateMode"))
                if (!$util.isInteger(message.curOperateMode))
                    return "curOperateMode: integer expected";
            if (message.modeMessage != null && message.hasOwnProperty("modeMessage")) {
                if (!Array.isArray(message.modeMessage))
                    return "modeMessage: array expected";
                for (let i = 0; i < message.modeMessage.length; ++i) {
                    let error = $root.config.mode_msg.verify(message.modeMessage[i]);
                    if (error)
                        return "modeMessage." + error;
                }
            }
            if (message.alarmMessage != null && message.hasOwnProperty("alarmMessage")) {
                if (!Array.isArray(message.alarmMessage))
                    return "alarmMessage: array expected";
                for (let i = 0; i < message.alarmMessage.length; ++i) {
                    let error = $root.config.alarm_msg.verify(message.alarmMessage[i]);
                    if (error)
                        return "alarmMessage." + error;
                }
            }
            if (message.lapMessage != null && message.hasOwnProperty("lapMessage")) {
                if (!Array.isArray(message.lapMessage))
                    return "lapMessage: array expected";
                for (let i = 0; i < message.lapMessage.length; ++i) {
                    let error = $root.config.lap_msg.verify(message.lapMessage[i]);
                    if (error)
                        return "lapMessage." + error;
                }
            }
            if (message.autoSetMessage != null && message.hasOwnProperty("autoSetMessage")) {
                if (!Array.isArray(message.autoSetMessage))
                    return "autoSetMessage: array expected";
                for (let i = 0; i < message.autoSetMessage.length; ++i) {
                    let error = $root.config.auto_set_msg.verify(message.autoSetMessage[i]);
                    if (error)
                        return "autoSetMessage." + error;
                }
            }
            if (message.keySetMessage != null && message.hasOwnProperty("keySetMessage")) {
                if (!Array.isArray(message.keySetMessage))
                    return "keySetMessage: array expected";
                for (let i = 0; i < message.keySetMessage.length; ++i) {
                    let error = $root.config.key_set_msg.verify(message.keySetMessage[i]);
                    if (error)
                        return "keySetMessage." + error;
                }
            }
            if (message.soundSetMessage != null && message.hasOwnProperty("soundSetMessage")) {
                if (!Array.isArray(message.soundSetMessage))
                    return "soundSetMessage: array expected";
                for (let i = 0; i < message.soundSetMessage.length; ++i) {
                    let error = $root.config.sound_set_msg.verify(message.soundSetMessage[i]);
                    if (error)
                        return "soundSetMessage." + error;
                }
            }
            if (message.dataMessage != null && message.hasOwnProperty("dataMessage")) {
                if (!Array.isArray(message.dataMessage))
                    return "dataMessage: array expected";
                for (let i = 0; i < message.dataMessage.length; ++i) {
                    let error = $root.config.data_msg.verify(message.dataMessage[i]);
                    if (error)
                        return "dataMessage." + error;
                }
            }
            return null;
        };

        /**
         * Creates a config_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof config.config_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {config.config_msg} config_msg
         */
        config_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.config.config_msg)
                return object;
            let message = new $root.config.config_msg();
            switch (object.serviceType) {
            case "enum_SERVICE_TYPE_INDEX_NONE":
            case 0:
                message.serviceType = 0;
                break;
            case "enum_SERVICE_TYPE_INDEX_INS":
            case 1:
                message.serviceType = 1;
                break;
            case "enum_SERVICE_TYPE_INDEX_MAP":
            case 2:
                message.serviceType = 2;
                break;
            case "enum_SERVICE_TYPE_INDEX_BACK":
            case 3:
                message.serviceType = 3;
                break;
            case "enum_SERVICE_TYPE_INDEX_FIRMWARE":
            case 4:
                message.serviceType = 4;
                break;
            case "enum_SERVICE_TYPE_INDEX_WIFI":
            case 5:
                message.serviceType = 5;
                break;
            case "enum_SERVICE_TYPE_INDEX_CYCLING_DATA":
            case 6:
                message.serviceType = 6;
                break;
            case "enum_SERVICE_TYPE_INDEX_ROUTE_PLAN":
            case 7:
                message.serviceType = 7;
                break;
            case "enum_SERVICE_TYPE_INDEX_REAL_TIME_TRACE":
            case 8:
                message.serviceType = 8;
                break;
            case "enum_SERVICE_TYPE_INDEX_USER_CONFIG":
            case 9:
                message.serviceType = 9;
                break;
            case "enum_SERVICE_TYPE_INDEX_BLE":
            case 10:
                message.serviceType = 10;
                break;
            case "enum_SERVICE_TYPE_INDEX_FACTORY":
            case 11:
                message.serviceType = 11;
                break;
            default:
                if (typeof object.serviceType === "number") {
                    message.serviceType = object.serviceType;
                    break;
                }
                break;
            case "enum_SERVICE_TYPE_INDEX_CONFIG":
            case 12:
                message.serviceType = 12;
                break;
            case "enum_SERVICE_TYPE_INDEX_DEV_STATUS":
            case 13:
                message.serviceType = 13;
                break;
            case "enum_SERVICE_TYPE_INDEX_SENSOR":
            case 14:
                message.serviceType = 14;
                break;
            case "enum_SERVICE_TYPE_INDEX_TRAINING":
            case 15:
                message.serviceType = 15;
                break;
            case "enum_SERVICE_TYPE_INDEX_TEAM_INFO":
            case 16:
                message.serviceType = 16;
                break;
            case "enum_SERVICE_TYPE_INDEX_DEV_VER_INFO":
            case 17:
                message.serviceType = 17;
                break;
            case "enum_SERVICE_TYPE_INDEX_LANGUAGE":
            case 18:
                message.serviceType = 18;
                break;
            case "enum_SERVICE_TYPE_INDEX_LOG":
            case 19:
                message.serviceType = 19;
                break;
            case "enum_SERVICE_TYPE_INDEX_THEME":
            case 20:
                message.serviceType = 20;
                break;
            case "enum_SERVICE_TYPE_INDEX_FILE_OPERATION":
            case 21:
                message.serviceType = 21;
                break;
            case "enum_SERVICE_TYPE_INDEX_MAP_NEW":
            case 22:
                message.serviceType = 22;
                break;
            case "enum_SERVICE_TYPE_INDEX_ROUTE_BOOK":
            case 23:
                message.serviceType = 23;
                break;
            case "enum_SERVICE_TYPE_INDEX_STAGE":
            case 24:
                message.serviceType = 24;
                break;
            case "enum_SERVICE_TYPE_INDEX_TRAINING_PLAN":
            case 25:
                message.serviceType = 25;
                break;
            case "enum_SERVICE_TYPE_INDEX_ALG_GOMORE":
            case 26:
                message.serviceType = 26;
                break;
            }
            switch (object.configSeviceType) {
            default:
                if (typeof object.configSeviceType === "number") {
                    message.configSeviceType = object.configSeviceType;
                    break;
                }
                break;
            case "enum_CONFIG_SERVICE_TYPE_NONE":
            case 0:
                message.configSeviceType = 0;
                break;
            case "enum_CONFIG_SERVICE_TYPE_USER":
            case 1:
                message.configSeviceType = 1;
                break;
            case "enum_CONFIG_SERVICE_TYPE_PAGE":
            case 2:
                message.configSeviceType = 2;
                break;
            case "enum_CONFIG_SERVICE_TYPE_BIKE":
            case 3:
                message.configSeviceType = 3;
                break;
            case "enum_CONFIG_SERVICE_TYPE_UNIT":
            case 4:
                message.configSeviceType = 4;
                break;
            case "enum_CONFIG_SERVICE_TYPE_LANG":
            case 5:
                message.configSeviceType = 5;
                break;
            case "enum_CONFIG_SERVICE_TYPE_KEY":
            case 6:
                message.configSeviceType = 6;
                break;
            case "enum_CONFIG_SERVICE_TYPE_WHEEL":
            case 7:
                message.configSeviceType = 7;
                break;
            case "enum_CONFIG_SERVICE_TYPE_GPS":
            case 16:
                message.configSeviceType = 16;
                break;
            case "enum_CONFIG_SERVICE_TYPE_SOUND":
            case 17:
                message.configSeviceType = 17;
                break;
            case "enum_CONFIG_SERVICE_TYPE_POWER":
            case 18:
                message.configSeviceType = 18;
                break;
            case "enum_CONFIG_SERVICE_TYPE_DIS_COLOR":
            case 19:
                message.configSeviceType = 19;
                break;
            case "enum_CONFIG_SERVICE_TYPE_BK":
            case 20:
                message.configSeviceType = 20;
                break;
            case "enum_CONFIG_SERVICE_TYPE_ALARM":
            case 48:
                message.configSeviceType = 48;
                break;
            case "enum_CONFIG_SERVICE_TYPE_LAP":
            case 49:
                message.configSeviceType = 49;
                break;
            case "enum_CONFIG_SERVICE_TYPE_AUTO":
            case 50:
                message.configSeviceType = 50;
                break;
            case "enum_CONFIG_SERVICE_TYPE_MODE":
            case 51:
                message.configSeviceType = 51;
                break;
            case "enum_CONFIG_SERVICE_TYPE_ALTITUDE":
            case 52:
                message.configSeviceType = 52;
                break;
            case "enum_CONFIG_SERVICE_TYPE_DATA":
            case 53:
                message.configSeviceType = 53;
                break;
            }
            switch (object.configOperateType) {
            default:
                if (typeof object.configOperateType === "number") {
                    message.configOperateType = object.configOperateType;
                    break;
                }
                break;
            case "enum_CONFIG_OPERATE_TYPE_NONE":
            case 0:
                message.configOperateType = 0;
                break;
            case "enum_CONFIG_OPERATE_TYPE_SET":
            case 1:
                message.configOperateType = 1;
                break;
            case "enum_CONFIG_OPERATE_TYPE_GET":
            case 2:
                message.configOperateType = 2;
                break;
            case "enum_CONFIG_OPERATE_TYPE_SEND":
            case 3:
                message.configOperateType = 3;
                break;
            case "enum_CONFIG_OPERATE_TYPE_ADD":
            case 4:
                message.configOperateType = 4;
                break;
            case "enum_CONFIG_OPERATE_TYPE_DEL":
            case 5:
                message.configOperateType = 5;
                break;
            case "enum_CONFIG_OPERATE_TYPE_GET_MODULE_INFO":
            case 6:
                message.configOperateType = 6;
                break;
            case "enum_CONFIG_OPERATE_TYPE_CTRL":
            case 7:
                message.configOperateType = 7;
                break;
            }
            if (object.userDataMessage != null) {
                if (typeof object.userDataMessage !== "object")
                    throw TypeError(".config.config_msg.userDataMessage: object expected");
                message.userDataMessage = $root.config.user_data_msg.fromObject(object.userDataMessage);
            }
            if (object.pageMessage) {
                if (!Array.isArray(object.pageMessage))
                    throw TypeError(".config.config_msg.pageMessage: array expected");
                message.pageMessage = [];
                for (let i = 0; i < object.pageMessage.length; ++i) {
                    if (typeof object.pageMessage[i] !== "object")
                        throw TypeError(".config.config_msg.pageMessage: object expected");
                    message.pageMessage[i] = $root.config.page_msg.fromObject(object.pageMessage[i]);
                }
            }
            if (object.bikeMessage) {
                if (!Array.isArray(object.bikeMessage))
                    throw TypeError(".config.config_msg.bikeMessage: array expected");
                message.bikeMessage = [];
                for (let i = 0; i < object.bikeMessage.length; ++i) {
                    if (typeof object.bikeMessage[i] !== "object")
                        throw TypeError(".config.config_msg.bikeMessage: object expected");
                    message.bikeMessage[i] = $root.config.bike_msg.fromObject(object.bikeMessage[i]);
                }
            }
            if (object.unitMessage) {
                if (!Array.isArray(object.unitMessage))
                    throw TypeError(".config.config_msg.unitMessage: array expected");
                message.unitMessage = [];
                for (let i = 0; i < object.unitMessage.length; ++i) {
                    if (typeof object.unitMessage[i] !== "object")
                        throw TypeError(".config.config_msg.unitMessage: object expected");
                    message.unitMessage[i] = $root.config.unit_msg.fromObject(object.unitMessage[i]);
                }
            }
            if (object.pageStatusMessage != null) {
                if (typeof object.pageStatusMessage !== "object")
                    throw TypeError(".config.config_msg.pageStatusMessage: object expected");
                message.pageStatusMessage = $root.config.cur_page_status_msg.fromObject(object.pageStatusMessage);
            }
            if (object.altitude != null)
                message.altitude = object.altitude >>> 0;
            if (object.languageMessage != null) {
                if (typeof object.languageMessage !== "object")
                    throw TypeError(".config.config_msg.languageMessage: object expected");
                message.languageMessage = $root.config.language_msg.fromObject(object.languageMessage);
            }
            if (object.backlightMessage != null) {
                if (typeof object.backlightMessage !== "object")
                    throw TypeError(".config.config_msg.backlightMessage: object expected");
                message.backlightMessage = $root.config.backlight_msg.fromObject(object.backlightMessage);
            }
            if (object.curOperateMode != null)
                message.curOperateMode = object.curOperateMode >>> 0;
            if (object.modeMessage) {
                if (!Array.isArray(object.modeMessage))
                    throw TypeError(".config.config_msg.modeMessage: array expected");
                message.modeMessage = [];
                for (let i = 0; i < object.modeMessage.length; ++i) {
                    if (typeof object.modeMessage[i] !== "object")
                        throw TypeError(".config.config_msg.modeMessage: object expected");
                    message.modeMessage[i] = $root.config.mode_msg.fromObject(object.modeMessage[i]);
                }
            }
            if (object.alarmMessage) {
                if (!Array.isArray(object.alarmMessage))
                    throw TypeError(".config.config_msg.alarmMessage: array expected");
                message.alarmMessage = [];
                for (let i = 0; i < object.alarmMessage.length; ++i) {
                    if (typeof object.alarmMessage[i] !== "object")
                        throw TypeError(".config.config_msg.alarmMessage: object expected");
                    message.alarmMessage[i] = $root.config.alarm_msg.fromObject(object.alarmMessage[i]);
                }
            }
            if (object.lapMessage) {
                if (!Array.isArray(object.lapMessage))
                    throw TypeError(".config.config_msg.lapMessage: array expected");
                message.lapMessage = [];
                for (let i = 0; i < object.lapMessage.length; ++i) {
                    if (typeof object.lapMessage[i] !== "object")
                        throw TypeError(".config.config_msg.lapMessage: object expected");
                    message.lapMessage[i] = $root.config.lap_msg.fromObject(object.lapMessage[i]);
                }
            }
            if (object.autoSetMessage) {
                if (!Array.isArray(object.autoSetMessage))
                    throw TypeError(".config.config_msg.autoSetMessage: array expected");
                message.autoSetMessage = [];
                for (let i = 0; i < object.autoSetMessage.length; ++i) {
                    if (typeof object.autoSetMessage[i] !== "object")
                        throw TypeError(".config.config_msg.autoSetMessage: object expected");
                    message.autoSetMessage[i] = $root.config.auto_set_msg.fromObject(object.autoSetMessage[i]);
                }
            }
            if (object.keySetMessage) {
                if (!Array.isArray(object.keySetMessage))
                    throw TypeError(".config.config_msg.keySetMessage: array expected");
                message.keySetMessage = [];
                for (let i = 0; i < object.keySetMessage.length; ++i) {
                    if (typeof object.keySetMessage[i] !== "object")
                        throw TypeError(".config.config_msg.keySetMessage: object expected");
                    message.keySetMessage[i] = $root.config.key_set_msg.fromObject(object.keySetMessage[i]);
                }
            }
            if (object.soundSetMessage) {
                if (!Array.isArray(object.soundSetMessage))
                    throw TypeError(".config.config_msg.soundSetMessage: array expected");
                message.soundSetMessage = [];
                for (let i = 0; i < object.soundSetMessage.length; ++i) {
                    if (typeof object.soundSetMessage[i] !== "object")
                        throw TypeError(".config.config_msg.soundSetMessage: object expected");
                    message.soundSetMessage[i] = $root.config.sound_set_msg.fromObject(object.soundSetMessage[i]);
                }
            }
            if (object.dataMessage) {
                if (!Array.isArray(object.dataMessage))
                    throw TypeError(".config.config_msg.dataMessage: array expected");
                message.dataMessage = [];
                for (let i = 0; i < object.dataMessage.length; ++i) {
                    if (typeof object.dataMessage[i] !== "object")
                        throw TypeError(".config.config_msg.dataMessage: object expected");
                    message.dataMessage[i] = $root.config.data_msg.fromObject(object.dataMessage[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a config_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof config.config_msg
         * @static
         * @param {config.config_msg} message config_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        config_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.pageMessage = [];
                object.bikeMessage = [];
                object.unitMessage = [];
                object.modeMessage = [];
                object.alarmMessage = [];
                object.lapMessage = [];
                object.autoSetMessage = [];
                object.keySetMessage = [];
                object.soundSetMessage = [];
                object.dataMessage = [];
            }
            if (options.defaults) {
                object.serviceType = options.enums === String ? "enum_SERVICE_TYPE_INDEX_CONFIG" : 12;
                object.configSeviceType = options.enums === String ? "enum_CONFIG_SERVICE_TYPE_NONE" : 0;
                object.configOperateType = options.enums === String ? "enum_CONFIG_OPERATE_TYPE_NONE" : 0;
                object.userDataMessage = null;
                object.pageStatusMessage = null;
                object.altitude = 0;
                object.languageMessage = null;
                object.backlightMessage = null;
                object.curOperateMode = 0;
            }
            if (message.serviceType != null && message.hasOwnProperty("serviceType"))
                object.serviceType = options.enums === String ? $root.common.service_type_index[message.serviceType] === undefined ? message.serviceType : $root.common.service_type_index[message.serviceType] : message.serviceType;
            if (message.configSeviceType != null && message.hasOwnProperty("configSeviceType"))
                object.configSeviceType = options.enums === String ? $root.config.CONFIG_SERVICE_TYPE[message.configSeviceType] === undefined ? message.configSeviceType : $root.config.CONFIG_SERVICE_TYPE[message.configSeviceType] : message.configSeviceType;
            if (message.configOperateType != null && message.hasOwnProperty("configOperateType"))
                object.configOperateType = options.enums === String ? $root.config.CONFIG_OPERATE_TYPE[message.configOperateType] === undefined ? message.configOperateType : $root.config.CONFIG_OPERATE_TYPE[message.configOperateType] : message.configOperateType;
            if (message.userDataMessage != null && message.hasOwnProperty("userDataMessage"))
                object.userDataMessage = $root.config.user_data_msg.toObject(message.userDataMessage, options);
            if (message.pageMessage && message.pageMessage.length) {
                object.pageMessage = [];
                for (let j = 0; j < message.pageMessage.length; ++j)
                    object.pageMessage[j] = $root.config.page_msg.toObject(message.pageMessage[j], options);
            }
            if (message.bikeMessage && message.bikeMessage.length) {
                object.bikeMessage = [];
                for (let j = 0; j < message.bikeMessage.length; ++j)
                    object.bikeMessage[j] = $root.config.bike_msg.toObject(message.bikeMessage[j], options);
            }
            if (message.unitMessage && message.unitMessage.length) {
                object.unitMessage = [];
                for (let j = 0; j < message.unitMessage.length; ++j)
                    object.unitMessage[j] = $root.config.unit_msg.toObject(message.unitMessage[j], options);
            }
            if (message.pageStatusMessage != null && message.hasOwnProperty("pageStatusMessage"))
                object.pageStatusMessage = $root.config.cur_page_status_msg.toObject(message.pageStatusMessage, options);
            if (message.altitude != null && message.hasOwnProperty("altitude"))
                object.altitude = message.altitude;
            if (message.languageMessage != null && message.hasOwnProperty("languageMessage"))
                object.languageMessage = $root.config.language_msg.toObject(message.languageMessage, options);
            if (message.backlightMessage != null && message.hasOwnProperty("backlightMessage"))
                object.backlightMessage = $root.config.backlight_msg.toObject(message.backlightMessage, options);
            if (message.curOperateMode != null && message.hasOwnProperty("curOperateMode"))
                object.curOperateMode = message.curOperateMode;
            if (message.modeMessage && message.modeMessage.length) {
                object.modeMessage = [];
                for (let j = 0; j < message.modeMessage.length; ++j)
                    object.modeMessage[j] = $root.config.mode_msg.toObject(message.modeMessage[j], options);
            }
            if (message.alarmMessage && message.alarmMessage.length) {
                object.alarmMessage = [];
                for (let j = 0; j < message.alarmMessage.length; ++j)
                    object.alarmMessage[j] = $root.config.alarm_msg.toObject(message.alarmMessage[j], options);
            }
            if (message.lapMessage && message.lapMessage.length) {
                object.lapMessage = [];
                for (let j = 0; j < message.lapMessage.length; ++j)
                    object.lapMessage[j] = $root.config.lap_msg.toObject(message.lapMessage[j], options);
            }
            if (message.autoSetMessage && message.autoSetMessage.length) {
                object.autoSetMessage = [];
                for (let j = 0; j < message.autoSetMessage.length; ++j)
                    object.autoSetMessage[j] = $root.config.auto_set_msg.toObject(message.autoSetMessage[j], options);
            }
            if (message.keySetMessage && message.keySetMessage.length) {
                object.keySetMessage = [];
                for (let j = 0; j < message.keySetMessage.length; ++j)
                    object.keySetMessage[j] = $root.config.key_set_msg.toObject(message.keySetMessage[j], options);
            }
            if (message.soundSetMessage && message.soundSetMessage.length) {
                object.soundSetMessage = [];
                for (let j = 0; j < message.soundSetMessage.length; ++j)
                    object.soundSetMessage[j] = $root.config.sound_set_msg.toObject(message.soundSetMessage[j], options);
            }
            if (message.dataMessage && message.dataMessage.length) {
                object.dataMessage = [];
                for (let j = 0; j < message.dataMessage.length; ++j)
                    object.dataMessage[j] = $root.config.data_msg.toObject(message.dataMessage[j], options);
            }
            return object;
        };

        /**
         * Converts this config_msg to JSON.
         * @function toJSON
         * @memberof config.config_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        config_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for config_msg
         * @function getTypeUrl
         * @memberof config.config_msg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        config_msg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/config.config_msg";
        };

        return config_msg;
    })();

    return config;
})();

// export const common = $root.common = (() => {
//
//     /**
//      * Namespace common.
//      * @exports common
//      * @namespace
//      */
//     const common = {};
//
//     /**
//      * service_type_index enum.
//      * @name common.service_type_index
//      * @enum {number}
//      * @property {number} enum_SERVICE_TYPE_INDEX_NONE=0 enum_SERVICE_TYPE_INDEX_NONE value
//      * @property {number} enum_SERVICE_TYPE_INDEX_INS=1 enum_SERVICE_TYPE_INDEX_INS value
//      * @property {number} enum_SERVICE_TYPE_INDEX_MAP=2 enum_SERVICE_TYPE_INDEX_MAP value
//      * @property {number} enum_SERVICE_TYPE_INDEX_BACK=3 enum_SERVICE_TYPE_INDEX_BACK value
//      * @property {number} enum_SERVICE_TYPE_INDEX_FIRMWARE=4 enum_SERVICE_TYPE_INDEX_FIRMWARE value
//      * @property {number} enum_SERVICE_TYPE_INDEX_WIFI=5 enum_SERVICE_TYPE_INDEX_WIFI value
//      * @property {number} enum_SERVICE_TYPE_INDEX_CYCLING_DATA=6 enum_SERVICE_TYPE_INDEX_CYCLING_DATA value
//      * @property {number} enum_SERVICE_TYPE_INDEX_ROUTE_PLAN=7 enum_SERVICE_TYPE_INDEX_ROUTE_PLAN value
//      * @property {number} enum_SERVICE_TYPE_INDEX_REAL_TIME_TRACE=8 enum_SERVICE_TYPE_INDEX_REAL_TIME_TRACE value
//      * @property {number} enum_SERVICE_TYPE_INDEX_USER_CONFIG=9 enum_SERVICE_TYPE_INDEX_USER_CONFIG value
//      * @property {number} enum_SERVICE_TYPE_INDEX_BLE=10 enum_SERVICE_TYPE_INDEX_BLE value
//      * @property {number} enum_SERVICE_TYPE_INDEX_FACTORY=11 enum_SERVICE_TYPE_INDEX_FACTORY value
//      * @property {number} enum_SERVICE_TYPE_INDEX_CONFIG=12 enum_SERVICE_TYPE_INDEX_CONFIG value
//      * @property {number} enum_SERVICE_TYPE_INDEX_DEV_STATUS=13 enum_SERVICE_TYPE_INDEX_DEV_STATUS value
//      * @property {number} enum_SERVICE_TYPE_INDEX_SENSOR=14 enum_SERVICE_TYPE_INDEX_SENSOR value
//      * @property {number} enum_SERVICE_TYPE_INDEX_TRAINING=15 enum_SERVICE_TYPE_INDEX_TRAINING value
//      * @property {number} enum_SERVICE_TYPE_INDEX_TEAM_INFO=16 enum_SERVICE_TYPE_INDEX_TEAM_INFO value
//      * @property {number} enum_SERVICE_TYPE_INDEX_DEV_VER_INFO=17 enum_SERVICE_TYPE_INDEX_DEV_VER_INFO value
//      * @property {number} enum_SERVICE_TYPE_INDEX_LANGUAGE=18 enum_SERVICE_TYPE_INDEX_LANGUAGE value
//      * @property {number} enum_SERVICE_TYPE_INDEX_LOG=19 enum_SERVICE_TYPE_INDEX_LOG value
//      * @property {number} enum_SERVICE_TYPE_INDEX_THEME=20 enum_SERVICE_TYPE_INDEX_THEME value
//      * @property {number} enum_SERVICE_TYPE_INDEX_FILE_OPERATION=21 enum_SERVICE_TYPE_INDEX_FILE_OPERATION value
//      * @property {number} enum_SERVICE_TYPE_INDEX_MAP_NEW=22 enum_SERVICE_TYPE_INDEX_MAP_NEW value
//      * @property {number} enum_SERVICE_TYPE_INDEX_ROUTE_BOOK=23 enum_SERVICE_TYPE_INDEX_ROUTE_BOOK value
//      * @property {number} enum_SERVICE_TYPE_INDEX_STAGE=24 enum_SERVICE_TYPE_INDEX_STAGE value
//      * @property {number} enum_SERVICE_TYPE_INDEX_TRAINING_PLAN=25 enum_SERVICE_TYPE_INDEX_TRAINING_PLAN value
//      * @property {number} enum_SERVICE_TYPE_INDEX_ALG_GOMORE=26 enum_SERVICE_TYPE_INDEX_ALG_GOMORE value
//      */
//     common.service_type_index = (function() {
//         const valuesById = {}, values = Object.create(valuesById);
//         values[valuesById[0] = "enum_SERVICE_TYPE_INDEX_NONE"] = 0;
//         values[valuesById[1] = "enum_SERVICE_TYPE_INDEX_INS"] = 1;
//         values[valuesById[2] = "enum_SERVICE_TYPE_INDEX_MAP"] = 2;
//         values[valuesById[3] = "enum_SERVICE_TYPE_INDEX_BACK"] = 3;
//         values[valuesById[4] = "enum_SERVICE_TYPE_INDEX_FIRMWARE"] = 4;
//         values[valuesById[5] = "enum_SERVICE_TYPE_INDEX_WIFI"] = 5;
//         values[valuesById[6] = "enum_SERVICE_TYPE_INDEX_CYCLING_DATA"] = 6;
//         values[valuesById[7] = "enum_SERVICE_TYPE_INDEX_ROUTE_PLAN"] = 7;
//         values[valuesById[8] = "enum_SERVICE_TYPE_INDEX_REAL_TIME_TRACE"] = 8;
//         values[valuesById[9] = "enum_SERVICE_TYPE_INDEX_USER_CONFIG"] = 9;
//         values[valuesById[10] = "enum_SERVICE_TYPE_INDEX_BLE"] = 10;
//         values[valuesById[11] = "enum_SERVICE_TYPE_INDEX_FACTORY"] = 11;
//         values[valuesById[12] = "enum_SERVICE_TYPE_INDEX_CONFIG"] = 12;
//         values[valuesById[13] = "enum_SERVICE_TYPE_INDEX_DEV_STATUS"] = 13;
//         values[valuesById[14] = "enum_SERVICE_TYPE_INDEX_SENSOR"] = 14;
//         values[valuesById[15] = "enum_SERVICE_TYPE_INDEX_TRAINING"] = 15;
//         values[valuesById[16] = "enum_SERVICE_TYPE_INDEX_TEAM_INFO"] = 16;
//         values[valuesById[17] = "enum_SERVICE_TYPE_INDEX_DEV_VER_INFO"] = 17;
//         values[valuesById[18] = "enum_SERVICE_TYPE_INDEX_LANGUAGE"] = 18;
//         values[valuesById[19] = "enum_SERVICE_TYPE_INDEX_LOG"] = 19;
//         values[valuesById[20] = "enum_SERVICE_TYPE_INDEX_THEME"] = 20;
//         values[valuesById[21] = "enum_SERVICE_TYPE_INDEX_FILE_OPERATION"] = 21;
//         values[valuesById[22] = "enum_SERVICE_TYPE_INDEX_MAP_NEW"] = 22;
//         values[valuesById[23] = "enum_SERVICE_TYPE_INDEX_ROUTE_BOOK"] = 23;
//         values[valuesById[24] = "enum_SERVICE_TYPE_INDEX_STAGE"] = 24;
//         values[valuesById[25] = "enum_SERVICE_TYPE_INDEX_TRAINING_PLAN"] = 25;
//         values[valuesById[26] = "enum_SERVICE_TYPE_INDEX_ALG_GOMORE"] = 26;
//         return values;
//     })();
//
//     /**
//      * SERVICE_OPERATE_TYPE enum.
//      * @name common.SERVICE_OPERATE_TYPE
//      * @enum {number}
//      * @property {number} enum_SERVICE_OPERATE_TYPE_NONE=0 enum_SERVICE_OPERATE_TYPE_NONE value
//      * @property {number} enum_SERVICE_OPERATE_TYPE_SET=1 enum_SERVICE_OPERATE_TYPE_SET value
//      * @property {number} enum_SERVICE_OPERATE_TYPE_GET=2 enum_SERVICE_OPERATE_TYPE_GET value
//      * @property {number} enum_SERVICE_OPERATE_TYPE_ADD=3 enum_SERVICE_OPERATE_TYPE_ADD value
//      * @property {number} enum_SERVICE_OPERATE_TYPE_DEL=4 enum_SERVICE_OPERATE_TYPE_DEL value
//      */
//     common.SERVICE_OPERATE_TYPE = (function() {
//         const valuesById = {}, values = Object.create(valuesById);
//         values[valuesById[0] = "enum_SERVICE_OPERATE_TYPE_NONE"] = 0;
//         values[valuesById[1] = "enum_SERVICE_OPERATE_TYPE_SET"] = 1;
//         values[valuesById[2] = "enum_SERVICE_OPERATE_TYPE_GET"] = 2;
//         values[valuesById[3] = "enum_SERVICE_OPERATE_TYPE_ADD"] = 3;
//         values[valuesById[4] = "enum_SERVICE_OPERATE_TYPE_DEL"] = 4;
//         return values;
//     })();
//
//     common.file_list_get_message = (function() {
//
//         /**
//          * Properties of a file_list_get_message.
//          * @memberof common
//          * @interface Ifile_list_get_message
//          * @property {number|null} [fileNum] file_list_get_message fileNum
//          * @property {number|null} [fileListSupportNumMax] file_list_get_message fileListSupportNumMax
//          * @property {number|null} [fileIndexStart] file_list_get_message fileIndexStart
//          * @property {number|null} [fileIndexEnd] file_list_get_message fileIndexEnd
//          */
//
//         /**
//          * Constructs a new file_list_get_message.
//          * @memberof common
//          * @classdesc Represents a file_list_get_message.
//          * @implements Ifile_list_get_message
//          * @constructor
//          * @param {common.Ifile_list_get_message=} [properties] Properties to set
//          */
//         function file_list_get_message(properties) {
//             if (properties)
//                 for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
//                     if (properties[keys[i]] != null)
//                         this[keys[i]] = properties[keys[i]];
//         }
//
//         /**
//          * file_list_get_message fileNum.
//          * @member {number} fileNum
//          * @memberof common.file_list_get_message
//          * @instance
//          */
//         file_list_get_message.prototype.fileNum = 0;
//
//         /**
//          * file_list_get_message fileListSupportNumMax.
//          * @member {number} fileListSupportNumMax
//          * @memberof common.file_list_get_message
//          * @instance
//          */
//         file_list_get_message.prototype.fileListSupportNumMax = 0;
//
//         /**
//          * file_list_get_message fileIndexStart.
//          * @member {number} fileIndexStart
//          * @memberof common.file_list_get_message
//          * @instance
//          */
//         file_list_get_message.prototype.fileIndexStart = 0;
//
//         /**
//          * file_list_get_message fileIndexEnd.
//          * @member {number} fileIndexEnd
//          * @memberof common.file_list_get_message
//          * @instance
//          */
//         file_list_get_message.prototype.fileIndexEnd = 0;
//
//         /**
//          * Creates a new file_list_get_message instance using the specified properties.
//          * @function create
//          * @memberof common.file_list_get_message
//          * @static
//          * @param {common.Ifile_list_get_message=} [properties] Properties to set
//          * @returns {common.file_list_get_message} file_list_get_message instance
//          */
//         file_list_get_message.create = function create(properties) {
//             return new file_list_get_message(properties);
//         };
//
//         /**
//          * Encodes the specified file_list_get_message message. Does not implicitly {@link common.file_list_get_message.verify|verify} messages.
//          * @function encode
//          * @memberof common.file_list_get_message
//          * @static
//          * @param {common.Ifile_list_get_message} message file_list_get_message message or plain object to encode
//          * @param {$protobuf.Writer} [writer] Writer to encode to
//          * @returns {$protobuf.Writer} Writer
//          */
//         file_list_get_message.encode = function encode(message, writer) {
//             if (!writer)
//                 writer = $Writer.create();
//             if (message.fileNum != null && Object.hasOwnProperty.call(message, "fileNum"))
//                 writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.fileNum);
//             if (message.fileListSupportNumMax != null && Object.hasOwnProperty.call(message, "fileListSupportNumMax"))
//                 writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.fileListSupportNumMax);
//             if (message.fileIndexStart != null && Object.hasOwnProperty.call(message, "fileIndexStart"))
//                 writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.fileIndexStart);
//             if (message.fileIndexEnd != null && Object.hasOwnProperty.call(message, "fileIndexEnd"))
//                 writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.fileIndexEnd);
//             return writer;
//         };
//
//         /**
//          * Encodes the specified file_list_get_message message, length delimited. Does not implicitly {@link common.file_list_get_message.verify|verify} messages.
//          * @function encodeDelimited
//          * @memberof common.file_list_get_message
//          * @static
//          * @param {common.Ifile_list_get_message} message file_list_get_message message or plain object to encode
//          * @param {$protobuf.Writer} [writer] Writer to encode to
//          * @returns {$protobuf.Writer} Writer
//          */
//         file_list_get_message.encodeDelimited = function encodeDelimited(message, writer) {
//             return this.encode(message, writer).ldelim();
//         };
//
//         /**
//          * Decodes a file_list_get_message message from the specified reader or buffer.
//          * @function decode
//          * @memberof common.file_list_get_message
//          * @static
//          * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
//          * @param {number} [length] Message length if known beforehand
//          * @returns {common.file_list_get_message} file_list_get_message
//          * @throws {Error} If the payload is not a reader or valid buffer
//          * @throws {$protobuf.util.ProtocolError} If required fields are missing
//          */
//         file_list_get_message.decode = function decode(reader, length) {
//             if (!(reader instanceof $Reader))
//                 reader = $Reader.create(reader);
//             let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.file_list_get_message();
//             while (reader.pos < end) {
//                 let tag = reader.uint32();
//                 switch (tag >>> 3) {
//                 case 1: {
//                         message.fileNum = reader.uint32();
//                         break;
//                     }
//                 case 2: {
//                         message.fileListSupportNumMax = reader.uint32();
//                         break;
//                     }
//                 case 3: {
//                         message.fileIndexStart = reader.uint32();
//                         break;
//                     }
//                 case 4: {
//                         message.fileIndexEnd = reader.uint32();
//                         break;
//                     }
//                 default:
//                     reader.skipType(tag & 7);
//                     break;
//                 }
//             }
//             return message;
//         };
//
//         /**
//          * Decodes a file_list_get_message message from the specified reader or buffer, length delimited.
//          * @function decodeDelimited
//          * @memberof common.file_list_get_message
//          * @static
//          * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
//          * @returns {common.file_list_get_message} file_list_get_message
//          * @throws {Error} If the payload is not a reader or valid buffer
//          * @throws {$protobuf.util.ProtocolError} If required fields are missing
//          */
//         file_list_get_message.decodeDelimited = function decodeDelimited(reader) {
//             if (!(reader instanceof $Reader))
//                 reader = new $Reader(reader);
//             return this.decode(reader, reader.uint32());
//         };
//
//         /**
//          * Verifies a file_list_get_message message.
//          * @function verify
//          * @memberof common.file_list_get_message
//          * @static
//          * @param {Object.<string,*>} message Plain object to verify
//          * @returns {string|null} `null` if valid, otherwise the reason why it is not
//          */
//         file_list_get_message.verify = function verify(message) {
//             if (typeof message !== "object" || message === null)
//                 return "object expected";
//             if (message.fileNum != null && message.hasOwnProperty("fileNum"))
//                 if (!$util.isInteger(message.fileNum))
//                     return "fileNum: integer expected";
//             if (message.fileListSupportNumMax != null && message.hasOwnProperty("fileListSupportNumMax"))
//                 if (!$util.isInteger(message.fileListSupportNumMax))
//                     return "fileListSupportNumMax: integer expected";
//             if (message.fileIndexStart != null && message.hasOwnProperty("fileIndexStart"))
//                 if (!$util.isInteger(message.fileIndexStart))
//                     return "fileIndexStart: integer expected";
//             if (message.fileIndexEnd != null && message.hasOwnProperty("fileIndexEnd"))
//                 if (!$util.isInteger(message.fileIndexEnd))
//                     return "fileIndexEnd: integer expected";
//             return null;
//         };
//
//         /**
//          * Creates a file_list_get_message message from a plain object. Also converts values to their respective internal types.
//          * @function fromObject
//          * @memberof common.file_list_get_message
//          * @static
//          * @param {Object.<string,*>} object Plain object
//          * @returns {common.file_list_get_message} file_list_get_message
//          */
//         file_list_get_message.fromObject = function fromObject(object) {
//             if (object instanceof $root.common.file_list_get_message)
//                 return object;
//             let message = new $root.common.file_list_get_message();
//             if (object.fileNum != null)
//                 message.fileNum = object.fileNum >>> 0;
//             if (object.fileListSupportNumMax != null)
//                 message.fileListSupportNumMax = object.fileListSupportNumMax >>> 0;
//             if (object.fileIndexStart != null)
//                 message.fileIndexStart = object.fileIndexStart >>> 0;
//             if (object.fileIndexEnd != null)
//                 message.fileIndexEnd = object.fileIndexEnd >>> 0;
//             return message;
//         };
//
//         /**
//          * Creates a plain object from a file_list_get_message message. Also converts values to other types if specified.
//          * @function toObject
//          * @memberof common.file_list_get_message
//          * @static
//          * @param {common.file_list_get_message} message file_list_get_message
//          * @param {$protobuf.IConversionOptions} [options] Conversion options
//          * @returns {Object.<string,*>} Plain object
//          */
//         file_list_get_message.toObject = function toObject(message, options) {
//             if (!options)
//                 options = {};
//             let object = {};
//             if (options.defaults) {
//                 object.fileNum = 0;
//                 object.fileListSupportNumMax = 0;
//                 object.fileIndexStart = 0;
//                 object.fileIndexEnd = 0;
//             }
//             if (message.fileNum != null && message.hasOwnProperty("fileNum"))
//                 object.fileNum = message.fileNum;
//             if (message.fileListSupportNumMax != null && message.hasOwnProperty("fileListSupportNumMax"))
//                 object.fileListSupportNumMax = message.fileListSupportNumMax;
//             if (message.fileIndexStart != null && message.hasOwnProperty("fileIndexStart"))
//                 object.fileIndexStart = message.fileIndexStart;
//             if (message.fileIndexEnd != null && message.hasOwnProperty("fileIndexEnd"))
//                 object.fileIndexEnd = message.fileIndexEnd;
//             return object;
//         };
//
//         /**
//          * Converts this file_list_get_message to JSON.
//          * @function toJSON
//          * @memberof common.file_list_get_message
//          * @instance
//          * @returns {Object.<string,*>} JSON object
//          */
//         file_list_get_message.prototype.toJSON = function toJSON() {
//             return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
//         };
//
//         /**
//          * Gets the default type url for file_list_get_message
//          * @function getTypeUrl
//          * @memberof common.file_list_get_message
//          * @static
//          * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
//          * @returns {string} The default type url
//          */
//         file_list_get_message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
//             if (typeUrlPrefix === undefined) {
//                 typeUrlPrefix = "type.googleapis.com";
//             }
//             return typeUrlPrefix + "/common.file_list_get_message";
//         };
//
//         return file_list_get_message;
//     })();
//
//     return common;
// })();

export { $root as default };
