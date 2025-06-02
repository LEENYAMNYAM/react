package com.example.react10_board_server.service;

import com.example.react10_board_server.entity.Board;
import com.example.react10_board_server.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {
    private final BoardRepository boardRepository;

    //추가
    public Board insert(Board board) {
        return boardRepository.save(board);
    }
    //전체보기
    public List<Board> findAll(){
        return boardRepository.findAll();
    }

    //삭제하기
    public void remove(Long num){
        boardRepository.deleteById(num);
    }
}
