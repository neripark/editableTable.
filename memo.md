## 実装todo
- ~~phpのREST APIを叩いてJSONを編集~~
- DBを使う。簡単な１テーブルのみのデータを考える
	- 新規
	- 編集
		- セレクトボックス等のUI
		- バッティング防止策
	- 削除
- フロント側でデータ抽出機能（Vue.js）
- サマリ情報の表示（Vue.js）
- ユーザ情報をcookieに登録→次回から省略
  - 間に合わなければベーシック認証
- index.htmlをdist/配下に移動（あるべき論も含めて調査）

## 実装（できれば）
- ホーム画面画像の用意

## その他メモ
#### テーブルレイアウト

TrnGuestInfo

\#  | 列名  |  データ型  |  主キー
--|---|--
1  | guestId  | Char(4) |  ○
2  | guestName  | varChar(30) |  -
3  | hostName  | varChar(30) |  -
4  | guestGroup  | VarChar(30) |  -
5  | statusId  | Char(2) |  -

MstStatus

\#  | 列名  |  データ型  |  主キー
--|---|--
1  | statusId  | Char(2) |  ○
2  | status  | VarChar(30) |  -


- 01 未
- 02 回答待ち
- 03 ○
- 04 ×


## 学習メモ
- ES6のrequireは、ファイル丸ごと読み込むときに使う。
	- 部分的に使う場合はimport/export.
- Vue.jsは基本的に大元のファイルを読むだけで機能は使えるし、もちろんhtml内にscriptタグを使って読み込んでもいい。
	- これへの代替手段が、webpackを用いたrequire。
	- entry.jsの最初に、あらかじめnpmインストールしたvueをrequireする記述を書く。
	- ``` const Vue = require('vue/dist/vue.js'); ```
		- このように、node_modules/vue/以下のパスもちゃんとかかないといけない。``` const Vue = require('vue'); ``` という書き方だと、node/modules/vue(.js)を探してしまってないと言われてしまう。
			- これは ```webpack.config.js``` のloadersに/node_modules/を指定しているためそういう動きになっている？
- 単一ファイルコンポーネント同士（親子関係なし）の通信が厄介だった。
  - 結果的に ```src/hub.js``` を作成して対応できたが、やり方があっているのか謎だし、```src/index.entry.js``` に直接書くやり方だとなぜか```module.exports```できなかった。（何をexportしても（VueインスタンスとDateインスタンスは試した）渡された側で見ると中身に変化がなかった）
- vue.jsとは直接関係ないが、REST APIからJSONファイルをレコード単位で更新するやり方が不明。
  - よくよく考えてみれば、JSONは単なるテキストファイルなのでデータベース的な使い方には不向き。→RDBMSを使用したデータ管理に切り替える。バックエンドの知識と経験ほしい...
- webpack.config.js の書き方は要練習。リファレンスを読む力...
