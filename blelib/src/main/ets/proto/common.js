/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "@ohos/protobufjs";
import Long from 'long';
$protobuf.util.Long=Long
$protobuf.configure()

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

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
