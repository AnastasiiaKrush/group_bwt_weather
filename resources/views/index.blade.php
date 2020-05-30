<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Reavel</title>
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
</head>

<body>
<div id="root"></div>
<noscript>
    You need to enable JavaScript to run this app.
</noscript>
@if(env('APP_ENV') === 'local')
    <script src="http://localhost:3000/js/app.js"></script>
@else
    <script src="/js/app.js"></script>
@endif
</body>

</html>
