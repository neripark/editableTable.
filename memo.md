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


01 未
02 回答待ち
03 ○
04 ×


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



## phpコード
pdoObject.php
```
<?php
	/*$hostname = 'localhost';
	$database = 'sample';
	$username = 'sample';
	$password = 'password';*/


	$hostname = 'localhost';
	$database = 'db_testezura';
	$username = 'root';
	$password = 'password';

	$pdo = new PDO("mysql:dbname={$database};host={$hostname};charset=utf8",$username,$password);
	echo 'よみこみました';
?>
```

db\pdo.php
```
<?php
$items = array(
	1=>array('no'=>1, 'name'=>'ナス'  , 'category'=> 1,'desc'=> '千葉産 4本', 'price'=> 177,'discount'=> 130, 'img'=>'001.jpg'),
	2=>array('no'=>2, 'name'=>'バナナ', 'category'=> 2,'desc'=> '沖縄産 1房', 'price'=> 198,'discount'=> 98,'img'=> '002.jpg'),
	3=>array('no'=>3, 'name'=>'ピーマン', 'category'=> 1,'desc'=> '群馬産 1袋', 'price'=> 147,'discount'=> 130, 'img'=>'003.jpg'),
	4=>array('no'=>4, 'name'=>'トマト' , 'category'=> 1,'desc'=> '栃木産 3個', 'price'=> 298,'discount'=> NULL, 'img'=>'004.jpg')
);

function category_filter($item) {
	$category = $_GET['cat'];
	return $item['category'] == $category;
}
if( isset($_GET['cat']) ){
	$items = array_filter($items,'category_filter');
}

$categories = array(array('category'=>1),array('category'=>2));

$cat_name = array(1=>'やさい',2=>'くだもの');

```


test_db_connect.php

```
<!DOCTYPE HTML>
<html lang="ja">

<head>
	<title>PHPテスト | DB接続</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="./css/test.css">
</head>

<body>
	<div id="wrapper">
		<h1>It works!</h1>
		<?php

			echo '<p>テスト用</p>';

			$kekka_connect = mysql_connect('localhost', 'ezura' ,'aaa01');
			//echo $kekka_connect;
			if (!$kekka_connect){
				//die  phpの処理を中止する。
				die('サーバ接続に失敗しました。' . mysql_error());
			}else{
				echo('サーバ接続成功。' . mysql_error());
			}

			$kekka_dbconnect = mysql_select_db('db_testezura', $kekka_connect);
			if (!$kekka_dbconnect){
				//die  phpの処理を中止する。
				die('DB接続に失敗しました。' . mysql_error());
			}else{
				echo('DB接続成功。' . mysql_error());
			}

			//ルートディレクトリ取れるかチェック
			$directry = $_SERVER['DOCUMENT_ROOT'] . '/image/';
			echo '<p>' . $directry . '</p>';


			//sql文の組み立て
			$SQL = 'select * from TrnTestProduct';

			$result = mysql_query($SQL);

			//echo $result;

			//$row = mysql_fetch_assoc($result)

/*			while ($row = mysql_fetch_assoc($result)){
				echo '<div style="display: table-row;">';
				echo '<p style="display: table-cell;">' . $row['ItemId'] . '</p>';
				echo '<p style="display: table-cell;">' . $row['ItemName'] . '</p>';
				echo '<p style="display: table-cell;">' . $row['ItemPrice'] . '</p>';
				echo '<p style="display: table-cell;">' . $row['ItemPrice_Waribikigo'] . '</p>';
				echo '<p style="display: table-cell;">' . $row['ImgFileName'] . '</p>';
				echo '</div>';
			}*/


		echo '<div class="shouhinArea">';
			while ($row = mysql_fetch_assoc($result)){
				echo '<section class="shouhin-card">';
				echo '<div class="image">';
				$imgName = '';

				//echo $_SERVER['DOCUMENT_ROOT'] . '/image/' . $row['ImgFileName'];

				if (file_exists($_SERVER['DOCUMENT_ROOT'] . '/image/' . $row['ImgFileName'])){
					$imgName = $row['ImgFileName'];
				}else{
					$imgName = 'noImage.jpg';
				}

				//echo $_SERVER['DOCUMENT_ROOT'];
				echo '<img src="./image/' . $imgName . '">';
				echo '</div>';
				echo '<div>';
				echo '<p class="shouhinName">' . $row['ItemName'] . '</p>';
				echo '<p class="price">' . $row['ItemPrice'] . '</p>';
				echo '<p class="price_waribiki">' . $row['ItemPrice_Waribikigo'] . '</p>';
				echo '</div>';
				echo '</section>';
			}
		echo '</div>';


		echo '<dl style="border: solid 1px #333";">';
/*		foreach ($_SERVER as $arg) {

		    if (isset($_SERVER[$arg])) {
		        echo '<dt>'.$arg.'</dt><dd>' . $_SERVER[$arg] . '</dd>' ;
		    }
		    else {
		    	echo '<dt>'.$arg.'</dt><dd> - </dd>' ;
		        //echo '<tr><td>'.$arg.'</td><td>-</td></tr>' ;
		    }
		}*/

		//while ($fruit_name = current($_SERVER)) {
		foreach ($_SERVER as $arg) {
			echo key($_SERVER[$arg]);
			echo $_SERVER[$arg];
		    if (isset($_SERVER[$arg])) {
		        echo '<dt>'.$arg.'</dt><dd>' . $_SERVER[$arg] . '</dd>' ;
		    }
		    else {
		    	echo '<dt>'.$arg.'</dt><dd> - </dd>' ;
		        //echo '<tr><td>'.$arg.'</td><td>-</td></tr>' ;
		    }
		}

		echo '</dl>';


/*
			<section class="shouhin-card">
				<div class="image">
					<img src="./image/ringo.jpg">
				</div>
				<div>
					<p class="shouhinName">商品名商品名商品名商品名</p>
					<p class="price">値段値段値段値段</p>
					<p class="price_waribiki">割引価格</p>
				</div>

			</section>
*/

	/*qiita参考
	$link = mysql_connect('localhost', 'user', 'pass');
	if (!$link) {
	    die('接続失敗です。'.mysql_error());
	}

	$db_selected = mysql_select_db('database_name', $link);
	if (!$db_selected){
	    die('データベース選択失敗です。'.mysql_error());
	}
	*/



		?>




		<div class="shouhinArea">
			<section class="shouhin-card">
				<div class="image">
					<img src="./image/ringo.jpg">
				</div>
				<div>
					<p class="shouhinName">商品名商品名商品名商品名</p>
					<p class="price">値段値段値段値段</p>
					<p class="price_waribiki">割引価格</p>
				</div>

			</section>

			<section class="shouhin-card">
				<div class="image">
					<img src="./image/ringo.jpg">
				</div>
				<div>
					<p class="shouhinName">商品名商品名商品名商品名</p>
					<p class="price">値段値段値段値段</p>
					<p class="price_waribiki">割引価格</p>
				</div>

			</section>

			<section class="shouhin-card">
				<div class="image">
					<img src="./image/ringo.jpg">
				</div>
				<div>
					<p class="shouhinName">商品名商品名商品名商品名</p>
					<p class="price">値段値段値段値段</p>
					<p class="price_waribiki">割引価格</p>
				</div>

			</section>

			<section class="shouhin-card">
				<div class="image">
					<img src="./image/ringo.jpg">
				</div>
				<div>
					<p class="shouhinName">商品名商品名商品名商品名</p>
					<p class="price">値段値段値段値段</p>
					<p class="price_waribiki">割引価格</p>
				</div>

			</section>

			<section class="shouhin-card">
				<div class="image">
					<img src="./image/ringo.jpg">
				</div>
				<div>
					<p class="shouhinName">商品名商品名商品名商品名</p>
					<p class="price">値段値段値段値段</p>
					<p class="price_waribiki">割引価格</p>
				</div>

			</section>
		</div>

	</div><!-- wrapperの終わり -->
</body>

</html>


```
