<?php
require_once("pdo.php");

/************************
sql
*************************/
$selectSql = "SELECT hostName as 'hostName' FROM TrnGuestInfo GROUP BY hostName;";

/************************
実行
*************************/
try {
 $response = $pdo->query($selectSql);
 while($row = $response->fetch(PDO::FETCH_ASSOC)){
   $userData[]=array(
   'hostName'=>$row['hostName']
   );
 }

 //レスポンスを返す
 header('Content-type: application/json');
 echo json_safe_encode($userData);

} catch (\Exception $e) {
 echo $e->getMessage();
}
