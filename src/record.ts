export {};

// Record<K, T>

type Prefectures = 'Tokyo' | 'Chiba' | 'Saitama' | 'Shiga';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

// const covid19Japan = {
//   // 各県が共通のCovid19InfectionInfo型の情報を持っている -> Record型を使ってアノテーション
//   Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
//   Chiba: { kanji_name: '千葉', confirmed_cases: 298 },
//   Saitama: { kanji_name: '埼玉', confirmed_cases: 2 },
//   Shiga: { kanji_name: '滋賀', confirmed_cases: true }, // 型を間違えてもエラーにならない
// }

// const covid19Japan: {
//   // かといって全部書くのはあまりに面倒
//   Tokyo: Covid19InfectionInfo;
//   Chiba: Covid19InfectionInfo;
//   Saitama: Covid19InfectionInfo;
//   Shiga: Covid19InfectionInfo;
// } = {
//   // 各県が共通のCovid19InfectionInfo型の情報を持っている -> Record型を使ってアノテーション
//   Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
//   Chiba: { kanji_name: '千葉', confirmed_cases: 298 },
//   Saitama: { kanji_name: '埼玉', confirmed_cases: 2 },
//   Shiga: { kanji_name: '滋賀', confirmed_cases: true },
// }

// Recordを使って簡単にアノテーションできる
const covid19Japan:Record<Prefectures, Covid19InfectionInfo> = {
  // 各県が共通のCovid19InfectionInfo型の情報を持っている -> Record型を使ってアノテーション
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 298 },
  Saitama: { kanji_name: '埼玉', confirmed_cases: 2 },
  Shiga: { kanji_name: '滋賀', confirmed_cases: 33 },
}