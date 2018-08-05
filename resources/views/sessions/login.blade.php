<head>
<link href="/css/bootstrap.min.css" rel="stylesheet">

<!-- Font awesome -->
<link href="/css/font-awesome.css" rel="stylesheet">

<!-- Main Inspinia CSS files -->
<link href="/css/animate.css" rel="stylesheet">
<link id="loadBefore" href="css/style.css" rel="stylesheet">

</head>
<div class="middle-box text-center loginscreen  animated fadeInDown">
    <div>
        <div>
            <h1 class="logo-name">ILTS</h1>
        </div>
        <h3>Welcome to ILTS+</h3>
        <p>Perfectly designed FOR tracking and keeping your letters in check!
        </p>
        <p>Login in. To see it in action.</p>
        <form class="m-t" role="form" method="POST" action="/login">
            {{csrf_field()}}
            <div class="form-group">
                <input type="email" name = "email" class="form-control" placeholder="Username" required="">
            </div>
            <div class="form-group">
                <input type="password" name = "password" class="form-control" placeholder="Password" required="">
            </div>
            <button type="submit" class="btn btn-primary block full-width m-b">Login</button>

            <a ui-sref="forgot_password"><small>Forgot password?</small></a>
            <p class="text-muted text-center"><small>Do not have an account?</small></p>
            <a class="btn btn-sm btn-white btn-block" ui-sref="register">Create an account</a>
        </form>
        <p class="m-t"> <small>Institutional Letter Tracking System...@AAiT</small> </p>
    </div>
    @include('layouts.error')
</div>
