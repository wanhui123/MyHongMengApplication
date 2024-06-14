/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "@ohos/protobufjs";
import Long from 'long';
$protobuf.util.Long=Long
$protobuf.configure()

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const file_download = $root.file_download = (() => {

    /**
     * Namespace file_download.
     * @exports file_download
     * @namespace
     */
    const file_download = {};

    file_download.file_download = (function() {

        /**
         * Properties of a file_download.
         * @memberof file_download
         * @interface Ifile_download
         * @property {number} fileSize file_download fileSize
         * @property {number|null} [fileType] file_download fileType
         * @property {number|null} [fileId] file_download fileId
         * @property {string|null} [fileName] file_download fileName
         * @property {number|null} [fileVerifyVal] file_download fileVerifyVal
         */

        /**
         * Constructs a new file_download.
         * @memberof file_download
         * @classdesc Represents a file_download.
         * @implements Ifile_download
         * @constructor
         * @param {file_download.Ifile_download=} [properties] Properties to set
         */
        function file_download(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * file_download fileSize.
         * @member {number} fileSize
         * @memberof file_download.file_download
         * @instance
         */
        file_download.prototype.fileSize = 0;

        /**
         * file_download fileType.
         * @member {number} fileType
         * @memberof file_download.file_download
         * @instance
         */
        file_download.prototype.fileType = 0;

        /**
         * file_download fileId.
         * @member {number} fileId
         * @memberof file_download.file_download
         * @instance
         */
        file_download.prototype.fileId = 0;

        /**
         * file_download fileName.
         * @member {string} fileName
         * @memberof file_download.file_download
         * @instance
         */
        file_download.prototype.fileName = "";

        /**
         * file_download fileVerifyVal.
         * @member {number} fileVerifyVal
         * @memberof file_download.file_download
         * @instance
         */
        file_download.prototype.fileVerifyVal = 0;

        /**
         * Creates a new file_download instance using the specified properties.
         * @function create
         * @memberof file_download.file_download
         * @static
         * @param {file_download.Ifile_download=} [properties] Properties to set
         * @returns {file_download.file_download} file_download instance
         */
        file_download.create = function create(properties) {
            return new file_download(properties);
        };

        /**
         * Encodes the specified file_download message. Does not implicitly {@link file_download.file_download.verify|verify} messages.
         * @function encode
         * @memberof file_download.file_download
         * @static
         * @param {file_download.Ifile_download} message file_download message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        file_download.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.fileSize);
            if (message.fileType != null && Object.hasOwnProperty.call(message, "fileType"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.fileType);
            if (message.fileId != null && Object.hasOwnProperty.call(message, "fileId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.fileId);
            if (message.fileName != null && Object.hasOwnProperty.call(message, "fileName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.fileName);
            if (message.fileVerifyVal != null && Object.hasOwnProperty.call(message, "fileVerifyVal"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.fileVerifyVal);
            return writer;
        };

        /**
         * Encodes the specified file_download message, length delimited. Does not implicitly {@link file_download.file_download.verify|verify} messages.
         * @function encodeDelimited
         * @memberof file_download.file_download
         * @static
         * @param {file_download.Ifile_download} message file_download message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        file_download.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a file_download message from the specified reader or buffer.
         * @function decode
         * @memberof file_download.file_download
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file_download.file_download} file_download
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        file_download.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.file_download.file_download();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.fileSize = reader.uint32();
                        break;
                    }
                case 2: {
                        message.fileType = reader.uint32();
                        break;
                    }
                case 3: {
                        message.fileId = reader.uint32();
                        break;
                    }
                case 4: {
                        message.fileName = reader.string();
                        break;
                    }
                case 7: {
                        message.fileVerifyVal = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("fileSize"))
                throw $util.ProtocolError("missing required 'fileSize'", { instance: message });
            return message;
        };

        /**
         * Decodes a file_download message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof file_download.file_download
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {file_download.file_download} file_download
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        file_download.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a file_download message.
         * @function verify
         * @memberof file_download.file_download
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        file_download.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.fileSize))
                return "fileSize: integer expected";
            if (message.fileType != null && message.hasOwnProperty("fileType"))
                if (!$util.isInteger(message.fileType))
                    return "fileType: integer expected";
            if (message.fileId != null && message.hasOwnProperty("fileId"))
                if (!$util.isInteger(message.fileId))
                    return "fileId: integer expected";
            if (message.fileName != null && message.hasOwnProperty("fileName"))
                if (!$util.isString(message.fileName))
                    return "fileName: string expected";
            if (message.fileVerifyVal != null && message.hasOwnProperty("fileVerifyVal"))
                if (!$util.isInteger(message.fileVerifyVal))
                    return "fileVerifyVal: integer expected";
            return null;
        };

        /**
         * Creates a file_download message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof file_download.file_download
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {file_download.file_download} file_download
         */
        file_download.fromObject = function fromObject(object) {
            if (object instanceof $root.file_download.file_download)
                return object;
            let message = new $root.file_download.file_download();
            if (object.fileSize != null)
                message.fileSize = object.fileSize >>> 0;
            if (object.fileType != null)
                message.fileType = object.fileType >>> 0;
            if (object.fileId != null)
                message.fileId = object.fileId >>> 0;
            if (object.fileName != null)
                message.fileName = String(object.fileName);
            if (object.fileVerifyVal != null)
                message.fileVerifyVal = object.fileVerifyVal >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a file_download message. Also converts values to other types if specified.
         * @function toObject
         * @memberof file_download.file_download
         * @static
         * @param {file_download.file_download} message file_download
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        file_download.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.fileSize = 0;
                object.fileType = 0;
                object.fileId = 0;
                object.fileName = "";
                object.fileVerifyVal = 0;
            }
            if (message.fileSize != null && message.hasOwnProperty("fileSize"))
                object.fileSize = message.fileSize;
            if (message.fileType != null && message.hasOwnProperty("fileType"))
                object.fileType = message.fileType;
            if (message.fileId != null && message.hasOwnProperty("fileId"))
                object.fileId = message.fileId;
            if (message.fileName != null && message.hasOwnProperty("fileName"))
                object.fileName = message.fileName;
            if (message.fileVerifyVal != null && message.hasOwnProperty("fileVerifyVal"))
                object.fileVerifyVal = message.fileVerifyVal;
            return object;
        };

        /**
         * Converts this file_download to JSON.
         * @function toJSON
         * @memberof file_download.file_download
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        file_download.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for file_download
         * @function getTypeUrl
         * @memberof file_download.file_download
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        file_download.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file_download.file_download";
        };

        return file_download;
    })();

    return file_download;
})();

export { $root as default };
