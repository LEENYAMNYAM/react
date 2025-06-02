package com.example.react_11_phone_server.service;

import com.example.react_11_phone_server.entity.Phone;
import com.example.react_11_phone_server.repository.PhoneRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PhoneService {

    private final PhoneRepository phoneRepository;

    //추가
    public Phone insert(Phone phone){
        return phoneRepository.save(phone);
    }
    //전체보기
    public List<Phone> findAll(){
        return phoneRepository.findAll();
    }

    //삭제하기
    public void delete(Long id){
        phoneRepository.deleteById(id);
    }
}
