package com.example.react_11_phone_server.controller;

import com.example.react_11_phone_server.entity.Phone;
import com.example.react_11_phone_server.service.PhoneService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/phone/")
public class PhoneController {

    private final PhoneService phoneService;

    //추가
    @PostMapping("insert")
    public Phone insert(@RequestBody Phone phone) {
        return phoneService.insert(phone);
    }

    //전체보기
    @GetMapping("list")
    public List<Phone> list(){
        return phoneService.findAll();
    }

    //삭제하기
    @DeleteMapping("delete/{id}")
    public void delete(@PathVariable Long id){
        phoneService.delete(id);
    }
}
