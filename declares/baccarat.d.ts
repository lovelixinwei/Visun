import * as $protobuf from "protobufjs";
/** Namespace baccarat. */
export namespace baccarat {

    /** Properties of a BaccaratSceneResp. */
    interface IBaccaratSceneResp {

        /** BaccaratSceneResp TimeStamp */
        TimeStamp?: (number|Long|null);

        /** BaccaratSceneResp Chips */
        Chips?: (number[]|null);

        /** BaccaratSceneResp AwardAreas */
        AwardAreas?: (Uint8Array[]|null);

        /** BaccaratSceneResp AreaBets */
        AreaBets?: ((number|Long)[]|null);

        /** BaccaratSceneResp MyBets */
        MyBets?: ((number|Long)[]|null);
    }

    /** Represents a BaccaratSceneResp. */
    class BaccaratSceneResp implements IBaccaratSceneResp {

        /**
         * Constructs a new BaccaratSceneResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratSceneResp);

        /** BaccaratSceneResp TimeStamp. */
        public TimeStamp: (number|Long);

        /** BaccaratSceneResp Chips. */
        public Chips: number[];

        /** BaccaratSceneResp AwardAreas. */
        public AwardAreas: Uint8Array[];

        /** BaccaratSceneResp AreaBets. */
        public AreaBets: (number|Long)[];

        /** BaccaratSceneResp MyBets. */
        public MyBets: (number|Long)[];

        /**
         * Creates a new BaccaratSceneResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratSceneResp instance
         */
        public static create(properties?: baccarat.IBaccaratSceneResp): baccarat.BaccaratSceneResp;

        /**
         * Encodes the specified BaccaratSceneResp message. Does not implicitly {@link baccarat.BaccaratSceneResp.verify|verify} messages.
         * @param message BaccaratSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratSceneResp message, length delimited. Does not implicitly {@link baccarat.BaccaratSceneResp.verify|verify} messages.
         * @param message BaccaratSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratSceneResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratSceneResp;

        /**
         * Decodes a BaccaratSceneResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratSceneResp;

        /**
         * Verifies a BaccaratSceneResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratSceneResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratSceneResp
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratSceneResp;

        /**
         * Creates a plain object from a BaccaratSceneResp message. Also converts values to other types if specified.
         * @param message BaccaratSceneResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratSceneResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratSceneResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratStateFreeResp. */
    interface IBaccaratStateFreeResp {

        /** BaccaratStateFreeResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a BaccaratStateFreeResp. */
    class BaccaratStateFreeResp implements IBaccaratStateFreeResp {

        /**
         * Constructs a new BaccaratStateFreeResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratStateFreeResp);

        /** BaccaratStateFreeResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new BaccaratStateFreeResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratStateFreeResp instance
         */
        public static create(properties?: baccarat.IBaccaratStateFreeResp): baccarat.BaccaratStateFreeResp;

        /**
         * Encodes the specified BaccaratStateFreeResp message. Does not implicitly {@link baccarat.BaccaratStateFreeResp.verify|verify} messages.
         * @param message BaccaratStateFreeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratStateFreeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratStateFreeResp message, length delimited. Does not implicitly {@link baccarat.BaccaratStateFreeResp.verify|verify} messages.
         * @param message BaccaratStateFreeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratStateFreeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratStateFreeResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratStateFreeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratStateFreeResp;

        /**
         * Decodes a BaccaratStateFreeResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratStateFreeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratStateFreeResp;

        /**
         * Verifies a BaccaratStateFreeResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratStateFreeResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratStateFreeResp
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratStateFreeResp;

        /**
         * Creates a plain object from a BaccaratStateFreeResp message. Also converts values to other types if specified.
         * @param message BaccaratStateFreeResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratStateFreeResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratStateFreeResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratStateStartResp. */
    interface IBaccaratStateStartResp {

        /** BaccaratStateStartResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a BaccaratStateStartResp. */
    class BaccaratStateStartResp implements IBaccaratStateStartResp {

        /**
         * Constructs a new BaccaratStateStartResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratStateStartResp);

        /** BaccaratStateStartResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new BaccaratStateStartResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratStateStartResp instance
         */
        public static create(properties?: baccarat.IBaccaratStateStartResp): baccarat.BaccaratStateStartResp;

        /**
         * Encodes the specified BaccaratStateStartResp message. Does not implicitly {@link baccarat.BaccaratStateStartResp.verify|verify} messages.
         * @param message BaccaratStateStartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratStateStartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratStateStartResp message, length delimited. Does not implicitly {@link baccarat.BaccaratStateStartResp.verify|verify} messages.
         * @param message BaccaratStateStartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratStateStartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratStateStartResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratStateStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratStateStartResp;

        /**
         * Decodes a BaccaratStateStartResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratStateStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratStateStartResp;

        /**
         * Verifies a BaccaratStateStartResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratStateStartResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratStateStartResp
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratStateStartResp;

        /**
         * Creates a plain object from a BaccaratStateStartResp message. Also converts values to other types if specified.
         * @param message BaccaratStateStartResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratStateStartResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratStateStartResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratStatePlayingResp. */
    interface IBaccaratStatePlayingResp {

        /** BaccaratStatePlayingResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a BaccaratStatePlayingResp. */
    class BaccaratStatePlayingResp implements IBaccaratStatePlayingResp {

        /**
         * Constructs a new BaccaratStatePlayingResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratStatePlayingResp);

        /** BaccaratStatePlayingResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new BaccaratStatePlayingResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratStatePlayingResp instance
         */
        public static create(properties?: baccarat.IBaccaratStatePlayingResp): baccarat.BaccaratStatePlayingResp;

        /**
         * Encodes the specified BaccaratStatePlayingResp message. Does not implicitly {@link baccarat.BaccaratStatePlayingResp.verify|verify} messages.
         * @param message BaccaratStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratStatePlayingResp message, length delimited. Does not implicitly {@link baccarat.BaccaratStatePlayingResp.verify|verify} messages.
         * @param message BaccaratStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratStatePlayingResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratStatePlayingResp;

        /**
         * Decodes a BaccaratStatePlayingResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratStatePlayingResp;

        /**
         * Verifies a BaccaratStatePlayingResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratStatePlayingResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratStatePlayingResp
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratStatePlayingResp;

        /**
         * Creates a plain object from a BaccaratStatePlayingResp message. Also converts values to other types if specified.
         * @param message BaccaratStatePlayingResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratStatePlayingResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratStatePlayingResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratStateOverResp. */
    interface IBaccaratStateOverResp {

        /** BaccaratStateOverResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a BaccaratStateOverResp. */
    class BaccaratStateOverResp implements IBaccaratStateOverResp {

        /**
         * Constructs a new BaccaratStateOverResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratStateOverResp);

        /** BaccaratStateOverResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new BaccaratStateOverResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratStateOverResp instance
         */
        public static create(properties?: baccarat.IBaccaratStateOverResp): baccarat.BaccaratStateOverResp;

        /**
         * Encodes the specified BaccaratStateOverResp message. Does not implicitly {@link baccarat.BaccaratStateOverResp.verify|verify} messages.
         * @param message BaccaratStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratStateOverResp message, length delimited. Does not implicitly {@link baccarat.BaccaratStateOverResp.verify|verify} messages.
         * @param message BaccaratStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratStateOverResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratStateOverResp;

        /**
         * Decodes a BaccaratStateOverResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratStateOverResp;

        /**
         * Verifies a BaccaratStateOverResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratStateOverResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratStateOverResp
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratStateOverResp;

        /**
         * Creates a plain object from a BaccaratStateOverResp message. Also converts values to other types if specified.
         * @param message BaccaratStateOverResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratStateOverResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratStateOverResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratHostReq. */
    interface IBaccaratHostReq {

        /** BaccaratHostReq IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a BaccaratHostReq. */
    class BaccaratHostReq implements IBaccaratHostReq {

        /**
         * Constructs a new BaccaratHostReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratHostReq);

        /** BaccaratHostReq IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new BaccaratHostReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratHostReq instance
         */
        public static create(properties?: baccarat.IBaccaratHostReq): baccarat.BaccaratHostReq;

        /**
         * Encodes the specified BaccaratHostReq message. Does not implicitly {@link baccarat.BaccaratHostReq.verify|verify} messages.
         * @param message BaccaratHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratHostReq message, length delimited. Does not implicitly {@link baccarat.BaccaratHostReq.verify|verify} messages.
         * @param message BaccaratHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratHostReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratHostReq;

        /**
         * Decodes a BaccaratHostReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratHostReq;

        /**
         * Verifies a BaccaratHostReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratHostReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratHostReq
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratHostReq;

        /**
         * Creates a plain object from a BaccaratHostReq message. Also converts values to other types if specified.
         * @param message BaccaratHostReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratHostReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratHostReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratHostResp. */
    interface IBaccaratHostResp {

        /** BaccaratHostResp UserID */
        UserID?: (number|Long|null);

        /** BaccaratHostResp IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a BaccaratHostResp. */
    class BaccaratHostResp implements IBaccaratHostResp {

        /**
         * Constructs a new BaccaratHostResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratHostResp);

        /** BaccaratHostResp UserID. */
        public UserID: (number|Long);

        /** BaccaratHostResp IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new BaccaratHostResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratHostResp instance
         */
        public static create(properties?: baccarat.IBaccaratHostResp): baccarat.BaccaratHostResp;

        /**
         * Encodes the specified BaccaratHostResp message. Does not implicitly {@link baccarat.BaccaratHostResp.verify|verify} messages.
         * @param message BaccaratHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratHostResp message, length delimited. Does not implicitly {@link baccarat.BaccaratHostResp.verify|verify} messages.
         * @param message BaccaratHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratHostResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratHostResp;

        /**
         * Decodes a BaccaratHostResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratHostResp;

        /**
         * Verifies a BaccaratHostResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratHostResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratHostResp
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratHostResp;

        /**
         * Creates a plain object from a BaccaratHostResp message. Also converts values to other types if specified.
         * @param message BaccaratHostResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratHostResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratHostResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratSuperHostReq. */
    interface IBaccaratSuperHostReq {

        /** BaccaratSuperHostReq IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a BaccaratSuperHostReq. */
    class BaccaratSuperHostReq implements IBaccaratSuperHostReq {

        /**
         * Constructs a new BaccaratSuperHostReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratSuperHostReq);

        /** BaccaratSuperHostReq IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new BaccaratSuperHostReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratSuperHostReq instance
         */
        public static create(properties?: baccarat.IBaccaratSuperHostReq): baccarat.BaccaratSuperHostReq;

        /**
         * Encodes the specified BaccaratSuperHostReq message. Does not implicitly {@link baccarat.BaccaratSuperHostReq.verify|verify} messages.
         * @param message BaccaratSuperHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratSuperHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratSuperHostReq message, length delimited. Does not implicitly {@link baccarat.BaccaratSuperHostReq.verify|verify} messages.
         * @param message BaccaratSuperHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratSuperHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratSuperHostReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratSuperHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratSuperHostReq;

        /**
         * Decodes a BaccaratSuperHostReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratSuperHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratSuperHostReq;

        /**
         * Verifies a BaccaratSuperHostReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratSuperHostReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratSuperHostReq
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratSuperHostReq;

        /**
         * Creates a plain object from a BaccaratSuperHostReq message. Also converts values to other types if specified.
         * @param message BaccaratSuperHostReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratSuperHostReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratSuperHostReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratSuperHostResp. */
    interface IBaccaratSuperHostResp {

        /** BaccaratSuperHostResp UserID */
        UserID?: (number|Long|null);

        /** BaccaratSuperHostResp IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a BaccaratSuperHostResp. */
    class BaccaratSuperHostResp implements IBaccaratSuperHostResp {

        /**
         * Constructs a new BaccaratSuperHostResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratSuperHostResp);

        /** BaccaratSuperHostResp UserID. */
        public UserID: (number|Long);

        /** BaccaratSuperHostResp IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new BaccaratSuperHostResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratSuperHostResp instance
         */
        public static create(properties?: baccarat.IBaccaratSuperHostResp): baccarat.BaccaratSuperHostResp;

        /**
         * Encodes the specified BaccaratSuperHostResp message. Does not implicitly {@link baccarat.BaccaratSuperHostResp.verify|verify} messages.
         * @param message BaccaratSuperHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratSuperHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratSuperHostResp message, length delimited. Does not implicitly {@link baccarat.BaccaratSuperHostResp.verify|verify} messages.
         * @param message BaccaratSuperHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratSuperHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratSuperHostResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratSuperHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratSuperHostResp;

        /**
         * Decodes a BaccaratSuperHostResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratSuperHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratSuperHostResp;

        /**
         * Verifies a BaccaratSuperHostResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratSuperHostResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratSuperHostResp
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratSuperHostResp;

        /**
         * Creates a plain object from a BaccaratSuperHostResp message. Also converts values to other types if specified.
         * @param message BaccaratSuperHostResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratSuperHostResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratSuperHostResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratBetReq. */
    interface IBaccaratBetReq {

        /** BaccaratBetReq BetArea */
        BetArea?: (number|null);

        /** BaccaratBetReq BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a BaccaratBetReq. */
    class BaccaratBetReq implements IBaccaratBetReq {

        /**
         * Constructs a new BaccaratBetReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratBetReq);

        /** BaccaratBetReq BetArea. */
        public BetArea: number;

        /** BaccaratBetReq BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new BaccaratBetReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratBetReq instance
         */
        public static create(properties?: baccarat.IBaccaratBetReq): baccarat.BaccaratBetReq;

        /**
         * Encodes the specified BaccaratBetReq message. Does not implicitly {@link baccarat.BaccaratBetReq.verify|verify} messages.
         * @param message BaccaratBetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratBetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratBetReq message, length delimited. Does not implicitly {@link baccarat.BaccaratBetReq.verify|verify} messages.
         * @param message BaccaratBetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratBetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratBetReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratBetReq;

        /**
         * Decodes a BaccaratBetReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratBetReq;

        /**
         * Verifies a BaccaratBetReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratBetReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratBetReq
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratBetReq;

        /**
         * Creates a plain object from a BaccaratBetReq message. Also converts values to other types if specified.
         * @param message BaccaratBetReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratBetReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratBetReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratBetResp. */
    interface IBaccaratBetResp {

        /** BaccaratBetResp UserID */
        UserID?: (number|Long|null);

        /** BaccaratBetResp BetArea */
        BetArea?: (number|null);

        /** BaccaratBetResp BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a BaccaratBetResp. */
    class BaccaratBetResp implements IBaccaratBetResp {

        /**
         * Constructs a new BaccaratBetResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratBetResp);

        /** BaccaratBetResp UserID. */
        public UserID: (number|Long);

        /** BaccaratBetResp BetArea. */
        public BetArea: number;

        /** BaccaratBetResp BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new BaccaratBetResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratBetResp instance
         */
        public static create(properties?: baccarat.IBaccaratBetResp): baccarat.BaccaratBetResp;

        /**
         * Encodes the specified BaccaratBetResp message. Does not implicitly {@link baccarat.BaccaratBetResp.verify|verify} messages.
         * @param message BaccaratBetResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratBetResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratBetResp message, length delimited. Does not implicitly {@link baccarat.BaccaratBetResp.verify|verify} messages.
         * @param message BaccaratBetResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratBetResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratBetResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratBetResp;

        /**
         * Decodes a BaccaratBetResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratBetResp;

        /**
         * Verifies a BaccaratBetResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratBetResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratBetResp
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratBetResp;

        /**
         * Creates a plain object from a BaccaratBetResp message. Also converts values to other types if specified.
         * @param message BaccaratBetResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratBetResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratBetResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratOverResp. */
    interface IBaccaratOverResp {

        /** BaccaratOverResp AwardArea */
        AwardArea?: (Uint8Array|null);

        /** BaccaratOverResp PlayerCard */
        PlayerCard?: (gamecomm.ICardInfo|null);

        /** BaccaratOverResp BankerCard */
        BankerCard?: (gamecomm.ICardInfo|null);
    }

    /** Represents a BaccaratOverResp. */
    class BaccaratOverResp implements IBaccaratOverResp {

        /**
         * Constructs a new BaccaratOverResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratOverResp);

        /** BaccaratOverResp AwardArea. */
        public AwardArea: Uint8Array;

        /** BaccaratOverResp PlayerCard. */
        public PlayerCard?: (gamecomm.ICardInfo|null);

        /** BaccaratOverResp BankerCard. */
        public BankerCard?: (gamecomm.ICardInfo|null);

        /**
         * Creates a new BaccaratOverResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratOverResp instance
         */
        public static create(properties?: baccarat.IBaccaratOverResp): baccarat.BaccaratOverResp;

        /**
         * Encodes the specified BaccaratOverResp message. Does not implicitly {@link baccarat.BaccaratOverResp.verify|verify} messages.
         * @param message BaccaratOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratOverResp message, length delimited. Does not implicitly {@link baccarat.BaccaratOverResp.verify|verify} messages.
         * @param message BaccaratOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratOverResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratOverResp;

        /**
         * Decodes a BaccaratOverResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratOverResp;

        /**
         * Verifies a BaccaratOverResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratOverResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratOverResp
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratOverResp;

        /**
         * Creates a plain object from a BaccaratOverResp message. Also converts values to other types if specified.
         * @param message BaccaratOverResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratOverResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratOverResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratCheckoutResp. */
    interface IBaccaratCheckoutResp {

        /** BaccaratCheckoutResp MyAcquire */
        MyAcquire?: (number|Long|null);

        /** BaccaratCheckoutResp BankerAcquire */
        BankerAcquire?: (number|Long|null);

        /** BaccaratCheckoutResp PlayerAcquire */
        PlayerAcquire?: (number|Long|null);

        /** BaccaratCheckoutResp DrawAcquire */
        DrawAcquire?: (number|Long|null);
    }

    /** Represents a BaccaratCheckoutResp. */
    class BaccaratCheckoutResp implements IBaccaratCheckoutResp {

        /**
         * Constructs a new BaccaratCheckoutResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratCheckoutResp);

        /** BaccaratCheckoutResp MyAcquire. */
        public MyAcquire: (number|Long);

        /** BaccaratCheckoutResp BankerAcquire. */
        public BankerAcquire: (number|Long);

        /** BaccaratCheckoutResp PlayerAcquire. */
        public PlayerAcquire: (number|Long);

        /** BaccaratCheckoutResp DrawAcquire. */
        public DrawAcquire: (number|Long);

        /**
         * Creates a new BaccaratCheckoutResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratCheckoutResp instance
         */
        public static create(properties?: baccarat.IBaccaratCheckoutResp): baccarat.BaccaratCheckoutResp;

        /**
         * Encodes the specified BaccaratCheckoutResp message. Does not implicitly {@link baccarat.BaccaratCheckoutResp.verify|verify} messages.
         * @param message BaccaratCheckoutResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratCheckoutResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratCheckoutResp message, length delimited. Does not implicitly {@link baccarat.BaccaratCheckoutResp.verify|verify} messages.
         * @param message BaccaratCheckoutResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratCheckoutResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratCheckoutResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratCheckoutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratCheckoutResp;

        /**
         * Decodes a BaccaratCheckoutResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratCheckoutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratCheckoutResp;

        /**
         * Verifies a BaccaratCheckoutResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratCheckoutResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratCheckoutResp
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratCheckoutResp;

        /**
         * Creates a plain object from a BaccaratCheckoutResp message. Also converts values to other types if specified.
         * @param message BaccaratCheckoutResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratCheckoutResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratCheckoutResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace gamecomm. */
export namespace gamecomm {

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo UserID */
        UserID?: (number|Long|null);

        /** PlayerInfo Name */
        Name?: (string|null);

        /** PlayerInfo Age */
        Age?: (number|null);

        /** PlayerInfo Sex */
        Sex?: (number|null);

        /** PlayerInfo Gold */
        Gold?: (number|Long|null);

        /** PlayerInfo Level */
        Level?: (number|null);

        /** PlayerInfo Account */
        Account?: (string|null);

        /** PlayerInfo Sate */
        Sate?: (number|null);

        /** PlayerInfo PlatformID */
        PlatformID?: (number|null);

        /** PlayerInfo RoomNum */
        RoomNum?: (number|null);

        /** PlayerInfo GameID */
        GameID?: (number|null);

        /** PlayerInfo TableID */
        TableID?: (number|null);

        /** PlayerInfo ChairID */
        ChairID?: (number|null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IPlayerInfo);

        /** PlayerInfo UserID. */
        public UserID: (number|Long);

        /** PlayerInfo Name. */
        public Name: string;

        /** PlayerInfo Age. */
        public Age: number;

        /** PlayerInfo Sex. */
        public Sex: number;

        /** PlayerInfo Gold. */
        public Gold: (number|Long);

        /** PlayerInfo Level. */
        public Level: number;

        /** PlayerInfo Account. */
        public Account: string;

        /** PlayerInfo Sate. */
        public Sate: number;

        /** PlayerInfo PlatformID. */
        public PlatformID: number;

        /** PlayerInfo RoomNum. */
        public RoomNum: number;

        /** PlayerInfo GameID. */
        public GameID: number;

        /** PlayerInfo TableID. */
        public TableID: number;

        /** PlayerInfo ChairID. */
        public ChairID: number;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfo instance
         */
        public static create(properties?: gamecomm.IPlayerInfo): gamecomm.PlayerInfo;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link gamecomm.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link gamecomm.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.PlayerInfo;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.PlayerInfo;

        /**
         * Verifies a PlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.PlayerInfo;

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @param message PlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.PlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CardInfo. */
    interface ICardInfo {

        /** CardInfo Cards */
        Cards?: (Uint8Array|null);

        /** CardInfo CardType */
        CardType?: (number|null);

        /** CardInfo CardValue */
        CardValue?: (number|null);
    }

    /** Represents a CardInfo. */
    class CardInfo implements ICardInfo {

        /**
         * Constructs a new CardInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.ICardInfo);

        /** CardInfo Cards. */
        public Cards: Uint8Array;

        /** CardInfo CardType. */
        public CardType: number;

        /** CardInfo CardValue. */
        public CardValue: number;

        /**
         * Creates a new CardInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardInfo instance
         */
        public static create(properties?: gamecomm.ICardInfo): gamecomm.CardInfo;

        /**
         * Encodes the specified CardInfo message. Does not implicitly {@link gamecomm.CardInfo.verify|verify} messages.
         * @param message CardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.ICardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CardInfo message, length delimited. Does not implicitly {@link gamecomm.CardInfo.verify|verify} messages.
         * @param message CardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.ICardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CardInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.CardInfo;

        /**
         * Decodes a CardInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.CardInfo;

        /**
         * Verifies a CardInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CardInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CardInfo
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.CardInfo;

        /**
         * Creates a plain object from a CardInfo message. Also converts values to other types if specified.
         * @param message CardInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.CardInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CardInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TimeInfo. */
    interface ITimeInfo {

        /** TimeInfo TimeStamp */
        TimeStamp?: (number|Long|null);

        /** TimeInfo WaitTime */
        WaitTime?: (number|null);

        /** TimeInfo OutTime */
        OutTime?: (number|null);

        /** TimeInfo TotalTime */
        TotalTime?: (number|null);
    }

    /** Represents a TimeInfo. */
    class TimeInfo implements ITimeInfo {

        /**
         * Constructs a new TimeInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.ITimeInfo);

        /** TimeInfo TimeStamp. */
        public TimeStamp: (number|Long);

        /** TimeInfo WaitTime. */
        public WaitTime: number;

        /** TimeInfo OutTime. */
        public OutTime: number;

        /** TimeInfo TotalTime. */
        public TotalTime: number;

        /**
         * Creates a new TimeInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TimeInfo instance
         */
        public static create(properties?: gamecomm.ITimeInfo): gamecomm.TimeInfo;

        /**
         * Encodes the specified TimeInfo message. Does not implicitly {@link gamecomm.TimeInfo.verify|verify} messages.
         * @param message TimeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.ITimeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TimeInfo message, length delimited. Does not implicitly {@link gamecomm.TimeInfo.verify|verify} messages.
         * @param message TimeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.ITimeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TimeInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TimeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.TimeInfo;

        /**
         * Decodes a TimeInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TimeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.TimeInfo;

        /**
         * Verifies a TimeInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TimeInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TimeInfo
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.TimeInfo;

        /**
         * Creates a plain object from a TimeInfo message. Also converts values to other types if specified.
         * @param message TimeInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.TimeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TimeInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AreaInfo. */
    interface IAreaInfo {

        /** AreaInfo ID */
        ID?: (number|null);

        /** AreaInfo MyGold */
        MyGold?: (number|Long|null);

        /** AreaInfo TotalGold */
        TotalGold?: (number|Long|null);

        /** AreaInfo AcquireGold */
        AcquireGold?: (number|Long|null);
    }

    /** Represents an AreaInfo. */
    class AreaInfo implements IAreaInfo {

        /**
         * Constructs a new AreaInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IAreaInfo);

        /** AreaInfo ID. */
        public ID: number;

        /** AreaInfo MyGold. */
        public MyGold: (number|Long);

        /** AreaInfo TotalGold. */
        public TotalGold: (number|Long);

        /** AreaInfo AcquireGold. */
        public AcquireGold: (number|Long);

        /**
         * Creates a new AreaInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AreaInfo instance
         */
        public static create(properties?: gamecomm.IAreaInfo): gamecomm.AreaInfo;

        /**
         * Encodes the specified AreaInfo message. Does not implicitly {@link gamecomm.AreaInfo.verify|verify} messages.
         * @param message AreaInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IAreaInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AreaInfo message, length delimited. Does not implicitly {@link gamecomm.AreaInfo.verify|verify} messages.
         * @param message AreaInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IAreaInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AreaInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AreaInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.AreaInfo;

        /**
         * Decodes an AreaInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AreaInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.AreaInfo;

        /**
         * Verifies an AreaInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AreaInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AreaInfo
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.AreaInfo;

        /**
         * Creates a plain object from an AreaInfo message. Also converts values to other types if specified.
         * @param message AreaInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.AreaInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AreaInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerListInfo. */
    interface IPlayerListInfo {

        /** PlayerListInfo AllInfos */
        AllInfos?: (gamecomm.IPlayerInfo[]|null);
    }

    /** Represents a PlayerListInfo. */
    class PlayerListInfo implements IPlayerListInfo {

        /**
         * Constructs a new PlayerListInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IPlayerListInfo);

        /** PlayerListInfo AllInfos. */
        public AllInfos: gamecomm.IPlayerInfo[];

        /**
         * Creates a new PlayerListInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerListInfo instance
         */
        public static create(properties?: gamecomm.IPlayerListInfo): gamecomm.PlayerListInfo;

        /**
         * Encodes the specified PlayerListInfo message. Does not implicitly {@link gamecomm.PlayerListInfo.verify|verify} messages.
         * @param message PlayerListInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IPlayerListInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerListInfo message, length delimited. Does not implicitly {@link gamecomm.PlayerListInfo.verify|verify} messages.
         * @param message PlayerListInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IPlayerListInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerListInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerListInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.PlayerListInfo;

        /**
         * Decodes a PlayerListInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerListInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.PlayerListInfo;

        /**
         * Verifies a PlayerListInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerListInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerListInfo
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.PlayerListInfo;

        /**
         * Creates a plain object from a PlayerListInfo message. Also converts values to other types if specified.
         * @param message PlayerListInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.PlayerListInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerListInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerRecord. */
    interface IPlayerRecord {

        /** PlayerRecord User */
        User?: (gamecomm.IPlayerInfo|null);

        /** PlayerRecord Twice */
        Twice?: (number|null);

        /** PlayerRecord Ranking */
        Ranking?: (number|null);

        /** PlayerRecord Bankroll */
        Bankroll?: (number|Long|null);

        /** PlayerRecord WinLos */
        WinLos?: (number|Long|null);
    }

    /** Represents a PlayerRecord. */
    class PlayerRecord implements IPlayerRecord {

        /**
         * Constructs a new PlayerRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IPlayerRecord);

        /** PlayerRecord User. */
        public User?: (gamecomm.IPlayerInfo|null);

        /** PlayerRecord Twice. */
        public Twice: number;

        /** PlayerRecord Ranking. */
        public Ranking: number;

        /** PlayerRecord Bankroll. */
        public Bankroll: (number|Long);

        /** PlayerRecord WinLos. */
        public WinLos: (number|Long);

        /**
         * Creates a new PlayerRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerRecord instance
         */
        public static create(properties?: gamecomm.IPlayerRecord): gamecomm.PlayerRecord;

        /**
         * Encodes the specified PlayerRecord message. Does not implicitly {@link gamecomm.PlayerRecord.verify|verify} messages.
         * @param message PlayerRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IPlayerRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerRecord message, length delimited. Does not implicitly {@link gamecomm.PlayerRecord.verify|verify} messages.
         * @param message PlayerRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IPlayerRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.PlayerRecord;

        /**
         * Decodes a PlayerRecord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.PlayerRecord;

        /**
         * Verifies a PlayerRecord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerRecord
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.PlayerRecord;

        /**
         * Creates a plain object from a PlayerRecord message. Also converts values to other types if specified.
         * @param message PlayerRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.PlayerRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameRecord. */
    interface IGameRecord {

        /** GameRecord card */
        card?: (gamecomm.ICardInfo|null);

        /** GameRecord isWon */
        isWon?: (boolean|null);
    }

    /** Represents a GameRecord. */
    class GameRecord implements IGameRecord {

        /**
         * Constructs a new GameRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameRecord);

        /** GameRecord card. */
        public card?: (gamecomm.ICardInfo|null);

        /** GameRecord isWon. */
        public isWon: boolean;

        /**
         * Creates a new GameRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameRecord instance
         */
        public static create(properties?: gamecomm.IGameRecord): gamecomm.GameRecord;

        /**
         * Encodes the specified GameRecord message. Does not implicitly {@link gamecomm.GameRecord.verify|verify} messages.
         * @param message GameRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameRecord message, length delimited. Does not implicitly {@link gamecomm.GameRecord.verify|verify} messages.
         * @param message GameRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameRecord;

        /**
         * Decodes a GameRecord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameRecord;

        /**
         * Verifies a GameRecord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameRecord
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameRecord;

        /**
         * Creates a plain object from a GameRecord message. Also converts values to other types if specified.
         * @param message GameRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameRecordList. */
    interface IGameRecordList {

        /** GameRecordList list */
        list?: (gamecomm.IGameRecord[]|null);
    }

    /** Represents a GameRecordList. */
    class GameRecordList implements IGameRecordList {

        /**
         * Constructs a new GameRecordList.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameRecordList);

        /** GameRecordList list. */
        public list: gamecomm.IGameRecord[];

        /**
         * Creates a new GameRecordList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameRecordList instance
         */
        public static create(properties?: gamecomm.IGameRecordList): gamecomm.GameRecordList;

        /**
         * Encodes the specified GameRecordList message. Does not implicitly {@link gamecomm.GameRecordList.verify|verify} messages.
         * @param message GameRecordList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameRecordList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameRecordList message, length delimited. Does not implicitly {@link gamecomm.GameRecordList.verify|verify} messages.
         * @param message GameRecordList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameRecordList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameRecordList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameRecordList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameRecordList;

        /**
         * Decodes a GameRecordList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameRecordList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameRecordList;

        /**
         * Verifies a GameRecordList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameRecordList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameRecordList
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameRecordList;

        /**
         * Creates a plain object from a GameRecordList message. Also converts values to other types if specified.
         * @param message GameRecordList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameRecordList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameRecordList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqEnterGame. */
    interface IReqEnterGame {

        /** ReqEnterGame GameID */
        GameID?: (number|null);
    }

    /** Represents a ReqEnterGame. */
    class ReqEnterGame implements IReqEnterGame {

        /**
         * Constructs a new ReqEnterGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IReqEnterGame);

        /** ReqEnterGame GameID. */
        public GameID: number;

        /**
         * Creates a new ReqEnterGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqEnterGame instance
         */
        public static create(properties?: gamecomm.IReqEnterGame): gamecomm.ReqEnterGame;

        /**
         * Encodes the specified ReqEnterGame message. Does not implicitly {@link gamecomm.ReqEnterGame.verify|verify} messages.
         * @param message ReqEnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IReqEnterGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqEnterGame message, length delimited. Does not implicitly {@link gamecomm.ReqEnterGame.verify|verify} messages.
         * @param message ReqEnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IReqEnterGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqEnterGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.ReqEnterGame;

        /**
         * Decodes a ReqEnterGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.ReqEnterGame;

        /**
         * Verifies a ReqEnterGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqEnterGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqEnterGame
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.ReqEnterGame;

        /**
         * Creates a plain object from a ReqEnterGame message. Also converts values to other types if specified.
         * @param message ReqEnterGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.ReqEnterGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqEnterGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqExitGame. */
    interface IReqExitGame {

        /** ReqExitGame GameID */
        GameID?: (number|null);
    }

    /** Represents a ReqExitGame. */
    class ReqExitGame implements IReqExitGame {

        /**
         * Constructs a new ReqExitGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IReqExitGame);

        /** ReqExitGame GameID. */
        public GameID: number;

        /**
         * Creates a new ReqExitGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqExitGame instance
         */
        public static create(properties?: gamecomm.IReqExitGame): gamecomm.ReqExitGame;

        /**
         * Encodes the specified ReqExitGame message. Does not implicitly {@link gamecomm.ReqExitGame.verify|verify} messages.
         * @param message ReqExitGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IReqExitGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqExitGame message, length delimited. Does not implicitly {@link gamecomm.ReqExitGame.verify|verify} messages.
         * @param message ReqExitGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IReqExitGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqExitGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqExitGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.ReqExitGame;

        /**
         * Decodes a ReqExitGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqExitGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.ReqExitGame;

        /**
         * Verifies a ReqExitGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqExitGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqExitGame
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.ReqExitGame;

        /**
         * Creates a plain object from a ReqExitGame message. Also converts values to other types if specified.
         * @param message ReqExitGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.ReqExitGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqExitGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqChangeTable. */
    interface IReqChangeTable {

        /** ReqChangeTable GameID */
        GameID?: (number|null);
    }

    /** Represents a ReqChangeTable. */
    class ReqChangeTable implements IReqChangeTable {

        /**
         * Constructs a new ReqChangeTable.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IReqChangeTable);

        /** ReqChangeTable GameID. */
        public GameID: number;

        /**
         * Creates a new ReqChangeTable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqChangeTable instance
         */
        public static create(properties?: gamecomm.IReqChangeTable): gamecomm.ReqChangeTable;

        /**
         * Encodes the specified ReqChangeTable message. Does not implicitly {@link gamecomm.ReqChangeTable.verify|verify} messages.
         * @param message ReqChangeTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IReqChangeTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqChangeTable message, length delimited. Does not implicitly {@link gamecomm.ReqChangeTable.verify|verify} messages.
         * @param message ReqChangeTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IReqChangeTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqChangeTable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqChangeTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.ReqChangeTable;

        /**
         * Decodes a ReqChangeTable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqChangeTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.ReqChangeTable;

        /**
         * Verifies a ReqChangeTable message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqChangeTable message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqChangeTable
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.ReqChangeTable;

        /**
         * Creates a plain object from a ReqChangeTable message. Also converts values to other types if specified.
         * @param message ReqChangeTable
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.ReqChangeTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqChangeTable to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BeOut. */
    interface IBeOut {

        /** BeOut UserID */
        UserID?: (number|Long|null);

        /** BeOut GameID */
        GameID?: (number|null);

        /** BeOut Code */
        Code?: (number|null);

        /** BeOut Hints */
        Hints?: (string|null);
    }

    /** Represents a BeOut. */
    class BeOut implements IBeOut {

        /**
         * Constructs a new BeOut.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IBeOut);

        /** BeOut UserID. */
        public UserID: (number|Long);

        /** BeOut GameID. */
        public GameID: number;

        /** BeOut Code. */
        public Code: number;

        /** BeOut Hints. */
        public Hints: string;

        /**
         * Creates a new BeOut instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BeOut instance
         */
        public static create(properties?: gamecomm.IBeOut): gamecomm.BeOut;

        /**
         * Encodes the specified BeOut message. Does not implicitly {@link gamecomm.BeOut.verify|verify} messages.
         * @param message BeOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IBeOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BeOut message, length delimited. Does not implicitly {@link gamecomm.BeOut.verify|verify} messages.
         * @param message BeOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IBeOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BeOut message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BeOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.BeOut;

        /**
         * Decodes a BeOut message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BeOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.BeOut;

        /**
         * Verifies a BeOut message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BeOut message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BeOut
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.BeOut;

        /**
         * Creates a plain object from a BeOut message. Also converts values to other types if specified.
         * @param message BeOut
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.BeOut, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BeOut to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NotifyChangeGold. */
    interface INotifyChangeGold {

        /** NotifyChangeGold UserID */
        UserID?: (number|Long|null);

        /** NotifyChangeGold Gold */
        Gold?: (number|Long|null);

        /** NotifyChangeGold AlterGold */
        AlterGold?: (number|Long|null);

        /** NotifyChangeGold Code */
        Code?: (number|null);

        /** NotifyChangeGold Reason */
        Reason?: (string|null);
    }

    /** Represents a NotifyChangeGold. */
    class NotifyChangeGold implements INotifyChangeGold {

        /**
         * Constructs a new NotifyChangeGold.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.INotifyChangeGold);

        /** NotifyChangeGold UserID. */
        public UserID: (number|Long);

        /** NotifyChangeGold Gold. */
        public Gold: (number|Long);

        /** NotifyChangeGold AlterGold. */
        public AlterGold: (number|Long);

        /** NotifyChangeGold Code. */
        public Code: number;

        /** NotifyChangeGold Reason. */
        public Reason: string;

        /**
         * Creates a new NotifyChangeGold instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifyChangeGold instance
         */
        public static create(properties?: gamecomm.INotifyChangeGold): gamecomm.NotifyChangeGold;

        /**
         * Encodes the specified NotifyChangeGold message. Does not implicitly {@link gamecomm.NotifyChangeGold.verify|verify} messages.
         * @param message NotifyChangeGold message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.INotifyChangeGold, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotifyChangeGold message, length delimited. Does not implicitly {@link gamecomm.NotifyChangeGold.verify|verify} messages.
         * @param message NotifyChangeGold message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.INotifyChangeGold, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifyChangeGold message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyChangeGold
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.NotifyChangeGold;

        /**
         * Decodes a NotifyChangeGold message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyChangeGold
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.NotifyChangeGold;

        /**
         * Verifies a NotifyChangeGold message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotifyChangeGold message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotifyChangeGold
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.NotifyChangeGold;

        /**
         * Creates a plain object from a NotifyChangeGold message. Also converts values to other types if specified.
         * @param message NotifyChangeGold
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.NotifyChangeGold, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotifyChangeGold to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
