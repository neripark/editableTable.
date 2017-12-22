<?php
$dsn = "mysql:dbname=test;host=localhost;charset=utf8mb4";
$username = "root";
$password = "";
$selectSql = "SELECT
 G.guestId,
 G.guestName,
 G.hostName,
 G.guestGroup,
 G.statusId,
 S.status
 FROM `TrnGuestInfo` G
 LEFT OUTER JOIN `MstStatus` S
 ON G.statusId = S.statusId;";

$driver_options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

//接続とデータ取得
try {
  $pdo = new PDO($dsn, $username, $password, $driver_options);
  $response = $pdo->query($selectSql);

  while($row = $response->fetch(PDO::FETCH_ASSOC)){
    $userData[]=array(
    'guestId'=>$row['guestId'],
    'guestName'=>$row['guestName'],
    'hostName'=>$row['hostName'],
    'guestGroup'=>$row['guestGroup'],
    'statusId'=>$row['statusId'],
    'status'=>$row['status']
    );
  }

  //レスポンスを返す
  header('Content-type: application/json');
  echo json_safe_encode($userData);

} catch (\Exception $e) {
  echo $e->getMessage();
}

//変換関数
function json_safe_encode($data){
    return json_encode($data, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT);
}
