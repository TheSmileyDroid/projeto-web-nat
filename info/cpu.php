<?php
$load = sys_getloadavg();
$cpus = 8;
$cpu_usage = round($load[0] / $cpus * 100, 2);
echo json_encode(array('cpu_usage' => $cpu_usage));
