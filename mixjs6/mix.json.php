<?php
if(0) {
echo file_get_contents("mix.json");
?>

<?php

exit();

}  
//  "gain": 1.38,
echo '{
  "name": "Mix demo",
  "gain": 1.68,
  "position": 0,
  "minTime": 0,
  "maxTime": 512,

  "pan": 0,
 "tracks": [
    ';

$i = 0;
$files = array_slice(scandir(getcwd() . '/sounds/'), 2);
foreach ($files as $key => $value) {

  if(strpos($value, "wav")  > 0 || strpos($value, "mp3") > 0) {
  if ($i !== 0) 
     echo ', ';
   $i++;
        echo '{
      "name": "'. $value .'",
      "path": "sounds\/';
    echo "$value";
    echo '",';
//      "pan": 0,


     echo '"pan": ';


$mixpan = "";
$mixpan = getBetween($value,"mixpan","x");
echo $mixpan;
  if($mixpan == ""){
    //echo '0';
   echo "-1"; // echo rand(0,1)-0.5;
    }


echo ',        "gain": ';

$mixvol ="";
$mixvol = getBetween($value,"mixvol","x");
echo $mixvol;
  if($mixvol == "")
 //   echo '0.01';
 
echo "0.3"; //  echo rand(0,0.1);
echo '
    }
    ';
/*

,
      "gain": 1,

      "muted": false,
      "_muted": false,
      "soloed": false,
      "afl": true

      */

  # code...
    }
}
//      echo 'la.wav';
      echo '
  ]
}
'; ?>



<?php

function getBetween($content,$start = " ",$end = "."){
   $r = explode($start, $content);
   if (isset($r[1])){
       $r = explode($end, $r[1]);
       return $r[0];
   }
   return '';
}

?>