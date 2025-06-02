package com.example.react10_board_server.controller;

import com.example.react10_board_server.entity.Board;
import com.example.react10_board_server.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class BaordController {

    private final BoardService boardService;

    //추가하기
    @PostMapping("insert")
    public Board insert(@RequestBody Board board) {
        return boardService.insert(board);
    }

    //전체보기
    @GetMapping("list")
    public List<Board> list(){
        return boardService.findAll();
    }

    //삭제
    @DeleteMapping("delete/{num}")
    public void Delete(@PathVariable Long num){
        boardService.remove(num);
    }

}
