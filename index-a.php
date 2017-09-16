<?php
  # Developer Benedict Asamoah
 
  require 'vendor/slim/slim/Slim/Slim.php';
  \Slim\Slim::registerAutoloader();
  $app = new \Slim\Slim();
        $app->get('/',function (){
    require 'views/home.php';
  });
        $app->get('/api-documentation',function (){
    require 'views/api.php';
  });
         $app->get('/api',function (){
    require 'views/api.php';
  });
         $app->get('/products',function (){
    require 'views/products.php';
  });
      $app->get('/payments',function (){
    require 'views/payments.php';
  });
      $app->get('/transfer',function (){
    require 'views/transfer.php';
  });
      $app->get('/jobs',function (){
    require 'views/jobs.php';
  });
      $app->get('/customers',function (){
    require 'views/customers.php';
  });
         $app->get('/about',function (){
    require 'views/about.php';
  });
         $app->get('/merchant',function (){
    require 'views/merchant.php';
  });  
$app->get('/api/currency/convert/:amount/:from/:to', function ($amount,$from,$to) {
    $app = \Slim\Slim::getInstance();
        try 
            {          
               /* $url  = "https://www.google.com/finance/converter?a=$amount&from=$from&to=$to";
                $data = file_get_contents($url);
                preg_match("/<span class=bld>(.*)<\/span>/",$data, $converted);
                $converted = preg_replace("/[^0-9.]/", "", $converted[1]);
                echo round($converted, 3);*/

function currencyConverter($currency_from,$currency_to,$currency_input){
    $yql_base_url = "http://query.yahooapis.com/v1/public/yql";
    $yql_query = 'select * from yahoo.finance.xchange where pair in ("'.$currency_from.$currency_to.'")';
    $yql_query_url = $yql_base_url . "?q=" . urlencode($yql_query);
    $yql_query_url .= "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    $yql_session = file_get_contents($yql_query_url);
    $yql_json =  json_decode($yql_session,true);
    $currency_output = (float) $currency_input*$yql_json['query']['results']['rate']['Rate'];

    return $currency_output;
}

 $currency_input = $amount;
 //currency codes : http://en.wikipedia.org/wiki/ISO_4217
 $currency_from = $from;
 $currency_to = $to;
 $currency = currencyConverter($currency_from,$currency_to,$currency_input);

 echo $currency_input.' '.$currency_from.' = '.$currency.' '.$currency_to;

            } catch(PDOException $e) {
                $app->response()->setStatus(404);
                echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
  
    });


     $app->get('/tt',function (){
      #Database Initiator 
  $host = 'localhost';
  $db   = 'evawa';
  $username = 'evawa_ipo';
  $key = '?nuf4wfVvoNRH+C';
  $charset = 'utf8';
  $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
  $opt = [
      PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
      PDO::ATTR_EMULATE_PREPARES   => false,
  ];
  $pdo = new PDO($dsn, $username, $key, $opt);
 
      $sth = $pdo->prepare('SELECT * FROM merchants');
       $sth->execute();
      echo $sth->rowCount();
      $t=time();
      echo '--'.$t;
});
  $app->run();  


?>