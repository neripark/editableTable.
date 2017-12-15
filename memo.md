## 実装todo
- phpのREST APIを叩いてJSONを編集
	- 新規
	- 編集
		- セレクトボックス等のUI
		- バッティング防止策
	- 削除
- フロント側でデータ抽出機能（Vue.js）
- サマリ情報の表示（Vue.js）
- ユーザ情報をcookieに登録→次回から省略

## 実装（できれば）
- ホーム画面画像の用意

## 学習メモ
- ES6のrequireは、ファイル丸ごと読み込むときに使う。
	- 部分的に使う場合はimport/export.
- Vue.jsは基本的に大元のファイルを読むだけで機能は使えるし、もちろんhtml内にscriptタグを使って読み込んでもいい。
	- これへの代替手段が、webpackを用いたrequire。
	- entry.jsの最初に、あらかじめnpmインストールしたvueをrequireする記述を書く。
	- ``` const Vue = require('vue/dist/vue.js'); ```
		- このように、node_modules/vue/以下のパスもちゃんとかかないといけない。``` const Vue = require('vue'); ``` という書き方だと、node/modules/vue(.js)を探してしまってないと言われてしまう。
			- これは ```webpack.config.js``` のloadersに/node_modules/を指定しているためそういう動きになっている？
	- 