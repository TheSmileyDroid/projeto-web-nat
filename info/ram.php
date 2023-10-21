<?php
// Get RAM usage

$free = shell_exec('free');
$free = (string)trim($free);
$free_arr = explode("\n", $free);
$mem = explode(" ", $free_arr[1]);
$mem = array_filter($mem);
$mem = array_merge($mem);
$memory_usage = round($mem[2] / $mem[1] * 100, 2);

echo json_encode(array('memory_usage' => $memory_usage));
