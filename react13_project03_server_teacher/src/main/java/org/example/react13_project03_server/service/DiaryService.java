package org.example.react13_project03_server.service;

import lombok.Data;
import org.example.react13_project03_server.repository.DiaryRepository;
import org.springframework.stereotype.Service;

@Service
@Data
public class DiaryService {

    DiaryRepository diaryRepository;

    //삭제
    public void delete(Long id) {
        diaryRepository.deleteById(id)
    }
}
