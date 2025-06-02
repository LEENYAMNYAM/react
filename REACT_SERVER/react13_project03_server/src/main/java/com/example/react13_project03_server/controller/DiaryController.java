package com.example.react13_project03_server.controller;

import com.example.react13_project03_server.DTO.DiaryDTO;
import com.example.react13_project03_server.service.DiaryServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping("/diary/")
public class DiaryController {

    private final DiaryServiceImpl diaryServiceImpl;

    //추가하기
    @PostMapping("insert")
    public DiaryDTO insert(@RequestBody DiaryDTO dto){
        return diaryServiceImpl.insertDiary(dto);
    }
    //전체보기
    @GetMapping("list")
    public List<DiaryDTO> listAll(){
        return diaryServiceImpl.findAllDiary();
    }
    //수정
    @PutMapping("update/{id}")
    public String update(@PathVariable Long id,
                         @RequestBody DiaryDTO dto){
        log.info("Update diary with id: " + dto.getId());
        log.info("Update diary with date: " + dto.getDate());
        log.info("Update diary with content: " + dto.getContent());
        log.info("Update diary with : " + dto.getContent());
        diaryServiceImpl.updateDiary(dto);
        return "success";
    }

    //삭제
    @DeleteMapping("delete/{id}")
    public String delete(@PathVariable Long id) {
        diaryServiceImpl.deleteDiary(id);
        return "success";
    }



}
