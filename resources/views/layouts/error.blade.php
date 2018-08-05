@if(count($errors))
<div class="form-group">
<div class="alert alert-danger">
@foreach($errors->all() as $error)
    <li>{{$error}}</li>
@endforeach
</div>
</div>
@endif