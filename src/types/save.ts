export type GameSaveData = {
    game: Game;
    metadata: Metadata;
};

export type Game = {
    /**
     * The name of the organisation on the save.
     */
    OrganisationName: string;

    /**
     * The seed of the save.
     */
    Seed: number;

    /**
     * The settings of the save.
     */
    Settings: {
        /**
         * Whether the console is enabled.
         */
        ConsoleEnabled: boolean;
    };
};

export type Metadata = {
    /**
     * The date and time when the save was created.
     */
    CreationDate: Date;

    /**
     * The date and time when the save was last played.
     */
    LastPlayedDate: Date;

    /**
     * The version of the game that created the save.
     */
    CreationVersion: string;

    /**
     * The version of the game that last saved the save.
     */
    LastSaveVersion: string;

    /**
     * Whether the tutorial should be played upon loading the save.
     */
    PlayTutorial: boolean;
};

export type Money = {
    /**
     * The amount of money in the ATM for the save.
     */
    OnlineBalance: number;

    /**
     * The networth of the save.
     */
    Networth: number;

    /**
     * The lifetime earnings of the save.
     */
    LifetimeEarnings: number;

    /**
     * The weekly deposit sum of the save.
     */
    WeeklyDepositSum: number;
};

export type DateTimeData = {
    /**
     * The type of data.
     */
    DataType: "DateTimeData";

    /**
     * The version of the data.
     */
    DataVersion: number;

    /**
     * The version of the game.
     */
    GameVersion: string;

    /**
     * The year component of the date.
     */
    Year: number;

    /**
     * The month component of the date (1-12).
     */
    Month: number;

    /**
     * The day component of the date (1-31).
     */
    Day: number;

    /**
     * The hour component of the time (0-23).
     */
    Hour: number;

    /**
     * The minute component of the time (0-59).
     */
    Minute: number;

    /**
     * The second component of the time (0-59).
     */
    Second: number;
};
