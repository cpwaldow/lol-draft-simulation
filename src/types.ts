export type ChampionPageStateType = {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: {
      allytips: string[];
      blurb: string;
      enemytips: string[];
      id: string;
      image: {
        [key: string]: string | number;
      };
      info: {
        [key: string]: number;
      };
      key: string;
      lore: string;
      name: string;
      partype: string;
      passive: {
        [key: string]:
          | string
          | {
              [key: string]: string | number;
            };
      };
      recommended: any[];
      skins: {
        chromas: boolean;
        id: string;
        name: string;
        num: number;
      }[];
      spells: any[];
      stats: {
        [key: string]: number;
      };
      tags: string[];
      title: string;
    };
  };
};
