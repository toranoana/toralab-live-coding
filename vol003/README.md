# とらのあなラボ ライブコーディング Vol. 3

「TailwindCSSでdaisyUIを試してみる」というテーマで作成したソースコードです。

ライブコーディングの様子は下記のリンクからご覧いただけます。

[YouTubeリンク](https://youtu.be/4q2xdEP14as)

# Blogトップ

## 完成イメージ

![](./screenshot-01.png)

## 作成手順

```sh
mkdir blog-top
cd blog-top
npm init
npx storybook init --type html --builder webpack5 # 5は起動も早い
code-insiders .
```

```sh
npm run storybook
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest @storybook/addon-postcss
npx tailwindcss init -p
# tailwind.config.js に content: ["./stories/**/*.{js,ts,jsx,tsx,mdx}"],へ変更
```

以下を追記する

.storybook/main.js
```js
module.exports = {
  addons: [
    // ...
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  // ...
};
```

stories/Introduction.stories.mdx
```mdx
import "tailwindcss/tailwind.css";
```

```
npm run storybook
```

Daisy UIを入れる https://daisyui.com/ https://daisyui.com/components/

```
npm install -D daisyui
```

tailwind.config.jsの内容を変更
```
plugins: [require("daisyui")],
```

もう一回起動する

```
npm run storybook
```

https://daisyui.com/components/


toralabのトップから持ってくる、画像ダウンロードする

https://yumenosora.co.jp/tora-lab


トップ画像を背面にabsoluteで置く

→方針転換

npm install -D tailwindcss@latest postcss@latest autoprefixer@latest concurrently daisyui

tailwind.config.jsに`"./public/**/*.{js,html}"`を追記

package.jsonの内容へ追記
```json

    "dev": "concurrently \"npm run server\" \"npm run dev:tw\"",
    "dev:tw": "npx tailwindcss -i ./public/css/tailwind.src.css -o ./public/css/tailwind.dist.css --watch --jit",
    "build": "npx tailwindcss -i ./public/css/tailwind.src.css -o ./public/css/tailwind.dist.css --jit",
    "clean": "npx clear-npx-cache",
    "server": "npx http-server ./public -c-1 -p 18080",
    "init": "npx tailwindcss init",
    "init:full": "npx tailwindcss init tailwindcss-config.full.js --full",
    "init:postcss": "npx tailwindcss init --postcss"

```

mkdir -p public/css

tailwind.src.css

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

public/index.htmlを作成

npm run dev

```
bg-[url('./image/top_keyvisual_05.webp')]

```


## 参考文献

https://storybook.js.org/docs/html/get-started/install


## 他のUIコンポーネント

https://preline.co/

https://tailblocks.cc/

