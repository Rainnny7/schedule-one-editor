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
