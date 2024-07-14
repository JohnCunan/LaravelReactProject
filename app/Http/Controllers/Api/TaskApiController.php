<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Task;


class TaskApiController extends Controller
{
    protected $todoModel;
    function __construct(){
        $this->todoModel = new Task();
    }

    public function saveTask(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:25',
            'description'=> 'required|string'
        ]) ;

        if($validator->fails()){
            return response()->json(['error', $validator->errors()],422);
        }

        $this->todoModel->createTask([
            'title' => $request->title,
            'description'=> $request->description
        ]);

        return response()->json(['message'=> 'Task Added'], 200);
    }

    public function getAllTask(){
        return response()->json(['data' => $this->todoModel->getTaskList()], 200);
    }

    public function markAsDone($taskId){
        $isUpdated = $this->todoModel->markAsDone($taskId);

        if($isUpdated){
            return response()->json(['message'=> 'Task Updated']);
        }

        return response()->json(['Error'=> 'Failed to update task'], 422);
    }

    public function deleteTask($taskId){
        $isDeleted= $this->todoModel->deleteTask($taskId);

        if($isDeleted){
            return response()->json(['message'=> 'Task Deleted']);
        }

        return response()->json(['Error'=> 'Failed to delete task'], 422);

    }

}
