<head>
    <link href="/css/bootstrap.min.css" rel="stylesheet">

    <!-- Font awesome -->
    <link href="/css/font-awesome.css" rel="stylesheet">


    <link href="/css/animate.css" rel="stylesheet">
    <link id="loadBefore" href="css/style.css" rel="stylesheet">

</head>
<div class="middle-box text-center loginscreen   animated fadeInDown">
    <div>
        <div>
            <h1 class="logo-name">ILTS+</h1>

        </div>
        <h3>Register to ILTS+</h3>
        <p>Create account to see it in action.</p>
        <form class="m-t" method="POST" action="/register" role="form">
            {{csrf_field()}}
            <div class="form-group">
                <input type="text" name = "name" class="form-control" placeholder="Name" required="">
            </div>
            <div class="form-group">
                <input type="email" name = "email" class="form-control" placeholder="Email" required="">
            </div>
            <div class="form-group">
                <input type="password" name = "password" class="form-control" placeholder="Password" required="">
            </div>
            <div class="form-group">
                <div class="checkbox i-checks"><label> <input type="checkbox"><i></i> Agree the terms and policy </label></div>
            </div>
            <button type="submit" class="btn btn-primary block full-width m-b">Register</button>

            <p class="text-muted text-center"><small>Already have an account?</small></p>
            <a class="btn btn-sm btn-white btn-block" href="login.html">Login</a>
        </form>
        <p class="m-t"> <small>Institutional Letter Tracking System...@AAiT</small> </p>
    </div>
</div>
