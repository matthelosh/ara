<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  {{-- <link href="{{ mix('css/app.css') }}" rel="stylesheet" /> --}}
  <link href="{{ mix('css/styles.css') }}" rel="stylesheet" />

  <title>SD Negeri 1 Bedalisodo</title>

  <!-- Favicon -->
  <link rel="shortcut icon" href="{{ asset('images/logo-new.svg') }}">
  <link rel="preconnect" href="https://fonts.gstatic.com" />

  <!-- Font -->
  {{-- <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" /> --}}
  
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500&family=Satisfy&display=swap" rel="stylesheet">
  
  <script src="{{ asset(mix('js/app.js')) }}" defer></script>
  <style>
    html,body{
      margin: 0;
    }
  </style>
  @inertiaHead
</head>

<body>
  <noscript>
    <strong>We're sorry but Materio - Vuetify Vuejs Admin Template doesn't work properly without JavaScript enabled.
      Please enable it to continue.</strong>
  </noscript>
  @routes
    @inertia
</body>

</html>
