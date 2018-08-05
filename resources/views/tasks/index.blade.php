<!DOCTYPE html>
<html lang="en">
<head>
    </head>
<body>
@foreach($tasks as $task)
    <li>
        {{$task->name}}
    </li>
@endforeach
</body>
</html>