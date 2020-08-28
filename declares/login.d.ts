import * as $protobuf from "protobufjs";
/** Namespace login. */
export namespace login {

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo UserID */
        UserID?: (number|Long|null);

        /** UserInfo Name */
        Name?: (string|null);

        /** UserInfo Accounts */
        Accounts?: (string|null);

        /** UserInfo Password */
        Password?: (string|null);

        /** UserInfo FaceID */
        FaceID?: (number|null);

        /** UserInfo Gender */
        Gender?: (number|null);

        /** UserInfo Age */
        Age?: (number|null);

        /** UserInfo VIP */
        VIP?: (number|null);

        /** UserInfo Level */
        Level?: (number|null);

        /** UserInfo Gold */
        Gold?: (number|Long|null);

        /** UserInfo PassPortID */
        PassPortID?: (string|null);

        /** UserInfo RealName */
        RealName?: (string|null);

        /** UserInfo PhoneNum */
        PhoneNum?: (string|null);

        /** UserInfo Email */
        Email?: (string|null);

        /** UserInfo Address */
        Address?: (string|null);

        /** UserInfo Identity */
        Identity?: (string|null);

        /** UserInfo AgentID */
        AgentID?: (number|null);

        /** UserInfo SpreaderGameID */
        SpreaderGameID?: (number|null);

        /** UserInfo ClientAddr */
        ClientAddr?: (string|null);

        /** UserInfo MachineCode */
        MachineCode?: (string|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IUserInfo);

        /** UserInfo UserID. */
        public UserID: (number|Long);

        /** UserInfo Name. */
        public Name: string;

        /** UserInfo Accounts. */
        public Accounts: string;

        /** UserInfo Password. */
        public Password: string;

        /** UserInfo FaceID. */
        public FaceID: number;

        /** UserInfo Gender. */
        public Gender: number;

        /** UserInfo Age. */
        public Age: number;

        /** UserInfo VIP. */
        public VIP: number;

        /** UserInfo Level. */
        public Level: number;

        /** UserInfo Gold. */
        public Gold: (number|Long);

        /** UserInfo PassPortID. */
        public PassPortID: string;

        /** UserInfo RealName. */
        public RealName: string;

        /** UserInfo PhoneNum. */
        public PhoneNum: string;

        /** UserInfo Email. */
        public Email: string;

        /** UserInfo Address. */
        public Address: string;

        /** UserInfo Identity. */
        public Identity: string;

        /** UserInfo AgentID. */
        public AgentID: number;

        /** UserInfo SpreaderGameID. */
        public SpreaderGameID: number;

        /** UserInfo ClientAddr. */
        public ClientAddr: string;

        /** UserInfo MachineCode. */
        public MachineCode: string;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfo instance
         */
        public static create(properties?: login.IUserInfo): login.UserInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link login.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link login.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.UserInfo;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.UserInfo;

        /**
         * Verifies a UserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfo
         */
        public static fromObject(object: { [k: string]: any }): login.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomInfo. */
    interface IRoomInfo {

        /** RoomInfo RoomNum */
        RoomNum?: (number|null);

        /** RoomInfo RoomKey */
        RoomKey?: (string|null);

        /** RoomInfo RoomName */
        RoomName?: (string|null);

        /** RoomInfo Games */
        Games?: (login.IGameList|null);
    }

    /** Represents a RoomInfo. */
    class RoomInfo implements IRoomInfo {

        /**
         * Constructs a new RoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IRoomInfo);

        /** RoomInfo RoomNum. */
        public RoomNum: number;

        /** RoomInfo RoomKey. */
        public RoomKey: string;

        /** RoomInfo RoomName. */
        public RoomName: string;

        /** RoomInfo Games. */
        public Games?: (login.IGameList|null);

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomInfo instance
         */
        public static create(properties?: login.IRoomInfo): login.RoomInfo;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link login.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link login.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.RoomInfo;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.RoomInfo;

        /**
         * Verifies a RoomInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomInfo
         */
        public static fromObject(object: { [k: string]: any }): login.RoomInfo;

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @param message RoomInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameInfo. */
    interface IGameInfo {

        /** GameInfo Type */
        Type?: (number|null);

        /** GameInfo KindID */
        KindID?: (number|null);

        /** GameInfo Level */
        Level?: (number|null);

        /** GameInfo Name */
        Name?: (string|null);

        /** GameInfo EnterScore */
        EnterScore?: (number|null);

        /** GameInfo LessScore */
        LessScore?: (number|null);

        /** GameInfo MaxOnline */
        MaxOnline?: (number|null);

        /** GameInfo State */
        State?: (number|null);

        /** GameInfo Commission */
        Commission?: (number|null);
    }

    /** Represents a GameInfo. */
    class GameInfo implements IGameInfo {

        /**
         * Constructs a new GameInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IGameInfo);

        /** GameInfo Type. */
        public Type: number;

        /** GameInfo KindID. */
        public KindID: number;

        /** GameInfo Level. */
        public Level: number;

        /** GameInfo Name. */
        public Name: string;

        /** GameInfo EnterScore. */
        public EnterScore: number;

        /** GameInfo LessScore. */
        public LessScore: number;

        /** GameInfo MaxOnline. */
        public MaxOnline: number;

        /** GameInfo State. */
        public State: number;

        /** GameInfo Commission. */
        public Commission: number;

        /**
         * Creates a new GameInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameInfo instance
         */
        public static create(properties?: login.IGameInfo): login.GameInfo;

        /**
         * Encodes the specified GameInfo message. Does not implicitly {@link login.GameInfo.verify|verify} messages.
         * @param message GameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link login.GameInfo.verify|verify} messages.
         * @param message GameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.GameInfo;

        /**
         * Decodes a GameInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.GameInfo;

        /**
         * Verifies a GameInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameInfo
         */
        public static fromObject(object: { [k: string]: any }): login.GameInfo;

        /**
         * Creates a plain object from a GameInfo message. Also converts values to other types if specified.
         * @param message GameInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.GameInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameItem. */
    interface IGameItem {

        /** GameItem ID */
        ID?: (number|null);

        /** GameItem Info */
        Info?: (login.IGameInfo|null);
    }

    /** Represents a GameItem. */
    class GameItem implements IGameItem {

        /**
         * Constructs a new GameItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IGameItem);

        /** GameItem ID. */
        public ID: number;

        /** GameItem Info. */
        public Info?: (login.IGameInfo|null);

        /**
         * Creates a new GameItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameItem instance
         */
        public static create(properties?: login.IGameItem): login.GameItem;

        /**
         * Encodes the specified GameItem message. Does not implicitly {@link login.GameItem.verify|verify} messages.
         * @param message GameItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IGameItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameItem message, length delimited. Does not implicitly {@link login.GameItem.verify|verify} messages.
         * @param message GameItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IGameItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.GameItem;

        /**
         * Decodes a GameItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.GameItem;

        /**
         * Verifies a GameItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameItem
         */
        public static fromObject(object: { [k: string]: any }): login.GameItem;

        /**
         * Creates a plain object from a GameItem message. Also converts values to other types if specified.
         * @param message GameItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.GameItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MasterInfo. */
    interface IMasterInfo {

        /** MasterInfo UserInfo */
        UserInfo?: (login.IUserInfo|null);

        /** MasterInfo RoomsInfo */
        RoomsInfo?: (login.IRoomInfo[]|null);

        /** MasterInfo Tasks */
        Tasks?: (login.ITaskList|null);
    }

    /** Represents a MasterInfo. */
    class MasterInfo implements IMasterInfo {

        /**
         * Constructs a new MasterInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IMasterInfo);

        /** MasterInfo UserInfo. */
        public UserInfo?: (login.IUserInfo|null);

        /** MasterInfo RoomsInfo. */
        public RoomsInfo: login.IRoomInfo[];

        /** MasterInfo Tasks. */
        public Tasks?: (login.ITaskList|null);

        /**
         * Creates a new MasterInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MasterInfo instance
         */
        public static create(properties?: login.IMasterInfo): login.MasterInfo;

        /**
         * Encodes the specified MasterInfo message. Does not implicitly {@link login.MasterInfo.verify|verify} messages.
         * @param message MasterInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IMasterInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MasterInfo message, length delimited. Does not implicitly {@link login.MasterInfo.verify|verify} messages.
         * @param message MasterInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IMasterInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MasterInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MasterInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.MasterInfo;

        /**
         * Decodes a MasterInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MasterInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.MasterInfo;

        /**
         * Verifies a MasterInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MasterInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MasterInfo
         */
        public static fromObject(object: { [k: string]: any }): login.MasterInfo;

        /**
         * Creates a plain object from a MasterInfo message. Also converts values to other types if specified.
         * @param message MasterInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.MasterInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MasterInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TaskItem. */
    interface ITaskItem {

        /** TaskItem TaskID */
        TaskID?: (number|null);

        /** TaskItem Twice */
        Twice?: (number|null);

        /** TaskItem Hints */
        Hints?: (string|null);
    }

    /** Represents a TaskItem. */
    class TaskItem implements ITaskItem {

        /**
         * Constructs a new TaskItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.ITaskItem);

        /** TaskItem TaskID. */
        public TaskID: number;

        /** TaskItem Twice. */
        public Twice: number;

        /** TaskItem Hints. */
        public Hints: string;

        /**
         * Creates a new TaskItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskItem instance
         */
        public static create(properties?: login.ITaskItem): login.TaskItem;

        /**
         * Encodes the specified TaskItem message. Does not implicitly {@link login.TaskItem.verify|verify} messages.
         * @param message TaskItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.ITaskItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TaskItem message, length delimited. Does not implicitly {@link login.TaskItem.verify|verify} messages.
         * @param message TaskItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.ITaskItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.TaskItem;

        /**
         * Decodes a TaskItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaskItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.TaskItem;

        /**
         * Verifies a TaskItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TaskItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskItem
         */
        public static fromObject(object: { [k: string]: any }): login.TaskItem;

        /**
         * Creates a plain object from a TaskItem message. Also converts values to other types if specified.
         * @param message TaskItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.TaskItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TaskList. */
    interface ITaskList {

        /** TaskList Task */
        Task?: (login.ITaskItem[]|null);
    }

    /** Represents a TaskList. */
    class TaskList implements ITaskList {

        /**
         * Constructs a new TaskList.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.ITaskList);

        /** TaskList Task. */
        public Task: login.ITaskItem[];

        /**
         * Creates a new TaskList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskList instance
         */
        public static create(properties?: login.ITaskList): login.TaskList;

        /**
         * Encodes the specified TaskList message. Does not implicitly {@link login.TaskList.verify|verify} messages.
         * @param message TaskList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.ITaskList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TaskList message, length delimited. Does not implicitly {@link login.TaskList.verify|verify} messages.
         * @param message TaskList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.ITaskList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.TaskList;

        /**
         * Decodes a TaskList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaskList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.TaskList;

        /**
         * Verifies a TaskList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TaskList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskList
         */
        public static fromObject(object: { [k: string]: any }): login.TaskList;

        /**
         * Creates a plain object from a TaskList message. Also converts values to other types if specified.
         * @param message TaskList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.TaskList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameList. */
    interface IGameList {

        /** GameList Items */
        Items?: (login.IGameItem[]|null);
    }

    /** Represents a GameList. */
    class GameList implements IGameList {

        /**
         * Constructs a new GameList.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IGameList);

        /** GameList Items. */
        public Items: login.IGameItem[];

        /**
         * Creates a new GameList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameList instance
         */
        public static create(properties?: login.IGameList): login.GameList;

        /**
         * Encodes the specified GameList message. Does not implicitly {@link login.GameList.verify|verify} messages.
         * @param message GameList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IGameList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameList message, length delimited. Does not implicitly {@link login.GameList.verify|verify} messages.
         * @param message GameList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IGameList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.GameList;

        /**
         * Decodes a GameList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.GameList;

        /**
         * Verifies a GameList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameList
         */
        public static fromObject(object: { [k: string]: any }): login.GameList;

        /**
         * Creates a plain object from a GameList message. Also converts values to other types if specified.
         * @param message GameList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.GameList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RegisterReq. */
    interface IRegisterReq {

        /** RegisterReq Name */
        Name?: (string|null);

        /** RegisterReq Password */
        Password?: (string|null);

        /** RegisterReq SecurityCode */
        SecurityCode?: (string|null);

        /** RegisterReq MachineCode */
        MachineCode?: (string|null);

        /** RegisterReq InvitationCode */
        InvitationCode?: (string|null);
    }

    /** Represents a RegisterReq. */
    class RegisterReq implements IRegisterReq {

        /**
         * Constructs a new RegisterReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IRegisterReq);

        /** RegisterReq Name. */
        public Name: string;

        /** RegisterReq Password. */
        public Password: string;

        /** RegisterReq SecurityCode. */
        public SecurityCode: string;

        /** RegisterReq MachineCode. */
        public MachineCode: string;

        /** RegisterReq InvitationCode. */
        public InvitationCode: string;

        /**
         * Creates a new RegisterReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterReq instance
         */
        public static create(properties?: login.IRegisterReq): login.RegisterReq;

        /**
         * Encodes the specified RegisterReq message. Does not implicitly {@link login.RegisterReq.verify|verify} messages.
         * @param message RegisterReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IRegisterReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterReq message, length delimited. Does not implicitly {@link login.RegisterReq.verify|verify} messages.
         * @param message RegisterReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IRegisterReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.RegisterReq;

        /**
         * Decodes a RegisterReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.RegisterReq;

        /**
         * Verifies a RegisterReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterReq
         */
        public static fromObject(object: { [k: string]: any }): login.RegisterReq;

        /**
         * Creates a plain object from a RegisterReq message. Also converts values to other types if specified.
         * @param message RegisterReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.RegisterReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginReq. */
    interface ILoginReq {

        /** LoginReq Account */
        Account?: (string|null);

        /** LoginReq Password */
        Password?: (string|null);

        /** LoginReq SecurityCode */
        SecurityCode?: (string|null);

        /** LoginReq MachineCode */
        MachineCode?: (string|null);
    }

    /** Represents a LoginReq. */
    class LoginReq implements ILoginReq {

        /**
         * Constructs a new LoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.ILoginReq);

        /** LoginReq Account. */
        public Account: string;

        /** LoginReq Password. */
        public Password: string;

        /** LoginReq SecurityCode. */
        public SecurityCode: string;

        /** LoginReq MachineCode. */
        public MachineCode: string;

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginReq instance
         */
        public static create(properties?: login.ILoginReq): login.LoginReq;

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link login.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link login.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.LoginReq;

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.LoginReq;

        /**
         * Verifies a LoginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginReq
         */
        public static fromObject(object: { [k: string]: any }): login.LoginReq;

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @param message LoginReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.LoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterRoomReq. */
    interface IEnterRoomReq {

        /** EnterRoomReq RoomNum */
        RoomNum?: (number|null);

        /** EnterRoomReq RoomKey */
        RoomKey?: (string|null);
    }

    /** Represents an EnterRoomReq. */
    class EnterRoomReq implements IEnterRoomReq {

        /**
         * Constructs a new EnterRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IEnterRoomReq);

        /** EnterRoomReq RoomNum. */
        public RoomNum: number;

        /** EnterRoomReq RoomKey. */
        public RoomKey: string;

        /**
         * Creates a new EnterRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterRoomReq instance
         */
        public static create(properties?: login.IEnterRoomReq): login.EnterRoomReq;

        /**
         * Encodes the specified EnterRoomReq message. Does not implicitly {@link login.EnterRoomReq.verify|verify} messages.
         * @param message EnterRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IEnterRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterRoomReq message, length delimited. Does not implicitly {@link login.EnterRoomReq.verify|verify} messages.
         * @param message EnterRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IEnterRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.EnterRoomReq;

        /**
         * Decodes an EnterRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.EnterRoomReq;

        /**
         * Verifies an EnterRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterRoomReq
         */
        public static fromObject(object: { [k: string]: any }): login.EnterRoomReq;

        /**
         * Creates a plain object from an EnterRoomReq message. Also converts values to other types if specified.
         * @param message EnterRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.EnterRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResultResp. */
    interface IResultResp {

        /** ResultResp State */
        State?: (number|null);

        /** ResultResp Hints */
        Hints?: (string|null);
    }

    /** Represents a ResultResp. */
    class ResultResp implements IResultResp {

        /**
         * Constructs a new ResultResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IResultResp);

        /** ResultResp State. */
        public State: number;

        /** ResultResp Hints. */
        public Hints: string;

        /**
         * Creates a new ResultResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResultResp instance
         */
        public static create(properties?: login.IResultResp): login.ResultResp;

        /**
         * Encodes the specified ResultResp message. Does not implicitly {@link login.ResultResp.verify|verify} messages.
         * @param message ResultResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IResultResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResultResp message, length delimited. Does not implicitly {@link login.ResultResp.verify|verify} messages.
         * @param message ResultResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IResultResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResultResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResultResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.ResultResp;

        /**
         * Decodes a ResultResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResultResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.ResultResp;

        /**
         * Verifies a ResultResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResultResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResultResp
         */
        public static fromObject(object: { [k: string]: any }): login.ResultResp;

        /**
         * Creates a plain object from a ResultResp message. Also converts values to other types if specified.
         * @param message ResultResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.ResultResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResultResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResultPopResp. */
    interface IResultPopResp {

        /** ResultPopResp Flag */
        Flag?: (number|null);

        /** ResultPopResp Title */
        Title?: (string|null);

        /** ResultPopResp Hints */
        Hints?: (string|null);
    }

    /** Represents a ResultPopResp. */
    class ResultPopResp implements IResultPopResp {

        /**
         * Constructs a new ResultPopResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IResultPopResp);

        /** ResultPopResp Flag. */
        public Flag: number;

        /** ResultPopResp Title. */
        public Title: string;

        /** ResultPopResp Hints. */
        public Hints: string;

        /**
         * Creates a new ResultPopResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResultPopResp instance
         */
        public static create(properties?: login.IResultPopResp): login.ResultPopResp;

        /**
         * Encodes the specified ResultPopResp message. Does not implicitly {@link login.ResultPopResp.verify|verify} messages.
         * @param message ResultPopResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IResultPopResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResultPopResp message, length delimited. Does not implicitly {@link login.ResultPopResp.verify|verify} messages.
         * @param message ResultPopResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IResultPopResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResultPopResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResultPopResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.ResultPopResp;

        /**
         * Decodes a ResultPopResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResultPopResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.ResultPopResp;

        /**
         * Verifies a ResultPopResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResultPopResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResultPopResp
         */
        public static fromObject(object: { [k: string]: any }): login.ResultPopResp;

        /**
         * Creates a plain object from a ResultPopResp message. Also converts values to other types if specified.
         * @param message ResultPopResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.ResultPopResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResultPopResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
