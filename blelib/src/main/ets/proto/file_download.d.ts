import * as $protobuf from "@ohos/protobufjs";
import Long = require("long");
/** Namespace file_download. */
export namespace file_download {

    /** Properties of a file_download. */
    interface Ifile_download {

        /** file_download fileSize */
        fileSize: number;

        /** file_download fileType */
        fileType?: (number|null);

        /** file_download fileId */
        fileId?: (number|null);

        /** file_download fileName */
        fileName?: (string|null);

        /** file_download fileVerifyVal */
        fileVerifyVal?: (number|null);
    }

    /** Represents a file_download. */
    class file_download implements Ifile_download {

        /**
         * Constructs a new file_download.
         * @param [properties] Properties to set
         */
        constructor(properties?: file_download.Ifile_download);

        /** file_download fileSize. */
        public fileSize: number;

        /** file_download fileType. */
        public fileType: number;

        /** file_download fileId. */
        public fileId: number;

        /** file_download fileName. */
        public fileName: string;

        /** file_download fileVerifyVal. */
        public fileVerifyVal: number;

        /**
         * Creates a new file_download instance using the specified properties.
         * @param [properties] Properties to set
         * @returns file_download instance
         */
        public static create(properties?: file_download.Ifile_download): file_download.file_download;

        /**
         * Encodes the specified file_download message. Does not implicitly {@link file_download.file_download.verify|verify} messages.
         * @param message file_download message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file_download.Ifile_download, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified file_download message, length delimited. Does not implicitly {@link file_download.file_download.verify|verify} messages.
         * @param message file_download message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file_download.Ifile_download, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a file_download message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns file_download
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file_download.file_download;

        /**
         * Decodes a file_download message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns file_download
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file_download.file_download;

        /**
         * Verifies a file_download message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a file_download message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns file_download
         */
        public static fromObject(object: { [k: string]: any }): file_download.file_download;

        /**
         * Creates a plain object from a file_download message. Also converts values to other types if specified.
         * @param message file_download
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file_download.file_download, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this file_download to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for file_download
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
