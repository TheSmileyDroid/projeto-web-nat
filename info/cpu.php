<?php
$load = sys_getloadavg();
$cpus = count(file('/proc/stat'));
$cpu_usage = round($load[0] / $cpus * 100, 2);

$result = [
  'cpus_cores' => $cpus,
  'cpu_usage' => $cpu_usage,
];

echo json_encode($result);
