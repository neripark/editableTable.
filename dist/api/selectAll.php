<?php
require_once("pdo.php");

/************************
sql
*************************/
$selectSql = "SELECT
 G.guestId,
 G.guestName,
 G.hostName,
 G.guestGroup,
 G.statusId,
 S.status
 FROM `TrnGuestInfo` G
 LEFT OUTER JOIN `MstStatus` S
 ON G.statusId = S.statusId;
";

/************************
実行
*************************/
try {
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
