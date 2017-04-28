<?php
/**
 * Desc: php操作mysql的封装类
 * Author lichunxia
 * Date: 2017/02/28
 * 连接模式：PDO
 */
//$dbh = new PDO('mysql:host=localhost;dbname=test', ‘root', ”);
class Dbmysql {
	private $dbms='mysql';
    private $host='localhost';
    private $user="root";
    private $pass="root";
    private $dbname="db_zan";
    private $conn="";
    public function __construct($host,$user,$pass,dbname){
    	$this->host=$host;
    	$this->user=$user;
    	$this->pass=$pass;
    	$this->dbname=$dbname;
    }
    function connect(){
    	$this->conn=new PDO($dbms+:host="+$this->host+";dbname="+$this->dbname,$this->user,$this->pass);
    }
}
?>
