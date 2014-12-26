<?php
$link = mysql_connect ( SAE_MYSQL_HOST_M . ':' . SAE_MYSQL_PORT, SAE_MYSQL_USER, SAE_MYSQL_PASS );
if ($link) {
    //echo "connect database success";
    mysql_select_db ( app_jzone, $link );
    mysql_set_charset("gbk");
    $sql = "select * from articles";
    $result = mysql_query ( $sql );
    $i = 0;
    while ( $row = mysql_fetch_array ( $result, MYSQL_NUM ) ) {
        
        $list = array("id"=>$row[0],"title"=>$row[1],"date"=>$row[2],"summary"=>$row[3],"content"=>$row[4]);
        $users[$i] = $list; 
        $i++;
        
    }
 echo json_encode($users);
    mysql_free_result ( $result );
} else {
    echo "数据库连接KO";
}

mysql_close(); 
?>