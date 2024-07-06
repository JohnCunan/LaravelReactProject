<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel React Project</title>
        <meta name="csrf-token" content="{{ csrf_token() }}"
    </head>
    @vite('resources/css/app.css')
    <body>
        <div id="root"></div>

        

        @viteReactRefresh
        @vite('resources/js/app.ts')
    </body>

</html>
