<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <title>Document</title>
</head>
<body>
    <div id="main-container" class="main-container">

    </div>    
    <!--Apartado para los scripts-->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
<style>

    body{
        background-color: #efefef;
    }
</style>