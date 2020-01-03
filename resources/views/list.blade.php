@extends('app')

@section('judul', 'To Do List')

@section('form')
    <form>
        <input type="text" name="todo" id="todo"/> 
        <button id="simpan" value="Simpan">Simpan</button>
    </form>
@endsection

@section('list')
    <table border="1" width="200px" id="table">
        @foreach($result as $todo)
            <tr index="{{$todo->id}}">
                <td width="20px"><input type="checkbox" name="todo_item" id="{{$todo->id}}" class="chk"></td>
                <td>{{ $todo->todo }}</td>
            </tr>
        @endforeach
    </table>
    <br>
    <button id="delete" value="Delete Selected">Deleted Selected</button>
@endsection

<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="{{ asset('js/list.js') }}"></script>