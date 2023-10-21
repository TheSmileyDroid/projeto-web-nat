<!DOCTYPE html>
<html>

<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.bundle.js" integrity="sha512-zO8oeHCxetPn1Hd9PdDleg5Tw1bAaP0YmNvPY8CwcRyUk7d7/+nyElmFrB6f7vg4f7Fv4sui1mcep8RIEShczg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://unpkg.com/htmx.org@1.9.6" integrity="sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <title>Projeto WEB & NAT</title>
    <script>
        function loadContent() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("content").innerHTML = this.responseText;
                }
            };
            xhttp.open("GET", "content.php", true);
            xhttp.send();
        }
    </script>
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
        }

        h1 {
            text-align: center;
        }

        h2 {
            text-align: center;
        }

        #content {
            text-align: center;
        }

        .chart {
            max-width: 60%;
            margin: auto;
        }

        @media screen and (max-width: 600px) {
            #content {
                text-align: center;
            }

            .chart {
                max-width: 100%;
                margin: auto;
            }
        }
    </style>

</head>

<body onload="loadContent()">
    <h1>Projeto WEB & NAT</h1>
    <?php

    $log = ini_get('error_log');

    echo "<h2>PHP Version: " . phpversion() . "</h2>";
    ?>
    <div id="content"></div>
    <canvas id="cpu-chart" class="chart"></canvas>
    <canvas id="ram-chart" class="chart"></canvas>
    <script type="text/javascript" src="js/chart.js"></script>
    <script type="text/javascript" src="js/cpu.js"></script>
    <script type="text/javascript" src="js/ram.js"></script>
</body>

</html>