/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "@ohos/protobufjs";
import Long from 'long';
$protobuf.util.Long=Long
$protobuf.configure()

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const cycling_data = $root.cycling_data = (() => {

    /**
     * Namespace cycling_data.
     * @exports cycling_data
     * @namespace
     */
    const cycling_data = {};

    /**
     * CYCLING_DATA_OPERATE_TYPE enum.
     * @name cycling_data.CYCLING_DATA_OPERATE_TYPE
     * @enum {number}
     * @property {number} enum_CYCLING_DATA_OPERATE_TYPE_NONE=0 enum_CYCLING_DATA_OPERATE_TYPE_NONE value
     * @property {number} enum_CYCLING_DATA_OPERATE_TYPE_LIST_GET=1 enum_CYCLING_DATA_OPERATE_TYPE_LIST_GET value
     * @property {number} enum_CYCLING_DATA_OPERATE_TYPE_LIST_SEND=2 enum_CYCLING_DATA_OPERATE_TYPE_LIST_SEND value
     * @property {number} enum_CYCLING_DATA_OPERATE_TYPE_FILE_GET=3 enum_CYCLING_DATA_OPERATE_TYPE_FILE_GET value
     * @property {number} enum_CYCLING_DATA_OPERATE_TYPE_FILE_SEND=4 enum_CYCLING_DATA_OPERATE_TYPE_FILE_SEND value
     * @property {number} enum_CYCLING_DATA_OPERATE_TYPE_FILE_DEL=5 enum_CYCLING_DATA_OPERATE_TYPE_FILE_DEL value
     * @property {number} enum_CYCLING_DATA_OPERATE_TYPE_ALL_DEL=6 enum_CYCLING_DATA_OPERATE_TYPE_ALL_DEL value
     * @property {number} enum_CYCLING_DATA_OPERATE_TYPE_AUTO_UPLOAD=7 enum_CYCLING_DATA_OPERATE_TYPE_AUTO_UPLOAD value
     * @property {number} enum_CYCLING_DATA_OPERATE_TYPE_LIST_NUM_GET=8 enum_CYCLING_DATA_OPERATE_TYPE_LIST_NUM_GET value
     */
    cycling_data.CYCLING_DATA_OPERATE_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_CYCLING_DATA_OPERATE_TYPE_NONE"] = 0;
        values[valuesById[1] = "enum_CYCLING_DATA_OPERATE_TYPE_LIST_GET"] = 1;
        values[valuesById[2] = "enum_CYCLING_DATA_OPERATE_TYPE_LIST_SEND"] = 2;
        values[valuesById[3] = "enum_CYCLING_DATA_OPERATE_TYPE_FILE_GET"] = 3;
        values[valuesById[4] = "enum_CYCLING_DATA_OPERATE_TYPE_FILE_SEND"] = 4;
        values[valuesById[5] = "enum_CYCLING_DATA_OPERATE_TYPE_FILE_DEL"] = 5;
        values[valuesById[6] = "enum_CYCLING_DATA_OPERATE_TYPE_ALL_DEL"] = 6;
        values[valuesById[7] = "enum_CYCLING_DATA_OPERATE_TYPE_AUTO_UPLOAD"] = 7;
        values[valuesById[8] = "enum_CYCLING_DATA_OPERATE_TYPE_LIST_NUM_GET"] = 8;
        return values;
    })();

    cycling_data.cycling_data_file_flag_message = (function() {

        /**
         * Properties of a cycling_data_file_flag_message.
         * @memberof cycling_data
         * @interface Icycling_data_file_flag_message
         * @property {number} timestamp cycling_data_file_flag_message timestamp
         * @property {number|null} [fileSize] cycling_data_file_flag_message fileSize
         * @property {string|null} [userId] cycling_data_file_flag_message userId
         * @property {string|null} [deviceId] cycling_data_file_flag_message deviceId
         */

        /**
         * Constructs a new cycling_data_file_flag_message.
         * @memberof cycling_data
         * @classdesc Represents a cycling_data_file_flag_message.
         * @implements Icycling_data_file_flag_message
         * @constructor
         * @param {cycling_data.Icycling_data_file_flag_message=} [properties] Properties to set
         */
        function cycling_data_file_flag_message(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * cycling_data_file_flag_message timestamp.
         * @member {number} timestamp
         * @memberof cycling_data.cycling_data_file_flag_message
         * @instance
         */
        cycling_data_file_flag_message.prototype.timestamp = 0;

        /**
         * cycling_data_file_flag_message fileSize.
         * @member {number} fileSize
         * @memberof cycling_data.cycling_data_file_flag_message
         * @instance
         */
        cycling_data_file_flag_message.prototype.fileSize = 0;

        /**
         * cycling_data_file_flag_message userId.
         * @member {string} userId
         * @memberof cycling_data.cycling_data_file_flag_message
         * @instance
         */
        cycling_data_file_flag_message.prototype.userId = "";

        /**
         * cycling_data_file_flag_message deviceId.
         * @member {string} deviceId
         * @memberof cycling_data.cycling_data_file_flag_message
         * @instance
         */
        cycling_data_file_flag_message.prototype.deviceId = "";

        /**
         * Creates a new cycling_data_file_flag_message instance using the specified properties.
         * @function create
         * @memberof cycling_data.cycling_data_file_flag_message
         * @static
         * @param {cycling_data.Icycling_data_file_flag_message=} [properties] Properties to set
         * @returns {cycling_data.cycling_data_file_flag_message} cycling_data_file_flag_message instance
         */
        cycling_data_file_flag_message.create = function create(properties) {
            return new cycling_data_file_flag_message(properties);
        };

        /**
         * Encodes the specified cycling_data_file_flag_message message. Does not implicitly {@link cycling_data.cycling_data_file_flag_message.verify|verify} messages.
         * @function encode
         * @memberof cycling_data.cycling_data_file_flag_message
         * @static
         * @param {cycling_data.Icycling_data_file_flag_message} message cycling_data_file_flag_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        cycling_data_file_flag_message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.timestamp);
            if (message.fileSize != null && Object.hasOwnProperty.call(message, "fileSize"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.fileSize);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userId);
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.deviceId);
            return writer;
        };

        /**
         * Encodes the specified cycling_data_file_flag_message message, length delimited. Does not implicitly {@link cycling_data.cycling_data_file_flag_message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cycling_data.cycling_data_file_flag_message
         * @static
         * @param {cycling_data.Icycling_data_file_flag_message} message cycling_data_file_flag_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        cycling_data_file_flag_message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a cycling_data_file_flag_message message from the specified reader or buffer.
         * @function decode
         * @memberof cycling_data.cycling_data_file_flag_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cycling_data.cycling_data_file_flag_message} cycling_data_file_flag_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        cycling_data_file_flag_message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cycling_data.cycling_data_file_flag_message();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.timestamp = reader.uint32();
                        break;
                    }
                case 2: {
                        message.fileSize = reader.uint32();
                        break;
                    }
                case 3: {
                        message.userId = reader.string();
                        break;
                    }
                case 4: {
                        message.deviceId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("timestamp"))
                throw $util.ProtocolError("missing required 'timestamp'", { instance: message });
            return message;
        };

        /**
         * Decodes a cycling_data_file_flag_message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cycling_data.cycling_data_file_flag_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cycling_data.cycling_data_file_flag_message} cycling_data_file_flag_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        cycling_data_file_flag_message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a cycling_data_file_flag_message message.
         * @function verify
         * @memberof cycling_data.cycling_data_file_flag_message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        cycling_data_file_flag_message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.timestamp))
                return "timestamp: integer expected";
            if (message.fileSize != null && message.hasOwnProperty("fileSize"))
                if (!$util.isInteger(message.fileSize))
                    return "fileSize: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isString(message.deviceId))
                    return "deviceId: string expected";
            return null;
        };

        /**
         * Creates a cycling_data_file_flag_message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cycling_data.cycling_data_file_flag_message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cycling_data.cycling_data_file_flag_message} cycling_data_file_flag_message
         */
        cycling_data_file_flag_message.fromObject = function fromObject(object) {
            if (object instanceof $root.cycling_data.cycling_data_file_flag_message)
                return object;
            let message = new $root.cycling_data.cycling_data_file_flag_message();
            if (object.timestamp != null)
                message.timestamp = object.timestamp >>> 0;
            if (object.fileSize != null)
                message.fileSize = object.fileSize >>> 0;
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            return message;
        };

        /**
         * Creates a plain object from a cycling_data_file_flag_message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cycling_data.cycling_data_file_flag_message
         * @static
         * @param {cycling_data.cycling_data_file_flag_message} message cycling_data_file_flag_message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        cycling_data_file_flag_message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.timestamp = 0;
                object.fileSize = 0;
                object.userId = "";
                object.deviceId = "";
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.fileSize != null && message.hasOwnProperty("fileSize"))
                object.fileSize = message.fileSize;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            return object;
        };

        /**
         * Converts this cycling_data_file_flag_message to JSON.
         * @function toJSON
         * @memberof cycling_data.cycling_data_file_flag_message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        cycling_data_file_flag_message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for cycling_data_file_flag_message
         * @function getTypeUrl
         * @memberof cycling_data.cycling_data_file_flag_message
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        cycling_data_file_flag_message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cycling_data.cycling_data_file_flag_message";
        };

        return cycling_data_file_flag_message;
    })();

    cycling_data.cycling_data_auto_upload_message = (function() {

        /**
         * Properties of a cycling_data_auto_upload_message.
         * @memberof cycling_data
         * @interface Icycling_data_auto_upload_message
         * @property {number|null} [status] cycling_data_auto_upload_message status
         * @property {string|null} [cyclingDataUrl] cycling_data_auto_upload_message cyclingDataUrl
         * @property {string|null} [cyclingDataCheckUrl] cycling_data_auto_upload_message cyclingDataCheckUrl
         */

        /**
         * Constructs a new cycling_data_auto_upload_message.
         * @memberof cycling_data
         * @classdesc Represents a cycling_data_auto_upload_message.
         * @implements Icycling_data_auto_upload_message
         * @constructor
         * @param {cycling_data.Icycling_data_auto_upload_message=} [properties] Properties to set
         */
        function cycling_data_auto_upload_message(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * cycling_data_auto_upload_message status.
         * @member {number} status
         * @memberof cycling_data.cycling_data_auto_upload_message
         * @instance
         */
        cycling_data_auto_upload_message.prototype.status = 0;

        /**
         * cycling_data_auto_upload_message cyclingDataUrl.
         * @member {string} cyclingDataUrl
         * @memberof cycling_data.cycling_data_auto_upload_message
         * @instance
         */
        cycling_data_auto_upload_message.prototype.cyclingDataUrl = "";

        /**
         * cycling_data_auto_upload_message cyclingDataCheckUrl.
         * @member {string} cyclingDataCheckUrl
         * @memberof cycling_data.cycling_data_auto_upload_message
         * @instance
         */
        cycling_data_auto_upload_message.prototype.cyclingDataCheckUrl = "";

        /**
         * Creates a new cycling_data_auto_upload_message instance using the specified properties.
         * @function create
         * @memberof cycling_data.cycling_data_auto_upload_message
         * @static
         * @param {cycling_data.Icycling_data_auto_upload_message=} [properties] Properties to set
         * @returns {cycling_data.cycling_data_auto_upload_message} cycling_data_auto_upload_message instance
         */
        cycling_data_auto_upload_message.create = function create(properties) {
            return new cycling_data_auto_upload_message(properties);
        };

        /**
         * Encodes the specified cycling_data_auto_upload_message message. Does not implicitly {@link cycling_data.cycling_data_auto_upload_message.verify|verify} messages.
         * @function encode
         * @memberof cycling_data.cycling_data_auto_upload_message
         * @static
         * @param {cycling_data.Icycling_data_auto_upload_message} message cycling_data_auto_upload_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        cycling_data_auto_upload_message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.status);
            if (message.cyclingDataUrl != null && Object.hasOwnProperty.call(message, "cyclingDataUrl"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.cyclingDataUrl);
            if (message.cyclingDataCheckUrl != null && Object.hasOwnProperty.call(message, "cyclingDataCheckUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.cyclingDataCheckUrl);
            return writer;
        };

        /**
         * Encodes the specified cycling_data_auto_upload_message message, length delimited. Does not implicitly {@link cycling_data.cycling_data_auto_upload_message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cycling_data.cycling_data_auto_upload_message
         * @static
         * @param {cycling_data.Icycling_data_auto_upload_message} message cycling_data_auto_upload_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        cycling_data_auto_upload_message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a cycling_data_auto_upload_message message from the specified reader or buffer.
         * @function decode
         * @memberof cycling_data.cycling_data_auto_upload_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cycling_data.cycling_data_auto_upload_message} cycling_data_auto_upload_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        cycling_data_auto_upload_message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cycling_data.cycling_data_auto_upload_message();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.uint32();
                        break;
                    }
                case 2: {
                        message.cyclingDataUrl = reader.string();
                        break;
                    }
                case 3: {
                        message.cyclingDataCheckUrl = reader.string();
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
         * Decodes a cycling_data_auto_upload_message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cycling_data.cycling_data_auto_upload_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cycling_data.cycling_data_auto_upload_message} cycling_data_auto_upload_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        cycling_data_auto_upload_message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a cycling_data_auto_upload_message message.
         * @function verify
         * @memberof cycling_data.cycling_data_auto_upload_message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        cycling_data_auto_upload_message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.cyclingDataUrl != null && message.hasOwnProperty("cyclingDataUrl"))
                if (!$util.isString(message.cyclingDataUrl))
                    return "cyclingDataUrl: string expected";
            if (message.cyclingDataCheckUrl != null && message.hasOwnProperty("cyclingDataCheckUrl"))
                if (!$util.isString(message.cyclingDataCheckUrl))
                    return "cyclingDataCheckUrl: string expected";
            return null;
        };

        /**
         * Creates a cycling_data_auto_upload_message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cycling_data.cycling_data_auto_upload_message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cycling_data.cycling_data_auto_upload_message} cycling_data_auto_upload_message
         */
        cycling_data_auto_upload_message.fromObject = function fromObject(object) {
            if (object instanceof $root.cycling_data.cycling_data_auto_upload_message)
                return object;
            let message = new $root.cycling_data.cycling_data_auto_upload_message();
            if (object.status != null)
                message.status = object.status >>> 0;
            if (object.cyclingDataUrl != null)
                message.cyclingDataUrl = String(object.cyclingDataUrl);
            if (object.cyclingDataCheckUrl != null)
                message.cyclingDataCheckUrl = String(object.cyclingDataCheckUrl);
            return message;
        };

        /**
         * Creates a plain object from a cycling_data_auto_upload_message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cycling_data.cycling_data_auto_upload_message
         * @static
         * @param {cycling_data.cycling_data_auto_upload_message} message cycling_data_auto_upload_message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        cycling_data_auto_upload_message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.status = 0;
                object.cyclingDataUrl = "";
                object.cyclingDataCheckUrl = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.cyclingDataUrl != null && message.hasOwnProperty("cyclingDataUrl"))
                object.cyclingDataUrl = message.cyclingDataUrl;
            if (message.cyclingDataCheckUrl != null && message.hasOwnProperty("cyclingDataCheckUrl"))
                object.cyclingDataCheckUrl = message.cyclingDataCheckUrl;
            return object;
        };

        /**
         * Converts this cycling_data_auto_upload_message to JSON.
         * @function toJSON
         * @memberof cycling_data.cycling_data_auto_upload_message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        cycling_data_auto_upload_message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for cycling_data_auto_upload_message
         * @function getTypeUrl
         * @memberof cycling_data.cycling_data_auto_upload_message
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        cycling_data_auto_upload_message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cycling_data.cycling_data_auto_upload_message";
        };

        return cycling_data_auto_upload_message;
    })();

    cycling_data.cycling_data_msg = (function() {

        /**
         * Properties of a cycling_data_msg.
         * @memberof cycling_data
         * @interface Icycling_data_msg
         * @property {common.service_type_index} serviceType cycling_data_msg serviceType
         * @property {cycling_data.CYCLING_DATA_OPERATE_TYPE} cyclingDataOperateType cycling_data_msg cyclingDataOperateType
         * @property {Array.<cycling_data.Icycling_data_file_flag_message>|null} [cyclingDataFileFlagMsg] cycling_data_msg cyclingDataFileFlagMsg
         * @property {Uint8Array|null} [fileContent] cycling_data_msg fileContent
         * @property {cycling_data.Icycling_data_auto_upload_message|null} [cyclingDataAutoUploadMsg] cycling_data_msg cyclingDataAutoUploadMsg
         * @property {common.Ifile_list_get_message|null} [listMsg] cycling_data_msg listMsg
         */

        /**
         * Constructs a new cycling_data_msg.
         * @memberof cycling_data
         * @classdesc Represents a cycling_data_msg.
         * @implements Icycling_data_msg
         * @constructor
         * @param {cycling_data.Icycling_data_msg=} [properties] Properties to set
         */
        function cycling_data_msg(properties) {
            this.cyclingDataFileFlagMsg = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * cycling_data_msg serviceType.
         * @member {common.service_type_index} serviceType
         * @memberof cycling_data.cycling_data_msg
         * @instance
         */
        cycling_data_msg.prototype.serviceType = 6;

        /**
         * cycling_data_msg cyclingDataOperateType.
         * @member {cycling_data.CYCLING_DATA_OPERATE_TYPE} cyclingDataOperateType
         * @memberof cycling_data.cycling_data_msg
         * @instance
         */
        cycling_data_msg.prototype.cyclingDataOperateType = 0;

        /**
         * cycling_data_msg cyclingDataFileFlagMsg.
         * @member {Array.<cycling_data.Icycling_data_file_flag_message>} cyclingDataFileFlagMsg
         * @memberof cycling_data.cycling_data_msg
         * @instance
         */
        cycling_data_msg.prototype.cyclingDataFileFlagMsg = $util.emptyArray;

        /**
         * cycling_data_msg fileContent.
         * @member {Uint8Array} fileContent
         * @memberof cycling_data.cycling_data_msg
         * @instance
         */
        cycling_data_msg.prototype.fileContent = $util.newBuffer([]);

        /**
         * cycling_data_msg cyclingDataAutoUploadMsg.
         * @member {cycling_data.Icycling_data_auto_upload_message|null|undefined} cyclingDataAutoUploadMsg
         * @memberof cycling_data.cycling_data_msg
         * @instance
         */
        cycling_data_msg.prototype.cyclingDataAutoUploadMsg = null;

        /**
         * cycling_data_msg listMsg.
         * @member {common.Ifile_list_get_message|null|undefined} listMsg
         * @memberof cycling_data.cycling_data_msg
         * @instance
         */
        cycling_data_msg.prototype.listMsg = null;

        /**
         * Creates a new cycling_data_msg instance using the specified properties.
         * @function create
         * @memberof cycling_data.cycling_data_msg
         * @static
         * @param {cycling_data.Icycling_data_msg=} [properties] Properties to set
         * @returns {cycling_data.cycling_data_msg} cycling_data_msg instance
         */
        cycling_data_msg.create = function create(properties) {
            return new cycling_data_msg(properties);
        };

        /**
         * Encodes the specified cycling_data_msg message. Does not implicitly {@link cycling_data.cycling_data_msg.verify|verify} messages.
         * @function encode
         * @memberof cycling_data.cycling_data_msg
         * @static
         * @param {cycling_data.Icycling_data_msg} message cycling_data_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        cycling_data_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serviceType);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cyclingDataOperateType);
            if (message.cyclingDataFileFlagMsg != null && message.cyclingDataFileFlagMsg.length)
                for (let i = 0; i < message.cyclingDataFileFlagMsg.length; ++i)
                    $root.cycling_data.cycling_data_file_flag_message.encode(message.cyclingDataFileFlagMsg[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.fileContent != null && Object.hasOwnProperty.call(message, "fileContent"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.fileContent);
            if (message.cyclingDataAutoUploadMsg != null && Object.hasOwnProperty.call(message, "cyclingDataAutoUploadMsg"))
                $root.cycling_data.cycling_data_auto_upload_message.encode(message.cyclingDataAutoUploadMsg, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.listMsg != null && Object.hasOwnProperty.call(message, "listMsg"))
                $root.common.file_list_get_message.encode(message.listMsg, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified cycling_data_msg message, length delimited. Does not implicitly {@link cycling_data.cycling_data_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cycling_data.cycling_data_msg
         * @static
         * @param {cycling_data.Icycling_data_msg} message cycling_data_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        cycling_data_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a cycling_data_msg message from the specified reader or buffer.
         * @function decode
         * @memberof cycling_data.cycling_data_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cycling_data.cycling_data_msg} cycling_data_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        cycling_data_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cycling_data.cycling_data_msg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.serviceType = reader.int32();
                        break;
                    }
                case 2: {
                        message.cyclingDataOperateType = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.cyclingDataFileFlagMsg && message.cyclingDataFileFlagMsg.length))
                            message.cyclingDataFileFlagMsg = [];
                        message.cyclingDataFileFlagMsg.push($root.cycling_data.cycling_data_file_flag_message.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.fileContent = reader.bytes();
                        break;
                    }
                case 5: {
                        message.cyclingDataAutoUploadMsg = $root.cycling_data.cycling_data_auto_upload_message.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.listMsg = $root.common.file_list_get_message.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("serviceType"))
                throw $util.ProtocolError("missing required 'serviceType'", { instance: message });
            if (!message.hasOwnProperty("cyclingDataOperateType"))
                throw $util.ProtocolError("missing required 'cyclingDataOperateType'", { instance: message });
            return message;
        };

        /**
         * Decodes a cycling_data_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cycling_data.cycling_data_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cycling_data.cycling_data_msg} cycling_data_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        cycling_data_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a cycling_data_msg message.
         * @function verify
         * @memberof cycling_data.cycling_data_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        cycling_data_msg.verify = function verify(message) {
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
            switch (message.cyclingDataOperateType) {
            default:
                return "cyclingDataOperateType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                break;
            }
            if (message.cyclingDataFileFlagMsg != null && message.hasOwnProperty("cyclingDataFileFlagMsg")) {
                if (!Array.isArray(message.cyclingDataFileFlagMsg))
                    return "cyclingDataFileFlagMsg: array expected";
                for (let i = 0; i < message.cyclingDataFileFlagMsg.length; ++i) {
                    let error = $root.cycling_data.cycling_data_file_flag_message.verify(message.cyclingDataFileFlagMsg[i]);
                    if (error)
                        return "cyclingDataFileFlagMsg." + error;
                }
            }
            if (message.fileContent != null && message.hasOwnProperty("fileContent"))
                if (!(message.fileContent && typeof message.fileContent.length === "number" || $util.isString(message.fileContent)))
                    return "fileContent: buffer expected";
            if (message.cyclingDataAutoUploadMsg != null && message.hasOwnProperty("cyclingDataAutoUploadMsg")) {
                let error = $root.cycling_data.cycling_data_auto_upload_message.verify(message.cyclingDataAutoUploadMsg);
                if (error)
                    return "cyclingDataAutoUploadMsg." + error;
            }
            if (message.listMsg != null && message.hasOwnProperty("listMsg")) {
                let error = $root.common.file_list_get_message.verify(message.listMsg);
                if (error)
                    return "listMsg." + error;
            }
            return null;
        };

        /**
         * Creates a cycling_data_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cycling_data.cycling_data_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cycling_data.cycling_data_msg} cycling_data_msg
         */
        cycling_data_msg.fromObject = function fromObject(object) {
            if (object instanceof $root.cycling_data.cycling_data_msg)
                return object;
            let message = new $root.cycling_data.cycling_data_msg();
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
            default:
                if (typeof object.serviceType === "number") {
                    message.serviceType = object.serviceType;
                    break;
                }
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
            switch (object.cyclingDataOperateType) {
            default:
                if (typeof object.cyclingDataOperateType === "number") {
                    message.cyclingDataOperateType = object.cyclingDataOperateType;
                    break;
                }
                break;
            case "enum_CYCLING_DATA_OPERATE_TYPE_NONE":
            case 0:
                message.cyclingDataOperateType = 0;
                break;
            case "enum_CYCLING_DATA_OPERATE_TYPE_LIST_GET":
            case 1:
                message.cyclingDataOperateType = 1;
                break;
            case "enum_CYCLING_DATA_OPERATE_TYPE_LIST_SEND":
            case 2:
                message.cyclingDataOperateType = 2;
                break;
            case "enum_CYCLING_DATA_OPERATE_TYPE_FILE_GET":
            case 3:
                message.cyclingDataOperateType = 3;
                break;
            case "enum_CYCLING_DATA_OPERATE_TYPE_FILE_SEND":
            case 4:
                message.cyclingDataOperateType = 4;
                break;
            case "enum_CYCLING_DATA_OPERATE_TYPE_FILE_DEL":
            case 5:
                message.cyclingDataOperateType = 5;
                break;
            case "enum_CYCLING_DATA_OPERATE_TYPE_ALL_DEL":
            case 6:
                message.cyclingDataOperateType = 6;
                break;
            case "enum_CYCLING_DATA_OPERATE_TYPE_AUTO_UPLOAD":
            case 7:
                message.cyclingDataOperateType = 7;
                break;
            case "enum_CYCLING_DATA_OPERATE_TYPE_LIST_NUM_GET":
            case 8:
                message.cyclingDataOperateType = 8;
                break;
            }
            if (object.cyclingDataFileFlagMsg) {
                if (!Array.isArray(object.cyclingDataFileFlagMsg))
                    throw TypeError(".cycling_data.cycling_data_msg.cyclingDataFileFlagMsg: array expected");
                message.cyclingDataFileFlagMsg = [];
                for (let i = 0; i < object.cyclingDataFileFlagMsg.length; ++i) {
                    if (typeof object.cyclingDataFileFlagMsg[i] !== "object")
                        throw TypeError(".cycling_data.cycling_data_msg.cyclingDataFileFlagMsg: object expected");
                    message.cyclingDataFileFlagMsg[i] = $root.cycling_data.cycling_data_file_flag_message.fromObject(object.cyclingDataFileFlagMsg[i]);
                }
            }
            if (object.fileContent != null)
                if (typeof object.fileContent === "string")
                    $util.base64.decode(object.fileContent, message.fileContent = $util.newBuffer($util.base64.length(object.fileContent)), 0);
                else if (object.fileContent.length >= 0)
                    message.fileContent = object.fileContent;
            if (object.cyclingDataAutoUploadMsg != null) {
                if (typeof object.cyclingDataAutoUploadMsg !== "object")
                    throw TypeError(".cycling_data.cycling_data_msg.cyclingDataAutoUploadMsg: object expected");
                message.cyclingDataAutoUploadMsg = $root.cycling_data.cycling_data_auto_upload_message.fromObject(object.cyclingDataAutoUploadMsg);
            }
            if (object.listMsg != null) {
                if (typeof object.listMsg !== "object")
                    throw TypeError(".cycling_data.cycling_data_msg.listMsg: object expected");
                message.listMsg = $root.common.file_list_get_message.fromObject(object.listMsg);
            }
            return message;
        };

        /**
         * Creates a plain object from a cycling_data_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cycling_data.cycling_data_msg
         * @static
         * @param {cycling_data.cycling_data_msg} message cycling_data_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        cycling_data_msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.cyclingDataFileFlagMsg = [];
            if (options.defaults) {
                object.serviceType = options.enums === String ? "enum_SERVICE_TYPE_INDEX_CYCLING_DATA" : 6;
                object.cyclingDataOperateType = options.enums === String ? "enum_CYCLING_DATA_OPERATE_TYPE_NONE" : 0;
                if (options.bytes === String)
                    object.fileContent = "";
                else {
                    object.fileContent = [];
                    if (options.bytes !== Array)
                        object.fileContent = $util.newBuffer(object.fileContent);
                }
                object.cyclingDataAutoUploadMsg = null;
                object.listMsg = null;
            }
            if (message.serviceType != null && message.hasOwnProperty("serviceType"))
                object.serviceType = options.enums === String ? $root.common.service_type_index[message.serviceType] === undefined ? message.serviceType : $root.common.service_type_index[message.serviceType] : message.serviceType;
            if (message.cyclingDataOperateType != null && message.hasOwnProperty("cyclingDataOperateType"))
                object.cyclingDataOperateType = options.enums === String ? $root.cycling_data.CYCLING_DATA_OPERATE_TYPE[message.cyclingDataOperateType] === undefined ? message.cyclingDataOperateType : $root.cycling_data.CYCLING_DATA_OPERATE_TYPE[message.cyclingDataOperateType] : message.cyclingDataOperateType;
            if (message.cyclingDataFileFlagMsg && message.cyclingDataFileFlagMsg.length) {
                object.cyclingDataFileFlagMsg = [];
                for (let j = 0; j < message.cyclingDataFileFlagMsg.length; ++j)
                    object.cyclingDataFileFlagMsg[j] = $root.cycling_data.cycling_data_file_flag_message.toObject(message.cyclingDataFileFlagMsg[j], options);
            }
            if (message.fileContent != null && message.hasOwnProperty("fileContent"))
                object.fileContent = options.bytes === String ? $util.base64.encode(message.fileContent, 0, message.fileContent.length) : options.bytes === Array ? Array.prototype.slice.call(message.fileContent) : message.fileContent;
            if (message.cyclingDataAutoUploadMsg != null && message.hasOwnProperty("cyclingDataAutoUploadMsg"))
                object.cyclingDataAutoUploadMsg = $root.cycling_data.cycling_data_auto_upload_message.toObject(message.cyclingDataAutoUploadMsg, options);
            if (message.listMsg != null && message.hasOwnProperty("listMsg"))
                object.listMsg = $root.common.file_list_get_message.toObject(message.listMsg, options);
            return object;
        };

        /**
         * Converts this cycling_data_msg to JSON.
         * @function toJSON
         * @memberof cycling_data.cycling_data_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        cycling_data_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for cycling_data_msg
         * @function getTypeUrl
         * @memberof cycling_data.cycling_data_msg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        cycling_data_msg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cycling_data.cycling_data_msg";
        };

        return cycling_data_msg;
    })();

    return cycling_data;
})();

export const common = $root.common = (() => {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    const common = {};

    /**
     * service_type_index enum.
     * @name common.service_type_index
     * @enum {number}
     * @property {number} enum_SERVICE_TYPE_INDEX_NONE=0 enum_SERVICE_TYPE_INDEX_NONE value
     * @property {number} enum_SERVICE_TYPE_INDEX_INS=1 enum_SERVICE_TYPE_INDEX_INS value
     * @property {number} enum_SERVICE_TYPE_INDEX_MAP=2 enum_SERVICE_TYPE_INDEX_MAP value
     * @property {number} enum_SERVICE_TYPE_INDEX_BACK=3 enum_SERVICE_TYPE_INDEX_BACK value
     * @property {number} enum_SERVICE_TYPE_INDEX_FIRMWARE=4 enum_SERVICE_TYPE_INDEX_FIRMWARE value
     * @property {number} enum_SERVICE_TYPE_INDEX_WIFI=5 enum_SERVICE_TYPE_INDEX_WIFI value
     * @property {number} enum_SERVICE_TYPE_INDEX_CYCLING_DATA=6 enum_SERVICE_TYPE_INDEX_CYCLING_DATA value
     * @property {number} enum_SERVICE_TYPE_INDEX_ROUTE_PLAN=7 enum_SERVICE_TYPE_INDEX_ROUTE_PLAN value
     * @property {number} enum_SERVICE_TYPE_INDEX_REAL_TIME_TRACE=8 enum_SERVICE_TYPE_INDEX_REAL_TIME_TRACE value
     * @property {number} enum_SERVICE_TYPE_INDEX_USER_CONFIG=9 enum_SERVICE_TYPE_INDEX_USER_CONFIG value
     * @property {number} enum_SERVICE_TYPE_INDEX_BLE=10 enum_SERVICE_TYPE_INDEX_BLE value
     * @property {number} enum_SERVICE_TYPE_INDEX_FACTORY=11 enum_SERVICE_TYPE_INDEX_FACTORY value
     * @property {number} enum_SERVICE_TYPE_INDEX_CONFIG=12 enum_SERVICE_TYPE_INDEX_CONFIG value
     * @property {number} enum_SERVICE_TYPE_INDEX_DEV_STATUS=13 enum_SERVICE_TYPE_INDEX_DEV_STATUS value
     * @property {number} enum_SERVICE_TYPE_INDEX_SENSOR=14 enum_SERVICE_TYPE_INDEX_SENSOR value
     * @property {number} enum_SERVICE_TYPE_INDEX_TRAINING=15 enum_SERVICE_TYPE_INDEX_TRAINING value
     * @property {number} enum_SERVICE_TYPE_INDEX_TEAM_INFO=16 enum_SERVICE_TYPE_INDEX_TEAM_INFO value
     * @property {number} enum_SERVICE_TYPE_INDEX_DEV_VER_INFO=17 enum_SERVICE_TYPE_INDEX_DEV_VER_INFO value
     * @property {number} enum_SERVICE_TYPE_INDEX_LANGUAGE=18 enum_SERVICE_TYPE_INDEX_LANGUAGE value
     * @property {number} enum_SERVICE_TYPE_INDEX_LOG=19 enum_SERVICE_TYPE_INDEX_LOG value
     * @property {number} enum_SERVICE_TYPE_INDEX_THEME=20 enum_SERVICE_TYPE_INDEX_THEME value
     * @property {number} enum_SERVICE_TYPE_INDEX_FILE_OPERATION=21 enum_SERVICE_TYPE_INDEX_FILE_OPERATION value
     * @property {number} enum_SERVICE_TYPE_INDEX_MAP_NEW=22 enum_SERVICE_TYPE_INDEX_MAP_NEW value
     * @property {number} enum_SERVICE_TYPE_INDEX_ROUTE_BOOK=23 enum_SERVICE_TYPE_INDEX_ROUTE_BOOK value
     * @property {number} enum_SERVICE_TYPE_INDEX_STAGE=24 enum_SERVICE_TYPE_INDEX_STAGE value
     * @property {number} enum_SERVICE_TYPE_INDEX_TRAINING_PLAN=25 enum_SERVICE_TYPE_INDEX_TRAINING_PLAN value
     * @property {number} enum_SERVICE_TYPE_INDEX_ALG_GOMORE=26 enum_SERVICE_TYPE_INDEX_ALG_GOMORE value
     */
    common.service_type_index = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_SERVICE_TYPE_INDEX_NONE"] = 0;
        values[valuesById[1] = "enum_SERVICE_TYPE_INDEX_INS"] = 1;
        values[valuesById[2] = "enum_SERVICE_TYPE_INDEX_MAP"] = 2;
        values[valuesById[3] = "enum_SERVICE_TYPE_INDEX_BACK"] = 3;
        values[valuesById[4] = "enum_SERVICE_TYPE_INDEX_FIRMWARE"] = 4;
        values[valuesById[5] = "enum_SERVICE_TYPE_INDEX_WIFI"] = 5;
        values[valuesById[6] = "enum_SERVICE_TYPE_INDEX_CYCLING_DATA"] = 6;
        values[valuesById[7] = "enum_SERVICE_TYPE_INDEX_ROUTE_PLAN"] = 7;
        values[valuesById[8] = "enum_SERVICE_TYPE_INDEX_REAL_TIME_TRACE"] = 8;
        values[valuesById[9] = "enum_SERVICE_TYPE_INDEX_USER_CONFIG"] = 9;
        values[valuesById[10] = "enum_SERVICE_TYPE_INDEX_BLE"] = 10;
        values[valuesById[11] = "enum_SERVICE_TYPE_INDEX_FACTORY"] = 11;
        values[valuesById[12] = "enum_SERVICE_TYPE_INDEX_CONFIG"] = 12;
        values[valuesById[13] = "enum_SERVICE_TYPE_INDEX_DEV_STATUS"] = 13;
        values[valuesById[14] = "enum_SERVICE_TYPE_INDEX_SENSOR"] = 14;
        values[valuesById[15] = "enum_SERVICE_TYPE_INDEX_TRAINING"] = 15;
        values[valuesById[16] = "enum_SERVICE_TYPE_INDEX_TEAM_INFO"] = 16;
        values[valuesById[17] = "enum_SERVICE_TYPE_INDEX_DEV_VER_INFO"] = 17;
        values[valuesById[18] = "enum_SERVICE_TYPE_INDEX_LANGUAGE"] = 18;
        values[valuesById[19] = "enum_SERVICE_TYPE_INDEX_LOG"] = 19;
        values[valuesById[20] = "enum_SERVICE_TYPE_INDEX_THEME"] = 20;
        values[valuesById[21] = "enum_SERVICE_TYPE_INDEX_FILE_OPERATION"] = 21;
        values[valuesById[22] = "enum_SERVICE_TYPE_INDEX_MAP_NEW"] = 22;
        values[valuesById[23] = "enum_SERVICE_TYPE_INDEX_ROUTE_BOOK"] = 23;
        values[valuesById[24] = "enum_SERVICE_TYPE_INDEX_STAGE"] = 24;
        values[valuesById[25] = "enum_SERVICE_TYPE_INDEX_TRAINING_PLAN"] = 25;
        values[valuesById[26] = "enum_SERVICE_TYPE_INDEX_ALG_GOMORE"] = 26;
        return values;
    })();

    /**
     * SERVICE_OPERATE_TYPE enum.
     * @name common.SERVICE_OPERATE_TYPE
     * @enum {number}
     * @property {number} enum_SERVICE_OPERATE_TYPE_NONE=0 enum_SERVICE_OPERATE_TYPE_NONE value
     * @property {number} enum_SERVICE_OPERATE_TYPE_SET=1 enum_SERVICE_OPERATE_TYPE_SET value
     * @property {number} enum_SERVICE_OPERATE_TYPE_GET=2 enum_SERVICE_OPERATE_TYPE_GET value
     * @property {number} enum_SERVICE_OPERATE_TYPE_ADD=3 enum_SERVICE_OPERATE_TYPE_ADD value
     * @property {number} enum_SERVICE_OPERATE_TYPE_DEL=4 enum_SERVICE_OPERATE_TYPE_DEL value
     */
    common.SERVICE_OPERATE_TYPE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "enum_SERVICE_OPERATE_TYPE_NONE"] = 0;
        values[valuesById[1] = "enum_SERVICE_OPERATE_TYPE_SET"] = 1;
        values[valuesById[2] = "enum_SERVICE_OPERATE_TYPE_GET"] = 2;
        values[valuesById[3] = "enum_SERVICE_OPERATE_TYPE_ADD"] = 3;
        values[valuesById[4] = "enum_SERVICE_OPERATE_TYPE_DEL"] = 4;
        return values;
    })();

    common.file_list_get_message = (function() {

        /**
         * Properties of a file_list_get_message.
         * @memberof common
         * @interface Ifile_list_get_message
         * @property {number|null} [fileNum] file_list_get_message fileNum
         * @property {number|null} [fileListSupportNumMax] file_list_get_message fileListSupportNumMax
         * @property {number|null} [fileIndexStart] file_list_get_message fileIndexStart
         * @property {number|null} [fileIndexEnd] file_list_get_message fileIndexEnd
         */

        /**
         * Constructs a new file_list_get_message.
         * @memberof common
         * @classdesc Represents a file_list_get_message.
         * @implements Ifile_list_get_message
         * @constructor
         * @param {common.Ifile_list_get_message=} [properties] Properties to set
         */
        function file_list_get_message(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * file_list_get_message fileNum.
         * @member {number} fileNum
         * @memberof common.file_list_get_message
         * @instance
         */
        file_list_get_message.prototype.fileNum = 0;

        /**
         * file_list_get_message fileListSupportNumMax.
         * @member {number} fileListSupportNumMax
         * @memberof common.file_list_get_message
         * @instance
         */
        file_list_get_message.prototype.fileListSupportNumMax = 0;

        /**
         * file_list_get_message fileIndexStart.
         * @member {number} fileIndexStart
         * @memberof common.file_list_get_message
         * @instance
         */
        file_list_get_message.prototype.fileIndexStart = 0;

        /**
         * file_list_get_message fileIndexEnd.
         * @member {number} fileIndexEnd
         * @memberof common.file_list_get_message
         * @instance
         */
        file_list_get_message.prototype.fileIndexEnd = 0;

        /**
         * Creates a new file_list_get_message instance using the specified properties.
         * @function create
         * @memberof common.file_list_get_message
         * @static
         * @param {common.Ifile_list_get_message=} [properties] Properties to set
         * @returns {common.file_list_get_message} file_list_get_message instance
         */
        file_list_get_message.create = function create(properties) {
            return new file_list_get_message(properties);
        };

        /**
         * Encodes the specified file_list_get_message message. Does not implicitly {@link common.file_list_get_message.verify|verify} messages.
         * @function encode
         * @memberof common.file_list_get_message
         * @static
         * @param {common.Ifile_list_get_message} message file_list_get_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        file_list_get_message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fileNum != null && Object.hasOwnProperty.call(message, "fileNum"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.fileNum);
            if (message.fileListSupportNumMax != null && Object.hasOwnProperty.call(message, "fileListSupportNumMax"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.fileListSupportNumMax);
            if (message.fileIndexStart != null && Object.hasOwnProperty.call(message, "fileIndexStart"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.fileIndexStart);
            if (message.fileIndexEnd != null && Object.hasOwnProperty.call(message, "fileIndexEnd"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.fileIndexEnd);
            return writer;
        };

        /**
         * Encodes the specified file_list_get_message message, length delimited. Does not implicitly {@link common.file_list_get_message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.file_list_get_message
         * @static
         * @param {common.Ifile_list_get_message} message file_list_get_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        file_list_get_message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a file_list_get_message message from the specified reader or buffer.
         * @function decode
         * @memberof common.file_list_get_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.file_list_get_message} file_list_get_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        file_list_get_message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.file_list_get_message();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.fileNum = reader.uint32();
                        break;
                    }
                case 2: {
                        message.fileListSupportNumMax = reader.uint32();
                        break;
                    }
                case 3: {
                        message.fileIndexStart = reader.uint32();
                        break;
                    }
                case 4: {
                        message.fileIndexEnd = reader.uint32();
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
         * Decodes a file_list_get_message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.file_list_get_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.file_list_get_message} file_list_get_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        file_list_get_message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a file_list_get_message message.
         * @function verify
         * @memberof common.file_list_get_message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        file_list_get_message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fileNum != null && message.hasOwnProperty("fileNum"))
                if (!$util.isInteger(message.fileNum))
                    return "fileNum: integer expected";
            if (message.fileListSupportNumMax != null && message.hasOwnProperty("fileListSupportNumMax"))
                if (!$util.isInteger(message.fileListSupportNumMax))
                    return "fileListSupportNumMax: integer expected";
            if (message.fileIndexStart != null && message.hasOwnProperty("fileIndexStart"))
                if (!$util.isInteger(message.fileIndexStart))
                    return "fileIndexStart: integer expected";
            if (message.fileIndexEnd != null && message.hasOwnProperty("fileIndexEnd"))
                if (!$util.isInteger(message.fileIndexEnd))
                    return "fileIndexEnd: integer expected";
            return null;
        };

        /**
         * Creates a file_list_get_message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.file_list_get_message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.file_list_get_message} file_list_get_message
         */
        file_list_get_message.fromObject = function fromObject(object) {
            if (object instanceof $root.common.file_list_get_message)
                return object;
            let message = new $root.common.file_list_get_message();
            if (object.fileNum != null)
                message.fileNum = object.fileNum >>> 0;
            if (object.fileListSupportNumMax != null)
                message.fileListSupportNumMax = object.fileListSupportNumMax >>> 0;
            if (object.fileIndexStart != null)
                message.fileIndexStart = object.fileIndexStart >>> 0;
            if (object.fileIndexEnd != null)
                message.fileIndexEnd = object.fileIndexEnd >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a file_list_get_message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.file_list_get_message
         * @static
         * @param {common.file_list_get_message} message file_list_get_message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        file_list_get_message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.fileNum = 0;
                object.fileListSupportNumMax = 0;
                object.fileIndexStart = 0;
                object.fileIndexEnd = 0;
            }
            if (message.fileNum != null && message.hasOwnProperty("fileNum"))
                object.fileNum = message.fileNum;
            if (message.fileListSupportNumMax != null && message.hasOwnProperty("fileListSupportNumMax"))
                object.fileListSupportNumMax = message.fileListSupportNumMax;
            if (message.fileIndexStart != null && message.hasOwnProperty("fileIndexStart"))
                object.fileIndexStart = message.fileIndexStart;
            if (message.fileIndexEnd != null && message.hasOwnProperty("fileIndexEnd"))
                object.fileIndexEnd = message.fileIndexEnd;
            return object;
        };

        /**
         * Converts this file_list_get_message to JSON.
         * @function toJSON
         * @memberof common.file_list_get_message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        file_list_get_message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for file_list_get_message
         * @function getTypeUrl
         * @memberof common.file_list_get_message
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        file_list_get_message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.file_list_get_message";
        };

        return file_list_get_message;
    })();

    return common;
})();

export { $root as default };
