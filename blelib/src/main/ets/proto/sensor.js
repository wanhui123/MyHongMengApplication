/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "@ohos/protobufjs";
import Long from 'long';
$protobuf.util.Long=Long
$protobuf.configure()

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const sensor = $root.sensor = (() => {

    /**
     * Namespace sensor.
     * @exports sensor
     * @namespace
     */
    const sensor = {};

    /**
     * SENSOR_OPERATE_TYPE enum.
     * @name sensor.SENSOR_OPERATE_TYPE
     * @enum {number}
     * @property {number} enum_SENSOR_OPERATE_TYPE_NONE=0 enum_SENSOR_OPERATE_TYPE_NONE value
     * @property {number} enum_SENSOR_OPERATE_TYPE_GET=1 enum_SENSOR_OPERATE_TYPE_GET value
     * @property {number} enum_SENSOR_OPERATE_TYPE_SET=2 enum_SENSOR_OPERATE_TYPE_SET value
     * @property {number} enum_SENSOR_OPERATE_TYPE_DEL=3 enum_SENSOR_OPERATE_TYPE_DEL value
     * @property {number} enum_SENSOR_OPERATE_TYPE_CONNECT=4 enum_SENSOR_OPERATE_TYPE_CONNECT value
     * @property {number} enum_SENSOR_OPERATE_TYPE_SEND=5 enum_SENSOR_OPERATE_TYPE_SEND value
     * @property {number} enum_SENSOR_OPERATE_TYPE_EXIT=6 enum_SENSOR_OPERATE_TYPE_EXIT value
     * @property {number} enum_SENSOR_OPERATE_TYPE_POW_CALIB=7 enum_SENSOR_OPERATE_TYPE_POW_CALIB value
     * @property {number} enum_SENSOR_OPERATE_TYPE_SYNC=8 enum_SENSOR_OPERATE_TYPE_SYNC value
     * @property {number} enum_SENSOR_OPERATE_TYPE_QUERY=9 enum_SENSOR_OPERATE_TYPE_QUERY value
     */
    sensor.SENSOR_OPERATE_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_SENSOR_OPERATE_TYPE_NONE"] = 0;
        values[valuesById[1] = "enum_SENSOR_OPERATE_TYPE_GET"] = 1;
        values[valuesById[2] = "enum_SENSOR_OPERATE_TYPE_SET"] = 2;
        values[valuesById[3] = "enum_SENSOR_OPERATE_TYPE_DEL"] = 3;
        values[valuesById[4] = "enum_SENSOR_OPERATE_TYPE_CONNECT"] = 4;
        values[valuesById[5] = "enum_SENSOR_OPERATE_TYPE_SEND"] = 5;
        values[valuesById[6] = "enum_SENSOR_OPERATE_TYPE_EXIT"] = 6;
        values[valuesById[7] = "enum_SENSOR_OPERATE_TYPE_POW_CALIB"] = 7;
        values[valuesById[8] = "enum_SENSOR_OPERATE_TYPE_SYNC"] = 8;
        values[valuesById[9] = "enum_SENSOR_OPERATE_TYPE_QUERY"] = 9;
        return values;
    })();

    /**
     * SENSOR_TYPE enum.
     * @name sensor.SENSOR_TYPE
     * @enum {number}
     * @property {number} enum_SENSOR_TYPE_INVALID=0 enum_SENSOR_TYPE_INVALID value
     * @property {number} enum_SENSOR_TYPE_HRM=1 enum_SENSOR_TYPE_HRM value
     * @property {number} enum_SENSOR_TYPE_CBSC=2 enum_SENSOR_TYPE_CBSC value
     * @property {number} enum_SENSOR_TYPE_PEDAL_BPWR=3 enum_SENSOR_TYPE_PEDAL_BPWR value
     * @property {number} enum_SENSOR_TYPE_OTHER_BPWR=4 enum_SENSOR_TYPE_OTHER_BPWR value
     * @property {number} enum_SENSOR_TYPE_CAD=5 enum_SENSOR_TYPE_CAD value
     * @property {number} enum_SENSOR_TYPE_SPD=6 enum_SENSOR_TYPE_SPD value
     * @property {number} enum_SENSOR_TYPE_SHFT=7 enum_SENSOR_TYPE_SHFT value
     * @property {number} enum_SENSOR_TYPE_DI2=8 enum_SENSOR_TYPE_DI2 value
     * @property {number} enum_SENSOR_TYPE_FEC=9 enum_SENSOR_TYPE_FEC value
     * @property {number} enum_SENSOR_TYPE_LEV=10 enum_SENSOR_TYPE_LEV value
     * @property {number} enum_SENSOR_TYPE_RD=11 enum_SENSOR_TYPE_RD value
     * @property {number} enum_SENSOR_TYPE_RADAR=12 enum_SENSOR_TYPE_RADAR value
     * @property {number} enum_SENSOR_TYPE_LIGHT=13 enum_SENSOR_TYPE_LIGHT value
     */
    sensor.SENSOR_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_SENSOR_TYPE_INVALID"] = 0;
        values[valuesById[1] = "enum_SENSOR_TYPE_HRM"] = 1;
        values[valuesById[2] = "enum_SENSOR_TYPE_CBSC"] = 2;
        values[valuesById[3] = "enum_SENSOR_TYPE_PEDAL_BPWR"] = 3;
        values[valuesById[4] = "enum_SENSOR_TYPE_OTHER_BPWR"] = 4;
        values[valuesById[5] = "enum_SENSOR_TYPE_CAD"] = 5;
        values[valuesById[6] = "enum_SENSOR_TYPE_SPD"] = 6;
        values[valuesById[7] = "enum_SENSOR_TYPE_SHFT"] = 7;
        values[valuesById[8] = "enum_SENSOR_TYPE_DI2"] = 8;
        values[valuesById[9] = "enum_SENSOR_TYPE_FEC"] = 9;
        values[valuesById[10] = "enum_SENSOR_TYPE_LEV"] = 10;
        values[valuesById[11] = "enum_SENSOR_TYPE_RD"] = 11;
        values[valuesById[12] = "enum_SENSOR_TYPE_RADAR"] = 12;
        values[valuesById[13] = "enum_SENSOR_TYPE_LIGHT"] = 13;
        return values;
    })();

    /**
     * SENSOR_RADIO_TYPE enum.
     * @name sensor.SENSOR_RADIO_TYPE
     * @enum {number}
     * @property {number} enum_SENSOR_RADIO_TYPE_INVALID=0 enum_SENSOR_RADIO_TYPE_INVALID value
     * @property {number} enum_SENSOR_RADIO_TYPE_BLE=1 enum_SENSOR_RADIO_TYPE_BLE value
     * @property {number} enum_SENSOR_RADIO_TYPE_ANT=2 enum_SENSOR_RADIO_TYPE_ANT value
     */
    sensor.SENSOR_RADIO_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_SENSOR_RADIO_TYPE_INVALID"] = 0;
        values[valuesById[1] = "enum_SENSOR_RADIO_TYPE_BLE"] = 1;
        values[valuesById[2] = "enum_SENSOR_RADIO_TYPE_ANT"] = 2;
        return values;
    })();

    /**
     * SENSOR_STATUS_TYPE enum.
     * @name sensor.SENSOR_STATUS_TYPE
     * @enum {number}
     * @property {number} enum_SENSOR_STATUS_TYPE_SAVED=0 enum_SENSOR_STATUS_TYPE_SAVED value
     * @property {number} enum_SENSOR_STATUS_TYPE_CONNECTED=1 enum_SENSOR_STATUS_TYPE_CONNECTED value
     * @property {number} enum_SENSOR_STATUS_TYPE_NO_SAVED=2 enum_SENSOR_STATUS_TYPE_NO_SAVED value
     */
    sensor.SENSOR_STATUS_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_SENSOR_STATUS_TYPE_SAVED"] = 0;
        values[valuesById[1] = "enum_SENSOR_STATUS_TYPE_CONNECTED"] = 1;
        values[valuesById[2] = "enum_SENSOR_STATUS_TYPE_NO_SAVED"] = 2;
        return values;
    })();

    sensor.radar_sensor_set_message = (function() {

        /**
         * Properties of a radar_sensor_set_message.
         * @memberof sensor
         * @interface Iradar_sensor_set_message
         * @property {number|null} [alertBarSide] radar_sensor_set_message alertBarSide
         * @property {number|null} [alertSoundOpen] radar_sensor_set_message alertSoundOpen
         */

        /**
         * Constructs a new radar_sensor_set_message.
         * @memberof sensor
         * @classdesc Represents a radar_sensor_set_message.
         * @implements Iradar_sensor_set_message
         * @constructor
         * @param {sensor.Iradar_sensor_set_message=} [properties] Properties to set
         */
        function radar_sensor_set_message(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * radar_sensor_set_message alertBarSide.
         * @member {number} alertBarSide
         * @memberof sensor.radar_sensor_set_message
         * @instance
         */
        radar_sensor_set_message.prototype.alertBarSide = 0;

        /**
         * radar_sensor_set_message alertSoundOpen.
         * @member {number} alertSoundOpen
         * @memberof sensor.radar_sensor_set_message
         * @instance
         */
        radar_sensor_set_message.prototype.alertSoundOpen = 0;

        /**
         * Creates a new radar_sensor_set_message instance using the specified properties.
         * @function create
         * @memberof sensor.radar_sensor_set_message
         * @static
         * @param {sensor.Iradar_sensor_set_message=} [properties] Properties to set
         * @returns {sensor.radar_sensor_set_message} radar_sensor_set_message instance
         */
        radar_sensor_set_message.create = function create(properties) {
            return new radar_sensor_set_message(properties);
        };

        /**
         * Encodes the specified radar_sensor_set_message message. Does not implicitly {@link sensor.radar_sensor_set_message.verify|verify} messages.
         * @function encode
         * @memberof sensor.radar_sensor_set_message
         * @static
         * @param {sensor.Iradar_sensor_set_message} message radar_sensor_set_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        radar_sensor_set_message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.alertBarSide != null && Object.hasOwnProperty.call(message, "alertBarSide"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.alertBarSide);
            if (message.alertSoundOpen != null && Object.hasOwnProperty.call(message, "alertSoundOpen"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.alertSoundOpen);
            return writer;
        };

        /**
         * Encodes the specified radar_sensor_set_message message, length delimited. Does not implicitly {@link sensor.radar_sensor_set_message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sensor.radar_sensor_set_message
         * @static
         * @param {sensor.Iradar_sensor_set_message} message radar_sensor_set_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        radar_sensor_set_message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a radar_sensor_set_message message from the specified reader or buffer.
         * @function decode
         * @memberof sensor.radar_sensor_set_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sensor.radar_sensor_set_message} radar_sensor_set_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        radar_sensor_set_message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sensor.radar_sensor_set_message();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.alertBarSide = reader.uint32();
                        break;
                    }
                case 2: {
                        message.alertSoundOpen = reader.uint32();
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
         * Decodes a radar_sensor_set_message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sensor.radar_sensor_set_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sensor.radar_sensor_set_message} radar_sensor_set_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        radar_sensor_set_message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a radar_sensor_set_message message.
         * @function verify
         * @memberof sensor.radar_sensor_set_message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        radar_sensor_set_message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.alertBarSide != null && message.hasOwnProperty("alertBarSide"))
                if (!$util.isInteger(message.alertBarSide))
                    return "alertBarSide: integer expected";
            if (message.alertSoundOpen != null && message.hasOwnProperty("alertSoundOpen"))
                if (!$util.isInteger(message.alertSoundOpen))
                    return "alertSoundOpen: integer expected";
            return null;
        };

        /**
         * Creates a radar_sensor_set_message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sensor.radar_sensor_set_message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sensor.radar_sensor_set_message} radar_sensor_set_message
         */
        radar_sensor_set_message.fromObject = function fromObject(object) {
            if (object instanceof $root.sensor.radar_sensor_set_message)
                return object;
            let message = new $root.sensor.radar_sensor_set_message();
            if (object.alertBarSide != null)
                message.alertBarSide = object.alertBarSide >>> 0;
            if (object.alertSoundOpen != null)
                message.alertSoundOpen = object.alertSoundOpen >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a radar_sensor_set_message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sensor.radar_sensor_set_message
         * @static
         * @param {sensor.radar_sensor_set_message} message radar_sensor_set_message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        radar_sensor_set_message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.alertBarSide = 0;
                object.alertSoundOpen = 0;
            }
            if (message.alertBarSide != null && message.hasOwnProperty("alertBarSide"))
                object.alertBarSide = message.alertBarSide;
            if (message.alertSoundOpen != null && message.hasOwnProperty("alertSoundOpen"))
                object.alertSoundOpen = message.alertSoundOpen;
            return object;
        };

        /**
         * Converts this radar_sensor_set_message to JSON.
         * @function toJSON
         * @memberof sensor.radar_sensor_set_message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        radar_sensor_set_message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for radar_sensor_set_message
         * @function getTypeUrl
         * @memberof sensor.radar_sensor_set_message
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        radar_sensor_set_message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/sensor.radar_sensor_set_message";
        };

        return radar_sensor_set_message;
    })();

    /**
     * DI2_CHN_NUM enum.
     * @name sensor.DI2_CHN_NUM
     * @enum {number}
     * @property {number} enum_DI2_CHN_NUM_0=0 enum_DI2_CHN_NUM_0 value
     * @property {number} enum_DI2_CHN_NUM_1=1 enum_DI2_CHN_NUM_1 value
     * @property {number} enum_DI2_CHN_NUM_2=2 enum_DI2_CHN_NUM_2 value
     * @property {number} enum_DI2_CHN_NUM_3=3 enum_DI2_CHN_NUM_3 value
     */
    sensor.DI2_CHN_NUM = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_DI2_CHN_NUM_0"] = 0;
        values[valuesById[1] = "enum_DI2_CHN_NUM_1"] = 1;
        values[valuesById[2] = "enum_DI2_CHN_NUM_2"] = 2;
        values[valuesById[3] = "enum_DI2_CHN_NUM_3"] = 3;
        return values;
    })();

    /**
     * DI2_BUTTON_OP_TYPE enum.
     * @name sensor.DI2_BUTTON_OP_TYPE
     * @enum {number}
     * @property {number} enum_DI2_BUTTON_OP_TYPE_LONG=0 enum_DI2_BUTTON_OP_TYPE_LONG value
     * @property {number} enum_DI2_BUTTON_OP_TYPE_SINGLE=1 enum_DI2_BUTTON_OP_TYPE_SINGLE value
     * @property {number} enum_DI2_BUTTON_OP_TYPE_DOUBLE=2 enum_DI2_BUTTON_OP_TYPE_DOUBLE value
     */
    sensor.DI2_BUTTON_OP_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_DI2_BUTTON_OP_TYPE_LONG"] = 0;
        values[valuesById[1] = "enum_DI2_BUTTON_OP_TYPE_SINGLE"] = 1;
        values[valuesById[2] = "enum_DI2_BUTTON_OP_TYPE_DOUBLE"] = 2;
        return values;
    })();

    /**
     * DI2_FUNC_TYPE enum.
     * @name sensor.DI2_FUNC_TYPE
     * @enum {number}
     * @property {number} enum_DI2_FUNC_INVALID=0 enum_DI2_FUNC_INVALID value
     * @property {number} enum_DI2_FUNC_PAGE_UP=1 enum_DI2_FUNC_PAGE_UP value
     * @property {number} enum_DI2_FUNC_PAGE_DOWN=2 enum_DI2_FUNC_PAGE_DOWN value
     * @property {number} enum_DI2_FUNC_LAP=3 enum_DI2_FUNC_LAP value
     * @property {number} enum_DI2_FUNC_START_PAUSE=4 enum_DI2_FUNC_START_PAUSE value
     * @property {number} enum_DI2_FUNC_UNDEFINE=15 enum_DI2_FUNC_UNDEFINE value
     */
    sensor.DI2_FUNC_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_DI2_FUNC_INVALID"] = 0;
        values[valuesById[1] = "enum_DI2_FUNC_PAGE_UP"] = 1;
        values[valuesById[2] = "enum_DI2_FUNC_PAGE_DOWN"] = 2;
        values[valuesById[3] = "enum_DI2_FUNC_LAP"] = 3;
        values[valuesById[4] = "enum_DI2_FUNC_START_PAUSE"] = 4;
        values[valuesById[15] = "enum_DI2_FUNC_UNDEFINE"] = 15;
        return values;
    })();

    sensor.di2_sensor_set_message = (function() {

        /**
         * Properties of a di2_sensor_set_message.
         * @memberof sensor
         * @interface Idi2_sensor_set_message
         * @property {sensor.DI2_CHN_NUM|null} [num] di2_sensor_set_message num
         * @property {sensor.DI2_BUTTON_OP_TYPE|null} [buttonOpType] di2_sensor_set_message buttonOpType
         * @property {sensor.DI2_FUNC_TYPE|null} [func] di2_sensor_set_message func
         */

        /**
         * Constructs a new di2_sensor_set_message.
         * @memberof sensor
         * @classdesc Represents a di2_sensor_set_message.
         * @implements Idi2_sensor_set_message
         * @constructor
         * @param {sensor.Idi2_sensor_set_message=} [properties] Properties to set
         */
        function di2_sensor_set_message(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * di2_sensor_set_message num.
         * @member {sensor.DI2_CHN_NUM} num
         * @memberof sensor.di2_sensor_set_message
         * @instance
         */
        di2_sensor_set_message.prototype.num = 0;

        /**
         * di2_sensor_set_message buttonOpType.
         * @member {sensor.DI2_BUTTON_OP_TYPE} buttonOpType
         * @memberof sensor.di2_sensor_set_message
         * @instance
         */
        di2_sensor_set_message.prototype.buttonOpType = 0;

        /**
         * di2_sensor_set_message func.
         * @member {sensor.DI2_FUNC_TYPE} func
         * @memberof sensor.di2_sensor_set_message
         * @instance
         */
        di2_sensor_set_message.prototype.func = 0;

        /**
         * Creates a new di2_sensor_set_message instance using the specified properties.
         * @function create
         * @memberof sensor.di2_sensor_set_message
         * @static
         * @param {sensor.Idi2_sensor_set_message=} [properties] Properties to set
         * @returns {sensor.di2_sensor_set_message} di2_sensor_set_message instance
         */
        di2_sensor_set_message.create = function create(properties) {
            return new di2_sensor_set_message(properties);
        };

        /**
         * Encodes the specified di2_sensor_set_message message. Does not implicitly {@link sensor.di2_sensor_set_message.verify|verify} messages.
         * @function encode
         * @memberof sensor.di2_sensor_set_message
         * @static
         * @param {sensor.Idi2_sensor_set_message} message di2_sensor_set_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        di2_sensor_set_message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.num != null && Object.hasOwnProperty.call(message, "num"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.num);
            if (message.buttonOpType != null && Object.hasOwnProperty.call(message, "buttonOpType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.buttonOpType);
            if (message.func != null && Object.hasOwnProperty.call(message, "func"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.func);
            return writer;
        };

        /**
         * Encodes the specified di2_sensor_set_message message, length delimited. Does not implicitly {@link sensor.di2_sensor_set_message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sensor.di2_sensor_set_message
         * @static
         * @param {sensor.Idi2_sensor_set_message} message di2_sensor_set_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        di2_sensor_set_message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a di2_sensor_set_message message from the specified reader or buffer.
         * @function decode
         * @memberof sensor.di2_sensor_set_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sensor.di2_sensor_set_message} di2_sensor_set_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        di2_sensor_set_message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sensor.di2_sensor_set_message();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.num = reader.int32();
                        break;
                    }
                case 2: {
                        message.buttonOpType = reader.int32();
                        break;
                    }
                case 3: {
                        message.func = reader.int32();
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
         * Decodes a di2_sensor_set_message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sensor.di2_sensor_set_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sensor.di2_sensor_set_message} di2_sensor_set_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        di2_sensor_set_message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a di2_sensor_set_message message.
         * @function verify
         * @memberof sensor.di2_sensor_set_message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        di2_sensor_set_message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.num != null && message.hasOwnProperty("num"))
                switch (message.num) {
                default:
                    return "num: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.buttonOpType != null && message.hasOwnProperty("buttonOpType"))
                switch (message.buttonOpType) {
                default:
                    return "buttonOpType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.func != null && message.hasOwnProperty("func"))
                switch (message.func) {
                default:
                    return "func: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 15:
                    break;
                }
            return null;
        };

        /**
         * Creates a di2_sensor_set_message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sensor.di2_sensor_set_message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sensor.di2_sensor_set_message} di2_sensor_set_message
         */
        di2_sensor_set_message.fromObject = function fromObject(object) {
            if (object instanceof $root.sensor.di2_sensor_set_message)
                return object;
            let message = new $root.sensor.di2_sensor_set_message();
            switch (object.num) {
            default:
                if (typeof object.num === "number") {
                    message.num = object.num;
                    break;
                }
                break;
            case "enum_DI2_CHN_NUM_0":
            case 0:
                message.num = 0;
                break;
            case "enum_DI2_CHN_NUM_1":
            case 1:
                message.num = 1;
                break;
            case "enum_DI2_CHN_NUM_2":
            case 2:
                message.num = 2;
                break;
            case "enum_DI2_CHN_NUM_3":
            case 3:
                message.num = 3;
                break;
            }
            switch (object.buttonOpType) {
            default:
                if (typeof object.buttonOpType === "number") {
                    message.buttonOpType = object.buttonOpType;
                    break;
                }
                break;
            case "enum_DI2_BUTTON_OP_TYPE_LONG":
            case 0:
                message.buttonOpType = 0;
                break;
            case "enum_DI2_BUTTON_OP_TYPE_SINGLE":
            case 1:
                message.buttonOpType = 1;
                break;
            case "enum_DI2_BUTTON_OP_TYPE_DOUBLE":
            case 2:
                message.buttonOpType = 2;
                break;
            }
            switch (object.func) {
            default:
                if (typeof object.func === "number") {
                    message.func = object.func;
                    break;
                }
                break;
            case "enum_DI2_FUNC_INVALID":
            case 0:
                message.func = 0;
                break;
            case "enum_DI2_FUNC_PAGE_UP":
            case 1:
                message.func = 1;
                break;
            case "enum_DI2_FUNC_PAGE_DOWN":
            case 2:
                message.func = 2;
                break;
            case "enum_DI2_FUNC_LAP":
            case 3:
                message.func = 3;
                break;
            case "enum_DI2_FUNC_START_PAUSE":
            case 4:
                message.func = 4;
                break;
            case "enum_DI2_FUNC_UNDEFINE":
            case 15:
                message.func = 15;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a di2_sensor_set_message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sensor.di2_sensor_set_message
         * @static
         * @param {sensor.di2_sensor_set_message} message di2_sensor_set_message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        di2_sensor_set_message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.num = options.enums === String ? "enum_DI2_CHN_NUM_0" : 0;
                object.buttonOpType = options.enums === String ? "enum_DI2_BUTTON_OP_TYPE_LONG" : 0;
                object.func = options.enums === String ? "enum_DI2_FUNC_INVALID" : 0;
            }
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = options.enums === String ? $root.sensor.DI2_CHN_NUM[message.num] === undefined ? message.num : $root.sensor.DI2_CHN_NUM[message.num] : message.num;
            if (message.buttonOpType != null && message.hasOwnProperty("buttonOpType"))
                object.buttonOpType = options.enums === String ? $root.sensor.DI2_BUTTON_OP_TYPE[message.buttonOpType] === undefined ? message.buttonOpType : $root.sensor.DI2_BUTTON_OP_TYPE[message.buttonOpType] : message.buttonOpType;
            if (message.func != null && message.hasOwnProperty("func"))
                object.func = options.enums === String ? $root.sensor.DI2_FUNC_TYPE[message.func] === undefined ? message.func : $root.sensor.DI2_FUNC_TYPE[message.func] : message.func;
            return object;
        };

        /**
         * Converts this di2_sensor_set_message to JSON.
         * @function toJSON
         * @memberof sensor.di2_sensor_set_message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        di2_sensor_set_message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for di2_sensor_set_message
         * @function getTypeUrl
         * @memberof sensor.di2_sensor_set_message
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        di2_sensor_set_message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/sensor.di2_sensor_set_message";
        };

        return di2_sensor_set_message;
    })();

    sensor.sensor_data_message = (function() {

        /**
         * Properties of a sensor_data_message.
         * @memberof sensor
         * @interface Isensor_data_message
         * @property {sensor.SENSOR_TYPE|null} [sensorType] sensor_data_message sensorType
         * @property {sensor.SENSOR_RADIO_TYPE|null} [sensorRadioType] sensor_data_message sensorRadioType
         * @property {sensor.SENSOR_STATUS_TYPE|null} [sensorStatusType] sensor_data_message sensorStatusType
         * @property {string|null} [sensorKey] sensor_data_message sensorKey
         * @property {string|null} [sensorBleName] sensor_data_message sensorBleName
         * @property {number|null} [sensorRssi] sensor_data_message sensorRssi
         * @property {number|null} [sensorPwr] sensor_data_message sensorPwr
         * @property {number|null} [wheelSize] sensor_data_message wheelSize
         * @property {number|null} [crankLength] sensor_data_message crankLength
         * @property {number|null} [sensorForbidden] sensor_data_message sensorForbidden
         * @property {number|null} [autoWheelSize] sensor_data_message autoWheelSize
         * @property {sensor.Iradar_sensor_set_message|null} [radarSensorSetMsg] sensor_data_message radarSensorSetMsg
         * @property {Array.<sensor.Idi2_sensor_set_message>|null} [di2SensorSetMsg] sensor_data_message di2SensorSetMsg
         */

        /**
         * Constructs a new sensor_data_message.
         * @memberof sensor
         * @classdesc Represents a sensor_data_message.
         * @implements Isensor_data_message
         * @constructor
         * @param {sensor.Isensor_data_message=} [properties] Properties to set
         */
        function sensor_data_message(properties) {
            this.di2SensorSetMsg = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * sensor_data_message sensorType.
         * @member {sensor.SENSOR_TYPE} sensorType
         * @memberof sensor.sensor_data_message
         * @instance
         */
        sensor_data_message.prototype.sensorType = 0;

        /**
         * sensor_data_message sensorRadioType.
         * @member {sensor.SENSOR_RADIO_TYPE} sensorRadioType
         * @memberof sensor.sensor_data_message
         * @instance
         */
        sensor_data_message.prototype.sensorRadioType = 2;

        /**
         * sensor_data_message sensorStatusType.
         * @member {sensor.SENSOR_STATUS_TYPE} sensorStatusType
         * @memberof sensor.sensor_data_message
         * @instance
         */
        sensor_data_message.prototype.sensorStatusType = 0;

        /**
         * sensor_data_message sensorKey.
         * @member {string} sensorKey
         * @memberof sensor.sensor_data_message
         * @instance
         */
        sensor_data_message.prototype.sensorKey = "";

        /**
         * sensor_data_message sensorBleName.
         * @member {string} sensorBleName
         * @memberof sensor.sensor_data_message
         * @instance
         */
        sensor_data_message.prototype.sensorBleName = "";

        /**
         * sensor_data_message sensorRssi.
         * @member {number} sensorRssi
         * @memberof sensor.sensor_data_message
         * @instance
         */
        sensor_data_message.prototype.sensorRssi = 0;

        /**
         * sensor_data_message sensorPwr.
         * @member {number} sensorPwr
         * @memberof sensor.sensor_data_message
         * @instance
         */
        sensor_data_message.prototype.sensorPwr = 0;

        /**
         * sensor_data_message wheelSize.
         * @member {number} wheelSize
         * @memberof sensor.sensor_data_message
         * @instance
         */
        sensor_data_message.prototype.wheelSize = 0;

        /**
         * sensor_data_message crankLength.
         * @member {number} crankLength
         * @memberof sensor.sensor_data_message
         * @instance
         */
        sensor_data_message.prototype.crankLength = 0;

        /**
         * sensor_data_message sensorForbidden.
         * @member {number} sensorForbidden
         * @memberof sensor.sensor_data_message
         * @instance
         */
        sensor_data_message.prototype.sensorForbidden = 0;

        /**
         * sensor_data_message autoWheelSize.
         * @member {number} autoWheelSize
         * @memberof sensor.sensor_data_message
         * @instance
         */
        sensor_data_message.prototype.autoWheelSize = 0;

        /**
         * sensor_data_message radarSensorSetMsg.
         * @member {sensor.Iradar_sensor_set_message|null|undefined} radarSensorSetMsg
         * @memberof sensor.sensor_data_message
         * @instance
         */
        sensor_data_message.prototype.radarSensorSetMsg = null;

        /**
         * sensor_data_message di2SensorSetMsg.
         * @member {Array.<sensor.Idi2_sensor_set_message>} di2SensorSetMsg
         * @memberof sensor.sensor_data_message
         * @instance
         */
        sensor_data_message.prototype.di2SensorSetMsg = $util.emptyArray;

        /**
         * Creates a new sensor_data_message instance using the specified properties.
         * @function create
         * @memberof sensor.sensor_data_message
         * @static
         * @param {sensor.Isensor_data_message=} [properties] Properties to set
         * @returns {sensor.sensor_data_message} sensor_data_message instance
         */
        sensor_data_message.create = function create(properties) {
            return new sensor_data_message(properties);
        };

        /**
         * Encodes the specified sensor_data_message message. Does not implicitly {@link sensor.sensor_data_message.verify|verify} messages.
         * @function encode
         * @memberof sensor.sensor_data_message
         * @static
         * @param {sensor.Isensor_data_message} message sensor_data_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        sensor_data_message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sensorType != null && Object.hasOwnProperty.call(message, "sensorType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sensorType);
            if (message.sensorRadioType != null && Object.hasOwnProperty.call(message, "sensorRadioType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sensorRadioType);
            if (message.sensorStatusType != null && Object.hasOwnProperty.call(message, "sensorStatusType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sensorStatusType);
            if (message.sensorKey != null && Object.hasOwnProperty.call(message, "sensorKey"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.sensorKey);
            if (message.sensorBleName != null && Object.hasOwnProperty.call(message, "sensorBleName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.sensorBleName);
            if (message.sensorRssi != null && Object.hasOwnProperty.call(message, "sensorRssi"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.sensorRssi);
            if (message.sensorPwr != null && Object.hasOwnProperty.call(message, "sensorPwr"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.sensorPwr);
            if (message.wheelSize != null && Object.hasOwnProperty.call(message, "wheelSize"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.wheelSize);
            if (message.crankLength != null && Object.hasOwnProperty.call(message, "crankLength"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.crankLength);
            if (message.sensorForbidden != null && Object.hasOwnProperty.call(message, "sensorForbidden"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.sensorForbidden);
            if (message.autoWheelSize != null && Object.hasOwnProperty.call(message, "autoWheelSize"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.autoWheelSize);
            if (message.radarSensorSetMsg != null && Object.hasOwnProperty.call(message, "radarSensorSetMsg"))
                $root.sensor.radar_sensor_set_message.encode(message.radarSensorSetMsg, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.di2SensorSetMsg != null && message.di2SensorSetMsg.length)
                for (let i = 0; i < message.di2SensorSetMsg.length; ++i)
                    $root.sensor.di2_sensor_set_message.encode(message.di2SensorSetMsg[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified sensor_data_message message, length delimited. Does not implicitly {@link sensor.sensor_data_message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sensor.sensor_data_message
         * @static
         * @param {sensor.Isensor_data_message} message sensor_data_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        sensor_data_message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a sensor_data_message message from the specified reader or buffer.
         * @function decode
         * @memberof sensor.sensor_data_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sensor.sensor_data_message} sensor_data_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        sensor_data_message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sensor.sensor_data_message();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.sensorType = reader.int32();
                        break;
                    }
                case 2: {
                        message.sensorRadioType = reader.int32();
                        break;
                    }
                case 3: {
                        message.sensorStatusType = reader.int32();
                        break;
                    }
                case 4: {
                        message.sensorKey = reader.string();
                        break;
                    }
                case 5: {
                        message.sensorBleName = reader.string();
                        break;
                    }
                case 6: {
                        message.sensorRssi = reader.int32();
                        break;
                    }
                case 7: {
                        message.sensorPwr = reader.uint32();
                        break;
                    }
                case 8: {
                        message.wheelSize = reader.uint32();
                        break;
                    }
                case 9: {
                        message.crankLength = reader.uint32();
                        break;
                    }
                case 10: {
                        message.sensorForbidden = reader.uint32();
                        break;
                    }
                case 11: {
                        message.autoWheelSize = reader.uint32();
                        break;
                    }
                case 12: {
                        message.radarSensorSetMsg = $root.sensor.radar_sensor_set_message.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        if (!(message.di2SensorSetMsg && message.di2SensorSetMsg.length))
                            message.di2SensorSetMsg = [];
                        message.di2SensorSetMsg.push($root.sensor.di2_sensor_set_message.decode(reader, reader.uint32()));
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
         * Decodes a sensor_data_message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sensor.sensor_data_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sensor.sensor_data_message} sensor_data_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        sensor_data_message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a sensor_data_message message.
         * @function verify
         * @memberof sensor.sensor_data_message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        sensor_data_message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sensorType != null && message.hasOwnProperty("sensorType"))
                switch (message.sensorType) {
                default:
                    return "sensorType: enum value expected";
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
            if (message.sensorRadioType != null && message.hasOwnProperty("sensorRadioType"))
                switch (message.sensorRadioType) {
                default:
                    return "sensorRadioType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.sensorStatusType != null && message.hasOwnProperty("sensorStatusType"))
                switch (message.sensorStatusType) {
                default:
                    return "sensorStatusType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.sensorKey != null && message.hasOwnProperty("sensorKey"))
                if (!$util.isString(message.sensorKey))
                    return "sensorKey: string expected";
            if (message.sensorBleName != null && message.hasOwnProperty("sensorBleName"))
                if (!$util.isString(message.sensorBleName))
                    return "sensorBleName: string expected";
            if (message.sensorRssi != null && message.hasOwnProperty("sensorRssi"))
                if (!$util.isInteger(message.sensorRssi))
                    return "sensorRssi: integer expected";
            if (message.sensorPwr != null && message.hasOwnProperty("sensorPwr"))
                if (!$util.isInteger(message.sensorPwr))
                    return "sensorPwr: integer expected";
            if (message.wheelSize != null && message.hasOwnProperty("wheelSize"))
                if (!$util.isInteger(message.wheelSize))
                    return "wheelSize: integer expected";
            if (message.crankLength != null && message.hasOwnProperty("crankLength"))
                if (!$util.isInteger(message.crankLength))
                    return "crankLength: integer expected";
            if (message.sensorForbidden != null && message.hasOwnProperty("sensorForbidden"))
                if (!$util.isInteger(message.sensorForbidden))
                    return "sensorForbidden: integer expected";
            if (message.autoWheelSize != null && message.hasOwnProperty("autoWheelSize"))
                if (!$util.isInteger(message.autoWheelSize))
                    return "autoWheelSize: integer expected";
            if (message.radarSensorSetMsg != null && message.hasOwnProperty("radarSensorSetMsg")) {
                let error = $root.sensor.radar_sensor_set_message.verify(message.radarSensorSetMsg);
                if (error)
                    return "radarSensorSetMsg." + error;
            }
            if (message.di2SensorSetMsg != null && message.hasOwnProperty("di2SensorSetMsg")) {
                if (!Array.isArray(message.di2SensorSetMsg))
                    return "di2SensorSetMsg: array expected";
                for (let i = 0; i < message.di2SensorSetMsg.length; ++i) {
                    let error = $root.sensor.di2_sensor_set_message.verify(message.di2SensorSetMsg[i]);
                    if (error)
                        return "di2SensorSetMsg." + error;
                }
            }
            return null;
        };

        /**
         * Creates a sensor_data_message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sensor.sensor_data_message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sensor.sensor_data_message} sensor_data_message
         */
        sensor_data_message.fromObject = function fromObject(object) {
            if (object instanceof $root.sensor.sensor_data_message)
                return object;
            let message = new $root.sensor.sensor_data_message();
            switch (object.sensorType) {
            default:
                if (typeof object.sensorType === "number") {
                    message.sensorType = object.sensorType;
                    break;
                }
                break;
            case "enum_SENSOR_TYPE_INVALID":
            case 0:
                message.sensorType = 0;
                break;
            case "enum_SENSOR_TYPE_HRM":
            case 1:
                message.sensorType = 1;
                break;
            case "enum_SENSOR_TYPE_CBSC":
            case 2:
                message.sensorType = 2;
                break;
            case "enum_SENSOR_TYPE_PEDAL_BPWR":
            case 3:
                message.sensorType = 3;
                break;
            case "enum_SENSOR_TYPE_OTHER_BPWR":
            case 4:
                message.sensorType = 4;
                break;
            case "enum_SENSOR_TYPE_CAD":
            case 5:
                message.sensorType = 5;
                break;
            case "enum_SENSOR_TYPE_SPD":
            case 6:
                message.sensorType = 6;
                break;
            case "enum_SENSOR_TYPE_SHFT":
            case 7:
                message.sensorType = 7;
                break;
            case "enum_SENSOR_TYPE_DI2":
            case 8:
                message.sensorType = 8;
                break;
            case "enum_SENSOR_TYPE_FEC":
            case 9:
                message.sensorType = 9;
                break;
            case "enum_SENSOR_TYPE_LEV":
            case 10:
                message.sensorType = 10;
                break;
            case "enum_SENSOR_TYPE_RD":
            case 11:
                message.sensorType = 11;
                break;
            case "enum_SENSOR_TYPE_RADAR":
            case 12:
                message.sensorType = 12;
                break;
            case "enum_SENSOR_TYPE_LIGHT":
            case 13:
                message.sensorType = 13;
                break;
            }
            switch (object.sensorRadioType) {
            case "enum_SENSOR_RADIO_TYPE_INVALID":
            case 0:
                message.sensorRadioType = 0;
                break;
            case "enum_SENSOR_RADIO_TYPE_BLE":
            case 1:
                message.sensorRadioType = 1;
                break;
            default:
                if (typeof object.sensorRadioType === "number") {
                    message.sensorRadioType = object.sensorRadioType;
                    break;
                }
                break;
            case "enum_SENSOR_RADIO_TYPE_ANT":
            case 2:
                message.sensorRadioType = 2;
                break;
            }
            switch (object.sensorStatusType) {
            default:
                if (typeof object.sensorStatusType === "number") {
                    message.sensorStatusType = object.sensorStatusType;
                    break;
                }
                break;
            case "enum_SENSOR_STATUS_TYPE_SAVED":
            case 0:
                message.sensorStatusType = 0;
                break;
            case "enum_SENSOR_STATUS_TYPE_CONNECTED":
            case 1:
                message.sensorStatusType = 1;
                break;
            case "enum_SENSOR_STATUS_TYPE_NO_SAVED":
            case 2:
                message.sensorStatusType = 2;
                break;
            }
            if (object.sensorKey != null)
                message.sensorKey = String(object.sensorKey);
            if (object.sensorBleName != null)
                message.sensorBleName = String(object.sensorBleName);
            if (object.sensorRssi != null)
                message.sensorRssi = object.sensorRssi | 0;
            if (object.sensorPwr != null)
                message.sensorPwr = object.sensorPwr >>> 0;
            if (object.wheelSize != null)
                message.wheelSize = object.wheelSize >>> 0;
            if (object.crankLength != null)
                message.crankLength = object.crankLength >>> 0;
            if (object.sensorForbidden != null)
                message.sensorForbidden = object.sensorForbidden >>> 0;
            if (object.autoWheelSize != null)
                message.autoWheelSize = object.autoWheelSize >>> 0;
            if (object.radarSensorSetMsg != null) {
                if (typeof object.radarSensorSetMsg !== "object")
                    throw TypeError(".sensor.sensor_data_message.radarSensorSetMsg: object expected");
                message.radarSensorSetMsg = $root.sensor.radar_sensor_set_message.fromObject(object.radarSensorSetMsg);
            }
            if (object.di2SensorSetMsg) {
                if (!Array.isArray(object.di2SensorSetMsg))
                    throw TypeError(".sensor.sensor_data_message.di2SensorSetMsg: array expected");
                message.di2SensorSetMsg = [];
                for (let i = 0; i < object.di2SensorSetMsg.length; ++i) {
                    if (typeof object.di2SensorSetMsg[i] !== "object")
                        throw TypeError(".sensor.sensor_data_message.di2SensorSetMsg: object expected");
                    message.di2SensorSetMsg[i] = $root.sensor.di2_sensor_set_message.fromObject(object.di2SensorSetMsg[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a sensor_data_message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sensor.sensor_data_message
         * @static
         * @param {sensor.sensor_data_message} message sensor_data_message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        sensor_data_message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.di2SensorSetMsg = [];
            if (options.defaults) {
                object.sensorType = options.enums === String ? "enum_SENSOR_TYPE_INVALID" : 0;
                object.sensorRadioType = options.enums === String ? "enum_SENSOR_RADIO_TYPE_ANT" : 2;
                object.sensorStatusType = options.enums === String ? "enum_SENSOR_STATUS_TYPE_SAVED" : 0;
                object.sensorKey = "";
                object.sensorBleName = "";
                object.sensorRssi = 0;
                object.sensorPwr = 0;
                object.wheelSize = 0;
                object.crankLength = 0;
                object.sensorForbidden = 0;
                object.autoWheelSize = 0;
                object.radarSensorSetMsg = null;
            }
            if (message.sensorType != null && message.hasOwnProperty("sensorType"))
                object.sensorType = options.enums === String ? $root.sensor.SENSOR_TYPE[message.sensorType] === undefined ? message.sensorType : $root.sensor.SENSOR_TYPE[message.sensorType] : message.sensorType;
            if (message.sensorRadioType != null && message.hasOwnProperty("sensorRadioType"))
                object.sensorRadioType = options.enums === String ? $root.sensor.SENSOR_RADIO_TYPE[message.sensorRadioType] === undefined ? message.sensorRadioType : $root.sensor.SENSOR_RADIO_TYPE[message.sensorRadioType] : message.sensorRadioType;
            if (message.sensorStatusType != null && message.hasOwnProperty("sensorStatusType"))
                object.sensorStatusType = options.enums === String ? $root.sensor.SENSOR_STATUS_TYPE[message.sensorStatusType] === undefined ? message.sensorStatusType : $root.sensor.SENSOR_STATUS_TYPE[message.sensorStatusType] : message.sensorStatusType;
            if (message.sensorKey != null && message.hasOwnProperty("sensorKey"))
                object.sensorKey = message.sensorKey;
            if (message.sensorBleName != null && message.hasOwnProperty("sensorBleName"))
                object.sensorBleName = message.sensorBleName;
            if (message.sensorRssi != null && message.hasOwnProperty("sensorRssi"))
                object.sensorRssi = message.sensorRssi;
            if (message.sensorPwr != null && message.hasOwnProperty("sensorPwr"))
                object.sensorPwr = message.sensorPwr;
            if (message.wheelSize != null && message.hasOwnProperty("wheelSize"))
                object.wheelSize = message.wheelSize;
            if (message.crankLength != null && message.hasOwnProperty("crankLength"))
                object.crankLength = message.crankLength;
            if (message.sensorForbidden != null && message.hasOwnProperty("sensorForbidden"))
                object.sensorForbidden = message.sensorForbidden;
            if (message.autoWheelSize != null && message.hasOwnProperty("autoWheelSize"))
                object.autoWheelSize = message.autoWheelSize;
            if (message.radarSensorSetMsg != null && message.hasOwnProperty("radarSensorSetMsg"))
                object.radarSensorSetMsg = $root.sensor.radar_sensor_set_message.toObject(message.radarSensorSetMsg, options);
            if (message.di2SensorSetMsg && message.di2SensorSetMsg.length) {
                object.di2SensorSetMsg = [];
                for (let j = 0; j < message.di2SensorSetMsg.length; ++j)
                    object.di2SensorSetMsg[j] = $root.sensor.di2_sensor_set_message.toObject(message.di2SensorSetMsg[j], options);
            }
            return object;
        };

        /**
         * Converts this sensor_data_message to JSON.
         * @function toJSON
         * @memberof sensor.sensor_data_message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        sensor_data_message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for sensor_data_message
         * @function getTypeUrl
         * @memberof sensor.sensor_data_message
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        sensor_data_message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/sensor.sensor_data_message";
        };

        return sensor_data_message;
    })();

    sensor.sensor_message = (function() {

        /**
         * Properties of a sensor_message.
         * @memberof sensor
         * @interface Isensor_message
         * @property {common.service_type_index} serviceType sensor_message serviceType
         * @property {sensor.SENSOR_OPERATE_TYPE} sensorOperateType sensor_message sensorOperateType
         * @property {Array.<sensor.Isensor_data_message>|null} [sensorDataMsg] sensor_message sensorDataMsg
         */

        /**
         * Constructs a new sensor_message.
         * @memberof sensor
         * @classdesc Represents a sensor_message.
         * @implements Isensor_message
         * @constructor
         * @param {sensor.Isensor_message=} [properties] Properties to set
         */
        function sensor_message(properties) {
            this.sensorDataMsg = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * sensor_message serviceType.
         * @member {common.service_type_index} serviceType
         * @memberof sensor.sensor_message
         * @instance
         */
        sensor_message.prototype.serviceType = 14;

        /**
         * sensor_message sensorOperateType.
         * @member {sensor.SENSOR_OPERATE_TYPE} sensorOperateType
         * @memberof sensor.sensor_message
         * @instance
         */
        sensor_message.prototype.sensorOperateType = 0;

        /**
         * sensor_message sensorDataMsg.
         * @member {Array.<sensor.Isensor_data_message>} sensorDataMsg
         * @memberof sensor.sensor_message
         * @instance
         */
        sensor_message.prototype.sensorDataMsg = $util.emptyArray;

        /**
         * Creates a new sensor_message instance using the specified properties.
         * @function create
         * @memberof sensor.sensor_message
         * @static
         * @param {sensor.Isensor_message=} [properties] Properties to set
         * @returns {sensor.sensor_message} sensor_message instance
         */
        sensor_message.create = function create(properties) {
            return new sensor_message(properties);
        };

        /**
         * Encodes the specified sensor_message message. Does not implicitly {@link sensor.sensor_message.verify|verify} messages.
         * @function encode
         * @memberof sensor.sensor_message
         * @static
         * @param {sensor.Isensor_message} message sensor_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        sensor_message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serviceType);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sensorOperateType);
            if (message.sensorDataMsg != null && message.sensorDataMsg.length)
                for (let i = 0; i < message.sensorDataMsg.length; ++i)
                    $root.sensor.sensor_data_message.encode(message.sensorDataMsg[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified sensor_message message, length delimited. Does not implicitly {@link sensor.sensor_message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sensor.sensor_message
         * @static
         * @param {sensor.Isensor_message} message sensor_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        sensor_message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a sensor_message message from the specified reader or buffer.
         * @function decode
         * @memberof sensor.sensor_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sensor.sensor_message} sensor_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        sensor_message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sensor.sensor_message();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.serviceType = reader.int32();
                        break;
                    }
                case 2: {
                        message.sensorOperateType = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.sensorDataMsg && message.sensorDataMsg.length))
                            message.sensorDataMsg = [];
                        message.sensorDataMsg.push($root.sensor.sensor_data_message.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("serviceType"))
                throw $util.ProtocolError("missing required 'serviceType'", { instance: message });
            if (!message.hasOwnProperty("sensorOperateType"))
                throw $util.ProtocolError("missing required 'sensorOperateType'", { instance: message });
            return message;
        };

        /**
         * Decodes a sensor_message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sensor.sensor_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sensor.sensor_message} sensor_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        sensor_message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a sensor_message message.
         * @function verify
         * @memberof sensor.sensor_message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        sensor_message.verify = function verify(message) {
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
            switch (message.sensorOperateType) {
            default:
                return "sensorOperateType: enum value expected";
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
            if (message.sensorDataMsg != null && message.hasOwnProperty("sensorDataMsg")) {
                if (!Array.isArray(message.sensorDataMsg))
                    return "sensorDataMsg: array expected";
                for (let i = 0; i < message.sensorDataMsg.length; ++i) {
                    let error = $root.sensor.sensor_data_message.verify(message.sensorDataMsg[i]);
                    if (error)
                        return "sensorDataMsg." + error;
                }
            }
            return null;
        };

        /**
         * Creates a sensor_message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sensor.sensor_message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sensor.sensor_message} sensor_message
         */
        sensor_message.fromObject = function fromObject(object) {
            if (object instanceof $root.sensor.sensor_message)
                return object;
            let message = new $root.sensor.sensor_message();
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
            case "enum_SERVICE_TYPE_INDEX_CONFIG":
            case 12:
                message.serviceType = 12;
                break;
            case "enum_SERVICE_TYPE_INDEX_DEV_STATUS":
            case 13:
                message.serviceType = 13;
                break;
            default:
                if (typeof object.serviceType === "number") {
                    message.serviceType = object.serviceType;
                    break;
                }
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
            switch (object.sensorOperateType) {
            default:
                if (typeof object.sensorOperateType === "number") {
                    message.sensorOperateType = object.sensorOperateType;
                    break;
                }
                break;
            case "enum_SENSOR_OPERATE_TYPE_NONE":
            case 0:
                message.sensorOperateType = 0;
                break;
            case "enum_SENSOR_OPERATE_TYPE_GET":
            case 1:
                message.sensorOperateType = 1;
                break;
            case "enum_SENSOR_OPERATE_TYPE_SET":
            case 2:
                message.sensorOperateType = 2;
                break;
            case "enum_SENSOR_OPERATE_TYPE_DEL":
            case 3:
                message.sensorOperateType = 3;
                break;
            case "enum_SENSOR_OPERATE_TYPE_CONNECT":
            case 4:
                message.sensorOperateType = 4;
                break;
            case "enum_SENSOR_OPERATE_TYPE_SEND":
            case 5:
                message.sensorOperateType = 5;
                break;
            case "enum_SENSOR_OPERATE_TYPE_EXIT":
            case 6:
                message.sensorOperateType = 6;
                break;
            case "enum_SENSOR_OPERATE_TYPE_POW_CALIB":
            case 7:
                message.sensorOperateType = 7;
                break;
            case "enum_SENSOR_OPERATE_TYPE_SYNC":
            case 8:
                message.sensorOperateType = 8;
                break;
            case "enum_SENSOR_OPERATE_TYPE_QUERY":
            case 9:
                message.sensorOperateType = 9;
                break;
            }
            if (object.sensorDataMsg) {
                if (!Array.isArray(object.sensorDataMsg))
                    throw TypeError(".sensor.sensor_message.sensorDataMsg: array expected");
                message.sensorDataMsg = [];
                for (let i = 0; i < object.sensorDataMsg.length; ++i) {
                    if (typeof object.sensorDataMsg[i] !== "object")
                        throw TypeError(".sensor.sensor_message.sensorDataMsg: object expected");
                    message.sensorDataMsg[i] = $root.sensor.sensor_data_message.fromObject(object.sensorDataMsg[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a sensor_message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sensor.sensor_message
         * @static
         * @param {sensor.sensor_message} message sensor_message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        sensor_message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.sensorDataMsg = [];
            if (options.defaults) {
                object.serviceType = options.enums === String ? "enum_SERVICE_TYPE_INDEX_SENSOR" : 14;
                object.sensorOperateType = options.enums === String ? "enum_SENSOR_OPERATE_TYPE_NONE" : 0;
            }
            if (message.serviceType != null && message.hasOwnProperty("serviceType"))
                object.serviceType = options.enums === String ? $root.common.service_type_index[message.serviceType] === undefined ? message.serviceType : $root.common.service_type_index[message.serviceType] : message.serviceType;
            if (message.sensorOperateType != null && message.hasOwnProperty("sensorOperateType"))
                object.sensorOperateType = options.enums === String ? $root.sensor.SENSOR_OPERATE_TYPE[message.sensorOperateType] === undefined ? message.sensorOperateType : $root.sensor.SENSOR_OPERATE_TYPE[message.sensorOperateType] : message.sensorOperateType;
            if (message.sensorDataMsg && message.sensorDataMsg.length) {
                object.sensorDataMsg = [];
                for (let j = 0; j < message.sensorDataMsg.length; ++j)
                    object.sensorDataMsg[j] = $root.sensor.sensor_data_message.toObject(message.sensorDataMsg[j], options);
            }
            return object;
        };

        /**
         * Converts this sensor_message to JSON.
         * @function toJSON
         * @memberof sensor.sensor_message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        sensor_message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for sensor_message
         * @function getTypeUrl
         * @memberof sensor.sensor_message
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        sensor_message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/sensor.sensor_message";
        };

        return sensor_message;
    })();

    return sensor;
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
