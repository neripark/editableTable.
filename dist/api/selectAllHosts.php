<?php
require_once("pdo.php");

/************************
sql
*************************/
$selectSql = "SELECT hostName as 'name', TRUE as 'show' FROM TrnGuestInfo GROUP BY hostName;";

/************************
実行
*************************/
try {
 $response = $pdo->query($selectSql);
 while($row = $response->fetch(PDO::FETCH_ASSOC)){
   $userData[]=array(
   'name'=>$row['name'],
   'show'=>(bool)$row['show']
   );
 }

 //レスポンスを返す
 header('Content-type: application/json');
 echo json_safe_encode($userData);

} catch (\Exception $e) {
 echo $e->getMessage();
}
