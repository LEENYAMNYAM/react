package org.example.react13_project03_server.controller;

import org.example.react13_project03_server.service.DiaryService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class DiaryController {

    DiaryService diaryService;

    //삭제
    @DeleteMapping("delete/{id}")
    public String delete(@PathVariable Long id) {
        diaryService.delete(id);
        return "success";
    }
    //수정
}
