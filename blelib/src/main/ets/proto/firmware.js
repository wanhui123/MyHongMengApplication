/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "@ohos/protobufjs";
import Long from 'long';
$protobuf.util.Long=Long
$protobuf.configure()

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const firmware = $root.firmware = (() => {

    /**
     * Namespace firmware.
     * @exports firmware
     * @namespace
     */
    const firmware = {};

    /**
     * FIRMWARE_OPERATE_TYPE enum.
     * @name firmware.FIRMWARE_OPERATE_TYPE
     * @enum {number}
     * @property {number} enum_FIRMWARE_OPERATE_TYPE_NONE=0 enum_FIRMWARE_OPERATE_TYPE_NONE value
     * @property {number} enum_FIRMWARE_OPERATE_TYPE_GET_VERSION=1 enum_FIRMWARE_OPERATE_TYPE_GET_VERSION value
     * @property {number} enum_FIRMWARE_OPERATE_TYPE_SEND_VERSION=2 enum_FIRMWARE_OPERATE_TYPE_SEND_VERSION value
     * @property {number} enum_FIRMWARE_OPERATE_TYPE_MCU_UPDATE=3 enum_FIRMWARE_OPERATE_TYPE_MCU_UPDATE value
     * @property {number} enum_FIRMWARE_OPERATE_TYPE_PROGRESS=4 enum_FIRMWARE_OPERATE_TYPE_PROGRESS value
     * @property {number} enum_FIRMWARE_OPERATE_TYPE_BLE_UPDATE=5 enum_FIRMWARE_OPERATE_TYPE_BLE_UPDATE value
     */
    firmware.FIRMWARE_OPERATE_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_FIRMWARE_OPERATE_TYPE_NONE"] = 0;
        values[valuesById[1] = "enum_FIRMWARE_OPERATE_TYPE_GET_VERSION"] = 1;
        values[valuesById[2] = "enum_FIRMWARE_OPERATE_TYPE_SEND_VERSION"] = 2;
        values[valuesById[3] = "enum_FIRMWARE_OPERATE_TYPE_MCU_UPDATE"] = 3;
        values[valuesById[4] = "enum_FIRMWARE_OPERATE_TYPE_PROGRESS"] = 4;
        values[valuesById[5] = "enum_FIRMWARE_OPERATE_TYPE_BLE_UPDATE"] = 5;
        return values;
    })();

    firmware.firmware_data_message = (function() {

        /**
         * Properties of a firmware_data_message.
         * @memberof firmware
         * @interface Ifirmware_data_message
         * @property {number|null} [mcuFirmwareVer] firmware_data_message mcuFirmwareVer
         * @property {number|null} [bleFirmwareVer] firmware_data_message bleFirmwareVer
         * @property {number|null} [firmwareSize] firmware_data_message firmwareSize
         * @property {string|null} [url] firmware_data_message url
         * @property {number|null} [process] firmware_data_message process
         * @property {number|null} [bleBootFirmwareVer] firmware_data_message bleBootFirmwareVer
         */

        /**
         * Constructs a new firmware_data_message.
         * @memberof firmware
         * @classdesc Represents a firmware_data_message.
         * @implements Ifirmware_data_message
         * @constructor
         * @param {firmware.Ifirmware_data_message=} [properties] Properties to set
         */
        function firmware_data_message(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * firmware_data_message mcuFirmwareVer.
         * @member {number} mcuFirmwareVer
         * @memberof firmware.firmware_data_message
         * @instance
         */
        firmware_data_message.prototype.mcuFirmwareVer = 0;

        /**
         * firmware_data_message bleFirmwareVer.
         * @member {number} bleFirmwareVer
         * @memberof firmware.firmware_data_message
         * @instance
         */
        firmware_data_message.prototype.bleFirmwareVer = 0;

        /**
         * firmware_data_message firmwareSize.
         * @member {number} firmwareSize
         * @memberof firmware.firmware_data_message
         * @instance
         */
        firmware_data_message.prototype.firmwareSize = 0;

        /**
         * firmware_data_message url.
         * @member {string} url
         * @memberof firmware.firmware_data_message
         * @instance
         */
        firmware_data_message.prototype.url = "";

        /**
         * firmware_data_message process.
         * @member {number} process
         * @memberof firmware.firmware_data_message
         * @instance
         */
        firmware_data_message.prototype.process = 0;

        /**
         * firmware_data_message bleBootFirmwareVer.
         * @member {number} bleBootFirmwareVer
         * @memberof firmware.firmware_data_message
         * @instance
         */
        firmware_data_message.prototype.bleBootFirmwareVer = 0;

        /**
         * Creates a new firmware_data_message instance using the specified properties.
         * @function create
         * @memberof firmware.firmware_data_message
         * @static
         * @param {firmware.Ifirmware_data_message=} [properties] Properties to set
         * @returns {firmware.firmware_data_message} firmware_data_message instance
         */
        firmware_data_message.create = function create(properties) {
            return new firmware_data_message(properties);
        };

        /**
         * Encodes the specified firmware_data_message message. Does not implicitly {@link firmware.firmware_data_message.verify|verify} messages.
         * @function encode
         * @memberof firmware.firmware_data_message
         * @static
         * @param {firmware.Ifirmware_data_message} message firmware_data_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        firmware_data_message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mcuFirmwareVer != null && Object.hasOwnProperty.call(message, "mcuFirmwareVer"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.mcuFirmwareVer);
            if (message.bleFirmwareVer != null && Object.hasOwnProperty.call(message, "bleFirmwareVer"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.bleFirmwareVer);
            if (message.firmwareSize != null && Object.hasOwnProperty.call(message, "firmwareSize"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.firmwareSize);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.url);
            if (message.process != null && Object.hasOwnProperty.call(message, "process"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.process);
            if (message.bleBootFirmwareVer != null && Object.hasOwnProperty.call(message, "bleBootFirmwareVer"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.bleBootFirmwareVer);
            return writer;
        };

        /**
         * Encodes the specified firmware_data_message message, length delimited. Does not implicitly {@link firmware.firmware_data_message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof firmware.firmware_data_message
         * @static
         * @param {firmware.Ifirmware_data_message} message firmware_data_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        firmware_data_message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a firmware_data_message message from the specified reader or buffer.
         * @function decode
         * @memberof firmware.firmware_data_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {firmware.firmware_data_message} firmware_data_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        firmware_data_message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.firmware.firmware_data_message();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.mcuFirmwareVer = reader.uint32();
                        break;
                    }
                case 2: {
                        message.bleFirmwareVer = reader.uint32();
                        break;
                    }
                case 3: {
                        message.firmwareSize = reader.uint32();
                        break;
                    }
                case 4: {
                        message.url = reader.string();
                        break;
                    }
                case 5: {
                        message.process = reader.uint32();
                        break;
                    }
                case 6: {
                        message.bleBootFirmwareVer = reader.uint32();
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
         * Decodes a firmware_data_message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof firmware.firmware_data_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {firmware.firmware_data_message} firmware_data_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        firmware_data_message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a firmware_data_message message.
         * @function verify
         * @memberof firmware.firmware_data_message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        firmware_data_message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mcuFirmwareVer != null && message.hasOwnProperty("mcuFirmwareVer"))
                if (!$util.isInteger(message.mcuFirmwareVer))
                    return "mcuFirmwareVer: integer expected";
            if (message.bleFirmwareVer != null && message.hasOwnProperty("bleFirmwareVer"))
                if (!$util.isInteger(message.bleFirmwareVer))
                    return "bleFirmwareVer: integer expected";
            if (message.firmwareSize != null && message.hasOwnProperty("firmwareSize"))
                if (!$util.isInteger(message.firmwareSize))
                    return "firmwareSize: integer expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.process != null && message.hasOwnProperty("process"))
                if (!$util.isInteger(message.process))
                    return "process: integer expected";
            if (message.bleBootFirmwareVer != null && message.hasOwnProperty("bleBootFirmwareVer"))
                if (!$util.isInteger(message.bleBootFirmwareVer))
                    return "bleBootFirmwareVer: integer expected";
            return null;
        };

        /**
         * Creates a firmware_data_message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof firmware.firmware_data_message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {firmware.firmware_data_message} firmware_data_message
         */
        firmware_data_message.fromObject = function fromObject(object) {
            if (object instanceof $root.firmware.firmware_data_message)
                return object;
            let message = new $root.firmware.firmware_data_message();
            if (object.mcuFirmwareVer != null)
                message.mcuFirmwareVer = object.mcuFirmwareVer >>> 0;
            if (object.bleFirmwareVer != null)
                message.bleFirmwareVer = object.bleFirmwareVer >>> 0;
            if (object.firmwareSize != null)
                message.firmwareSize = object.firmwareSize >>> 0;
            if (object.url != null)
                message.url = String(object.url);
            if (object.process != null)
                message.process = object.process >>> 0;
            if (object.bleBootFirmwareVer != null)
                message.bleBootFirmwareVer = object.bleBootFirmwareVer >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a firmware_data_message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof firmware.firmware_data_message
         * @static
         * @param {firmware.firmware_data_message} message firmware_data_message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        firmware_data_message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.mcuFirmwareVer = 0;
                object.bleFirmwareVer = 0;
                object.firmwareSize = 0;
                object.url = "";
                object.process = 0;
                object.bleBootFirmwareVer = 0;
            }
            if (message.mcuFirmwareVer != null && message.hasOwnProperty("mcuFirmwareVer"))
                object.mcuFirmwareVer = message.mcuFirmwareVer;
            if (message.bleFirmwareVer != null && message.hasOwnProperty("bleFirmwareVer"))
                object.bleFirmwareVer = message.bleFirmwareVer;
            if (message.firmwareSize != null && message.hasOwnProperty("firmwareSize"))
                object.firmwareSize = message.firmwareSize;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.process != null && message.hasOwnProperty("process"))
                object.process = message.process;
            if (message.bleBootFirmwareVer != null && message.hasOwnProperty("bleBootFirmwareVer"))
                object.bleBootFirmwareVer = message.bleBootFirmwareVer;
            return object;
        };

        /**
         * Converts this firmware_data_message to JSON.
         * @function toJSON
         * @memberof firmware.firmware_data_message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        firmware_data_message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for firmware_data_message
         * @function getTypeUrl
         * @memberof firmware.firmware_data_message
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        firmware_data_message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/firmware.firmware_data_message";
        };

        return firmware_data_message;
    })();

    firmware.firmware_msg = (function() {

        /**
         * Properties of a firmware_msg.
         * @memberof firmware
         * @interface Ifirmware_msg
         * @property {common.service_type_index} serviceType firmware_msg serviceType
         * @property {firmware.FIRMWARE_OPERATE_TYPE} firmwareOperateType firmware_msg firmwareOperateType
         * @property {firmware.Ifirmware_data_message|null} [firmwareDataMsg] firmware_msg firmwareDataMsg
         */

        /**
         * Constructs a new firmware_msg.
         * @memberof firmware
         * @classdesc Represents a firmware_msg.
         * @implements Ifirmware_msg
         * @constructor
         * @param {firmware.Ifirmware_msg=} [properties] Properties to set
         */
        function firmware_msg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * firmware_msg serviceType.
         * @member {common.service_type_index} serviceType
         * @memberof firmware.firmware_msg
         * @instance
         */
        firmware_msg.prototype.serviceType = 4;

        /**
         * firmware_msg firmwareOperateType.
         * @member {firmware.FIRMWARE_OPERATE_TYPE} firmwareOperateType
         * @memberof firmware.firmware_msg
         * @instance
         */
        firmware_msg.prototype.firmwareOperateType = 0;

        /**
         * firmware_msg firmwareDataMsg.
         * @member {firmware.Ifirmware_data_message|null|undefined} firmwareDataMsg
         * @memberof firmware.firmware_msg
         * @instance
         */
        firmware_msg.prototype.firmwareDataMsg = null;

        /**
         * Creates a new firmware_msg instance using the specified properties.
         * @function create
         * @memberof firmware.firmware_msg
         * @static
         * @param {firmware.Ifirmware_msg=} [properties] Properties to set
         * @returns {firmware.firmware_msg} firmware_msg instance
         */
        firmware_msg.create = function create(properties) {
            return new firmware_msg(properties);
        };

        /**
         * Encodes the specified firmware_msg message. Does not implicitly {@link firmware.firmware_msg.verify|verify} messages.
         * @function encode
         * @memberof firmware.firmware_msg
         * @static
         * @param {firmware.Ifirmware_msg} message firmware_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        firmware_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serviceType);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.firmwareOperateType);
            if (message.firmwareDataMsg != null && Object.hasOwnProperty.call(message, "firmwareDataMsg"))
                $root.firmware.firmware_data_message.encode(message.firmwareDataMsg, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified firmware_msg message, length delimited. Does not implicitly {@link firmware.firmware_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof firmware.firmware_msg
         * @static
         * @param {firmware.Ifirmware_msg} message firmware_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        firmware_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a firmware_msg message from the specified reader or buffer.
         * @function decode
         * @memberof firmware.firmware_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {firmware.firmware_msg} firmware_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        firmware_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.firmware.firmware_msg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.serviceType = reader.int32();
                        break;
                    }
                case 2: {
                        message.firmwareOperateType = reader.int32();
                        break;
                    }
                case 3: {
                        message.firmwareDataMsg = $root.firmware.firmware_data_message.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("serviceType"))
                throw $util.ProtocolError("missing required 'serviceType'", { instance: message });
            if (!message.hasOwnProperty("firmwareOperateType"))
                throw $util.ProtocolError("missing required 'firmwareOperateType'", { instance: message });
            return message;
        };

        /**
         * Decodes a firmware_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof firmware.firmware_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {firmware.firmware_msg} firmware_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        firmware_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a firmware_msg message.
         * @function verify
         * @memberof firmware.firmware_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        firmware_msg.verify = function verify(message) {
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
            switch (message.firmwareOperateType) {
            default:
                return "firmwareOperateType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
            if (message.firmwareDataMsg != null && message.hasOwnProperty("firmwareDataMsg")) {
                let error = $root.firmware.firmware_data_message.verify(message.firmwareDataMsg);
                if (error)
                    return "firmwareDataMsg." + error;
            }
            return null;
        };

        /**
         * Creates a firmware_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof firmware.firmware_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {firmware.firmware_msg} firmware_msg
         */
        firmware_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.firmware.firmware_msg)
                return object;
            let message = new $root.firmware.firmware_msg();
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
            default:
                if (typeof object.serviceType === "number") {
                    message.serviceType = object.serviceType;
                    break;
                }
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
            switch (object.firmwareOperateType) {
            default:
                if (typeof object.firmwareOperateType === "number") {
                    message.firmwareOperateType = object.firmwareOperateType;
                    break;
                }
                break;
            case "enum_FIRMWARE_OPERATE_TYPE_NONE":
            case 0:
                message.firmwareOperateType = 0;
                break;
            case "enum_FIRMWARE_OPERATE_TYPE_GET_VERSION":
            case 1:
                message.firmwareOperateType = 1;
                break;
            case "enum_FIRMWARE_OPERATE_TYPE_SEND_VERSION":
            case 2:
                message.firmwareOperateType = 2;
                break;
            case "enum_FIRMWARE_OPERATE_TYPE_MCU_UPDATE":
            case 3:
                message.firmwareOperateType = 3;
                break;
            case "enum_FIRMWARE_OPERATE_TYPE_PROGRESS":
            case 4:
                message.firmwareOperateType = 4;
                break;
            case "enum_FIRMWARE_OPERATE_TYPE_BLE_UPDATE":
            case 5:
                message.firmwareOperateType = 5;
                break;
            }
            if (object.firmwareDataMsg != null) {
                if (typeof object.firmwareDataMsg !== "object")
                    throw TypeError(".firmware.firmware_msg.firmwareDataMsg: object expected");
                message.firmwareDataMsg = $root.firmware.firmware_data_message.fromObject(object.firmwareDataMsg);
            }
            return message;
        };

        /**
         * Creates a plain object from a firmware_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof firmware.firmware_msg
         * @static
         * @param {firmware.firmware_msg} message firmware_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        firmware_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.serviceType = options.enums === String ? "enum_SERVICE_TYPE_INDEX_FIRMWARE" : 4;
                object.firmwareOperateType = options.enums === String ? "enum_FIRMWARE_OPERATE_TYPE_NONE" : 0;
                object.firmwareDataMsg = null;
            }
            if (message.serviceType != null && message.hasOwnProperty("serviceType"))
                object.serviceType = options.enums === String ? $root.common.service_type_index[message.serviceType] === undefined ? message.serviceType : $root.common.service_type_index[message.serviceType] : message.serviceType;
            if (message.firmwareOperateType != null && message.hasOwnProperty("firmwareOperateType"))
                object.firmwareOperateType = options.enums === String ? $root.firmware.FIRMWARE_OPERATE_TYPE[message.firmwareOperateType] === undefined ? message.firmwareOperateType : $root.firmware.FIRMWARE_OPERATE_TYPE[message.firmwareOperateType] : message.firmwareOperateType;
            if (message.firmwareDataMsg != null && message.hasOwnProperty("firmwareDataMsg"))
                object.firmwareDataMsg = $root.firmware.firmware_data_message.toObject(message.firmwareDataMsg, options);
            return object;
        };

        /**
         * Converts this firmware_msg to JSON.
         * @function toJSON
         * @memberof firmware.firmware_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        firmware_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for firmware_msg
         * @function getTypeUrl
         * @memberof firmware.firmware_msg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        firmware_msg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/firmware.firmware_msg";
        };

        return firmware_msg;
    })();

    return firmware;
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
