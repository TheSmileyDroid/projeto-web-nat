<?php
$load = sys_getloadavg();
$cpus = count(file('/proc/stat'));
$cpu_usage = round($load[0] / $cpus * 100, 2);

$free = shell_exec('free');
$free = (string)trim($free);
$free_arr = explode("\n", $free);
$mem = explode(" ", $free_arr[1]);
$mem = array_filter($mem);
$mem = array_merge($mem);
$memory_usage = round($mem[2] / $mem[1] * 100, 2);


$result = [
	'cpus_cores' => $cpus,
	'cpu_usage' => $cpu_usage,
	'memory_usage' => $memory_usage,
	'mem_total' => $mem[1],
	'mem_free' => $mem[2],
];

echo json_encode($result);
