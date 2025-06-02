package com.example.react13_project03_server.service;

import com.example.react13_project03_server.DTO.DiaryDTO;
import com.example.react13_project03_server.entity.DiaryEntity;

import java.util.List;

public interface DiaryService {

    //추가
    DiaryDTO insertDiary(DiaryDTO dto);
    //전체보기
    List<DiaryDTO> findAllDiary();
    //상세보기
    DiaryDTO findDiaryById(Long id);
    //수정하기
    void updateDiary(DiaryDTO dto);
    //삭제하기
    void deleteDiary(Long id);

    default DiaryEntity dtoToEntity(DiaryDTO dto){
        DiaryEntity entity = new DiaryEntity();
        entity.setId(dto.getId());
        entity.setDate(dto.getDate());
        entity.setContent(dto.getContent());
        entity.setEmotionId(dto.getEmotionId());
        return entity;
    }

    default DiaryDTO entityToDto(DiaryEntity entity){
        DiaryDTO dto = new DiaryDTO();
        dto.setId(entity.getId());
        dto.setDate(entity.getDate());
        dto.setContent(entity.getContent());
        dto.setEmotionId(entity.getEmotionId());
        return dto;
    };

}
