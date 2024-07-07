export type ProjectType = {
  image: string;
  title: string;
  description: string;
  link: string;
};

export const Projects: ProjectType[] = [
  {
    image: "/figma-design.png",
    title: "TimeTravelExplorer",
    description:
      "専門学校の卒業制作でfigmaを使用したタイムトラベル旅行のモバイルデザインを作成し、優秀作品を受賞しました!",
    link: "https://www.figma.com/proto/ZlfZknZusPPFjYSZiGn7Ai/TimeTripExplorer?page-id=0%3A1&node-id=101-6&viewport=270%2C375%2C0.11&t=DgU2HQe8MCjlH9Qn-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=101%3A6",
  },
  {
    image: "/valorant-wiki.png",
    title: "Valorant Agents",
    description:
      "Next.jsを使用したサイトを作りたいと思い、FPSゲーム「Valorant」のキャラクター紹介サイトを作成しました。カッコイイデザインにこだわりました!",
    link: "https://valorant-wiki-weld.vercel.app/",
  },
  {
    image: "/pokemon-library.png",
    title: "ポケモンライブラリ",
    description:
      "初めてAPIを使用した開発です。初めてAPIからデータを取得する挑戦をしましたが、なんとか形に出来ました!",
    link: "https://pokemon-library-iota.vercel.app/",
  },
  {
    image: "/todo.png",
    title: "ToDoアプリ",
    description:
      "専門学校のReactの授業で始めた作成したToDoアプリです。グラスモーフィズムをデザインに取り入れ、透明感や光沢感を演出しました。",
    link: "https://todo-roan-pi.vercel.app/",
  },
];
